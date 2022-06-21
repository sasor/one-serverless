'use strict';

const AWS = require('aws-sdk');

module.exports.createCustomer = async (event) => {
    const body = JSON.parse(Buffer.from(event.body, 'base64').toString());
    console.log(body);
    const dynamoDb = new AWS.DynamoDB.DocumentClient();
    const putParams = {
        TableName: process.env.DYNAMODB_CUSTOMER_TABLE,
        Item: {
            primary_key: body.name,
            email: body.email,
            description: 'default description',
        },
    };
    await dynamoDb.put(putParams).promise();

    return {
        statusCode: 201,
    };
};