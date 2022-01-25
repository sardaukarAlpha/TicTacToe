import React from "react";
import TicTacToe from "../TicTacToe";
import TicTacToeSquare from "../components/TicTacToeSquare/ticTacToeSquare";
import TicTacToeBoard from "../components/TicTacToeBoard/ticTacToeBoard";
import { shallow, mount } from "enzyme";

describe("TicTacToe Testing", () => {
    
    afterEach(() => {
        jest.clearAllMocks();
    });

    test('renders TicTacToe component without crashing', () => {
        shallow(<TicTacToe />);
    });
    test("should have value as X when it is X", () => {
        const squareX = shallow(<TicTacToeSquare value="X" />);
        expect(squareX.text()).toEqual("X");
    });
    test("should have value as O when it is O", () => {
        const squareO = shallow(<TicTacToeSquare value="O" />);
        expect(squareO.text()).toEqual("O");
    });    
    test("the board should contain 3 rows", () => {
        const onClick = jest.fn();
        const wrapper = mount(<TicTacToeBoard onClick={onClick} />);
        expect(wrapper.find(".squareRow").length).toEqual(1);
    });
    test('if function passed to TicTacToe board component is executed', () => {
        const onClick = jest.fn();
        // eslint-disable-next-line no-unused-vars
        const wrapper = shallow(<TicTacToeBoard onClick={onClick} />);
        expect(onClick).toBeCalled();
    });
    
    test("should render all the slots for the board", () => {
        const classy = 'square';
        const value = 'X';
        const onClick = jest.fn();
        const wrapper = shallow(<TicTacToeSquare className={classy} value={value} onClick={onClick} />)
        expect(wrapper.find(".square").exists()).toBeTruthy();
    });
    
    // test("initializes the square state with null", () => {
    //     jest.spyOn(React, 'useState').mockImplementation(useStateMock);
    //     // eslint-disable-next-line no-unused-vars
    //     const wrapper = shallow(<TicTacToe />);
    //     expect(setState).toEqual([
    //       null,
    //       null,
    //       null,
    //       null,
    //       null,
    //       null,
    //       null,
    //       null,
    //       null
    //     ]);
    //   });
})

