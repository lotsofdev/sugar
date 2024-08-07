import __sha512 from '../sha512.js';

describe('shared.crypto.base64', () => {
  test('Encrypt', () => {
    const res = __sha512.encrypt('hello world');
    expect(res).toBe(
      '309ecc489c12d6eb4cc40f50c902f2b4d0ed77ee511a7c7a9bcd3ca86d4cd86f989dd35bc5ff499670da34255b45b0cfd830e81f605dcf7dc5542e93ae9cd76f',
    );
  });
  test('Decrypt', () => {
    const res = __sha512.decrypt(
      '309ecc489c12d6eb4cc40f50c902f2b4d0ed77ee511a7c7a9bcd3ca86d4cd86f989dd35bc5ff499670da34255b45b0cfd830e81f605dcf7dc5542e93ae9cd76f',
    );
    expect(res).toBe('hello world');
  });
});
