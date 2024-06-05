import http from '../utils/request'

//请求首页数据
export const getData = () => {
    
    return http.get('/home/getData')
}

export const getUser = (params) => {
    //返回用户列表
    return http.get('/users/getUser',params)
}

export const addUser = (data) => {
    return http.post('/users/add',data)
}

export const editUser = (data) => {
    return http.post('/users/edit',data)
}

export const delUser = (data) => {
    return http.post('/users/del',data)
}

export const getMenu = (data) => {
    return http.post('/permission/getMenu',data)
}