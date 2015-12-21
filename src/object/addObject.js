/**
* @param {Object} options - The object's options.
* @param {Object} options.pos - The object's position.
* @param {int} options.pos.x - The object's X coordinate.
* @param {int} options.pos.y - The object's Y coordinate.
*/
E2D.Scene.prototype.addObject = function(options) {
  var self = this;
  if (typeof options == "undefined") {
    options = {
      pos: {
        x: 0,
        y: 0
      }
    };
  } else {
    if (typeof options.pos.x != "number" || typeof options.pos.y != "number") {
      console.warn("Invalid position supplied. Using (0, 0) (@addObject)");
    }
  }
  var obj = {};
  obj.id = options.id || self.generateId();
  obj.body = {
    pos: options.pos,
  };
  self._objects[obj.id] = obj;
  return obj;
};
