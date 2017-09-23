export default {
  input: 'build/src/index.js',
  output: {
    file: 'build/bundles/apollo.umd.js',
    format: 'umd'
  },
  name: 'ng.apollo',
  sourcemap: true,
  onwarn,
  globals: {
    '@angular/core': 'ng.core',
    'rxjs/Observable': 'Rx',
    'rxjs/Observable/from': 'Rx.Observable',
    'rxjs/Observable/fromPromise': 'Rx.Observable',
    'rxjs/scheduler/queue': 'Rx.Scheduler',
    'rxjs/operators': 'Rx.Observable.prototype',
    'apollo-client-rxjs': 'apollo.rxjs',
    'apollo-client': 'apollo',
  }
};

function onwarn(message) {
  const suppressed = [
    'UNRESOLVED_IMPORT',
    'THIS_IS_UNDEFINED'
  ];

  if (!suppressed.find(code => message.code === code)) {
    return console.warn(message.message);
  }
}
