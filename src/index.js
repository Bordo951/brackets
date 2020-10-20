module.exports = function check(str, bracketsConfig) {
    let bracketsCouple = [],
        tempString,
        processString = true;

    if (str.length % 2 !==0) {
        return false;
    }

    for (let i = 0; i < bracketsConfig.length; i++) {
        bracketsCouple.push(bracketsConfig[i][0] + bracketsConfig[i][1]);
    }

    while (processString) {
        tempString = str;
        for (let j = 0; j <= bracketsCouple.length; j++) {
            str = str.replace(bracketsCouple[j], '');
        }

        if (tempString === str || str.length === 0) {
            processString = false;
        }
    }

    return !str.length;
}
