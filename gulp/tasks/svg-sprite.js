import gulp      from 'gulp';
import svgSprite from 'gulp-svg-sprites';
import imagemin  from 'gulp-imagemin';
import pngquant  from 'imagemin-pngquant';
import settings  from '../settings';

gulp.task('svgSprite', () => {
    const sprite = settings.src.sprite;

    for (let key in sprite) {
        gulp.src(settings.src.sprite[key] + '/*.svg')
            .pipe(imagemin({
                progressive: true,
                svgoPlugins: [{removeViewBox: false}],
                use: [pngquant()]
            }))
            .pipe(svgSprite({
                mode: "symbols",
                svg: {
                    symbols: `sprite/sprite-${key}-symbols.svg`
                },
                preview: {
                    symbols: `../sprite-${key}-preview.html`
                }
            }))
            .pipe(gulp.dest(settings.dist.images));
    }

    return true;
});
