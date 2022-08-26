import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

export function Login() {
	const navigate = useNavigate();

	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");

	function handleSubmit() {
		if (username === "admin" && password === "admin") {
			console.log("Logged in");
			navigate("/documents");
		} else {
			console.log("Invalid credentials");
		}
	}

	return (
		<div className="login-wrapper">
			<h1>Please log in</h1>
			<form onSubmit={handleSubmit}>
				<label>
					Username:
					<input
						type="text"
						name="username"
						onChange={(e) => setUsername(e.target.value)}
					/>
				</label>

				<label>
					Password:
					<input
						type="password"
						name="password"
						onChange={(e) => setPassword(e.target.value)}
					/>
				</label>

				<button type="submit">Login</button>
			</form>
		</div>
	);
}
