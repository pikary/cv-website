/* eslint-disable react/prop-types */
import React, { FC, useState, useRef, useEffect } from 'react';
import { Skill } from '../../store/skills/types';
import './styles.scss';
import Button from '../../common/Button';
import { FaEdit } from 'react-icons/fa';
import * as yup from 'yup';
import { Formik, Form } from 'formik';
import { useAppDispatch, useTypedSelector } from '../../store';
import Input from '../../common/Input';
import { fetchCreateSkill, fetchSkills } from '../../store/skills/api';
import { unwrapResult } from '@reduxjs/toolkit';

const Skills: FC = () => {
	const data = useTypedSelector((state) => state.skills.data);
	const dispatch = useAppDispatch();
	const [isEditMode, setIsEditMode] = useState(false);
	const toggleEditMode = () => {
		setIsEditMode(!isEditMode);
	};

	const inititalValues = {
		name: '',
		range: '',
	};
	const validationSchema = yup.object().shape({
		name: yup.string().required('Skill name is required'),
		range: yup
			.number()
			.required('Value is required')
			.min(10, 'Vlue should not be less than 10')
			.max(100, 'Value should not be more than 100'),
	});
	const onSubmit = async (
		eventData: { name: string; range: string },
		{ resetForm }: { resetForm: () => void }
	) => {
		const newSkill: Skill = {
			name: eventData.name,
			range: parseInt(eventData.range),
		};
		const result = await dispatch(fetchCreateSkill(newSkill));
		const unwrappedResult = unwrapResult(result);
		if (unwrappedResult !== undefined) {
			resetForm();
		}
	};
	useEffect(() => {
		const fetchData = async () => {
			await dispatch(fetchSkills());
		};
		fetchData();
	}, [dispatch]);
	return (
		<div className='skills'>
			<Button className='edit-btn' type='button' onClick={toggleEditMode}>
				<FaEdit size={20}></FaEdit>
				<p>Open Edit</p>
			</Button>
			{isEditMode && (
				<div className='skills__form-container'>
					<Formik
						onSubmit={onSubmit}
						initialValues={inititalValues}
						validationSchema={validationSchema}
						validateOnBlur={true}
						validateOnChange={true}
					>
						{(props) => {
							return (
								<Form className='skills__form-container__form'>
									<Input
										name='name'
										type='text'
										placeholder='Enter skill name'
										labelText='Skill name: '
									></Input>
									<Input
										name='range'
										type='number'
										placeholder='Enter skill range'
										labelText='Skill range: '
									></Input>
									<Button
										// eslint-disable-next-line react/prop-types
										disabled={
											!props.isValid ||
											!props.dirty ||
											props.isSubmitting
										}
										className={`skills__form-container__form-btn ${(props.isValid || !props.dirty) && 'valid'}`}
										type='submit'
										onClick={() => {
											console.log();
										}}
									>
										Add Skill
									</Button>
								</Form>
							);
						}}
					</Formik>
				</div>
			)}

			<div className='skills__items'>
				{data.map((skill, ind) => (
					<div
						key={ind}
						className='skills__items-child'
						style={{ width: `${skill.range}%` }}
					>
						<h5>{skill.name}</h5>
					</div>
				))}
			</div>
			<div className='skills__range'>
				<div className='skills__range-indicator'>
					<p>Beginner</p>
				</div>
				<div className='skills__range-indicator'>
					<p>Proficient</p>
				</div>
				<div className='skills__range-indicator'>
					<p>Expert</p>
				</div>
				<div className='skills__range-indicator'>
					<p>Master</p>
				</div>
			</div>
		</div>
	);
};

export default Skills;
