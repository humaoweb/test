<template>
   <div class="main">
		<div class="sn_da">
			<img src="../img/bg_9.gif">
			<a>账号登录</a>
		</div>
	    <div class="sm_da"></div> 
	    <div class="sz_da">
	    	<div class="sz_1">
	    		<a>用户名</a>
	    		<input type="text" v-model="username" value="" placeholder="会员名/手机/邮箱"/>
	    	</div>
   
	    </div>
	    <div class="sz_da">
	    	<div class="sz_2">
	    		<a>密码</a>
	    		<input type="password" v-model="password" value="" placeholder="请输入密码"/>
	    	</div>
	    </div>
        
	    <div class="sz_bottom">
	    	<div class="bot_1"><a href="#" v-on:click=login()>登录</a></div>
	    </div>
	</div>
</template>

<script>export default {
	data() {
		return {
			username: '',
			password: '',
		}
	},
	methods: {
		login() {
			this.$http.post('/api/users/login', {
				username: this.username,
				password: this.password
			}).then((data) => {
				if(data.body.status == 1) {
					alert(data.body.message)
				} else {
					alert(data.body.message)
				}
			})
		}
	}
}
</script>

<style>
	@import url("../CSS/global.css");
	@import url("../CSS/login.css");
</style>