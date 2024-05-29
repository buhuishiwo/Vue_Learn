<template>
	<section class="jumbotron">
		<h3 class="jumbotron-heading">Search Github Users</h3>
		<div>
			<input type="text" placeholder="enter the name you search" v-model="keyword"/>&nbsp;
			<button @click="searchUsers">Search</button>
		</div>
	</section>
</template>

<script>
	let errMsg=''
	import axios from 'axios'
	export default {
		name:'MainSearch',
		data(){
			return{
				keyword:''
			}
		},
		methods:{
			searchUsers(){
				//请求前
				this.$bus.$emit('getUsers',{isFirst:false,isLoading:true,errMsg:'',users:[]})
				axios.get(`https://api.github.com/search/users?q=${this.keyword}`).then(
					response => {
						console.log('请求成功')
						//请求成功
						if(response.data.items.length===0) errMsg='查无此人'
						else{
							errMsg = ''
						}
						this.$bus.$emit('getUsers',{isLoading:false,errMsg:errMsg,users:response.data.items})
					},
					error => {
						console.log('请求失败',error.message);
						//请求失败
						this.$bus.$emit('getUsers',{isLoading:false,errMsg:error.message,users:[]})

					}
				)
			}
		},
		mounted(){
			
		}
	}
</script>
