Protect your website and infrastructure using Amazon CloudFront
=========================================

This repository contains necessary resources for AWS re:Invent 2019 builders session NET302. In this readme you will find detailed instructions for each phase of the workshop.

Phase 1: Protecting the website
-----

1. Open CloudFront service and open distribution which you have created in previous phase.
2. In the 'Origins and Origin Groups' create a new Origin.
3. 'Origin Domain Name' should pont to your S3 bucket where you are storing your video files.
4. Select 'Restrict Bucket Access' - Yes.
5. In the 'Grant Read Permissions on Bucket' select 'Yes, Update Bucket Policy'.
6. In the 'Beehaviors' tab, create a new Behavior.
7. For pattern put   "*.mp4"
8. Select 'Customize' in 'Object Caching'
9. Create Behavior.
10. Copy again files, this time, they won't be public by default
11. Execute following commands to copy three sample files to your bucket. Replace the bucket name with you bucket name.

          aws s3 cp s3://tomash/workshops/vod-platform/01.mp4 s3://YOUR_BUCKET/01.mp4

          aws s3 cp s3://tomash/workshops/vod-platform/02.mp4 s3://YOUR_BUCKET/02.mp4

          aws s3 cp s3://tomash/workshops/vod-platform/03.mp4 s3://YOUR_BUCKET/03.mp4

12. We will need to modify our application, so that it would point to CloudFront to present our videos. To do this, open again 'reinvent/myapp/src/index.php' file and modify '$domain' parameter in line 27 - change it's value to your distribution name.
13. Save the file.
14. You will need to build again your docker image. Use following commands. Replace ACCOUNT_ID with you account number.

          cd ~/environment/reinvent/myapp

          docker build -t myrepo .

          docker tag myrepo:latest ACCOUNT_ID.dkr.ecr.us-east-1.amazonaws.com/myrepo:latest

          docker push ACCOUNT_ID.dkr.ecr.us-east-1.amazonaws.com/myrepo:latest

15. You will need to terminate existing running container. To do this, open ECS service and find your cluster. Then, open 'Tasks' tab, select your container and click on 'Stop'. After a couple of second, a new container (based on new image) will be created.



**Once you're finished with this phase please wait for speakers to present the next one before moving forward.**

<a href="../phase1/README.md"><img src="../../img/button-previous.png" width="200"></a>
<a href="../phase3/README.md"><img src="../../img/button-next.png" width="200"></a>
