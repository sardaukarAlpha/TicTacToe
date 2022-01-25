import Title from "../../components/Title/title";
import { shallow, mount } from "enzyme";

describe("title testing", () => {
    test('renders title component without crashing', () => {
        shallow(<Title />);
    });
    test('renders a button with text of restart', () => {
        const titleText = "Tic tac toe game, let's play!";
        const wrapper = mount(<Title title={titleText} />);
        expect(wrapper.prop('title')).toBe(titleText);
    });
})
