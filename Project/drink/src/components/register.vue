<template>
	<div class="main">
		<div class="sn_da">
			<img src="../img/bg_9.gif">
			<a>注册</a>
		</div>
		<div class="sm_da"></div>
		<div class="sz_da">
			<div class="sz_1">
				<a>用户名</a>
				<input type="" v-model="username" value="" placeholder="用户名" />
			</div>

		</div>
		<div class="sz_da">
			<div class="sz_2">
				<a>密码</a>
				<input type="" v-model="password" value="" placeholder="请输入密码" />
			</div>
		</div>
		<div class="sz_da">
			<div class="sz_3">
				<a>确认密码</a>
				<input type="" v-model="rePassword" value="" placeholder="请输入确认密码" />
			</div>
		</div>
		<div class="se_da">
			<p><input type="checkbox" name="checkbox" id="check1"></p>
			<p>我已阅读 <span><<用户注册协议>></span></p>
		</div>
		<div class="sz_bottom">
			<div class="bot_1">
				<a href="#" v-on:click=register()>注册</a>
			</div>
		</div>
	</div>
</template>

<script>
	export default { 
		data() {
			return {
				username:'',
		        password:'',
			    rePassword: ''
			}
		},
	methods: {
		//注册方法
		register() {
			if(this.password!= this.rePassword) {
				alert("两次密码不一致")
			} else {
				let sendDate = {
					username: this.username,
					password: this.password,
				}
				this.$http.post('/api/users/register', sendDate).then((data) => {
					if(data.body.status == 1) {
						alert(data.body.Message)
					} else {
						alert(data.body.message)
					}
				})
			}
		}
	}

	}
</script>

<style>
	@import url("../CSS/global.css");
	@import url("../CSS/register.css");
</style>