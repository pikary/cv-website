import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import Skills from '../index';
import setupStore from '../../../store';
import { describe, it, expect, vi } from 'vitest';
import '@testing-library/jest-dom'; // Import this to use the matchers
import { http, HttpResponse } from 'msw';
import { setupServer } from 'msw/node';
import { Skill } from '../../../store/skills/types';

const skills: Skill[] = [
	{ name: 'JavaScript', range: 80 },
	{ name: 'React', range: 70 },
];

export const handlers = [
	http.get('api/skills', () => {
		return HttpResponse.json({
			result: [
				{ name: 'JavaScript', range: 80 },
				{ name: 'React', range: 70 },
			],
		});
	}),
	http.post('api/skills', async ({ request }) => {
		const newSkill = (await request.json()) as Skill;
		skills.push(newSkill);
		return HttpResponse.json({
			result: { ...newSkill, id: 3 },
		});
	}),
];
const server = setupServer(...handlers);
// Start and stop the server
beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe('Skills Component', () => {
	it('renders the Skills component', async () => {
		render(
			<Provider store={setupStore()}>
				<Skills />
			</Provider>
		);

		expect(screen.getByText(/Open Edit/i)).toBeVisible();
		// Wait for skills to be fetched and displayed
		expect(await screen.findByText(/JavaScript/i)).toBeVisible();
		// expect(await screen.findByText(/React/i)).toBeVisible();
	});

	it('opens and closes edit mode', () => {
		render(
			<Provider store={setupStore()}>
				<Skills />
			</Provider>
		);

		const editButton = screen.getByText(/Open Edit/i);
		fireEvent.click(editButton);
		expect(
			screen.getByPlaceholderText(/Enter skill name/i)
		).toBeInTheDocument();

		fireEvent.click(editButton);
		expect(
			screen.queryByPlaceholderText(/Enter skill name/i)
		).not.toBeInTheDocument();
	});
	it('creates new Skill', async () => {
		render(
			<Provider store={setupStore()}>
				<Skills />
			</Provider>
		);

		const editButton = screen.getByText(/Open Edit/i);
		fireEvent.click(editButton);

		const submitButton = screen.getByText(/Add Skill/i);

		const nameInput = screen.getByPlaceholderText(/Enter skill name/i);
		const rangeInput = screen.getByPlaceholderText(/Enter skill range/i);
		fireEvent.change(nameInput, { target: { value: 'Test Skill' } });
		fireEvent.change(rangeInput, { target: { value: '50' } });

		fireEvent.click(submitButton);

		// Wait for the new skill to be displayed
		expect(await screen.findByText(/Test Skill/i)).toBeVisible();
	});
	it('validates form inputs', async () => {
		render(
			<Provider store={setupStore()}>
				<Skills />
			</Provider>
		);

		const editButton = screen.getByText(/Open Edit/i);
		fireEvent.click(editButton);

		const submitButton = screen.getByText(/Add Skill/i);
		expect(submitButton).toBeDisabled();

		const nameInput = screen.getByPlaceholderText(/Enter skill name/i);
		const rangeInput = screen.getByPlaceholderText(/Enter skill range/i);

		fireEvent.change(nameInput, { target: { value: 'Test Skill' } });
		fireEvent.change(rangeInput, { target: { value: '50' } });

		expect(submitButton).not.toBeDisabled();

		fireEvent.change(rangeInput, { target: { value: '0' } });
		expect(submitButton).not.toBeDisabled();
	});
});
