module.exports = () => {
    const sequence = require('gulp-sequence');

    return cb => sequence('prepare', [
        'build:assets', 'build:fonts'
    ], 'build:source', 'build:components')(cb);
};
