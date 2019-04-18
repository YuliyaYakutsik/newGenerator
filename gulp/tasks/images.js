import gulp     from 'gulp';
import imagemin from 'gulp-imagemin';
import pngquant from 'imagemin-pngquant';
import settings from '../settings';

gulp.task('images', () => {
    return gulp.src(settings.src.images + '/*.{jpg,jpeg,png,svg,ico,JPG}')
        .pipe(imagemin({
            progressive: true,
            svgoPlugins: [
                {
                    removeViewBox: false
                },
                {
                    cleanupIDs: {
                        remove: false,
                        minify: false
                    }
                }
            ],
            use: [pngquant()]
        }))
        .pipe(gulp.dest(settings.dist.images));
});
