import Robot from '../src/components/robot';
import Table from '../src/components/table'
import  Directions from '../src/common/constant';


describe(' robot placing ', () => {
  let table;
  beforeEach(() => {
      table = new Table(5, 5);
  });

  it("PLACE 0,0,NORTH and MOVE should 0,1,NORTH", () => {
    let robot = new Robot(table);
    robot.place(0,0,Directions.NORTH);
    robot.move();
    expect(robot.report()).toEqual(`0,1,${Directions.NORTH}`);
  });

  it("PLACE 0,0,NORTH and LEFT should 0,0,WEST", () => {
    let robot = new Robot(table);
    robot.place(0,0,Directions.NORTH);
    robot.left();
    expect(robot.report()).toEqual(`0,0,${Directions.WEST}`);
  });

  it("Should move to   1,2, NORTH ", () => {
    let robot = new Robot(table);
    robot.place(1,1,Directions.NORTH);
    
    robot.move();
    
    expect(robot.report()).toEqual(`1,2,${Directions.NORTH}`);
  });

});