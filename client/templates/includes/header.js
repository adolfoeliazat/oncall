/**
 * Created by bwhitten on 1/22/15.
 */

Template.header.events({
	'click #start-draft': function (e) {
		e.preventDefault();

		// todo extract this out into some sort of model (or figure out how to do singleton records correctly) to make it testable that we can only ever update a single draft record
		Draft.upsert({ _id: 1 }, { started: true });
		Tracker.flush();
	},
	'click #end-draft': function (e) {
		e.preventDefault();
	}
});
