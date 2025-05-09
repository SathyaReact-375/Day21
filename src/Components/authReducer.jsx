
const initialState = {
    isAuthenticated: false,
    user: null,
    token: null,
    loading: false,
    error: null,
  };
  
  const authReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'LOGIN_REQUEST':
        return {
          ...state,
          loading: true,
          error: null,
        };
      case 'LOGIN_SUCCESS':
        return {
          ...state,
          isAuthenticated: true,
          user: action.payload.user,
          token: action.payload.token,
          loading: false,
          error: null,
        };
      case 'LOGIN_FAILURE':
        return {
          ...state,
          isAuthenticated: false,
          user: null,
          token: null,
          loading: false,
          error: action.payload.error,
        };
      case 'LOGOUT':
        return {
          ...initialState, 
        };
      case 'REGISTER_REQUEST':
        return {
          ...state,
          loading: true,
          error: null,
        };
      case 'REGISTER_SUCCESS':
        return {
          ...state,
          loading: false,
          error: null,
         
        };
      case 'REGISTER_FAILURE':
        return {
          ...state,
          loading: false,
          error: action.payload.error,
        };
      default:
        return state;
    }
  };
  
  export default authReducer;