# PrimeNgScheduleIssue

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.0.8.

## Schedule

Added `"primeng": "^6.0.0"`, `"primeicons": "^1.0.0-beta.6"`, `"fullcalendar": "^3.6.2"` to packages.json
npm install
Added `"node_modules/primeng/resources/primeng.min.css"`, `"node_modules/primeng/resources/themes/omega/theme.css"`, `"node_modules/fullcalendar/dist/fullcalendar.min.css"` to styles in angular.json
Added `"node_modules/jquery/dist/jquery.min.js"`, `"node_modules/moment/min/moment.min.js"`, `"node_modules/fullcalendar/dist/fullcalendar.min.js"` to scripts in angular.json
Added `import {ScheduleModule} from 'primeng/schedule';` and `ScheduleModule` to import list in app.module.ts
Added `<p-schedule></p-schedule>` to App.component.html

When run with `ng serve` the app shows the following errors and seems to periodically re-display the error:

```
AppComponent.html:21 ERROR TypeError: e.addClass is not a function
    at t.initialRender (fullcalendar.min.js:10)
    at t.render (fullcalendar.min.js:10)
    at Schedule.push../node_modules/primeng/components/schedule/schedule.js.Schedule.initialize (schedule.js:222)
    at Schedule.push../node_modules/primeng/components/schedule/schedule.js.Schedule.ngAfterViewChecked (schedule.js:208)
    at callProviderLifecycles (core.js:9355)
    at callElementProvidersLifecycles (core.js:9326)
    at callLifecycleHooksChildrenFirst (core.js:9316)
    at checkAndUpdateView (core.js:10252)
    at callViewAction (core.js:10484)
    at execComponentViewsAction (core.js:10426)
```