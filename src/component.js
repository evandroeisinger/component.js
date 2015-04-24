var Component = (function(global) {
  'use strict';

  function Component() {
    if (!(this instanceof Component))
      return new Component(arguments[0], arguments[1]);

    if (typeof arguments[0] === 'string')
      return this.require(arguments[0], arguments[1]);
    
    else if (typeof arguments[0] === 'object' && !arguments[1])
      return this.register(arguments[0]);
    
    else
      throw new Error('Component: Invalid call!');
  }

  Component.prototype = {
    components: [],
    
    register: function(_component) {
      var name = _component.__name,
          constructor = _component.__constructor,
          prototype = _component.__prototype,
          component;

      if (!name || typeof name !== 'string' || !name.length)
        throw new Error('Component: Can\'t register without a valid name');

      if (!constructor || typeof constructor !== 'function')
        throw new Error('Component: Can\'t register without a valid constructor');
      
      if (prototype && typeof prototype !== 'object')
        throw new Error('Component: Can\'t register without a valid prototype');

      component = constructor;
      component.prototype = prototype;

      this.components.push({
        name: name,
        component: component
      });
    },

    require: function(_name, _arguments) {
      var components = this.components,
          component;

      for (var i = components.length - 1; i >= 0; i--) {
        if (components[i].name === _name) {
          component = components[i].component;
          break;
        }
      };

      return new component(_arguments);
    } 
  }

  return Component;
})(window);
