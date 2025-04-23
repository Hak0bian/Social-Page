import { useEffect, useState } from 'react'
import { Formik, Form, Field } from 'formik'
import { useDispatch, useSelector } from 'react-redux'
import { setLoginThunk, clearErrorAC, getCaptchaThunk } from '../../store/reducers'
import { LuRefreshCw } from "react-icons/lu";
import { IoEyeSharp } from 'react-icons/io5';
import { FaEyeSlash } from 'react-icons/fa';
import st from "./LoginPage.module.css"

const LoginPage = () => {
    const dispatch = useDispatch()
    const {errorMessages, generalError, captcha} = useSelector((state) => state.auth);
    const emailError = errorMessages?.find(err => err?.field === "email");
    const passwordError = errorMessages?.find(err => err?.field === "password");
    const fieldError = errorMessages?.find(err => err?.field === "captcha"); 
    const [showPass, setShowPass] = useState(false);
    
    const handleLogin = (values, resetForm ) => {
        dispatch(setLoginThunk(values))
        resetForm()
    }

    const handleFieldChange = (e, handleChange) => {
        handleChange(e); 
        const { name, value } = e.target;
        
        if (value.trim() !== "") {
            dispatch(clearErrorAC(name));
        }
    };

    useEffect(() => {
        if (!captcha.url) {
            dispatch(getCaptchaThunk());
        }
    }, [captcha.url]);

    const changeCaptcha = () => {
        dispatch(getCaptchaThunk());
    }

    const showPassFunc = () => {
        setShowPass(!showPass);
    };


    return (
        <section className={st.loginSec}>
            <div className={st.loginDiv}>
                <h2>Log In</h2>

                <Formik
                    initialValues={{ 
                        email: "", 
                        password: "",
                        captcha: "",
                        rememberMe: false
                    }}
                    onSubmit={(values, { resetForm }) => handleLogin(values, resetForm)}
                >
                    {({ handleChange }) => (
                        <Form className={st.form}>
                            <Field name="email" placeholder="Email"
                                onChange={(e) => handleFieldChange(e, handleChange)}
                            />
                            { emailError && <p className={st.errorMsg}> {emailError.error} </p> }

                            <div className={st.passDiv}>
                                <Field 
                                    placeholder="Password" 
                                    name="password" 
                                    type={showPass ? "text" : "password"} 
                                    className={st.passField}
                                />
                                {
                                    showPass 
                                    ? <IoEyeSharp onClick={showPassFunc} className={st.eye} />
                                    : <FaEyeSlash onClick={showPassFunc} className={st.eye} />
                                }
                            </div>
                            { passwordError && <p className={st.errorMsg}> {passwordError.error} </p> }

                            <Field name="captcha" placeholder="Enter captcha" 
                                onChange={(e) => handleFieldChange(e, handleChange)}
                            />
                            { fieldError && <p className={st.errorMsg}> {fieldError.error} </p> }
                            { generalError && <p className={st.errorMsg}>{generalError}</p> }

                            {captcha.url && (
                                <div className={st.captchaDiv}>
                                    <img src={captcha.url} alt="captcha" className={st.captchaImg}/>
                                    <span onClick={changeCaptcha} className={st.changeBtn}> <LuRefreshCw/> </span>

                                    <label className={st.checkboxLabel}>
                                        <Field name="rememberMe" type="checkbox" className={st.check}/>
                                        Remember Me?
                                    </label>
                                </div>
                            )}

                            <button type="submit" className={st.loginBtn}>Log In</button>
                        </Form>
                    )}
                </Formik>
            </div>
        </section>
    )
}

export default LoginPage