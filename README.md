# modules.js


**define**:
'''
var moduleConstructor = function(data) {}
var modulePrototype = {};

modules.define('ModuleName', moduleConstructor, modulePrototype);
'''

**require**:
'''
var ModuleName = modules.require('ModuleName');
'''

**__subscribe**:
'''
moduleName.__subscribe('eventName', function Callback(data) {});

// asign to multiple events
moduleName.__subscribe(['eventName', 'otherEventName'], function Callback(data) {});

// also avaiable on constructor and prototype context
modules.define('ModuleName', function(){
  this.__subscribe('eventName', function(){});
}, {
  method: function() {
    this.__subscribe('eventName', function(){});
  }
});
'''

**__emmit**:
'''
moduleName.__emmit('eventName', {});

// also avaiable on constructor and prototype context
modules.define('ModuleName', function(){
  this.__emmit('eventName', {});
}, {
  method: function() {
    this.__emmit('eventName', {});
  }
});
'''