module.exports = function(app) {

	app.get('/list/events', function(req, res) {

        var events = app.db.get('events')

        events.find({}, function(err, events) {
        		limit: 30
            res.render('listEvents.jade', {
                events: events
            })
        })

    })
}