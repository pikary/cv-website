import { createSlice } from '@reduxjs/toolkit';
import { Education } from './types';
import { fetchEducations } from './api';

interface EducationState {
	isLoading: boolean;
	data: Education[];
	error: string | null;
}
const initialState: EducationState = {
	isLoading: false,
	data: [],
	error: null,
};

const EducationSlice = createSlice({
	name: 'education',
	initialState,
	reducers: {},
	extraReducers(builder) {
		builder
			.addCase(fetchEducations.pending, (state) => {
				state.isLoading = true;
				state.error = null;
			})
			.addCase(fetchEducations.rejected, (state, action) => {
				state.isLoading = false;
				console.log(action.payload);

				state.error = action.payload as string;
			})
			.addCase(fetchEducations.fulfilled, (state, action) => {
				state.isLoading = false;
				if (action.payload) {
					state.data = action.payload;
				}
			});
	},
});

// export const {} = EducationSlice.actions;
export default EducationSlice.reducer;
