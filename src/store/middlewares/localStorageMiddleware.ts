import { Action, Middleware } from '@reduxjs/toolkit';
import { RootState } from '..';

const localStorageMiddleware: Middleware<{}, RootState> =
	(storeAPI) => (next) => (action: Action<string> | unknown) => {
		// if (action && action.type.startsWith('skills/')) {
		// 	const state = storeAPI.getState();
		// 	localStorage.setItem('skills', JSON.stringify(state.skills.data));
		// }
		const result = next(action);
		return result;
	};

export default localStorageMiddleware;
