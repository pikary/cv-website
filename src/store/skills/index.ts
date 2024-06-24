import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Skill } from './types';
import { fetchCreateSkill, fetchSkills } from './api';

const syncWithLocalStorage = (skillList: Skill[]) => {
	localStorage.setItem('skills', JSON.stringify(skillList));
};

const getFromStorage = (): Skill[] => {
	const data = localStorage.getItem('skills');
	if (data) {
		return JSON.parse(data) as Skill[];
	} else {
		return [];
	}
};

interface SkillsState {
	isLoading: boolean;
	data: Skill[];
	error: string | null;
}
const initialState: SkillsState = {
	isLoading: false,
	data: getFromStorage(),
	error: null,
};

const SkillsSlice = createSlice({
	name: 'Skills',
	initialState,
	reducers: {
		addSkill: (state, action: PayloadAction<Skill>) => {
			state.data.push(action.payload);
		},
	},
	extraReducers(builder) {
		builder
			.addCase(fetchCreateSkill.pending, (state) => {
				state.isLoading = true;
				state.error = null;
			})
			.addCase(fetchCreateSkill.rejected, (state, action) => {
				state.isLoading = false;
				state.error = action.payload as string;
			})
			.addCase(fetchCreateSkill.fulfilled, (state, action) => {
				state.isLoading = false;
				if (action.payload) {
					console.log(action.payload);
					state.data.push(action.payload);
					syncWithLocalStorage(state.data);
				}
			})
			.addCase(fetchSkills.pending, (state) => {
				state.isLoading = true;
				state.error = null;
			})
			.addCase(fetchSkills.rejected, (state, action) => {
				state.isLoading = false;
				state.error = action.payload as string;
			})
			.addCase(fetchSkills.fulfilled, (state, action) => {
				state.isLoading = false;
				console.log(action.payload);
				if (action.payload) {
					action.payload.forEach((newItem) => {
						// Assuming each item has a unique 'id' field, adjust if your data structure differs
						const exists = state.data.find(
							(item) => item.id === newItem.id
						);
						if (!exists) {
							state.data.push(newItem);
						}
					});
				}
				syncWithLocalStorage(state.data);
			});
	},
});

export const { addSkill } = SkillsSlice.actions;
export default SkillsSlice.reducer;
