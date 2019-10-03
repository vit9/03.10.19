export const authValidate =  values => {
    const { email, password } = values;
    const error = {};
    if(!email) {   
        error.email = "Fill the field"
       
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.]+\.[A-Z]{2,4}$/i.test(email)) {
        error.email = "Wrong adress"
    }
    if(!password) {
        error.password = "Fill the field"
    }else if(!/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/.test(password)) {
        error.password = "Password not valid"
    }
    
    return error;
};
///^[a-zA-Z0-9]+$/