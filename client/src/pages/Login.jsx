import { Navigate, NavLink } from 'react-router-dom';
import { AiFillEyeInvisible, AiFillEye } from 'react-icons/ai';
import { useState } from 'react';
import CCPDLogo from '../assets/CCPD-logo.png';

function Login({ loggedIn }) {
	const [showPassword, setShowPassword] = useState(false);

	const handleShowPassword = () => {
		setShowPassword(p => !p);
	};

	return loggedIn ? (
		<Navigate to="/" />
	) : (
		<div className="w-full h-screen flex justify-center items-center">
			<div className="flex flex-3 flex-col w-full max-w-[400px] h-full max-h-[500px] mb-16 shadow-[5px_5px_20px_rgba(0,0,0,0.5)] rounded-2xl overflow-hidden">
				<div className="flex flex-col justify-center items-center h-1/4 bg-white">
					<img
						className="w-[90%]"
						src={CCPDLogo}
						alt="Chesterfield County Police Logo"
					/>
					<h2 className="text-black font-bold text-xl tracking-wider mt-2">
						Court Reporting
					</h2>
				</div>
				<form className="flex flex-col items-center justify-center h-3/4 w-full pb-12">
					<h2 className="text-2xl">Login</h2>
					<div className="flex justify-between items-center  px-2 mt-2 w-full max-w-[250px] border-b-2">
						<input
							className="bg-transparent focus-within:outline-none"
							type="email"
							placeholder="Email"
						/>
					</div>
					<div className="flex justify-between items-center px-2 mt-4 w-full max-w-[250px] focus-within:outline-none border-b-2">
						<input
							className="bg-transparent focus-within:outline-none"
							type={showPassword ? 'text' : 'password'}
							placeholder="Password"
						/>
						{showPassword ? (
							<AiFillEye
								onClick={handleShowPassword}
								className="cursor-pointer"
							/>
						) : (
							<AiFillEyeInvisible
								onClick={handleShowPassword}
								className="cursor-pointer"
							/>
						)}
					</div>

					<button className="mt-4 shadow-[2px_2px_5px_rgba(0,0,0,0.5)]">
						Login
					</button>
					<NavLink className="mt-4">Forgot Password</NavLink>
				</form>
			</div>
		</div>
	);
}

export default Login;
