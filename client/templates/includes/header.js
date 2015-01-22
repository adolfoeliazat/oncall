/**
 * Created by bwhitten on 1/22/15.
 */

Template.header.events({
	'click #start-draft': function (e) {
		e.preventDefault();

		Router.go('draftOrder')
	}
});
