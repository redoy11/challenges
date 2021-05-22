/* eslint-disable @typescript-eslint/no-explicit-any */

import { GET, POST, requestService } from '../requests';

const fixture = {
  id: 2,
  name: 'Habitat for Humanity Thailand',
  image: 'habitat-for-humanity-thailand.jpg',
  currency: 'THB',
};

describe('utils/requests', () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  it('get request working correctly', async () => {
    (global as any).fetch = jest.fn(() => {
      return Promise.resolve(
        Promise.resolve({
          json: () => Promise.resolve(fixture),
          ok: true,
        })
      );
    });
    const value = await requestService(GET, '/test_endpoint', {});
    expect(fetch).toHaveBeenCalledTimes(1);
    expect(value).toEqual(fixture);
  });

  it('post request working correctly', async () => {
    (global as any).fetch = jest.fn(() => {
      return Promise.resolve(
        Promise.resolve({
          json: () => Promise.resolve(fixture),
          ok: true,
        })
      );
    });
    const value = await requestService(POST, '/test_endpoint', {});
    expect(fetch).toHaveBeenCalledTimes(1);
    expect(value).toEqual(fixture);
  });
});
