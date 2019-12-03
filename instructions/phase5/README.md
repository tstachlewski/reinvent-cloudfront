Protect your website and infrastructure using Amazon CloudFront
=========================================

This repository contains necessary resources for AWS re:Invent 2019 builders session NET302. In this readme you will find detailed instructions for each phase of the workshop.

Phase 5: Signed URL / cookies
-----

1. Upload a file from Cloud9 to your S3 bucket with following command.

          aws s3 cp ~/environment/reinvent/secretfile.txt  s3://YOUR_BUCKET/secretfile.txt
2. Return to CloudFront and create a new Behavior.
3. Use "*.txt" as path pattern.
4. Don't cache the content (Object Caching -> Customizer -> 0,0,0).
5. Enable "Restrict Viewer Access".
6. Save changed.
7. Execute Following commands to download keys

          cd ~/environment
          aws s3 cp s3://tomash/keys.zip .
          unzip keys.zip
          rm keys.zip


8. Execute following command in Cloud9 (replace some of the paramters)


			aws cloudfront sign \
			--url https://YOUR_DISTRIBUTION.cloudfront.net/secretfile.txt \
			--key-pair-id YOUR_KEY \
			--private-key file://YOUR_PRIVATE_KEY \
			--date-less-than 2020-02-02

9. After this you will get a link to your file. Try to use it.

**Once you're finished with this phase please wait for speakers before moving forward.**

<a href="../phase3/README.md"><img src="../../img/button-previous.png" width="200"></a>

