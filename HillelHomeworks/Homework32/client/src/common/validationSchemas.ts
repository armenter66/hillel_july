import * as Yup from 'yup';

const loginSchema = Yup.string()
	.min(2, 'Must be longer than 2 characters')
	.max(15, 'Nice try, nobody has a login that long')
	.matches(/^\w{2,15}$/, 'Wrong login. Type only letters or digits')
	.required('Required');

const passwordSchema = Yup.string()
	.min(5, 'Password has to be more than 5 characters')
	.required('Required');

export const AuthSchema = Yup.object({
	login: loginSchema,
	password: passwordSchema,
});

export const RegisterSchema = Yup.object({
	login: loginSchema,
	password: passwordSchema,
	fullname: Yup.string()
		.min(5, 'Too short name')
		.max(30, 'Too long name')
		.required('Required'),
});
