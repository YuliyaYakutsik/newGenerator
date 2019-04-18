import gulp        from 'gulp';
import runSequence from 'run-sequence';

gulp.task('default', () => (
    runSequence(
        'copy',
        'svgSprite',
        'images',
        'styles',
        'eslint',
        'scripts',
        'markup',
        'connect',
        'watch'
    )
));
