import Status from "./status";
import { shallow } from "enzyme";

describe("Status component testing", () => {
    test('renders Status component without crashing', () => {
        shallow(<Status />);
    });
    test('calls to function getStatus on Status component', () => {
        const props = {
            getStatus: jest.fn()
        }
        expect(props.getStatus).toBeCalled();
    });
})
