import * as Joi from 'joi';

// @query parameter validators...
export const getUserValidator = () => (
  Joi.object({
    page: Joi.number().less(1),
    count: Joi.number().less(1).max(20)
  })
)

// @body validators...
export const registerUserValidator = () => (
  Joi.object({
    firstName: Joi.string().min(2).max(255).required(),
    lastName: Joi.string().min(2).max(255).required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(8).max(255).required(),
  })
)

export const loginUserValidator = () => (
  Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().min(8).max(255).required(),
  })
)

export const updateUserValidator = () => (
  Joi.object({
    firstName: Joi.string().min(2).max(255),
    lastName: Joi.string().min(2).max(255),
  })
)
