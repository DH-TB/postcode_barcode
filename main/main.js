const fixture = require('../spec/fixture.js');

function print(inputs) {
    
    const barcodes = fixture.loadBarcodes();

    const input = buildInputs(inputs, barcodes);
    const postCodes = buildPostCode(input);
    const codes = buildCode(postCodes,barcodes);

    const codeText = buildCodeText(codes);
    console.log(codeText);
}

function buildInputs(inputs) {
    const input = inputs.toString().split('');
    const length = input.length;

    if ((length == 5) || (length == 9)) {
        return input;
    }
    else if (length == 10) {
        input.splice(5, 1);
        return input;
    }
    else {
        return false;
    }

}

function cal(postCode) {
    const sum = postCode.reduce((a, b) => (a + b));
    var checkDigit = 0;
    if (!sum % 10) {
        checkDigit = 10 - sum % 10;
    }
    return checkDigit;
}

function buildPostCode(postCodes) {
    const postCode = postCodes.map(postCode=> {
        return Number(postCode)
    });
    var checkDigit = cal(postCode);
    postCode.push(checkDigit);
    return postCode;

}

function buildCode(postCodes, barcodes) {
    return postCodes.map(postCode => barcodes[postCode]);
}

function buildCodeText(codes) {
    codes.push('|');
    codes.unshift('|');
    return codes.join('');
}

module.exports = {
    print: print,
    buildInputs: buildInputs,
    buildPostCode: buildPostCode,
    buildCode: buildCode,
    buildCodeText: buildCodeText
};