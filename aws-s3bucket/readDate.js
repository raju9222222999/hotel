const AWS=require('aws-sdk');
const bucketName = 'rajubucketluck';
const objectKey = 'path/to/your-object/key/file.txt'; // Specify the key of the object you want to retrieve
// Create an S3 instance
// Set the expiration time for the URL in seconds (e.g., 3600 seconds for 1 hour)
const expirationTime = 3600;

const s3 = new AWS.S3();
const params = {
  Bucket: bucketName,
  Key: objectKey,
  Expires: expirationTime,
};

const url = s3.getSignedUrl('getObject', params);
console.log('sss',url);
//
