let fs = require('fs')
let path = require('path')

module.exports = (dirname, fileext, callback) => {
    fs.readdir(dirname, (err, list) => {
        if (err) return callback(err);
        let filteredList = Array();
        list.forEach((file) => {
            if (path.extname(file) == ('.' + fileext)) {
                filteredList.push(file);
            }
        });
        callback(null, filteredList);
    });
}