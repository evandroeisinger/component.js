# modules.js


**define**:
```javascript
var moduleConstructor = function(data) {}
var modulePrototype = {};

modules.define('ModuleName', moduleConstructor, modulePrototype);
```

**require**:
```javascript
var ModuleName = modules.require('ModuleName');
var moduleName = new ModuleName();
```

**__subscribe**:
```javascript
// listen to a single event
moduleName.__subscribe('eventName', function callback(data) {});

// asign to multiple events
moduleName.__subscribe(['eventName', 'otherEventName'], function callback(data) {});

// also avaiable on constructor and prototype context
modules.define('ModuleName', function(){
  this.__subscribe('eventName', function(){});
}, {
  method: function() {
    this.__subscribe('eventName', function(){});
  }
});
```

**__emmit**:
```javascript
// emmit a single event
moduleName.__emmit('eventName', {});

// also avaiable on constructor and prototype context
modules.define('ModuleName', function(){
  this.__emmit('eventName', {});
}, {
  method: function() {
    this.__emmit('eventName', {});
  }
});
```
