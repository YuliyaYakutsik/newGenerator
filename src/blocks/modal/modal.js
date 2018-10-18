import $ from 'jquery';
import 'magnific-popup';

/**
 * Creates a new Modal class.
 * @class
 */
const Modal = function() {
    const self = this;

    self.body = $('body');

    /**
     * Add events listeners
     */
    self.setupListener = function() {
        self.body.on('click', '.modal_trigger', self.router);
        self.body.on('click', '.modal_close', self.close);
    };

    /**
     * Routes open and close methods
     * @param {Object} event
     */
    self.router = function(event) {
        event.preventDefault();

        let target = $(this);
        let src = '';
        let type = '';

        if (target.hasClass('modal_trigger')) {

            src = target.attr('href');
            type = target.data('modal-type') || 'inline';

            self.open(src, type);

        } else if (target.hasClass('modal_close')) {

            self.close();

        }
    };

    /**
     * Open modal
     */
    self.open = function(src, type) {
        $.magnificPopup.open({
            items: {
                src: src,
                type: type
            },
            callbacks: {
                beforeOpen: function() {
                    self.body.addClass('modal_js_open');
                },
                close: function() {
                    self.body.removeClass('modal_js_open');
                    let questionForm = $('#question-form');
                    let questionFormElement = questionForm.find('.form__element');
                    let message = questionForm.find('.form-message');

                    questionFormElement.removeClass('input-alert');

                    if (questionForm.hasClass('show-message-success')) {
                        questionForm.removeClass('show-message-success');
                        message.removeClass('show-message-success');
                        questionFormElement.removeClass('focused');
                        questionFormElement.each(function() {
                            $(this).val('');
                        });
                    }
                }
            },
            showCloseBtn: false,
            midClick: true
        });
    };

    /**
     * Close modal
     */
    self.close = function() {
        $.magnificPopup.close();
    };

    /**
     * Init module
     */
    self.init = () => {
        self.setupListener();
    };
};

if (!('modules' in $)) {
    $.modules = {};
}

const modal = new Modal();

$(() => modal.init());
