const initialState = {
  isLogin: false,
};

export default function authReducers(state = initialState, action) {
  switch (action.type) {
    case 'LOGIN':
      return {
        ...state,
        isLogin: action.payload,
      };
    case 'LOGOUT':
      return {
        ...state,
        isLogin: action.payload,
      };
    default:
      return state;
  }
}
