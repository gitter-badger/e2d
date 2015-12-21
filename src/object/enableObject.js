/**
* @param {string} id - ID of object to enable
* @returns {boolean} success - Whether or not the object was enabled.
*/
E2D.Scene.prototype.enableObject = function(id) {
  var self = this;
  if (typeof self._disabledObjects[id] == "undefined") {
    console.warn(id + " either doesn't exist, hasn't been disabled, or hasn't been added to the scene. Object was not enabled (@enableObject");
    return false;
  }
  self._objects[id] = self._disabledObjects[id];
  delete self._disabledObjects[id];
  return true;
}
