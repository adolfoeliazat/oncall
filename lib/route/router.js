/**
 * Created by bwhitten on 1/22/15.
 */

Router.configure({
	layoutTemplate: 'layout',
	loadingTemplate: 'loading',
	notFoundTemplate: 'notFound'
	//waitOn: function() {
	//	return [Meteor.subscribe('notifications')]
	//}
});

Router.route('/', {
	name: 'home'
});

Router.route('/draft-order', {
	name: 'draftOrder'
});
