describe("romanNumeral", function() {
  it('can convert years that are multiples of 1000', function() {
    expect(romanNumeral(3000)).to.eql(["M", "M", "M"]);
  });

  it('can convert years that are multiples of 500', function() {
    expect(romanNumeral(3500)).to.eql(["M", "M", "M", "D"]);
  });

  it('can convert years that are multiples of 100', function(){
    expect(romanNumeral(3600)).to.eql(['M', 'M', 'M', 'D', 'C'])
  });

  it('can convert years that are multiples of 50', function(){
    expect(romanNumeral(3650)).to.eql(['M', 'M', 'M', 'D', 'C', 'L'])
  });

  it('can convert years that are multiples of 10', function(){
    expect(romanNumeral(3660)).to.eql(['M', 'M', 'M', 'D', 'C', 'L', 'X'])
  });

  it('can convert years that are multiples of 5', function(){
    expect(romanNumeral(3665)).to.eql(['M', 'M', 'M', 'D', 'C', 'L', 'X', 'V'])
  });

  it('can convert years that are multiples of 1', function(){
    expect(romanNumeral(3666)).to.eql(['M', 'M', 'M', 'D', 'C', 'L', 'X', 'V', 'I'])
  });

  it('accounts for 900', function() {
    expect(romanNumeral(1900)).to.eql(['M', 'CM'])
  });

  it('accounts for 400', function() {
    expect(romanNumeral(1449)).to.eql(['M', 'CD', 'XL', 'IX'])
  });


  it('accounts for 40', function() {
    expect(romanNumeral(1140)).to.eql(['M', 'C', 'XL'])
  });

  it('accounts for 90', function() {
    expect(romanNumeral(1190)).to.eql(['M', 'C', 'XC'])
  });

  it('accounts for 9', function() {
    expect(romanNumeral(1149)).to.eql(['M', 'C', 'XL', 'IX'])
  });

  it('accounts for 4', function() {
    expect(romanNumeral(1154)).to.eql(['M', 'C', 'L', 'IV'])
  });

});
