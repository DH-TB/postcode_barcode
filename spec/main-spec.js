const main = require('../main/main.js');
const fixture = require('fixture.js');

describe('print',()=>{
    
    const inputs = 45056-1234;
    
   it('can work',()=>{

       const expectText = '|:|::|:|:|:||::::|:|::||:::::||::|:|::||::|::|||:::|';

       expect(main.print(inputs)).toEqual(expectText);
   });
});