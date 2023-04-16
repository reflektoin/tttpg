// [[file:all.org::js_file][js_file]]
const sounds = ['null', 'eins', 'zwei', 'drei'];
let guessedAnswer = ''
const correctNumber = getRandomNumberSound()
const repeatBtn = document.querySelector('.btn.repeatBtn')
console.log(repeatBtn)
repeatBtn.addEventListener('click', () => {
  document.getElementById(sounds[correctNumber]).play()
})
sounds.forEach(sound => {
  const btn = document.createElement('button')
  btn.classList.add('btn');
  btn.classList.add('options');

  btn.innerText = sound;

  btn.addEventListener('click', () => {
    resetCheckBtn()
    clearSelection()
    stopSongs();
    document.getElementById(sound).play()
    guessedAnswer = sound

    //add indicator for selected answer
    btn.classList.add('selected')
  })

  document.getElementById('buttons').
    appendChild(btn);
})

const checkEl = document.getElementById('check')
const checkBtn = document.createElement('button')

checkBtn.innerText = 'Überpfüfen'
checkBtn.classList.add('btn');
checkBtn.addEventListener('click', () => {
  //remove correct and wrong classes in case user had already guessed
  checkBtn.classList.remove('correct')
  checkBtn.classList.remove('right')
  let correctAnswer = sounds[correctNumber]
  if (guessedAnswer === correctAnswer) {
    console.log('Correct answer')

    //add class "correct" in order to stylize it to show that the answer was correct
    checkBtn.classList.add('correct')
    checkBtn.innerText = 'Richtig!'
  } else {
    console.log('Wrong answer')
    checkBtn.classList.add('wrong')
    checkBtn.innerText = 'Versuch nochmal'
  }
})

checkEl.appendChild(checkBtn)

function stopSongs() {
  sounds.forEach(sound => {
    const song = document.getElementById(sound)
    song.pause();
    song.currentTime = 0;
  })
}

function getRandomNumberSound() {
  return Math.floor(Math.random() * sounds.length)
}

function clearSelection() {
  btns = document.querySelectorAll('.options')
  console.log('clear selection')
  btns.forEach((btn) => {
    btn.classList.remove('selected')
  })
}

function resetCheckBtn() {

  const checkBtn = document.querySelector('#check button')
  checkBtn.innerText = 'Überpfüfen'
  checkBtn.classList.remove('wrong')
}
// js_file ends here
