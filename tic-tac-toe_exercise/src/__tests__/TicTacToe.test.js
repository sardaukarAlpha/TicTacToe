import TicTacToe from "../TicTacToe";
import { shallow } from "enzyme";

describe("TicTacToe Testing", () => {
    test("render the title of the game", () => {
        const wrapper = shallow(<TicTacToe />);
        expect(wrapper.find('h2').text()).toContain('TicTacToe game');
    })
})

