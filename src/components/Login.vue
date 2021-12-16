<template>
	<div>
		<div class="section">
			<div class="container">
				<div class="row">
					<div class="col-md-6" >
						<div class="billing-details order-details" style="padding:50px;">
							<div class="section-title">
								<h3 class="title">개인로그인</h3>
							</div>

							<div class="form-group">
								<input class="input" type="text" v-model="userid" name="first-name" placeholder="아이디">
							</div>

							<div class="form-group">
								<input class="input" type="password" v-model="userpassword" name="last-name" placeholder="암호">
							</div>

							<div class="form-group">
								<a href="#" @click="handleLogin(1)" class="primary-btn order-submit">로그인</a>
							</div>
						</div>
					</div>

					<div class="col-md-6" >
						<div class="billing-details order-details" style="padding:50px;">
							<div class="section-title">
								<h3 class="title">기업로그인</h3>
							</div>

							<div class="form-group">
								<input class="input" type="text" v-model="userid1" name="first-name" placeholder="아이디">
							</div>

							<div class="form-group">
								<input class="input" type="password" v-model="userpassword1" name="last-name" placeholder="암호">
							</div>

							<div class="form-group">
								<a href="#" @click="handleLogin(2)" class="primary-btn order-submit">로그인</a>
							</div>
						</div>
					</div>
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
				userid			: "",
				userpassword	: "",
				userid1			: "b1",
				userpassword1	: "a",
				token 			: sessionStorage.getItem("TOKEN1"),
			}
		},

		methods: {
			async handleLogin(type) {
				if (type === 1){ // 개인 회원
					if(this.userid.length === 0){
						return alert("아이디를 입력하세요.")
					}
					if(this.userpassword.length === 0){
						return alert("비밀번호를 입력하세요.")
					}
					const url = "/HOST/company/login.json?type=" + type;
					const body = { companyid: this.userid, password: this.userpassword };

					const headers = { "Content-Type": "application/json" };
					const response = await axios.post(url,body,{headers});
					console.log(response.data);

					if (response.data.status === 200) {
						sessionStorage.setItem("TOKEN1", response.data.token);
						alert("로그인 성공");
						sessionStorage.setItem("TYPE", 1);

						this.$router.push({ path: "/home" });
						this.$emit('changeLogged');
					} else if(response.data.status === 0) {
						alert("개인 회원이 아닙니다.");
					} else if (response.data.status === -1) {
						alert("정보가 일치하지 않습니다.");
					}
				} else if (type === 2)  { // 기업 회원
					if(this.userid1.length === 0){
						return alert("아이디를 입력하세요.")
					}
					if(this.userpassword1.length === 0){
						return alert("비밀번호를 입력하세요.")
					}
					const url1 = "/HOST/company/login.json?type=" + type;
					const body1 = { companyid: this.userid1, password: this.userpassword1 };

					const headers1 = { "Content-Type": "application/json" };
					const response1 = await axios.post(url1, body1,{headers1});
					console.log(response1.data);

					if (response1.data.status === 200) {
						sessionStorage.setItem("TOKEN1", response1.data.token);
						alert("로그인 성공");
						sessionStorage.setItem("TYPE", 2);
						this.$router.push({ path: "/home" });
						this.$emit('changeLogged');
					} else if(response1.data.status === 0) {
						alert("기업 회원이 아닙니다.");
					} else if (response1.data.status === -1) {
						alert("존재 하지 않는 회원입니다.");
					}
				}
			}
		},

	}
</script>

<style scoped>

</style>