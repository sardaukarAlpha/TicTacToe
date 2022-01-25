import TicTacToeBoard from "../../components/TicTacToeBoard/ticTacToeBoard";
import { shallow } from "enzyme";

describe("TicTacToe board Testing", () => {
    test('if function passed to TicTacToBoard component is executed', () => {
        const onClick = jest.fn();
        // eslint-disable-next-line no-unused-vars
        const wrapper = shallow(<TicTacToeBoard onClick={onClick} />);
        expect(onClick).toBeCalled();
    });
})
