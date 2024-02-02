import React from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { Button, TextField } from '@mui/material';
import Home from '../Home/Home.js'


const validationSchema = yup.object({
	username: yup
		.string('Enter your name')
		.required('Name is required'),
	email: yup
		.string('Enter your email')
		.email('Enter a valid email')
		.required('Email is required'),
	password: yup
		.string('Enter your password')
		.min(8, 'Password should be of minimum 8 characters length')
		.required('Password is required'),
	confirmPassword: yup
		.string('Confirm your password')
		.min(8, 'Password should be of minimum 8 characters length')
		.required('Password is required'),
	photo: yup
		.string('Download your photo')
		.required('Photo is required')
});

const CustomForm = ({ setData, data, setActivePage }) => {
	const formik = useFormik({
		initialValues: {
			username: '',
			email: '',
			password: '',
			confirmPassword: '',
			photo: ''
		},
		validationSchema: validationSchema,
		onSubmit: (values) => {
			setData([...data, values])
			setActivePage(<Home />)
		},
	});

	return (
		<div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
			<form onSubmit={formik.handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 25, width: 400, alignItems: 'stretch', justifyContent: 'space-between' }}>
				<TextField
					fullWidth
					id="username"
					name="username"
					label="Username"
					multiline
					minRows={6}
					value={formik.values.username}
					onChange={formik.handleChange}
					onBlur={formik.handleBlur}
					error={formik.touched.username && Boolean(formik.errors.username)}
					helperText={formik.touched.username && formik.errors.username}
				/>
				<TextField
					fullWidth
					id="email"
					name="email"
					label="Email"
					value={formik.values.email}
					onChange={formik.handleChange}
					onBlur={formik.handleBlur}
					error={formik.touched.email && Boolean(formik.errors.email)}
					helperText={formik.touched.email && formik.errors.email}
				/>
				<TextField
					fullWidth
					id="password"
					name="password"
					label="Password"
					type="password"
					value={formik.values.password}
					onChange={formik.handleChange}
					onBlur={formik.handleBlur}
					error={formik.touched.password && Boolean(formik.errors.password)}
					helperText={formik.touched.password && formik.errors.password}
				/>
				<TextField
					fullWidth
					id="confirmPassword"
					name="confirmPassword"
					label="Confirm Password"
					type="password"
					value={formik.values.confirmPassword}
					onChange={formik.handleChange}
					onBlur={formik.handleBlur}
					error={formik.touched.confirmPassword && Boolean(formik.errors.confirmPassword)}
					helperText={formik.touched.confirmPassword && formik.errors.confirmPassword}
				/>
				<TextField
					fullWidth
					id="photo"
					name="photo"
					label="Photo"
					value={formik.values.photo}
					onChange={formik.handleChange}
					onBlur={formik.handleBlur}
					error={formik.touched.photo && Boolean(formik.errors.photo)}
					helperText={formik.touched.photo && formik.errors.photo}
				/>
				<Button color="primary" variant="contained" fullWidth type="submit">
					Submit
				</Button>
			</form>
		</div>
	);
};

export default CustomForm;
