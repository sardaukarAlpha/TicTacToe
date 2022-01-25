import React from "react";
import TicTacToe from "../TicTacToe";
import TicTacToeSquare from "../components/TicTacToeSquare/ticTacToeSquare";
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
    test("initializes the square state with null", () => {
        jest.spyOn(React, 'useState').mockImplementation(useStateMock);
        // eslint-disable-next-line no-unused-vars
        const wrapper = shallow(<TicTacToe />);
        expect(setState).toEqual([
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null
        ]);
      });
})

