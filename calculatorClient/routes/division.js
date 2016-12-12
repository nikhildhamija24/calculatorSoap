/**
 * Created by Nikhil-PC on 12/11/2016.
 */
var soap = require('soap');
var baseURL = "http://localhost:8080/calculatorServices/services";

exports.divide = function (req, res) {
    var option =
    {
        ignoredNamespaces: true
    };
    var url = baseURL + "/Calculate?wsdl";
    soap.createClient(url, option, function (err, client) {
        var args = {};
        args.num1 =  req.body.num1;
        args.num2 = req.body.num2;
        client.divide(args, function (err, results) {
            res.send(results.divideReturn);
        });
    });
}
