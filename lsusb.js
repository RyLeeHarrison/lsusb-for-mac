const exec = require('child_process').exec;
const cmd = 'system_profiler SPUSBDataType';

exec(cmd, (error, stdout, stderr) => {
  console.log(stdout)
});