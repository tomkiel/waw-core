import { createStore } from 'redux'

const initialState = {
    dashShow: false,
    userSidebar: false
  }
  
  const changeState = (state = initialState, type : any, ...rest : any ) => {
    switch (type) {
      case 'set':
        return {...state, ...rest }
      default:
        return state
    }
  }
  
  const store = createStore(changeState)
  export default store