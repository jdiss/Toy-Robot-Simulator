
# Toy Robot Simulator

The application is a simulation of a toy robot moving on a square tabletop, of dimensions 5
units x 5 units. There are no other obstructions on the table surface. The robot is free to
roam around the surface of the table, but must be prevented from falling to destruction. Any
movement that would result in the robot falling from the table must be prevented, however
further valid movement commands must still be allowed.

## Commands

##### 1 - PLACE X,Y,F
```
`PLACE` will put the toy robot on the table in position `X,Y` and facing (F) `NORTH`,
`SOUTH`, `EAST` or `WEST`.
The origin (0,0) can be considered to be the south west most corner.
The first valid command to the robot is a `PLACE` command, after that, any
sequence of commands may be issued, in any order, including another `PLACE`
command
The application should discard all commands in the sequence until a valid `PLACE`
command has been executed.
```
##### 2 - MOVE
 ```
 `MOVE` will move the toy robot one unit forward in the direction it is currently facing.
 ```

##### 3 - LEFT
##### 4 - RIGHT
 ```
`LEFT` and `RIGHT` will rotate the robot 90 degrees in the specified direction without
changing the position of the robot.
 ```
##### 5 - REPORT
```
`REPORT` will announce the `X`,`Y` and `F` of the robot
```

```
This can be in any form, but standard output is sufficient.A robot that is not on the table can choose the ignore the `MOVE`, `LEFT`, `RIGHT`and `REPORT` commands.
```
```
Input can be from a file, or from standard input.
```


##### Example

```
PLACE 0,0,NORTH
MOVE
REPORT
> 0,1,NORTH
```
```
PLACE 0,0,NORTH
LEFT
REPORT
> 0,0,WEST
```

```
PLACE 1,2,EAST
MOVE
MOVE
LEFT
MOVE
REPORT
> 3,3,NORTH
```