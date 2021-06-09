const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      battleShip1: {
        length: 4,
        sunken: false,
        pos: [
          [0, 0],
          [0, 1],
          [0, 2],
          [0, 3],
        ],
        hits: 0,
      },
      battleShip2: {
        length: 4,
        sunken: false,
        pos: [
          [3, 2],
          [3, 3],
          [3, 4],
          [3, 5],
        ],
        hits: 0,
      },
      cruiser: {
        length: 3,
        sunken: false,
        pos: [
          [5, 0],
          [6, 0],
          [7, 0],
        ],
        hits: 0,
      },
      submarine: {
        length: 3,
        sunken: false,
        pos: [
          [5, 7],
          [6, 7],
          [7, 7],
        ],
        hits: 0,
      },
      destroyer: {
        length: 2,
        sunken: false,
        pos: [
          [1, 3],
          [2, 3],
        ],
        hits: 0,
      },
      lastShoot: [0, 0],
      shoots: 0,
      victory: false,
      board: [
        [4, 0, 0, 0, 0, 6, 6, 6, 0, 0],
        [4, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [4, 0, 0, 5, 0, 0, 0, 0, 0, 0],
        [4, 8, 8, 5, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 5, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 5, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 7, 7, 7, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      ],
    },
    actions: {
      playerFire: (x, y) => {
        let auxArray = getStore().board.slice();
        let number = getStore().board[x][y];
        let shipPosition = [];
        switch (number) {
          case 0:
            auxArray[x][y] = 2;
            break;
          case 1:
          case 2:
          case 3:
            alert("Error, why are you shooting at the same place twice!?");
            break;
          default:
            auxArray[x][y] = 1;
            setStore({ board: auxArray });
            if (getActions().checkSunken(number)) {
              switch (number) {
                case 4:
                  shipPosition = getStore().battleShip1.pos.slice();
                  break;
                case 5:
                  shipPosition = getStore().battleShip2.pos.slice();
                  break;
                case 6:
                  shipPosition = getStore().cruiser.pos.slice();
                  break;
                case 7:
                  shipPosition = getStore().submarine.pos.slice();
                  break;
                case 8:
                  shipPosition = getStore().destroyer.pos.slice();
                  break;
                default:
                  console.log("error on playerFire");
                  break;
              }
              getStore().board.map((element, index) => {
                getStore().board[index].map((thing, thindex) => {
                  shipPosition.map((position) => {
                    console.log(`${position}, ${index},${thindex}`);
                    if (position[0] === index && position[1] === thindex)
                      auxArray[thindex][index] = 3;
                    return true;
                  });
                  return true;
                });
                return true;
              });
            } else auxArray[x][y] = 1;
            break;
        }
        setStore({ board: auxArray });
        setStore({ shoots: getStore().shoots + 1 });
        setStore({ lastShoot: [x, y] });
        let successCounter=0;
        getStore().board.map((element, index) => {
          getStore().board[index].map((thing, thindex) => {
            if(getStore().board[index][thindex]===0||getStore().board[index][thindex]===3||getStore().board[index][thindex]===2)
            successCounter+=1;
          });
        });
        if (successCounter===100)
        setStore({victory: true});
      },
      surrender: ()=>{
        let aux=getStore().board.slice();
        getStore().board.map((_, a) => {
          getStore().board[a].map((element,b) => {
            if(element===4||element===5||element===6||element===7||element===8)
            aux[a][b]=10;
          });
        });
        setStore({board:aux});
      },


      checkSunken: (boatType) => {
        let aux = 0;
        getStore().board.map((_, index) => {
          getStore().board[index].map((element) => {
            if (element === boatType) {
              aux += 1;
            }
            return null;
          });
          return null;
        });
        switch (boatType) {
          case 4:
            if (getStore().battleShip1.length - aux === 4) {
              setStore(
                Object.assign(getStore().battleShip1, {
                  sunken: true,
                  hits: 4,
                })
              );
              return true;
            } else
              setStore(
                Object.assign(getStore().battleShip1, {
                  sunken: false,
                  hits: 4 - aux,
                })
              );
            return false;
          case 5:
            if (getStore().battleShip2.length - aux === 4) {
              setStore(
                Object.assign(getStore().battleShip2, {
                  sunken: true,
                  hits: 4,
                })
              );
              return true;
            } else
              setStore(
                Object.assign(getStore().battleShip2, {
                  sunken: false,
                  hits: 4 - aux,
                })
              );
            return false;
          case 6:
            if (getStore().cruiser.length - aux === 3) {
              setStore(
                Object.assign(getStore().cruiser, { sunken: true, hits: 3 })
              );
              return true;
            } else
              setStore(
                Object.assign(getStore().cruiser, {
                  sunken: false,
                  hits: 3 - aux,
                })
              );
            return false;
          case 7:
            if (getStore().submarine.length - aux === 3) {
              setStore(
                Object.assign(getStore().submarine, { sunken: true, hits: 3 })
              );
              return true;
            } else
              setStore(
                Object.assign(getStore().submarine, {
                  sunken: false,
                  hits: 3 - aux,
                })
              );
            return false;
          case 8:
            if (getStore().destroyer.length - aux === 2) {
              setStore(
                Object.assign(getStore().destroyer, { sunken: true, hits: 2 })
              );
              return true;
            } else
              setStore(
                Object.assign(getStore().destroyer, {
                  sunken: false,
                  hits: 2 - aux,
                })
              );
            return false;
        }
      },
    },
  };
};
export default getState;
