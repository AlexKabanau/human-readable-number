module.exports = function toReadable (number) {
    let answer = [];
    let x;

    if (number == 0) {return 'zero'};
    
    // x = Math.trunc(number / 100);
    // console.log(x);

    if (Math.trunc(number / 100) >= 1) {
        x = Math.trunc(number / 100);
        // console.log('первое число ',x);
        switch(x) {
            case 1: answer = answer.concat('one hundred'); break;
            case 2: answer = answer.concat('two hundred'); break;
            case 3: answer = answer.concat('three hundred'); break;
            case 4: answer = answer.concat('four hundred'); break;
            case 5: answer = answer.concat('five hundred'); break;
            case 6: answer = answer.concat('six hundred'); break;
            case 7: answer = answer.concat('seven hundred'); break;
            case 8: answer = answer.concat('eight hundred'); break;
            case 9: answer = answer.concat('nine hundred'); break;
        };
        if (number % 100 > 19) {
            x = Math.trunc((number % 100)/10);
            // console.log('второе число ',x);
            switch(x) {
                case 2: answer = answer.concat('twenty'); break;
                case 3: answer = answer.concat('thirty'); break;
                case 4: answer = answer.concat('forty'); break;
                case 5: answer = answer.concat('fifty'); break;
                case 6: answer = answer.concat('sixty'); break;
                case 7: answer = answer.concat('seventy'); break;
                case 8: answer = answer.concat('eighty'); break;
                case 9: answer = answer.concat('ninety'); break;
            };
            x = number % 10;
            // console.log('третье число ',x);
            switch(x) {
                // case 0: answer = answer.concat(''); break;
                case 1: answer = answer.concat('one'); break;
                case 2: answer = answer.concat('two'); break;
                case 3: answer = answer.concat('three'); break;
                case 4: answer = answer.concat('four'); break;
                case 5: answer = answer.concat('five'); break;
                case 6: answer = answer.concat('six'); break;
                case 7: answer = answer.concat('seven'); break;
                case 8: answer = answer.concat('eight'); break;
                case 9: answer = answer.concat('nine'); break;
            };

        } else {
            x = number % 100;
            // console.log('второе число двузначное',x);
            switch(x) {
                // case 0: answer = answer.concat(''); break;
                case 1: answer = answer.concat('one'); break;
                case 2: answer = answer.concat('two'); break;
                case 3: answer = answer.concat('three'); break;
                case 4: answer = answer.concat('four'); break;
                case 5: answer = answer.concat('five'); break;
                case 6: answer = answer.concat('six'); break;
                case 7: answer = answer.concat('seven'); break;
                case 8: answer = answer.concat('eight'); break;
                case 9: answer = answer.concat('nine'); break;
                case 10: answer = answer.concat('ten'); break;
                case 11: answer = answer.concat('eleven'); break;
                case 12: answer = answer.concat('twelve'); break;
                case 13: answer = answer.concat('thirteen'); break;
                case 14: answer = answer.concat('fourteen'); break;
                case 15: answer = answer.concat('fifteen'); break;
                case 16: answer = answer.concat('sixteen'); break;
                case 17: answer = answer.concat('seventeen'); break;
                case 18: answer = answer.concat('eighteen'); break;
                case 19: answer = answer.concat('nineteen'); break;
            }
        };
    } else if (number % 100 > 19) {
        x = Math.trunc((number % 100)/10);
        // console.log(' первое число О, второе число ',x);
        switch(x) {
            case 2: answer = answer.concat('twenty'); break;
            case 3: answer = answer.concat('thirty'); break;
            case 4: answer = answer.concat('forty'); break;
            case 5: answer = answer.concat('fifty'); break;
            case 6: answer = answer.concat('sixty'); break;
            case 7: answer = answer.concat('seventy'); break;
            case 8: answer = answer.concat('eighty'); break;
            case 9: answer = answer.concat('ninety'); break;
        };
        x = number % 10;
        // console.log('третье число ',x);
        switch(x) {
            // case 0: answer = answer.concat(''); break;
            case 1: answer = answer.concat('one'); break;
            case 2: answer = answer.concat('two'); break;
            case 3: answer = answer.concat('three'); break;
            case 4: answer = answer.concat('four'); break;
            case 5: answer = answer.concat('five'); break;
            case 6: answer = answer.concat('six'); break;
            case 7: answer = answer.concat('seven'); break;
            case 8: answer = answer.concat('eight'); break;
            case 9: answer = answer.concat('nine'); break;
        };

    } else {
        x = number % 100;
        // console.log('двузначное число',x);
        switch(x) {
            // case 0: answer = answer.concat(''); break;
            case 1: answer = answer.concat('one'); break;
            case 2: answer = answer.concat('two'); break;
            case 3: answer = answer.concat('three'); break;
            case 4: answer = answer.concat('four'); break;
            case 5: answer = answer.concat('five'); break;
            case 6: answer = answer.concat('six'); break;
            case 7: answer = answer.concat('seven'); break;
            case 8: answer = answer.concat('eight'); break;
            case 9: answer = answer.concat('nine'); break;
            case 10: answer = answer.concat('ten'); break;
            case 11: answer = answer.concat('eleven'); break;
            case 12: answer = answer.concat('twelve'); break;
            case 13: answer = answer.concat('thirteen'); break;
            case 14: answer = answer.concat('fourteen'); break;
            case 15: answer = answer.concat('fifteen'); break;
            case 16: answer = answer.concat('sixteen'); break;
            case 17: answer = answer.concat('seventeen'); break;
            case 18: answer = answer.concat('eighteen'); break;
            case 19: answer = answer.concat('nineteen'); break;
        }
    };
    
    return answer.join(' ');
}
