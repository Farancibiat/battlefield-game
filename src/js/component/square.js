import React, {useContext, useEffect, useState} from "react";
import { Context } from "../store/appContext";

export const Square = (props) => {
  const { store, actions } = useContext(Context);
  const [squared, setSquare]= useState(props.value);

  useEffect(()=>{
    if (props.board==="cpu")
    setSquare(store.computerBoard[props.pos[0]][props.pos[1]]);
    else
      setSquare(store.playerBoard[props.pos[0]][props.pos[1]]);

  });
  return (
    <>
      <td
        className={squared=== 2
            ? "bg-warning border border-4 border-danger"
            : squared === 3
            ? "bg-secondary"
            : squared === 4
            ? "bg-danger"
            : "bg-info"
        }
        onClick={props.board==="cpu"?() => {actions.playerFire(props.pos[0], props.pos[1])}:null}
      ></td>
    </>
  );
};
export default Square;
