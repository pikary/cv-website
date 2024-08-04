import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import SkillsReducer from './skills/index';
import EducationReducer from './education/index';
import { useDispatch, useSelector, TypedUseSelectorHook } from 'react-redux';
//ads
const rootReducer = combineReducers({
	skills: SkillsReducer,
	education: EducationReducer,
});
export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;

export default function setupStore(preloadedState?: Partial<RootState>) {
	return configureStore({
		reducer: combineReducers({
			skills: SkillsReducer,
			education: EducationReducer,
		}),
		preloadedState,
	});
}
