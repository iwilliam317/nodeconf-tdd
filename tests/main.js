let calculos = require('../');

if(calculos.soma(2,2) !== 4){
  throw new Error('O teste não passou..');
}