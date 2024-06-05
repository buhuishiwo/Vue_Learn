import Mock from 'mockjs'
import homeApi from './mockServeData/home'
import users from './mockServeData/users'
import permission from './mockServeData/permission'
//定义 mock 请求拦截
Mock.mock('/api/home/getData',homeApi.getStatisticalData())

//用户列表的数据
Mock.mock('/api/users/add','post',users.createUser)
Mock.mock('/api/users/edit','post',users.updateUser)
Mock.mock('/api/users/del','post',users.deleteUser)
Mock.mock(/api\/users\/getUser/,users.getUserList)

Mock.mock(/api\/permission\/getMenu/,'post',permission.getMenu)