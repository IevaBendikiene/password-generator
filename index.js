const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
let passwordLength = 15
let firstPassword = document.getElementById("first-password")
let secondPassword = document.getElementById("second-password")

function getRandomCharacter() {
    let randomChar = Math.floor(Math.random() * characters.length)
    return characters[randomChar]
    
}

function generatePasswords() {
    firstPassword.textContent = ""
    secondPassword.textContent = ""
    for (let i = 0; i < passwordLength; i++) {
        firstPassword.textContent += getRandomCharacter()        
    }
    for (let i = 0; i < passwordLength; i++) {
        secondPassword.textContent += getRandomCharacter()        
    }
}
function textCopy1() {
    //copyText variable get the text content from the element with psw-el1 id
    let copyText = document.getElementById("first-password").textContent   
    //get
    let textCopied = document.getElementById("text-copied")
    //using the browser API we copy the password to clipboard
    navigator.clipboard.writeText(copyText)
    .then(() => {
      // Show the copied message
      textCopied.textContent = "Text Copied!";
      textCopied.style.opacity = 1;
      
      // Fade away the message after 2 seconds
      setTimeout(() => {
        textCopied.style.opacity = 0;
        textCopied.textContent = "";
      }, 700);
    })
    
}

function textCopy2() {
    //copyText variable get the text content from the element with psw-el1 id
    let copyText = document.getElementById("second-password").textContent   
    //get
    let textCopied = document.getElementById("text-copied")
    //using the browser API we copy the password to clipboard
    navigator.clipboard.writeText(copyText)
    .then(() => {
      // Show the copied message
      textCopied.textContent = "Text Copied!";
      textCopied.style.opacity = 1;
      
      // Fade away the message after 2 seconds
      setTimeout(() => {
        textCopied.style.opacity = 0;
        textCopied.textContent = "";
      }, 700);
    })
}
