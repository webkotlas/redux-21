import {createStoreCustom} from "./createStoreCustom";
import {rootReducer} from "./redux/rootReducer";
import './styles.css'

const counter = document.getElementById('counter')
const btnAdd = document.getElementById('add')
const btnSub = document.getElementById('sub')
const btnAsync = document.getElementById('async')
const btnTheme = document.getElementById('theme')

let store = createStoreCustom(rootReducer, 0);


btnAdd.addEventListener('click', () => {
    store.dispatch({ type:'INCREMENT' })
})

btnSub.addEventListener('click', () => {
    store.dispatch({ type:'DECREMENT' })
})

btnAsync.addEventListener('click', () => {

})


store.subscribe(() => {
    const state = store.getState()
    counter.textContent = state;
})

store.dispatch({ type:'INIT_APP' })


btnTheme.addEventListener('click', () => {
  //  document.body.classList.toggle('dark')
})

