import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

// Pages
import Login from './pages/Login';
import Home from './pages/Home';

// Components
import PrivateRoute from './components/PrivateRoute';

function App() {
	const [loggedIn, setLoggedIn] = useState(false);

	return (
		<div className="App">
			<Routes>
				<Route path="login" element={<Login loggedIn={loggedIn} />} />
				<Route element={<PrivateRoute loggedIn={loggedIn} />}>
					<Route path="/" element={<Home />} />
				</Route>
			</Routes>
		</div>
	);
}

export default App;
