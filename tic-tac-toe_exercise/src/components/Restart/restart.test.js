import Restart from "../../components/Restart/restart";
import { shallow } from "enzyme";

describe("restart button testing", () => {
    test('renders restart component without crashing', () => {
        shallow(<Restart />);
    });
    test('renders a button with text of restart', () => {
        const wrapper = shallow(<Restart />);
        expect(wrapper.find('#restart-btn').text()).toBe('restart');
    });
    test('check if restart button, reset to initial state squares and history objects', () => {
        
    })
})
