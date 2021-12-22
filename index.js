// Your code here
// first lab
function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`
}

//second lab
function mondayWork(activity = "go to the office") {
    return `This Monday, I will ${activity}.`
}

//third lab
function wrapAdjective(symbol = "*") {
    return function(adj = "special") {
        return `You are ${symbol}${adj + symbol}!`
    }
    const encouragingPromptFunction = wrapAdjective("!!!")
}

//rest of labs
let Calculator = {
    add: function(a, b) {
        return a + b
    },
    subtract: function(a, b) {
        return a - b
    },
    multiply: function(a, b) {
        return a * b
    },
    divide: function(a, b) {
        return a / b
    }
}

function actionApplyer(start, array) {
    let a = start
    for (let i = 0; i < array.length; i++) {
        a = array[i](a)
    }
    return a
}