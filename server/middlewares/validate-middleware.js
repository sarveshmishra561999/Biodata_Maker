const validate = (schema) => async (req, res, next) => {
    try {

        const parseBody = await schema.parseAsync(req.body);
        req.body = parseBody;
        next();
    } catch (err) {
        console.log(err)
        const status = 422;
        const message = 'fill the input properly';
        const extraDetails = err.issues.map((el) => el.message)
        const error = {
            status,
            message,
            extraDetails
        };
        console.log("val errrrrrrrrrr",error)
        next(error)
    }

}
module.exports = validate;