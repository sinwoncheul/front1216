<template>
    <div>

		<div id="breadcrumb" class="section">
			<div class="container">
				<div class="row">
					<div class="col-md-12">
						<ul class="breadcrumb-tree">
							<li><a href="#" @click="handlePage(1)">Home</a></li>
                            <li><a href="#" @click="handlePage(2)">회사정보</a></li>
							<li class="active">회사상세정보</li>
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
								<img :src="`/HOST/company2/select_image?insertcompanyno=${no}`" alt="" class="img">
							</div>
                            <div class="product-preview">
								<img :src="`/HOST/company2/select_image?insertcompanyno=${no}`" alt="" class="img">
							</div>
                            <div class="product-preview">
								<img :src="`/HOST/company2/select_image?insertcompanyno=${no}`" alt="" class="img">
							</div>
                            <div class="product-preview">
								<img :src="`/HOST/company2/select_image?insertcompanyno=${no}`" alt="" class="img">
							</div>
						</div>
					</div>

					<div class="col-md-2 col-md-pull-5">
						<div id="product-imgs">
							<div class="product-preview">
								<img :src="`/HOST/company2/select_image?insertcompanyno=${no}`" alt="" class="img">
							</div>
                            <div class="product-preview">
								<img :src="`/HOST/company2/select_image?insertcompanyno=${no}`" alt="" class="img">
							</div>
                            <div class="product-preview">
								<img :src="`/HOST/company2/select_image?insertcompanyno=${no}`" alt="" class="img">
							</div>
                            <div class="product-preview">
								<img :src="`/HOST/company2/select_image?insertcompanyno=${no}`" alt="" class="img">
							</div>
						</div>
					</div>

					<div class="col-md-5">
						<div class="product-details">
							<p>연락처 : {{item.insertcompany.insertcompanytel}}</p>
                            <p>주소 : {{item.insertcompany.insertcompanyaddress}}</p>
                            <p>내용 : {{item.insertcompany.insertcompanycontent}}</p>
                            <p>등록일 : {{item.insertcompany.insertcompanydate}}</p>

							<ul class="product-links">
								<li>공유 : </li>
								<li><a href="#"><i class="fa fa-facebook"></i></a></li>
								<li><a href="#"><i class="fa fa-twitter"></i></a></li>
								<li><a href="#"><i class="fa fa-google-plus"></i></a></li>
								<li><a href="#"><i class="fa fa-envelope"></i></a></li>
							</ul>
						</div>
					</div>
				</div>

                
                <div class="row" style="margin-top:100px;">
                    <div class="col-md-12">
                        <h4>등록한 제품목록</h4>
                        <hr />
                        <table class="table">
                            <thead>
                                <th>번호</th>
                                <th>제품번호</th> 
                                <th>제품명</th>   
                                <th>제품내용</th>  
                                <th>가격</th>
                                <th>수량</th>
                            </thead>

                            <tbody>
                                <tr v-for="(tmp,idx) in item.product" v-bind:key="tmp">
                                    <td>{{idx+1}}</td>
                                    <td>{{tmp.productno}}</td>
                                    <td>{{tmp.producttitle}}</td>
                                    <td>{{tmp.productcontent}}</td>
                                    <td>{{tmp.producttotalprice}}</td>
                                    <td>{{tmp.productquantity}}</td>
                                </tr>         
                            </tbody>        
                        </table>
                    </div>
                </div>        
			</div>
		</div><!-- /SECTION -->
		
    </div>
</template>

<script>

    import axios from "axios";
    export default {

        data() {
            return	{
                item        : '',
                no			: this.$route.query.no,		
                imagesrccnt    : [1,2,3,4],
                imagesrc 	: "/HOST/company2/select_image?insertcompanyno=" + this.no,
                token 		: sessionStorage.getItem("TOKEN1"),
            }
        },

        created() {
            this.selectHandle();
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
                const url = `/HOST/company2/select_insertcompany_content.json?no=${this.no}`;
                const headers = { "Content-Type": "application/json", "token":this.token };
                const response = await axios.get(url ,{headers});
                
                this.item = response.data;
                console.log('selectHandle');
                console.log(response.data);
            },

            handlePage(idx){
                if(idx ===1){
                    this.$router.push({path:'/home'});
                }
                else if(idx ===2){
                    this.$router.push({path:'/about'});
                }
            }

        },
    }
</script>

<style scoped>

</style>