const generateHashPassword = require('../../src/utils/password.utils');

describe('Generate password cript', () => {
  it('should generate an unique id', async () => {
    const hash = await generateHashPassword.passwordCript('teste');
    console.log(hash);
    expect(hash).toHaveLength(60);
  });
});
