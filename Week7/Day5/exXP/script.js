let count = 0;
function playTheGame() {
    let num;
    if (confirm('Do u want 2 play Game?')) {
        do {
            num = Number(prompt('enter your number berween 0 and 10: '));
            if (isNaN(num)) {
                alert ('sorry, its not a number, byyyye');
                return;
            }
            else if (num < 0 || num > 10) {
                alert ('sorry, it is not a number in range from 0 to 10, byyyye');
                return;
            }
            else{
                let comp_num = Math.floor(Math.random()*10);
                console.log(comp_num);
                let res = compareNumbers(num, comp_num);
                if (res == true) {
                    return
                } 
            }
        }
        while (count<3)
        if(count >= 3){
            alert ('out of chance')
        }
        // while (isNaN(num) || num < 0 || num > 10);
        // let res = num;
        // let comp_num = Math.floor(Math.random()*10);
        // console.log(comp_num);
        // compareNumbers(num,comp_num);
        // return res;   
    }
    else {
        alert ('ok. no pb, byyyye'); 
    }
}

// Bonus
// function playTheGame() {
//     let num;
//     if (confirm('Do u want 2 play Game?')) {
//         do {
//             num = Number(prompt('enter your number from 0 to 10: '));
//         }
//         while (isNaN(num) || num < 0 || num > 10);
//         let res = num;
//             let comp_num = Math.floor(Math.random()*10);
//             console.log(comp_num);
// compareNumbers(num,comp_num);
//         return res;
//     }
//     else {
//         alert ('ok. no pb'); 
//     }
// }

function compareNumbers(userNumber, computerNumber) {
        if (userNumber == computerNumber) {
            alert ('YOU WIN!');
            return true;
        }
        else if (userNumber > computerNumber) {
            alert('your number is bigger than computer number, try again');
            count++
            return false
        }
        else {
            alert('your number is bigger than computer number, try again');
            count++
            return false
        }
}