// AWS configuration
var awsRegion = 'eu-west-1';
var bucketName = '!!!!! REPLACE !!!!!';
var IdentityPoolId = '!!!!! REPLACE !!!!!';

AWS.config.update({
  region: awsRegion,
  credentials: new AWS.CognitoIdentityCredentials({
    IdentityPoolId: IdentityPoolId
  })
});

// S3 object for storing input and output audio
var s3 = new AWS.S3({
  apiVersion: '2006-03-01',
  params: {Bucket: bucketName}
});

// Generate unique identifiers
function guid() {
  function s4() {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  }
  return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
}

// Check if URL returns HTTP 200 OK
function urlExists(url) {
  var http = new XMLHttpRequest();
  http.open('HEAD', url, false);
  http.send();
  return http.status==200;
}

// Polling for result
function poll(fn, timeout, interval) {
    var endTime = Number(new Date()) + (timeout || 2000);
    interval = interval || 100;

    var checkCondition = function(resolve, reject) {
        // If the condition is met, we're done!
        var result = fn();
        if(result) {
            resolve(result);
        }
        // If the condition isn't met but the timeout hasn't elapsed, go again
        else if (Number(new Date()) < endTime) {
            setTimeout(checkCondition, interval, resolve, reject);
        }
        // Didn't match and too much time, reject!
        else {
            reject(new Error('timed out for ' + fn + ': ' + arguments));
        }
    };

    return new Promise(checkCondition);
}

function uploadAudio() {
  // Get data from website
  var files = document.getElementById('audiofiles').files;
  var inputLang = document.getElementById('inputlang').value;
  var outputLang = document.getElementById('outputlang').value;
  if (!files.length) {
    return alert('Please choose a file to upload first.');
  }
  var file = files[0];
  var fileName = file.name;
  var fileExtension = fileName.split('.').pop();

  // Generate request id in following format: xx-yy-guid
  // xx - input language, yy - output language, guid - unique identifier
  var requestId = inputLang + '-' + outputLang + '-' + guid();

  // Create key for S3 object and upload input audio file
  var inputKey = 'input/' + requestId + '.' + fileExtension;
  s3.upload({
    Key: inputKey,
    Body: file
  }, function(err, data) {
    if (err) {
      return alert('There was an error uploading your file: ', err.message);
    }
    alert('Successfully uploaded file.');
  });

  // Create expected key and URL for output audio file
  var outputKey = 'output/' + requestId + '.mp3'
  var resultUrl = 'https://s3.amazonaws.com/' + bucketName + '/' + outputKey;

  // Wait for 5 minutes until output audio file is created and display player or timeout request
  poll(function() {
    return urlExists(resultUrl);
  }, 300000, 150).then(function() {
    document.getElementById('player').innerHTML = '<audio controls><source src="' + resultUrl + '" type="audio/mpeg"></audio>';
  }).catch(function() {
    return alert('Request timed out :(')
  });
}
