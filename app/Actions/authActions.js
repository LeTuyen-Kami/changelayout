export function login(isLogin, name) {
  return {
    type: 'LOGIN',
    payload: isLogin,
    name: name,
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
