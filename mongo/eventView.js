module.exports = function(app) {

    app.get('/view/event/:id', function(req, res) {

        var events = app.db.get('events')

         var q = {
            'id': req.params.id            
        }

        var events = events.findOne(q, function(err, item) {

            res.render('viewEvent.jade', {
                events: item
            })
        })

    })
}