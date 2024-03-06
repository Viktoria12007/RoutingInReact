import '@testing-library/jest-dom';
import {screen, fireEvent, render} from "@testing-library/react";
import {renderWithRouter} from "../../../tests/helpers/renderWithRouter";

describe('Тест компонента UsersPage', () => {
    test('Тест, проверяющий вызов метода setSearchParam из react-router-dom при вводе имени пользователя', () => {
        const { getByLabelText } = render(renderWithRouter('/users'));
        let users = screen.getAllByTestId('User');
        expect(users.length).toBe(20);
        fireEvent.input(getByLabelText('введите имя'), {target: {value: 'pablo'}});
        users = screen.getAllByTestId('User');
        expect(users.length).toBe(1);
    });
});
