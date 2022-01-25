import Status from "./status";
import { shallow } from "enzyme";

describe("Status component testing", () => {
    test('renders Status component without crashing', () => {
        const props = {
            getStatus: jest.fn()
        }
        shallow(<Status {...props} />);
    });
    test('test if function passed to Status component is executed', () => {
        const props = {
            getStatus: jest.fn()
        }
        const wrapper = shallow(<Status {...props} />);
        expect(wrapper.prop(getStatus)).toBeCalled();
    });
})
