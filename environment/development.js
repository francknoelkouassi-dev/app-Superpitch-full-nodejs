const path = require('path');

module.exports = {
	dbUrl: 'mongodb+srv://franck:admin1994@first-cgvc8.mongodb.net/tweet?retryWrites=true&w=majority',
	cert: path.join(__dirname, '../ssl/local.crt'),
	key: path.join(__dirname, '../ssl/local.key'),
	portHttp: 3000,
	portHttps: 3001
}
