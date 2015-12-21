E2D.Scene = (function() {
  /**
  * @param {Object} options - Scene options
  * @param {boolean} options.logging - Whether or not to log things.
  * @param {int} options.idLength - Default ID length for objects.
  */
  function Scene(options) {
    options = options || {};
    this._options = {};
    this._options.logging = options.logging || true;
    this._options.idLength = options.idLength || 16;
    if (this._options.logging) {
      console.log("E2D v" + E2D.VERSION);
    }
    this._ids = {};
    this._objects = {};
    this._disabledObjects = {};
  }
  return Scene;
})();
