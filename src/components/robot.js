import  Directions from '../common/constant';
import { checkNumber,chekString } from '../common/utils';

class Robot {
	constructor(table) {
		this.table = table;
	}

	isPlace() {
		if (this._positionX && this._positionY && this._direction) {
			return true;
		}
		throw new Error('No Place in table');
	}

	move() {
		switch (this._direction) {
			case Directions.NORTH:
				if (this._positionY < this.table.maxPositionY) {
					this._positionY++;
				}
				break;
			case Directions.EAST:
				if (this._positionX < this.table.maxPositionX) {
					this._positionX++;
				}
				break;
			case Directions.SOUTH:
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
		if (isPlace()) {
			switch (this._direction) {
				case Directions.NORTH:
					this._direction = Directions.WEST;
					break;
				case Directions.EAST:
					this._direction = Directions.NORTH;
					break;
				case Directions.SOUTH:
					this._direction = Directions.EAST;
					break;
				default:
					this._direction = Directions.SOUTH;
					break;
			}
		}
	}

	right() {
		switch (this._direction) {
			case Directions.NORTH:
				this._direction = Directions.EAST;
				break;
			case Directions.EAST:
				this._direction = Directions.SOUTH;
				break;
			case Directions.SOUTH:
				this._direction = Directions.WEST;
				break;
			default:
				this._direction = Directions.NORTH;
				break;
		}
	}

	report() {
		return `${this._positionX},${this._positionY},${this._direction}`;
	}

	place(posX, posY, direction) {
		try {
			this._positionX = checkNumber(posX);
			this._positionY = checkNumber(posY);
			this._direction = chekString(direction);
		} catch (e) {
			throw e;
		}
	}
}

export default Robot;
