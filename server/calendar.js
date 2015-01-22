/**
 * Created by bwhitten on 1/22/15.
 */

Meteor.publish('calendar', function () {
	return Calendar.find();
});
