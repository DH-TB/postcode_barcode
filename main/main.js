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
    const input = inputs.toString().replace('-','').split('');

    const length = input.length;
    if ((length == 5) || (length == 9)) {
        return input;
    }
    else {
        return false;
    }

}

function buildPostCode(postCodes) {

    const postCode = postCodes.map(postCode=>Number(postCode));
    const sum = postCode.reduce((a, b) => (a + b));
    postCode.push((10 - sum % 10) % 10);

    return postCode;
}

function buildCode(postCodes, barcodes) {
    return postCodes.map(postCode => barcodes[postCode]).join('');
}

function buildCodeText(codes) {

    return `|${codes}|`;
}

module.exports = {
    print: print,
    buildInputs: buildInputs,
    buildPostCode: buildPostCode,
    buildCode: buildCode,
    buildCodeText: buildCodeText
};