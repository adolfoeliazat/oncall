/**
 * Created by bwhitten on 1/22/15.
 */

Template.accountsList.helpers({
	accounts: function () {
		return Meteor.users.find();
	}
});
