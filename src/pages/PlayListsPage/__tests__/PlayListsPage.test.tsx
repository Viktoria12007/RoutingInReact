import '@testing-library/jest-dom';
import {screen, fireEvent, render} from "@testing-library/react";
import { PlayListsPage } from "../PlayListsPage";
import {MemoryRouter, Route, Routes} from "react-router-dom";

const renderComponent = (props: any = {}) => {
    return render(
        <MemoryRouter initialEntries={['/playlists']}>
            <Routes>
                <Route path='/playlists' element={<PlayListsPage {...props} />} />
            </Routes>
        </MemoryRouter>
    )
}

describe('Тест компонента PlayListsPage', () => {
    test('Тест, проверяющий вызов метода setSearchParam из react-router-dom при вводе жанра и названия', () => {
        const { getByLabelText } = renderComponent();
        let playLists = screen.getAllByTestId('PlayList');
        expect(playLists.length).toBe(16);
        fireEvent.input(getByLabelText('введите жанр'), {target: {value: 'electronic'}});
        fireEvent.input(getByLabelText('введите название'), {target: {value: 'just'}});
        playLists = screen.getAllByTestId('PlayList');
        expect(playLists.length).toBe(1);
    });
});
