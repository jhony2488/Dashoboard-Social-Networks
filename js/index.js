const button = document.getElementById('switch-shadow')
const mode=document.getElementById('mode')
let decision = false
button.onclick = () => {
  decision = !decision
  console.log(decision)
  if (decision === false) {
    dark()
  } else if (decision === true) {
    light()
  }
}

function dark() {
  mode.innerHTML="dark mode"
  const container = document.getElementById('container')
  const body = document.getElementById('body')
  const card1 = document.getElementById('card1')
  const card2 = document.getElementById('card2')
  const card3 = document.getElementById('card3')
  const card4 = document.getElementById('card4')
  const card5 = document.getElementById('card5')
  const card6 = document.getElementById('card6')
  const card7 = document.getElementById('card7')
  const card8 = document.getElementById('card8')
  const card9 = document.getElementById('card9')
  const card10 = document.getElementById('card10')
  const card11 = document.getElementById('card11')
  const card12 = document.getElementById('card12')
  container.style.backgroundColor = 'hsl(232, 19%, 15%)'
  container.style.color = 'whitesmoke'
  body.style.backgroundColor = 'hsl(232, 19%, 15%)'
  card1.style.backgroundColor = 'hsl(228, 28%, 20%)'
  card2.style.backgroundColor = 'hsl(228, 28%, 20%)'
  card3.style.backgroundColor = 'hsl(228, 28%, 20%)'
  card4.style.backgroundColor = 'hsl(228, 28%, 20%)'
  card5.style.backgroundColor = 'hsl(228, 28%, 20%)'
  card6.style.backgroundColor = 'hsl(228, 28%, 20%)'
  card7.style.backgroundColor = 'hsl(228, 28%, 20%)'
  card8.style.backgroundColor = 'hsl(228, 28%, 20%)'
  card9.style.backgroundColor = 'hsl(228, 28%, 20%)'
  card10.style.backgroundColor = 'hsl(228, 28%, 20%)'
  card11.style.backgroundColor = 'hsl(228, 28%, 20%)'
  card12.style.backgroundColor = 'hsl(228, 28%, 20%)'
}
function light() {
  mode.innerHTML="light mode"
  const container = document.getElementById('container')
  const body = document.getElementById('body')
  container.style.backgroundColor = 'whitesmoke'
  container.style.color = 'black'
  const card1 = document.getElementById('card1')
  const card2 = document.getElementById('card2')
  const card3 = document.getElementById('card3')
  const card4 = document.getElementById('card4')
  const card5 = document.getElementById('card5')
  const card6 = document.getElementById('card6')
  const card7 = document.getElementById('card7')
  const card8 = document.getElementById('card8')
  const card9 = document.getElementById('card9')
  const card10 = document.getElementById('card10')
  const card11 = document.getElementById('card11')
  const card12 = document.getElementById('card12')
  body.style.backgroundColor = 'whitesmoke'
  card1.style.backgroundColor = 'hsl(227, 47%, 96%)'
  card2.style.backgroundColor = 'hsl(227, 47%, 96%)'
  card3.style.backgroundColor = 'hsl(227, 47%, 96%)'
  card4.style.backgroundColor = 'hsl(227, 47%, 96%)'
  card5.style.backgroundColor = 'hsl(227, 47%, 96%)'
  card6.style.backgroundColor = 'hsl(227, 47%, 96%)'
  card7.style.backgroundColor = 'hsl(227, 47%, 96%)'
  card8.style.backgroundColor = 'hsl(227, 47%, 96%)'
  card9.style.backgroundColor = 'hsl(227, 47%, 96%)'
  card10.style.backgroundColor = 'hsl(227, 47%, 96%)'
  card11.style.backgroundColor = 'hsl(227, 47%, 96%)'
  card12.style.backgroundColor = 'hsl(227, 47%, 96%)'
}
setInterval(()=>{
  document.location.reload(true);
},60000)