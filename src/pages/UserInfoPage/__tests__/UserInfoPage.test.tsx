import '@testing-library/jest-dom';
import {render} from "@testing-library/react";
import {UserInfoPage} from "../UserInfoPage";
import {MemoryRouter, Route, Routes} from "react-router-dom";
import {USERS} from "../../../data";

const renderComponent = (userId: number, props: any = {}) => {
    return render(
        <MemoryRouter initialEntries={[`/users/${userId}`]}>
            <Routes>
                <Route path='/users/:userId' element={<UserInfoPage {...props} />} />
            </Routes>
        </MemoryRouter>
    );
}

describe('Тест компонента UserInfoPage', () => {
   test('Тест, проверяющий текст по умолчанию, если нет пользователя', () => {
        const { getByTestId } = renderComponent(202);
        expect(getByTestId('EmptyUser'))?.toHaveTextContent('Пользоатвеля с таким ИД нет');
   });
   test('Тест, проверяющий данные о пользователе, если он существует (email, имя, ссылка на плейлист)', () => {
       function runTestWithUserId (userId: number) {
           const { getByTestId } = renderComponent(userId);
           if (USERS[userId]) {
               expect(getByTestId('Name')).toHaveTextContent(USERS[userId].fullName);
               expect(getByTestId('Email')).toHaveTextContent(USERS[userId].email);
               if (USERS[userId].playlist) {
                   expect(getByTestId('Link')).toHaveAttribute('href', `/playlists/${userId}`);
               }
           }
       }
       runTestWithUserId(1);
   });
});
