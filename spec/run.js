import Jasmine from 'jasmine';
import JasmineConsoleReporter from 'jasmine-console-reporter';

var jasmine = new Jasmine();
jasmine.loadConfigFile('spec/support/jasmine.json');
jasmine.jasmine.DEFAULT_TIMEOUT_INTERVAL = 15000;
const reporter = new JasmineConsoleReporter({
    colors: 1,           
    cleanStack: 1,       
    verbosity: 4,        
    listStyle: 'indent', 
    timeUnit: 'ms',      
    timeThreshold: { ok: 500, warn: 1000, ouch: 3000 }, 
    activity: true,
    emoji: true,         
    beep: true
});
jasmine.env.clearReporters();
jasmine.addReporter(reporter);
jasmine.execute();