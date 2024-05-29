<template>
	<li>
		<label>
			<input type="checkbox" :checked="todo.completed" @change="handleCheck(todo.id)" />

			<span :style="{textDecoration: todo.completed ? 'line-through' : 'none'}">{{todo.title}}</span>
		</label>
		<button class="btn btn-danger" @click="handleDelete(todo.id)">删除</button>
	</li>
</template>

<script>
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
					this.$bus.$emit('delete',id)
				}
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