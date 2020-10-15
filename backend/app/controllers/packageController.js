
const PackageModel = require('../models/PackageModel');
var mysql = require('mysql');


var database = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'smsportal',
    debug: false,

});

module.exports.getsmsCreditHistory = async function (req, res) {
    query = "SELECT * FROM clients_sms_credits_history"
    await db.query(query, function (err, result, fields) {
        if (err) throw err;
        res.send({
            "code": 200,
            "success": "users data ",
            "data": result
        });
    });
}


module.exports.getsmsCreditHistory = async function (req, res) {
    query = "SELECT * FROM clients_sms_credits_history"
    await db.query(query, function (err, result, fields) {
        if (err) throw err;
        res.send({
            "code": 200,
            "success": "users data ",
            "data": result
        });
    });
}

module.exports.addPackage = async function (req, res) {
    const partner_id=req.params.partner_id;
    const { package_name,package_route, package_unit_price,
        package_sms_credits,package_price,package_validity_in_months,package_details,package_status}=req.body;
    query = "SELECT last_package_id  FROM counter"
    await database.query(query, function (err, result, fields) {
        if (err) throw err;
        var last_package_id = result[0].last_package_id;
        var tempPackageId = result[0].last_package_id;
        tempPackageId++
       
        var newPackage = {
            partner_id:partner_id,
            package_id: 'SMS' + tempPackageId,
            package_icon: req.body.package_icon,
            package_name:package_name,
            package_route:package_route,
            package_unit_price:package_unit_price,
            package_sms_credits:package_sms_credits,
            package_price:package_price,
            package_validity_in_months:package_validity_in_months,
            package_details:package_details,
            package_status: package_status,
            createdAT: new Date(),
            updatedAt: new Date()
        };

        const createNewPackage = "INSERT INTO portal_smspackage_masters SET ?";
        database.query(createNewPackage, [newPackage], function (err, result, fields) {
            if (err) throw err;
            if (result) {
                const values = [tempPackageId, last_package_id]
                var sql = "UPDATE counter SET last_package_id =? WHERE last_package_id =?";
                database.query(sql, values, function (err, result) {
                    if (err) throw err;
                    console.log(result.affectedRows + " record(s) updated");
                    res.status(201).json({ status: 'success', message: 'New Package created!' });
                });
            }
            else {
                res.status(403).json({ message: 'data already exists!' });
            }

        })

    });
}



module.exports.getAllPackages = async function (req, res) {
    const partner_id = req.params.partner_id;
    query = "SELECT * FROM portal_smspackage_masters WHERE partner_id =?"
    await database.query(query, [partner_id], function (err, result, fields) {
        if (err) throw err;
        res.send({
            "code": 200,
            "success": "All Packages",
            "data": result
        });
    });
}


module.exports.updatePackage = async function (req, res) {

    const { package_icon, package_name, package_route, package_unit_price, package_sms_credits, package_price, package_validity_in_months, package_details, package_status, package_id } = req.body
    const values = [package_icon, package_name, package_route, package_unit_price, package_sms_credits, package_price, package_validity_in_months, package_details, package_status, package_id];
    console.log(values)
    const sql = "UPDATE smspackage_master SET package_icon =?, package_name =?, package_route =?, package_unit_price =?, package_sms_credits =?, package_price =?, package_validity_in_months =?, package_details =?, package_status =? WHERE package_id =?";
    await database.query(sql, values, function (err, result, fields) {

        if (err) throw err;
        res.send({
            "code": 200,
            "success": "Data updated Sucessfully",
        });
    });
}


module.exports.getPackageDetails = async function (req, res) {
    const package_id = req.body.package_id;
    console.log(package_id)
    query = "SELECT * FROM portal_smspackage_masters WHERE package_id =?"
    await database.query(query, [package_id], function (err, result, fields) {
        if (err) throw err;
        res.send({
            "code": 200,
            "success": "users data ",
            "data": result
        });
    });
}


module.exports.deletePackage = (req, res) => {
    const package_id = req.body.package_id;
    database.query('DELETE FROM `smspackage_masters` WHERE `package_id`=?',
        [package_id], function (error, results, fields) {
            if (error) throw error;
            res.send({
                "code": 200,
                "success": "Data updated Sucessfully",
            });
        });
};

module.exports.getAllportal_premiumplans_master = async function (req, res) {
    query = "SELECT * FROM portal_premiumplans_master"
    await database.query(query, function (err, result, fields) {
        if (err) throw err;
        res.send({
            "code": 200,
            "success": "All Packages",
            "data": result
        });
    });
}

module.exports.getpremiumplandetails = async function (req, res) {
    const package_id = req.body.package_id;
    console.log(package_id)
    query = "SELECT * FROM portal_premiumplans_master WHERE package_id =?"
    await database.query(query, [package_id], function (err, result, fields) {
        if (err) throw err;
        res.send({
            "code": 200,
            "success": "users data ",
            "data": result
        });
    });
}

module.exports.updatePremiumPlan = async function (req, res) {

    const { package_name, free_sms_credits, package_list_price, package_offered_price, total_package_price, is_sim_allowed, is_min_bal_req, package_validity_in_months, package_status, package_id } = req.body
    const values = [package_name, free_sms_credits, package_list_price, package_offered_price, total_package_price, is_sim_allowed, is_min_bal_req, package_validity_in_months, package_status, package_id];
    console.log(values)
    const sql = "UPDATE portal_premiumplans_master SET  package_name =?, free_sms_credits =?, package_list_price =?, package_offered_price =?, total_package_price =?, is_sim_allowed =?, is_min_bal_req =?,package_validity_in_months =?,package_status =? WHERE package_id =?";
    await database.query(sql, values, function (err, result, fields) {

        if (err) throw err;
        res.send({
            "code": 200,
            "success": "Data updated Sucessfully",
        });
    });
}

module.exports.deletePremiumPack = (req, res) => {
    const package_id = req.body.package_id;
    database.query('DELETE FROM `portal_premiumplans_master` WHERE `package_id`=?',
        [package_id], function (error, results, fields) {
            if (error) throw error;
            res.send({
                "code": 200,
                "success": "Data updated Sucessfully",
            });
        });
};

