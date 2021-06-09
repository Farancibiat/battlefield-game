const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      count: 0,

      // Player Stats
      playerStats: {
        battleShip1: { length: 4, sunken: false, position: [], hits: [] },
        battleShip2: { length: 4, sunken: false, position: [], hits: [] },
        cruiser: { length: 3, sunken: false, position: [], hits: [] },
        submarine: { length: 3, sunken: false, position: [], hits: [] },
        destroyer: { length: 2, sunken: false, position: [], hits: [] },
      },
      playerLastShoot: [],
      playerShoots: 0,

      computerStats: {
        battleShip1: {
          length: 4,
          sunken: false,
          position: [[], [], [], []],
          hits: 0,
        },
        battleShip2: {
          length: 4,
          sunken: false,
          position: [[], [], [], []],
          hits: 0,
        },
        cruiser: { length: 3, sunken: false, position: [[], [], []], hits: 0 },
        submarine: {
          length: 3,
          sunken: false,
          position: [[], [], []],
          hits: 0,
        },
        destroyer: { length: 2, sunken: false, position: [[], []], hits: 0 },
      },
      cpuLastShoot: [],
      cpuShoots: 0,

      playerTurn: true,
      playerBoard: [
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      ],
      computerBoard: [
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 1, 1, 1, 1, 1, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 1, 1, 1, 1, 0, 1],
      ],
    },
    actions: {
      playerFire: (x, y) => {
        if (!getStore().playerTurn) {
          alert("Error, wait until computer plays");
        } else {
          let auxArray = getStore().computerBoard.slice();
          switch (auxArray[x][y]) {
            case 0:
              auxArray[x][y] = 3;
              break;
            case 1:
              auxArray[x][y] = 2;
              break;
            default:
              alert("Error, you can't shoot at the same place twice");
              break;
          }
          setStore({ computerBoard: auxArray });
          setStore({ playerTurn: false });
          setStore({ playerShoots: getStore().playerShoots + 1 });
          setStore({ playerLastShoot: [x, y] });
          getActions().computerFire();
        }
      },
      computerFire: () => {
        let x = Math.floor(Math.random() * 10 + 1);
        console.log("x: ", x);
        let y = Math.floor(Math.random() * 10 + 1);
        console.log("y: ", y);
        console.log("cpuShoots: ", getStore().cpuShoots);

        let auxArray = getStore().playerBoard.slice();
        if (getStore().cpuShoots === 0 && !getStore().playerTurn) {
          switch (auxArray[x][y]) {
            case 0:
              auxArray[x][y] = 3;
              break;
            case 1:
              auxArray[x][y] = 2;
              break;
            default:
              alert("Error, you can't shoot at the same place twice");
              break;
          }
          setStore({ playerBoard: auxArray });
          setStore({ playerTurn: true });
          setStore({ cpuShoots: 1 });
          setStore({ cpuLastShoot: [x, y] });
        } else if (!getStore().playerTurn) {
          switch(getStore().playerBoard[getStore().cpuLastShoot[0]][getStore().cpuLastShoot[1]]){
            case 3:
            case 4:
            switch (auxArray[x][y]) {
              case 0:
                auxArray[x][y] = 3;
                break;
              case 1:
                auxArray[x][y] = 2;
                break;
              default:
                alert("Error, you can't shoot at the same place twice");
                break;
          }
          break;
          case 2:
            switch (auxArray[x][y]) {
              case 0:
                auxArray[x][y] = 3;
                break;
              case 1:
                auxArray[x][y] = 2;
                break;
              default:
                alert("Error, you can't shoot at the same place twice");
                break;
          }
          
        }
        console.log("boom");
        setStore({ activePlayer: !getStore().activePlayer });
      },
    },
  };
};
export default getState;
