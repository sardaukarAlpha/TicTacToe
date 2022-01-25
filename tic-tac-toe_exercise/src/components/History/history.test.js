import History from "./history";
import { shallow } from "enzyme";

describe("History component testing", () => {
    test('renders History component without crashing', () => {
        const props = {
            history: ['X', 'O', 'X'],
            goToPosition: jest.fn()
        }
        shallow(<History {...props} />);
    });
    test('if function passed to History component is executed', () => {
        const goToPosition = jest.fn();
        // eslint-disable-next-line no-unused-vars
        const wrapper = shallow(<History goToPosition={goToPosition} />);
        expect(goToPosition).toBeCalled();
    });
})
