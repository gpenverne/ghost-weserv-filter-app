var path = require('path');
var fs = require('fs');
var mysql = require('mysql');

const currentPath = __dirname;

const configPath = path.normalize(__dirname+'/../../../config.production.json');
var json = JSON.parse(fs.readFileSync(configPath, 'utf8'));
var connection = mysql.createConnection(JSON.parse(fs.readFileSync(configPath, 'utf8')).database.connection);
connection.connect();

Array.prototype.contains = function ( needle ) {
   for (i in this) {
      if (this[i] == needle) return true;
   }
   return false;
}

connection.query('SELECT s.id, s.value FROM settings s WHERE s.key = "active_apps" LIMIT 1', function (error, results, fields) {
    var rowId = results[0]['id'];
    var rowValue = JSON.parse(results[0]['value']);
    var appName = path.basename(currentPath);

    if (!rowValue.contains(appName)){
        rowValue.push(appName);
        connection.query('UPDATE settings SET value = ? WHERE id = ?', [JSON.stringify(rowValue), rowId]);
    }
    connection.end();
});
