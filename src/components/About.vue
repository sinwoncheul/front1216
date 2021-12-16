<template>
	<div>
		<div id="breadcrumb" class="section">
			<div class="container">
				<div class="row">
					<div class="col-md-12">
						<ul class="breadcrumb-tree">
							<li><a href="#" @click="handlePage(1)">Home</a></li>
							<li class="active">회사목록</li>
						</ul>
					</div>
				</div>
			</div>
		</div>

		<div class="row" style="margin-top:100px;">
			<div class="col-md-8 col-md-offset-2">
				<div class="list-group">

					<div class="btn-group">
						<button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
							조회 <span class="caret"></span>
						</button>
						<ul class="dropdown-menu">
							<li><a href="#" @click="handleSearch(1)">최신순</a></li>
							<li><a href="#" @click="handleSearch(2)">별점순</a></li>
							<li><a href="#" @click="handleSearch(3)">판매량순</a></li>
						</ul>
					</div>

					<router-link to="#" v-for="item in items" v-bind:key="item" @click="handleDetail(item.insertcompanyno)" >
						<div class="list-group-item" style="margin-bottom:30px;">
							<h3 class="list-group-item-heading">{{ item.insertcompanyname }}</h3>
							<hr />
							<div class="row">
								<div class="col-md-9 col-md-push-3">
									<table class="" style="border:0px solid #999999;">
										<tbody>
											<tr>
												<th style="width:190px;height:30px;">주소</th>
												<td>{{ item.insertcompanyaddress }}</td>
											</tr>
											<tr>
												<th style="width:190px;height:30px;">연락처</th>
												<td>{{ item.insertcompanytel }}</td>
											</tr>
											<tr>
												<th style="width:190px;height:30px;">회사소개</th>
												<td>{{ item.insertcompanycontent }}</td>
											</tr>
											<tr>
												<th style="width:190px;height:30px;">기업 상품 조회수</th>
												<td>{{ item.insertcompanywishhit }}</td>
											</tr>
										</tbody>
									</table>
								</div>
								<div class="col-md-3 col-md-pull-9">
									<img :src="`/HOST/company2/select_image?insertcompanyno=${item.insertcompanyno}`" style="width:200px;height:200px" />
								</div>
							</div>	
						</div>
					</router-link>
				</div>
			</div>
		</div>
	</div>	
</template>


<script>
	import axios from "axios";

	export default {
		data() {
			return {
				insertcompanyname 		: "",
				insertcompanyaddress 	: "",
				insertcompanytel 		: "",
				insertcompanycontent 	: "",
				insertcompanywishhit 	: "",
				items 					: "", // 반복문
				imageData 				: 'img/default.jpg',
				token 		: sessionStorage.getItem("TOKEN1"),
			};
		},

		async created() {
			this.handleSelect();
		},
		mounted(){

		},
		methods:{
			async handleSelect() {
				const url = `/HOST/company2/select.json`;
				const headers = { "Content-Type": "application/json" };
				const response = await axios.get(url,{headers});
				console.log('About.vue => handleSelect');
				console.log(response.data.list);
				if(response.data.status === 200) {
					this.items = response.data.list;
					console.log(this.items);
				}
			},

			async handleSearch(val) {
				console.log(val);
			},

			async handleDetail(no) {
				this.$router.push({path:'/companyselect', query:{no:no}});
			},

			handlePage(idx) {
                if(idx === 1) {
                    this.$router.push({path:'/home'});
                }
            }
		}
	}
</script>

<style scoped>

</style>