const fs = require('fs');

const jsonObject = JSON.parse(fs.readFileSync('./src/composer.json', 'utf8'));

jsonObject.repositories.push({
    "type": "path",
    "url": "./package/src/item", //./package/src/機能ブランチ名　とする
    "options": {
        "symlink": true
    }
})
console.log(jsonObject);
fs.writeFileSync('./src/composer.json', JSON.stringify(jsonObject, null, 2));