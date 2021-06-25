'use strict'

const db = require('./conn');

class classSurveyModel {
    constructor(id, topic_name, topic_score) {
        this.id = id;
        this.topic_name = topic_name;
        this.topic_score = topic_score;
    }

    static async getAllTopicData() {
        try {
            const response = await db.any(
                `SELECT * FROM topics;`
            )

        } catch (error) {
            console.error('ERROR', error);
            return error; 
        }

    }
}

module.exports = classSurveyModel