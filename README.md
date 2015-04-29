# modules.js


**export**:
```javascript
var moduleConstructor = function(data) {}
var modulePrototype = {};

modules.export('ModuleName', moduleConstructor, modulePrototype);
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

// also avaiable on constructor
var moduleConstructor = function() {
  this.__subscribe('eventName', function(){});
};

// and prototype context
var modulePrototype = {
  method: function() {
    this.__subscribe('eventName', function(){});
  }
};

modules.export('ModuleName', moduleConstructor, modulePrototype);
```

**__emmit**:
```javascript
// emmit a single event
moduleName.__emmit('eventName', {});

// also avaiable on constructor
var moduleConstructor = function() {
  this.__emmit('eventName', {});
};

// and prototype context
var modulePrototype = {
  method: function() {
    this.__emmit('eventName', {});
  }
};

modules.export('ModuleName', moduleConstructor, modulePrototype);
```
