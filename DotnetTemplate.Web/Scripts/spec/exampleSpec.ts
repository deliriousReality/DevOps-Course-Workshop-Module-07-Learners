import { functionOne, functionTwo } from '../home/example';

describe('Example', () => {
  it('can run functionOne', () => {
    // Given
    const one = 1;

    // When
    functionOne();
    functionTwo();

    // Then
    expect(1).toEqual(one);
  });
});
