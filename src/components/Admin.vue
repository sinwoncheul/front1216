<template>
    <div>
      
      <h3>admin</h3>

      <nav class="navbar navbar-inverse navbar-fixed-top" style="border-bottom:2px solid red;">
        <div class="container-fluid">
          <div class="navbar-header">
            <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
              <span class="sr-only">Toggle navigation</span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
            </button>
            <a class="navbar-brand" href="/home">Home</a>
          </div>
          <div id="navbar" class="navbar-collapse collapse">
            <ul class="nav navbar-nav navbar-right">
              <li><a href="#">환경설정</a></li>
              <li><a href="#">도움말</a></li>
            </ul>
            <div class="navbar-form navbar-right">
              <input type="text" class="form-control" placeholder="검색">
            </div>
          </div>
        </div>
      </nav>


    <div class="container-fluid">
      <div class="row">
         <div class="col-sm-3 col-md-2 sidebar">

          <!-- 메뉴 LIST 
          1. 메뉴1번 공지사항 목록 , 메뉴1번 공지사항 글쓰기, 공지사항 상세페이지 MODAL
          2. 메뉴2번 판매Q&A 목록 , 메뉴2번 판매Q&A 글쓰기, 판매Q&A 상세페이지 MODAL
          3. 쇼핑Q&A
          4. 리뷰 및 댓글관리
          -->
          <ul class="nav nav-sidebar">
            <li class="active"><a>고객센터관리 <span class="sr-only">(current)</span></a></li>
            <li><a href="#" @click="changeMenu(1)">공지사항</a></li>
            <li><a href="#" @click="changeMenu(2)">판매Q&A</a></li>
            <li><a href="#" @click="changeMenu(3)">쇼핑Q&A</a></li>
            <li><a href="#" @click="changeMenu(4)">리뷰 및 댓글관리</a></li>
          </ul>
          <ul class="nav nav-sidebar">
            <li class="active"><a>기업 및 상품관리<span class="sr-only">(current)</span></a></li>
            <li><a href="#" @click="changeMenu(5)">사기신고</a></li>
            <li><a href="#" @click="changeMenu(6)">1대1문의</a></li>
            <li><a href="#" @click="changeMenu(7)">유저정보</a></li>
            <li><a href="#" @click="changeMenu(8)">기업정보</a></li>
            <li><a href="#" @click="changeMenu(9)">상품정보</a></li>
          </ul>
        </div>


        
        
        <div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
          <!-- 메뉴1번 공지사항 목록 시작 -->
          <div v-if="menu===1" style="margin-top:60px;">
              <a href="#" class="form-group btn btn-primary" style="float:right;" data-toggle="modal" data-target="#boardWriteModal">글쓰기</a>

              <h2 class="sub-header" >공지사항</h2>
                <div class="header-search" style="text-align:center;  margin-bottom:10px;">
                    <form v-on:submit.prevent >
                      <select class="input-select" v-model="searchoptionmodel">
                        <option v-for="searchoption in searchboardlabel" v-bind:key="searchoption">{{searchoption.name}}</option>
                      </select>
                      <input class="input" placeholder="검색어를 입력하세요." v-model="searchboardtext" @keyup.enter="noticeselect">
                      <button class="search-btn"  @click="noticeselect" >검색</button>
                    </form>
                </div>
              
                <div class="form-data" style="height:500px;">
                    <div class="table-responsive">
                      <table class="table table-striped" style="border:1px solid rgb(139, 126, 126);">
                        <thead>
                          <tr>
                            <th>번호</th>
                            <th>제목</th>
                            <th>작성자</th>
                            <th>조회수</th>
                            <th>날짜</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr v-for="boarditem in noticeitems" v-bind:key="boarditem">
                            <td>{{boarditem.no}}</td>
                            <td><a href="#" data-toggle="modal" @click="selectonenoticemethods(boarditem.no)" data-target="#exampleModalLong">{{boarditem.title}}</a></td>
                            <td>{{boarditem.writer}}</td>
                            <td>{{boarditem.hit}}</td>
                            <td style="width:250px;">{{boarditem.regdate}}</td>
                          </tr>
                        </tbody>
                      </table>
                  </div>
                </div>

                <div class="form-data">
                    <ul class="reviews-pagination" style="float:bottom;" >
                      <li  v-for="(bpage,idx) in bpages" v-bind:key="bpage"><a class="active" type="submit" @click="boardpagenation(idx+1)">{{idx+1}}</a></li>
                      <li><a href="#"><i class="fa fa-angle-right"></i></a></li>
                    </ul>
                    <br />
                </div>
          </div>
          <!-- 메뉴1번 공지사항 목록 종료 -->
         

          <!-- 메뉴2번 판매Q&A 목록 시작 -->
          <div v-if="menu===2" style="margin-top:60px;">
              <div>
                  <button class="form-group btn btn-primary" style="float:right;" @click="clicksellerqna">글쓰기</button>
                <h2 class="sub-header" >판매Q&A</h2>
                <div class="form-data" style="height:450px;">
                <div class="table-responsive">
                  <table class="table table-striped" style="border:5px solid rgb(139, 126, 126);">
                    <thead>
                      <tr>
                        <th>번호</th>
                        <th>제목</th>
                        <!-- <th>내용</th> -->
                        <th>작성자</th>
                        <th>조회수</th>
                        <th>날짜</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="sellerqnaitem in sellerqnaitems" v-bind:key="sellerqnaitem">
                        <td>{{sellerqnaitem.sellerboardno}}</td>
                        <td><a href="#" data-toggle="modal" data-target="#exampleModalLong">{{sellerqnaitem.sellertitle}}</a></td>
                        <!-- <td><nl2br tag="span" :text="boarditem.content"/></td> -->
                        <td>{{sellerqnaitem.sellerwriter}}</td>
                        <td>{{sellerqnaitem.sellerhit}}</td>
                        <td>{{sellerqnaitem.sellerregdate}}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            <!-- 메뉴2번 판매QNA 페이지네이션 및 검색 -->
            <div class="form-data">
                <ul class="reviews-pagination" style="float:bottom;">
                  <li  v-for="(bpage,idx) in bpages" v-bind:key="bpage"><a class="active" type="submit" @click="boardpagenation(idx+1)">{{idx+1}}</a></li>
                  <li><a href="#"><i class="fa fa-angle-right"></i></a></li>
                </ul>
                <br>

                <div class="header-search" style="text-align:center; border-top:2px solid red;">
                    <form v-on:submit.prevent >
                      <select class="input-select" v-model="searchoptionmodel">
                        <option v-for="searchoption in searchboardlabel" v-bind:key="searchoption">{{searchoption.name}}</option>

                      </select>
                      <input class="input" placeholder="검색어를 입력하세요." v-model="searchboardtext" @keyup.enter="noticeselect">
                      <button class="search-btn"  @click="noticeselect" >검색</button>
                    </form>
                </div>
            </div>


            <!-- 메뉴2번 판매Q&A 글쓰기 -->
            <div v-if="sellerqnawriteboard === true">
            
              <hr>

              <div class="row">
                <div class="col-md-6 col-md-offset-3">
                    <div class="section">
                      <div class="row">
                        <div class="billing-details">
                          <div class="section-title">        
                            <h3 class="title">글쓰기</h3>
                          </div>
                            <div class="form-group" style="border-bottom:3px solid rgb(77, 74, 74);">
                              <label for="exampleFormControlTextarea1">제목</label>
                              <input class="form-control" v-model="sellerqnatitle" type="text" id="exampleFormControlTextarea1" placeholder="제목">
                            </div>
                            <div class="form-group" style="border-bottom:3px solid rgb(77, 74, 74);">
                              <label for="exampleFormControlTextarea2">내용</label>
                              <textarea class="form-control" v-model="sellerqnacontent" id="exampleFormControlTextarea2" rows="5"></textarea>
                            </div>
                            <div class="form-group" style="border-bottom:3px solid rgb(77, 74, 74);">
                              <label for="exampleFormControlTextarea3">작성자</label>
                              <input class="form-control" v-model="sellerqnawriter" type="text" id="exampleFormControlTextarea3" placeholder="작성자">
                            </div>
                            <div class="form-group">
                              <input type="file" id="sellerboardfiles" ref="sellerboardfiles" class="form-data" @change="handlesellerBoardFileUpload($event)" >
                            </div>
                            <div class="form-group">
                              <button class="form-control btn btn-primary" @click="insertsellerqna">작성완료</button>
                            </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          </div>
          <!-- 메뉴2번 판매Q&A 목록 종료 -->


          <!-- 메뉴3번 쇼핑Q&A 목록 시작 -->
          <div v-if="menu===3" style="margin-top:60px;">
                <div>
                  <h2 class="sub-header" >쇼핑Q&A</h2>
                  <div class="table-responsive">
                    <table class="table table-striped" style="border:5px solid rgb(139, 126, 126);">
                      <thead>
                        <tr>
                          <th>번호</th>
                          <th>제목</th>
                          <!-- <th>내용</th> -->
                          <th>작성자</th>
                          <th>조회수</th>
                          <th>날짜</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr v-for="shopqnaitem in shopqnaitems" v-bind:key="shopqnaitem">
                          <td>{{shopqnaitem.shopboardno}}</td>
                          <td><a href="#" data-toggle="modal" data-target="#exampleModalLong">{{shopqnaitem.shoptitle}}</a></td>
                          <!-- <td><nl2br tag="span" :text="boarditem.content"/></td> -->
                          <td>{{shopqnaitem.shopwriter}}</td>
                          <td>{{shopqnaitem.shophit}}</td>
                          <td>{{shopqnaitem.shopregdate}}</td>
                        </tr>
                      </tbody>
                    </table>
                      <button class="form-group btn btn-primary" style="float:right;" @click="clickshopqna">글쓰기</button>
                </div>
              </div>

          <!-- 메뉴3번 쇼핑Q&A 글쓰기 -->
          <div v-if="shopqnawriteboard === true">
            
            <hr>

              <div class="row">
                <div class="col-md-6 col-md-offset-3">
                    <div class="section">
                      <div class="row">
                        <div class="billing-details">
                          <div class="section-title">        
                            <h3 class="title">글쓰기</h3>
                          </div>
                            <div class="form-group" style="border-bottom:3px solid rgb(77, 74, 74);">
                              <label for="exampleFormControlTextarea1">제목</label>
                              <input class="form-control" v-model="shopqnatitle" type="text" id="exampleFormControlTextarea1" placeholder="제목">
                            </div>
                            <div class="form-group" style="border-bottom:3px solid rgb(77, 74, 74);">
                              <label for="exampleFormControlTextarea2">내용</label>
                              <textarea class="form-control" v-model="shopqnacontent" id="exampleFormControlTextarea2" rows="5"></textarea>
                            </div>
                            <div class="form-group" style="border-bottom:3px solid rgb(77, 74, 74);">
                              <label for="exampleFormControlTextarea3">작성자</label>
                              <input class="form-control" v-model="shopqnawriter" type="text" id="exampleFormControlTextarea3" placeholder="작성자">
                            </div>
                            <div class="form-group">
                              <input type="file" id="shopboardfiles" ref="shopboardfiles" class="form-data" @change="handleshopBoardFileUpload($event)" >
                            </div>
                            <div class="form-group">
                              <button class="form-control btn btn-primary" @click="insertshopqna">작성완료</button>
                            </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          </div>    
          <!-- 메뉴3번 쇼핑Q&A 목록 종료 -->  

          <!-- 메뉴7번 (유저정보) 시작 -->
          <div v-if="menu===7" style="margin-top:60px;">
                <h2 class="sub-header" >유저정보</h2>
                
              <div class="form-data" style="height:450px;">
                <div class="table-responsive">
                  <table class="table table-striped" style="border:5px solid rgb(139, 126, 126);">
                    <thead>
                      <tr>
                        <th>아이디</th>
                        <th>사업자번호</th>
                        <th>주소</th>
                        <th>연락처</th>
                        <th>아이디생성날짜</th>
                        <th>권한</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="user in userlistboard" v-bind:key="user">
                        <td>{{user.companyid}}</td>
                        <td>{{user.companyno}}</td>
                        <td>{{user.country}}</td>
                        <td>{{user.phone}}</td>
                        <td style="width:250px;">{{user.createtime}}</td>
                        <td>{{user.role}}</td>
                        <td style="width:200px;"><button>수정</button><button>삭제</button><button>사용금지</button></td>
                      </tr>
                    </tbody>
                  </table>

            </div>
              </div>

                <div class="form-data">

                    <ul class="reviews-pagination" style="float:bottom;">
                      <li  v-for="(bpage,idx) in bpages" v-bind:key="bpage"><a class="active" type="submit" @click="boardpagenation(idx+1)">{{idx+1}}</a></li>
                      <li><a href="#"><i class="fa fa-angle-right"></i></a></li>
                    </ul>
                    <br>

                    <div class="header-search" style="text-align:center; border-top:2px solid red;">
                        <form v-on:submit.prevent >
                          <select class="input-select" v-model="searchoptionmodel">
                            <option v-for="searchoption in searchboardlabel" v-bind:key="searchoption">{{searchoption.name}}</option>

                          </select>
                          <input class="input" placeholder="검색어를 입력하세요." v-model="searchboardtext" @keyup.enter="noticeselect">
                          <button class="search-btn"  @click="noticeselect" >검색</button>
                        </form>
                    </div>
                </div>
          </div>
          <!-- 메뉴7번 (유저정보) 종료 -->


          <div v-if="menu===9" style="margin-top:60px">
            <div class="container">
                <div style="width:600px;">
                    <canvas id="myChart"></canvas>
                </div>
            </div>
          </div>  
        </div>


      </div>
    </div>
  </div>





    <!-- 공지사항 상세페이지 MODAL 시작 -->
    <div class="modal fade" id="exampleModalLong" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
        <div class="modal-body">
          <div class="order-details">
              <div class="order-summary">
                <div class="order-col">
                  <div><strong>{{this.noticeoneno}}.</strong></div>
                  <div><strong>조회수 : {{this.noticeonehit}}</strong></div>
                </div>
                <div><h3>{{this.noticeonetitle}}</h3></div>
                <hr />
                <div class="order-products">
                  <div class="order">
                    <img :src="noticeupdateimage" style="width:500px;">
                    <nl2br tag="p" :text="this.noticeonecontent"/>
                  </div>
                </div> 

                <hr />

              <div class="order" style="float:right;">
                <div><strong>{{this.noticeonewriter}}</strong></div>
              </div>
              
            </div>
            <div class="payment-method">
              <div class="input-radio">
                  <input type="radio" name="payment" id="payment-1">
                  <label for="payment-1">
                    <span></span>
                    수정
                  </label>
                  <div class="caption">
                    <div class="form-controll">
                      <div class="form-group" style="border-bottom:3px solid rgb(77, 74, 74);">
                        <label for="exampleFormControlTextarea1" >제목</label>
                        <input class="form-control" v-model="updatenoticetitle" type="text" id="exampleFormControlTextarea1" placeholder="제목">
                      </div>
                      <div class="form-group" style="border-bottom:3px solid rgb(77, 74, 74);">
                        <label for="exampleFormControlTextarea2">내용</label>
                        <textarea class="form-control" v-model="updatenoticecontent" id="exampleFormControlTextarea2" rows="5"></textarea>
                      </div>
                      <div class="form-group" style="border-bottom:3px solid rgb(77, 74, 74);">
                        <label for="exampleFormControlTextarea3">작성자</label>
                        <input class="form-control" v-model="updatenoticewriter" type="text" id="exampleFormControlTextarea3" placeholder="작성자">
                      </div>

                      <div class="controll-fileupload" :v-model="noticeupdateimageform"> 

                        <div v-for="(item, idx) in noticeupdatefile" v-bind:key="item">
                          <!-- <img class="thumbnail box-center margin-top-20" style="width:250px;" @click="imageuploadupdate(idx)" 
                              alt="No image" v-bind:src="noticeimagedata[idx]" /> -->
                          <input type="file" style=""  :id="`noticeupdatefile{idx}`" 
                              :ref="`noticeupdatefile{idx}`" @change="handleBoardupdateFileUpload($event, idx)">
                        </div>

                      </div>
                      <div class="form-group">
                        <button class="form-control btn btn-primary" data-dismiss="modal" @click="updatenotice">수정완료</button>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="input-radio">
                    <input type="radio" name="payment" id="payment-2">
                    <label for="payment-2">
                      <span></span>삭제
                    </label>
                  <div class="caption">
                    <div class="form-group">
                      <button class="form-control btn btn-primary" >삭제</button>
                    </div>
                  </div>
                </div>
                <div class="input-radio">
                  <input type="radio" name="payment" id="payment-3" />
                  <label for="payment-3"><span></span>댓글관리</label>
                  <div class="caption"><p>댓글관리</p></div>
                </div>
              </div>
              <a href="#" class="primary-btn order-submit" data-dismiss="modal">닫기</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 공지사항 상세페이지 MODAL 종료 -->


    <!-- 공지사항 글쓰기 modal 시작 -->
    <div class="modal fade" id="boardWriteModal" tabindex="-1" aria-labelledby="boardWriteModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-body">
              <div class="row">
                  <div class="col-md-10 col-md-offset-1">
                      <div class="section">
                        <div class="row">
                          <div class="billing-details">
                              <div class="section-title">        
                                <h3 class="title">글쓰기</h3>
                              </div>

                              <div class="form-group" style="border-bottom:3px solid rgb(77, 74, 74);">
                                <label for="exampleFormControlTextarea1">제목</label>
                                <input class="form-control" v-model="noticetitle" type="text" id="exampleFormControlTextarea1" placeholder="제목">
                              </div>

                              <div class="form-group" style="border-bottom:3px solid rgb(77, 74, 74);">
                                <label for="exampleFormControlTextarea2">내용</label>
                                <textarea class="form-control" v-model="noticecontent" id="exampleFormControlTextarea2" rows="5"></textarea>
                              </div>

                              <div class="form-group" style="border-bottom:3px solid rgb(77, 74, 74);">
                                <label for="exampleFormControlTextarea3">작성자</label>
                                <input class="form-control" v-model="noticewriter" type="text" id="exampleFormControlTextarea3" placeholder="작성자">
                              </div>

                              <div class="form-group">
                                <input type="file" v-for="item in files" v-bind:key="item"  id="file" ref="file" class="form-data" @change="handleBoardFileUpload($event)">
                              </div>

                              <div class="form-group">
                                <div class="row">
                                  <div class="col-md-6">
                                    <button class="form-control btn btn-primary" @click="insertnotice">작성완료</button>
                                  </div>  

                                  <div class="col-md-6">
                                    <a href="#" class="form-control btn btn-default" ref="boardWriteModalClose" data-dismiss="modal">닫기</a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                  </div>
          
          </div>
        </div>
      </div>
    </div>  
    <!-- 공지사항 글쓰기 modal 종료-->



</template>

<script>
    import Nl2br from "vue3-nl2br";
    import axios from "axios";

    export default {
      name: "Admin",
      components: {
        nl2br: Nl2br,
      },
      created(){

      },

      async mounted() {
        this.noticeselect();
      },
      data () {
        return {
          listno :[],
          menu :  1,
          noticeimagedata:["http://www.washaweb.com/tutoriaux/fileupload/imgs/image-temp-220.png"],

          //공지사항
          noticetitle: "",
          noticecontent: "",
          noticewriter: "",
          noticeitems: "",
          noticeselectone:"",
          page: 1,
          bpages:"",
          title: "",
          files: [null],
          searchboardselect: 1,
          searchboardlabel:[{id:'title',name:'제목'},{id:'content',name:'내용'},{id:'writer',name:'작성자'}],
          searchoptionmodel:"제목",
          searchboardtext:"",
          noticeoneno:"",
          noticeonetitle:"",
          noticeonecontent:"",
          noticeonewriter:"",
          noticeonehit:"",
          noticeupdatefile:[null],
          noticeupdateimage:"/HOST/boards/selectboard_image?no="+this.noticeoneno,
          updateimagetime:"",
          

          //글쓰기
          noticewriteboard: false,
          sellerqnawriteboard: false,
          shopqnawriteboard:false,

          //판매QNA
          sellerqnatitle:"",
          sellerqnacontent:"",
          sellerqnawriter:"",
          sellerboardfiles:"",
          sellerqnaitems:"",
          sbpages:"",

          //쇼핑QNA
          shopqnaitems:"",
          shopboardfiles:"",
          shopqnatitle:"",
          shopqnacontent:"",
          shopqnawriter:"",

          //유저
          userlistboard:"",

          chart : 1,
        }
      }, 

      methods : {

        chartView(){

            const ctx = document.getElementById('myChart').getContext('2d');
            
            if(this.chart === 1 ){
              this.chart = 0;
             
              new window.Chart(ctx, {
                  type: 'bar',
                  data: {
                      labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
                      datasets: [{
                          label: '# of Votes',
                          data: [12, 19, 3, 5, 2, 3],
                          backgroundColor: [
                              'rgba(255, 99, 132, 0.2)',
                              'rgba(54, 162, 235, 0.2)',
                              'rgba(255, 206, 86, 0.2)',
                              'rgba(75, 192, 192, 0.2)',
                              'rgba(153, 102, 255, 0.2)',
                              'rgba(255, 159, 64, 0.2)'
                          ],
                          borderColor: [
                              'rgba(255, 99, 132, 1)',
                              'rgba(54, 162, 235, 1)',
                              'rgba(255, 206, 86, 1)',
                              'rgba(75, 192, 192, 1)',
                              'rgba(153, 102, 255, 1)',
                              'rgba(255, 159, 64, 1)'
                          ],
                          borderWidth: 1
                      }]
                  },
                  options: {
                      scales: {
                          y: {
                              beginAtZero: true
                          }
                      }
                  }
              });
            }
            
        },

        

        selectonenotice(){
          this.selectonenoticemethods();
        },

        clickshopqna(){
          this.shopqnawriteboard = !this.shopqnawriteboard;
        },

        clicksellerqna(){
          this.sellerqnawriteboard = !this.sellerqnawriteboard;
        },

        clicknoticewriteboard(){
          this.noticewriteboard = !this.noticewriteboard;
        },

        handlesellerBoardFileUpload(e){
          this.sellerboardfiles = e.target.files[0];
        },

        handleBoardFileUpload(e) {
          // 1개씩 추가
          this.files.push(e.target.files[0]);
        },


        handleshopBoardFileUpload(e){
          this.shopboardfiles = e.target.files[0];
        },

        handleBoardupdateFileUpload(e){
          
          //const self = this;
          if(this.noticeupdatefile){
            this.noticeupdatefile.push( e.target.files[0] );
            /*  
            this.noticeimagedata.push("http://www.washaweb.com/tutoriaux/fileupload/imgs/image-temp-220.png");

            var reader = new FileReader();
            reader.onload = (e) => {
              self.noticeimagedata = e.target.result;
            }
            reader.readAsDataURL(this.noticeupdatefile);
            */
          }
  
        },


        imageuploadupdate(idx){
          this.$refs.noticeupdatefile[idx].click();
        },


        //공지사항 글쓰기 시작
        async insertnotice() {
          const headers = { "Content-Type": "application/json" };
          const url = `/HOST/boards/insert.json`;
          const body = {
            title: this.noticetitle,
            content: this.noticecontent,
            writer: this.noticewriter,
          };
          const response = await axios.post(url, body, headers);
          console.log(response);
          const url1 = `/HOST/boards/insertboard_image.json?boardno=${response.data.no}`;
          const headers1 = { "Content-Type": "multipart/form-data" };
          const formData = new FormData();
          
          // console.log(this.files.length);
          // 변경함.
          for(var i=0; i<this.files.length-1; i++){
            formData.append("file", this.files[i]);
          }

          console.log(formData);
          console.log(this.files);

          const response1 = await axios.post(url1, formData, { headers:headers1 });
          console.log(response1);
          this.$refs.boardWriteModalClose.click();
          this.changeMenu(1);
        },
        //공지사항 글쓰기 종료



        async insertsellerqna(){
          const headers = { "Content-Type": "application/json" };
          const url = `/HOST/boards/insertsellerboard.json`;
          const body = {
            sellertitle : this.sellerqnatitle,
            sellercontent : this.sellerqnacontent,
            sellerwriter : this.sellerqnawriter
          };
          const response = await axios.post(url, body, headers);
          console.log(response);

          const url1 = `/HOST/boards/insertsellerboard_image.json?sellerboardno=${response.data.sellerboardno}`;
          const headers1 = { "Content-Type": "multipart/form-data" };
          const formData = new FormData();
          formData.append("files", this.sellerboardfiles);
          console.log(formData);
          const response1 = await axios.post(url1, formData, { headers1 });
          console.log(response1);
        },


        async insertshopqna(){
          const headers = { "Content-Type": "application/json" };
          const url = `/HOST/boards/insertshopboard.json`;
          const body = {
            shoptitle : this.shopqnatitle,
            shopcontent : this.shopqnacontent,
            shopwriter : this.shopqnawriter
          };
          const response = await axios.post(url, body, headers);
          console.log(response);

          const url1 = `/HOST/boards/insertShopboard_image.json?shopboardno=${response.data.shopboardno}`;
          const headers1 = { "Content-Type": "multipart/form-data" };
          const formData = new FormData();
          formData.append("shopfile", this.shopboardfiles);
          console.log(formData);
          const response1 = await axios.post(url1, formData, { headers1 });
          console.log(response1);
        },



        changeMenu(menu){
          this.menu = menu;
          if(menu === 1){
            this.noticeselect();
          }
          else if(menu === 2){
            this.sellerQNAboardselect();
          }
          else if(menu === 3){
            this.shopQNAboardselect();
          }
          else if(menu === 7){
            this.userboardselect();
          }

          else if(menu===9){
            this.chartView();
          }
        },


        async userboardselect(){
          const url = `/HOST/boards/selectuserlist.json`;
          const headers = { "Content-Type": "application/json" };
          const response = await axios.get(url, { headers });
          console.log(response);
          if(response.data.status === 200){
            this.userlistboard = response.data.list;
          }
        },


        async noticeselect(){
          if(this.searchoptionmodel === ""){
          var url = `/HOST/boards/select.json?page=${this.page}&title=&content=&writer=`;
          }
          else if(this.searchoptionmodel === "제목"){
           url = `/HOST/boards/select.json?page=${this.page}&title=${this.searchboardtext}&content=&writer=`;
          }
          else if(this.searchoptionmodel === "내용"){
           url = `/HOST/boards/select.json?page=${this.page}&title=&content=${this.searchboardtext}&writer=`;
          }
          else if(this.searchoptionmodel === "작성자"){
           url = `/HOST/boards/select.json?page=${this.page}&title=&content=&writer=${this.searchboardtext}`;
          }
          const headers = { "Content-Type": "application/json" };
          const response = await axios.get(url, { headers });
          if (response.data.status === 200) {
            if(this.searchoptionmodel === ""){
              this.noticeitems = response.data.list;
            }
            else if(this.searchoptionmodel === "제목"){
              this.noticeitems = response.data.list;
            }
            else if(this.searchoptionmodel === "내용"){
              this.noticeitems = response.data.contentlist;
            }
            else if(this.searchoptionmodel === "작성자"){
              this.noticeitems = response.data.writerlist;
            }
            console.log(response.data.contentlist);
            this.bpages = response.data.bpage;
            console.log(this.bpages);
          }
        },


        async updatenotice(){
          console.log(this.noticeoneno);
          const url = `/HOST/boards/updateboard.json`;
          const headers = { "Content-Type": "application/json" };
          const body = {
            no : this.noticeoneno,
            title : this.updatenoticetitle,
            content : this.updatenoticecontent,
            writer : this.updatenoticewriter,
          }
          const response = await axios.put(url,body, { headers });
          console.log(response);
          

          const url1 = `/HOST/boards/updateboardimage.json?boardno=${this.noticeoneno}`;
          const headers1 = { "Content-Type": "multipart/form-data" };
          const formData = new FormData();
          formData.append("noticeupdatefile", this.noticeupdatefile);
          console.log(this.noticeupdatefile)      
          const response1 = await axios.post(url1,formData, { headers:headers1 });
          console.log(response1);

          if(response1.data.status === 200){
            this.noticeselect();
            this.noticeupdateimage="/HOST/boards/selectboard_image?boardno="+this.noticeoneno;
          }
        },



        async updateboardfileimage(no){
          console.log(no);
          const url1 = `/HOST/boards/updateboardimage.json?boardno=${no}`;
          const headers1 = { "Content-Type": "multipart/form-data" };
          const formData = new FormData();

          // 변경함.
          for(var i=0; i<this.noticeupdatefile.length-1; i++){
            formData.append("noticeupdatefile", this.noticeupdatefile[i]);
          }

          // 원본
          //formData.append("noticeupdatefile", this.noticeupdatefile);
          //console.log(this.noticeupdatefile)
          
          const response1 = await axios.post(url1,formData, { headers:headers1 });
          console.log(response1);

          if(response1.data.status === 200){
            this.noticeselect();
            this.noticeupdateimage="/HOST/boards/selectboard_image?boardno="+ no;
          }
        },



        async boardpagenation(idx){
          const url = `/HOST/boards/select.json?page=${idx}&title=&content=&writer=`;
          const headers = { "Content-Type": "application/json" };
          const response = await axios.get(url, { headers });
          // console.log(url);
          // console.log(response.data.bpage);
          if (response.data.status === 200) {
            this.noticeitems = response.data.list;
          }
        },



        async sellerQNAboardselect(){
          console.log("dddd");
          const url = `/HOST/boards/selectsellerboard.json?page=${this.page}&sellertitle=&sellercontent=&sellerwriter=`;
          const headers = { "Content-Type": "application/json" };
          const response = await axios.get(url, { headers });
          console.log(url);
          console.log(response);
          if(response.data.status === 200){
            this.sellerqnaitems = response.data.titlelist;
          }
          this.sbpages = response.data.sbpage;
        },



        async shopQNAboardselect(){
          const url = `/HOST/boards/selectshopboard.json`;
          const headers = { "Content-Type": "application/json" };
          const response = await axios.get(url, { headers });
          console.log(response);
          if(response.data.status === 200){
            this.shopqnaitems = response.data.list;
            console.log(this.shopqnaitems);
          }
        },



        async selectonenoticemethods(no){
          const url = `/HOST/boards/selectoneboard.json?no=${no}`;
          const headers = { "Content-Type": "application/json" };
          const response = await axios.get(url, { headers });
          // console.log(url);
          console.log(response);
          const url1 = `/HOST/boards/updateboard_hit.json?no=${no}`;
          const headers1 = { "Content-Type": "application/json" };
          const response1 = await axios.put(url1, { headers1 });
          console.log(response1);

          if(response.data.status === 200){
            this.noticeoneno = response.data.list.no;
            this.noticeonetitle = response.data.list.title;
            this.noticeonecontent = response.data.list.content;
            this.noticeonewriter = response.data.list.writer;
            this.noticeonehit = response1.data.list.hit;
            this.noticeupdateimage="/HOST/boards/selectboard_image?no="+this.noticeoneno;

            this.noticeselect();
          }
        },


      },
       
    }
</script>


<style scoped>
  @import url('../../public/css/dashboard.css');
</style>