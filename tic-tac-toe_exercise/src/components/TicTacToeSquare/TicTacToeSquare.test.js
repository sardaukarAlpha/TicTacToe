import TicTacToeSquare from "../../components/TicTacToeSquare/ticTacToeSquare";
import { shallow, mount } from "enzyme";

describe("TicTacToe board Testing", () => {
    test('renders TicTacToe board component without crashing', () => {
        shallow(<TicTacToeSquare />);
    });
    test('renders a button inside square component', () => {
        const wrapper = mount(<TicTacToeSquare />);
        // eslint-disable-next-line jest/valid-expect
        expect(wrapper.find(<button />));
    });
})
