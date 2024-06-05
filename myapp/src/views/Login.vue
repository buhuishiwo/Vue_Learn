<template>
    <div class="user-container">
        <el-form ref="form" label-width="70px" :inline="true" class="login-container" :model='form' :rules="rules">
            <h3 class="login_title">系统登录</h3>
            <el-form-item label="用户名" prop="username">
                <el-input v-model="form.username" placeholder="请输入用户名"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="password">
                <el-input type="password" v-model="form.password" placeholder="请输入密码"></el-input>
            </el-form-item>
            <el-button @click="submit()" type="primary">登录</el-button>
        </el-form>
    </div>
</template>

<script>
import Cookie from 'js-cookie'
import { getMenu } from '../api'
import { Message} from 'element-ui'
export default {
    data() {
        return {
            form: {
                username: '',
                password: ''
            },
            rules: {
                username: [
                    { required: true, message: '请输入用户名', trigger: 'blur' }
                ],
                password: [
                    { required: true, message: '请输入密码', trigger: 'blur' }
                ]
            }
        }
    },
    methods: {
        //登录
        //通过随机生成的 token 来判断用户是否登录
        submit() {
            //token信息
            // const token = Mock.Random.guid()
            // Cookie.set('token',token)
            this.$refs.form.validate((valid) => {
                if (valid) {
                    getMenu(this.form).then(({ data }) => {
                        if (data.code === 20000) {
                            //设置 Cookie，保存 token
                            Cookie.set('token', data.data.token)

                            this.$store.commit('setMenu',data.data.menu)
                            this.$store.commit('addMenu',this.$router)
                            //跳转到首页
                            this.$router.push('/home')
                            Message({
                                type: 'success',
                                message:'登录成功'
                            })
                        } else if (data.code === -999) {
                            Message({
                                type: 'error',
                                message: '账号或密码错误，登录失败'
                            })
                        }
                    })
                }
            })


        }
    }
}
</script>

<style lang="less" scoped>
.user-container {
    background-image: url('../assets/bkimg.png'); /* 替换为你的背景图片URL */
    background-size: cover;
    background-position: center;
    min-height: 100vh; /* 确保背景图覆盖整个视口 */
    background-attachment: fixed;
    overflow: hidden;
}
.login-container {
    width: 350px;
    border: 1px solid #eaeaea;
    margin: 180px auto;
    padding: 35px 35px 15px 35px;
    background-color: #fff;
    background: rgba(255, 255, 255, 0.8);
    box-shadow: 0 0 25px #cac6ca;
    border-radius: 30px;
    box-sizing: border-box;

    .login_title {
        text-align: center;
        margin-bottom: 40px;
        color: #505458;
    }

    .el-input {
        width: 198px;
    }

    .el-button {
        margin-top: 10px;
        margin-left: 104px;
    }
}
</style>