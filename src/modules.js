(function(global) {
  'use strict';

  function _subscribe(_event, _callback) {
    if (!_event || !_event.length || !_callback)
      throw new Error('Module: Can\'t subscribe without a event or callback');
    if (!_event instanceof String || !_event instanceof Array || typeof _callback !== 'function')
      throw new Error('Module: Can\'t subscribe without a valid event or callback');

    if (_event instanceof Array) {
      for (var i = _event.length - 1; i >= 0; i--) {
        this.__listeners.push({
          event: _event[i],
          callback: _callback
        });
      }

      return;
    }

    this.__listeners.push({
      event: _event,
      callback: _callback
    });
  }

  function _emmit(_event, _data) {
    if (!_event)
      throw new Error('Module: Can\'t emmit without a event');
    if (!_event instanceof String)
      throw new Error('Module: Can\'t emmit without a valid event');

    for (var i = this.__listeners.length - 1; i >= 0; i--) {
      if (this.__listeners[i].event === _event)
        this.__listeners[i].callback(_data);
    }
  }

  function _define(_name, _constructor, _prototype) {
    if (!_name || typeof _name !== 'string' || !_name.length)
      throw new Error('Module: Can\'t register without a valid name');

    if (!_constructor || typeof _constructor !== 'function')
      throw new Error('Module '+ _name +': Can\'t register without a valid constructor');
    
    if (_prototype && typeof _prototype !== 'object')
      throw new Error('Module '+ _name +': Can\'t register without a valid prototype');

    this.modules.push({
      name: _name,
      constructor: _constructor,
      prototype: _prototype
    });
  }

  function _require(_name) {
    var module;

    for (var i = this.modules.length - 1; i >= 0; i--) {
      if (this.modules[i].name === _name) {
        module = this.modules[i];
        break;
      }
    }

    if (!module)
      throw new Error('Module '+ _name +': Can\'t be loaded ');

    module.constructor.prototype = module.prototype || {};
    module.constructor.prototype.__listeners = [];
    module.constructor.prototype.__subscribe = _subscribe;
    module.constructor.prototype.__emmit = _emmit;

    return module.constructor;
  }


  global.modules = {
    modules: [],
    define: _define,
    require: _require
  };
})(window);
