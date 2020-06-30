const chai = require('chai');
const should = chai.should();

const Card = require('../src/Card');
const Turn = require('../src/Turn');

describe('Turn', function() {

    it('should be a function', function() {
        let turn = new Turn();
        (Turn).should.be.a('function');
    })

    it('should be an instance of Turn', function() {
        let turn = new Turn();
        (turn).should.be.an.instanceOf(Turn);
    })

    it('should store a users answer', function() {
        let turn = new Turn('array');
        (turn.userAnswer).should.equal('array');
    })

    it('should store a Card', function() {
        let card = new Card(2, "What is a comma-separated list of related values?", ["array", "object", "function"], "array");
        let turn = new Turn('array', card);
        (turn.currentCard).should.deep.equal({
            "id": 2,
            "question": "What is a comma-separated list of related values?",
            "answerChoices": ["array", "object", "function"],
            "correctAnswer": "array"
        })
    })
})