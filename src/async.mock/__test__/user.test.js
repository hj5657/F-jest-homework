import { register } from '../user';
import { verifyUsername } from '../verify';

jest.mock('../verify');
jest.mock('axios');

describe('register', () => {
  test('should post user when validated', async () => {
    // TODO 19: add test here
    const result = await register('hj', 123456);
    expect(result).toEqual({ name: 'hj' });
  });

  test('should reject with Error when username is invalid', () => {
    // TODO 20: add test here
    verifyUsername.mockImplementation(() => false);
    expect(register('hj', 123456)).rejects.toThrowError(
      new Error('wrong username or password')
    );
  });
});
