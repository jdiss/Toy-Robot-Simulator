
class Table {
    constructor(xSize, ySize)
    {
        this.xSize = xSize;
        this.ySize = ySize;
    }

    getTableSize() {
      return `${this.xSize} by ${this.ySize}`;
    }
  }

export default Table;