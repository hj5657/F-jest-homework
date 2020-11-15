export default {
  get: jest.fn(() => {
    return Promise.resolve({ data: { name: 'hj' } });
  }),
  post: jest.fn(() => {
    return Promise.resolve({ data: { name: 'hj' } });
  }),
};
