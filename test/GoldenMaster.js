const fs = require("fs");
let moment = require("moment");

const Command = require("../Command");

function clearFile(filename) {
  if (fs.existsSync(filename)) fs.unlinkSync(filename);
}

const date = "2021-12-22"

clearFile("out/0.csv");
let c = new Command("out/0.csv", "0", date);
c.save();

clearFile("out/1.csv");
c = new Command("out/1.csv", "1", date);
c.addCopperWire("57");
c.addPrepend("11");
c.save();

clearFile("out/2.csv");
c = new Command("out/2.csv", "2", date);
c.addPrepend("11");
c.addCopperWire("57");
c.save();

clearFile("out/3.csv");
c = new Command("out/3.csv", "3", date);
c.addCopperWire("57");
c.save();

clearFile("out/4.csv");
c = new Command("out/4.csv", "4", date);
c.addPrepend("89");
c.save();
