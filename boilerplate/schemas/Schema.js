const Joi = require('@hapi/joi')
    .extend(require('@hapi/joi-date'));

let postSchema = Joi.object({
    firstName : Joi.string().required(),
    lastName : Joi.string().required(),
    hireDate: Joi.date().format('YYYY-MM-DD').raw().required(),
    role : Joi.string().valid('CEO','VP','MANAGER','LACKEY').required()
});

let putSchema = {
    params: Joi.object({
        id: Joi.string().required()
    }),
    body: Joi.object({
        firstName: Joi.string().required(),
        lastName: Joi.string().required(),
        hireDate: Joi.date().format('YYYY-MM-DD').raw().required(),
        role: Joi.string().valid('CEO', 'VP', 'MANAGER', 'LACKEY').required(),
        favoriteJoke: Joi.string().empty("").allow(null),
        favoriteQuote: Joi.string().empty("").allow(null)
    })
};

module.exports ={
    postSchema : postSchema,
    putSchema : putSchema
};
