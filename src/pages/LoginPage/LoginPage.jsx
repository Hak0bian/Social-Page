import { Formik, Form, Field } from 'formik'
import { useDispatch, useSelector } from 'react-redux'
import { setLoginThunk, clearErrorAC } from '../../store/reducers'
import st from "./LoginPage.module.css"

const LoginPage = () => {
    const dispatch = useDispatch()
    const {errorMessages} = useSelector((state) => state.auth);
    const emailError = errorMessages?.find(err => err.field === "email");
    const passwordError = errorMessages?.find(err => err.field === "password");
    const fieldError = errorMessages?.find(err => err.field === "captcha");
    
    const handleLogin = ({ email, password }, resetForm ) => {
        dispatch(setLoginThunk(email, password))
        resetForm()
    }

    const handleFieldChange = (e, handleChange) => {
        handleChange(e); 
        const { name, value } = e.target;
        
        if (value.trim() !== "") {
            dispatch(clearErrorAC(name));
        }
    };

    return (
        <section className={st.loginSec}>
            <div className={st.loginDiv}>
                <h2>Log In</h2>

                <Formik
                    initialValues={{ email: "", password: "" }}
                    onSubmit={(values, { resetForm }) => handleLogin(values, resetForm)}
                >
                    {({ handleChange }) => (
                        <Form className={st.form}>
                            <Field name="email" placeholder="Email"
                                onChange={(e) => handleFieldChange(e, handleChange)}
                            />
                            { emailError && <p className={st.errorMsg}> {emailError.error} </p> }

                            <Field name="password" placeholder="Password" type="password"
                                onChange={(e) => handleFieldChange(e, handleChange)}
                            />
                            { passwordError && <p className={st.errorMsg}> {passwordError.error} </p> }
                            { fieldError && <p className={st.errorMsg}> {fieldError.error} </p> }

                            <button type="submit" className={st.loginBtn}>Log In</button>
                        </Form>
                    )}
                </Formik>
            </div>
        </section>
    )
}

export default LoginPage