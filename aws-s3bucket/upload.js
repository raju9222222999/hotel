const AWS = require('aws-sdk');

// Create an S3 instance
const s3 = new AWS.S3();

const bucketName = 'rajubucketluck';
const objectKey = 'path/to/your-object/key/file.txt'; // Specify the desired key
const filePath = './naukri_Logo.png'

const params = {
  Bucket: bucketName,
  Key: objectKey,
  Body: require('fs').createReadStream(filePath),
  ACL: 'private', // Set the ACL for public read access (optional)
};

s3.putObject(params, (err, data) => {
  if (err) {
    console.error('Error uploading file to S3:', err);
  } else {
    console.log('File uploaded successfully:', data);
  }
});
