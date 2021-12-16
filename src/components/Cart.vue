<template>
  <div class="container">
    <div style="margin-top:30px; margin-bottom:30px;" >
      <h4 class="sub-header">장바구니 목록</h4>

      <div class="table-responsive">
        <table class="table table-striped" style="border: 1px solid rgb(139, 126, 126)">
          <thead>
            <tr>
              <th>체크</th>
              <th></th>
              <th>상품명</th>
              <th class="w130">가격</th>
              <th class="w130">수량</th>
              <th class="w130">배송</th>
              <th class="w100">날짜</th>
            </tr>
          </thead>

          <tbody>
            <tr v-for="item in items" v-bind:key="item">
              <td><input type="checkbox" v-model="chks" :value="item.PRODUCT_NO" /></td>
              <td><img :src="`/HOST/cart/cartselect_image?no=${item.PRODUCT_NO}`" style="width:300px;height:150px" /></td>
              <td>{{item.PRODUCT_TITLE}}</td>
              <td>{{Math.round(item.PRODUCT_TOTALPRICE*0.8)}}</td>
              <td>{{item.PRODUCT_QUANTITY}}</td>
              <td>{{item.DELIVERYPAY}}</td>
              <td>{{item.PRODUCT_DATE}}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <a href="#" @click="handleOrder()" class="primary-btn order-submit">주문하기</a>
    </div>
  </div>
</template>


<script>
  import axios from 'axios';

  export default {
    data () {
      return {
        items     : "",
        token     : sessionStorage.getItem("TOKEN1"),
        chks      : [],
      }
    },  

    async created(){
      this.cartList();
    },

    methods : {
      async cartList(){
        const url = `/HOST/cart/selectcart.json`
        const headers = { "Content-Type": "application/json", "token" : this.token};
        const response = await axios.get(url, {headers:headers});

        console.log('cartList');
        console.log(response.data);

        if (response.data.status === 200){
          this.items = response.data.list;
        }
      },

      async handleOrder() {
        this.$router.push({ path: "/test" });
        console.log(this.chks);
      }
    },

  };
</script>

<style scoped>

</style>