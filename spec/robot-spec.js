import Robot from '../src/components/robot';

describe('Warrior Unit Test', () => {
  it('should return I am Robot', () => {
    expect(Robot()).toBe('I am Robot');
  });
});