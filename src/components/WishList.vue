<template>
  <div class="container">
    <div style="margin-top:30px;" >
      <h4 class="sub-header">위시리스트</h4>
      <div class="table-responsive">
        <table class="table table-striped" style="border: 1px solid rgb(139, 126, 126)">
          <thead>
            <tr>
                <th><input type="checkbox" v-model="allcheckbox" @click="allcheckbox1">전체선택</th>
                <th colspan="2">상품정보</th>
                <th class="w130">단가</th>
                <th class="w130">수량</th>
                <th class="w130">상품금액</th>
                <th class="w100">주문</th>
                <th></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in wishlist" v-bind:key="item" >
              <td><input type="checkbox" v-model="chks" :value="item.PRODUCT_NO" /></td>
              <td><img :src="`/HOST/wish/wishselect_image?no=${item.PRODUCT_NO}`" style="width:300px;height:150px" /></td>
              <td>{{item.PRODUCT_CONTENT}}</td>
              <td>{{item.DELIVERYPAY}}</td>
              <td>{{item.PRODUCT_QUANTITY}}</td>
              <td>{{item.PRODUCT_TITLE}}</td>
              <td>{{item.PRODUCT_TOTALPRICE}}</td>
              <td style="width:200px;"><button @click="handlewishdelete(item.WISH_NO)">삭제하기</button><button>장바구니 담기</button></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>


<script>
  import axios from "axios";

  export default {
      data () {
        return {
          allcheckbox : false,
          checkbox    : "",
          wishlist    : [],
          token       : sessionStorage.getItem("TOKEN1"),
        }
      },  

      created(){
        this.handlewishlist();
      },
      
      methods : {
        async handlewishlist(){
          const url = `/HOST/wish/selectwish.json`;
          const headers = {"Content-Type": "application/json", "token":this.token};
          const response = await axios.get(url, {headers:headers});

          console.log('WishList.vue => handlewishlist');
          console.log(response.data.wishlist);

          if(response.data.status === 200) {
            this.wishlist = response.data.wishlist;
          }
        },

        async handlewishdelete(no) {
          console.log(no);
          if(confirm("삭제할까요?")){
            const url = `/HOST/wish/wish_delete?no=`+no;
            const headers = { "Content-Type": "application/json"};

            const response =  await axios.delete(url, {
                headers: { headers },
                data: { }
            });

            console.log('WishList.vue => handlewishdelete');
            if(response.data.status === 200){
              await this.handlewishlist();
            }
          }
        },

        allcheckbox1() {
          if(this.allcheckbox == true) {
            this.checkbox == true;
          } 
          else {
            this.allcheckbox == false;
          }
        }
      },

  };
</script>


<style scoped>

</style>