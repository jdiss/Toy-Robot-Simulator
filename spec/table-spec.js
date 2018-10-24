import Table from '../src/components/table'

describe("Table", () => {
    let table;
  
    beforeEach(() => {
        table = new Table(5, 5);
    });
  
    it("Should have 5 by 5 dimension", () => {
      expect(table.maxPositionX).toEqual(4);
      expect(table.maxPositionY).toEqual(4);
    });
  });