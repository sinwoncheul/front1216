<template>
    <div>
		<div id="breadcrumb" class="section">
			<div class="container">
				<div class="row">
					<div class="col-md-12">
						<ul class="breadcrumb-tree">
							<li><a href="#" @click="handlePage(1)">Home</a></li>
							<li class="active">고객센터</li>
						</ul>
					</div>
				</div>
			</div>
		</div>


        <div class="section">
			<div class="container">
				<div class="row">
					<div id="aside" class="col-md-3">
						<div class="aside">
							<h3 class="aside-title">고객센터</h3>
							<div class="checkbox-filter">
								<div class="input-checkbox">
									<label style="font-size:14px" for="category-1" @click="changeMenu(1)"><span></span><strong>공지사항</strong></label>
								</div>

								<div class="input-checkbox">
									<label style="font-size:14px" for="category-1" @click="changeMenu(2)"><span></span><strong>판매Q&A</strong></label>
								</div>

								<div class="input-checkbox">
									<label style="font-size:14px" for="category-1" @click="changeMenu(3)"><span></span><strong>상품Q&A</strong></label>
								</div>

								<div class="input-checkbox">
									<label style="font-size:14px" for="category-1" @click="changeMenu(4)"><span></span><strong>1:1문의</strong></label>
								</div>
							</div>
						</div>
                    </div>

					<!-- 공지사항 -->
                    <div id="aside" class="col-md-9">
                        <div v-if="menu==1" class="billing-details order-details" style="padding:50px;">
                            <div class="form-group">
                                <h4>공지사항</h4>
                            </div>
                            <hr />
							<div class="form-group">
								<table class="table">
									<thead>
										<tr>
											<th>번호</th>
											<th>제목</th>
											<th>작성자</th>
										</tr>
									</thead>
									<tbody>
										<tr v-for="(board, idx) in noticeitems" v-bind:key="board">
											<td style="width:50px;">{{board.no}}</td>
											<td>
												<a href="#">
													<div class="form-group">
														<div class="input-checkbox">
															<input type="checkbox" :id="`create-account_${idx}`" @click="selectonenotice(board.no)">
															<label :for="`create-account_${idx}`">{{board.title}}</label>
															<div class="caption">
																<img :src="`/HOST/boards/selectboard_image?no=${board.no}`" style="width:350px;">
																<p>{{this.noticeonecontent[board.no]}}</p>
															</div>
														</div>
													</div>
												</a>
											</td>
											<td style="width:100px;">{{board.writer}}</td>
										</tr>
									</tbody>
								</table>
							</div>

							<ul class="reviews-pagination">
								<li class="active">1</li>
								<li><a href="#">2</a></li>
								<li><a href="#">3</a></li>
								<li><a href="#">4</a></li>
								<li><a href="#"><i class="fa fa-angle-right"></i></a></li>
							</ul>
							<br />

							<div class="header-search" style="text-align:center; border-top:2px solid red;">
								<form v-on:submit.prevent>
									<select class="input-select">
										<option value="0">제목</option>
										<option value="1">내용</option>
										<option value="1">작성자</option>
									</select>
									<input class="input" placeholder="검색어를 입력하세요.">
									<button class="search-btn" >검색</button>
								</form>
							</div>
						</div>
                    </div>


					<!-- 판매QNA ============================================================-->
                    <div id="aside" class="col-md-9">
                        <div v-if="menu==2" class="billing-details order-details" style="padding:50px;">
                            <div class="form-group">
                                <h4>판매Q&A</h4>
                            </div>
                            <hr />
							<div class="form-group">
								<table class="table">
									<thead>
										<tr>
											<th>번호</th>
											<th>제목</th>
											<th>작성자</th>
										</tr>
									</thead>
									<tbody>
										<tr v-for="(sellerqnaitem,idx) in sellerQNAlist" v-bind:key="sellerqnaitem">
											<td style="width:50px;">{{sellerqnaitem.sellerboardno}}</td>
											<td>
												<a href="#">
													<div class="form-group">
														<div class="input-checkbox">
															<input type="checkbox" :id="`create-account_${idx}`" @click="selectonesellerqna(sellerqnaitem.sellerboardno)">
															<label :for="`create-account_${idx}`">{{sellerqnaitem.sellertitle}}</label>
															<div class="caption">
																<img :src="`/HOST/boards/selectsellerboard_image?no=${sellerqnaitem.sellerboardno}`" style="width:350px;">
																<p>{{this.sellerqnaonecontent[sellerqnaitem.sellerboardno]}}</p>
															</div>
														</div>
													</div>
												</a>
											</td>
											<td style="width:100px;"> {{sellerqnaitem.sellerwriter}} </td>
										</tr>
									</tbody>
								</table>
							</div>

							<ul class="reviews-pagination">
								<li class="active">1</li>
								<li><a href="#">2</a></li>
								<li><a href="#">3</a></li>
								<li><a href="#">4</a></li>
								<li><a href="#"><i class="fa fa-angle-right"></i></a></li>
							</ul>
							<br />

							<div class="header-search" style="text-align:center; border-top:2px solid red;">
								<form>
									<select class="input-select">
										<option value="0">제목</option>
										<option value="1">내용</option>
										<option value="1">작성자</option>
									</select>
									<input class="input" placeholder="검색어를 입력하세요.">
									<button class="search-btn" >검색</button>
								</form>
							</div>

						</div>
                    </div>


					<!-- 쇼핑QNA ============================================================-->
                    <div id="aside" class="col-md-9">
                        <div v-if="menu==3" class="billing-details order-details" style="padding:50px;">
                            <div class="form-group">
                                <h4>쇼핑Q&A</h4>
                            </div>
                            <hr />
							<div class="form-group">
								<table class="table">
									<thead>
										<tr>
											<th>번호</th>
											<th>제목</th>
											<th>작성자</th>
										</tr>
									</thead>
									<tbody>
										<tr v-for="(shopqnaitem,idx) in shopqnaitems" v-bind:key="shopqnaitem">
											<td style="width:50px;">{{shopqnaitem.shopboardno}}</td>
											<td>
												<a href="#">
													<div class="form-group">
														<div class="input-checkbox">
															<input type="checkbox" :id="`create-account_${idx}`" @click="selectoneshopqna(shopqnaitem.shopboardno)">
															<label :for="`create-account_${idx}`">{{shopqnaitem.shoptitle}}</label>
															<div class="caption">
																<img :src="`/HOST/boards/selectshopboard_image?no=${shopqnaitem.shopboardno}`" style="width:350px;">
																<p>{{this.shopqnaonecontent[shopqnaitem.shopboardno]}}</p>
															</div>
														</div>
													</div>
												</a>
											</td>
											<td style="width:100px;"> {{shopqnaitem.shopwriter}} </td>
										</tr>
									</tbody>
								</table>
							</div>

							<ul class="reviews-pagination">
								<li class="active">1</li>
								<li><a href="#">2</a></li>
								<li><a href="#">3</a></li>
								<li><a href="#">4</a></li>
								<li><a href="#"><i class="fa fa-angle-right"></i></a></li>
							</ul>

							<br />

							<div class="header-search" style="text-align:center; border-top:2px solid red;">
								<form>
									<select class="input-select">
										<option value="0">제목</option>
										<option value="1">내용</option>
										<option value="1">작성자</option>
									</select>
									<input class="input" placeholder="검색어를 입력하세요.">
									<button class="search-btn" >검색</button>
								</form>
							</div>
						</div>
                    </div><!-- 쇼핑Q&A 종료-->

                </div>
            </div>
        </div>
    </div>
</template>

<script>
	import axios from 'axios';
    
	export default {
		data() {
            return {
                menu 			: 1,
				noticeitems		: "",
				noticeonecontent: [],

				sellerQNAlist	: "",
				sellerqnaonecontent:[],

				shopqnaitems	: "",
				shopqnaonecontent:[]
            };
        },

		async create() {

		},

		async mounted() {
			this.selectnoticelist();
		},

		methods : {
            changeMenu(menu){
                this.menu = menu;
				if(menu === 1) {
					this.selectnoticelist();
				}
				else if(menu === 2) {
					this.selectsellerqnalist();
				}
				else if(menu === 3) {
					this.selectshopqnalist();
				}
            },

			async selectonenotice(no){
				console.log(no);
				const url = `/HOST/boards/selectoneboard.json?no=${no}`;
				const headers = { "Content-Type": "multipart/form-data" };
				const response = await axios.get(url, {headers});

				console.log("Center.vue => selectonenotice");
				console.log(response);
				if(response.data.status === 200){
					this.noticeonecontent[no] = response.data.list.content;
				}
			},

			async selectnoticelist(){
				const url = `/HOST/boards/select.json`;
				const headers = { "Content-Type": "application/json" };
				const response = await axios.get(url, { headers });

				console.log("Center.vue => selectnoticelist");
				console.log(response);
				if (response.data.status === 200) {
					this.noticeitems = response.data.list;
				}
			},
			
			async selectsellerqnalist(){
				const url = `/HOST/boards/selectsellerboard.json`;
				const headers = { "Content-Type": "application/json" };
				const response = await axios.get(url, {headers:headers});

				console.log("Center.vue => selectsellerqnalist");
				console.log(response);
				if(response.data.status === 200){
					this.sellerQNAlist = response.data.list;
				}
			},

			async selectshopqnalist(){
				const url = `/HOST/boards/selectshopboard.json`;
				const headers = { "Content-Type": "application/json" };
				const response = await axios.get(url, { headers });
				console.log("Center.vue => selectshopqnalist");
				console.log(response);
				if(response.data.status === 200){
					this.shopqnaitems = response.data.list;
					console.log(this.shopqnaitems);
				}
			},

			async selectonesellerqna(sellerboardno){
				// console.log(sellerboardno);
				const url = `/HOST/boards/selectonesellerboard.json?sellerboardno=${sellerboardno}`;
				const headers = { "Content-Type": "multipart/form-data" };
				const response = await axios.get(url, {headers});
				console.log("Center.vue => selectonesellerqna");
				console.log(response);
				if(response.data.status === 200){
					this.sellerqnaonecontent[sellerboardno] = response.data.list.sellercontent;
					// console.log(this.sellerqnaonecontent);
				}
			},

			async selectoneshopqna(shopboardno){
				// console.log(shopboardno);
				const url = `/HOST/boards/selectoneshopboard.json?shopboardno=${shopboardno}`
				const headers = { "Content-Type": "multipart/form-data" };
				const response = await axios.get(url, {headers});
				console.log("Center.vue => selectoneshopqna");
				console.log(response);
				if(response.data.status === 200){
					this.shopqnaonecontent[shopboardno] = response.data.list.shopcontent;
				}
			},

			handlePage(idx) {
				if(idx === 1) {
					this.$router.push({path:'/home'});
				}
			}
		},
    }
</script>

<style scoped>

</style>