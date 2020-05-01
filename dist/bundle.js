!function(e){var t={};function n(a){if(t[a])return t[a].exports;var c=t[a]={i:a,l:!1,exports:{}};return e[a].call(c.exports,c,c.exports,n),c.l=!0,c.exports}n.m=e,n.c=t,n.d=function(e,t,a){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var c in e)n.d(a,c,function(t){return e[t]}.bind(null,c));return a},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);const a=["Backquote","Digit1","Digit2","Digit3","Digit4","Digit5","Digit6","Digit7","Digit8","Digit9","Digit0","Minus","Equal","Backspace","Tab","KeyQ","KeyW","KeyE","KeyR","KeyT","KeyY","KeyU","KeyI","KeyO","KeyP","BracketLeft","BracketRight","Backslash","Delete","CapsLock","KeyA","KeyS","KeyD","KeyF","KeyG","KeyH","KeyJ","KeyK","KeyL","Semicolon","Quote","Enter","ShiftLeft","KeyZ","KeyX","KeyC","KeyV","KeyB","KeyN","KeyM","Comma","Period","Slash","ArrowUp","ShiftRight","ControlLeft","MetaLeft","AltLeft","Space","AltRight","ArrowLeft","ArrowDown","ArrowRight","ControlRight"],c=["`","1","2","3","4","5","6","7","8","9","0","-","=","Backspace","Tab","q","w","e","r","t","y","u","i","o","p","[","]","\\","Del","Caps Lock","a","s","d","f","g","h","j","k","l",";","'","Enter","Shift","z","x","c","v","b","n","m",",",".","/","↑","Shift","Ctrl","Win","Alt","","Alt","←","↓","→","Ctrl"],i=["~","!","@","#","$","%","^","&","*","(",")","_","+","Backspace","Tab","Q","W","E","R","T","Y","U","I","O","P","{","}","|","Del","Caps Lock","A","S","D","F","G","H","J","K","L",":",'"',"Enter","Shift","Z","X","C","V","B","N","M","<",">","?","↑","Shift","Ctrl","Win","Alt","","Alt","←","↓","→","Ctrl"],s=["ё","1","2","3","4","5","6","7","8","9","0","-","=","Backspace","Tab","й","ц","у","к","е","н","г","ш","щ","з","х","ъ","\\","Del","Caps Lock","ф","ы","в","а","п","р","о","л","д","ж","э","Enter","Shift","я","ч","с","м","и","т","ь","б","ю",".","↑","Shift","Ctrl","Win","Alt","","Alt","←","↓","→","Ctrl"],r=["Ё","!",'"',"№",";","%",":","?","*","(",")","_","+","Backspace","Tab","Й","Ц","У","К","Е","Н","Г","Ш","Щ","З","Х","Ъ","/","Del","Caps Lock","Ф","Ы","В","А","П","Р","О","Л","Д","Ж","Э","Enter","Shift","Я","Ч","С","М","И","Т","Ь","Б","Ю",",","↑","Shift","Ctrl","Win","Alt","","Alt","←","↓","→","Ctrl"];class o{constructor(e){this.type=e}createButton(e){const t=document.createElement("button");switch(t.innerText=e,t.classList.add("keyboard__button"),this.type){case"spec":t.classList.add("button-special");break;case"long":t.classList.add("button-long");break;default:t.classList.add("keyboard__button")}return t}}const l=new o("char"),d=new o("spec"),f=new o("long");const u=new class{constructor(e){this.language=e}init(){let e=[];e="eng"===this.language?c:s;const t=document.createElement("div");t.classList.add("keyboard");for(let n=0;n<e.length;n++)switch(e[n]){case"Backspace":case"Caps Lock":case"Shift":case"Enter":t.append(d.createButton(e[n]));break;case"":t.append(f.createButton(e[n]));break;default:t.append(l.createButton(e[n]))}return t}}("eng").init();for(let e=0;e<a.length;e++)u.children[e].setAttribute("data-code",a[e]);const h=document.createElement("textarea");h.classList.add("textarea");const g=document.createElement("p");g.classList.add("info"),g.innerText='Клавиатура создана в операционной системе Windows \n Для переключения языка комбинация: "левые Ctrl + Alt"',document.body.append(h,u,g),document.querySelector(".textarea").autofocus=!0;const T=[...u.children],p=T[29];const x=T[15],S=/^[A-ZА-ЯЁ{1}]$/,L=/^[a-zа-яё{1}]$/,b=/^[Йй{1}]$/,k=/^[Qq{1}]$/;function y(e){if(!x.innerText.match(k)||"ShiftLeft"!==e.code&&"ShiftRight"!==e.code&&"Shift"!==e.target.innerText){if(x.innerText.match(b)&&("ShiftLeft"===e.code||"ShiftRight"===e.code||"Shift"===e.target.innerText))if(p.classList.contains("caps"))for(let e=0;e<T.length;e++)T[e].innerText=r[e],T[e].innerText.match(S)&&(T[e].innerText=T[e].innerText.toLowerCase());else for(let e=0;e<T.length;e++)T[e].innerText=r[e]}else if(p.classList.contains("caps"))for(let e=0;e<T.length;e++)T[e].innerText=i[e],T[e].innerText.match(S)&&(T[e].innerText=T[e].innerText.toLowerCase());else for(let e=0;e<T.length;e++)T[e].innerText=i[e]}function m(e){if(!x.innerText.match(k)||"ShiftLeft"!==e.code&&"ShiftRight"!==e.code&&"Shift"!==e.target.innerText){if(x.innerText.match(b)&&("ShiftLeft"===e.code||"ShiftRight"===e.code||"Shift"===e.target.innerText))if(p.classList.contains("caps"))for(let e=0;e<T.length;e++)T[e].innerText=s[e],T[e].innerText.match(L)&&(T[e].innerText=T[e].innerText.toUpperCase());else for(let e=0;e<T.length;e++)T[e].innerText=s[e]}else if(p.classList.contains("caps"))for(let e=0;e<T.length;e++)T[e].innerText=c[e],T[e].innerText.match(L)&&(T[e].innerText=T[e].innerText.toUpperCase());else for(let e=0;e<T.length;e++)T[e].innerText=c[e]}function E(e){if("CapsLock"===e.code||"Caps Lock"===e.target.innerText)for(let e=0;e<T.length;e++)T[e].innerText.match(L)&&(T[e].innerText=T[e].innerText.toUpperCase())}function C(e){if("CapsLock"===e.code&&!p.classList.contains("caps")||"Caps Lock"===e.target.innerText&&!p.classList.contains("caps"))for(let e=0;e<T.length;e++)T[e].innerText.match(S)&&(T[e].innerText=T[e].innerText.toLowerCase())}u.onmousedown=()=>!1,document.addEventListener("keydown",e=>{e.preventDefault(),function(e){T.forEach(t=>{t.getAttribute("data-code")===e.code&&t.classList.add("active"),t.classList.contains("caps")&&"CapsLock"===e.code?t.classList.remove("caps"):"Caps Lock"===t.innerText&&"CapsLock"===e.code&&t.classList.add("caps")})}(e),function(e){if(e.ctrlKey&&e.altKey)if(p.classList.contains("caps"))for(let e=0;e<T.length;e++)T[e].innerText.match(/^[А-ЯЁ.{1}]$/)?(T[e].innerText=c[e],T[e].innerText.match(/^[a-zа-яё{1}]$/)&&(T[e].innerText=T[e].innerText.toUpperCase())):(T[e].innerText=s[e],T[e].innerText.match(/^[а-яё.{1}]$/)&&(T[e].innerText=T[e].innerText.toUpperCase()));else for(let e=0;e<T.length;e++)T[e].innerText!==s[e]?T[e].innerText=s[e]:T[e].innerText=c[e]}(e),y(e),E(e),C(e),document.querySelector(".textarea").focus(),function(e){switch(e.code){case"Backspace":0!==h.selectionStart&&h.selectionStart===h.selectionEnd?(h.setRangeText("",h.selectionStart-1,h.selectionEnd,"end"),h.focus()):(h.selectionStart!==h.selectionEnd||0===h.selectionStart)&&(h.setRangeText("",h.selectionStart,h.selectionEnd,"end"),h.focus());break;case"Delete":h.selectionStart!==h.value.length&&(h.setRangeText("",h.selectionStart,h.selectionEnd+1,"end"),h.focus());break;case"Tab":h.setRangeText("   ",h.selectionStart,h.selectionEnd,"end"),h.focus();break;case"CapsLock":case"ShiftLeft":case"ShiftRight":break;case"Enter":h.value+="\n";break;case"Space":h.setRangeText(" ",h.selectionStart,h.selectionEnd,"end"),h.focus();break;default:T.forEach(t=>{t.getAttribute("data-code")===e.code&&"Control"!==t.getAttribute("data-code").slice(0,7)&&"Alt"!==t.getAttribute("data-code").slice(0,3)&&"Meta"!==t.getAttribute("data-code").slice(0,4)&&(h.setRangeText(t.innerText,h.selectionStart,h.selectionEnd,"end"),h.focus())})}}(e)}),document.addEventListener("keyup",e=>{m(e),function(e){T.forEach(t=>{t.getAttribute("data-code")===e.code&&t.classList.remove("active")})}(e)}),document.addEventListener("click",(function(e){const{target:t}=e;if(t.getAttribute("data-code")&&"Ctrl"!==t.innerText&&"Win"!==t.innerText&&"Alt"!==t.innerText)switch(t.innerText){case"Backspace":0!==h.selectionStart&&h.selectionStart===h.selectionEnd?(h.setRangeText("",h.selectionStart-1,h.selectionEnd,"end"),h.focus()):(h.selectionStart!==h.selectEnd||0===h.selectionStart)&&(h.setRangeText("",h.selectionStart,h.selectionEnd,"end"),h.focus());break;case"Del":h.selectionStart!==h.value.length&&(h.setRangeText("",h.selectionStart,h.selectionEnd+1,"end"),h.focus());break;case"Tab":h.setRangeText("   ",h.selectionStart,h.selectionEnd,"end"),h.focus();break;case"Caps Lock":if(t.classList.contains("caps"))return t.classList.remove("caps"),void C(e);t.classList.add("caps"),E(e);break;case"Shift":break;case"Enter":h.value+="\n";break;case"":h.setRangeText(" ",h.selectionStart,h.selectionEnd,"end"),h.focus();break;default:h.setRangeText(t.innerText,h.selectionStart,h.selectionEnd,"end"),h.focus()}})),document.addEventListener("mousedown",e=>{"Shift"===e.target.innerText&&y(e)}),document.addEventListener("mouseup",e=>{"Shift"===e.target.innerText&&m(e)}),window.onload=()=>{if(localStorage.getItem("keysLang")[0]===c[0])for(let e=0;e<T.length;e++)T[e].innerText=c[e];else for(let e=0;e<T.length;e++)T[e].innerText=s[e]},window.addEventListener("unload",()=>{const e=[];T.forEach(t=>e.push(t.innerText)),localStorage.setItem("keysLang",e)})}]);