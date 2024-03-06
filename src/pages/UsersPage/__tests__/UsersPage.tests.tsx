import '@testing-library/jest-dom';
import {screen, fireEvent, render} from "@testing-library/react";
import { UsersPage } from "../UsersPage";
import {MemoryRouter, Route, Routes} from "react-router-dom";

const renderComponent = (props: any = {}) => {
    return render(
        <MemoryRouter initialEntries={['/users']}>
            <Routes>
                <Route path='/users' element={<UsersPage {...props} />} />
            </Routes>
        </MemoryRouter>
        )
}

describe('Тест компонента UsersPage', () => {
    test('Тест, проверяющий вызов метода setSearchParam из react-router-dom при вводе имени пользователя', () => {
        const { getByLabelText } = renderComponent();
        let users = screen.getAllByTestId('User');
        expect(users.length).toBe(20);
        fireEvent.input(getByLabelText('введите имя'), {target: {value: 'pablo'}});
        users = screen.getAllByTestId('User');
        expect(users.length).toBe(1);
    });
});
