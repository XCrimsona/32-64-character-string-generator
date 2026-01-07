const crypto = require("crypto")

const secretkey1 = crypto.randomBytes(32).toString("hex");
console.log("secretkey1: ", secretkey1);

const secretkey2 = crypto.randomBytes(64).toString("hex");
console.log("secretkey2: ", secretkey2);
