import libraryName from './index';

describe('libraryName', () => {
  it('should say "Hello world!"', () => {
    expect(libraryName('Hello world!')).to.be('Hello world!');
  });
});
