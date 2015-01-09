"use strict";

var mip = source("cylon-mip");

var Driver = source("driver");

describe("Cylon.MIP", function() {
  describe("#drivers", function() {
    it("is an array of provided drivers", function() {
      expect(mip.drivers).to.be.eql(["mip"]);
    });
  });

  describe("#driver", function() {
    it("returns an instance of the MIP", function() {
      var args = { adaptor: {} };
      expect(mip.driver(args)).to.be.instanceOf(Driver);
    });
  });
});
