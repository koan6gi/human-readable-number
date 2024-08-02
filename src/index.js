module.exports = function toReadable (number) {
    let result = '';
    let arr0_9 = ['zero', 'one ', 'two ', 'three' , 'four ', 'five ', 'six ', 'seven ', 'eight ', 'nine '];
    let arr10_20 = ['ten ', 'eleven ', 'twelve ', 'thirteen ', 'fourteen ', 'fifteen ', 'sixteen ', 'seventeen ', 'eighteen ', 'nineteen ', 'twenty '];
    let arr30_90 = ['', '', '', 'thirty ', 'forty ', 'fifty ', 'sixty ', 'seventy ', 'eighty ', 'ninety ']
    let a100 = 'hundred';

    if (number == 0) {
        result = arr0_9[0];
        return result;
    }

    let Num100 = Math.floor(number / 100);
    if (Num100 != 0) {
        result += arr0_9[Num100] + a100;
    }

    let Num10Ext = number % 100;

    if (Num10Ext > 9 && Num10Ext < 21) {
        result += arr10_20[Num10Ext -10];
    }
    else {
        let Num10 = Math.floor(Num10Ext / 10);
        if (Num10 != 0) {
            result += arr30_90[Num10];
        }

        let Num1 = Num10Ext % 10;
        if (Num1 != 0) {
            result += arr0_9[Num1];
        }
    }

    return result.trim;

}
