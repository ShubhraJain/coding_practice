

var bind = (func, context) => {
  // it needs to save the previous args to use in its final output
  var prevArgs = Array.prototype.slice.call(arguments, 2);

  return function() {
    var args = Array.prototype.call(arguments);
    args = prevArgs.concat(args);
    return func.apply(context, args)
  }
}

Function.prototype.bind = (context) => {
  // method is attached to the prototype, so just refer to it as this.
  var func = this;
  var prevArgs = Array.prototype.call(arguments, 2);

  return function() {
    var args = Array.prototype.slice.call(arguments);
    args = prevArgs.concat(args);
    return func.apply(context, args);
  }
}