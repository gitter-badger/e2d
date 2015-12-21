/**
* @param {string} id - ID of object to destroy.
* @returns {boolean} status - Whether the object was deleted.
*/
E2D.Scene.prototype.destroyObject = function(id) {
  var self = this;
  if (typeof self._objects[id] == "undefined") {
    console.warn(id + " either doesn't exist, or hasn't been added to the scene. Object was not destroyed (@destroyObject)");
    return false;
  }
  delete self._objects[id];
  return true;
};
