// if(5<3){
//     console.log("This is a true statement");
// }
// else if(4>2){
//     console.log("The second statement is true");
// }
// else {
//     console.log("Finally the third statement");
// }
function difference(firstNumber, secondNumber){
    if(firstNumber>secondNumber){
        return (firstNumber-secondNumber)
    }else if(firstNumber<secondNumber){
        return secondNumber-firstNumber
    }
}
// console.log(difference(5, 10))
function division(firstNumber, secondNumber){
    if(firstNumber>secondNumber){
        return(firstNumber/secondNumber)
    }else if(firstNumber<secondNumber){
        return(secondNumber/firstNumber)
    }
}
// console.log(division(15,3))

//for loop
// for(let x = 0; x<5; x++){
//     console.log("Loop # " + x);
// }

//while loop

// let x = 0;
// while(x<5){
//     console.log("While loop # " + x);
//     x++;
// }
// for(let x=2; x<10; x=x*2){
//     console.log("loop #" + x)
// }

// // x++ => x=x+1

// let y=2;
// while(y<10){
    
//     console.log("loop #" + y);
//     y=y*2
//}

let blue = 'blue'
let green = 'green'
let red = 'red'

let selectedColors = ['blue', 'green', 'red', 5]

//Array's have index's 
//Accesing a specific value of an array => selectedColors[0] = blue
console.log(selectedColors.length)


function loopfunction(){
   console.log(selectedColors[0])
   console.log(selectedColors[1])
}

loopfunction()

//Requirements
/*
    1) The function needs to take in an array parameter
    2) If the array has a length of 0 then print out a statement saying the array has a length of 0
    3) If the array has a length of 1 or then print out every value of the array
*/ 
//Don't need a return statement inside your statement