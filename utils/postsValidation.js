const Yup = require('yup');
const postSchema = Yup.object({
    title:Yup.string().required(),
    body:Yup.string().required(),
    attachment:Yup.string()

})
module.exports = postSchema