var assert = require("assert");
var E2D = require("../dist/e2d");

var scene = new E2D.Scene({
  logging: false,
  idLength: 8
});
var testObject = scene.addObject({
  id: "testObject",
  pos: {
    x: 0,
    y: 0
  }
});
var testObject2 = scene.addObject({
  id: "testObject2",
  pos: {
    x: 0,
    y: 0
  }
});
var testVec = new scene.Vector2(2, 2);
var testVec2 = new scene.Vector2();
var testVec3 = new scene.Vector2(2, 3);
describe("E2D", function() {
  describe("#Scene", function() {
    it("should create a new object", function() {
      assert.equal(typeof scene, "object");
    });
    it("should have associative arrays called _objects, _disabledObjects, and _ids.", function() {
      assert.equal(typeof scene._ids, "object");
      assert.equal(typeof scene._objects, "object");
      assert.equal(typeof scene._disabledObjects, "object");
    });
    it("should have configureable options", function() {
      assert.equal(scene._options.logging, true);
      assert.equal(scene._options.idLength, 8);
    });
    it("should be an instance of itself", function() {
      assert.equal(scene instanceof E2D.Scene, true);
    });
  });
  describe("#addObject", function() {
    it("should return an object", function() {
      assert.equal(typeof testObject, "object");
    });
    it("should add an object to scene's _objects array", function() {
      assert.equal(scene._objects[testObject.id], testObject);
    });
  });
  describe("#destroyObject", function() {
    it("should remove object and return true", function() {
      assert.equal(scene.destroyObject(testObject.id), true);
      assert.equal(typeof scene._objects[testObject.id], "undefined");
    });
    it("should return false on invalid id", function() {
      assert.equal(scene.destroyObject("this_is_invalid"), false);
    });
  });
  describe("#disableObject", function() {
    it("should remove an object from _objects, and move it to _disabledObjects", function() {
      assert.equal(scene._objects[testObject2.id], testObject2);
      scene.disableObject(testObject2.id);
      assert.equal(typeof scene._objects[testObject2.id], "undefined");
      assert.equal(scene._disabledObjects[testObject2.id], testObject2);
    });
  });
  describe("#enableObject", function() {
    it("should remove an object from _disabledObjects, and move it to _objects", function() {
      assert.equal(scene._disabledObjects[testObject2.id], testObject2);
      scene.enableObject(testObject2.id);
      assert.equal(typeof scene._disabledObjects[testObject2.id], "undefined");
      assert.equal(scene._objects[testObject2.id], testObject2);
    });
  });
  describe("#Vector2", function() {
    it("should be an instance of itself", function() {
      assert.equal(testVec instanceof scene.Vector2, true);
    });
    it("should default to (0, 0)", function() {
      assert.equal(testVec2.x, 0);
      assert.equal(testVec2.y, 0);
    });
    it("should have it's x and y values attached to itself", function() {
      assert.equal(testVec.x, 2);
      assert.equal(testVec.y, 2);
    });
    it("should return its position on self.getPos", function() {
      assert.equal(testVec.getPos().x, 2);
      assert.equal(testVec.getPos().y, 2);
    });
    it("should return distance to other point on self.distanceTo", function() {
      assert.equal(testVec.distanceTo(testVec3), 1);
    });
    it("should return midpoint between self and other point on self.midpoint", function() {
      var testVec4 = new scene.Vector2(0, 0);
      var testVec5 = new scene.Vector2(0, 2);
      var expectedVec = new scene.Vector2(0, 1);
      assert.equal(testVec4.midpoint(testVec5).x, expectedVec.x);
      assert.equal(testVec4.midpoint(testVec5).y, expectedVec.y);
    });
    it("should be translateable", function() {
      assert.equal(testVec.x, 2);
      assert.equal(testVec.y, 2);
      testVec.translate(3, 4);
      assert.equal(testVec.x, 5);
      assert.equal(testVec.y, 6);
    });
  });
});
