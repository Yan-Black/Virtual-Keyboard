const keyCodes = [
    "Backquote", "Digit1", "Digit2", "Digit3", 
    "Digit4", "Digit5", "Digit6", "Digit7", "Digit8", 
    "Digit9", "Digit0", "Minus", "Equal", "Backspace", 
    "Tab", "KeyQ", "KeyW", "KeyE", "KeyR", "KeyT", "KeyY", 
    "KeyU", "KeyI", "KeyO", "KeyP", "BracketLeft", "BracketRight",
    "Enter", "CapsLock", "KeyA", "KeyS", "KeyD", "KeyF", "KeyG", 
    "KeyH", "KeyJ", "KeyK", "KeyL", "Semicolon", "Quote", 
    "Backslash", "ShiftLeft", "KeyZ", "KeyX", "KeyC", 
    "KeyV", "KeyB", "KeyN", "KeyM", "Comma", "Period", 
    "Slash", "ShiftRight", "ControlLeft", "MetaLeft", 
    "AltLeft", "Space", "AltRight", "ControlRight"
    ]

const engUnshiftedKeys = [
 '`','1','2','3','4','5','6','7','8','9','0','-','=','Backspace',
 'Tab','q','w','e','r','t','y','u','i','o','p','[',']','\\','Del',
 'Caps Lock','a','s','d','f','g','h','j','k','l',';',"'",'Enter',
 'Shift','z','x','c','v','b','n','m',',','.','/','↑','Shift',
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

    init(arr) {

        const keyboard = document.createElement('div'),
              br       = document.createElement('br')
              keyboard.classList.add('keyboard')

        for(let i = 0; i < arr.length; i++) {
            switch (arr[i]) {
                case 'Backspace':
                    keyboard.append(specButton.createButton(arr[i]), br);
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

let keyboard = new Keyboard;

document.body.append(keyboard.init(engUnshiftedKeys))

//console.log(keyboard.init(keyCodes));

