const fs = require("fs");
let moment = require("moment");

const Command = require("../Command");

function clearFile(filename) {
  if (fs.existsSync(filename)) fs.unlinkSync(filename);
}

clearFile("out/0.csv");
let c = new Command("out/0.csv", "0");
c.save();

clearFile("out/1.csv");
c = new Command("out/1.csv", "1");
c.addCopperWire("57");
c.addPrepend("11");
c.save();

clearFile("out/2.csv");
c = new Command("out/2.csv", "2");
c.addPrepend("11");
c.addCopperWire("57");
c.save();

clearFile("out/3.csv");
c = new Command("out/3.csv", "3");
c.addCopperWire("57");
c.save();

clearFile("out/4.csv");
c = new Command("out/4.csv", "4");
c.addPrepend("89");
c.save();
