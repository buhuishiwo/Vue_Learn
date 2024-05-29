<template>
    <div class="list">
        <div v-for="item in cartItems" :key="item.id">
            {{ item.name }} - ¥{{ item.price }} - 数量：{{ item.quantity }}
            <button @click="addQuantity(item)">+</button>
            <button @click="subQuantity(item)">-</button>
        </div>
        总价：¥{{ totalPrice }}
    </div>
</template>

<script>

    import {mapState,mapMutations,mapGetters} from 'vuex'
    
    export default {
        data() {
            return {

            }
        },
        computed:{
            ...mapState(['cartItems']),
            ...mapGetters(['totalPrice'])
        },
        methods:{
            ...mapMutations(['addToCart','removeFromCart']),
            addQuantity(item) {
                this.addToCart(item)
            },
            subQuantity(item) {
                this.removeFromCart(item)
            }
        }
    }
</script>

<style >
.list{
    width: 300px;
    height: 400px;
    margin: 0 auto;
}
button{
    width: 35px;
    height: 35px;
}
</style>