const initialState = {
  isLogin: false,
  username: '',
  typeLogin: '',
  liked: [
    {
      id: null,
      name: '',
    },
  ],
};

export default function authReducers(state = initialState, action) {
  switch (action.type) {
    case 'LOGIN':
      return {
        ...state,
        isLogin: action.payload,
        username: action.name,
        typeLogin: action.typeLogin,
      };
    case 'LOGOUT':
      return {
        ...state,
        isLogin: action.payload,
      };
    case 'LIKE':
      console.log(action.payload);
      return {
        ...state,
        liked: [...state.liked, action.payload],
      };
    default:
      return state;
  }
}
