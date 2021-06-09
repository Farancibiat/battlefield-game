import React, {useContext, useEffect, useState} from "react";
import { Context } from "../store/appContext";

export const Square = (props) => {
  const { store, actions } = useContext(Context);
  const [squared, setSquare]= useState(props.value);

  useEffect(()=>{
      setSquare(store.board[props.pos[0]][props.pos[1]]);

  });
  return (
    <>
      <td
        className={squared=== 1
            ? "bg-warning border border-4 border-danger"
            : squared === 2
            ? "bg-secondary"
            : squared === 3
            ? "bg-danger"
            : squared === 10
            ? "border border-4 border-warning bg-light"
            :"bg-info"
        }
        onClick={() => {actions.playerFire(props.pos[0], props.pos[1])}}
      ></td>
    </>
  );
};
export default Square;
