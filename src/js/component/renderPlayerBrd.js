import React, { useContext, useEffect } from "react";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";
import Square from "./square";

export const RenderPlayerBoard = (props) => {
  const { store, actions } = useContext(Context);
  let abc = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];

  useEffect(() => {}, [store.board]);

  return (
    <div className="container ">
      <table className="table bg-secondary table-bordered">
        <thead>
          <tr>
            <th scope="col"></th>
            {[...Array(10)].map((_, index) => {
              return (
                <th scope="col" key={`th${index}`}>
                  {index + 1}
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {store.board.map((i, index) => {
            return (
              <tr>
                <th scope="row">{abc[index]}</th>
                {store.board[index].map((l, lindex) => {
                  return (
                    <>
                      <Square
                        value={store.board[index][lindex]}
                        pos={[index, lindex]}
                      />
                    </>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

RenderPlayerBoard.propTypes = {
  board: PropTypes.array,
};
export default RenderPlayerBoard;
