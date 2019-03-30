const playHistory = [];

const play = (id) => {
  const player = document.getElementById('player')
  const element = document.getElementById(id)

  if (player.innerText === 'X' && element.innerText != 'X' && element.innerText != 'O') {
    player.innerText = 'O'
    element.innerText = 'X'
    playHistory[id] = 'X'
  } else if (player.innerText === 'O' && element.innerText != 'X' && element.innerText != 'O') {
    player.innerText = 'X'
    element.innerText = 'O'
    playHistory[id] = 'O'
  }

  // create array's of the player's moves
  const xMoves = [];
  const oMoves = [];
  for (let i = 0; i < playHistory.length; i++) {
    if (playHistory[i] === 'X') {
      xMoves.push(i)
    } else if (playHistory[i] === 'O') {
      oMoves.push(i)
    }
  }
  console.log (xMoves)
  console.log (oMoves)
  // create an array of winning combos

  const winningCombos = [[0,1,2], [3,4,5], [6,7,8], [2,5,8], [1,4,7], [0,3,6], [2,4,6], [0,4,8]]

  const reset = () => {
    me1 = document.getElementById(0)
    me2 = document.getElementById(1)
    me3 = document.getElementById(2)
    me4 = document.getElementById(3)
    me5 = document.getElementById(4)
    me6 = document.getElementById(5)
    me7 = document.getElementById(6)
    me8 = document.getElementById(7)
    me9 = document.getElementById(8)
    me1.innerText = ''
    me2.innerText = ''
    me3.innerText = ''
    me4.innerText = ''
    me5.innerText = ''
    me6.innerText = ''
    me7.innerText = ''
    me8.innerText = ''
    me9.innerText = ''

      
    }
  

  // check to see if the playHistory contains the 3 numbers of a winning combo assigned to a player 
  let checker = true
  
  for (let i = 0; i < winningCombos.length; i++) {
      if (xMoves.includes(winningCombos[i][0]) && xMoves.includes(winningCombos[i][1]) && xMoves.includes(winningCombos[i][2])) {
        window.alert("Player X wins!")
        checker = false
        reset()
      } else if (oMoves.includes(winningCombos[i][0]) && oMoves.includes(winningCombos[i][1]) && oMoves.includes(winningCombos[i][2])) {
        window.alert("Player O wins!")
        checker = false
        reset()
      } 

  }
  let boardFull = true
  if (checker === true) {
    for(let i = 0; i <= 8; i++){
    if(playHistory[i] === undefined){
        boardFull = false
    }
  }
  if(boardFull === true){
    window.alert("Cat's game, there is no winner")
    reset()
  }
}
}
    
      
  
  