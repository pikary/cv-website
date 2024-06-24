import { Response } from '../../lib/types';
import baseRequest from '../../lib/baseApi';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { Education } from './types';

export const fetchEducations = createAsyncThunk<
	Education[] | undefined,
	void,
	{ rejectValue: string }
>('education/fetch', async (_, thunk) => {
	try {
		const result = await baseRequest<Response<Education[]>>(
			'GET',
			'education',
			null
		);
		return result?.result;
	} catch (e) {
		console.log(e);

		return thunk.rejectWithValue((e as Error).message);
	}
});
