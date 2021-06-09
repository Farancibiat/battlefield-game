import React, { useContext } from "react";
import { Context } from "../store/appContext";
export const ButtonPanel = () => {
  const { store, actions } = useContext(Context);
  

  return (
      <>
      <div className="row">
          <div className="col-sm-3"></div>
          <div className="col-12 col-sm-3">
              <button className="btn btn-warning">bla bla</button>
          </div>
          <div className="col-12 col-sm-3">
          <button className="btn btn-danger"onClick={() => {actions.surrender()}}>Surrender</button>
          </div>
          <div className="col-sm-3"></div>
      </div>
      </>
  );
}
export default ButtonPanel;