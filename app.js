const plusBt = document.getElementById('plus')
const minusBt = document.getElementById('minus')
const multiplyBt = document.getElementById('multiply')
const shareBt = document.getElementById('share')
const submitBt = document.getElementById('submit')
const resultBt = document.getElementById('result')
const in1 = document.getElementById('input1')
const in2 = document.getElementById('input2')
let actionBt = '+'

plusBt.onclick= function(){actionBt = '+'}
minusBt.onclick = function(){actionBt = '-'}
multiplyBt.onclick = function(){actionBt = '*'}
shareBt.onclick = function(){actionBt = '/'}

function disign(a){
    resultBt.style.color = a > 0 ? 'green': 'red'
}

function calculator(input1, input2, actionBt){
    if(actionBt == '+'){return Number(input1.value) + Number(input2.value)}
    else if(actionBt == '-'){return Number(input1.value) - Number(input2.value)}
    else if(actionBt == '*'){return Number(input1.value) * Number(input2.value)}
    else if(actionBt == '/'){return Number(input1.value) / Number(input2.value)}
}

submitBt.onclick = function(){
    const resault=(calculator(in1, in2, actionBt))
    disign(resault)
    resultBt.textContent=resault
}



























/* Первый код 

const resulElaement = document.getElementById('result')
const submitBtn = document.getElementById('submit')
const plusBtn = document.getElementById('plus')
const minusBtn = document.getElementById('minus')
const multiplyBtn = document.getElementById('multiply')
const shareBtn = document.getElementById('share')
const input1 = document.getElementById('input1')
const input2 = document.getElementById('input2')
let action = '+'

plusBtn.onclick = function(){action = '+'} 
minusBtn.onclick = function(){action = '-'}
multiplyBtn.onclick = function(){action = '*'}
shareBtn.onclick = function(){action = '/'}
function printResult(a){
    if(a < 0){resulElaement.style.color = 'red'}
    else{resulElaement.style.color = 'green'}
}
function calculator(inp1, inp2, actionBTN){
        if(actionBTN == '+'){return Number(inp1.value) + Number(inp2.value)}
        else if(actionBTN == '-'){return Number(inp1.value) - Number(inp2.value)}
        else if(actionBTN == '*'){return Number(inp1.value) * Number(inp2.value)}
        else if(actionBTN == '/'){return Number(inp1.value) / Number(inp2.value)}
        else{'error'}}
    submitBtn.onclick = function(){const result = calculator(input1, input2, action)
        printResult(result)
    resulElaement.textContent = result}

*/
    


