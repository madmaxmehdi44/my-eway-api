
var request = require('request');
var options = {
    'method': 'POST',
    'url': 'https://api.au.medipim.com/v4/brands/query',
    'headers': {
        'Content-Type': 'application/json',
        'Authorization': '5:f145d34271c328cd28421117f4c11f2861b4208b' // base64 encoded "ApiKeyId:ApikeySecret"
    }
}