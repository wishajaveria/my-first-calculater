function getNumber(num) {
    let input = document.querySelector('input');
    switch (num) {
        case 1:
            input.value += '1';
            break;
        case 2:
            input.value += '2';
            break;
        case 3:
            input.value += '3';
            break;
        case 4:
            input.value += '4';
            break;
        case 5:
            input.value += '5';
            break;
        case 6:
            input.value += '6';
            break;
        case 7:
            input.value += '7';
            break;
        case 8:
            input.value += '8';
            break;
        case 9:
            input.value += '9';
            break;
        case 0:
            input.value += '0';
            break;
    }
}
// get the mathematical operends sign
function getOperend(operend) {
    let input = document.querySelector('input');
    switch (operend) {
        case '+':
            input.value += '+';
            break;
        case '-':
            input.value += '-';
            break;
        case 'x':
            input.value += '*';
            break;
        case '/':
            input.value += '/';
            break;
        case '+/-':
            input.value += '-' + input.value;
    }
}
// clear the screen
function clearScreen() {
    document.querySelector('#input').value = "";
    document.querySelector('#answer').value = "";
}
// then apply backspace funtion
function backspace(){
    let input = document.querySelector('input');
    let x = input.value;
    if(x. length > 0){
        x = x.substring(0, x.length-1);// remove the last character in input
        input.value = x;
    }
}
function compute(){
    let input_var = document.querySelector('#input');
    ans = Math.floor(+eval(input_var.value));
    document.querySelector('#answer').value = '=' + ans;

}

let i= 0;
function brackets(){
    let input = document.querySelector('input');
    if(i== 0){
        input.value += '(';
        i = 1;
    }else{
        if(i== 1){
            input.value += ')';
            i = 0;
        }

    }
}