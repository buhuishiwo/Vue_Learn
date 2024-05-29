<template>
	<transition 
	name="animate__animated animate__bounce"
	enter-active-class="animate__fadeInLeft"
	leave-active-class="animate__fadeOutRight"
	appear
	>
	<li>
		<label>
			<input type="checkbox" :checked="todo.completed" @change="handleCheck(todo.id)" />
			<span 
			v-show="!todo.isEdit" 
			:style="{textDecoration: todo.completed ? 'line-through' : 'none' }">{{todo.title}}</span>
			<input 
			class="input-update"
			type="text" 
			:value="todo.title" 
			v-show="todo.isEdit" 
			@keyup.enter="handleEnter(todo,$event)"
			ref="inputTitle"
			>
		</label>
		<button class="btn btn-danger" @click="handleDelete(todo.id)">删除</button>
		<button v-show="!todo.isEdit"  class="btn btn-edit" @click="handleEdit(todo)">编辑</button>
	</li>
	</transition>	
</template>

<script>
	import 'animate.css';
	import pubsub from 'pubsub-js';
	export default {
		name:'MyItem',
		//声明接收todo
		props:['todo'],
		methods: {
			//勾选or取消勾选
			handleCheck(id){
				//通知App组件将对应的todo对象的completed值取反
				this.$bus.$emit('check',id)
			},
			//删除
			handleDelete(id){
				if(confirm('确定删除吗？')){
					//通知App组件将对应的todo对象删除
					pubsub.publish('deleteTodo',id)
				}
			},
			handleEdit(todo) {
				if(Object.prototype.hasOwnProperty.call(todo,'isEdit')){
					todo.isEdit = true
				}else{
					this.$set(todo,'isEdit',true)
				}
				//在下一次 DOM更新结束后执行其指定的回调
				this.$nextTick(function(){
					this.$refs.inputTitle.focus()
				})
			},
			handleEnter(todo,e) {
				todo.isEdit = false
				if(!e.target.value.trim()) return alert('不能输入空值')
				this.$bus.$emit('update',todo.id,e.target.value)
			}
		},
	}
</script>

<style scoped>
	/*item*/
	li {
		list-style: none;
		height: 45px;
		line-height: 45px;
		padding: 0 5px;
		border-bottom: 1px solid #ddd;
		transition: .5s;
		
	}

	li label {
		float: left;
		cursor: pointer;
	}

	li label li input {
		vertical-align: middle;
		margin-right: 6px;
		position: relative;
		top: -1px;
	}

	li button {
		float: right;
		display: none;
		margin-top: 3px;
		transition: .5s;
	}

	li:before {
		content: initial;
	}

	li:last-child {
		border-bottom: none;
	}

	li:hover{
		background-color: #ddd;
	}
	
	li:hover button{
		display: block;
	}
	.strike {
		text-decoration: line-through;
	}

</style>