import { createAsyncThunk } from '@reduxjs/toolkit';
import { Skill } from './types';
import baseRequest from '../../lib/baseApi';

interface Response<T> {
	message: string;
	result: T;
}
const fetchCreateSkill = createAsyncThunk<
	Skill | undefined,
	Skill,
	{ rejectValue: string }
>('skills/fetchCreateSkill', async (reqBody, thunk) => {
	try {
		const result = await baseRequest<Response<Skill>>(
			'POST',
			'skills',
			reqBody
		);
		return result?.result;
	} catch (e) {
		return thunk.rejectWithValue((e as Error).message);
	}
});

const fetchSkills = createAsyncThunk<
	Skill[] | undefined,
	void,
	{ rejectValue: string }
>('skills/fetchSkills', async (_, thunk) => {
	try {
		const result = await baseRequest<Response<Skill[]>>('GET', 'skills');
		return result?.result;
	} catch (e) {
		return thunk.rejectWithValue((e as Error).message);
	}
});

export { fetchCreateSkill, fetchSkills };
