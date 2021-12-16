<template>

	<div class="section">
			<!-- container -->
			<div class="container">
				<!-- row -->
				<div class="row">

					<div class="col-md-7">
						<!-- Billing Details -->
						<div class="billing-details">
							<div class="section-title">
								<h3 class="title">주문결제</h3>
							</div>
							<div class="form-group">
								배송시 요청사항 : 	
								<select v-model="deliverypay"> 
								<option >빠른 배송 부탁드립니다.</option>
								<option >배송 전, 연락주세요.</option>
								<option >부재 시, 휴대폰으로 연락주세요.</option>
								<option >부재 시, 경비실에 맡겨주세요.</option>
								<option >경비실이 없습니다. 배송 전, 연락주세요.</option>
								<option >선택 안함</option>
								</select>
							</div>
							
							<div style=" margin-top: 25px;" class="form-group">
								<input class="input" type="text" name="address" placeholder="주소입력">
							</div>
						
						</div>
						<!-- /Billing Details -->

					

						<!-- Order notes -->
						<div class="order-notes">
							<textarea class="input" placeholder="기타 요청사항"></textarea>
						</div>
						<!-- /Order notes -->
					</div>

					<!-- Order Details -->
					<div class="col-md-5 order-details">
						<div class="section-title text-center">
							<h3 class="title">주문목록</h3>
						</div>
						<div class="order-summary">
							<div class="order-col">
								<div><strong>상품</strong></div>
								<div><strong>총합</strong></div>
							</div>
							<div class="order-products">
								<div class="order-col">
									<div>갤럭시 노트20</div>
									<div>80,000원</div>
								</div>
								<!-- <div class="order-col">
									<div>갤럭시 노트20+</div>
									<div>300.000원</div>
								</div> -->
							</div>
							<div class="order-col">
								<div>배송</div>
								<div><strong>무료배송</strong></div>
							</div>
							<div class="order-col">
								<div><strong>총합</strong></div>
								<div><strong class="order-total">80,000원</strong></div>
							</div>
						</div>
						<div class="payment-method">
							<div class="input-radio">
								<input type="radio" name="payment" id="payment-1">
								<label for="payment-1">
									<span></span>
									무통장 입금
								</label>
							
							</div>
					
							<div class="input-radio">
								<input type="radio" name="payment" id="payment-3">
								<label for="payment-3">
									<span></span>
									페이팔 시스템
								</label>
							
							</div>
						</div>
						<div class="input-checkbox">
							<input type="checkbox" id="terms">
							<label for="terms">
								<span></span>
								<a href="#">이용약관을 읽었으며 이에 동의합니다</a>
							</label>
						</div>
						<a href="#" @click="kakao" class="primary-btn order-submit">결제하기</a>
						
					</div>
					<!-- /Order Details -->
				</div>
				<!-- /row -->
			</div>
			<!-- /container -->
		</div>
		<!-- /SECTION -->

</template>


<script>
import axios from "axios";

export default {
	data() {
		return	{
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
		}
	},

	created() {
		this.selectHandle();
		console.log(this.token);
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
		
		
		async selectHandle(){
			const url = `/HOST/product/selectone1.json?no=${this.productno}`;
			//const url = `/HOST/company2/detailpage_image?no=${this.productno}`;

			const headers = { "Content-Type": "application/json" };
			// const body = {
			// 	cartcount : this.cartcount,
			// 	cartsubtotalprice : this.cartsubtotalprice,
			// 	cartitemtitle : this.cartitemtitle,
			// 	cartprice : this.cartprice
			// }
			const response = await axios.get(url ,{headers});
			console.log(response.data);
		},

		async handlereview() {
			console.log(this.token);
			const url = '/HOST/review/insert.json';
			const headers = { "Content-Type": "application/json", token : this.token };
			const body = { 
				reviewname : this.reviewname,
				writercontent : this.writercontent,
				reviewchk : this.chk
			}
			const response = await axios.post(url,body,{headers});
			console.log(response);
		},
		kakao() {
			var IMP = window.IMP; // 생략가능
			IMP.init('imp85009680'); //iamport 대신 자신의 "가맹점 식별코드"를 사용하시면 됩니다
			// 'iamport' 대신 부여받은 "가맹점 식별코드"를 사용
			// i'mport 관리자 페이지 -> 내정보 -> 가맹점식별코드
			IMP.request_pay({
			pg: 'kakao', // version 1.1.0부터 지원.
			/*
			'kakao':카카오페이,
			html5_inicis':이니시스(웹표준결제)
			'nice':나이스페이
			'jtnet':제이티넷
			'uplus':LG유플러스
			'danal':다날
			'payco':페이코
			'syrup':시럽페이
			'paypal':페이팔
			*/
			pay_method: 'card',
			/*
			'samsung':삼성페이,
			'card':신용카드,
			'trans':실시간계좌이체,
			'vbank':가상계좌,
			'phone':휴대폰소액결제
			*/
			merchant_uid: 'merchant_' + new Date().getTime(),
			/*
			merchant_uid에 경우
			https://docs.iamport.kr/implementation/payment
			위에 url에 따라가시면 넣을 수 있는 방법이 있습니다.
			참고하세요.
			나중에 포스팅 해볼게요.
			*/
			name: '주문명:결제테스트',
			//결제창에서 보여질 이름
			amount: 80000,
			//가격
			buyer_email: 'iamport@siot.do',
			buyer_name: '구매자이름',
			buyer_tel: '010-1234-5678',
			buyer_addr: '서울특별시 강남구 삼성동',
			buyer_postcode: '123-456',
			m_redirect_url: 'https://www.yourdomain.com/payments/complete'
			/*
			모바일 결제시,
			결제가 끝나고 랜딩되는 URL을 지정
			(카카오페이, 페이코, 다날의 경우는 필요없음. PC와 마찬가지로 callback함수로 결과가 떨어짐)
			*/
			}, (rsp) => {
			console.log(rsp);
			if (rsp.success) {
				var msg = '결제가 완료되었습니다.';
				alert(msg);
			} else {
				var msg1 = '결제에 실패하였습니다.';
				msg1 += '에러내용 : ' + rsp.error_msg;
				alert(msg1);
			}
			});
		}
		
	},
	

}
</script>


<style lang="scss" scoped>

</style>