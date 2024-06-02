<template>
    <div class="container">
        <MainCategory title="美食" :listData="foods">
            <img slot="center" src="../public/未标题-3.jpg" alt="">
            <a slot="footer" href="#">更多美食</a>
        </MainCategory>
        <MainCategory title="游戏" :listData="games">
            <ul slot="center">
                <li v-for="(g, index) in games" :key="index">
                    {{ g }}
                </li>
            </ul>
            <div class="foot" slot="footer">
                <a href="#">更多美食</a>
                <a href="#">更多美食</a>
            </div>

        </MainCategory>
        <MainCategory title="电影" :listData="films">
            <img slot="center" src="../public/未标题-3.jpg" alt="">
            <template v-slot:footer>
                <div class="foot" >
                    <a href="#">更多美食</a>
                    <a href="#">更多美食</a>
                    <a href="#">更多美食</a>
                </div>
                <h4>欢迎前来观看</h4>
            </template>

        </MainCategory>
    </div>
</template>

<script>
import MainCategory from './components/MainCategory'
export default {
    name: 'App',
    components: { MainCategory },
    data() {
        return {
            foods: ['火锅', '烧烤', '小龙虾', '牛排'],
            games: ['红色警戒', '明日方舟', '鸣潮', '碧蓝航线'],
            films: ['《教父》', '《飞驰人生 2》', '《间谍过家家代号：白》', '《花束般的恋爱》']
        }
    }
}
</script>

<style>
.container,
.foot {
    display: flex;
    justify-content: space-around;
}

h4 {
    text-align: center;
}
</style>
