import React, { useContext } from "react";
import ButtonPanel from "../component/buttonPanel";
import RenderPlayerBoard from "../component/renderPlayerBrd";
import RenderCpuBoard from "../component/renderCpuBrd";
import { Context } from "../store/appContext";

export const Home = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="container text-center">
      <h1 className="text-center">BattleShip</h1>
      <div className="row py-3"><h3> Game Panel</h3></div>
      <div className="row">
        <div className="col-12 col-sm-6">
          <h3 className="text-success bg-warning">Player Board</h3>
          <h4>{`Battleship Stat: ${store.playerStats.battleShip1.sunken?"Sunken":"Ready to battle!"}`}</h4>
          <RenderPlayerBoard/>
        </div>
        <div className="col-12 col-sm-6">
        <h3 className="text-success bg-warning">Computer Board</h3>
          <RenderCpuBoard player="cpu"/>
        </div>
      </div>
      <ButtonPanel/>
    </div>
  );
};
export default Home;
