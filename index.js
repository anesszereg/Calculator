function addToScreen(value) {
    const screen = document.getElementById('result');


// add the . only once

    if (value === '.' && screen.value.includes('.') ) {
        return null;
    }else if(value === '+'&& screen.value.includes('+'))
    {
        return null;
    }

    if(screen.value === '0' && value !== '.' ) {
    screen.value = value;
    }
    else {
        screen.value += value;
    }

    
}

function deleteFromScreen() {
    const screen = document.getElementById('result');
    
    screen.value = screen.value.slice(0, -1);
    if (screen.value === '') {
        screen.value = '0';
    }
}

// using split :
// function deleteFromScreen() {
//     const screen = document.getElementById('result');
//     const screenValue = screen.value;
//     const newValue = screenValue.split('').splice(0, -1).join('');
//     screen.value = newValue;
//     if (screen.value === '') {
//         screen.value = '0';
//     }

// }





function clearScreen() {
    document.getElementById('result').value = '0';
}

function calculate() {
    const expression = document.getElementById('result').value;
    const result   =    eval(expression );
    document.getElementById('result').value = result;


    // error handling
    if (result === Infinity) {
        document.getElementById('result').value = 'Error';
    }
    if (result === -Infinity) {
        document.getElementById('result').value = 'Error';
    }
    if (isNaN(result)) {
        document.getElementById('result').value = 'Error';
    }


}





