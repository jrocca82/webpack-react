import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { HomePage } from "./pages";
import Loader from "./components/Loader.jsx";
import { Route, Routes, NavLink } from "react-router-dom";
const NewPage = React.lazy(() => import("./pages/NewPage.jsx"));

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<nav
					style={{
						display: "flex",
						flexWrap: "wrap",
						marginLeft: "20px",
						width: "10%",
						justifyContent: "space-between",
						textAlign: "center",
					}}
				>
					<NavLink to="/">Home</NavLink>
					<NavLink to="/new">Test Page</NavLink>
				</nav>
				<Routes>
					<Route path="/" element={<HomePage />} />
					<Route
						path="/new"
						element={
							<React.Suspense fallback={<Loader/>}>
								<NewPage />
							</React.Suspense>
						}
					/>
				</Routes>
				<img src={logo} className="App-logo" alt="logo" />
			</header>
		</div>
	);
}

export default App;
