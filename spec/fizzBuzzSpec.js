describe ('FizzBuzz', function() {

  var fizzBuzz;
  
  beforeEach(function() {
    fizzBuzz = new FizzBuzz();
  });

  describe ('when a number is divisible by 3', function() {
    it ('returns Fizz when a number is divisible by 3', function() {
      expect(fizzBuzz.play(3)).toEqual("Fizz");
     expect(fizzBuzz.play(6)).toEqual("Fizz");
    });
  });

  describe ('when a number is divisible by 5', function() {
    it ('returns Fizz when a number is divisible by 5', function() {
      expect(fizzBuzz.play(5)).toEqual("Buzz");
      expect(fizzBuzz.play(10)).toEqual("Buzz");
    });
  });

  describe ('when a number is divisible by 3 and 5', function() {
    it ('returns Fizz when a number is divisible by 15', function() {
      expect(fizzBuzz.play(15)).toEqual("FizzBuzz");
      expect(fizzBuzz.play(30)).toEqual("FizzBuzz");
    });
  });

  describe ('when a number is not divisible by 3 or 5', function() {
    it ('returns 1 for 1', function() {
      expect(fizzBuzz.play(1)).toEqual(1);
      expect(fizzBuzz.play(4)).toEqual(4);
    });
  });
});
