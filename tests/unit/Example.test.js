const bootstrap = require('../../bootstrap/test');
const chai      = bootstrap.getChai();
const should    = chai.should();

describe('Example unit tests', function() {
    describe('Test addition', function() {
        it('should return 2', function() {
            const result = 1 + 1;

            result.should.be.equal(2);
        });
    });
});
