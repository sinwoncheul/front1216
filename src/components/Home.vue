<template > 
	<div>
		<div class="container" style="width: 100%; padding: 0px; margin: 0px;">
			<div id="carousel" class="carousel slide carousel-fade" data-ride="carousel">
				<ol class="carousel-indicators">
					<li data-target="#carousel" data-slide-to="0" class="active"></li>
					<li data-target="#carousel" data-slide-to="1"></li>
					<li data-target="#carousel" data-slide-to="2"></li>
				</ol>

				<div class="carousel-inner carousel-zoom" >
					<div class="active item">
						<img class="img-responsive" src="https://www.wallpapertip.com/wmimgs/86-863877_macbook-air-hd.jpg" style="width: 100%; height:600px">
						<div class="carousel-caption">
							<!-- <h2>Title</h2>
							<p>Description</p> -->
						</div>
					</div>

					<div class="item">
						<img class="img-responsive" src="https://www.gizbot.com/images/2020-04/apple-iphone-12-concept_158711095630.jpg" style="width: 100%; height:600px">
						<div class="carousel-caption"></div>
					</div>

					<div class="item">
						<img class="img-responsive" src="https://blog.kakaocdn.net/dn/bIQeYG/btqC2udDXIC/zermYkdXGyvvXrQfXYKxR0/img.jpg" style="width: 100%; height:600px">
						<div class="carousel-caption"></div>
					</div>
				</div>
				
				<a class="carousel-control left" href="#carousel" data-slide="prev">‹</a>
				<a class="carousel-control right" href="#carousel" data-slide="next">›</a>
			</div>
		</div>

		<div class="section">
			<div class="container">
				<div v-for="(item, idx) in items" v-bind:key="item">
					<div :class="[(idx+1) % 4 === 0 ? 'row' : '']">
						<div  class="col-md-3 col-xs-6">
							<div class="product">
								<div class="product-img" @click="orderPage(item.productno)" style="cursor:pointer;">
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
										<button class="add-to-wishlist"><i class="fa fa-heart-o"></i><span class="tooltipp">위시리스트</span></button>
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
			</div><!-- /container -->
		</div><!-- /Section -->
		
	</div>
</template>


<script>
import axios from "axios";
    export default {

        data() {
			return {
				items : [], //반복문 테스트용 임시
				token : sessionStorage.getItem("TOKEN1"),
				pages : 1,
			}
		},

		created() {

		},

		mounted() {
			this.handleSelect(1);
		},

		methods : {
			async handleAddCart(no){
				const url = "/HOST/cart/insertcart.json?no="+no;
				const headers = { "Content-Type": "application/json",  "token" : this.token};
				const response = await axios.put(url, {}, {headers:headers});
				console.log('Home.vue => handleAddCart');
				console.log(response.data);

				if(response.data.status === 200) {
					this.$emit('handleCartCount');
				}
			},

			async handleHit(id) {
				if (this.token == null){
					const ret = confirm("로그인 후 이용 가능합니다. \n 로그인 하시겠습니까?");
					if (ret){
						this.$router.push({ path: "/Login" });
					} else {
						this.$router.push({ path: "/home" });
					}
				}

				const url = `/HOST/wish/update_wish_hit.json?type=1`;
				const headers = { "Content-Type": "application/json", "token": this.token };
				const response = await axios.put(url, {productno:id}, {headers:headers});
				console.log('Home.vue => handleHit');
				console.log(response.data);

				this.$emit('changeWishCount',response.data.wishcount);
			},

			async handleDetail(id){
				this.$router.push({path:'/contentcompany', query:{id:id}});
			},

			async handleSelect(page){
				const url = "/HOST/product/select_category_product.json?page=" + page + "&producttitle=&productcontent=1";
				const headers = { "Content-Type": "application/json"};
				const response = await axios.get(url, {headers:headers});
				console.log('Home.vue => handleSelect');
				console.log(response.data);

				if(response.data.stauts === 200){
					this.items = response.data.producttitlelist; 
					this.pages = response.data.productpages
				}
			},
			
			async orderPage(no){
				this.$router.push({path:'/contentcompany', query:{no:no}});
			}
		},

    }
</script>


<style scoped>
	/* 썸네일 사진 */
	.carousel-fade .carousel-inner .item {
		opacity: 0;
		transition-property: opacity;
		overflow: hidden;
	}
	.item.active img {
		transition: transform 5000ms linear 0s;
		/* This should be based on your carousel setting. For bs, it should be 5second*/
		transform: scale(1.05, 1.05);
	}
	.carousel-fade .carousel-inner .active {
		opacity: 1;
	}

	.carousel-fade .carousel-inner .active.left,
	.carousel-fade .carousel-inner .active.right {
		left: 0;
		opacity: 0;
		z-index: 1;
	}

	.carousel-fade .carousel-inner .next.left,
	.carousel-fade .carousel-inner .prev.right {
		opacity: 1;
	}

	.carousel-fade .carousel-control {
		z-index: 2;
	}

	/*
	WHAT IS NEW IN 3.3: "Added transforms to improve carousel performance in modern browsers."
	now override the 3.3 new styles for modern browsers & apply opacity
	*/
	@media all and (transform-3d), (-webkit-transform-3d) {
		.carousel-fade .carousel-inner > .item.active.right,
		.carousel-fade .carousel-inner > .item.next {
			opacity: 0;
			-webkit-transform: translate3d(0, 0, 0);
			transform: translate3d(0, 0, 0);
		}
		.carousel-fade .carousel-inner > .item.active.left,
		.carousel-fade .carousel-inner > .item.prev {
			opacity: 0;
			-webkit-transform: translate3d(0, 0, 0);
			transform: translate3d(0, 0, 0);
		}
		.carousel-fade .carousel-inner > .item.active,
		.carousel-fade .carousel-inner > .item.next.left,
		.carousel-fade .carousel-inner > .item.prev.right {
			opacity: 1;
			-webkit-transform: translate3d(0, 0, 0);
			transform: translate3d(0, 0, 0);
		}

	}
	/* 썸네일 사진 */
</style>

