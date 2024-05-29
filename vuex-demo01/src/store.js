import Vue from "vue";
import Vuex from "vuex"

Vue.use(Vuex)

export default new Vuex.Store({
    state:{
        cartItems:[
            {id:1,name:"手机",price:1000,quantity:1},
            {id:2,name:"电脑",price:5000,quantity:1},
            {id:3,name:"键盘",price:600,quantity:1}
        ]
    },
    mutations:{
        addToCart(state, item) {
            const index = state.cartItems.findIndex(cartItem => cartItem.id === item.id);
            if (index !== -1) {
              state.cartItems[index].quantity++;
            } else {
              state.cartItems.push({...item, quantity: 1});
            }
          },
          removeFromCart(state, item) {
            const index = state.cartItems.findIndex(cartItem => cartItem.id === item.id);
            if (state.cartItems[index].quantity > 1) {
              state.cartItems[index].quantity--;
            } else {
              state.cartItems.splice(index, 1);
            }
          }
    },
    getters: {
        totalPrice: state => {
          return state.cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);
        }
      }
})