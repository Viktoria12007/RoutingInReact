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
    test('Тест, проверяющий вызов метода setSearchParam из react-router-dom при вводе имени пользователя',async () => {
        const { getByLabelText } = renderComponent();
        fireEvent.input(getByLabelText('введите имя'), {target: {value: 'pablo'}});
        const users = await screen.findAllByTestId('User');
        expect(users.length).toBe(1);
    });
});
