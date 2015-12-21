/**
* @param {int} length - Length of ID to generate; default is 16 characters.
* @returns {string} id - Random ID to be used with anything.
*/
E2D.Scene.prototype.generateId = function(length) {
  var self = this;
  length = length || self._options.idLength;
  var chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ$_", id = "";
  for (var i = 0; i < length; i++) {
    id += chars[Math.floor(Math.random() * chars.length)];
  }
  return id;
};
