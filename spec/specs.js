describe('fibonacci', function() {
   it('return false with numbers less than 1 ', function() {
    fibonacci("0").should.equal(false);
  });

  it('fibonacci 1 is 0 ', function() {
    fibonacci("1").should.equal(0);
  });

  it('fibonacci 2 is 1 ', function() {
    fibonacci("2").should.equal(1);
  });

  it('fibonacci of any number greater than 2 is the sum of previous 2 fs ', function() {
    fibonacci("3").should.equal(1);
  });

  it('fibonacci of any number greater than 2 is the sum of previous 2 fs ', function() {
    fibonacci("6").should.equal(5);
  });
});


