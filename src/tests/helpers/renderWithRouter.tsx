import {MemoryRouter} from "react-router-dom";
import {AppRouter} from "../../router/AppRouter";

export function renderWithRouter (initialRoute = '/') {
    return (
        <MemoryRouter initialEntries={[initialRoute]}>
            <AppRouter />
        </MemoryRouter>
    )
}
