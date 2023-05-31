import * as yup from 'yup';

export const LoginValidate = yup.object().shape({
    username: yup.string().trim().required('El username es requerido'),
  password: yup
    .string()
    .trim()
    .required('El password es requerido')
    .min(4, 'El mínimo debe ser 4 caracteres')
    .max(10, 'El máximo debe ser 10 caracteres'),
})