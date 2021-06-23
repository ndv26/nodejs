const Course = require('../models/Course');

const { mongoosesToObject } = require('../../util/mongoose');

class SiteController {
    // [GET] /
    home(req, res, next) {
        Course.find({})
            .then((courses) => {
                res.render('home', { courses: mongoosesToObject(courses) });
            })
            .catch(next);
    }

    // [GET] /search
    search(req, res) {
        res.render('search');
    }
}

module.exports = new SiteController();
