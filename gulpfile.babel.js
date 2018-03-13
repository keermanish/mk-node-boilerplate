import gulp from 'gulp';
import watch from 'gulp-watch';
import rimraf from 'rimraf';
import run from 'run-sequence';
import babel from 'gulp-babel';
import nodemon from 'gulp-nodemon';

/* required path config */
const path = {
  'entry': './dist/index.js',
  'files': {
    'dev': ['./src/**/*.js'],
    'dist': ['./dist/**/*.js', './dist/index.js']
  },
  'dist': './dist'
};

/* default/local mode - gulp */
gulp.task('default', ['set-dev-node-env'], cb => {
  run('build', 'watch', cb);
});

/* production mode - gulp prod */
gulp.task('prod', ['set-prod-node-env'], cb => {
  run('build', 'watch', cb);
});

/* stage mode - gulp prod */
gulp.task('stage', ['set-stage-node-env'], cb => {
  run('build', 'watch', cb);
});

/* set development env */
gulp.task('set-dev-node-env', () => {
  process.env.NODE_ENV = 'development';
});

/* set production env */
gulp.task('set-prod-node-env', () => {
  process.env.NODE_ENV = 'production';
});

/* set stage env */
gulp.task('set-stage-node-env', () => {
  process.env.NODE_ENV = 'stage';
});

/**
* task to bootstrap the application
* clean - clear old scripts
* babel - transpile ES6 -> ES5
* start-server - start node server
*/
gulp.task('build', cb => {
  run('clean', 'babel', 'start-server', cb);
});

/**
* task to watch for changes
*/
gulp.task('watch', () => {
  return watch(path.files.dev, () => {
    gulp.start('watch-build');
  });
});

/**
* task update scripts as per changes made
* clean - clear old scripts
* babel - transpile ES6 -> ES5
*/
gulp.task('watch-build', cb => {
  run('clean', 'babel', cb);
});

/* task to clear old scripts */
gulp.task('clean', cb => {
  rimraf(path.dist, cb);
});

/* task to transpile ES6 -> ES5 */
gulp.task('babel', () => {
  return gulp.src(path.files.dev)
  .pipe(babel({
    'presets': ['es2015'],
    'plugins': [
      ['inline-json-import', {}]
    ]
  }))
  .pipe(gulp.dest(path.dist));
});

/* task to start server - here we are using nodemon to watch for changes */
gulp.task('start-server', () => {
  nodemon({
    'script': path.entry
  })
  .on('start', () => {
    console.log('server has been started');
  })
  .on('restart', () => {
    console.log('server has been restarted');
  })
  .on('exit', () => {
    console.log('server has been stped');
  });
});
