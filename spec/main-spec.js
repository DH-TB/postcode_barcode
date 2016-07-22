const main = require('../main/main.js');
const fixture = require('./fixture.js');

describe('print', ()=> {

    const inputs = 450561234;

    it('can work', ()=> {
        const barcodes = fixture.loadBarcodes();

        const expectText = '|:|::|:|:|:||::::|:|::||:::::||::|:|::||::|::|||:::|';

        spyOn(console, 'log');

        main.print(inputs, barcodes);

        expect(console.log).toHaveBeenCalledWith(expectText);
    });
});

describe('buildInput', ()=> {
    const input1 = 45056;
    const input2 = 450561234;
    // const input3 = 45056-1234;
    const input4 = 450561;

    it('build input', ()=> {
        const expectText1 = ['4', '5', '0', '5', '6'];
        const expectText2 = ['4', '5', '0', '5', '6', '1', '2', '3', '4'];

        expect(main.buildInputs(input1)).toEqual(expectText1);
        expect(main.buildInputs(input2)).toEqual(expectText2);
        // expect(main.buildInputs(input3)).toEqual(expectText2);
        expect(main.buildInputs(input4)).toEqual(false);
    });
});

describe('buildPostCode', ()=> {
    const postCode1 = ['4', '5', '0', '5', '6'];
    const postCode2 = ['4', '5', '0', '5', '6', '1', '2', '3', '4'];

    it('build Post Code', ()=> {
        
        const expectText1 = [4,5,0,5,6,0];
        const expectText2 = [4,5,0,5,6,1,2,3,4,0];

        expect(main.buildPostCode(postCode1)).toEqual(expectText1);
        expect(main.buildPostCode(postCode2)).toEqual(expectText2);
    });
});

describe('buildCode', ()=> {
   
    const postCode1 = [4,5,0,5,6,0];
    const postCode2 = [4,5,0,5,6,1,2,3,4,0];

    
    it('build Code', ()=> {
        const barcodes = fixture.loadBarcodes();

        const expectText1 = ':|::|:|:|:||::::|:|::||::||:::';
        const expectText2 = ':|::|:|:|:||::::|:|::||:::::||::|:|::||::|::|||:::';
        expect(main.buildCode(postCode1, barcodes)).toEqual(expectText1);
        expect(main.buildCode(postCode2, barcodes)).toEqual(expectText2);

      
    })
});

describe('buildCodeText', ()=> {
    const code1 = ':|::|:|:|:||::::|:|::||::||:::';

    const code2 = ':|::|:|:|:||::::|:|::||:::::||::|:|::||::|::|||:::';
    it('print code text', ()=> {

        const expectText1 = '|:|::|:|:|:||::::|:|::||::||:::|';

        const expectText2 = '|:|::|:|:|:||::::|:|::||:::::||::|:|::||::|::|||:::|';

        expect(main.buildCodeText(code1)).toEqual(expectText1);
        expect(main.buildCodeText(code2)).toEqual(expectText2);
    });

});