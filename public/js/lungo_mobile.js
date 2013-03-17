Lungo.init({
  name: 'Activitar Ticketing',
  version: '1.0',
  sugars: ['map', 'pull'] 
});
 
var App = (function(lng, undefined) {
 
    eventConsole = function(event) {
        $$('#touchevents-console').html($$(event.target).data('event'));
    };
 
    triggerCapture = function(event) {
        event.stopPropagation();
        lng.Notification.success("Event: " + event.type, "Layout events manager", "info", 2);
    };
 
    environment = function(event) {
        var environment = lng.Core.environment();
        var el = lng.dom("section#environment > article");
 
        if (environment.os) {
            el.find("#os > strong").html(environment.os.name);
            el.find("#os > small").html(environment.os.version);
        }
        el.find("#resolution > strong").html(environment.screen.height + "p x " + environment.screen.width + "p");
        el.find("#navigator > strong").html(environment.browser);
        el.find("#navigator > small").html("Mobile: " + environment.isMobile);
    };
 
    return {
        eventConsole: eventConsole,
        triggerCapture: triggerCapture,
        environment: environment
    };
 
})(Lungo);
 
var nullFunction = function() {};