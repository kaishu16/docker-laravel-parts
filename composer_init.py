import json

file = open('src/composer.json')
value = json.load(file)
value['repositories'].append({
    "type": "path",
    "url": "./package/item",
    "options": {
        "symlink": True
    }
})
with open('src/composer.json', 'w') as f:
    json.dump(value, f, indent=2)