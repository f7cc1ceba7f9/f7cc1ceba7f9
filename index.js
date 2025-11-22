const { exec } = require('child_process');

function pingIP(host) {
  return new Promise((resolve) => {
    const cmd = process.platform === 'win32' ? `ping -n 1 ${host}` : `ping -c 1 ${host}`;
    exec(cmd, (error, stdout) => {
      resolve({ success: !error, output: stdout });
    });
  });
}

// Sử dụng
pingIP('8.8.8.8').then(result => console.log(result));
