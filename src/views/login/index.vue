<template>
	<div class="login-container">
		<el-form class="login-form" :model="ruleForm" :rules="rules" ref='ruleForm' >
			<div class="title-container">
				<h3 class="title">用户登录</h3>
			</div>
			<!-- 账号 -->
			<el-form-item prop="user_name">
				<span class="svg-container">
					<i class="el-icon-user"></i>
				</span>
				<el-input v-model="ruleForm.user_name" placeholder="请输入用户名" ></el-input>
			</el-form-item>
			<!-- 密码 -->
			<el-form-item prop="user_pwd">
				<span class="svg-container">
					<i class="el-icon-lock"></i>
				</span>
				<el-input v-model="ruleForm.user_pwd" placeholder="请输入密码" :type="isShowPwd"></el-input>
				<img :src="isShowPwd=='password'?'@/assets/icon/close_eye.png':''" alt="">
				<!-- <span class="show-pwd" @click="onChangePwdType"> -->
				<img :src="isShowPwd === 'password' ? require('@/assets/icon/close_eye.png') : require('@/assets/icon/open_eye.png')" @click="onChangePwdType">
				<!-- </span> -->
			</el-form-item>
			<!-- 登录按钮 -->
			<el-button type="primary" round style="width: 100%;margin-bottom: 30px;" @click="submit">登录</el-button>
		</el-form>
		
	</div>
</template>

<script>
	// 引入路由配置文件
	// import validatePassword from './rules.js'
	export default {
	  data() {
	    return {
		isShowPwd:'password',
	      ruleForm: {
			  user_name:'',
			  user_pwd:''
		  },
		  // 验证规则
		  rules:{
			  user_name:[
				  {
					  required: true,  //是否必填
					  message: '请输入用户名',  //提示信息
					  trigger: 'blur', //失去焦点触发
				 }
			  ],
			  user_pwd:[
				  {
					  required: true, 
					  trigger: 'blur',
					  // validator: validatePassword()
					   message: '请输入密码',  //提示信息
				  },
			  ]
		  }
	    }
	  },
	  methods:{
		  onChangePwdType()
		  {
			  //console.log(this.isShowPwd)
			  if(this.isShowPwd == 'password')
			  {
				  this.isShowPwd = 'text'
			  }else{
				  this.isShowPwd = 'password'
			  }
			  
		  },
		  submit(){
			  console.log(this.$refs.ruleForm.validate)
		  }
	  },
	 
	  
	}
</script>


 
 <style lang="scss" scoped>
 $bg: #2d3a4b;//背景色
 $dark_gray: #889aa4;//按钮颜色
 $light_gray: #eee;//输入框颜色
 $cursor: #fff;//插入光标的颜色
 
 .login-container {
     min-height: 100%;
     width: 100%;
     background-color: $bg;
     overflow: hidden;
	 
 
     .login-form {
         position: relative;
         width: 520px;
         padding: 160px 35px 0;
         margin: 0 auto;
         overflow: hidden;
 
         // 注意
         ::v-deep .el-form-item {
             border: 1px solid rgba(255, 255, 255, 0.1);
             background: rgba(0,0,0,0.1);
             border-radius: 5px;
             color: #454545;
			 img {
				 width: 20px;
				 height: 20px;
				vertical-align: middle;
			 }
         }
 
         ::v-deep .el-input {
			 // 上下边距
             display: inline-block;
             height: 47px;
             width: 85%;
 
             input {
                 background: transparent;//设置透明
                 border: none;
                 border-radius: 0;
                 padding: 12px 5px 12px 15px;
                 color: $light_gray;
				 // 设置插入光标的颜色
                 caret-color: $cursor;
             }
         }
     }
 
     .svg-container {
         padding: 6px 5px 6px 15px;
         color: $dark_gray;
         vertical-align: middle;//设置元素的垂直对齐方式
         display: inline-block;
     }
 
     .title-container {
         position: relative;
 
         .title {
             font-size: 26px;
             color: $light_gray;
             margin: 0px auto 40px auto;
             text-align: center;
             font-weight: bold;
         }
     }
 
   //   .show-pwd {
   //       position: absolute;
   //       right: 10px;
   //       top: 7px;
   //       font-size: 16px;
   //       color: $dark_gray;
		 // // 将鼠标浏览的位置更换为小手的样式
		 // cursor: pointer;
		 // // 阻止能否选取颜色的文本
		 // user-select: none
		 // img {
			//  width: 20px;
			//  height: 20px;
		 // }
   //   }
	
 }
 </style>
 