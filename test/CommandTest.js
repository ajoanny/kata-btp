var assert = require("assert");
const fs = require('fs');
const Command = require('../Command');
var stdout = require("test-console").stdout;

describe('Command', function() {
  afterEach(function () {
    fs.unlinkSync('./2021-12-16-orders.csv');
  });

  it('saves the command', function() {
    // Given
    const fakeUuidGen = function() {return '1';}
    const command = new Command(fakeUuidGen);
    command.addPrepend('10');

    // When
    var output = stdout.inspectSync(function() {
      command.save()
    });

    // Then
    const data = fs.readFileSync('2021-12-16-orders.csv', 'utf-8').split('\n');
    assert.equal(data[0], 'id; Date;Perpend Palets;Copper Wire Coils;Copper Wire Meters;');
    assert.equal(data[1], '1;2021-12-16;010;0;0');
  });
});
