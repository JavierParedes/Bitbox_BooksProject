export const loginUser = (userLogin) => {
    return (userLogin.alias === 'admin' && userLogin.password === '12345');
}