<template>
    <div class="personal-center">
        <el-row>
            <el-col :span="8" :offset="8">
                <el-card class="box-card">
                    <div slot="header" class="clearfix">
                        <span>个人中心</span>
                    </div>
                    <div class="user-info">
                        <el-avatar :size="100" :src="user.avatar" />
                        <h2>{{ user.name }}</h2>
                        <p>{{ user.bio }}</p>
                    </div>
                </el-card>
            </el-col>
        </el-row>
    </div>
</template>

<script>
export default {
    name: 'PersonalCenter',
    data() {
        return {
            user: {
                name: '张三',
                email: 'zhangsan@example.com',
                phone: '123-456-7890',
                avatar: 'https://via.placeholder.com/100',
                bio: '前端开发工程师，喜欢编程和设计。',
                activities: [
                    { timestamp: '2023-06-01', content: '参加了 Vue.js 研讨会' },
                    { timestamp: '2023-05-20', content: '完成了新的项目' },
                    { timestamp: '2023-05-15', content: '发布了一篇新博客' }
                ]
            },
            settings: {
                notifications: true,
                privacy: 'public',
                language: 'zh'
            }
        }
    },
    methods: {
        saveSettings() {
            this.$message({
                message: '设置已保存',
                type: 'success'
            });
        }
    }
}
</script>

<style scoped>
.el-menu-demo {
    background-color: #545c64;
    color: #fff;
    border-bottom: none;
}

.el-menu-demo .el-menu-item {
    color: #fff;
}

.personal-center {
    background-image: url('../assets/bkimg.png');
    /* 替换为你的背景图片URL */
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
    /* 背景图固定 */
    min-height: 100vh;
    /* 确保背景图覆盖整个视口 */
    overflow: hidden;
    /* 隐藏溢出 */
}

.box-card {
    margin-top: 20px;
    background: rgba(255, 255, 255, 0.8);
    /* 使卡片背景半透明 */
}

.user-info {
    text-align: center;
}

.extra-info {
    margin-top: 20px;
}

.settings-form {
    margin-top: 20px;
}
</style>