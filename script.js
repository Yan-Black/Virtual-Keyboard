
const keyCodes = [
    "Backquote", "Digit1", "Digit2", "Digit3", 
    "Digit4", "Digit5", "Digit6", "Digit7", "Digit8", 
    "Digit9", "Digit0", "Minus", "Equal", "Backspace", 
    "Tab", "KeyQ", "KeyW", "KeyE", "KeyR", "KeyT", "KeyY", 
    "KeyU", "KeyI", "KeyO", "KeyP", "BracketLeft", "BracketRight",
    "Backslash", "Delete", "CapsLock", "KeyA", "KeyS", "KeyD", 
    "KeyF", "KeyG", "KeyH", "KeyJ", "KeyK", "KeyL", "Semicolon", 
    "Quote", "Enter","ShiftLeft", "KeyZ", "KeyX", "KeyC", "KeyV", 
    "KeyB", "KeyN", "KeyM", "Comma", "Period", "Slash", "ArrowUp",
    "ShiftRight", "ControlLeft", "MetaLeft", "AltLeft", "Space", 
    "AltRight", "ArrowLeft","ArrowDown","ArrowRight","ControlRight"
    ] 
    
const engUnshiftedKeys = [
    '`','1','2','3','4','5','6','7','8','9','0','-','=','Backspace',
    'Tab','q','w','e','r','t','y','u','i','o','p','[',']','\\','Del',
     'Caps Lock','a','s','d','f','g','h','j','k','l',';',"'",'Enter',
    'Shift','z','x','c','v','b','n','m',',','.','/','↑','Shift',
    'Ctrl','Win','Alt','','Alt','←','↓','→','Ctrl'
]

const engShiftedKeys = [
    '~','!','@','#','$','%','^','&','*','(',')','_','+','Backspace',
    'Tab','Q','W','E','R','T','Y','U','I','O','P','{','}','|','Del',
     'Caps Lock','A','S','D','F','G','H','J','K','L',':','"','Enter',
    'Shift','Z','X','C','V','B','N','M','<','>','?','↑','Shift',
    'Ctrl','Win','Alt','','Alt','←','↓','→','Ctrl'
]

const ruUnshiftedKeys = [
    'ё','1','2','3','4','5','6','7','8','9','0','-','=','Backspace',
    'Tab','й','ц','у','к','е','н','г','ш','щ','з','х','ъ','\\','Del',
    'Caps Lock','ф','ы','в','а','п','р','о','л','д','ж',"э",'Enter',
    'Shift','я','ч','с','м','и','т','ь','б','ю','.','↑','Shift',
    'Ctrl','Win','Alt','','Alt','←','↓','→','Ctrl'
]

const ruShiftedKeys = [
    'Ё','!','"','№',';','%',':','?','*','(',')','_','+','Backspace',
    'Tab','Й','Ц','У','К','Е','Н','Г','Ш','Щ','З','Х','Ъ','/','Del',
    'Caps Lock','Ф','Ы','В','А','П','Р','О','Л','Д','Ж',"Э",'Enter',
    'Shift','Я','Ч','С','М','И','Т','Ь','Б','Ю',',','↑','Shift',
    'Ctrl','Win','Alt','','Alt','←','↓','→','Ctrl'
]

class Button {
    constructor(type) {
        this.type = type
    }

    createButton(value) {
        const button = document.createElement('button')
              button.innerText = value
              button.classList.add('keyboard__button');

              switch(this.type) {
                case 'spec':
                    button.classList.add('button-special');
                    break;
                case 'long':
                    button.classList.add('button-long');
                    break;
                default:
                    button.classList.add('keyboard__button');
              }

        return button
    }
}

const charButton = new Button('char')
const specButton = new Button('spec')
const longButton = new Button('long')

class Keyboard {
    constructor(language) {
        this.language = language
    }

    init() {
        
        let arr = []
        this.language === 'eng' ? arr = engUnshiftedKeys : arr = ruUnshiftedKeys

        const keyboard = document.createElement('div')
              keyboard.classList.add('keyboard')

        for(let i = 0; i < arr.length; i++) {
            switch (arr[i]) {
                case 'Backspace':
                    keyboard.append(specButton.createButton(arr[i]));
                    break;
                case 'Caps Lock':
                    keyboard.append(specButton.createButton(arr[i]));
                    break;
                case 'Shift':
                    keyboard.append(specButton.createButton(arr[i]));
                    break;
                case 'Enter':
                    keyboard.append(specButton.createButton(arr[i]));
                    break;
                case '':
                    keyboard.append(longButton.createButton(arr[i]));
                    break;
                default:
                    keyboard.append(charButton.createButton(arr[i]));   
            }
        }
        return keyboard
    }
}


let lang = ['eng','ru']
let keysCollection = new Keyboard(lang[0]);

const keyboard = keysCollection.init()

      for(let i = 0; i < keyCodes.length; i++){
          keyboard.children[i].setAttribute('data-code', keyCodes[i])
      }

const textarea = document.createElement('textarea')
      textarea.classList.add('textarea')

const details = document.createElement('p')
      details.classList.add('info')
      details.innerText = 'Клавиатура создана в операционной системе Windows \n Для переключения языка комбинация: "левые Ctrl + Alt"'

document.body.append(textarea, keyboard, details)
document.querySelector('.textarea').autofocus = true;

function addActiveState(e) {
    [...keyboard.children].forEach(key => {
        if(key.getAttribute('data-code') === e.code) key.classList.add('active')
        if(key.classList.contains('caps') && e.code === 'CapsLock') {
            key.classList.remove('caps') 
            return
        } 
        if(key.innerText === 'Caps Lock' && e.code === 'CapsLock') key.classList.add('caps')
    })
}

function removeActiveState(e) {
    [...keyboard.children].forEach(key => {
        if(key.getAttribute('data-code') === e.code) key.classList.remove('active')
    })
}

function changeLanguage(e) {
    if(e.ctrlKey && e.altKey) {
        if([...keyboard.children][29].classList.contains('caps')) {
            for(let i = 0; i < [...keyboard.children].length; i++){
                if([...keyboard.children][i].innerText.match(/^[А-ЯЁ.{1}]$/)) {
                    [...keyboard.children][i].innerText = engUnshiftedKeys[i]
                    if([...keyboard.children][i].innerText.match(/^[a-zа-яё{1}]$/)){
                        [...keyboard.children][i].innerText = [...keyboard.children][i].innerText.toUpperCase()
                    }      
                } else {
                    [...keyboard.children][i].innerText = ruUnshiftedKeys[i] 
                    if([...keyboard.children][i].innerText.match(/^[а-яё.{1}]$/)){
                        [...keyboard.children][i].innerText = [...keyboard.children][i].innerText.toUpperCase()
                    }
                }
            }
        } else {
            for(let i = 0; i < [...keyboard.children].length; i++){
                if([...keyboard.children][i].innerText !== ruUnshiftedKeys[i]) {
                    [...keyboard.children][i].innerText = ruUnshiftedKeys[i]
                } else {
                    [...keyboard.children][i].innerText = engUnshiftedKeys[i]
                }
            }
        }
    }
}

function enableShift(e) {
    if((e.code === 'ShiftLeft' || e.code === 'ShiftRight') && [...keyboard.children][15].innerText.match(/^[Qq{1}]$/) || e.target.innerText === 'Shift' && [...keyboard.children][15].innerText.match(/^[Qq{1}]$/)) {
         if([...keyboard.children][29].classList.contains('caps')) {
            for(let i = 0; i < [...keyboard.children].length; i++){
                [...keyboard.children][i].innerText = engShiftedKeys[i]
                if([...keyboard.children][i].innerText.match(/^[A-ZА-ЯЁ{1}]$/)){
                    [...keyboard.children][i].innerText = [...keyboard.children][i].innerText.toLowerCase()
                }
            }
        } else {
            for(let i = 0; i < [...keyboard.children].length; i++){
                [...keyboard.children][i].innerText = engShiftedKeys[i]
            }
        }
    }
    else if((e.code === 'ShiftLeft' || e.code === 'ShiftRight') && [...keyboard.children][15].innerText.match(/^[Йй{1}]$/) || e.target.innerText === 'Shift' && [...keyboard.children][15].innerText.match(/^[Йй{1}]$/)) {
        if([...keyboard.children][29].classList.contains('caps')) {
            for(let i = 0; i < [...keyboard.children].length; i++){
                [...keyboard.children][i].innerText = ruShiftedKeys[i]
                if([...keyboard.children][i].innerText.match(/^[A-ZА-ЯЁ{1}]$/)){
                    [...keyboard.children][i].innerText = [...keyboard.children][i].innerText.toLowerCase()
                }
            }
        } else {
            for(let i = 0; i < [...keyboard.children].length; i++){
                [...keyboard.children][i].innerText = ruShiftedKeys[i]
            }
        }
     }
}

function disableShift(e) {
    if((e.code === 'ShiftLeft' || e.code === 'ShiftRight') && [...keyboard.children][15].innerText.match(/^[Qq{1}]$/) || e.target.innerText === 'Shift' && [...keyboard.children][15].innerText.match(/^[Qq{1}]$/) ) {
        if([...keyboard.children][29].classList.contains('caps')) {
            for(let i = 0; i < [...keyboard.children].length; i++){
                [...keyboard.children][i].innerText = engUnshiftedKeys[i]
                if([...keyboard.children][i].innerText.match(/^[a-zа-яё{1}]$/)){
                    [...keyboard.children][i].innerText = [...keyboard.children][i].innerText.toUpperCase()
                }
            }
        } else {
            
            for(let i = 0; i < [...keyboard.children].length; i++){
                [...keyboard.children][i].innerText = engUnshiftedKeys[i]
             }
        }
    }
    else if((e.code === 'ShiftLeft' || e.code === 'ShiftRight') && [...keyboard.children][15].innerText.match(/^[Йй{1}]$/) || e.target.innerText === 'Shift' && [...keyboard.children][15].innerText.match(/^[Йй{1}]$/)) {
        if([...keyboard.children][29].classList.contains('caps')) {
            for(let i = 0; i < [...keyboard.children].length; i++){
                [...keyboard.children][i].innerText = ruUnshiftedKeys[i]
                if([...keyboard.children][i].innerText.match(/^[a-zа-яё{1}]$/)){
                    [...keyboard.children][i].innerText = [...keyboard.children][i].innerText.toUpperCase()
                }
            }
        } else {
            for(let i = 0; i < [...keyboard.children].length; i++){
                [...keyboard.children][i].innerText = ruUnshiftedKeys[i]
            }
        }
    }
}

function enableCapsLock(e) {
    if(e.code === 'CapsLock' || e.target.innerText === 'Caps Lock') {
        for(let i = 0; i < [...keyboard.children].length; i++){
            if([...keyboard.children][i].innerText.match(/^[a-zа-яё{1}]$/)){
                [...keyboard.children][i].innerText = [...keyboard.children][i].innerText.toUpperCase()
            }
        }
    }
}

function disableCapsLock(e) {
    if(e.code === 'CapsLock' && ![...keyboard.children][29].classList.contains('caps') || e.target.innerText === 'Caps Lock' && ![...keyboard.children][29].classList.contains('caps')) {
        for(let i = 0; i < [...keyboard.children].length; i++){
            if([...keyboard.children][i].innerText.match(/^[A-ZА-ЯЁ{1}]$/)){
                [...keyboard.children][i].innerText = [...keyboard.children][i].innerText.toLowerCase()
            }
        }
    }
}

function addKeysClickableBehavior(e) {
    let target = e.target
    if(!target.getAttribute('data-code') || target.innerText === 'Ctrl' || target.innerText === 'Win' || target.innerText === 'Alt') return
    switch(target.innerText) {
        case 'Backspace':
            if(textarea.selectionStart !== 0) {
                textarea.setRangeText('', textarea.selectionStart - 1, textarea.selectionEnd, "end");
                textarea.focus();
            }
            break;
        case 'Del':
            if(textarea.selectionStart !== textarea.value.length) {
                textarea.setRangeText('', textarea.selectionStart, textarea.selectionEnd + 1, "end");
                textarea.focus();
            }
            break;
        case 'Tab':
            textarea.setRangeText('   ', textarea.selectionStart, textarea.selectionEnd, "end");
            textarea.focus();
            break;
        case 'Caps Lock':
            if(target.classList.contains('caps')){
                target.classList.remove('caps')
                disableCapsLock(e)
                return
            }
            target.classList.add('caps')
            enableCapsLock(e)
            break;
        case 'Shift':
            break;
        case 'Enter':
            textarea.value += '\n';
            break;
        case '':
            textarea.setRangeText(' ', textarea.selectionStart, textarea.selectionEnd, "end");
            textarea.focus();
            break;
        default:
            textarea.setRangeText(target.innerText, textarea.selectionStart, textarea.selectionEnd, "end");
            textarea.focus();  
    }
}

function addKeysOnRealKeyboardPressBehavior(e) {
    switch(e.code) {
        case 'Backspace':
            if(textarea.selectionStart !== 0) {
                textarea.setRangeText('', textarea.selectionStart - 1, textarea.selectionEnd, "end");
                textarea.focus();
            }
            break;
        case 'Delete':
            if(textarea.selectionStart !== textarea.value.length) {
                textarea.setRangeText('', textarea.selectionStart, textarea.selectionEnd + 1, "end");
                textarea.focus();
            }
            break;
        case 'Tab':
            textarea.setRangeText('   ', textarea.selectionStart, textarea.selectionEnd, "end");
            textarea.focus();
            break;
        case 'CapsLock':
            break;
        case 'ShiftLeft':
            break;
        case 'ShiftRight':
            break;
        case 'Enter':
            textarea.value += '\n';
            break;
        case 'Space':
            textarea.setRangeText(' ', textarea.selectionStart, textarea.selectionEnd, "end");
            textarea.focus();
            break;
        default:
            [...keyboard.children].forEach(el => {
                if(el.getAttribute('data-code') === e.code && el.getAttribute('data-code').slice(0,7) !== 'Control' && el.getAttribute('data-code').slice(0,3) !== 'Alt' && el.getAttribute('data-code').slice(0,4) !== 'Meta') {
                    textarea.setRangeText(el.innerText, textarea.selectionStart, textarea.selectionEnd, "end");
                    textarea.focus();
                } 
            })   
    }
}

function focusOnForm() {
    document.querySelector('.textarea').focus()
}

keyboard.onmousedown = () => false
document.addEventListener('keydown', e => {
    e.preventDefault()
    addActiveState(e)
    changeLanguage(e)
    enableShift(e)
    enableCapsLock(e)
    disableCapsLock(e)
    focusOnForm()
    addKeysOnRealKeyboardPressBehavior(e)
})
document.addEventListener('keyup', e => {
    disableShift(e)
    removeActiveState(e)
})
document.addEventListener('click', addKeysClickableBehavior)
document.addEventListener('mousedown', e => {
    if (e.target.innerText !== 'Shift') return
    enableShift(e)
}) 
document.addEventListener('mouseup', e => {
    if (e.target.innerText !== 'Shift') return
    disableShift(e)
})

window.onload = () => {
    let keysStorage = localStorage.getItem('keysLang');

    if(keysStorage[0] === engUnshiftedKeys[0]) {
        for(let i = 0; i < [...keyboard.children].length; i++){
            [...keyboard.children][i].innerText = engUnshiftedKeys[i]
            } 
    } else {
        for(let i = 0; i < [...keyboard.children].length; i++){
            [...keyboard.children][i].innerText = ruUnshiftedKeys[i]
        } 
    }
}

window.addEventListener("unload", () => {
    let keysStorage = [];
    [...keyboard.children].forEach(key => keysStorage.push(key.innerText))
    localStorage.setItem('keysLang', keysStorage)
})
