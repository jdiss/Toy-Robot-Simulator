import Robot from '../src/components/robot';
import Table from '../src/components/table'
import  Directions from '../src/common/constant';


describe('robot cretion', () => {
  let robot;
  beforeEach(() => {
      robot = new Robot(new Table(5, 5));
  });

  it("Should  PLACE 0,0,NORTH ", () => {
    robot.place(0,0,Directions.NORTH);
    expect(robot.report()).toEqual(`0,0,${Directions.NORTH}`);
  });

  it("Should place  1,4, EAST ", () => {
    robot.place(1,4,Directions.EAST);
    expect(robot.report()).toEqual(`1,4,${Directions.EAST}`);
  });

  it("Should move to   1,2, NORTH ", () => {
    robot.place(1,1,Directions.NORTH);
    robot.move();
    expect(robot.report()).toEqual(`1,2,${Directions.NORTH}`);
  });

});