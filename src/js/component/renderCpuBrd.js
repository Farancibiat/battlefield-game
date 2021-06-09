import React, { useContext, useEffect } from "react";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";
import Square from "./square";

export const RenderCpuBoard = (props) => {
  const { store, actions } = useContext(Context);
  let abc = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];

  useEffect(() => {}, store.computerBoard);
  return (
    <div className="container">
      <table className="table table-bordered">
        <thead key="cputh">
          <tr>
            <th scope="col"></th>
            {[...Array(10)].map((_, index) => {
              return (
                <th key={`cputh${index}`} scope="col">
                  {index + 1}
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {store.computerBoard.map((i, index) => {
            return (
              <tr key={`cputr${index}`}>
                <th scope="row">{abc[index]}</th>
                {store.computerBoard[index].map((l, lindex) => {
                  return (
                    <>
                      <Square
                        board="cpu"
                        value={store.computerBoard[index][lindex]}
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

RenderCpuBoard.propTypes = {
  board: PropTypes.array,
};
export default RenderCpuBoard;
