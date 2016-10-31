module.exports = () => {
    const sequence = require('gulp-sequence');

    return cb => sequence([
        'prepare:template', 'prepare:symlink'
    ], 'prepare:wiredep', 'prepare:inject')(cb);
};
