// [[file:all.org::sounds_def][sounds_def]]
const sounds = [
  'null',
  'eins',
  'zwei',
  'drei',
  'fünf',
  'sechs',
  'sieben',
  'acht',
  'neun',
  'zehn',
  'elf',
  'zwölf',
  'dreizehn',
  'vierzehn',
  'fünfzehn',
  'sechzehn',
  'siebzehn',
  'achtzehn',
  'neunzehn',
  'zwanzig',
  'einundzwanzig',
  'zweiundzwanzig',
  'dreiundzwanzig',
  'vierundzwanzig',
  'fünfundzwanzig',
  'sechsundzwanzig',
  'siebenundzwanzig',
  'achtundzwanzig',
  'neunundzwanzig',
  'dreißig',
  'einunddreißig',
  'zweiunddreißig',
  'dreiunddreißig',
  'vierunddreißig',
  'fünfunddreißig',
  'sechsunddreißig',
  'siebenunddreißig',
  'achtunddreißig',
  'neununddreißig',
  'vierzig',
  'einundvierzig',
  'zweiundvierzig',
  'dreiundvierzig',
  'vierundvierzig',
  'fünfundvierzig',
  'sechsundvierzig',
  'siebenundvierzig',
  'achtundvierzig',
  'neunundvierzig',
  'fünfzig',
  'einundfünfzig',
  'zweiundfünfzig',
  'dreiundfünfzig',
  'vierundfünfzig',
  'fünfundfünfzig'
];
// sounds_def ends here

// [[file:all.org::addSounds][addSounds]]
addSounds()
function addSounds() {
  sounds.forEach((sound) => {
    const body = document.querySelector('body')
    const soundEl = document.createElement('audio')
    soundEl.id = sound
    soundEl.src = `sounds/De-${sound}.ogg`
    body.appendChild(soundEl)
  });
}
// addSounds ends here

// [[file:all.org::variable_definitions][variable_definitions]]
let guessedAnswer = ''
let correctNumber = getRandomNumberSound()
const repeatBtn = document.querySelector('.btn.repeatBtn')
const checkEl = document.getElementById('check')
const checkBtn = document.createElement('button')
// variable_definitions ends here

// [[file:all.org::js-sound-buttons][js-sound-buttons]]
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
// js-sound-buttons ends here

// [[file:all.org::js_checkBtn][js_checkBtn]]
checkBtn.innerText = 'Überpfüfen'
checkBtn.classList.add('btn');
checkBtn.classList.add('check')
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

    //modify wiederholen button to ask if user wants to be asked another number
    repeatBtn.innerText = 'Neu Nummer?'
    correctNumber = getRandomNumberSound()

    repeatBtn.classList.add('newNumber')
  } else {
    console.log('Wrong answer')
    checkBtn.classList.add('wrong')
    checkBtn.innerText = 'Versuch nochmal'
  }
})
checkEl.appendChild(checkBtn)
// js_checkBtn ends here

// [[file:all.org::js_stopSongs_def][js_stopSongs_def]]
function stopSongs() {
  sounds.forEach(sound => {
    const song = document.getElementById(sound)
    song.pause();
    song.currentTime = 0;
  })
}
// js_stopSongs_def ends here

// [[file:all.org::js_getRandomNumberSound_def][js_getRandomNumberSound_def]]
function getRandomNumberSound() {
  return Math.floor(Math.random() * sounds.length)
}
// js_getRandomNumberSound_def ends here

// [[file:all.org::js_clearSelection_def][js_clearSelection_def]]
function clearSelection() {
  btns = document.querySelectorAll('.options')
  console.log('clear selection')
  btns.forEach((btn) => {
    btn.classList.remove('selected')
  })
}
// js_clearSelection_def ends here

// [[file:all.org::js_resetCheckBtn_def][js_resetCheckBtn_def]]
function resetCheckBtn() {
  const checkBtn = document.querySelector('#check button')
  checkBtn.innerText = 'Überpfüfen'
  checkBtn.classList.remove('wrong')
  checkBtn.classList.remove('correct')
}
// js_resetCheckBtn_def ends here

// [[file:all.org::js-repeatBtnEventListener][js-repeatBtnEventListener]]
repeatBtn.addEventListener('click', () => {
  if(repeatBtn.classList.contains('newNumber')){
    document.getElementById(sounds[correctNumber]).play()
    resetCheckBtn()
    repeatBtn.innerText = 'Wiederholen'
    repeatBtn.classList.remove('newNumber')
  }else {
  document.getElementById(sounds[correctNumber]).play()
  }
})
// js-repeatBtnEventListener ends here
