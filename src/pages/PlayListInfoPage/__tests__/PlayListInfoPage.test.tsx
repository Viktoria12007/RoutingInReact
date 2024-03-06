import '@testing-library/jest-dom';
import {PLAYLISTS} from "../../../data";
import {renderWithRouter} from "../../../tests/helpers/renderWithRouter";

const renderComponent = (playlistId: number) => {
    return renderWithRouter(`/playlists/${playlistId}`);
}

describe('Тест компонента PlayListInfoPage', () => {
   test('Тест, проверяющий текст по умолчанию, если нет доступного плейлиста', () => {
        const { getByTestId } = renderComponent(202);
        expect(getByTestId('EmptyPlayList')).toHaveTextContent('Такого плейлиста не существует!');
   });
    test('Тест, проверяющий данные о плейлисте, если он доступен (жанр, название, количестве песен в списке)', () => {
        function runTestWithPlayListId(playListId: number) {
            const { getByTestId } = renderComponent(playListId);
            if (PLAYLISTS[playListId]?.songs.length) {
                expect(getByTestId('Genre').innerHTML).toBe(PLAYLISTS[playListId].genre);
                expect(getByTestId('Name').innerHTML).toContain(PLAYLISTS[playListId].name);
                expect(getByTestId('Songs').children).toHaveLength(PLAYLISTS[playListId].songs.length);
            }
        }
        runTestWithPlayListId(100);
    });
});
