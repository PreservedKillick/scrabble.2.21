describe("letterValues", function() {
  it("values the letters 'A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T' each as 1", function() {
    letterValues("L").should.equal(1);
  });

  it ("should also be 1 for lower case letters", function() {
    letterValues("u").should.equal(1);
  });

  it("values 'd' and 'g' as 2 points each", function() {
    letterValues('d').should.equal(2);
  });

  it("values 'b','c','m','p' as 3 points each", function () {
    letterValues('p').should.equal(3);
  });

  it("values 'F','H','V','W','Y', as 4 points each", function() {
    letterValues('v').should.equal(4);
  });

  it("values 'K' 5 points", function() {
    letterValues('K').should.equal(5);
  });
});


describe("scrabble", function() {
  it("should add up the letter values", function() {
    scrabble("dog").should.equal(5);
  });
});
