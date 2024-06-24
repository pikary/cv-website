import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { setupMirage } from './services/server';
import './styles/main.scss';
import { Provider } from 'react-redux';
import setupStore from './store';
const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
);

setupMirage();
root.render(
	<Provider store={setupStore()}>
		<React.StrictMode>
			<App />
		</React.StrictMode>
	</Provider>
);
