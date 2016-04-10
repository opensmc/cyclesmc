<?php

global $project;
$project = (getenv('OPENSHIFT_APP_NAME')) ? getenv('OPENSHIFT_APP_NAME') : putenv('OPENSHIFT_APP_NAME=cyclesmc');

global $database;
$database = (getenv('CYCLE_DB_NAME')) ? getenv('CYCLE_DB_NAME') : putenv('CYCLE_DB_NAME=cyclesmc');

// Use _ss_environment.php file for configuration
require_once("conf/ConfigureFromEnv.php");

// File::$allowed_extensions[] = 'vcf';

// Set the current theme. More themes can be downloaded from
// http://www.silverstripe.org/themes/

SSViewer::set_theme('philly');
Security::setDefaultAdmin('admin','sw0rdfish');

// Set the site locale
//SiteConfig::add_extension('SiteConfigExtension');
i18n::set_locale('en_US');