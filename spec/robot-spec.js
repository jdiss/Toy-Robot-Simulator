import Robot from '../src/components/robot';
import Table from '../src/components/table'


describe('robot cretion', () => {
  let robot;
  
  beforeEach(() => {
      robot = new Robot(new Table(5, 5));
      robot.place(1,1,'WEST');
  });

  it("Should place  1,1, WEST ", () => {
    expect(robot.report()).toEqual('1,1,WEST');
  });
});