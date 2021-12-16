<template>
	<div>
		<header v-if="!admin">
			<div id="top-header">
				<div class="container">
					<ul class="header-links pull-left">
						<li><a href="#">회사소개</a></li>
						<li><a href="#">매장안내</a></li>
						<li><a href="#">이벤트</a></li>
						<li><a href="#">멤버십</a></li>
						<li><a href="#">고객지원</a></li>
					</ul>
					<ul class="header-links pull-right">
						<li v-if="!logged"><router-link to="/cart"><i class="fa fa-truck"></i> 주문/배송</router-link></li>
						<li v-if="!logged"><router-link to="/login"><i class="fa fa-user-o"></i> 로그인</router-link></li>
						<li v-if="!logged"><router-link to="/join"><i class="fa fa-user-o"></i> 회원가입</router-link></li>
						<li v-if="logged"><router-link to="/logout"><i class="fa fa-user-o"></i> 로그아웃</router-link></li>
						<li><a href="/admin"><i class="fa fa-user-o"></i> 관리자</a></li>  
					</ul>
				</div>
			</div>

			<!-- MAIN HEADER -->
			<div id="header">
				<div class="container">
					<div class="row">
						<div class="col-md-3">
							<div class="header-logo">
								<a href="/home" class="logo">
									<img src="img/SINCE_logo.png" alt="">
								</a>
							</div>
						</div>

						<div class="col-md-6">
							<div class="header-search">
								<form>
									<select class="input-select">
										<option value="0">전체검색</option>
										<option value="1">카테고리</option>
									</select>
									<input class="input" placeholder="검색어를 입력하세요.">
									<button class="search-btn">검색</button>
								</form>
							</div>
						</div>

						<div class="col-md-3 clearfix">
							<div class="header-ctn">
								<div @click="handlewish" >
									<router-link to="/wishlist">
										<i class="fa fa-heart-o"></i>
										<span>위시리스트</span>
										<div class="qty">{{wishcount}}</div>
									</router-link>
								</div>

								<div class="dropdown">
									<a href="#" class="dropdown-toggle" @click="pageCartList" >
										<i class="fa fa-shopping-cart"></i>
										<span>카트리스트</span>
										<div class="qty">{{cartcount}}</div>
									</a>
								</div>
							</div>
						</div>
					</div><!-- row -->
				</div><!-- container -->
			</div><!-- /MAIN HEADER -->
		</header><!-- /HEADER -->  


		<!-- 메뉴 영역 -->		
		<nav id="navigation" v-if="!admin">
			<div class="container">
				<div id="responsive-nav">
					<ul class="main-nav nav navbar-nav">
						<li :class="active"><a href="#" @click="changeMenu(1)">Home</a></li>
						<li><a href="#" @click="changeMenu(2)">기업정보</a></li>
						<li><a href="#" @click="changeMenu(3)">상품정보</a></li>
						<li><a href="#" v-if="logged" @click="changeMenu(5)">마이페이지</a></li>
						<li><a href="#" @click="changeMenu(6)">고객센터</a></li>
					</ul>
				</div>
			</div>
		</nav>


		<!-- 컨테이너 변경 영역 -->
		<router-view 
			@changeLogged="changeLogged" 
			@handleCartCount="handleCartCount" 
			@changeWishCount="changeWishCount" 
			@changeWishView="changeWishView"></router-view>


		<!-- FOOTER -->
		<footer id="footer" v-if="!admin">
			<div class="section">
				<div class="container">
					<div class="row">
						<div class="col-md-3 col-xs-6">
							<div class="footer">
								<h3 class="footer-title">SINCE</h3>
								<ul class="footer-links">
									<li><a href="#"><i class="fa fa-map-marker"></i>부산시 부산진구</a></li>
									<li><a href="#"><i class="fa fa-phone"></i>+051-000-0001</a></li>
									<li><a href="#"><i class="fa fa-envelope-o"></i>webmaster@email.com</a></li>
									<li><a href="//www" target="_blank">사업자정보확인</a></li>
								</ul>
							</div>
						</div>

						<div class="col-md-3 col-xs-6">
							<div class="footer">
								<h3 class="footer-title">회사소개</h3>
								<ul class="footer-links">
									<li><a href="#"><i2 class="fa fa-angle-double-right"></i2> 브랜드 소개</a></li>
									<li><a href="#"><i2 class="fa fa-angle-double-right"></i2> 매장안내</a></li>
									<li><a href="#"><i2 class="fa fa-angle-double-right"></i2> 채용정보</a></li>
								</ul>
							</div>
						</div>

						<div class="clearfix visible-xs"></div>

						<div class="col-md-3 col-xs-6">
							<div class="footer">
								<h3 class="footer-title">고객문의</h3>
								<ul class="footer-links">
									<li><a href="#"><i2 class="fa fa-angle-double-right"></i2> 고객지원</a></li>
									<li><a href="#"><i2 class="fa fa-angle-double-right"></i2> 자주 묻는 질문</a></li>
									<li><a href="#"><i2 class="fa fa-angle-double-right"></i2> 문의하기</a></li>
									<li><a href="#"><i2 class="fa fa-angle-double-right"></i2> 피드백</a></li>
								</ul>
							</div>
						</div>

						<div class="col-md-3 col-xs-6">
							<div class="footer">
								<h3 class="footer-title">이용정보</h3>
								<ul class="footer-links">
									<li><a href="#"><i2 class="fa fa-angle-double-right"></i2> 이용약관</a></li>
									<li><a href="#"><i2 class="fa fa-angle-double-right"></i2> 개인정보 처리 방침</a></li>
									<li><a href="#"><i2 class="fa fa-angle-double-right"></i2> FAQ</a></li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>


			<!-- bottom footer -->
			<div id="bottom-footer" class="section">
				<div class="container">
					<div class="row">
						<div class="col-md-12 text-center">
							<ul class="list-unstyled list-inline social text-center">
								<li class="list-inline-item">
									<a href="https://www.facebook.com"><i class="fa fa-facebook"></i></a>
								</li>
								<li class="list-inline-item">
									<a href="https://twitter.com/?lang=ko"><i class="fa fa-twitter"></i></a>
								</li>
								<li class="list-inline-item">
									<a href="https://www.instagram.com/?hl=ko"><i class="fa fa-instagram"></i></a>
								</li>
								<li class="list-inline-item">
									<a href="https://www.google.com/"><i class="fa fa-google-plus"></i></a>
								</li>
								<li class="list-inline-item">
									<a href="/home" target="_blank"><i class="fa fa-envelope"></i></a>
								</li>
							</ul>
							<span class="copyright">&copy; SINCE 프로젝트</span>
						</div>
					</div>
				</div>
			</div>
		</footer>

		<a href="#" class="btn_gotop">
			<i class="fa fa-arrow-up"></i>
		</a>

	</div>
</template>



<script>
	import axios from 'axios';

	export default {
		data () {
			return {
				cartcount 	: 0,
				wishcount 	: 0,
				logged 		: false,
				active 		: 'active',
				items 		: [{id:1},{id:1},{id:1},{id:1}],
				admin 		: false,
				menu 		: 1,
				token 		: sessionStorage.getItem("TOKEN1"),
			}
		},

		created(){
			if (window.location.pathname === '/admin') {
				this.admin = true;
			}

			this.changeLogged();
			this.handleCartCount();
			this.changeWishCount();
		},


		methods : {
			pageCartList(){
				this.$router.push({path:'/cart'});
			},

			async handleJoin() {
				this.$router.push({ path: "/Login" });
			},

			handlewish(){
				if(this.token == null){
					alert("로그인 후 이용가능합니다.")
					this.$router.push({ path: "/Login" });
				}
			},

			changeMenu(menu){
				if(menu === 1) {
					this.$router.push({ path: "/home" });
				}
				else if(menu === 2) {
					this.$router.push({ path: "/about" });
				}
				else if(menu === 3) {
					this.$router.push({ path: "/products" });
				}
				else if(menu === 5) {
					this.$router.push({ path: "/mypage" });
				}
				else if(menu === 6) {
					this.$router.push({ path: "/center" });
				}
				this.active = '';
			},

			changeLogged(){
				console.log("App.vue => changeLogged")
				this.token = sessionStorage.getItem("TOKEN1");
				
				if ( this.token != null ) {
					this.logged = true;
				} else {
					this.logged = false;
				}
			},

			async changeWishCount(){
				const url = "/HOST/wish/update_wish_hit_select.json";
				const headers = { "Content-Type": "application/json",  "token" : this.token};
				const response = await axios.get(url, {headers:headers});
				console.log('App.vue => changeWishCount');
				console.log(response.data);
				if(response.data.status === 200){
					if(response.data.wishcount == null){
						this.cartcount = 0;	
					}
					else{
						this.wishcount = response.data.wishcount; 
					}
				}
			},

			async handleCartCount(){
				const url = "/HOST/cart/cartSelectCount.json";
				const headers = { "Content-Type": "application/json",  "token" : this.token};
				const response = await axios.get(url, {headers:headers});
				console.log('App.vue => handleCartCount');
				console.log(response.data);

				if(response.data.status === 200){
					if(response.data.CartCount == null){
						this.cartcount = 0;	
					}
					else{
						this.cartcount = response.data.CartCount; 
					}
				}
			}
		},
	}
</script>


<style>
	/* 화면 스크롤 */
	.btn_gotop { 
	display: block; 
	position: fixed; 
	bottom: 35px; /* 탑버튼을 화면의 가장 아래에서 몇 픽셀 떨어뜨릴 것인지 정하세요*/ 
	right: 30px; /* 탑버튼을 화면의 가장 오른쪽에서 몇 픽셀 떨어뜨릴 것인지 정하세요*/ 
	z-index: 999; 
	border: 1px solid rgba(0,0,0,0.25); 
	outline: none; 
	background-color: white; 
	color: rgba(0,0,0,0.7); 
	cursor: pointer; 
	padding: 15px 20px; 
	border-radius: 100%; 
	} 
	/* 화면 스크롤 */

	/* footer */
	#footer  {
		background: #4d4e4e !important;
	}
	#bottom-footer{
		background: #4d4e4e !important;
	}


	#footer ul.social li{
		padding: 3px 0;
	}

	#footer ul.social li a i {
		margin-right: 5px;
		font-size:25px;
		-webkit-transition: .5s all ease;
		-moz-transition: .5s all ease;
		transition: .5s all ease;
	}

	#footer ul.social li:hover a i {
		font-size:30px;
		margin-top:-10px;
	}
	#footer ul.social li a,
	#footer ul.quick-links li a{
		color:#ffffff;
	}
	/* footer */
</style>