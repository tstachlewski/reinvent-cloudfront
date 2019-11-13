Build a Babel Fish with Machine Learning Language Services
=========================================

This repository contains necessary resources for AWS re:Invent 2018 workshop AIM313. In this readme you will find detailed instructions for Phase 3.

<img src="../../img/flow3.png" />


Phase 3: Convert text to audio
-----

Use Lambda service in the AWS Console to open `PollyLambda` function. In the `Add triggers` section on the left configure trigger for this function:

1. Choose S3 as the trigger and go to the `Configure triggers` section.
1. Pick correct S3 bucket name.
1. Pick `PUT` as event type.
1. Put `.txt` as suffix.
1. Click `Add` at the bottom of the page to add trigger.
1. Click `Save` at the top of the page to confirm changes to the function.

Implement the function to use translation result and synthesize it with Amazon Polly.

> Hint: Your function should put synthesis result to an `.mp3` file in project's S3 bucket in `output` folder and use the same file naming convention as JavaScript app.

> Hint: You may want to look up [Amazon Polly Boto 3 Docs](https://boto3.amazonaws.com/v1/documentation/api/latest/reference/services/polly.html) or inspire yourself with [Amazon Polly Synthesize Speech Example](https://docs.aws.amazon.com/polly/latest/dg/SynthesizeSpeechSamplePython.html).

> Hint: Getting behind? No worries, we've got you covered! When the time is up speakers will provide the password to the `solution.zip` file with a ready solution and will show how to apply it to unblock next steps.

## Testing
TODO


<a href="../phase2"><img src="../../img/button-previous.png" width="200"></a>
<a href="../cleaning"><img src="../../img/button-next.png" width="200"></a>
