import $ from 'jquery';
import 'owl.carousel';

/**
 * Creates a new Steps class.
 * @class
 */
const Steps = function() {
    const self = this;

    /**
     * Add events listeners
     */
    self.setupListener = () => {
        $(window).on('resize', self.animateSteps);
    };

    /**
     * Animate Steps-Tablet
     */
    self.animateSteps = function() {
        let owl = $('.steps__list');
        let owlContainer = owl.closest('.steps__list__wrapper');
        let owlControlLeft = owlContainer.find('.steps__controls__left');
        let owlControlRight = owlContainer.find('.steps__controls__right');

        if ($(window).width() <= '767') {
            if (!owl.hasClass('owl-carousel')) {
                owl.addClass('owl-carousel').addClass('.owl-theme');
                owl.find('.steps__item').addClass('steps__item_carousel');
                owlControlLeft.addClass('active');
                owlControlRight.addClass('active');

                owl.owlCarousel({
                    loop: false,
                    items: 1,
                    slideBy: 1,
                    smartSpeed: 300,
                    mouseDrag: false
                });

                owl.on('changed.owl.carousel', function() {
                    let items = owlContainer.find('.owl-dots');

                    if (items.find('.owl-dot.active').index() === 0) {
                        owlControlLeft.addClass('disabled');
                        owlControlRight.removeClass('disabled');
                    } else if (items.find('.owl-dot.active').index() === (items.find('.owl-dot').length -1)) {
                        owlControlRight.addClass('disabled');
                        owlControlLeft.removeClass('disabled');
                    } else {
                        owlControlLeft.removeClass('disabled');
                        owlControlRight.removeClass('disabled');
                    }
                });

                owlControlLeft.on('click', function(e) {
                    e.preventDefault();

                    owl.trigger('prev.owl.carousel');
                });

                owlControlRight.on('click', function(e) {
                    e.preventDefault();

                    owl.trigger('next.owl.carousel');
                });
            }
        } else {
            if (owl.hasClass('owl-carousel')) {
                owl.off('changed.owl.carousel');
                owl.removeClass('owl-carousel').removeClass('.owl-theme');
                owlControlLeft.removeClass('active');
                owlControlRight.removeClass('active');
                owlControlRight.off();
                owlControlLeft.off();
                owl.trigger('destroy.owl.carousel');
                $('.steps__item').removeClass('steps__item_carousel');
            }
        }
    };

    self.init = () => {
        self.animateSteps();
        self.setupListener();
    };
};

if (!('modules' in $)) {
    $.modules = {};
}
const steps = new Steps();

$(() => steps.init());
