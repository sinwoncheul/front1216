<template>
  <div class="container">
    <h3>상품등록</h3>
    <h4 />
  </div>

  <div>
    <input type="button" @click="handleinsert" value="상품등록" />
    <input type="button" @click="handleSelect" value="등록한상품조회" />
    <hr />
    <div v-if="menu === 2">
      <table>
        <tbody>
          <tr v-for="image in count" v-bind:key="image">
            <td class="text-left">상품이미지</td>
            <img
              :src="`/HOST/product/Detailselect_image?no=${image.productnameno}`"
              style="width: 100px; height: 100px" />
            <td>
              <ul class="list-group list-group-flush">
                <li class="list-group-item">
                  <label style="margin-right: 50px">상품소개 : </label
                  >{{ image.producttitle }}
                </li>
                <li class="list-group-item">
                  <label style="margin-right: 50px">상품내용 : </label
                  >{{ image.productcontent }}
                </li>
                <li class="list-group-item">
                  <label style="margin-right: 50px">상품가격 : </label
                  >{{ image.productprice }}
                </li>
                <li class="list-group-item">
                  <label style="margin-right: 50px">상품수량 :</label
                  >{{ image.productquantity }}
                </li>
                <hr/>
              </ul>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <div v-if="menu === 1">
      <table>
        <tr >
          <td><input type="text" v-model="producttitle" placeholder="상품명" class="sty1"/></td>
          <td><input type="text" v-model="productcontent" placeholder="상품내용" class="sty1"/></td>
          <td><input type="text" v-model="productprice" placeholder="상품가격" class="sty1"/></td>
          <td><input type="text" v-model="productquantity" placeholder="상품수량" class="sty1"/></td>
          <td><input type="file" id="file" ref="file" @change="handleImage($event)"/></td>
        </tr>
      </table>
      <input type="button" @click="count = count + 1" value="항목추가" />
      <input type="button" @click="handleMinus" value="항목삭제" />
      <input type="button" @click="handleInsert" value="등록하기" />
    </div>

    <div v-else-if="menu === 2">
      <table>
        <tr v-for="(item, idx) in items" v-bind:key="item">
          <td><input type="checkbox" v-model="chks" :value="idx" /></td>
          <td><input type="text" v-model="item._id" class="sty1" /></td>
          <td><input type="text" v-model="item.title" class="sty1" /></td>
          <td><input type="text" v-model="item.content" class="sty1" /></td>
          <td><input type="text" v-model="item.price" class="sty1" /></td>
          <td><input type="text" v-model="item.quantity" class="sty1" /></td>
          <td>
            <input
              type="button"
              @click="handleUpdateImage(item._id)"
              value="이미지"
            />
          </td>
        </tr>
      </table>
      <el-pagination
        background
        layout="prev, pager, next"
        :total="pages"
        @current-change="handleCurrentChange"
      ></el-pagination>
      <input type="button" @click="handleDelete" value="삭제" />
      <input type="button" @click="handleUpdate" value="수정" />
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  methods: {
    handleImage(e) {
      this.files = e.target.files[0];
      console.log(this.files);
    },
    async handleUpdateImage(code) {
      console.log(code);
      this.code = code;
      // 다이얼로그 띄우기
      this.dialogVisible = true;
    },

    async handleinsert(){
      this.menu = 1
    },

    async handleUpdate() {
      const ret = confirm("정말 수정 할까요?");

      if (ret) {
        const url = ``;
        const headers = { "Content-Type": "application/json" };

        var code = [];
        var title = [];
        var content = [];
        var price = [];
        var quantity = [];
        for (let i = 0; i < this.chks.length; i++) {
          const idx = this.chks[i]; // 체크된 위치
          code.push(this.items[idx]._id);
          title.push(this.items[idx].title);
          content.push(this.items[idx].content);
          price.push(this.items[idx].price);
          quantity.push(this.items[idx].quantity);
        }

        const body = {
          code: code,
          title: title,
          content: content,
          price: price,
          quantity: quantity,
        };

        const response = await axios.put(url, body, { headers });
        console.log(response);
        if (response.data.ret === 1) {
          await this.handleSelect();
          this.chks = []; // 체크박스 전체 해제
        }
      }
    },

    async handleDelete() {
      const ret = confirm("정말 삭제 할까요?");
      if (ret) {
        // chks => [ 0, 2, 1 ]
        var arr = [];
        for (let i = 0; i < this.chks.length; i++) {
          const idx = this.chks[i]; // 0번째, 2번째, 1번째
          arr.push(this.items[idx]._id);
        }

        const url = ``;
        const headers = { "Content-Type": "application/json" };
        const data = { code: arr };

        //{data: {code:arr}} {headers:{ "Content-Type" : "application/json" }}
        const response = await axios.delete(
          url,
          { data: data },
          { headers: headers }
        );
        // const response = await axios.delete(url, {data:data,headers:headers});
        console.log(response);
        if (response.data.ret === 1) {
          await this.handleSelect();
        }
      }
    },

    async handleCurrentChange(val) {
      this.page = val;
      await this.handleSelect();
    },

    async handleSelect() {
      this.menu = 2;

      const url = `/HOST/product/Detailselect.json`;
      const headers = { "Content-Type": "application/json" };
      const response = await axios.get(url, { headers });
      console.log(response.data);

      if (response.data.status === 200) {
        this.count = response.data.list;
        console.log(this.count);
      }
    },

    async handleInsert() {
      const headers = { "Content-Type": "application/json" };
      const url = `/HOST/product/Detailinsert.json`;
      const body = {
        producttitle: this.producttitle,
        productcontent: this.productcontent,
        productprice: this.productprice,
        productquantity: this.productquantity,
      };
      //   const formData = new FormData();
      //   formData.append("file", this.files);

      const response = await axios.post(url, body, headers);
      console.log(response);

      const url1 = `/HOST/product/insert_image.json?productnameno=1`;
      const headers1 = { "Content-Type": "multipart/form-data" };
      const formData = new FormData();
      formData.append("file", this.files);
      console.log(formData);

      const response1 = await axios.post(url1, formData, { headers1 });
      console.log(response1);
        this.$router.push({ path: "/home" });
    },
  },

  // 항목 삭제
  handleMinus() {
    this.count = this.count - 1;
    if (this.count < 1) {
      this.count = 1;
    }
  },

  data() {
    return {
      productno: [],
      menu: "",
      count: 1,
      producttitle: "",
      productcontent: "",
      productprice: "",
      productquantity: "",
      image: [],
      image33: [],
      files: "",
      items: [],
      page: 1, // 처음시작 페이지 번호
      pages: 100, // 전체 물품수 임의의로 100

      chks: [], // 체크박스의 체크된 위치(0부터시작)
      dialogVisible: false, // 다이얼로그 표시유무
      code: 0, // 이미지 클릭시 저장되는 코드값

      img: [], // 메인이미지, 서브이미지3개 보관
    };
  },
};
</script>

<style scoped>
.sty1 {
  width: 70px;
}
</style>
