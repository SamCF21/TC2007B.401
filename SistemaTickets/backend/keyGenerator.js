const fs = require('fs');
const crypto = require('crypto');


const secretKey = crypto.randomBytes(32).toString('hex');


const envFileContent = `SECRET_KEY=${secretKey}\n`;

fs.appendFile('.env', envFileContent, (err) => {
  if (err) {
    console.error('Error writing to .env file:', err);
  } else {
    console.log('Random secret key saved to .env');
  }
});