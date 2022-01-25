import TicTacToe from "../TicTacToe";
import TicTacToeSquare from "../components/TicTacToeSquare/ticTacToeSquare";
import { shallow, mount } from "enzyme";

describe("TicTacToe Testing", () => {
    test('renders TicTacToe component without crashing', () => {
        shallow(<TicTacToe />);
    });
    test("should have value as X when it is X ", () => {
        const squareX = shallow(<TicTacToeSquare value="X" />);
        expect(squareX.text()).toEqual("X");
    });
    test("should have value as O when it is O ", () => {
        const squareX = shallow(<TicTacToeSquare value="O" />);
        expect(squareX.text()).toEqual("O");
    });
})

