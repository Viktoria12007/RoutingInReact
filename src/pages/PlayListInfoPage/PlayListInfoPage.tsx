import './PlayListInfoPage.css';
import {PLAYLISTS} from "../../data";
import {Link, useParams} from "react-router-dom";

export function PlayListInfoPage () {
    const { playlistId } = useParams();
    const playlist = PLAYLISTS[Number(playlistId)];

    return (
        <div className="playListInfoPage">
            <h2>PlayListInfoPage</h2>

            { playlist?.songs.length ?
                <>
                    <div className="playListDescription">
                        <span>Жанр: </span>
                        <Link data-testid="Genre" to={`/playlists?searchGenre=${playlist.genre}`}>{playlist.genre}</Link>
                        <div data-testid="Name">{`Название: ${playlist.name}`}</div>
                    </div>

                    <ul data-testid="Songs" className="playListSongs">
                        { playlist.songs.map((song, index) => ( <li key={index}>{song}</li> )) }
                    </ul>
                </>
                : <div data-testid="EmptyPlayList">Такого плейлиста не существует!</div>
            }

        </div>
    );
}
