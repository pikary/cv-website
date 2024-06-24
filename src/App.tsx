import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Inner from './pages/Inner';
// import { makeServer } from './services/server';
function App() {
	const a = 2;
	return (
		<Router>
			<main>
				<Routes>
					<Route path='home' element={<Home></Home>}></Route>
					<Route path='inner' element={<Inner></Inner>}></Route>
				</Routes>
			</main>
		</Router>
	);
}

export default App;
