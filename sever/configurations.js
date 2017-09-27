var fs = require('fs');
var path = require('path');

exports.load = () => {
    let env = process.env.NODE_ENV;
    let file = fs.readFileSync(path.join(__dirname, `./../configurations/${env}.json`), 'utf8');

    if (file)
        process.config = JSON.parse(file);
    else
        throw new Error(`unable to get configurations for env: ${env}`);
};