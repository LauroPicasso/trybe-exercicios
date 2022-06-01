const uppercase = (str, callback) => {
  setTimeout(() => {
    callback(str.toUpperCase());
  }, 500);
};

it('uppercase "test" to equal "TEST"', (done) => {

  uppercase('test', (str) => {
    setTimeout(() => {
      try {
        expect(str).toBe('TEST');
        done();
      } catch (error) {
        done(error);
      }
    });
  });
});
