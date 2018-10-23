import Table from '../src/components/table'

describe("TableTop", () => {
    let table;
  
    beforeEach(() => {
        table = new Table(5, 5);
    });
  
    it("Should have 5 by 5 dimension", () => {
      expect(table.getTableSize()).toEqual('5 by 5');
    });
  });