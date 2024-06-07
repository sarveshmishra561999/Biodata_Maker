const { z } = require("zod")
const loginSchema = z.object({
    email: z
        .string({ required_error: "email is required" })
        .trim()
        .email({ message: "Invalid email address" })
        .min(3, { message: "email must be at least of 3 chars. " })
        .max(255, { message: "email must not be more than 255 characters" }),
    password: z
        .string({ required_error: "password is required" })
        .trim()
        .min(6, { message: "password must be at least of 6 chars. " })
        .max(1024, { message: "password must not be more than 1024 characters" })

})

const signupSchema = loginSchema.extend({
    username: z
        .string({ required_error: "Name is required" })
        .trim()
        .min(3, { message: "Name must be at least of 3 chars. " })
        .max(255, { message: "Name must not be more than 255 characters" }),
    phone: z
        .string({ required_error: "Name is required" })
        .trim()
        .min(10, { message: "phone must be at least of 10 chars. " })
        .max(10, { message: "phone should not be more than 10 characters" })

});


module.exports = {signupSchema,loginSchema};