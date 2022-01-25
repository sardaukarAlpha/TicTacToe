import Status from "./status";
import { shallow } from "enzyme";

describe("Status component testing", () => {
    test('renders Status component without crashing', () => {
        const props = {
            getStatus: jest.fn()
        }
        shallow(<Status {...props} />);
    });
})
