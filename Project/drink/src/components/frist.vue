<template>
	<div class="main">
		<div class="sm_da">
			<a class="sz_1">酒水采购平台</a>
			<a class="sz_2"><img src="../img/bg_1.gif"></a>
		</div>
		
		<div class="sz_da">
	   <carousel :indicators="false" :auto="3000">
        <div v-for="i in 3" class="sq_da">
        	<img src="../img/bg_2.gif" class="sa_1">
        </div>
       </carousel>	
		</div>
		
		<div class="sk_top">
			<div class="sk_da">
			<p><img src="../img/bg_3.gif"></p>
			<p>购物直通车</p>
		</div>
		
		<div class="sk_da">
			<p><img src="../img/bg_3.gif"></p>
			<p>购物直通车</p>
		</div>
		
		<div class="sk_da">
			<p><img src="../img/bg_3.gif"></p>
			<p>购物直通车</p>
		</div>
		<div class="sk_da">
			<p><img src="../img/bg_3.gif"></p>
			<p>购物直通车</p>
		</div>
		</div>
		<div class="sk_top">
			<div class="sk_da">
			<p><img src="../img/bg_3.gif"></p>
			<p>购物直通车</p>
		</div>
		
		<div class="sk_da">
			<p><img src="../img/bg_3.gif"></p>
			<p>购物直通车</p>
		</div>
		
		<div class="sk_da">
			<p><img src="../img/bg_3.gif"></p>
			<p>购物直通车</p>
		</div>
		<div class="sk_da">
			<p><img src="../img/bg_3.gif"></p>
			<p>购物直通车</p>
		</div>
		</div>
	    <div class="sa_da"></div>
	    <div class="sx_da">
	    	<a>白酒</a>
	    	<a>更多</a>
	    </div>
	    <div class="sn_da">
	        <div class="sn_1">
	        	<div class="sn-1">
	        		<img src="../img/bg_4.gif">
	        		<p>闷倒驴酒不锈钢壶1500ml</p>
	        		<p>52度正宗内蒙古特产高度原</p>
	        		<p class="clear">48.00</p>
	        	</div>
	            <div class="sn-1">
	        		<img src="../img/bg_4.gif">
	        		<p>闷倒驴酒不锈钢壶1500ml</p>
	        		<p>52度正宗内蒙古特产高度原</p>
	        		<p class="clear">48.00</p>
	        	</div>
	        </div>
	        <div class="sn_1">
	        	<div class="sn-1">
	        		<img src="../img/bg_4.gif">
	        		<p>闷倒驴酒不锈钢壶1500ml</p>
	        		<p>52度正宗内蒙古特产高度原</p>
	        		<p class="clear">48.00</p>
	        	</div>
	            <div class="sn-1">
	        		<img src="../img/bg_4.gif">
	        		<p>闷倒驴酒不锈钢壶1500ml</p>
	        		<p>52度正宗内蒙古特产高度原</p>
	        		<p class="clear">48.00</p>
	        	</div>
	        </div>

	    </div>
	    <div class="bot_da"></div>
	    <div class="bottom_da">
	    	<div class="bottom_1">
	    		<img src="../img/bg_5.gif">
	    		<p>首页</p>
	    	</div>
	        <div class="bottom_2">
	    		<img src="../img/bg_6.gif">
	    		<p>商城</p>
	    	</div>
	        <div class="bottom_3">
	    		<img src="../img/bg_7.gif">
	    		<p>购物车</p>
	    	</div>
	        <div class="bottom_4">
	    		<img src="../img/bg_8.gif">
	    		<p>会员中心</p>
	    	</div> 
	    </div>
	</div>
</template>

<script>
	import Carousel from 'vue-m-carousel'
    export default {
    components: {
        Carousel
    }
}
</script>

<style>  /*scoped当前页面*/
	@import url("../CSS/global.css");
	@import url("../CSS/index.css");
	
</style>