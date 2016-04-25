<?php
class Page extends SiteTree {

	private static $db = array(
	);

	private static $has_one = array(
	);

}
class Page_Controller extends ContentController {

	/**
	 * An array of actions that can be accessed via a request. Each array element should be an action name, and the
	 * permissions or conditions required to allow the user to access it.
	 *
	 * <code>
	 * array (
	 *     'action', // anyone can access this action
	 *     'action' => true, // same as above
	 *     'action' => 'ADMIN', // you must have ADMIN permissions to access this action
	 *     'action' => '->checkAction' // you can only access this action if $this->checkAction() returns true
	 * );
	 * </code>
	 *
	 * @var array
	 */
	private static $allowed_actions = array (
		'live'
	);

	public function init() {
		parent::init();

		// Note: you should use SS template require tags inside your templates 
		// instead of putting Requirements calls here.  However these are 
		// included so that our older themes still work
		// Requirements::combine_files(
		//     'common.cycle.js',
		//     array(
		//         'bower_components/angular/angular.js',
		//         'bower_components/angular-animate/angular-animate.js',
		//         'bower_components/angular-aria/angular-aria.js',
		//         'bower_components/angular-material/angular-material.js',
		//         'bower_components/angular-new-router/dist/router.es5.js',
		//         'bower_components/angular-messages/angular-messages.min.js',
		//         'https://cdn.firebase.com/js/client/2.1.2/firebase.js',
		//         'https://cdn.firebase.com/libs/angularfire/1.0.0/angularfire.min.js',
		//         'bower_components/angular-new-router/dist/router.es5.js',
		//         'https://cdnjs.cloudflare.com/ajax/libs/underscore.js/1.8.3/underscore.js',
		//         'themes/philly/js/cycle.js'
		//     )
		// );
	}

	public function live($request){
		//var_dump($request->param('ID'));
		return $this->renderWith('Live');
		
	}

}
