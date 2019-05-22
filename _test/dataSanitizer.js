const assert = require('assert');
const dataSanitizer = require('./../src/dataSanitizer.js');
const data = [1,0, "string", false, -1, 'false', '', undefined, null, {}, [],1];




describe('data Sanitizer', function() {
  describe('#indexOf()', function() {
    it('should return -1 when the value is not present', function() {
      assert.equal(dataSanitizer.cleanUpNullableValues(data), -1);
    });
  });
});
