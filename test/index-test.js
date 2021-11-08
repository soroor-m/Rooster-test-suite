const assert = require('assert');
const Rooster = require('../index');

describe('Rooster', () => {
    describe('.announceDawn', () => {
        it('returns a rooster call', () => {
            //Setup
            const expected = 'cock-a-doodle-doo!';
            //Exercise
            const actual = Rooster.announceDawn();
            //Verify
            assert.equal(actual, expected);
        });
    });

    describe('.timeDawn', () => {
        it('returns its argument as a string', () => {
            //Setup 
            const hour = 7;
            const expected = '7';
            //Exercise
            const actual = Rooster.timeAtDawn(hour);
            //Verify
            assert.strictEqual(actual, expected);
        });

        it('throws an error if passed a number less than 0', () => {
            //Setup
            const hour = -1;
            const expected = RangeError;
            //Exercise
            const actual = () => Rooster.timeAtDawn(hour);
            //Verify
            assert.throws(actual, expected);
        });

        it('throws an error if passed a number more than 23', () => {
            //Setup
            const hour = 25;
            const expected = RangeError;
            //Exercise
            const actual = () => Rooster.timeAtDawn(hour);
            //Verify
            assert.throws(actual, expected);
        });
    });
})    