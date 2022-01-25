import History from "./history";
import { shallow, mount } from "enzyme";

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
        const options = [null, null, null];
        // eslint-disable-next-line no-unused-vars
        const wrapper = mount(<History history={options} goToPosition={goToPosition()} />);
        expect(goToPosition).toBeCalled();
    });
})
