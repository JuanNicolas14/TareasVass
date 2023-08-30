$(document).ready(function () {
    // Agrega un controlador de clic para los botones del acordeón
    $('.c-accordion__item-header').click(function () {
        var content = $(this).next('.c-accordion__item-content');
        var expanded = $(this).attr('aria-expanded') === 'true';

        // Verifica si el contenido está visible o no
        var isVisible = content.is(':visible');

        // Cambia el estado de aria-expanded
        $(this).attr('aria-expanded', !expanded);

        // Alterna la visibilidad del contenido
        content.slideToggle(3000);

        // Cambia la clase modificadora para el encabezado activo
        $(this).toggleClass('c-accordion__header--active');

        // Cierra los otros elementos del acordeón
        $('.c-accordion__item-content').not(content).slideUp(3000);
        $('.c-accordion__item-header').not(this).removeClass('c-accordion__header--active');
        $('.c-accordion__item-header').not(this).attr('aria-expanded', 'false');

        // Toma los dos iconos del acordeón
        var icon = $(this).find('.js-icon');
        var iconUp = $(this).find('.js-up-icon');

        // Cierra los iconos de los otros elementos del acordeón
        $('.js-icon').not(icon).css('display','block');
        $('.js-up-icon').not(iconUp).css('display','none');

        if (isVisible) {
            icon.css('display', 'block');
            iconUp.css('display', 'none');
        } else {
            icon.css('display', 'none');
            iconUp.css('display', 'block');
        }



    });
});