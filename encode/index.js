const { createHash } = require('crypto');

const produce_string = (hash, complexity) => {
    let output = '';
    for (let i = 0; i < hash.length; i++) {
        if (i % complexity === 0) output += hash[i];
    }
    return output;
}

const encode = (data, complexity = 1) => {
    const hash = createHash('sha256');
    hash.update(data);
    let result = hash.digest('hex');
    return produce_string(result, complexity);
}

module.exports = {
    encode
}