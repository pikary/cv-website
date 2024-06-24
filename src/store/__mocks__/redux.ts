/* eslint-disable @typescript-eslint/ban-ts-comment */
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

//@ts-ignore
export const mockStore = configureMockStore([thunk]);

// Mocked async thunks
export const fetchCreateSkill = jest.fn();
export const fetchSkills = jest.fn();
