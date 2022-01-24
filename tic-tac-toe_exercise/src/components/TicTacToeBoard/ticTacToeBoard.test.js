import TicTacToeBoard from "../../components/TicTacToeBoard/ticTacToeBoard";
import { shallow } from "enzyme";

describe("TicTacToe board Testing", () => {
    test('renders TicTacToe board component without crashing', () => {
        shallow(<TicTacToeBoard />);
    });
})
