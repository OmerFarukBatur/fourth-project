import {object, string, number, date, InferType, ref} from 'yup';


const validations = object({
    email: string().email().required(),
    password: string().min(4).max(8).required(),
    passwordConfirm: string().oneOf([ref('password')]).required()
  });

export default validations;