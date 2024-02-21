import {Link, useSearchParams} from "react-router-dom";
import {ChangeEvent} from "react";
import {PLAYLISTS} from "../../data";
import './PlayListsPage.css';

export function PlayListsPage () {
    const [searchParams, setSearchParams] = useSearchParams();

    function handleSearchGenre (e: ChangeEvent<HTMLInputElement>): void {
        setSearchParams({
            searchGenre: e.target.value.toLowerCase(),
            searchPlayListName,
        })
    }
    function handleSearchPlayListName (e: ChangeEvent<HTMLInputElement>): void {
        setSearchParams({
            searchPlayListName: e.target.value.toLowerCase(),
            searchGenre,
        })
    }

    const searchGenre = searchParams.get("searchGenre")?.toLowerCase() || '';
    const searchPlayListName = searchParams.get("searchPlayListName")?.toLowerCase() || '';

    const filteredPlayLists = PLAYLISTS.filter(({ genre, name }) => genre !== 'Non Music' && (genre.toLowerCase().includes(searchGenre) && name.toLowerCase().includes(searchPlayListName)));

    return (
        <div className="playListsPage">
            <h2>PlayListsPage</h2>

            <div className="playLists">
                <label>
                    введите жанр{" "}
                    <input type="text" value={searchGenre} onChange={handleSearchGenre} />
                </label>

                <label>
                    введите название{" "}
                    <input type="text" value={searchPlayListName} onChange={handleSearchPlayListName} />
                </label>

                {filteredPlayLists.map(({ id, name }) => (
                    <Link to={`/playlists/${id}`} key={id}>
                        {name}
                    </Link>
                ))}
            </div>
        </div>
    )
}
