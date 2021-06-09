import React, { useContext, useEffect } from "react";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";
import Square from "./square";

export const RenderPlayerBoard = (props) => {
  const { store, actions } = useContext(Context);
  let abc = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];

  useEffect(() => {}, [store.playerBoard]);

  return (
    <div className="container">
      <table className="table table-bordered">
        <thead>
          <tr key="trkey">
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
          {store.playerBoard.map((i, index) => {
            return (
              <tr key={`usrtr${index}`}>
                <th scope="row">{abc[index]}</th>
                {store.playerBoard[index].map((l, lindex) => {
                  return (
                    <>
                      <Square
                        board="user"
                        value={store.playerBoard[index][lindex]}
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
