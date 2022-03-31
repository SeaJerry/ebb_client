export const LoginStart = (userCreds) => ({
    type: "login_start"
})

export const LoginSuccess = (user) => ({
    type: "login_success",
    payload: user,
})

export const LoginFail = () => ({
    type: "login_fail"
})

export const LogoutSuccess = () => ({
    type: "logout_success"
})