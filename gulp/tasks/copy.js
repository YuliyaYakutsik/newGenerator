import gulp         from 'gulp';
import settings     from '../settings';

gulp.task('copy', () => {
    gulp.src(settings.src.fonts + '/**')
        .pipe(gulp.dest(settings.dist.fonts));

    gulp.src(settings.src.images + '/favicon/**')
        .pipe(gulp.dest(settings.dist.images + '/favicon'));

    return true;
});
