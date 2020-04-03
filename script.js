
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

const ruUnshiftedKeys = [
    'ё','1','2','3','4','5','6','7','8','9','0','-','=','Backspace',
    'Tab','й','ц','у','к','е','н','г','ш','щ','з','х','ъ','\\','Del',
    'Caps Lock','ф','ы','в','а','п','р','о','л','д','ж',"э",'Enter',
    'Shift','я','ч','с','м','и','т','ь','б','ю','.','↑','Shift',
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
let lang = 'eng';

class Keyboard {
    constructor(language) {
        this.language = language
    }

    init() {
        
        let arr = []
        this.language == 'eng' ? arr = engUnshiftedKeys : arr = ruUnshiftedKeys
        
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

const keysCollection = new Keyboard(lang);

const keyboard = keysCollection.init(engUnshiftedKeys)

      for(let i = 0; i < keyCodes.length; i++){
          keyboard.children[i].setAttribute('data-code', keyCodes[i])
      }

const textarea = document.createElement('textarea')
      textarea.classList.add('textarea')

document.body.append(textarea, keyboard)

function addActiveState(e) {
    [...keyboard.children].forEach(key => {
        if(key.getAttribute('data-code') === e.code) key.classList.add('active') 
    })
}

function removeActiveState(e) {
    [...keyboard.children].forEach(key => {
        if(key.getAttribute('data-code') === e.code) key.classList.remove('active')
    })
}

document.addEventListener('keydown', addActiveState)
document.addEventListener('keyup', removeActiveState)


