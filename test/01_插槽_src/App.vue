<template>
    <div class="container">
        <MainCategory title="美食" :listData="foods">
            <img src="../public/未标题-3.jpg" alt="">
        </MainCategory>
        <MainCategory title="游戏" :listData="games">
            <ul>
                <li v-for="(g,index) in games" :key="index">
                    {{ g }}
                </li>
            </ul>
        </MainCategory>
        <MainCategory title="电影" :listData="films">
            <img src="../public/未标题-3.jpg" alt="">
        </MainCategory>
    </div>
</template>

<script>
import MainCategory from './components/MainCategory'
export default {
    name: 'App',
    components: {MainCategory },
    data() {
        return {
            foods:['火锅','烧烤','小龙虾','牛排'],
            games:['红色警戒','明日方舟','鸣潮','碧蓝航线'],
            films:['《教父》','《飞驰人生 2》','《间谍过家家代号：白》','《花束般的恋爱》']
        }
    }
}
</script>

<style>
    .container {
        display: flex;
        justify-content: space-around;
    }
</style>
