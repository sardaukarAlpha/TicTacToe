import React from "react";
import TicTacToe from "../TicTacToe";
import TicTacToeSquare from "../components/TicTacToeSquare/ticTacToeSquare";
import TicTacToeBoard from "../components/TicTacToeBoard/ticTacToeBoard";
import { shallow } from "enzyme";

describe("TicTacToe Testing", () => {
    const setState = jest.fn();
    const useStateMock = (initState) => [initState, setState];
    
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
    it("the board should contain 3 rows", () => {
        const wrapper = shallow(<TicTacToeBoard />);
        expect(wrapper.find(".squareRow").length).toEqual(3);
    });
    
    // it("should render all the slots for the board", () => {
    //     expect(board.find(".squareinit").exists()).toBeTruthy();
    // });
    
    // it("should have nine squares", () => {
    //     const board = mount(<Board squares={Array(9).fill(null)} />);
    
    //     expect(board.find("#squareDiv").length).toEqual(9);
    // });
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

