'use strict';

var router = require('express').Router();

var config = require('../config'),
  allowOnly = require('../services/routesHelper').allowOnly,
  AuthController = require('../controllers/authController'),
  UserController = require('../controllers/userController'),
  AdminController = require('../controllers/adminController');
const ClientController = require('../controllers/clientController');
const packageController = require('../controllers/packageController');
const analyticsController = require('../controllers/analyticsController');
const helpdeskController = require('../controllers/helpdeskController');
const bulkprofilecontroller = require('../controllers/bulkprofilecontroller');
const billingcontroller = require('../controllers/billingcontroller');

var APIRoutes = function (passport) {
  // POST Routes.
  router.post('/signup', AuthController.signUp);
  router.post('/authenticate', AuthController.authenticateUser);
  router.get('/partner/:partner_id/getClients', ClientController.getclients);
  router.get('/partner/:partner_id/getuserdata', ClientController.getuserdata);
  router.post('/partner/:partner_id/getuserDetails', ClientController.getuserDetails);
  router.put('/partner/:partner_id/updateclientData', ClientController.updateclientData);
  router.post('/partner/:partner_id/deleteclient', ClientController.deleteclient);
  router.post('/partner/:partner_id/addPackages', packageController.addPackage);
  router.put('/updatePackage', packageController.updatePackage);
  router.get('/partner/:partner_id/getAllPackages', packageController.getAllPackages);
  router.post('/getPackageDetails', packageController.getPackageDetails);
  router.post('/deletePackage', packageController.deletePackage);
  router.post('/sendSMS', ClientController.sendSMS);
  router.get('/getpurchaseData', analyticsController.getpurchaseData);
  router.post('/getpurchaseDetailed', analyticsController.getpurchaseDetailed);
  router.post('/getSalesData', analyticsController.getSalesData);
  router.post('/getpurchaseDataByDate', analyticsController.getpurchaseDataByDate);
  router.put('/updatePaymentStatus', analyticsController.updatePaymentStatus);
  router.post('/activationEmail', ClientController.activationEmail);
  router.post('/partner/:partner_id/addnewClient', ClientController.addnewClient);
  router.get('/getAllTickets', helpdeskController.getAllTickets);
  router.put('/updateticketstatus', helpdeskController.updateticketstatus);
  router.post('/getDataByQuery', helpdeskController.getDataByQuery);
  router.post('/partner/:partner_id/createbulkprofiles', bulkprofilecontroller.createbulkprofiles);
  router.post('/updateclientStatus', ClientController.updateclientStatus);
  router.post('/partner_id/:partner_id/getclientsbyfilter', ClientController.getclientsbyfilter)
  router.get('/getsmspackagelist', billingcontroller.getsmspackagelist)
  router.post('/getclientdetails', billingcontroller.getclientdetails);
  router.post('/getOrderId', billingcontroller.getOrderId);
  router.get('/getpremiumplanlist', billingcontroller.getpremiumplanlist);
  router.post('/postofficeApi', ClientController.postofficeApi);
  router.post('/partner/:partner_id/getplanexpirycontacts', analyticsController.getplanexpirycontacts);
  router.get('/partner/:partner_id/getplanexpirycontactsAll', analyticsController.getplanexpirycontactsAll);
  router.post('/insertnotifications', analyticsController.insertnotifications);
  router.post('/partner/:partner_id/registeredcontactstracking', analyticsController.registeredcontactstracking);
  router.get('/partner/:partner_id/getTodayregisterdData', analyticsController.getTodayregisterdData);
  router.get('/getAllpremiumplans', packageController.getAllportal_premiumplans_master);
  router.post('/getpremiumplandetails', packageController.getpremiumplandetails);
  router.get('/fetchProfessions', ClientController.fetchProfessions);
  router.post('/updatePremiumPlan', packageController.updatePremiumPlan);
  router.post('/deletePremiumPack', packageController.deletePremiumPack);
  router.get('/partner/:partner_id/getuserdataCount',ClientController.getuserdataCount);
  router.get('/partner/:partner_id/getResellerCount',ClientController.getResellerCount);
  router.post('/partner/:partner_id/ChangePassword', ClientController.ChangePassword);
  router.post('/submitcustomerdetails', ClientController.submitcustomerdetails);
  router.post('/partner/:partner_id/verifyOTP', ClientController.verifyAndSaveDetails);
  router.get('/partner/:partner_id/userdataCountweekly',ClientController.getuserdataCountweekly);
  router.get('/partner/:partner_id/getplanexpirytoday',ClientController.getplanexpirytoday);
  router.get('/partner/:partner_id/getplanexpirynextweek',ClientController.getplanexpirynextweek);
  router.get('/partner/:partner_id/getclientscount',ClientController.getclientscount);

  
  

  
  // GET Routes.
  router.get('/profile', passport.authenticate('jwt', { session: false }), allowOnly(config.accessLevels.user, UserController.index));
  router.get('/admin', passport.authenticate('jwt', { session: false }), allowOnly(config.accessLevels.admin, AdminController.index));

  return router;
};

module.exports = APIRoutes;