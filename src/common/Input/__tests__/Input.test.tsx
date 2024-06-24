import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Formik, Form } from 'formik';
import '@testing-library/jest-dom';
import { describe, it, expect } from 'vitest';
import Input from '../index';

interface InputProps {
	type: string;
	name: string;
	placeholder: string;
	labelText: string;
	onChange?: () => void;
}

const renderInput = (props: InputProps) => {
	return render(
		<Formik
			initialValues={{}}
			onSubmit={() => {
				null;
			}}
		>
			<Form>
				<Input {...props} />
			</Form>
		</Formik>
	);
};

describe('testing input element', () => {
	it('handles onBlur correctly', async () => {
		renderInput({
			type: 'text',
			name: 'testInput',
			placeholder: 'Enter text',
			labelText: 'Test Input',
		});

		const inputElement = screen.getByLabelText(/Test Input/i);
		fireEvent.blur(inputElement); // Simulate blur event

		expect(inputElement).toBeInTheDocument();
		// Additional expectations can be added here if needed
	});

	it('renders label text correctly', () => {
		renderInput({
			type: 'text',
			name: 'testInput',
			placeholder: 'Enter text',
			labelText: 'Test Input',
		});

		const labelElement = screen.getByText(/Test Input/i);
		expect(labelElement).toBeInTheDocument();
		expect(labelElement).toHaveAttribute('for', 'testInput');
	});
});
