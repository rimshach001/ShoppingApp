import {configureStore} from'@reduxjs/toolkit'
import Cart_ReduxToolkit from './ReduxToolkit'
const Store_ReduxToolkit=configureStore({
    reducer:{
        data:Cart_ReduxToolkit
    }
})
export default Store_ReduxToolkit