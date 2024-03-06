import {render} from "@testing-library/react";
import {MainPage} from "../MainPage";

const renderComponent = (props: any = {}) => {
    return render(<MainPage {...props} />)
}

describe('Тест компонента MainPage', () => {
   test('Проверка коректного рендеринга главной страницы', () => {
        const {container} = renderComponent();
        expect(container).toMatchSnapshot();
   });
});
