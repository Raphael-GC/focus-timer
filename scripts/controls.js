import Sounds from './controls.js'
let minutes

export default function Controls({
  buttonPause,
  buttonPlay,
  newMinutes,
  minutesDisplay,
  secondsDisplay,
  buttonDark,
  buttonClear,
  buttonbgDark,
  buttonctrlDark,
  buttonSoundsDark,
  buttonCoffeeShop,
  buttonNature,
  buttonRain,
  buttonBonfire,
  buttonDigimon,
  buttonMario
}) {
  function playTime() {
    if (newMinutes <= '00') {
      controls.hold()
    } else {
      buttonPlay.classList.add('hide')
      buttonPause.classList.remove('hide')
    }
  }

  function pauseTime() {
    buttonPause.classList.add('hide')
    buttonPlay.classList.remove('hide')
  }

  function stopTime() {
    buttonPause.classList.add('hide')
    buttonPlay.classList.remove('hide')
    minutesDisplay.textContent = String(0).padStart(2, '0')
    secondsDisplay.textContent = String(0).padStart(2, '0')
    Sounds().coffeeShop.pause()
    Sounds().nature.pause()
    Sounds().rain.pause()
    Sounds().bonfire.pause()
    Sounds().digimon.pause()
    Sounds().mario.pause()
    Sounds().timeEnd.pause()
  }

  function clearMode() {
    buttonDark.classList.add('hide')
    buttonClear.classList.remove('hide')
  }

  function darkMode() {
    buttonClear.classList.add('hide')
    buttonDark.classList.remove('hide')
  }

  function bgDarkOn() {
    buttonbgDark.classList.add('bgDark')
  }

  function bgDarkOff() {
    buttonbgDark.classList.remove('bgDark')
  }

  function ctrldarkOn() {
    buttonctrlDark.classList.add('ctrldark')
  }
  function ctrldarkOff() {
    buttonctrlDark.classList.remove('ctrldark')
  }

  function soundsDarkOn() {
    buttonSoundsDark.classList.add('soundsdark')
  }
  function soundsDarkOff() {
    buttonSoundsDark.classList.remove('soundsdark')
  }

  function natureSelected() {
    buttonMario.classList.remove('selected')
    buttonDigimon.classList.remove('selected')
    buttonNature.classList.add('selected')
    buttonRain.classList.remove('selected')
    buttonBonfire.classList.remove('selected')
    buttonCoffeeShop.classList.remove('selected')
  }

  function rainSelected() {
    buttonMario.classList.remove('selected')
    buttonDigimon.classList.remove('selected')
    buttonNature.classList.remove('selected')
    buttonRain.classList.add('selected')
    buttonBonfire.classList.remove('selected')
    buttonCoffeeShop.classList.remove('selected')
  }
  function bonfireSelected() {
    buttonMario.classList.remove('selected')
    buttonDigimon.classList.remove('selected')
    buttonNature.classList.remove('selected')
    buttonRain.classList.remove('selected')
    buttonBonfire.classList.add('selected')
    buttonCoffeeShop.classList.remove('selected')
  }
  function coffeeShopSelected() {
    buttonMario.classList.remove('selected')
    buttonDigimon.classList.remove('selected')
    buttonNature.classList.remove('selected')
    buttonRain.classList.remove('selected')
    buttonBonfire.classList.remove('selected')
    buttonCoffeeShop.classList.add('selected')
  }
  function digimonSelected() {
    buttonMario.classList.remove('selected')
    buttonDigimon.classList.add('selected')
    buttonNature.classList.remove('selected')
    buttonRain.classList.remove('selected')
    buttonBonfire.classList.remove('selected')
    buttonCoffeeShop.classList.add('selected')
  }
  function marioSelected() {
    buttonMario.classList.add('selected')
    buttonDigimon.classList.remove('selected')
    buttonNature.classList.remove('selected')
    buttonRain.classList.remove('selected')
    buttonBonfire.classList.remove('selected')
    buttonCoffeeShop.classList.add('selected')
  }

  function deselecteAll() {
    buttonMario.classList.remove('selected')
    buttonDigimon.classList.remove('selected')
    buttonNature.classList.remove('selected')
    buttonRain.classList.remove('selected')
    buttonBonfire.classList.remove('selected')
    buttonCoffeeShop.classList.remove('selected')
  }

  return {
    deselecteAll,
    natureSelected,
    rainSelected,
    bonfireSelected,
    coffeeShopSelected,
    digimonSelected,
    marioSelected,   
    playTime,
    pauseTime,
    stopTime,
    newMinutes,
    darkMode,
    clearMode,
    bgDarkOn,
    bgDarkOff,
    ctrldarkOn,
    ctrldarkOff,
    soundsDarkOn,
    soundsDarkOff,
    minutes
  }
}