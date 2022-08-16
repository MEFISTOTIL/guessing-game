class GuessingGame {
	constructor(minvalue, maxvalue) {
		this.minvalue;
		this.maxvalue;

	}

	setRange(min, max) {
		this.minvalue = min;
		this.maxvalue = max;

	}

	guess() {
		return Math.round((this.maxvalue - this.minvalue) / 2) + this.minvalue;
	}

	lower() {
		this.maxvalue = Math.round((this.maxvalue - this.minvalue) / 2) + this.minvalue;
	}

	greater() {
		this.minvalue = Math.round((this.maxvalue - this.minvalue) / 2) + this.minvalue;
	}
}





module.exports = GuessingGame;

