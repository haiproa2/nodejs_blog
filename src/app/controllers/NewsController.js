const News = require('../models/News');

class NewsController{

    // [GET] /news
    index(req, res){
        News.find({}, function (err, docs) {
            if(!err) res.json(docs);
            else res.status(400).json({error: "ERROR!!!"});
            // docs.forEach
        });
        /* res.json({
            name: 'Test',
        });

        res.render('news'); */
    }

    // [GET] /news/:slug
    show(req, res){
        res.send('news detail page');
    }
}

module.exports = new NewsController;