<template>

	<div class="container">
		<div class="row">
			<div class="col-md-3"></div>
			<div class="col-md-6">
				<div>
					<div class="section">
						<div class="row">
							<div>
								<div class="billing-details order-details" style="padding:50px;">
									<div class="section-title">
										<h3 class="title">회원가입</h3>
										</div>
											<div class="form-group">
												<div class="btn-group" role="group" aria-label="...">
												<button type="button" @click="ChangeMenu(1)" :class="class1[0]">개인</button>
												<button type="button" @click="ChangeMenu(2)" :class="class1[1]">기업</button>
											</div>
											<hr>
											
										</div>
										<!-- 개인 -->
										<div v-if="menu === 1">
								
											<div class="form-group">
												<input class="input" type="text" :class="id[idindex]" @input="testid($event)" v-model="companyid" name="first-name" placeholder="아이디">
												<div style="margin-top:5px;">
													<span class="valid-feedback" v-if="chk"> 사용가능한 아이디 </span>
													<span class="valid-feedback" v-if="!chk" > 사용불가능한 아이디 </span>
												</div>
											</div>

											<div class="form-group">
												<input class="input" type="password" v-model="password" name="last-name" placeholder="비밀번호">
											</div>

											<div class="form-group">
												<input class="input" type="password" @input="testpw($event)" :class="pw[pwindex]" v-model="password1" name="email" placeholder="비밀번호확인">
												<div style="margin-top:5px;">
													<span class="valid-feedback" v-if="word"> 비밀번호가 일치합니다. </span>
													<span class="valid-feedback" v-if="!word" > 비밀번호가 다릅니다. </span>
												</div>
											</div>

											<div class="form-group">
												<input class="input" type="text" v-model="companyname" name="address" placeholder="이름">
											</div>

											<div class="form-group">
												<input class="input" type="text" v-model="phone" name="country" placeholder="전화번호">
											</div>

											<div class="form-group">
												<input class="input" type="text" v-model="country" name="zip-code" placeholder="국적">
											</div>

											<div class="form-group">
												<input class="input" type="text" v-model="city" name="tel" placeholder="도시">
											</div>

											<div class="form-group">
												<div class="input-checkbox">
													<input type="checkbox" id="create-account" v-model="checkbox">
													<label for="create-account" >
														<span></span>약관 동의합니다.
													</label>
												</div>
											</div>

											<div class="form-group">
												<a class="primary-btn order-submit" type="submit" @click="handlejoin">회원가입</a>
											</div>
										</div>
										
										
										<!-- 기업 -->
										<div v-if="menu === 2">
											<div class="form-group">
												<input class="input" type="text" v-model="companyid" @input="testid($event)" name="first-name" placeholder="아이디">
												<div style="margin-top:5px;">
													<span class="valid-feedback"> 사용가능한 아이디 </span>
												</div>
											</div>

											<div class="form-group">
												<input class="input" type="password" v-model="password" name="last-name" placeholder="비밀번호">
											</div>

											<div class="form-group">
												<input class="input" type="password" v-model="password1" name="email" placeholder="비밀번호확인">
											</div>

											<!-- <div class="form-group">
												<input class="input" type="text" v-model="companyname" name="address" placeholder="이름">
											</div> -->

											<div class="form-group">
												<input class="input" type="text" v-model="companyname" name="city" placeholder="회사명">
											</div>
											
											<div class="form-group">
												<input class="input" type="text" v-model="phone" name="country" placeholder="전화번호">
											</div>

											<div class="form-group">
												<input class="input" type="text" v-model="country" name="zip-code" placeholder="국적">
											</div>

											<div class="form-group">
												<input class="input" type="tel" v-model="city" name="tel" placeholder="도시">
											</div>

											<div class="form-group">
												<div class="input-checkbox">
													<input type="checkbox" id="create-account" v-model="checkbox">
													<label for="create-account" >
														<span></span>약관에 동의합니다.
													</label>
												</div>
											</div>

											<div class="form-group">
												<a class="primary-btn order-submit" type="submit" @click="handlejoin">회원가입</a>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="col-md-3"></div>
		</div>
	</div>
    
</template>

<script>
	import axios from "axios";
	export default {
		data() {
			return {
				companyid	: "a1",
				password	: "a",
				password1	: "",
				companyno	: "123",
				phone	: "010-0000-0001",
				companyname	: "학원",
				country	: "대한민국",
				city	: "부산",
				checkbox : false,
				idindex	: 0,
				pwindex	: 0,
				menu : 1,
				chk  : false,
				word : false,
				class1 : ['btn btn-primary', 'btn btn-default'],
				id: [
					{ "form-control": true, "is-valid": false, "is-invalid": false },
					{ "form-control": true, "is-valid": true, "is-invalid": false },
					{ "form-control": true, "is-valid": false, "is-invalid": true },
				],
				pw: [
					{ "form-control": true, "is-valid": false, "is-invalid": false },
					{ "form-control": true, "is-valid": true, "is-invalid": false },
					{ "form-control": true, "is-valid": false, "is-invalid": true },
				],
			};
		},

		methods: {
			async handlejoin() {
				if (this.companyid.length === 0) {
					return alert("아이디를 입력하세요");
				}
				if (this.password.length === 0) {
					return alert("비밀번호를 입력하세요");
				}
				if (this.companyno.length === 0) {
					return alert("사업자번호를 입력하세요");
				}
				if (this.phone.length === 0) {
					return alert("연락처를 입력하세요");
				}
				if (this.companyname === 0){
					return alert("회사명을 입력하세요");
				}
				if (this.country.length === 0) {
					return alert("국적을 입력하세요");
				}
				if (this.city.length === 0) {
					return alert("도시를 입력하세요");
				}
				if (this.checkbox === false) {
					return alert("약관에 동의하세요.");
				}

				if (this.chk === false) {
					return alert("사용 불가능한 아이디 입니다.");
				}

				if (this.menu === 1){
					const headers = { "Content-Type": "application/json" };
					const body = {
						companyid: this.companyid,
						password: this.password,
						companyno: this.companyno,
						phone: this.phone,
						companyname: this.companyname,
						country: this.country,
						city: this.city,
					};
					const url = `/HOST/company/join.json?type=1`; // 개인 회원가입
					const response = await axios.post(url, body, headers);
					console.log(response);
					alert("회원가입이 완료되었습니다.");
					this.$router.push({ path: "/Login" });
				} else if(this.menu===2) {
					const headers1 = { "Content-Type": "application/json" };
					const body1 = {
						companyid: this.companyid,
						password: this.password,
						phone: this.phone,
						country: this.country,
						city: this.city,
					};

					const url1 = `/HOST/company/join.json?type=2`; // 기업 회원가입
					const response1 = await axios.post(url1, body1, headers1);
					console.log(response1);
					alert("회원가입이 완료되었습니다.");
					this.$router.push({ path: "/Login" });
				}
			},

			async testid(event) {
				console.log(event.target.value);
				this.companyid = event.target.value;
				const headers = { "Content-Type": "application/json" };
				const body = {
					companyid: this.companyid,
				};
				const url = `/HOST/company/select.json`;
				const response = await axios.post(url, body, { headers });
				// console.log(this.chk);
				console.log(response);
				if( response.data.status === 200) {
					// console.log(this.chk);
					this.chk = false;
				} else if (response.data.status === 1010) {
					// console.log(this.chk);
					this.chk = true;
				}
			},

			async testpw(event) {
				console.log(event.target.value);
				this.password1 = event.target.value;

				if(this.password != this.password1) {
					this.word = false;
					
				}else if ( this.password == this.password1) {
					this.word = true;
				}
			},

			ChangeMenu(val){
				this.menu = val;
				if(val ===1 ){
					this.class1 = ['btn btn-primary', 'btn btn-default'];
				}
				else if(val ===2 ){
					this.class1 = ['btn btn-default', 'btn btn-primary'];
				}
			}
			

		},
	};
</script>

<style scoped>

</style>