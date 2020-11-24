const CronJob = require('cron').CronJob;
const child_process = require('child_process');
const { resolve } = require('../util')

const job = new CronJob(
	'22 22 * * *',
	function() {
    console.log('You will send a email to Jomsou');
    child_process.exec(`node ${resolve('/service/email')}`)
	},
	null
);
// Use this if the 4th param is default value(false)
job.start()