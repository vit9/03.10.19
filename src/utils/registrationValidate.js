export const regValidate = values => {
    const { login, password, email } = values;
    const error = {};

    if (!login) {
        error.login = "Fill thie field"
    } else if (login.length > 15) {
        error.login = '15 symbols max'
    } else if (!/^[a-zA-Z0-9]+$/.test(login)) {
        error.login = "Login not valid"
    }

    if (!password) {
        error.password = "Fill thie field"
    }else if(!/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/.test(password)) {
        error.password = "Password not valid"
    }

    if (!email) {
        error.email = "Fill thie field"
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.]+\.[A-Z]{2,4}$/i.test(email)) {
        error.email = "E-mail not valid"
    }

    return error;
};