module.exports = function(app) {

    app.get('/view/repo/:id', function(req, res) {

        var repos = app.db.get('repos')

         var q = {
            'id': Number(req.params.id)
        }

        var repos = repos.findOne(q, function(err, item) {

            res.render('viewRepo.jade', {
                repos: item
            })
        })

    })
}