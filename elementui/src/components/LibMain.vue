<template>
    <div>
        <el-container>
            <!-- 顶部 -->
            <el-header>图书管理后台</el-header>
            <!-- 主内容 -->
            <el-main>
                <el-table :data="books">
                    <el-table-column prop="id" label="序号" width="440">
                    </el-table-column>
                    <el-table-column prop="title" label="名称" width="350">
                    </el-table-column>
                    <el-table-column prop="author" label="作者" width="350">
                    </el-table-column>
                    <el-table-column prop="copies" label="数量" width="320">
                    </el-table-column>
                    <el-table-column label="操作">
                        <template slot-scope="scope">
                            <el-button size="mini" @click="editBook(scope.row)">编辑</el-button>
                            <el-button size="mini" type="danger" @click="handleDelete(scope.index)">删除</el-button>
                        </template>
                    </el-table-column>
                </el-table>
            </el-main>
            <!-- 底部 -->
            <el-footer>
                <el-button @click="addBook()">添加新书</el-button>
            </el-footer>

            <!-- 对话框 -->
            <el-dialog title="编辑书本信息" :visible.sync="dialogVisible" width="30%">
                <el-form :model="form">
                    <el-form-item label="书名">
                        <el-input v-model="form.title"></el-input>
                    </el-form-item>
                    <el-form-item label="作者">
                        <el-input v-model="form.author"></el-input>
                    </el-form-item>
                    <el-form-item label="库存">
                        <el-input v-model="form.copies" type="number"></el-input>
                    </el-form-item>
                </el-form>
                <div slot="footer" class="dialog-footer">
                    <el-button @click="dialogVisible = false">取消</el-button>
                    <el-button type="primary" @click="saveBook">确定</el-button>
                </div>
            </el-dialog>
        </el-container>
    </div>
</template>

<script>
export default {
    name: 'LibMain',
    data() {
        return {
            dialogVisible: false,
            isEdit: false,
            books: [
                { id: 1, title: "Python编程", author: "John Doe", copies: 4 },
                { id: 2, title: "历史的秘密", author: "Jane Smith", copies: 3 },
                { id: 3, title: "宇宙探索", author: "Emily Brown", copies: 2 },
                { id: 4, title: "健康生活", author: "Mike Johnson", copies: 5 },
                { id: 5, title: "数学之美", author: "Sarah Lee", copies: 4 },
                { id: 6, title: "艺术欣赏", author: "David White", copies: 3 },
                { id: 7, title: "编程入门", author: "Alice Green", copies: 2 },
                { id: 8, title: "科幻世界", author: "Frank Black", copies: 5 },
                { id: 9, title: "自然奇观", author: "Grace Blue", copies: 4 },
                { id: 10, title: "音乐之声", author: "Tom Red", copies: 3 }
            ],
            form: {
                id: null,
                title: '',
                author: '',
                copies: ''
            }

        }
    },
    methods: {
        addBook() {
            this.isEdit = false
            this.dialogVisible = true
        },
        editBook(book) {
            this.isEdit = true,
            this.form = { ...book },
            this.dialogVisible = true
        },
        saveBook() {
            if (this.isEdit === true) {
                const index = this.books.findIndex(book => book.id === this.form.id);
                if (index !== -1) {
                    this.books.splice(index, 1, { ...this.form });
                }
            } else {
                this.form.id = this.books.length + 1;
                this.books.push({ ...this.form });
            }
            this.dialogVisible = false
        },
        handleDelete(index) {
            this.books.splice(index, 1)
            this.updateBook()
        },
        updateBook() {
            this.books.forEach((book, index) => {
                book.id = index + 1;
            })
        }
    }

}
</script>

<style>
.el-header {
    background-color: #589ff8;
    color: #333;
    text-align: center;
    line-height: 60px;
}
.el-footer {
    background-color: #589ff8;
    line-height: 60px;
    position: fixed;
    bottom: 0%;
    width: 100%;
    z-index: 9999;
}

body>.el-container {
    margin-bottom: 40px;
}
</style>