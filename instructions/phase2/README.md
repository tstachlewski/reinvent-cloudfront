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
7. For pattern put *.mp4
8. Select 'Customize' in 'Object Caching'


**Once you're finished with this phase please wait for speakers to present the next one before moving forward.**

<a href="../phase1/README.md"><img src="../../img/button-previous.png" width="200"></a>
<a href="../phase3/README.md"><img src="../../img/button-next.png" width="200"></a>
