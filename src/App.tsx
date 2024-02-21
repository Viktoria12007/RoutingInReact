import "./app.css";
import {BrowserRouter, Link, Route, Routes} from "react-router-dom";
import {MainPage, UserInfoPage, UsersPage, PlayListsPage, PlayListInfoPage} from "./pages";

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
					<Routes>
						<Route path='/' element={<MainPage />} />
						<Route path='/users' element={<UsersPage />} />
						<Route path='/users/:userId' element={<UserInfoPage />} />
						<Route path='/playlists' element={<PlayListsPage />} />
						<Route path='/playlists/:playlistId' element={<PlayListInfoPage />} />
					</Routes>
				</main>
			</div>

			<div className="footer">
				<a href="https://skillbox.ru/code/">https://skillbox.ru/</a>
			</div>
		</BrowserRouter>
	);
}
