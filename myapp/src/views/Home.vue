<template>
    <el-row>
        <el-col :span="8" style="padding-right: 10px;">
            <el-card class="box-card" shadow="hover">
                <div class="user">
                    <img src="../assets/anya30.png" alt="" srcset="">
                    <div class="userinfo">
                        <p class="name">{{ this.userinfo.name }}</p>
                        <p class="access">{{ this.userinfo.tag }}</p>
                    </div>
                </div>
                <div class="login-info">
                    <p>上次登录时间：<span>{{ this.currentTime }}</span></p>
                    <p>上次登录地点：<span>{{this.location}}</span></p>
                </div>
            </el-card>

            <el-card class="table-card" shadow="hover">
                <el-table :data="tableData" style="width: 100%">
                    <el-table-column v-for="(val, key) in tableLabel" :prop="key" :label="val"
                        width="120"></el-table-column>
                </el-table>
            </el-card>
        </el-col>
        <el-col :span="16" style="padding-left: 10px;">
            <div class="num">
                <el-card v-for="item in countData" shadow="hover" :key="item.name" :body-style="{ display: 'flex', padding: '0' }">
                    <i class="icon" :class="`el-icon-${item.icon}`" :style="{ background: item.color }"></i>
                    <div class="detail">
                        <p class="price">¥ {{ item.displayValue }}</p>
                        <p class="txt">{{ item.name }}</p>
                    </div>
                </el-card>
            </div>
            <el-card style="height: 280px;" shadow="hover">
                <!-- 折线图 -->
                <div ref="echarts1" style="height: 280px;"></div>
            </el-card>
            <!-- 柱状图/饼图 -->
            <div class="graph">
                <el-card style="height: 260px; width: 48%;" shadow="hover">
                    <div ref="echarts2" style="height: 260px;"></div>
                </el-card>
                <el-card style="height: 260px; width: 48%;" shadow="hover">
                    <div ref="echarts3" style="height: 230px;"></div>
                </el-card>
            </div>
        </el-col>
    </el-row>
</template>

<script>
import axios from 'axios'
import Cookie from 'js-cookie'
import { getData } from '../api/index'
import * as echarts from 'echarts'
export default {
    data() {
        return {
            tableData: [],
            tableLabel: {
                name: '型号',
                todayBuy: '今日购买',
                monthBuy: '本月购买',
                totalBuy: '总购买'
            },
            countData: [
                {
                    name: "今日支付订单",
                    value: 5234,
                    icon: "success",
                    color: "#2ec7c9",
                    displayValue: 0

                },
                {
                    name: "今日收藏订单",
                    value: 2140,
                    icon: "star-on",
                    color: "#ffb980",
                    displayValue: 0

                },
                {
                    name: "今日未支付订单",
                    value: 234,
                    icon: "s-goods",
                    color: "#5ab1ef",
                    displayValue: 0

                },
                {
                    name: "本月支付订单",
                    value: 114514,
                    icon: "success",
                    color: "#2ec7c9",
                    displayValue: 0

                },
                {
                    name: "本月收藏订单",
                    value: 99191,
                    icon: "star-on",
                    color: "#ffb980",
                    displayValue: 0

                },
                {
                    name: "本月未支付订单",
                    value: 5667,
                    icon: "s-goods",
                    color: "#5ab1ef",
                    displayValue: 0
                },
            ],
            incrementValue: 999, // 每次增加的值
            interval: 20, // 每次增加的时间间隔，单位毫秒
            location: null,
            userinfo:{},
            currentTime:''
        }
    },

    mounted() {
        this.locatetime()
        this.fetchLocation()
        getData().then(({ data }) => {
            if(Cookie.get('token')==='admin') {
                this.userinfo = data.data.userinfo[0]
            } else if(Cookie.get('token')==='user') {
                this.userinfo = data.data.userinfo[1]
                console.log(this.userinfo);
            }
            const { tableData, orderData, userData, videoData } = data.data
            this.tableData = tableData
            //初始化 echarts 实例
            const echarts1 = echarts.init(this.$refs.echarts1)
            let echarts1Option = {}
            //初始化 x 轴数据
            //使用 Object.keys将获得的数据返回数组
            const xAxis = orderData.date
            const xAxisData = {
                data: xAxis
            }
            const legend = Object.keys(orderData.data[0])
            const legendData = {
                data: legend
            }
            console.log(orderData.data[0]);
            echarts1Option.title = { text: '销量' }
            echarts1Option.xAxis = xAxisData
            echarts1Option.legend = legendData
            echarts1Option.tooltip = {}
            echarts1Option.yAxis = {}
            echarts1Option.series = []
            legend.forEach(key => {
                echarts1Option.series.push({
                    name: key,
                    data: orderData.data.map(item => item[key]),
                    type: 'line'
                })
            })
            echarts1.setOption(echarts1Option)
            //柱状图
            const echarts2 = echarts.init(this.$refs.echarts2)
            const echarts2Option = {
                legend: {
                    // 图例文字颜色
                    textStyle: {
                        color: "#333",
                    },
                },
                grid: {
                    left: "20%",
                },
                // 提示框
                tooltip: {
                    trigger: "axis",
                },
                xAxis: {
                    type: "category", // 类目轴
                    data: userData.map(item => item.date),
                    axisLine: {
                        lineStyle: {
                            color: "#17b3a3",
                        },
                    },
                    axisLabel: {
                        interval: 0,
                        color: "#333",
                    },
                },
                yAxis: [
                    {
                        type: "value",
                        axisLine: {
                            lineStyle: {
                                color: "#17b3a3",
                            },
                        },
                    },
                ],
                color: ["#2ec7c9", "#b6a2de"],
                series: [
                    {
                        name: '新增用户',
                        data: userData.map(item => item.new),
                        type: 'bar'
                    },
                    {
                        name: '活跃用户',
                        data: userData.map(item => item.active),
                        type: 'bar'
                    }
                ],
            }
            console.log(echarts2Option)
            //显示图表
            echarts2.setOption(echarts2Option)

            const echarts3 = echarts.init(this.$refs.echarts3)
            const echarts3Option = {
                tooltip: {
                    trigger: "item",
                },
                color: [
                    "#0f78f4",
                    "#dd536b",
                    "#9462e5",
                    "#a6a6a6",
                    "#e1bb22",
                    "#39c362",
                    "#3ed1cf",
                ],
                series: [
                    {
                        data:videoData,
                        type:'pie'
                    }
                ],
            }
            echarts3.setOption(echarts3Option)
        })
    this.startCounting()
},
methods: {
    locatetime(){
        const now = new Date()
        this.currentTime = now.toLocaleDateString()
    },
    fetchLocation() {
      axios.get(`https://ipinfo.io?token=d8b44dc0ce693c`)  // 替换为你的 API 密钥
        .then(response => {
          this.location = `${response.data.city}, ${response.data.region}, ${response.data.country}`;
        })
        .catch(error => {
          console.error('Error fetching location:', error);
        });
    },
    //页面加载完，主要数据增加效果
    startCounting() {
        this.countData.forEach((item, index) => {
            this.incrementItemValue(item, index)
        })
    },
    incrementItemValue(item, index) {
        const intervalId = setInterval(() => {
            if (item.displayValue < item.value) {
                item.displayValue += this.incrementValue
            } else {
                item.displayValue = item.value // 确保最终值准确
                clearInterval(intervalId) // 停止计时器
            }
        }, this.interval)
    }
}
}

</script>

<style lang="less" scoped>
.user {
    padding-bottom: 20px;
    margin-bottom: 20px;
    border-bottom: 1px solid #ccc;
    display: flex;
    align-items: center;

    img {
        margin-right: 40px;
        width: 150px;
        height: 150px;

    }

    .userinfo {
        .name {
            font-size: 32px;
            margin-bottom: 10px;
        }

        .access {
            color: #999999;
        }

    }

}

.login-info {
    p {
        line-height: 28px;
        font-size: 14px;
        color: #999999;

        span {
            color: #666666;
            margin-left: 60px;
        }
    }
}

.table-card {
    margin-top: 20px;
    height: 460px;
}

.num {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    .icon {
        width: 80px;
        height: 80px;
        font-size: 30px;
        text-align: center;
        line-height: 80px;
        color: #fff;
    }

    .detail {
        display: flex;
        flex-direction: column;
        justify-content: center;

        .price {
            font-size: 30px;
            margin-bottom: 10px;
            line-height: 30px;
            height: 30px;
            margin-left: 15px;
        }

        .txt {
            font-size: 14px;
            color: #999999;
            margin-left: 5px;
        }
    }

    .el-card {
        width: 32%;
        margin-bottom: 20px;
    }
}

.graph {
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
}
</style>