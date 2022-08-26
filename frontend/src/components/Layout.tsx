import { Router, Route, NavLink, Outlet } from "react-router-dom";
import "./Layout.css";

export function Layout() {
	return (
		<>
			<nav className="navigation">
				<ul>
					<li>
						<NavLink
							to="/documents"
							className={({ isActive }) => (isActive ? "link-active" : "link")}
						>
							Documents
						</NavLink>
					</li>
					<li>
						<NavLink
							to="/newDocument"
							className={({ isActive }) => (isActive ? "link-active" : "link")}
						>
							Create new document
						</NavLink>
					</li>
				</ul>
			</nav>

			<Outlet></Outlet>
		</>
	);
}
