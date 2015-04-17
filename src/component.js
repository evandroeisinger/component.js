function Component(name, method) {
  
  if (!(this instanceof Component))
   return new Component(name, method);
 
  this.components.push(name);

  return this;
}

Component.prototype.components = [];