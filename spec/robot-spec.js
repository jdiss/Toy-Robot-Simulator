import Robot from '../src/components/robot';
import Table from '../src/components/table'
import  facing from '../src/common/constant';


describe(' robot placing ', () => {
  let table;
  beforeEach(() => {
      table = new Table(5, 5);
  });

  it("PLACE 0,0,NORTH and MOVE should 0,1,NORTH", () => {
    let robot = new Robot(table);
    robot.place(0,0,facing.NORTH);
    robot.move();
    expect(robot.report()).toEqual(`0,1,${facing.NORTH}`);
  });

  it("PLACE 0,0,NORTH and LEFT should 0,0,WEST", () => {
    let robot = new Robot(table);
    robot.place(0,0,facing.NORTH);
    robot.left();
    expect(robot.report()).toEqual(`0,0,${facing.WEST}`);
  });

  it("PLACE 1,2,EAST then MOVE MOVE LEFT MOVE should  3,3,NORTH ", () => {
    let robot = new Robot(table);
    robot.place(1,2,facing.EAST);
    robot.move();
    robot.move();
    robot.left();
    robot.move();
    expect(robot.report()).toEqual(`3,3,${facing.NORTH}`);
  });

});