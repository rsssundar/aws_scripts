var AWS = require('aws-sdk');
AWS.config.update({region: 'us-east-1'});
ddb = new AWS.DynamoDB({apiVersion: '2012-10-08'});

var dy = {
	TableName: 'testtable',
	Item:{
		"username": {S:'test'},
		"age": {N: '4'},
		"id": {N: '3'}
	}
};


ddb.putItem(dy, function(err, data) {
	if (err) {
		console.log("Error", err);
	} else {
		console.log("Success", data);
	}
});
