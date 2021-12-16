<template>
    <div>
		<div id="breadcrumb" class="section">
			<div class="container">
				<div class="row">
					<div class="col-md-12">
						<ul class="breadcrumb-tree">
							<li><a href="#" @click="handlePage(1)">Home</a></li>
							<li class="active">마이페이지</li>
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
							<h3 class="aside-title">마이페이지</h3>
							<div class="checkbox-filter">
								<div class="input-checkbox" style="margin:0px;">
									<div class="btn-group" role="group" style="margin-left: 7px; margin-bottom:3px;">
										<button type="button" style="border: none;" class="btn btn-default" @click="changeMenu(1)">
											<strong>암호변경</strong>
										</button>
									</div>
								</div>

								<div class="input-checkbox" style="margin:0px;">
									<div class="btn-group" role="group" style="margin-left: 7px; margin-bottom:3px;">
										<button type="button" style="border: none;" class="btn btn-default" @click="changeMenu(2)">
											<strong>내정보</strong>
										</button>
									</div>
								</div>


								<div class="input-checkbox" style="margin:0px;">
									<div class="btn-group" role="group" style="margin-left: 7px; margin-bottom:3px;">
										<button type="button" style="border: none;" class="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
											<strong>기업관리</strong>
											<span class="caret"></span>
										</button>
										<ul class="dropdown-menu">
											<li><label style="font-size:14px" for="category-1" @click="changeMenu(3)"><span></span><strong>기업조회</strong></label></li>
											<li><label style="font-size:14px" for="category-1" @click="changeMenu(4)"><span></span><strong>기업등록</strong></label></li>
										</ul>
									</div>
								</div>

								
								<div class="input-checkbox" style="margin:0px;">
									<div class="btn-group" role="group" style="margin-left: 7px; margin-bottom:3px;">
										<button type="button" style="border: none;" class="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
											<strong>상품관리</strong>
											<span class="caret"></span>
										</button>
										<ul class="dropdown-menu">
											<li><label style="font-size:14px" for="category-1" @click="changeMenu(5)"><span></span><strong>상품조회</strong></label></li>
											<li><label style="font-size:14px" for="category-1" @click="changeMenu(6)"><span></span><strong>상품등록</strong></label></li>
										</ul>
									</div>
								</div>

								<div class="input-checkbox" style="margin:0px;">
									<div class="btn-group" role="group" style="margin-left: 7px; margin-bottom:3px;">
										<button type="button" style="border: none;" class="btn btn-default" @click="changeMenu(8)">
											<strong>주문관리</strong>
										</button>
									</div>
								</div>

								<div class="input-checkbox" style="margin:0px;">
									<div class="btn-group" role="group" style="margin-left: 7px; margin-bottom:3px;">
										<button type="button" style="border: none;" class="btn btn-default" @click="changeMenu(7)">
											<strong>회원탈퇴</strong>
										</button>
									</div>
								</div>

							</div>
						</div>
                    </div>



                    <div id="aside" class="col-md-9">
						
						<!-- 메뉴 1(암호변경) -->
                        <div v-if="menu==1" class="billing-details order-details" style="padding:50px;">
                            <div class="form-group">
                                <h4>암호변경</h4>
                            </div>
                            <hr />
							<div class="form-group">
								<input class="input" type="password" v-model="newpassword" placeholder="새 비밀번호">
							</div>

							<div class="form-group">
								<input class="input" type="password" v-model="newpassword1" placeholder="새 비밀번호 확인">
							</div>

							<div class="form-group">
								<div class="input-checkbox">
									<input type="checkbox" id="create-account">
									<label for="create-account"><span></span>암호를 변경하시겠습니까?</label>
									<div class="caption">

										<input class="input" type="password" v-model="password" placeholder="현재 비밀번호">
									</div>
								</div>
							</div>
                            <div class="form-group">
                                <a href="#" @click="handlepassword" class="primary-btn order-submit">암호변경</a>
                            </div>
						</div>
						
						
						<!-- 메뉴 2(정보수정) -->
						<div v-if="menu==2" class="billing-details order-details" style="padding:50px;">
							<div class="form-group">
                                <h4>내정보</h4>
                            </div>
                            <hr />
							<!-- 내정보(조회) -->
							<div v-if="updateinformationplace !== true" style="margin-left:20px;">
								<div class="form-group">
									<div class="row">
										<div class="col-3"><label class="col-sm-2 control-label">닉네임</label></div>
										<div class="col-xs-6">{{mylist.companyname}}</div><hr>
									</div>
								</div>

								<div class="form-group">
									<div class="row">
										<div class="col-3"><label class="col-sm-2 control-label">사업자번호</label></div>
										<div class="col-xs-6">{{mylist.companyno}}</div><hr>
									</div>
								</div>

								<div class="form-group">
									<div class="row">
										<div class="col-3"><label class="col-sm-2 control-label">연락처</label></div>
										<div class="col-xs-6">{{mylist.phone}}</div><hr>
									</div>
								</div>

								<div class="form-group">
									<div class="row">
										<div class="col-3"><label class="col-sm-2 control-label">국적</label></div>
										<div class="col-xs-6">{{mylist.country}}</div><hr>
									</div>
								</div>

								<div class="form-group">
									<div class="row">
										<div class="col-3"><label class="col-sm-2 control-label">도시</label></div>
										<div class="col-xs-6">{{mylist.city}}</div><hr>
									</div>
								</div>

								<div class="form-group">
										<a href="#" type="button" @click="updateinformation" class="primary-btn order-submit">내정보수정</a>
								</div>
							</div>

							<!-- 정보수정 -->
							<div v-if="updateinformationplace === true">
								<div class="form-group" style="margin-left:20px;">
									<div class="row">
										<div class="col-3"><label class="col-sm-2 control-label">닉네임</label></div>
										<div class="col-xs-6">{{mylist.companyname}}</div><hr>
									</div>
								</div>

								<div class="form-group">
									<input class="input" type="text" v-model="companyno" placeholder="사업자번호">
								</div>

								<div class="form-group">
									<input class="input" type="text"  v-model="phone"   placeholder="연락처">
								</div>

								<div class="form-group">
									<input class="input" type="text" v-model="country"  placeholder="국적">
								</div>

								<div class="form-group">
									<input class="input" type="text" v-model="city"  placeholder="도시">
								</div>

								<div class="form-group">
									<div class="row">
										<div class="col-md-6"><a href="#" type="button" @click="cancelupdate" class="primary-btn order-submit" style="background-color:rgb(21, 7, 148);">내정보변경취소</a></div>
										<div class="col-md-6"><a href="#" type="button" @click="updates" class="primary-btn order-submit">내정보변경완료</a></div>
									</div>
									
								</div>
							</div>
						</div>

						<!-- 메뉴 3(내기업조회) -->
						<div v-if="menu==3" class="billing-details order-details" style="padding:50px;">
							<div class="form-group">
								<h4>MY기업정보조회</h4>
							</div>
							<hr />
							<div class="row" v-if="updatecompanyinformationplace !== true">
								<div class="col-md-4 col-xs-6">
									<div class="product" style="width: 740px;" v-for="list in mycompany" :key="list">
										<div class="product-img">
											<img :src="`/HOST/company2/select_image?insertcompanyno=${list.insertcompanyno}`" style="width:100%; height:400px;" />
										</div>
										<div class="product-body">
											기업명 :	<strong>{{list.insertcompanyname}}</strong><br><hr>
											기업주소 :	<strong>{{list.insertcompanyaddress}}</strong><br><hr>
											회사번호 :	<strong>{{list.insertcompanytel}}</strong><br><hr>	
											회사내용 :	<strong>{{list.insertcompanycontent}}</strong><br><hr>
										</div>
										<div class="add-to-cart">
											<button class="add-to-cart-btn" ><i class="fa fa-shopping-cart"></i>기업관리</button>
											<button class="add-to-cart-btn"  @click="updatecompanyinformation"><i class="fa fa-shopping-cart"></i>정보수정</button>
											<button class="add-to-cart-btn" ><i class="fa fa-shopping-cart"></i>삭제</button>
										</div>
									</div>
								</div>
							</div>
							

							<div class="row" v-if="updatecompanyinformationplace === true">
								<div class="col-md-4 col-xs-6">
									<div class="product" style="width: 740px;">
										<div class="product-img">
											<img :src="companyImage" style="width:100%; height:400px;">
										</div>
										<div class="product-body">
											<div class="form-group">
												<input class="input" type="text"  v-model="insertcompanyname" placeholder="회사명">
											</div>
											<div class="form-group">
												<input class="input" type="text"  v-model="insertcompanyaddress" placeholder="주소">
											</div>
											<div class="form-group">
												<input class="input" type="text"  v-model="insertcompanytel" placeholder="연락처">
											</div>
											<div class="form-group">
												<input class="input" type="text"  v-model="insertcompanycontent" placeholder="회사설명">
											</div>				
											<div class="form-group">
												<input class="input" type="file" id="updatefile" ref="updatefile" @change="handleimgupdateFileUpload($event)">
											</div>
										</div>
										<div class="add-to-cart">
											<button class="add-to-cart-btn" style="background-color:orange;" @click="updatecompanyinformations" ><i class="fa fa-shopping-cart"></i>정보수정완료</button>
										</div>
									</div>
								</div>
							</div>
						</div>


						<!-- 메뉴 4(기업등록) -->
						<div v-if="menu==4" class="billing-details order-details" style="padding:50px;">
							<div class="form-group">
                                <h4>MY기업등록</h4>
                            </div>

                            <hr />
							
                            <div class="form-group">
								<input class="input" type="text" v-model="insertcompanyname" name="companyname" placeholder="기업명">
							</div>

							<div class="form-group">
								<input class="input" type="text" v-model="insertcompanyaddress" name="companyadress" placeholder="주소">
							</div>

							<div class="form-group">
								<input class="input" type="text"  v-model="insertcompanytel"  name="companyphone" placeholder="연락처">
							</div>

							<div class="form-group">
								<input class="input" type="text" v-model="insertcompanycontent" name="companyinformation" placeholder="기업설명">
							</div>

							<div class="form-group">
								<input type="file" id="file" ref="file" @change="handleFileUpload($event)" />
								<div class="caption" for="create-account" v-if="file === true">
									<img src="#" >
								</div>
							</div>

							<div class="form-group">
								<a href="#" @click="handleChangeCompany" class="primary-btn order-submit">기업등록완료</a>
                            </div>
						</div>

						<!-- 메뉴 5(내상품조회) -->
						<div v-if="menu==5" class="billing-details order-details" style="padding:50px;">
							<div class="form-group">
								<h4>MY상품정보조회</h4>
							</div>

							<hr />


							<div class="row">
								<table class="table table-striped" style="border: 1px solid #cccccc;">
									<thead>
										<tr>
											<th>이미지</th>
											<th>상품명</th>
											<th>상품내용</th>
											<th>상품가격</th>
											<th>상품수량</th>
											<th class="w100">버튼</th>
										</tr>
									</thead>

									<tbody>
										<tr v-for="(item,idx) in product_items" v-bind:key="item">
											<td style="width:300px;">
												<img :src="`/HOST/product/myselect_image?productno=${item.productno}`" style="width:180px;height:160px" />
												<input type="file"  @change="handleFileUpdate($event)"  name="companyadress" />
											</td>
											<td><input type="text" style="width:70px" v-model="producttitle1[idx]"  /></td>
											<td><input type="text" style="width:70px" v-model="productcontent1[idx]"  /></td>
											<td><input type="text" style="width:70px" v-model="producttotalprice1[idx]"  /></td>
											<td><input type="text" style="width:70px" v-model="productquantity1[idx]" /></td>
											<td>
												<button class="add-to-cart-btn" style="margin-bottom:10px;"  data-toggle="modal" data-target="#exampleModalLong" >옵션관리</button>
												<br />
												<button class="add-to-cart-btn" style=""  @click="updateproductlist(idx)">정보수정</button>
											</td>
										</tr>
									</tbody>
								</table>
							</div>

						</div>


						<!-- 메뉴 6(상품등록) -->
						<div v-if="menu==6" class="billing-details order-details" style="padding:50px;">
							<div class="form-group">
								
								<h4>MY상품등록</h4>

								<div class="row">
									<div class="col-xs-6 col-md-4">
										<div class="panel panel-default">
											<div class="panel-heading">
												<h3 class="panel-title"><strong>회사번호</strong></h3>
											</div>
											<div class="panel-body">
												<select v-model="companynumberselect">
													<option v-for="item  in companynumber" v-bind:key="item" :value="item.insertcompanyno">{{item.insertcompanyname}}</option>
												</select>
											</div>
										</div>
									</div>
								</div>
							</div>
							<hr />

							<div class="form-group">
								<div class="row">

									<div class="col-xs-6 col-md-4">
										<img :src="imageData" style="width:210px;height:210px;cursor:pointer;">
										<!-- <input type="file" @change="handlemainimg($event)"> -->
										<input type="file" v-for="item in files" v-bind:key="item" id="files" @change="handleImage($event)"/>
									</div>
									
									<div class="col-xs-6 col-md-4">
										<div class="panel panel-default">
											<div class="panel-heading"><strong>상품명</strong></div>
											<div class="panel-body">
												<input type="text" v-model="producttitle">
											</div>
										</div>
										<div class="panel panel-default">
											<div class="panel-heading">
												<h3 class="panel-title"><strong>가격</strong></h3>
											</div>
											<div class="panel-body">
												<input type="text" v-model="producttotalprice">
											</div>
										</div>
									</div>

									<div class="col-xs-6 col-md-4">
										<div class="panel panel-default">
											<div class="panel-heading">
												<h3 class="panel-title"><strong>총수량</strong></h3>
											</div>
											<div class="panel-body">
												<input type="text" v-model="productquantity">
											</div>
										</div>
									</div>

									<div class="col-xs-6 col-md-4">
										<div class="panel panel-default">
											<div class="panel-heading">
												<h3 class="panel-title"><strong>배송기간</strong></h3>
											</div>
											<div class="panel-body">
												<input type="text" v-model="deliverydate">
											</div>
										</div>
									</div>

									<div class="col-xs-6 col-md-4">
										<div class="panel panel-default">
											<div class="panel-heading">
												<h3 class="panel-title"><strong>배송비</strong></h3>
											</div>
											<div class="panel-body">
												<select v-model="deliverypay">
													<option v-for= "(item,idx) in deliverypayitem"  v-bind:key="item" :value="idx+1">{{item}}</option>
												</select>
											</div>
										</div>
									</div>
								</div>

								<div class="form-group">
									<label for="exampleFormControlTextarea1">상품설명</label>
									<textarea class="form-control" v-model="productcontent" id="exampleFormControlTextarea1" rows="3"></textarea>
								</div>
						
								<div class="form-group">
									<div style="margin-bottom:100px; border-bottom:1px solid black; padding-bottom:20px" >
										<a href="#" type="submit" @click="handleInsert" class="primary-btn order-submit">상품등록완료</a>
									</div>
								</div>

								<table class="table table-striped" style="border:1px solid #999999;">
									<thead>	
										<tr>
											<th>체크</th>
											<th>코드</th>
											<th>상품명</th>
											<th>상품가격</th>
											<th>상품수량</th>
											<th>배송비</th>
										</tr>
									</thead>
									<tbody>
										<tr v-for="item in product_items" v-bind:key="item">
											<td><input type="checkbox" v-model="chk" :value="item.productno"/></td>
											<td>{{item.productno}}</td>
											<td>{{item.producttitle}}</td>
											<td>{{item.producttotalprice}}</td>	
											<td>{{item.productquantity}}</td>	
											<td>{{item.deliverypay}}</td>
										</tr>	
									</tbody>
								</table>
								<button class="form-group btn btn-primary" style="float:right;" @click="1" data-toggle="modal" data-target="#optionmodal">옵션추가</button>
							</div>
						</div>


						<!-- 메뉴6 회원탈퇴 -->
                        <div v-if="menu==7" class="billing-details order-details" style="padding:50px;">
                            <div class="form-group">
                                <h4>회원탈퇴</h4>
                            </div>

                            <hr />
							
                            <div class="form-group">
								<input class="input" type="password" v-model="companyid"  placeholder="아이디">
							</div>

							<div class="form-group">
								<input class="input" type="password" v-model="password"  placeholder="비밀번호">
							</div>

					
                            <div class="form-group">
                                <a href="#" @click="handledelete" class="primary-btn order-submit">회원탈퇴</a>
                            </div>
						</div>
					</div>
                </div>
            </div>
        </div>          

		<!-- 상품 옵션관리 MODAL -->
		<div class="modal fade" id="exampleModalLong" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
			<div class="modal-dialog" role="document">
				<div class="modal-content">
				<div class="modal-header">
					<h3 class="modal-title" id="exampleModalLongTitle">상품 옵션관리</h3>
					<button type="button" class="close" data-dismiss="modal" aria-label="Close" style="width:60px;">
					<span aria-hidden="true">&times;</span>
					</button><hr/>
					<nav class="navbar navbar-light bg-light justify-content-between">
						<form class="form-inline" style="float:right;">
							<input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
							<button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
						</form>
					</nav>
				</div>
				<div class="modal-body">
					<div v-if="updateoptionmodalplace !== true">
					<table class="table" >
					<thead class="thead-light">
						<tr>
						<th scope="col">옵션번호</th>
						<th scope="col">상품명</th>
						<th scope="col">가격</th>
						<th scope="col">수량</th>
						<th scope="col">사이즈</th>
						<th scope="col">컬러</th>
						</tr>
					</thead>
					<tbody>
						<tr>
						<th scope="row">1</th>
						<td>아이폰</td>
						<td>1,200,000</td>
						<td>155</td>
						<td></td>
						<td>블루</td>
						<td><button class="btn btn-warning" @click="updateoptionmodal">수정</button></td>
						<td><button class="btn btn-danger">삭제</button></td>
						</tr>
					</tbody>
					</table>
					</div>

					<div v-if="updateoptionmodalplace === true">
						<table class="table" >
						<thead class="thead-light">
							<tr>
							<th scope="col">번호</th>
							<th scope="col">상품명</th>
							<th scope="col">가격</th>
							<th scope="col">수량</th>
							<th scope="col">사이즈</th>
							<th scope="col">컬러</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<th scope="row">1</th>
								<td><input type="text" style="width:100px;"></td>
								<td><input type="text" style="width:50px;"></td>
								<td><input type="text" style="width:50px;"></td>
								<td><input type="text" style="width:50px;"></td>
								<td><input type="text" style="width:50px;"></td>
								<td><button class="btn btn-warning">수정완료</button></td>
								<td><button class="btn btn-danger">삭제</button></td>
							</tr>
						</tbody>
						</table>
								<input type="file" style="padding-top:0px;">
					</div>
				</div>
				<div class="modal-footer">
					<button type="button" class="btn btn-secondary" data-dismiss="modal">취소</button>
					<button type="button" class="btn btn-primary">일괄저장</button>
				</div>
				</div>
			</div>
		</div>

		<!-- 옵션관리 MODAL -->
		<div class="modal fade" id="optionmodal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
			<div class="modal-dialog" role="document">
				<div class="modal-content" style="text-align:center;">
				<div class="modal-header">
					<h3 class="modal-title" id="exampleModalLongTitle">옵션추가</h3>
				</div>	
					<div class="panel panel-default">
					<div class="panel-heading">
						<h3 class="panel-title"><strong>옵션명</strong></h3>
					</div>
					<div class="panel-body">
						<input type="text" v-model="optionname">
					</div>
					</div>									

					<div class="panel panel-default">
					<div class="panel-heading">
						<h3 class="panel-title"><strong>색상</strong></h3>
					</div>
					<div class="panel-body">
						<input type="text" v-model="optioncolor">
					</div>
					</div>

					<div class="panel panel-default">
					<div class="panel-heading">
						<h3 class="panel-title"><strong>사이즈</strong></h3>
					</div>
					<div class="panel-body">
						<input type="text" v-model="optionsize">
					</div>
					</div>

					<div class="panel panel-default">
					<div class="panel-heading">
						<h3 class="panel-title"><strong>수량</strong></h3>
					</div>
					<div class="panel-body">
						<input type="text" v-model="optionquantity">
					</div>
					</div>

					<div class="panel panel-default">
					<div class="panel-heading">
						<h3 class="panel-title"><strong>옵션가격</strong></h3>
					</div>
					<div class="panel-body">
						<input type="text" v-model="optionprice">
					</div>
					</div>

					<div class="modal-footer">
						<button type="button" class="btn btn-secondary" data-dismiss="modal">취소</button>
						<button type="button" @click="handleoption" class="btn btn-primary" data-dismiss="modal">일괄추가</button>
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
			menu 					: 1,
			file 					: false,
	
			// 기업등록
			insertcompanyno 		: "",
			insertcompanyname		: "",
			insertcompanyaddress	: "",
			insertcompanytel		: "",
			insertcompanycontent	: "",

			updateinformationplace	: false,
			updatecompanyinformationplace: false,
			updateproductsplace		: false,
			updateoptionmodalplace	: false,

			// 옵션
			optioncolor : "",
			optionsize : "",
			optionname : "",
			optionprice : "",
			optionquantity : "",
			companynumber : [],
			companynumberselect : "",

			// 상품
			deliverypay : "1",
			deliverypayitem : ['무료배송', '유료배송'],
			deliverydate : "",	
			
			producttitle:"",
			productno : "",
			productcontent: "",
			productprice: "",
			productquantity: "",
			productsize : "",
			productcolor : "",
			product_items : [],
			token 			: sessionStorage.getItem("TOKEN1"),


			producttitle1: [],
			productcontent1: [],
			productprice1: [],
			productquantity1: [],
			producttotalprice1 :[],


			//내정보
			companyname : "",
			companyno : "",
			country : "",
			city : "",
			phone : "",

			//수정
			password : "",
			newpassword : "",
			
			count: 1,
			files : [null],
			items: [],
			chk: [],
			user : [],
			mylist : {},
			mycompany : [],
			idx : 0,
			updateproducts :{},
			imageData		: "img/default.jpg", 
			companyImage 	: "img/default.jpg"
		};
	},


	
	methods:{
		updateoptionmodal(){
			this.updateoptionmodalplace = true;
		},

		updateproduct(val){
			this.idx = val; 
			this.updateproductsplace = true;
		},

		handleimgupdateFileUpload(e) {
			this.updatefile = e.target.files[0];
			console.log(this.files);
		},

		handleFileUpload(e) {
			this.files = e.target.files[0];
			console.log(this.files);
		},

		handleFileUpdate(e) {
			this.updateproducts = e.target.files[0];
			console.log(this.updateproducts);
		},


		handleImage(e) {
			this.files.push(e.target.files[0]);
			console.log(this.files);
		},

		// 다이얼로그 띄우기
		async handleUpdateImage(code) { 
			console.log(code);
			this.code = code;
			this.dialogVisible = true;
		},

		//my기업 수정
		async updatecompanyinformations(){ 
			this.updatecompanyinformationplace = false;
			const headers = { "Content-Type": "application/json", "token" : this.token };
			const url = `/HOST/company2/insertcompanyupdate`;
			const body = {
				insertcompanyname : this.insertcompanyname,
				insertcompanyaddress : this.insertcompanyaddress,
				insertcompanytel : this.insertcompanytel,
				insertcompanycontent : this.insertcompanycontent
			}
			const response = await axios.post(url, body, {headers:headers});
			console.log(response);

			const url1 = `/HOST/company2/update_image?insertcompanyno=1`;
			const headers1 = { "Content-Type": "multipart/form-data" };
			const formData = new FormData();
            formData.append("updatefile", this.updatefile);
            console.log(this.updatefile);

			const response1 = await axios.post(url1,formData, { headers:headers1 });
			console.log(response1);
		},

		updatecompanyinformation(){
			this.updatecompanyinformationplace = true;
		},

		// 개인정보수정
		async updates(){ 
			this.updateinformationplace = false;
			const headers = { "Content-Type": "application/json", "token" : this.token };
			const url = `/HOST/company/listupdate`;
			const body = {
				companyno : this.companyno,
				phone : this.phone,
				country : this.country,
				city : this.city
			};
			console.log(body);
			const response = await axios.post(url, body, {headers:headers});
			console.log(response);
		},

		cancelupdate(){
			this.updateinformationplace = false;
		},

		updateinformation(){
			this.updateinformationplace = true;
		},

		async changeMenu(menu){ 
			this.menu = menu;
			console.log(this.menu);

			if(menu === 6  || menu === 5) {
				const url = `/HOST/product/selectone.json`;
				const headers = { "Content-Type": "application/json", "token" : this.token};
				const response = await axios.get(url,{headers:headers});
				console.log(response);

				if(response.data.status === 200){
					this.companynumber = response.data.list;
					this.companynumberselect = response.data.list[0].insertcompanyno;
				}
				this.handletoken();
			} else if(this.menu == 2) {
				this.handlemylist();
			} else if(menu == 3) {
				this.handlemycompany();
			}
		},
		

		async updateproductlist(idx) { 
			console.log(idx);
			const ret = this.product_items[idx].productno;
			const url1 = `/HOST/product/product_update?productno=${ret}`;
			const headers = { "Content-Type": "application/json"};
			const body = {
				producttitle : this.producttitle1[idx],
				productquantity : this.productquantity1[idx],
				producttotalprice : this.producttotalprice1[idx],
				productcontent : this.productcontent1[idx]
			}
			const response = await axios.post(url1, body, {headers:headers});
			console.log('Mypage.vue => updateproductlist1');
			console.log(response.data);
			console.log(this.updateproducts);

			const url2 = `/HOST/product/update_productimage?productno=${ret}`;
			const headers1 = { "Content-Type": "multipart/form-data" };
			const formData = new FormData();
			formData.append("updateproducts", this.updateproducts);
			console.log(formData);
			const response1 = await axios.post(url2,formData,{headers1:headers1});
			console.log('Mypage.vue => updateproductlist2');
			console.log(response1);
		},

		

		// 암호변경
		async handlepassword() { 
			const headers = { "Content-Type": "application/json", "token" : this.token };
			const url = `/HOST/company/update`;
			const body = {
				password : this.password,
				newpassword : this.newpassword,
			};
			const response = await axios.post(url, body, {headers:headers});

			console.log('Mypage.vue => handlepassword');
			console.log(response);
			this.$router.push({ path: "/home" });
		},
		
		// 기업등록
		async handleChangeCompany() { 
			const headers = { "Content-Type": "application/json", "token" : this.token };
			const url = `/HOST/company2/insertcompany.json`;
			const body = {
				insertcompanyname: this.insertcompanyname,
				insertcompanyaddress: this.insertcompanyaddress,
				insertcompanytel: this.insertcompanytel,
				insertcompanycontent: this.insertcompanycontent,
			};
			const response = await axios.post(url, body, {headers:headers});
			console.log('Mypage.vue => handleChangeCompany1');
			console.log(response.data.no);

			const url1 = `/HOST/company2/insertcompany_image.json?no=${response.data.no}`;
			const headers1 = { "Content-Type": "multipart/form-data" };
			const formData = new FormData();
			formData.append("file", this.files);
			// console.log(formData);

			const response1 = await axios.post(url1, formData, { headers1 });
			console.log('Mypage.vue => handleChangeCompany2');
			console.log(response1);

			this.$router.push({ path: "/about" });
		},

		// 상품등록
		async handleInsert() { 
			const headers = { "Content-Type": "application/json", "token": this.token};
			const url = `/HOST/product/insertproduct.json`;
			const body = {
				producttitle: this.producttitle,
				productcontent: this.productcontent,
				producttotalprice: this.producttotalprice,
				productquantity: this.productquantity,
				deliverypay : this.deliverypay,
				deliverydate : this.deliverydate,
				insertcompanyno : Number(this.companynumberselect)
			};
			const response = await axios.post(url, body, {headers:headers});
			console.log('Mypage.vue => handleInsert1');
			console.log(response);

			const url1 = `/HOST/product/insertproduct_image.json?productno=${response.data.product.productno}`;
			const headers1 = { "Content-Type": "multipart/form-data" };
			const formData = new FormData();
			for(var i=0; i<this.files.length; i++){
				formData.append('files', this.files[i]);
			}
			const response1 = await axios.post(url1, formData, { headers:headers1 });
			console.log('Mypage.vue => handleInsert2');
			console.log(response1);

			this.menu=5;
			this.handletoken();
		},


		// 내정보
		async handlemylist() {  
			const url1 = '/HOST/company/mylist.json';
			const headers = { "Content-Type": "application/json", token: this.token};
			const response = await axios.get(url1, {headers:headers});
			
			console.log('Mypage.vue => handlemylist');
			console.log(response.data);
			this.mylist = response.data.list;
			if( response.data.status === 200) {
				this.menu = 2;
			}
		},


		// my기업 관리
		async handlemycompany() { 
			const url1 = `/HOST/company2/selectone.json`;
			const headers = { "Content-Type": "application/json","token": this.token};
			const response = await axios.get(url1, {headers:headers});

			console.log('Mypage.vue => handlemycompany');
			console.log(response);
			this.mycompany = response.data.list;
			console.log(this.mycompany);
			if( response.data.status === 200) {
				this.menu = 3;
			}	
		},


		// 상품목록 : 1단계 상품등록이후 테이블형식으로 출력
		async handletoken() { 
			const url1 = `/HOST/product/select_token.json`;
			const headers = { "Content-Type": "application/json", "token": this.token};
			const response = await axios.post(url1, {}, {headers:headers});

			this.product_items = response.data.list; 

			console.log('Mypage.vue => handletoken');
			console.log(this.product_items);

			for(let i=0;i<this.product_items.length;i++){
				this.producttitle1.push(this.product_items[i].producttitle); 
				this.productcontent1.push(this.product_items[i].productcontent); 
				this.producttotalprice1.push(this.product_items[i].producttotalprice); 
				this.productquantity1.push(this.product_items[i].productquantity);
			}
		},

		// 체크한 항목 하나밖에 수정못함.
		async handleoption() { 
			const url1 = `/HOST/product/insertoption.json?productno=${this.chk[0]}`;
			const headers = { "Content-Type": "application/json", "token": this.token};
			const body = {
				optioncolor : this.optioncolor,
				optionname  : this.optionname,
				optionsize : this.optionsize,
				optionprice : this.optionprice,
				optionquantity : this.optionquantity
			}
			const response = await axios.post(url1, body, {headers:headers});
			console.log('Mypage.vue => handleoption');
			console.log(response);
			if( response.data.status == 200) {
				this.changeMenu(5);
			}
		},
		async handledelete() {
			const url1 = `/HOST/company/delete `;
			const headers = { "Content-Type": "application/json", "token":this.token};
			const data = {	
				companyid : this.companyid,
				password : this.password
			}
			const response = await axios.delete(url1, { headers:headers, data:data });
			console.log(response);
			alert("회원탈퇴가 완료되었습니다.")
			this.$router.push({ path: "/" });
			
			
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