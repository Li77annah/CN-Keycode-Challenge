// Events are normally used in conjunction with functions. The function will not be executed
// before the event occurs.


// adds event to the page
// document.addEventListener registers an event handler
// listen for key being pressed
// parameter is a KeyboardEvent
document.addEventListener("keydown", (event) => {
    // select which elements to target with the keypress event function by id
    // textDisplay is h2 "Press any key"
    let textDisplay = document.getElementById("textDisplay");
    // codeDisplay is event.code
    // code is a property of the Event Object. It returns the code of the key that triggered the event.
    let numCode = document.getElementById("codeDisplay");
    // keyDisplay is event.key
    // key is a property of the Event Object. It returns the key value of the key represented by the event.
    let numKey = document.getElementById("keyDisplay");
    // whichDisplay is event.which
    // which is a property of the Event Object. It returns which mouse button was pressed when the mouse event happened.
    let numWhich  = document.getElementById("whichDisplay");
  
    // function.property
    // calling the function
    let keyDown = event.key;
    let keyCode = event.code;
    let keyWhich = event.which;

// innerHTML is used to set or return the HTML content inside an element.
// template literals allow variables in strings.
// this inserts new text onto the page when a key is pressed
textDisplay.innerHTML = `<p class = "result">${keyDown}</p>`
numKey.innerHTML = `<p class = "pressedBtn"> You pressed ${keyDown}</p>`
numCode.innerHTML = `<p class = "pressedBtn"> You pressed ${keyDown}</p>`
numWhich.innerHTML = `<p class = "pressedBtn"> You pressed ${keyDown}</p>`
})