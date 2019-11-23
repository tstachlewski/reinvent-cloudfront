Protect your website and infrastructure using Amazon CloudFront
=========================================

This repository contains necessary resources for AWS re:Invent 2019 builders session NET302. In this readme you will find detailed instructions for each phase of the workshop.

Phase 3: Setting up a domain
-----

1. Open "Certificate Manager" service and confirm that there is SSL certificate issued for a domain.
2. Remember domain for which certification is created for.
3. Open back "CloudFront" service and distribution which you have created before.
4. In the "General" tab click on "Edit" button.
5. In the "Alternate Domain Names" provide the name of your domain (see step 2).
6. Select your custom certficate in "SSL Certificate".
7. Saved changes.
8. Open "Route 53 service" and open hosted zone which is configured there.
9. Create a new record set.
10. Name is "www."
11. Select "Alias" and choose your CloudFront distribution.
12. Save it.
13. We will also want to modify our application, so that the mp4 files would use not cloudfront domain, but local host. To do it return to Cloud9 service.
14. In line 51-53 remove those parts: "https://<?php echo $domain;  ?>/"
15. Save the file.
16. You will need to build again your docker image. Use following commands. Replace ACCOUNT_ID with you account number.

          cd ~/environment/reinvent/myapp

          docker build -t myrepo .

          docker tag myrepo:latest ACCOUNT_ID.dkr.ecr.us-east-1.amazonaws.com/myrepo:latest

          docker push ACCOUNT_ID.dkr.ecr.us-east-1.amazonaws.com/myrepo:latest

15. You will need to terminate existing running container. To do this, open ECS service and find your cluster. Then, open 'Tasks' tab, select your container and click on 'Stop'. After a couple of second, a new container (based on new image) will be created.



**Once you're finished with this phase please wait for speakers before moving forward.**

<a href="../phase2/README.md"><img src="../../img/button-previous.png" width="200"></a>
<a href="../phase4/README.md"><img src="../../img/button-next.png" width="200"></a>
