<template>
	<div class="row">
		<!-- 展示用户列表 -->
		<transition-group name="animate__animated animate__bounce" enter-active-class="animate__jackInTheBox">
			<div class="card" v-for="user in info.users" :key="user.login" v-show="info.users.length">
				<a :href="user.html_url" target="_blank">
					<img :src="user.avatar_url" style='width: 100px' />
				</a>
				<p class="card-text">{{ user.login }}</p>
			</div>
		</transition-group>
		<!-- 展示欢迎词 -->
		<h1 v-show="info.isFirst">欢迎使用！</h1>
		<!-- 展示加载中 -->
		<h1 v-show="info.isLoading">加载中....</h1>
		<!-- 展示错误信息 -->
		<h1 v-show="info.errMsg">{{ info.errMsg }}</h1>
	</div>
</template>

<script>
import 'animate.css'
export default {
	name: 'List',
	data() {
		return {
			info: {
				isFirst: true,
				isLoading: false,
				errMsg:'',
				users: []
			}
		}
	},
	mounted() {
		this.$bus.$on('getUsers', (dataObj) => {
			this.info = {...this.info,...dataObj}
		})
	},
	beforeDestroy() {
		// this.$bus.$off('getUsers')
	}
}
</script>

<style scoped>
.album {
	min-height: 50rem;
	/* Can be removed; just added for demo purposes */
	padding-top: 3rem;
	padding-bottom: 3rem;
	background-color: #f7f7f7;
}

.card {
	float: left;
	width: 33.333%;
	padding: .75rem;
	margin-bottom: 2rem;
	border: 1px solid #efefef;
	border-radius: 100px;
	text-align: center;
}

.card img {
	margin-bottom: .45rem;
	border-radius: 100px;
}

.card-text {
	font-size: 85%;
}
h1{
	text-align: center;
}
</style>