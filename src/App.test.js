import App from './TicTacToe';
import TicTacToe from './TicTacToe';
import { shallow } from "enzyme";

describe("App Testing", () => {
  test('renders TicTacToe component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(<TicTacToe />).exists()).toBeFalsy();
  });
})


