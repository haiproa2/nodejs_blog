const News = require('../models/News');

const { multipleMongooseToObject } = require('../../until/mongoose');

class NewsController{

    // [GET] /news
    index(req, res, next){
        /* res.json({
            name: 'Test',
        });

        res.render('news'); */

        /* News.find({}, function (err, docs) {
            if(!err) res.json(docs);
            else next(err);
        }); */

        /* News.find({})
            .then(docs => res.json(docs))
            .catch(next); */

        News.find({})
            .then(docs => {
                //docs = docs.map(docs => docs.toObject());
                res.render('news', {
                    docs: multipleMongooseToObject(docs)
                })
            })
            .catch(next);
    }

    // [GET] /news/:slug
    show(req, res){
        res.send('news detail page');
    }
}

module.exports = new NewsController;