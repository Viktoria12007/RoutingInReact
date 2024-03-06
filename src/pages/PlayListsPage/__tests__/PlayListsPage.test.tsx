import '@testing-library/jest-dom';
import {screen, fireEvent} from "@testing-library/react";
import {renderWithRouter} from "../../../tests/helpers/renderWithRouter";

describe('Тест компонента PlayListsPage', () => {
    test('Тест, проверяющий вызов метода setSearchParam из react-router-dom при вводе жанра и названия', () => {
        const { getByLabelText } = renderWithRouter('/playlists');
        let playLists = screen.getAllByTestId('PlayList');
        expect(playLists.length).toBe(16);
        fireEvent.input(getByLabelText('введите жанр'), {target: {value: 'electronic'}});
        fireEvent.input(getByLabelText('введите название'), {target: {value: 'just'}});
        playLists = screen.getAllByTestId('PlayList');
        expect(playLists.length).toBe(1);
    });
});
