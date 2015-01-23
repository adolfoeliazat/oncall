/**
 * Created by bwhitten on 1/22/15.
 */

Meteor.subscribe('calendar', function () {
	Session.set('superCalendarReady', true);
});

// Updates app state so draft participants are forwarded when the draft is begun
Tracker.autorun(function () {
	var draft = Draft.findOne();

	if (draft) {
		Session.set('draftStarted', draft.started ? true : false);
	}
});

// Redirects user to draft order screen if they are eligible, and the draft has been started
Tracker.autorun(function () {
	if (Meteor.userId() && Meteor.user().eligible) {
		if (Session.get('draftStarted')) {
			Router.go('draftOrder');
		}
	}
});
