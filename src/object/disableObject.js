/**
* @param {string} id - ID of object to disable
* @returns {boolean} success - Whether or not the object was disabled.
*/
E2D.Scene.prototype.disableObject = function(id) {
  var self = this;
  if (typeof self._objects[id] == "undefined") {
    console.warn(id + " either doesn't exist, or hasn't been added to the scene. Object was not disabled (@disableObject");
    return false;
  }
  self._disabledObjects[id] = self._objects[id];
  self.destroyObject(id);
  return true;
}
