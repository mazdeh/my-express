module.exports = function(app) {

	app.get('/list/repos', function(req, res) {

        var repos = app.db.get('repos')

        repos.find({}, function(err, repos) {

            res.render('listRepos.jade', {
                repos: repos
            })
        })

    })
}