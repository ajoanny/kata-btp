var assert = require("assert");
var CLI = require("../CLI.js");
var stdout = require("test-console").stdout;
var sinon = require("sinon");
const fs = require("fs");
sinon.stub(process, "exit");

describe("CLITest", function() {

  describe("main", function() {
    it("works", function() {

      var output = stdout.inspectSync(function() {
        // Given
        var prompt = () => "quit";

        // Don't forget to decomment the line on CLI.js!!!!!
        // If not decomment, the test won't work!!!!!
        dacli = new CLI(prompt);

        // When
        dacli.main();
      });

      // Then
      assert.deepEqual(
        output,
        [
          "\n--------------------------------------------------------------------------------\n",
          "          Welcome to Efficent Command System 2.0\n",
          "--------------------------------------------------------------------------------\n\n",
          "\n--------------------------------------------------------------------------------\n",
          "          System stopped\n",
          "--------------------------------------------------------------------------------\n\n"
        ]
      );

    });
  });

  describe("help", function() {
    it("works", function() {

      var output = stdout.inspectSync(function() {
        // Given
        var i = 0;
        var prompt = () => {
          i++;
          return i > 1 ? "quit" : "help";
        };

        // Don't forget to decomment the line on CLI.js!!!!!
        // If not decomment, the test won't work!!!!!
        dacli = new CLI(prompt);

        // When
        dacli.main();
      });

      // Then
      assert.deepEqual(
        output,
        [
          "\n--------------------------------------------------------------------------------\n",
          "          Welcome to Efficent Command System 2.0\n",
          "--------------------------------------------------------------------------------\n\n",
          "\nUnknown command\nThe available commands are the following : \n\n",
          "quit - quit the program\n",
          "order - create a new command\n",
          "help - displays the help\n",
          "\n",
          "\n--------------------------------------------------------------------------------\n",
          "          System stopped\n",
          "--------------------------------------------------------------------------------\n\n"
        ]
      );

    });
  });


  describe("create a command", function() {
    it("creates a command with perpend", function() {

      var output = stdout.inspectSync(function() {
        // Given
        var i = 0;
        var prompt = () => {
          const commands = ["order", "prepend", "10", "stop", "quit"];
          const command = commands[i];
          i++;
          return command;
        };

        // Don't forget to decomment the line on CLI.js!!!!!
        // If not decomment, the test won't work!!!!!
        dacli = new CLI(prompt);

        // When
        dacli.main();
      });

      // Then
      assert.deepEqual(
        output,
        [
          "\n--------------------------------------------------------------------------------\n",
          "          Welcome to Efficent Command System 2.0\n",
          "--------------------------------------------------------------------------------\n\n",
          "\n--------------------------------------------------------------------------------\n",
          "          Order Menu\n",
          "--------------------------------------------------------------------------------\n\n",
          "New order created.\n",
          "Add new elements to your order\n",
          "\nHow many perpends palets do you need ?\n",
          "\nQuit Order Menu\n\n",
          "\n--------------------------------------------------------------------------------\n",
          "          System stopped\n",
          "--------------------------------------------------------------------------------\n\n"
        ]
      );

    });
  });

  describe("verify generated file", function() {

    afterEach(function () {
      fs.unlinkSync('./2021-12-16-orders.csv');
    });

    it("should read file", function() {


      var output = stdout.inspectSync(function() {
        // Given
        var i = 0;
        var prompt = () => {
          const commands = ["order", "prepend", "10", "save", "stop", "quit"];
          const command = commands[i];
          i++;
          return command;
        };

        // Don't forget to decomment the line on CLI.js!!!!!
        // If not decomment, the test won't work!!!!!
        dacli = new CLI(prompt);

        // When
        dacli.main();
      });

      // Then
      const data = fs.readFileSync('2021-12-16-orders.csv', 'utf-8').split('\n');
      assert.equal(data[0], 'id; Date;Perpend Palets;Copper Wire Coils;Copper Wire Meters;');
      assert.equal(data[1], '2021-12-16;010;0;0');
    });
  });

});
