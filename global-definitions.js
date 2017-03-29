const rollup_globals_definitions = {
    '@angular/common': 'ng2.common',
    '@angular/compiler': 'ng2.compiler',
    '@angular/core': 'ng2.core',
    '@angular/http': 'ng2.http',
    '@angular/platform-browser': 'ng2.platformBrowser',
    '@angular/platform-browser-dynamic': 'ng2.platformBrowserDynamic',
    '@angular/platform-webworker': 'ng2.platformWebWorker',
    '@angular/router': 'ng2.router',
    '@angular/forms': 'ng2.forms',

    'rxjs/Observable': 'Rx',
    'rxjs/Subject': 'Rx',
    'rxjs/observable/fromPromise': 'Rx.Observable',
    'rxjs/operator/toPromise': 'Rx.Observable.prototype',
    'rxjs/BehaviorSubject': 'Rx',
    'rxjs/Subscription': 'Rx',
    'rxjs/util/EmptyError': 'Rx',

    'rxjs/observable/from': 'Rx.Observable',
    'rxjs/observable/fromPromise': 'Rx.Observable',
    'rxjs/observable/merge': 'Rx.Observable',
    'rxjs/observable/forkJoin': 'Rx.Observable',
    'rxjs/observable/of': 'Rx.Observable',

    'rxjs/operator/toPromise': 'Rx.Observable.prototype',
    'rxjs/operator/map': 'Rx.Observable.prototype',
    'rxjs/operator/mergeAll': 'Rx.Observable.prototype',
    'rxjs/operator/concatAll': 'Rx.Observable.prototype',
    'rxjs/operator/mergeMap': 'Rx.Observable.prototype',
    'rxjs/add/operator/switchMap': 'Rx.Observable.prototype',
    'rxjs/operator/reduce': 'Rx.Observable.prototype',
    'rxjs/operator/every': 'Rx.Observable.prototype',
    'rxjs/operator/first': 'Rx.Observable.prototype',
    'rxjs/operator/catch': 'Rx.Observable.prototype',
    'rxjs/operator/last': 'Rx.Observable.prototype',
    'rxjs/operator/filter': 'Rx.Observable.prototype',
    'rxjs/operator/concatMap': 'Rx.Observable.prototype',
    'rxjs/operator/share': 'Rx.Observable.prototype',

    'rxjs/observable/PromiseObservable': 'Rx',
    'rxjs/symbol/observable': 'Rx.Symbol',
    'reflect-metadata': 'Reflect',
    'Reflect': 'Reflect'
};

export default {
    rollup_globals_definitions
}
