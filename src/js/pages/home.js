import React, { useContext } from "react";
import ButtonPanel from "../component/buttonPanel";
import RenderPlayerBoard from "../component/renderPlayerBrd";
import { Context } from "../store/appContext";
import "../styles/style.css";

export const Home = () => {
  const { store, actions } = useContext(Context);
  let abc = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];

  return (
    <div className="backgrnd container text-center mb-5">
      
      <div className="row pb-3">
      <h1 className="text-center bg-success text-warning">BattleShip</h1>
        
        
        <div className="row">
        
          <div className="col-sm-4"></div>
          <div className="col-12 col-sm-4">
          <div className="stats">
          <h3> Instructions</h3>
          <em>Just click on every table row and check if you hit any of the enemy's
          army... Enjoy</em>
        </div>
          <table className="bg-light table table-bordered">
          <thead>
            <tr>
              <th scope="col"></th>
              <th scope="col">Color</th>
              <th scope="col">Meaning</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td className="bg-warning border border-4 border-danger"></td>
              <td>Hit but floating</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td className="bg-secondary"></td>
              <td>Missing Shoot</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td className="bg-danger"></td>
              <td>Sunken Ship</td>
            </tr>
            <tr>
              <th scope="row">4</th>
              <td className="bg-info"></td>
              <td>No hits yet</td>
            </tr>
          </tbody>
        </table></div>
          <div className="col-sm-4"></div>
        </div>
        
          
      </div>
      <div className="row">
        <div className="col-12 col-sm-6">
          <h3 className="text-success bg-warning py-2">GameBoard</h3>
          <RenderPlayerBoard />
        </div>
        <div className="col-12 col-sm-6">
          <h3 className="text-success bg-warning py-2">Stats</h3>
          <div className="container stats py-5">
            <div className="row">
              <div className="col-12 col-sm-8 text-start">
              <h5>{`Battleship1 (4): ${
              store.battleShip1.sunken ? "Sunken" : "Ready to battle!"
            }`}</h5>
            <h5>{`Battleship2 (4): ${
              store.battleShip2.sunken ? "Sunken" : "Ready to battle!"
            }`}</h5>
            <h5>{`Cruiser (3): ${
              store.cruiser.sunken ? "Sunken" : "Ready to battle!"
            }`}</h5>
            <h5>{`Submarine (3): ${
              store.submarine.sunken ? "Sunken" : "Ready to battle!"
            }`}</h5>
            <h5>{`Destroyer (2): ${
              store.destroyer.sunken ? "Sunken" : "Ready to battle!"
            }`}</h5>
              </div>
              <div className="col-12 col-sm-4 text-start">
              <h4>{`Shoots: ${store.shoots}`}</h4>
            <h4>{`Last Shoot: (${abc[store.lastShoot[0]]}-${
              store.lastShoot[1]
            })`}</h4>
              </div>
            </div>
            
            
            {store.victory?<h1 className="bg-warning text-success border border-5 border-danger display-1 py-5">¡VICTORY!</h1>:null}

          </div>
        </div>
      </div>
      <ButtonPanel />
    </div>
  );
};
export default Home;
