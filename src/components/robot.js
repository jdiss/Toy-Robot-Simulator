import  facing from '../common/constant';
import { checkNumber,chekString } from '../common/utils';

class Robot {
	constructor(table) {
        this.table = table;
        this._positionX = null;
        this._positionY = null;
        this._facing = null;

	}

	isPlace() {
		if (this._positionX == null || this._positionY == null || this._facing == null) {
			throw new Error('No Place in table');
        }
        return true;
	}

	move() {
		switch (this._facing) {
			case facing.NORTH:
				if (this._positionY < this.table.maxPositionY) {
					this._positionY++;
				}
				break;
			case facing.EAST:
				if (this._positionX < this.table.maxPositionX) {
					this._positionX++;
				}
				break;
			case facing.SOUTH:
				if (this._positionY > 0) {
					this._positionY--;
				}
				break;
			default:
				if (this._positionX > 0) {
					this._positionX--;
				}
				break;
		}
	}

	left() {
		if (this.isPlace()) {
			switch (this._facing) {
				case facing.NORTH:
					this._facing = facing.WEST;
					break;
				case facing.EAST:
					this._facing = facing.NORTH;
					break;
				case facing.SOUTH:
					this._facing = facing.EAST;
					break;
				default:
					this._facing = facing.SOUTH;
					break;
			}
		}
	}

	right() {
		switch (this._facing) {
			case facing.NORTH:
				this._facing = facing.EAST;
				break;
			case facing.EAST:
				this._facing = facing.SOUTH;
				break;
			case facing.SOUTH:
				this._facing = facing.WEST;
				break;
			default:
				this._facing = facing.NORTH;
				break;
		}
	}

	report() {
		return `${this._positionX},${this._positionY},${this._facing}`;
	}

	place(posX, posY, direction) {
		try {
			this._positionX = checkNumber(posX);
			this._positionY = checkNumber(posY);
			this._facing = chekString(direction);
		} catch (e) {
			throw e;
		}
	}
}

export default Robot;
