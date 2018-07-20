# PrimeNgScheduleIssue

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.6.4.

This was then upgraded to Angular6 by hand (editing packages.json, adding PrimeNg, FullCalendar)
Schedule

Added `import {ScheduleModule} from 'primeng/schedule';` and `ScheduleModule` to import list in app.module.ts
Added `<p-schedule></p-schedule>` to App.component.html

This was then run to update the json file:
ng update @angular/cli 

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
