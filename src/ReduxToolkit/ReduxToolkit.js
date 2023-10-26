import { createSlice } from "@reduxjs/toolkit";
const initialState={
    Cart:0,
    Item:[],
    TotalPrice:0,
    Titles:[],
    Prices:[],
    itemImg:[]

}
const ReduxToolkit=createSlice({
    name:'Cart_ReduxToolkit',
    initialState,
    reducers:{
        addToCart(state=initialState, action){
            state.Cart= state.Cart + 1
        },
        itemName(state=initialState,action){
        // state.Item=action.payload
            state.Item.push(action.payload);
            // console.log("hello", action.payload)
            state.TotalPrice= state.TotalPrice + action.payload.price
            console.log(state.TotalPrice)
            state.Titles.push(action.payload.title)
            state.Prices.push(action.payload.price)
            state.itemImg.push(action.payload.image)
        },
        // totalPrice(state=initialState,action){
        //     state.Item.filter()
        // }



    }
})

export const {addToCart,itemName}=ReduxToolkit.actions
export default ReduxToolkit.reducer