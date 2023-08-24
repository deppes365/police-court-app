import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

// Pages
import Login from './pages/Login';
import Home from './pages/Home';

// Components
import PrivateRoute from './components/PrivateRoute';

function App() {
	const [loggedIn, setLoggedIn] = useState(true);

	return (
		<div className="w-full h-screen">
			<Routes>
				<Route path="login" element={<Login />} />
				<Route element={<PrivateRoute loggedIn={loggedIn} />}>
					<Route path="/" element={<Home />} />
				</Route>
			</Routes>
		</div>
	);
}

export default App;
