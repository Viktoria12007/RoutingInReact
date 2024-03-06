import "./app.css";
import {BrowserRouter, Link} from "react-router-dom";
import {AppRouter} from "./router/AppRouter";

export function App() {
	return (
		<BrowserRouter>
			<div className="header">_</div>

			<div className="section">
				<nav className="navMenu">
					<Link to={"/"}>Главная</Link>
					<Link to={"/users"}>Пользователи</Link>
					<Link to={"/playlists"}>Плейлисты</Link>
				</nav>

				<main className="content">
					<AppRouter />
				</main>
			</div>

			<div className="footer">
				<a href="https://skillbox.ru/code/">https://skillbox.ru/</a>
			</div>
		</BrowserRouter>
	);
}
