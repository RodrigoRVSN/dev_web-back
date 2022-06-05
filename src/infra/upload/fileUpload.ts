import {
  AWS_ACCESS_KEY, AWS_BUCKET, AWS_REGION, AWS_SECRET_ACCESS_KEY,
} from '@domain/helpers/constants';
import aws from 'aws-sdk';
import fs from 'fs';
import multer from 'multer';

const upload = multer({ dest: 'uploads/' });

const s3 = new aws.S3({
  region: AWS_REGION,
  credentials: {
    accessKeyId: AWS_ACCESS_KEY as string,
    secretAccessKey: AWS_SECRET_ACCESS_KEY as string,
  },
});

async function deleteFromS3(key: string) {
  return s3
    .deleteObject({
      Bucket: AWS_BUCKET as string,
      Key: key,
    })
    .promise();
}

function splitToDeleteS3Object(image_url: string) {
  const bucketSplitted = image_url.split('/');
  const keyOfBucket = bucketSplitted[bucketSplitted.length - 1];
  deleteFromS3(keyOfBucket);
}

function uploadFile(file): Promise<aws.S3.ManagedUpload.SendData> | null {
  if (!file) return null;

  const fileStream = fs.createReadStream(file.path);

  const uploadParams = {
    Bucket: AWS_BUCKET,
    Body: fileStream,
    Key: file.filename,
    ContentType: 'image/png',
  };

  return s3.upload(uploadParams).promise();
}

export { upload, splitToDeleteS3Object, uploadFile };
