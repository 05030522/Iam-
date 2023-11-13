/* LOGIN V2 - MAIN.JS - dp 2017 */

/*
Got a kind request for a simpler version of the original, Ok.
So I came up with this. Slightly different animation settings.
This is still technically a prototype but it is fully functional as-is.
There is a (height) overflow issue on the smallest of smartphone viewports,
where the bottom may get cut off. I just need to get that sorted and it'll be ready.
*/

// LOGIN TABS
$(function() {
    tab = $('.tabs h3 a');
    tab.on('click', function(event) {
        event.preventDefault();
        tab.removeClass('active');
        $(this).addClass('active');
        tab_content = $(this).attr('href');
        $('div[id$="tab-content"]').removeClass('active');
        $(tab_content).addClass('active');
    });
});

// SLIDESHOW
$(function() {
    $('#slideshow > div:gt(0)').hide();
    setInterval(function() {
        $('#slideshow > div:first')
            .fadeOut(1000)
            .next()
            .fadeIn(1000)
            .end()
            .appendTo('#slideshow');
    }, 3850);
});

// CUSTOM JQUERY FUNCTION FOR SWAPPING CLASSES
(function($) {
    'use strict';
    $.fn.swapClass = function(remove, add) {
        this.removeClass(remove).addClass(add);
        return this;
    };
}(jQuery));

// SHOW/HIDE PANEL ROUTINE (needs better methods)
// I'll optimize when time permits.
$(function() {
    $('.agree, .forgot, #toggle-terms, .log-in, .sign-up').on('click', function(event) {
        event.preventDefault();
        var user = $('.user'),terms = $('.terms'),form = $('.form-wrap'),recovery = $('.recovery'),close = $('#toggle-terms'),arrow = $('.tabs-content .fa');
        if ($(this).hasClass('agree') || $(this).hasClass('log-in') || ($(this).is('#toggle-terms')) && terms.hasClass('open')) {
            if (terms.hasClass('open')) {
                form.swapClass('open', 'closed');
                terms.swapClass('open', 'closed');
                close.swapClass('open', 'closed');
            } else {
                if ($(this).hasClass('log-in')) {
                    return;
                }
                form.swapClass('closed', 'open');
                terms.swapClass('closed', 'open').scrollTop(0);
                close.swapClass('closed', 'open');
                user.addClass('overflow-hidden');
            }
        }
        else if ($(this).hasClass('forgot') || $(this).hasClass('sign-up') || $(this).is('#toggle-terms')) {
            if (recovery.hasClass('open')) {
                form.swapClass('open', 'closed');
                recovery.swapClass('open', 'closed');
                close.swapClass('open', 'closed');
            } else {
                if ($(this).hasClass('sign-up')) {
                    return;
                }
                form.swapClass('closed', 'open');
                recovery.swapClass('closed', 'open');
                close.swapClass('closed', 'open');
                user.addClass('overflow-hidden');
            }
        }
    });
});

// DISPLAY MSSG
$(function() {
    $('.recovery .button').on('click', function(event) {
        event.preventDefault();
        $('.recovery .mssg').addClass('animate');
        setTimeout(function() {
            $('.form-wrap').swapClass('open', 'closed');
            $('.recovery').swapClass('open', 'closed');
            $('#toggle-terms').swapClass('open', 'closed');
            $('.tabs-content .fa').swapClass('active', 'inactive');
            $('.recovery .mssg').removeClass('animate');
        }, 2500);
    });
});

// DISABLE SUBMIT FOR DEMO
$(function() {
    $('.button').on('click', function(event) {
        $(this).stop();
        event.preventDefault();
        return false;
    });
});