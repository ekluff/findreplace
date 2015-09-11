describe("replaceAll", function() {
  it('it takes user input of a string', function() {
    expect("stuff").to.equal("stuff");
  });

  it('finds all occurences of a substring and replaces with a different substring', function() {
    expect(replaceAll("stuff things stuff", "stuff", "tacos")).to.equal("tacos things tacos")
  });
});
