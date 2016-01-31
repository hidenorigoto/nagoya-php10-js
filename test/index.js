import chai from 'chai';
import NagoyaPhp10 from '../src/index.js';

var expect = chai.expect;

describe('nagoya-php10-js', () => {
    describe('parseInput()', () => {
        it('should return parsed object', () => {
            expect(NagoyaPhp10.parseInput('1:A')).to.equal('A');
        });
    });

    describe('run()', () => {

        var test = function(input, expected) {
            it('should return expected results', () => {
                expect(NagoyaPhp10.run(input)).to.equal(expected);
            });
        };

        /*1*/ test( "6:NABEbBZn", "-ZAB-E" );
        /*2*/ test( "1:A", "A" );
        /*3*/ test( "1:Aa", "-" );
        /*4*/ test( "2:AB", "AB" );
        /*5*/ test( "2:AaB", "B-" );
        /*6*/ test( "2:AZa", "-Z" );
        /*7*/ test( "2:AZz", "A-" );
        /*8*/ test( "3:ABC", "ACB" );
        /*9*/ test( "3:ABCa", "-CB" );
        /*10*/ test( "4:ABCD", "ADBC" );
        /*11*/ test( "4:ABCbBD", "ABDC" );
        /*12*/ test( "4:ABCDabcA", "-D-A" );
        /*13*/ test( "5:NEXUS", "NUESX" );
        /*14*/ test( "5:ZYQMyqY", "ZM-Y-" );
        /*15*/ test( "5:ABCDbdXYc", "AYX--" );
        /*16*/ test( "6:FUTSAL", "FAULTS" );
        /*17*/ test( "6:ABCDEbcBC", "AECB-D" );
        /*18*/ test( "7:FMTOWNS", "FWMNTSO" );
        /*19*/ test( "7:ABCDEFGabcdfXYZ", "YE-X-GZ" );
        /*20*/ test( "10:ABCDEFGHIJ", "AGBHCIDJEF" );
    });
});
