import { combineReducers } from 'redux'

function LoginOrReg(state = [], action) {
    switch (action.type) {
      case 'LoginEvent':
        {
          return [{
            Email: action.payload.Email,
            Password: action.payload.Password,
          }, ...state]
        }
  
      case 'RegisterEvent':
        {
            return [{
                Email: action.payload.Email,
                Password: action.payload.Password,
            }, ...state]
        }
  
      default:
        return state
    }
  }
  
  const LRApp = combineReducers({
    LoginOrReg,
  })
  
  export default LRApp