import Status from "./status";
import { shallow } from "enzyme";

describe("Status component testing", () => {
    test('renders Status component without crashing', () => {
        const props = {
            getStatus: jest.fn()
        }
        shallow(<Status {...props} />);
    });
    test('if function passed to Status component is executed', () => {
        const getStatus = jest.fn();
        // eslint-disable-next-line no-unused-vars
        const wrapper = shallow(<Status getStatus={getStatus} />);
        expect(getStatus).toBeCalled();
    });
})
