import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Login } from "./components/Login";
import { Layout } from "./components/Layout";
import { Documents } from "./components/Documents";
import { ViewDocument } from "./components/ViewDocument";
import { EditDocument } from "./components/EditDocument";
import { NewDocument } from "./components/NewDocument";

const root = ReactDOM.createRoot(
	document.getElementById("root") as HTMLElement
);
root.render(
	<React.StrictMode>
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Login />} />
				<Route element={<Layout />}>
					<Route path="/documents" element={<Documents />} />
					<Route path="/viewDocument/:id" element={<ViewDocument />} />
					<Route path="/editDocument/:id" element={<EditDocument />} />
					<Route path="/newDocument" element={<NewDocument />} />
				</Route>
			</Routes>
		</BrowserRouter>
	</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
