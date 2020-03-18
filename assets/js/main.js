/**
 * Essentials require
 */
var $ = require('jquery');
var jqueryUI = require("jquery-ui");
require('bootstrap');

global.$ = global.jQuery = $;

/**
 * Import class
 */
import LeftSidebar from './left-sidebar';

/**
 * Little bit of code
 */
$(document).ready(function() {
    // Check Loaded Libraries
    typeof $ == 'undefined' ? console.log('Warning: jQuery can\'t be loaded!') : '';
    typeof jqueryUI == 'undefined' ? console.log('Warning: jQueryUI can\'t be loaded!') : '';

    // Enable Popover
    $('[data-toggle="popover"]').popover();

    // Alert Box Fade-Out
    $('.alert').delay(14000).fadeOut(800);

    // Navbar Toggler Icon
    $('.collapse').on('shown.bs.collapse', function(e) {
        $('.navbar-toggler').find('.toggler').removeClass('fa-chevron-down').addClass('fa-chevron-up');
    });

    $('.collapse').on('hidden.bs.collapse', function(e) {
        $('.navbar-toggler').find('.toggler').removeClass('fa-chevron-up').addClass('fa-chevron-down');
    });

    const body = document.querySelector('body');
    const navbar = document.querySelector('nav.navbar');
    if(body && navbar) {
        body.className.match(new RegExp('(\\s|^)diary(\\s|$)')) ? navbar.classList.add("bg-secondary") : navbar.classList.add("bg-white");
    }

    /**
     * Class
     */
    const leftSidebar = document.querySelector('.sidebar.left');
    const leftSidebarCollapse = document.querySelector('.leftSidebarCollapse');
    const leftSidebarWidgets = [].slice.call(document.querySelectorAll('[data-type]'));

    if(leftSidebar && leftSidebarCollapse && leftSidebarWidgets) {
        new LeftSidebar(leftSidebar, leftSidebarCollapse, leftSidebarWidgets);
    }
});