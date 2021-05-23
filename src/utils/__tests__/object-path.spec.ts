import { objectPath } from '../object-path';

describe('objectPath helper', () => {
  it('Simple path', () => {
    const data = {
      name: 'Leo',
    };

    const result = objectPath(data, 'name');

    expect(result).toBe('Leo');
  });
  it('Path with dots', () => {
    const data = {
      name: {
        nic: {
          short: 'Mike',
        },
      },
    };

    const result = objectPath(data, 'name.nic.short');

    expect(result).toBe('Mike');
  });
});
