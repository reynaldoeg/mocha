var assert = require("assert");

describe('Operaciones', function(){

  var a,b;
  beforeEach(function(){
    a=4;
    b=2;
c=5;
  });

  describe('Funciones', function(){

    it('suma', function(){
      assert.equal(a+b,6);
    });

    it('resta',function(){
      assert.equal(a-b,2);
    });

it('producto',function(){
  assert.equal(a*b,8);
});

  });

});
