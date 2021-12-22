const assert = require("assert");
const Perpend = require("../Perpend");
const sinon = require("sinon");

describe("Perpend", function() {
  beforeEach(function() {
    sinon.spy(console, "log");
  });

  afterEach(function() {
    console.log.restore();
  });

  it("should return quantity at 0", function() {
    const perpend = new Perpend();

    assert.equal(perpend.getQuantity(), 0);
  });

  it("should add 5 to quantity", function() {
    const perpend = new Perpend();

    perpend.addQuantity(5);

    assert.equal(perpend.getQuantity(), 5);
  });

  it("should print quantity", function() {
    const perpend = new Perpend();

    perpend.addQuantity(5);
    perpend.show();

    sinon.assert.calledWith(console.log, " - 5 perpend palets");
  });
});
