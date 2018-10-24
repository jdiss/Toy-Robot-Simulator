import { checkNumber } from '../common/utils';

class Table {

    /**
    * The Table class, constructor
    * @param {number} width
    * @param {number} height
    * @constructor
    */
    constructor(width, height) {
        this.width = checkNumber(width);
        this.height = checkNumber(height);
    }

    get maxPositionY() {
        return this.height - 1;
    }

    get maxPositionX() {
        return this.width - 1;
    }
  }

export default Table;