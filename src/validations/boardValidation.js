/**
 * Updated by trungquandev.com's author on August 17 2023
 * YouTube: https://youtube.com/@trungquandev
 * "A bit of fragrance clings to the hand that gives flowers!"
 */
import Joi from 'joi'
import { StatusCodes } from 'http-status-codes'
import ApiError from '../utils/ApiError'

const createNew = async (req, res, next) => {
    const correctCondition = Joi.object({
        title: Joi.string().required().min(3).max(50).trim().strict().messages({
            'any.required': 'Title is required (nghiadev)',
            'string.empty': 'Title is not allowed to be empty (nghiadev)',
            'string.min': 'Title min 3 chars (nghiadev)',
            'string.max': 'Title max 50 chars (nghiadev)',
            'string.trim': 'Title must not have leading or trailing whitespace'

        }),
        description: Joi.string().required().min(3).max(256).trim().strict()
    })

    try {
        console.log('req.body: ', req.body)

        await correctCondition.validateAsync(req.body, { abortEarly: false })
        // validate dữ liệu xong xuôi hợp lệ thì cho request đi tiếp sang Controller
        next()
    } catch (error) {
        // const errorMessage = new Error(error).message
        // const customError = new ApiError(StatusCodes.UNPROCESSABLE_ENTITY, errorMessage)
        next(new ApiError(StatusCodes.UNPROCESSABLE_ENTITY, new Error(error).message))

        res.status(StatusCodes.UNPROCESSABLE_ENTITY).json({
            errors: new Error(error).message
        })
    }
}

export const boardValidation = {
    createNew
}
