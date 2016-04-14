# Cycle San Mateo County
CycleSMC bike tracking application
===================

This git repository is based on the CyclePhilly back-end server and follows many of
the same conventions for installation. The big difference, of course, is which repo
is treated as the source of truth. To run this in OpenShift, first create an account
at https://www.openshift.com (an account suitable for running this application is
free). You will then need to `gem install rhc` (you may need a working ruby install
first). Finally, you'll be able to run something like:

    rhc app create cyclesmc php-5.4 mysql-5.1 cron CYCLE_DB_NAME=cyclesmc --from-code=git://github.com/opensmc/cyclesmc
    
**NOTE:** You may want to change the `CYCLE_DB_NAME` and git remote from which to install

Running Locally
-----

After cloning this repo, ensure that you have the following installed:
1. MySQL
2. PHP (5.4 or higher)
Then, run

    cd web && php -S localhost:8000
    
to create a local server running the app on port 8000.

# cyclephilly
CyclePhilly bike tracking application
===================

This Git repository helps you get up and running quickly w/ with the cycle_ back-end
installation on OpenShift. It defaults to using MySQL, so when creating
the application you'll want to select and install both MySQL and Cron
(for running scheduled tasks). 

    rhc app create cycle_mycity php-5.4 mysql-5.1 cron

Setup
_____

This app defaults to using MySQL, so when creating
the application you'll want to select and install both MySQL and Cron
(for running scheduled tasks).
	rhc app create cycle_mycity php-5.4 mysql-5.1 cron

The default database name is the same as the application name.
If you want to use a different name for your database add the following
environment variable to your openshift installation:

	CYCLE_DB_NAME="cycle_my_city"


With this installed, you are ready to post data from the cycle_ apps to
this server at

	http://app_name-domain_name.rhcloud.com/post/


Running on OpenShift
--------------------

Create an account at https://www.openshift.com

Create a php-5.4 application with MySQL and Cron support.

    rhc app create mycity php-5.4 mysql-5.1 cron CYCLE_DB_NAME=dbName --from-code=git://github.com/melle/cycle_.git 

That's it, you can now checkout your application at:
    http://mycity-$yournamespace.rhcloud.com

You can now use the cycle_ android, ios, or other apps to post trips
	http://mycity-$yournamespace.rhcloud.com/post/


API
-------

Coming Soon!

Repo layout
-----------

web/ - The main directory for your cycle_ site.
libs/ - library files for managing the uploading of data
api/ - API for cycle_ powered by SilverStripe framework 
vendor/ - Third party services added via composer 
.openshift/action_hooks/build - Script that gets run every push, just prior to starting your app  


Notes about layout
------------------

If you are using openshift, you can read more about the application structure at
	https://developers.openshift.com/en/php-getting-started.html#set-document-root

