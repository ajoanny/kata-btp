const fs = require('fs');
let moment = require("moment");

const Command = require('../Command');

let jour = moment().format("YYYY-MM-DD");
var File_Name = "./" + jour + "-orders.csv";
fs.unlinkSync(File_Name)

let c = new Command();
c.addCopperWire("57")
c.addPrepend("11")
c.save()

// c = new Command();
// c.addPrepend("11")
// c.addCopperWire("57")
// c.save()

// c = new Command();
// c.addCopperWire("57")
// c.save()

// c = new Command();
// c.addPrepend("89")
// c.save()
