import { Formik, Form, Field, ErrorMessage } from 'formik'
import { useDispatch } from 'react-redux'
import { setLoginThunk } from '../../store/reducers/authReducer'
import st from "./LoginPage.module.css"

const LoginPage = () => {
    const dispatch = useDispatch()

    const handleLogin = ({ email, password }, resetForm ) => {
        dispatch(setLoginThunk(email, password))
        resetForm()
    }

    return (
        <div className={st.loginDiv}>
            <h2>Log In</h2>

            <Formik
                initialValues={{
                    email: "",
                    password: ""
                }}
                
                onSubmit={(values, {resetForm}) => handleLogin(values, resetForm)}
            >
                <Form className={st.form}>
                    <Field 
                        name = "email"
                        placeholder = "Email"
                    
                    />

                    <Field 
                        name = "password"
                        placeholder = "Password"
                    
                    />
                    <button type='submit' className={st.loginBtn}>Log In</button>
                </Form>
            </Formik>
        </div>
    )
}

export default LoginPage