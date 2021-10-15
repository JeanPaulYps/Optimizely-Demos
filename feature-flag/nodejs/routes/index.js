var express = require('express');
var router = express.Router();

const optimizelySDK = require('@optimizely/optimizely-sdk');

const optimizelyClientInstance = optimizelySDK.createInstance({
  sdkKey: 'J9CKG7mE6qjf7hyw2uNhd'
});

optimizelyClientInstance.onReady().then(() => {
  console.log('Optimizely is ready');
});





/* GET home page. */
router.get('/', function(req, res, next) {

  // Evaluate the flag for amount
  const enabled = optimizelyClientInstance.isFeatureEnabled('amount', 'userId');
  
  res.render('index', { title: 'Express and optimizely demo', enabled });
  
});

module.exports = router;
