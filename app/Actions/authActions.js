export function login(isLogin) {
  return {
    type: 'LOGIN',
    payload: isLogin,
  };
}
export function logout(isLogin) {
  return {
    type: 'LOGOUT',
    payload: isLogin,
  };
}
