import * as YUP from 'yup'

const validation = YUP.object().shape({
    fullName : YUP
        .string()
        .min(5, "Min length 5")
        .max(15, "Max length 15")
        .required("Field is required !"),
    lookingForAJob : YUP
        .boolean()
        .required("Field is required !"),
    lookingForAJobDescription : YUP
        .string()
        .min(10, "Min length 10")
        .required("Field is required !"),

    contacts: YUP.object().shape({
        github : YUP
            .string()
            .min(5, "Min length 5")
            .required("Field is required !"),
        vk : YUP
            .string()
            .min(5, "Min length 5")
            .required("Field is required !"),
        facebook : YUP
            .string()
            .min(5, "Min length 5")
            .required("Field is required !"),
        instagram : YUP
            .string()
            .min(5, "Min length 5")
            .required("Field is required !"),
        twitter : YUP
            .string()
            .min(5, "Min length 5")
            .required("Field is required !"),
        website : YUP
            .string()
            .min(5, "Min length 5")
            .required("Field is required !"),
        youtube : YUP
            .string()
            .min(5, "Min length 5")
            .required("Field is required !"),
        mainLink : YUP
            .string()
            .min(5, "Min length 5")
            .required("Field is required !"),
    })
})

export default validation