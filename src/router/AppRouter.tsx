import {Route, Routes} from "react-router-dom";
import {MainPage, PlayListInfoPage, PlayListsPage, UserInfoPage, UsersPage} from "../pages";

export function AppRouter () {
    return (
        <Routes>
            <Route path='/' element={<MainPage />} />
            <Route path='/users' element={<UsersPage />} />
            <Route path='/users/:userId' element={<UserInfoPage />} />
            <Route path='/playlists' element={<PlayListsPage />} />
            <Route path='/playlists/:playlistId' element={<PlayListInfoPage />} />
        </Routes>
    );
}
