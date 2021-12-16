<template>
		<div class="section">

			<div class="container">
				<div class="row">
					<div id="aside" class="col-md-3">
						<div class="aside">
							<h3 class="aside-title">카테고리</h3>

							<div class="checkbox-filter">
								<div class="input-checkbox" v-for="(item,idx) in cate" v-bind:key="item">
									<label  style="font-size:14px"  :for="`category_${idx}`" @click="changeMenu(idx)">
										<span></span><strong>{{item}}</strong> <small>({{catecnt[idx]}})</small>
									</label>
								</div>
							</div>
						</div>
					</div>


					<div id="store" class="col-md-9">
						<div class="store-filter clearfix">
							<div class="store-sort">
								<label>
									정렬기준 : 
									<select class="input-select">
										<option value="0">인기순</option>
										<option value="1">가격순</option>
									</select>
								</label>

								<label>
									표시개수 :
									<select class="input-select">
										<option value="0">12</option>
										<option value="1">15</option>
									</select>
								</label>
							</div>
							<ul class="store-grid">
								<li class="active"><i class="fa fa-th"></i></li>
								<li><a href="#"><i class="fa fa-th-list"></i></a></li>
							</ul>
						</div>


						<div v-for="(item, idx) in items" v-bind:key="item">
							<div :class="[(idx+1) % 3 === 0 ? 'row' : '']">
								<div  class="col-md-4 col-xs-6">
									<div class="product" style="cursor:pointer;">
										<div class="product-img" @click="orderPage(item.productno)">
											<img :src="`/HOST/product/myselect_image?productno=${item.productno}`" alt="">
											<div class="product-label">
												<span class="sale">-20%</span>
												<span class="new">NEW</span>
											</div>
										</div>
										<div class="product-body">
											<p class="product-category">상품소개</p>
											<h3 class="product-name"><a href="#">{{item.producttitle}}</a></h3>
											<h4 class="product-price">{{Math.round(item.producttotalprice*0.8)}}원 <del class="product-old-price">{{item.producttotalprice}}원</del></h4>
											<div class="product-btns">
												<button class="add-to-wishlist"><i class="fa fa-heart-o" @click="handleAddWish(item.productno)"></i><span class="tooltipp">위시리스트 추가</span></button>
												<button class="quick-view"><i class="fa fa-eye"></i><span class="tooltipp">미리보기</span></button>
												<button class="add-to-cart-btn" @click="handleAddCart(item.productno)"><i class="fa fa-shopping-cart"></i><span class="tooltipp">카트추가</span></button>
											</div>
										</div>
										<div class="add-to-cart">
											<button class="add-to-cart-btn" @click="orderPage(item.productno)"><i class="fa fa-shopping-cart"></i> 주문하기</button>
										</div>
									</div>
								</div>
							</div>
						</div>


						<div class="store-filter clearfix">
							<span class="store-qty">12개씩 표시</span>
							<ul class="store-pagination" >
								<li><a href="#"><i class="fa fa-angle-left"></i></a></li>
								<li class="" v-for="index in pages" :key="index"><a href="#" @click="handleSelect(index)">{{index}}</a></li>
								<li><a href="#"><i class="fa fa-angle-right"></i></a></li>
							</ul>
						</div>
					</div>

				</div>
			</div>
		</div>
</template>


<script>
	import axios from "axios";

    export default {
		created(){
			this.changeMenu(0);

		},

		mounted() {
			this.handleProductCount();
		},

        data() {
			return {
				items 	: [],
				cate  	: ['전체', '삼성','엘지','애플', '현대', '인텔'],
				menu 	: 0,
				pages 	: 5,
				catecnt : [],
				token : sessionStorage.getItem("TOKEN1"),
			}
		},

		methods:{

			async handleProductCount(){
				const url = "/HOST/product/select_category_product_count.json";
				const headers = { "Content-Type": "application/json"};
				const response = await axios.get(url, {headers:headers});
				console.log('상품수량');
				console.log(response.data);

				if(response.data.status === 200) {
					this.catecnt = response.data.list;
					console.log(this.catecnt);
				}
			},

			changeMenu(idx) {
				this.menu = idx;
				console.log(this.cate[this.menu]);
				this.handleSelect(1);
			},

			async handleSelect(page){
				let searchtext = this.cate[this.menu];
				if(this.menu === 0){
					searchtext = "";
				}

				const url = "/HOST/product/select_category_product.json?page=" + page + "&producttitle=" + searchtext + "&productcontent=1";
				const headers = { "Content-Type": "application/json"};
				const response = await axios.get(url, {headers:headers});
				console.log('상품목록');
				console.log(response.data);

				if(response.data.stauts === 200){
					this.items = response.data.producttitlelist; 
					this.pages = response.data.productpages
				}
			},

			async orderPage(no){
				this.$router.push({path:'/contentcompany', query:{no:no}});
			},

			async handleAddCart(no){
				const url = "/HOST/cart/insertcart.json?no="+no;
				const headers = { "Content-Type": "application/json",  "token" : this.token};
				const response = await axios.put(url, {}, {headers:headers});
				console.log('handleAddCart');
				console.log(response.data);
				if(response.data.status === 200) {
					this.$emit('handleCartCount');
				}
			},

			async handleAddWish(no){
				const url = "/HOST/wish/wish_hit_Put.json?no=" + no;
				const headers = { "Content-Type": "application/json",  "token" : this.token};
				const response = await axios.put(url, {}, {headers:headers});
				console.log('handleAddWish');
				console.log(response.data);
				if(response.data.status === 200) {
					this.$emit('changeWishCount');
				}
			}

		}
    }
</script>


<style scoped>

</style>