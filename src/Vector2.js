/**
* @constructor
* @param {number} x - Vector x coordinate
* @param {number} y - Vector y coordinate
* @returns {object} pos - Position ({x: x, y: y})
*/
E2D.Scene.prototype.Vector2 = (function() {
  function Vector2(x, y) {
    this.x = typeof x == "number" ? x : 0;
    this.y = typeof y == "number" ? y : 0;
  }
  Vector2.prototype.getPos = function() {
    return this;
  };
  Vector2.prototype.getX = function() {
    return this.x;
  };
  Vector2.prototype.getY = function() {
    return this.y;
  };
  Vector2.prototype.setPos = function(pos) {
    this.x = typeof pos.x == "number" ? pos.x : this.x;
    this.y = typeof pos.y == "number" ? pos.y : this.y;
  };
  Vector2.prototype.setX = function(x) {
    this.x = typeof x == "number" ? x : this.x;
  };
  Vector2.prototype.setY = function(y) {
    this.y = typeof y == "number" ? y : this.y;
  };
  Vector2.prototype.distanceTo = function(pos) {
    return Math.sqrt(Math.pow(pos.x - this.x, 2) + Math.pow(pos.y - this.y, 2));
  };
  Vector2.prototype.midpoint = function(pos) {
    return new Vector2((this.x + pos.x) / 2, (this.y + pos.y) / 2);
  };
  Vector2.prototype.translate = function(to) {
    if (arguments.length == 2) {
      this.x += typeof arguments[0] == "number" ? arguments[0] : 0;
      this.y += typeof arguments[1] == "number" ? arguments[1] : 0;
    } else if (to instanceof Vector2) {
      this.x += to.x || 0;
      this.y += to.y || 0;
    }
    return {x: this.x, y: this.y};
  };

  return Vector2;
})();
