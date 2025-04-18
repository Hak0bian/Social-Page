import * as YUP from 'yup'

const validation = YUP.object().shape({
    fullName : YUP
        .string()
        .min(5, "Min length 5")
        .max(25, "Max length 25")
        .required("Field is required !"),
    aboutMe: YUP
        .string()
        .min(10, "Min length 10")
        .max(300, "Max length 300"),
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
            .max(25, "Max length 25")
            .required("Field is required !"),
        vk : YUP
            .string()
            .min(5, "Min length 5")
            .max(25, "Max length 25"),
        facebook : YUP
            .string()
            .min(5, "Min length 5")
            .max(25, "Max length 25"),
        instagram : YUP
            .string()
            .min(5, "Min length 5")
            .max(25, "Max length 25"),
        twitter : YUP
            .string()
            .min(5, "Min length 5")
            .max(25, "Max length 25"),
        website : YUP
            .string()
            .min(5, "Min length 5")
            .max(25, "Max length 25"),
        youtube : YUP
            .string()
            .min(5, "Min length 5")
            .max(25, "Max length 25"),
        mainLink : YUP
            .string()
            .min(5, "Min length 5")
            .max(25, "Max length 25")
    })
})

export default validation