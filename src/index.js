String.prototype.replaceAt=function(index, character) {
    return this.substr(0, index) + character + this.substr(index+character.length);
}

let NagoyaPhp10 = {
    seats: '',
    start: 1,
    end: null,
    checkAndDeciderMap: {
        '---': [function(found) { return found + 1; }, 0],
        '--':  [function(found) { return (found === 0) ? 1 : found; }, 0],
        '-':   [function(found) { return found; }, 1]
    },

    parseInput(input) {
        let temp = input.split(':')

        this.end = parseInt(temp[0]);
        this.seats = '-'.repeat(this.end + 2);

        return temp[1];
    },

    run(input) {
        let arrivings = this.parseInput(input);
        for (let arriving of arrivings) {
            if (arriving.toUpperCase() === arriving) {
                this.processArriving(arriving);
            } else if (arriving.toLowerCase() === arriving) {
                this.processLeaving(arriving);
            }
        }

        return this.output();
    },

    processArriving(arriving) {
        let index = this.findSeat();
        if (index) {
            this.seats = this.seats.replaceAt(index, arriving);
        }
    },

    processLeaving(leaving) {
        this.seats = this.seats.replace(leaving.toUpperCase(), '-');
    },

    findSeat() {
        let seat = -1;
        for (let checking in this.checkAndDeciderMap) {
            let decider = this.checkAndDeciderMap[checking];
            let index = -1;
            if ((index = this.seats.indexOf(checking, decider[1])) === -1) continue;

            if (seat = decider[0](index)) break;
        }

        return seat;
    },

    output() {
        return this.seats.substr(1, this.end);
    },
};

export default NagoyaPhp10;
