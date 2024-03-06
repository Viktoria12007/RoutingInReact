import { USERS } from "../../data";
import "./UserInfoPage.css";
import {Link, useParams} from "react-router-dom";

export function UserInfoPage() {
	const { userId } = useParams();
	const user = USERS[Number(userId)];

	if (!user) {
		return (
			<div className="userInfoPage">
				<h2>UserInfoPage</h2>

				<div className="users">
					<p data-testid="EmptyUser">Пользоатвеля с таким ИД нет</p>
				</div>
			</div>
		);
	}

	return (
		<div className="userInfoPage">
			<h2>UserInfoPage</h2>

			<div className="users">
				<p>{user.jobTitle}</p>
				<p data-testid="Email">{user.email}</p>
				<img src={user.avatar} alt="" width={200} height={200} />
				<p data-testid="Name">{user.fullName}</p>
				<p>{user.bio}</p>
			</div>

			{ user.playlist &&
				<div className="userPlayList">
					<span>playlist: </span>
					<Link data-testid="Link" to={`/playlists/${user.playlist.id}`}>
						{user.playlist.name}
					</Link>
				</div>
			}
		</div>
	);
}
