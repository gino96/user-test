const user = require('../routes/user')
var redis = require('redis');
var JWTR =  require('jwt-redis').default;
var redisClient = redis.createClient();
var jwtr = new JWTR(redisClient);
 
var secret = 'redis';
var jti = 'test';
var payload = { jti };
 
jwtr.sign(payload, secret)
    .then(()=>{
            return jwtr.verify(user.token, secret);
    })
    .then(()=>{
            
            return jwtr.destroy(jti, secret);
    });
