import * as Joi from 'joi';

export const objectIdValidator = () => (
  Joi.object({
    id: Joi.string().pattern(new RegExp(/^(?=[a-f\d]{24}$)(\d+[a-f]|[a-f]+\d)/i)).required()
  })
)

export const galleryValidator = () => (
  Joi.object({
    page: Joi.string().pattern(new RegExp(/^[1-9]+\d*/)).default("1"),
    count: Joi.string().pattern(new RegExp(/^[1-9]+\d*/)).default("10")
  })
)
