Protect your website and infrastructure using Amazon CloudFront
=========================================

This repository contains necessary resources for AWS re:Invent 2019 builders session NET302. In this readme you will find detailed instructions for each phase of the workshop.

Phase 4: Setting up AWS WAF
-----

1. Open "https://tools.pingdom.com/" page and try to send request to your page from Germany.
2. Open "WAF" service and select "Configure web ACL" option.
3. In the first step of the wizard, provide the name for your WAF rules and select your cloudformatino distribution.
4. In the step number '2' we will block our website from Germany. To do this click on "Create condition" button in "Geo match conditions" section.
5. Provide the name: "Germany"
6. In the location type specify "Country"
7. In the location specify "Germany"
8. Click on "Add Location" button.
9. Click "Create"
10. You will be back in step 2 of the wizad, click on "Next" button.
11. In the step 3 click on "Create Rule"
12. Provide the name for your rule.
13. Specify condituion and create the rule.
14. Specify that default action for the WAF should be "allow".
15. Create and wait 2 minutes untill changes will be propagated.
16. Try to send request to your website again using pingdom site.




**Once you're finished with this phase please wait for speakers before moving forward.**

<a href="../phase3/README.md"><img src="../../img/button-previous.png" width="200"></a>
<a href="../phase5/README.md"><img src="../../img/button-next.png" width="200"></a>
