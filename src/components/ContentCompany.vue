<template>

	<div id="breadcrumb" class="section">
		<div class="container">
			<div class="row">
				<div class="col-md-12">
					<ul class="breadcrumb-tree">
						<li><router-link to="/home">Home</router-link></li>
						<li class="active">물품상세정보</li>
					</ul>
				</div>
			</div>
		</div>
	</div>


	<div class="section">
		<div class="container">
			<div class="row">
				<div class="col-md-5 col-md-push-2">
					<div id="product-main-img">
						<div class="product-preview">
							<img :src = "`/HOST/company2/detailpage_image?no=${this.productno}`" alt="" class="img">
						</div>
						<div class="product-preview">
							<img :src = "`/HOST/company2/detailpage_image?no=${this.productno}`" alt="" class="img">
						</div>
						<div class="product-preview">
							<img :src = "`/HOST/company2/detailpage_image?no=${this.productno}`" alt="" class="img">
						</div>
						<div class="product-preview">
							<img :src = "`/HOST/company2/detailpage_image?no=${this.productno}`" alt="" class="img">
						</div>
					</div>
				</div>

				<div class="col-md-2 col-md-pull-5">
					<div id="product-imgs">
						<div class="product-preview">
							<img  :src = "`/HOST/company2/detailpage_image?no=${this.productno}`" alt="" class="img">
						</div>
						<div class="product-preview">
							<img  :src = "`/HOST/company2/detailpage_image?no=${this.productno}`" alt="" class="img">
						</div>
						<div class="product-preview">
							<img  :src = "`/HOST/company2/detailpage_image?no=${this.productno}`" alt="" class="img">
						</div>
						<div class="product-preview">
							<img  :src = "`/HOST/company2/detailpage_image?no=${this.productno}`" alt="" class="img">
						</div>
					</div>
				</div>

				<div class="col-md-5">
					<div class="product-details">
						<h2 class="product-name">{{productitem.producttitle}}</h2>
						<div>
							<div class="product-rating">
								<i class="fa fa-star"></i>
								<i class="fa fa-star"></i>
								<i class="fa fa-star"></i>
								<i class="fa fa-star"></i>
								<i class="fa fa-star-o"></i>
							</div>
							<a class="review-link" href="#">10 리뷰 | 리뷰추가하기</a>
						</div>
						<div>
							<h3 class="product-price">{{Math.round(productitem.producttotalprice*0.8)}}원 <del class="product-old-price">{{productitem.producttotalprice}}원</del></h3>
						</div>
						<p>{{ productitem.productcontent }}</p>

						<div class="product-options" >
						<!-- <option v-for="item  in companynumber" v-bind:key="item" :value="item.insertcompanyno">{{item.insertcompanyname}}</option> -->
							<label>
								크기 : 
								<select class="input-select">
									<option v-for="oplist in optionlist" :key="oplist" value="0">{{oplist.optionname}}</option>
								</select>
							</label>
							<label>
								색상 : 
								<select class="input-select">
									<option v-for="oplist in optionlist" :key="oplist" value="0">{{oplist.optioncolor}}</option>
								</select>
							</label>
								<label>
								사이즈 : 
								<select class="input-select">
									<option v-for="oplist in optionlist" :key="oplist" value="0">{{oplist.optionsize}}</option>
								</select>
							</label>
						</div>

						<div class="add-to-cart">
							<div class="qty-label">
								주문수량 : 
								<div class="input-number">
									<input type="number" :value="ordercnt1">
									<span class="qty-up" @click="orderCnt(1)">+</span>
									<span class="qty-down" @click="orderCnt(2)">-</span>
								</div>
							</div>
							<button class="add-to-cart-btn" @click="carthandle"><i class="fa fa-shopping-cart"></i> 주문하기</button>
						</div>

						<ul class="product-links">
							<li>공유 : </li>
							<li><a href="#"><i class="fa fa-facebook"></i></a></li>
							<li><a href="#"><i class="fa fa-twitter"></i></a></li>
							<li><a href="#"><i class="fa fa-google-plus"></i></a></li>
							<li><a href="#"><i class="fa fa-envelope"></i></a></li>
						</ul>

					</div>
				</div>



				<!-- Product tab -->
				<div class="col-md-12">
					<div id="product-tab">
						<!-- product tab nav -->
						<ul class="tab-nav">
							<li class="active"><a data-toggle="tab" href="#tab1">상세내용</a></li>
							<li><a data-toggle="tab" href="#tab3">리뷰보기({{allcount}})</a></li>
						</ul>
						<!-- /product tab nav -->

						<!-- product tab content -->
						<div class="tab-content">
							<!-- tab1  -->
							<div id="tab1" class="tab-pane fade in active">
								<div class="row">
									<div class="col-md-12">
										<p>상세내용</p>
									</div>
								</div>
							</div>
							<!-- /tab1  -->

							<!-- tab3  -->
							<div id="tab3" class="tab-pane fade in">
								<div class="row">
									<!-- Rating -->
									<div class="col-md-3">
										<div id="rating">
											<div class="rating-avg">
												<span>4.5</span>
												<div class="rating-stars">
													<i class="fa fa-star"></i>
													<i class="fa fa-star"></i>
													<i class="fa fa-star"></i>
													<i class="fa fa-star"></i>
													<i class="fa fa-star-o"></i>
												</div>
											</div>
											<ul class="rating">
												<li>
													<div class="rating-stars">
														<i class="fa fa-star"></i>
														<i class="fa fa-star"></i>
														<i class="fa fa-star"></i>
														<i class="fa fa-star"></i>
														<i class="fa fa-star"></i>
													</div>
													<div class="rating-progress">
														<div style="width: 80%;"></div>
													</div>
													<span class="sum">3</span>
												</li>
												<li>
													<div class="rating-stars">
														<i class="fa fa-star"></i>
														<i class="fa fa-star"></i>
														<i class="fa fa-star"></i>
														<i class="fa fa-star"></i>
														<i class="fa fa-star-o"></i>
													</div>
													<div class="rating-progress">
														<div style="width: 60%;"></div>
													</div>
													<span class="sum">2</span>
												</li>
												<li>
													<div class="rating-stars">
														<i class="fa fa-star"></i>
														<i class="fa fa-star"></i>
														<i class="fa fa-star"></i>
														<i class="fa fa-star-o"></i>
														<i class="fa fa-star-o"></i>
													</div>
													<div class="rating-progress">
														<div></div>
													</div>
													<span class="sum">0</span>
												</li>
												<li>
													<div class="rating-stars">
														<i class="fa fa-star"></i>
														<i class="fa fa-star"></i>
														<i class="fa fa-star-o"></i>
														<i class="fa fa-star-o"></i>
														<i class="fa fa-star-o"></i>
													</div>
													<div class="rating-progress">
														<div></div>
													</div>
													<span class="sum">0</span>
												</li>
												<li>
													<div class="rating-stars">
														<i class="fa fa-star"></i>
														<i class="fa fa-star-o"></i>
														<i class="fa fa-star-o"></i>
														<i class="fa fa-star-o"></i>
														<i class="fa fa-star-o"></i>
													</div>
													<div class="rating-progress">
														<div></div>
													</div>
													<span class="sum">0</span>
												</li>
											</ul>
										</div>
									</div>
									<!-- /Rating -->

									<!-- Reviews -->
									<div class="col-md-6">
										<div id="reviews">
											<ul class="reviews">
												<li v-for="item in reviewlist" :key="item" >
													<div class="review-heading">
														<h5 class="name">{{item.reviewname}}</h5>
														<p class="date">{{item.reviewdate}}</p>
														<div class="review-rating">
															<i class="fa fa-star" v-for="i in item.reviewchk" :key="i"></i>
															<!-- <i class="fa fa-star"></i> -->
															<!-- <i class="fa fa-star"></i> -->
															<!-- <i class="fa fa-star"></i> -->
															<i class="fa fa-star-o empty" v-for="ii in (5 - item.reviewchk)" :key="ii"></i>
														</div>
													</div>
													<div class="review-body">
														<p>{{item.writercontent}}</p>
													</div>
												</li>
												
											</ul>
											<ul class="reviews-pagination">
												<li v-for="a in list" :key="a" @click="handleselect(a)"><a href="#">{{a}}</a></li>
	
												<li><a href="#"><i class="fa fa-angle-right"></i></a></li>
												
											</ul>
										</div>
									</div><!-- /Reviews -->

									<div class="col-md-3">
										<div id="review-form">
											<div class="review-form">
												<input class="input" v-model="reviewname" type="text" placeholder="아이디">
												<textarea class="input" v-model="writercontent" placeholder="리뷰내용"></textarea>
												<div class="input-rating" >
													<span>평점 : </span>
													<div class="stars">
														<input id="star5" v-model="chk"  value="5" type="radio"><label for="star5"></label>
														<input id="star4" v-model="chk"  value="4" type="radio"><label for="star4"></label>
														<input id="star3" v-model="chk"  value="3" type="radio"><label for="star3"></label>
														<input id="star2" v-model="chk"  value="2" type="radio"><label for="star2"></label>
														<input id="star1" v-model="chk"  value="1" type="radio"><label for="star1"></label>
														{{chk}}
													</div>
												</div>
												<button class="primary-btn" @click="handlereview">전송</button>
											</div>
										</div>
									</div><!-- /Review Form -->

								</div>
							</div><!-- /tab3  -->
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	<!-- /SECTION -->


</template>


<script>
import axios from "axios";

export default {
	data() {
		return	{
			list                : "",
			reviewlist          : [],
			token 			    : sessionStorage.getItem("TOKEN1"),
			reviewname          : "",
			writercontent       : "",
			cartcount 			: "",
			cartsubtotalprice 	: "",
			cartitemtitle 		: "",
			cartprice 			: "",
			chk                 : 0,
			productno			: this.$route.query.no,			
			imagesrc 			: "/HOST/company2/detailpage_image?no=" + this.productno,
			productitem			: '',
			ordercnt1			: 1,
			page                : 1,
			allcount            : "",
			
			//옵션
			optionname          : "",
			optioncolor         : "",
			optionsize          : "",
			optionlist          : {},
		}
	},

	created() {
		//상품정보 가져오기
		this.selectHandle();

		// 리뷰정보 가져오기
		this.handleselect();

		//옵션가져오기
		this.handleSelectOption();
	},

	mounted() {
		window.jQuery('#product-main-img').slick({
			infinite: true,
			speed: 300,
			dots: false,
			arrows: true,
			fade: true,
			asNavFor: '#product-imgs',
		});

		window.jQuery('#product-imgs').slick({
			slidesToShow: 3,
			slidesToScroll: 1,
			arrows: true,
			centerMode: true,
			focusOnSelect: true,
			centerPadding: 0,
			vertical: true,
			asNavFor: '#product-main-img',
			responsive: [
				{
					//breakpoint: 991,
					breakpoint: 10000,
					settings: {
						vertical: false,
						arrows: false,
						dots: true,
					}
				},
			]
		});

		var zoomMainProduct = document.getElementById('product-main-img');
		if (zoomMainProduct) {
			window.jQuery('#product-main-img .product-preview').zoom();
		}
	},
	

	methods : {
		async orderCnt(n){
			if( n == 1 ){
				this.ordercnt1++;
			}
			else if( n == 2 ){
				this.ordercnt1--;
				
				if(this.ordercnt1 < 1){
					this.ordercnt1 =1;
				}	
			}
		},

		async selectHandle(){
			const url = `/HOST/product/selectone1.json?no=${this.productno}`;
			const headers = { "Content-Type": "application/json", "token" : this.token };

			const response = await axios.get(url ,{headers:headers});
			if(response.data.status === 200) {
				console.log('ContentCompany.vue => selectHandle');
				console.log(response.data);
				this.productitem = response.data.productno;
			}
			this.handleSelectOption();
		},
		
		async handlereview() {
			console.log(this.token);
			console.log(this.productno);
			const url = '/HOST/review/insert.json?productno='+this.productno;
			const headers = { "Content-Type": "application/json", token : this.token };
			const body = { 
				reviewname : this.reviewname,
				writercontent : this.writercontent,
				reviewchk : this.chk
			}
			const response = await axios.post(url,body,{headers});

			console.log('ContentCompany.vue => handlereview');
			console.log(response);
		},

		async handleselect(val) {
			if(val > 0) {
				this.page = val;
			} else {
				this.page = 1;
			}

			const url = `/HOST/review/selectreview.json?page=${this.page}&writercontent=&productno=`+this.productno;
			const headers = { "Content-Type": "application/json"}
			const response = await axios.get(url,{headers});
			
			console.log('ContentCompany.vue => handleselect');
			console.log(response.data);
			this.reviewlist = response.data.list;
			this.list       = response.data.productpages;
			this.allcount   = response.data.pages;
		},

		async handleSelectOption(){
			
			const url = `/HOST/product/selectoption.json?productno=${this.productno}`;
			const headers = { "Content-Type": "application/json", token: this.token};
			const response = await axios.get(url,{headers:headers});

			console.log('ContentCompany.vue => handleSelectOption');
			console.log(response.data);
			this.optionlist = response.data.product;
		},
		carthandle() {
			this.$router.push({ path: "/test" });
		}
	},
	
}
</script>


<style lang="scss" scoped>

</style>