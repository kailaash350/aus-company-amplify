const awsServerlessExpress = require('aws-serverless-express');
const AWS = require('aws-sdk')
const awsServerlessExpressMiddleware = require('aws-serverless-express/middleware')
const bodyParser = require('body-parser')
const express = require('express')

AWS.config.update({ region: process.env.TABLE_REGION });

const dynamodbCLI = new AWS.DynamoDB.DocumentClient();

exports.handler = async(event, context) => {
 try {
        var params = {
            TableName: 'aus-companies'
        };
        var result = await dynamodbCLI.scan(params).promise()
        console.log(JSON.stringify(result))
        const res = {
            statusCode: 200,
            body: JSON.stringify(result),
            
        };
        return res
    } catch (error) {
        console.error(error);
    }

};
