import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { describe, it, expect, vi } from 'vitest';
import Button from '../index';

describe('Button Component', () => {
	it('renders correctly with given props', () => {
		const mockFunction = vi.fn();
		render(
			<Button onClick={mockFunction} className='test-class'>
				Click Me
			</Button>
		);

		const buttonElement = screen.getByText(/Click Me/i);
		expect(buttonElement).toBeInTheDocument();
		expect(buttonElement).toHaveClass('button test-class');
		fireEvent.click(buttonElement);
		expect(mockFunction).toHaveBeenCalledTimes(1);
	});

	it('calls onClick handler when clicked', () => {
		const handleClick = vi.fn();
		render(
			<Button onClick={handleClick} className='test-class'>
				Click Me
			</Button>
		);

		const buttonElement = screen.getByText(/Click Me/i);
		fireEvent.click(buttonElement);

		expect(handleClick).toHaveBeenCalledTimes(1);
	});

	it('sets the button type correctly', () => {
		render(
			<Button
				onClick={() => {
					console.log('test');
				}}
				type='submit'
				className='test-class'
			>
				Submit
			</Button>
		);

		const buttonElement = screen.getByText(/Submit/i);
		expect(buttonElement).toHaveAttribute('type', 'submit');
	});
});
