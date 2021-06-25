const express = require('express')
const router = express.router();
const ClassSurveyModel = require('../models/ClassSurveyModel');

router.get('/', async (req, res) => {
    const topicData = await ClassSurveyModel.getAllTopicData();
    console.log("TOPIC DATA")
    res.render('template', {
        locals: {
            title: 'Class Survey',
            data: topicData
        },
        partials: {
            body: 'partials/home'
        }
    })
});

modules.exports = router;