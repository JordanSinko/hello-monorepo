const isS3Event = require("./isS3Event");
const isSnsEvent = require("./isSnsEvent");
const isSesEvent = require("./isSesEvent");
const isCloudformationEvent = require("./isCloudformationEvent");

module.exports = function isAsynchronousLambdaEvent(event) {
  return isS3Event(event) || isSnsEvent(event) || isSesEvent(event) || isCloudformationEvent(event);
};
