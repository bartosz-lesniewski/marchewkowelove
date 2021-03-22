import React from "react";

const Login = (props) => {
	const {
		email,
		setEmail,
		password,
		setPassword,
		handleLogin,
		handleSignUp,
		hasAccount,
		setHasAccount,
		emailError,
		passwordError,
	} = props;

	return (
		<section className="login">
			<div className="loginContainer">
				<label>Login</label>
				<input
					type="text"
					autoFocus
					required
					value={email}
					onChange={(e) => setEmail(e.target.value)}
				/>
				<p className="errorMsg">{emailError}</p>
				<label>Hasło</label>
				<input
					type="password"
					required
					value={password}
					onChange={(e) => setPassword(e.target.value)}
				/>
				<p className="errorMsg">{passwordError}</p>
				<div className="btnContainer">
					{hasAccount ? (
						<>
							<button onClick={handleLogin}>Zaloguj się</button>
							<p>
								Aby się zalogować musisz mieć założone konto.
								<span onClick={() => setHasAccount(!hasAccount)}>
									Zarejestruj się
								</span>
							</p>
						</>
					) : (
						<>
							<button onClick={handleSignUp}>Zarejestruj się</button>
							<p>
								Jesteś zarejestrowany?
								<span onClick={() => setHasAccount(!hasAccount)}>
									Zaloguj się
								</span>
							</p>
						</>
					)}
				</div>
			</div>
		</section>
	);
};

export default Login;
