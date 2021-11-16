var Server = require('server');
var BasketMgr = require('dw/order/BasketMgr');
//var Shipment  = require('dw/order/OrderAddress');
Server.get('prac', function(req,res,next){
    //var CartModel = require('*/cartridge/models/cart');
    //var ShippingModel = require('*/cartridge/models/address');
    //var sAddress = Shipment.getAddress1();
var currentBasket = BasketMgr.getCurrentBasket();
//var Addr = currentBasket.defaultShipment.
    //var basketModel = new CartModel(currentBasket);
    //var k=0;
  // res.print(sAddress);
    // currentBasket -> defaultShipment -> shippingAddress -> postalCode
//var items = basketModel.items;
    var postalC = currentBasket.defaultShipment.shippingAddress.postalCode;
    res.json({
      "items": postalC, 
    });
next();
})
module.exports = Server.exports();
// 'use strict';
// var server = require('server');
// server.get('Start' , function(req , res , next)
// {
//     // var BasketMgr = require('dw/order/BasketMgr');
//     // var CartModel = require('*/cartridge/models/cart');
//     // // var arrayHelper = require('*/cartridge/scripts/util/array');

//     // var currentBasket = BasketMgr.getCurrentBasket();
//     // dw.system.Logger.warn('CurrentbasketValue == '+currentBasket);
//     // var basketModel = new CartModel(currentBasket);
//     // dw.system.Logger.warn('BasketModel == '+basketModel);
//     // // var actionUrls = BasketModel.actionUrls;
//     // dw.system.Logger.warn('cartItemValue == '+basketModel.numOfShipments);
//     // dw.system.Logger.warn('discountPlanValue == '+basketModel.discountPlan);
//     // var length = basketModel.totals.discounts.length;
//     // dw.system.Logger.warn('Length Of Array == '+length);
//     // dw.system.Logger.warn('TotalDiscounts == '+basketModel.totals.discounts[0].type);
    
//     res.render('NewTest');
//     next();
// });
// module.exports = server.exports();