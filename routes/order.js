const express = require('express');
const { createOrder } = require('../controller/orderContoller');
const router = express.Router();

router.route('/order').post(createOrder);


module.exports=router;