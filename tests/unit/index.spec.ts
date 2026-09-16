import { SERVICE_NAME } from '../../src/index';

describe('myvercel-frontend', () => {
  it('should export SERVICE_NAME', () => {
    expect(SERVICE_NAME).toBe('myvercel-frontend');
  });
});