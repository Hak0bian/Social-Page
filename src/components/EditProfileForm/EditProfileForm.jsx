import { Formik, Form, Field, ErrorMessage } from "formik"
import { useDispatch, useSelector } from "react-redux"
import validation from "../validation"
import { editProfileThunk } from "../../store/reducers"
import { IoClose } from "react-icons/io5";
import st from "./EditProfileForm.module.css"

const EditProfileForm = ({ setEditProfile }) => {
    const {profile} = useSelector((state) => state.userProfile)
    const dispatch = useDispatch()

    const saveEditedValues = (values, resetForm) => {
        dispatch(editProfileThunk(values))
        resetForm()
        setEditProfile(false)
    }

    return (
        <div>
            <Formik
                initialValues={{
                    userId: profile?.userId,
                    fullName: profile?.fullName || "",
                    aboutMe: profile?.aboutMe || "",
                    lookingForAJob: profile?.lookingForAJob ?? false,
                    lookingForAJobDescription: profile?.lookingForAJobDescription || "",
                    contacts: {
                        github: profile?.contacts?.github || "",
                        vk: profile?.contacts?.vk || "",
                        facebook: profile?.contacts?.facebook || "",
                        instagram: profile?.contacts?.instagram || "",
                        twitter: profile?.contacts?.twitter || "",
                        website: profile?.contacts?.website || "",
                        youtube: profile?.contacts?.youtube || "",
                        mainLink: profile?.contacts?.mainLink || "",
                    },
                }}
                
                onSubmit={(values, {resetForm}) => saveEditedValues(values, resetForm)}
                validationSchema={validation}
            >

                <Form className={st.form}>
                    <button onClick={() => setEditProfile(false)} className={st.close}> <IoClose/> </button>
                    <div>
                        <label>
                            <Field name="fullName" placeholder="FullName" />
                            <ErrorMessage name="fullName" component="div" className={st.error}/>
                        </label>

                        <label>
                            <Field name="lookingForAJobDescription" placeholder="Looking for a job description" />
                            <ErrorMessage name="lookingForAJobDescription" component="div" className={st.error}/>
                        </label>

                        <label>
                            <Field as="textarea" name="aboutMe" placeholder="Write something about yourself"/>
                            <ErrorMessage name="aboutMe" component="div" className={st.error}/>
                        </label>

                        <label>
                            <Field name="contacts.github" placeholder="Github" />
                            <ErrorMessage name="contacts.github" component="div" className={st.error}/>
                        </label>

                        <label>
                            <Field name="contacts.vk" placeholder="Vk" />
                            <ErrorMessage name="contacts.vk" component="div" className={st.error}/>
                        </label>

                        <label>
                            <Field name="contacts.facebook" placeholder="Facebook" />
                            <ErrorMessage name="contacts.facebook" component="div" className={st.error}/>
                        </label>
                    </div>

                    <div>
                        <label>
                            <Field name="contacts.instagram" placeholder="Instagram" />
                            <ErrorMessage name="contacts.instagram" component="div" className={st.error}/>
                        </label>

                        <label>
                            <Field name="contacts.twitter" placeholder="Twitter" />
                            <ErrorMessage name="contacts.twitter" component="div" className={st.error}/>
                        </label>

                        <label>
                            <Field name="contacts.website" placeholder="Website" />
                            <ErrorMessage name="contacts.website" component="div" className={st.error}/>
                        </label>

                        <label>
                            <Field name="contacts.youtube" placeholder="Youtube" />
                            <ErrorMessage name="contacts.youtube" component="div" className={st.error}/>
                        </label>

                        <label>
                            <Field name="contacts.mainLink" placeholder="MainLink" />
                            <ErrorMessage name="contacts.mainLink" component="div" className={st.error}/>
                        </label>

                        <label className={st.checkboxLabel}>
                            <Field type="checkbox" name="lookingForAJob" />
                            Looking for a job?
                            <ErrorMessage name="lookingForAJob" component="div" className={st.error}/>
                        </label>

                        <label className={st.btnLabel}>
                            <button type="submit" className={st.saveBtn}>Save</button>
                        </label>
                    </div>
                </Form>
            </Formik>
        </div>
    )
}

export default EditProfileForm