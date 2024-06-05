<template>
    <div class="manage">
        <el-dialog title="提示" :visible.sync="dialogVisible" width="50%" :before-close="handleClose">
            <!-- 表单 -->
            <el-form ref="form" :rules="rules" :inline="true" :model="form" label-width="80px">
                <el-form-item label="商品名称" prop="name">
                    <el-input placeholder="请输入商品名称" v-model="form.name"></el-input>
                </el-form-item>
                <el-form-item label="商品价格" prop="price">
                    <el-input placeholder="请输入商品价格" v-model="form.price"></el-input>
                </el-form-item>
                <br>
                <el-form-item label="商品库存" prop="number">
                    <el-input placeholder="请输入商品库存" v-model="form.number"></el-input>
                </el-form-item>
                <el-form-item label="商品ID" prop="id">
                    <el-input placeholder="请输入商品 ID" v-model="form.id"></el-input>
                </el-form-item>
            </el-form>
            <span slot="footer" class="dialog-footer">
                <el-button @click="cancel()">取 消</el-button>
                <el-button type="primary" @click="submitForm()">确 定</el-button>
            </span>
        </el-dialog>
        <div class="manage-header">
            <el-button @click="handleAdd()" type="primary">
                +新增
            </el-button>
            <!-- form搜索区域 -->
            <el-form :inline="true" :model="userForm">
                <el-form-item>
                    <el-input placeholder="请输入商品名称" v-model="userForm.name"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="onSubmit()">查询</el-button>
                </el-form-item>
            </el-form>
        </div>
        <!-- 商品数据展示区 -->
        <div class="common-table">
            <el-table stripe :data="tableData" style="width: 100%" height="90%">
                <el-table-column prop="name" label="商品名称">
                </el-table-column>
                <el-table-column prop="price" label="商品价格">
                </el-table-column>
                <el-table-column prop="number" label="商品库存">
                    <template slot-scope="scope">
                        <el-tag :type="scope.row.number >= 500 ? 'success' : 'danger'">{{ scope.row.number }}</el-tag>
                    </template>
                </el-table-column>
                <el-table-column prop="id" label="商品ID">
                </el-table-column>
                <el-table-column label="操作">
                    <template slot-scope="scope">
                        <el-button size="mini" @click="handleEdit(scope.row)">编辑</el-button>
                        <el-button type="danger" size="mini" @click="handleDelete(scope.row)">删除</el-button>
                    </template>
                </el-table-column>
            </el-table>
            <div class="pager">
                <el-pagination background layout="prev, pager, next" :total="this.total" @current-change="handlePage">
                </el-pagination>
            </div>
        </div>
    </div>
</template>

<script>
import { Message, MessageBox } from 'element-ui'
export default {
    data() {
        return {
            dialogVisible: false,
            form: {
                name: '',
                price: '',
                number: '',
                id: '',
            },
            rules: {
                name: { required: true, message: '请输入商品名称' },
                price: { required: true, message: '请输入商品价格' },
                number: { required: true, message: '请选择商品库存' },
                id: { required: true, message: '请选择商品ID' },
            },
            tableData: [
                {
                    name: '小米14',
                    price: '3299',
                    number: 1000,
                    id: '100001',
                },
                {
                    name: '小米14Pro',
                    price: '4299',
                    number: 190,
                    id: '100002',
                }, {
                    name: '苹果15Pro',
                    price: '8999',
                    number: 1000,
                    id: '100003',
                }, {
                    name: 'OPPOfindx',
                    price: '9999',
                    number: 10,
                    id: '100004',
                }, {
                    name: 'VIVOx100',
                    price: '3299',
                    number: 1000,
                    id: '100005',
                },
                {
                    name: '三星Glaxy19',
                    price: '10299',
                    number: 1000,
                    id: '100006',
                },
                {
                    name: '魅族16',
                    price: '3299',
                    number: 1004,
                    id: '100007',
                },
                {
                    name: '小米14Ultra',
                    price: '7899',
                    number: 10,
                    id: '100008',
                },
                {
                    name: '苹果14ProMax',
                    price: '9999',
                    number: 1000,
                    id: '100009',
                },
                {
                    name: '小米12',
                    price: '3299',
                    number: 1000,
                    id: '100010',
                }
            ],
            //是否为编辑信息
            isEdit: false,
            //当前总条数
            total: 0,
            pageData: {
                page: 1,
                limit: 20
            },
            userForm: {
                name: ''
            }
        }
    },
    methods: {
        submitForm() {
            this.$refs.form.validate((vaild) => {
                if (vaild) {
                    if (this.isEdit === false) {
                        this.tableData.push({ ...this.form })
                    } else {
                        const index = this.tableData.findIndex(item => item.id === this.form.id)
                        if (index !== -1) {
                            this.tableData.splice(index, 1, { ...this.form })
                        }
                    }
                    //清除表单中数据
                    this.$refs.form.resetFields()
                    //关闭弹窗
                    this.dialogVisible = false

                } else {
                    Message({
                        message: '请输入正确数据！',
                        type: 'error'
                    })
                }
            })
        },
        handleAdd() {
            this.isEdit = false
            this.dialogVisible = true
        },
        handleClose() {
            this.$refs.form.resetFields()
            this.dialogVisible = false
        },
        cancel() {
            this.$refs.form.resetFields()
            this.handleClose()
        },
        handleEdit(row) {
            this.isEdit = true
            this.dialogVisible = true
            //对数据进行深拷贝
            this.form = { ...row }
            this.$refs.form.resetFields()
        },
        handleDelete(row) {
            MessageBox.confirm('此操作将永久删除该数据, 是否继续?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(() => {
                this.tableData.splice(row, 1)
                Message({
                    type: 'success',
                    message: '删除成功!'
                })
            }).catch(() => {
                Message({
                    type: 'info',
                    message: '已取消删除'
                })
            })

        },
        handlePage(val) {
            this.pageData.page = val
            this.getList()
        },
        //列表查询
        onSubmit() {
            const index = this.tableData.findIndex(item => item.name === this.userForm.name)
            const name = this.tableData[index].name
            const price = this.tableData[index].price
            const id = this.tableData[index].id
            const number = this.tableData[index].number
            MessageBox.alert(`商品名称:${name},商品价格:${price},商品ID:${id},商品库存:${number}`, '查询结果', {
                confirmButtonText: '确定',
                callback: action => {
                    Message({
                        type: 'info',
                        message: "窗口关闭"
                    })
                }
            })
        }
    },
}
</script>

<style lang="less" scoped>
.manage {
    height: 90%;

    .manage-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .common-table {
        position: relative;
        height: calc(100% - 62px);

        .pager {
            position: absolute;
            bottom: 0;
            right: 20px;
        }
    }
}
</style>