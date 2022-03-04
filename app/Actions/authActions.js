export function login(isLogin, name, typeLogin) {
  return {
    type: 'LOGIN',
    payload: isLogin,
    name: name,
    typeLogin: typeLogin,
  };
}
export function logout(isLogin) {
  return {
    type: 'LOGOUT',
    payload: isLogin,
  };
}
export function like(payload) {
  return {
    type: 'LIKE',
    payload: payload,
  };
}
