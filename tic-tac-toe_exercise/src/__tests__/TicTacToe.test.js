import TicTacToe from "../TicTacToe";
import { shallow, mount } from "enzyme";

describe("TicTacToe Testing", () => {
    test('renders TicTacToe component without crashing', () => {
        shallow(<TicTacToe />);
    });
})

