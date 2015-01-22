/**
 * Created by bwhitten on 1/22/15.
 */

Meteor.subscribe('calendar', function () {
	Session.set('superCalendarReady', true);
});
