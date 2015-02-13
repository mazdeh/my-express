module.exports = function(app) {

    app.get('/view/repo/:id', function(req, res) {

        var repos = app.db.get('repos')

         var q = {
            'id': req.params.id            
        }

        var repo = repos.findOne(q, function(err, item) {

            res.render('viewRepo.jade', {
                repo: item
            })
        })

    })
}