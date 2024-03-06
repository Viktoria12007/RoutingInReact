import {MemoryRouter} from "react-router-dom";
import {AppRouter} from "../../router/AppRouter";
import {render} from "@testing-library/react";

export function renderWithRouter (initialRoute = '/') {
    return render(
        <MemoryRouter initialEntries={[initialRoute]}>
            <AppRouter />
        </MemoryRouter>
    )
}
