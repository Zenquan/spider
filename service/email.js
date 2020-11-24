const nodemailer = require("nodemailer");
const { STMPCONFIG, EMAILCONFIG } = require('../constant/config')

async function main(STMPCONFIG, EMAILCONFIG) {
  let transporter = nodemailer.createTransport(STMPCONFIG);
  let info = await transporter.sendMail(EMAILCONFIG);
  console.log("Message sent: %s", info.messageId);
}

main(STMPCONFIG, EMAILCONFIG).catch(console.error);
