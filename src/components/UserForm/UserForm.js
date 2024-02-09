import './UserForm.css';
import { Button, Divider, Form, Input, InputNumber } from 'antd';
import axios from 'axios';
import UserList from '../UserList/UserList';
import { useForm } from 'antd/es/form/Form';
import { useEffect, useState } from 'react';

const UserForm = ({ setData, globalData, edit, initialData }) => {
	const [initialValues, setInitialValues] = useState(null);
	const [form] = useForm();
	useEffect(() => {
		if (!!edit) {
			form.setFieldsValue({
				"name": initialData.name,
				"username": initialData.username,
				"email": initialData.email,
				"street": initialData.address.suite,
				"city": initialData.address.city,
				"zipcode": initialData.address.zipcode,
				"phone": initialData.phone,
				"company_name": initialData.company.name,
				"catchPhrase": initialData.company.catchPhrase,
				"bs": initialData.company.bs

			})
		} else {
			form.setFieldsValue({
				"name": "",
				"username": "",
				"email": "",
				"street": "",
				"city": "",
				"zipcode": "",
				"phone": "",
				"company_name": "",
				"catchPhrase": "",
				"bs": ""

			})
		}
	})
	const onFinish = (values) => {
		const data = {
			"name": values.name,
			"username": values.username,
			"email": values.email,
			"address": {
				"street": values.street,
				"suite": values.suite,
				"city": values.city,
				"zipcode": values.zipcode,
				"geo": {
					"lat": "24.8918",
					"lng": "21.8984"
				}
			},
			"phone": values.phone,
			"company": {
				"name": values.company_name,
				"catchPhrase": values.catchPhrase,
				"bs": values.bs
			}
		}
		if (!!edit) {
			axios.put(`http://localhost:3000/users/${initialData.id, data}`)
				.then((res) =>
					setData(globalData.map((value) => {
						if (value.id === res.data.id) {
							return res.data
						} else {
							return value
						}
					})))
		} else {
			axios.post('http://localhost:3000/users', data)
				.then((res) => setData([...globalData, data]))
		}

	};
	const onFinishFailed = (errorInfo) => {
		console.log('Failed:', errorInfo);
	};
	return (
		<Form
			form={form}
			className={'form'}
			name="basic"
			onFinish={onFinish}
			onFinishFailed={onFinishFailed}
		>
			<Form.Item
				label="Name"
				name="name"
				rules={[
					{
						required: true,
						message: 'Please input your name!',
					},
				]}
			>
				<Input />
			</Form.Item>
			<Form.Item
				label="Username"
				name="username"
				rules={[
					{
						required: true,
						message: 'Please input your username!',
					},
				]}
			>
				<Input />
			</Form.Item>
			<Form.Item
				label="Email"
				name="email"
				rules={[
					{
						required: true,
						message: 'Please input your email!',
					},
				]}
			>
				<Input />
			</Form.Item>	<Form.Item
				label="Phone"
				name="phone"
				rules={[
					{
						required: true,
						message: 'Please input your phone!',
					},
				]}
			>
				<Input />
			</Form.Item>
			<Divider>Address</Divider>
			<Form.Item
				label="Street"
				name="street"
				rules={[
					{
						required: true,
						message: 'Please input your street!',
					},
				]}
			>
				<Input />
			</Form.Item>
			<Form.Item
				label="Suite"
				name="suite"
				rules={[
					{
						required: true,
						message: 'Please input your suite!',
					},
				]}
			>
				<Input />
			</Form.Item>
			<Form.Item
				label="City"
				name="city"
				rules={[
					{
						required: true,
						message: 'Please input your city!',
					},
				]}
			>
				<Input />
			</Form.Item>
			<Form.Item
				label="Zipcode"
				name="zipcode"
				rules={[
					{
						required: true,
						message: 'Please input your zipcode!',
					},
				]}
			>
				<InputNumber />
			</Form.Item>
			<Divider>Company</Divider>
			<Form.Item
				label="Company name"
				name="company_name"
				rules={[
					{
						required: true,
						message: 'Please input your Company name!',
					},
				]}
			>
				<Input />
			</Form.Item>
			<Form.Item
				label="CatchPhrase"
				name="catchPhrase"
				rules={[
					{
						required: true,
						message: 'Please input your catchPhrase!',
					},
				]}
			>
				<Input />
			</Form.Item>
			<Form.Item
				label="bs"
				name="bs"
				rules={[
					{
						required: true,
						message: 'Please input your bs!',
					},
				]}
			>
				<Input />
			</Form.Item>
			<Form.Item
				wrapperCol={{
					offset: 8,
					span: 16,
				}}
			>
				<Button type="primary" htmlType="submit">
					Submit
				</Button>
			</Form.Item>
		</Form>
	)
}
export default UserForm