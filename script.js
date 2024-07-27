const display = document.getElementById("display")

function appendToDisplay(input) {
    display.value += input
}

function ClearDisplay() {
    display.value = ""
}

function Calculate() {
    display.value = eval(display.value)
}


//Things Learned

//Input element is really useful since it allows us to obtain the value with .value 
//The eval function is really useful for this type of projects.
//It is easier to assign the onclick event listener in the html than in JS.
