$(document).ready(function () {
    // Agrega un controlador de clic para los botones del acordeón
    $('.js-accordion__item-header').click(function () {
        var selected = this;
        openSelectedAccordion(selected);

        /* // Encuentra el contenido del acordeón que sigue al encabezado actual
        var content = $(this).next('.js-accordion__item-content');

        // Tomamos el acordion entero y buscamos los que coincidan
        var accordionActual = $(this).closest(".js-accordion");

        // Tomamos los elementos del acordeon seleccionado
        var headerItems = accordionActual.find('.js-accordion__item-header');
        var contentItems = accordionActual.find('.js-accordion__item-content');


        // Verifica si el atributo 'aria-expanded' del encabezado actual es 'true'
        var expanded = $(this).attr('aria-expanded') === 'true';

        // Verifica si el contenido está visible o no
        var isVisible = content.is(':visible');

        // Cambia el estado de 'aria-expanded' del encabezado actual a su valor opuesto
        $(this).attr('aria-expanded', !expanded);

        // Alterna la visibilidad del contenido con una animación de 3000 ms (3 segundos)
        content.slideToggle(800);

        // Cambia la clase modificadora para el encabezado activo (para estilos CSS)
        $(this).toggleClass('c-accordion__item-header--active');


        // Cierra los otros elementos del acordeón
        $.each(contentItems, function (index, item) {
            $(item).not(content).slideUp(800);
        });

        $.each(headerItems, function (index, item) {
            $(item).not(selected).removeClass('c-accordion__item-header--active');
            $(item).not(selected).attr('aria-expanded', 'false');
        });

        // Toma los dos iconos del acordeón dentro del encabezado actual
        var icon = $(this).find('.js-icon');
        var iconUp = $(this).find('.js-up-icon');

        // Cierra los iconos de los otros elementos del acordeón
        $(accordionActual).find('.js-icon').not(icon).css('display', 'block');
        $(accordionActual).find('.js-up-icon').not(iconUp).css('display', 'none');

        // Determina si el contenido estaba visible y ajusta los iconos en consecuencia
        if (isVisible) {
            icon.css('display', 'block');
            iconUp.css('display', 'none');
        } else {
            icon.css('display', 'none');
            iconUp.css('display', 'block');
        } */
    });
});


function closeOthersAccordions(selected) {
    // Encuentra el contenido del acordeón que sigue al encabezado actual
    var contentSelected = $(selected).next('.js-accordion__item-content');

    // Tomamos el acordion entero y buscamos los que coincidan
    var accordionSelected = $(selected).closest(".js-accordion");

    // Tomamos los accordiones que no pertenecen al seleccionado
    var accordionsToClose = $(document).find('.js-accordion').not(accordionSelected);

    $.each(accordionsToClose, function (index, accordion) {
        var headerItemsAccordion = $(accordion).find('.js-accordion__item-header');
        var contentItemsAccordion = $(accordion).find('.js-accordion__item-content');

        // Cierra los otros elementos del acordeón
        $.each(contentItemsAccordion, function (index, item) {
            $(item).not(contentSelected).slideUp(800);
        });

        $.each(headerItemsAccordion, function (index, item) {
            $(item).not(selected).removeClass('c-accordion__item-header--active');
            $(item).not(selected).attr('aria-expanded', 'false');

            // Toma los dos iconos del button actual
            var iconNoSelected = $(item).not(selected).find('.js-icon');
            var iconNoSelectedUp = $(item).not(selected).find('.js-up-icon');
            //Cambiamos el icono de todos los que no sean el selected para que quede la flecha hacia abajo (que significa que esta cerrado)
            iconNoSelected.css('display', 'block');
            iconNoSelectedUp.css('display', 'none');
        });
    });
}

function openSelectedAccordion(selected){
    // Encuentra el contenido del acordeón que sigue al encabezado actual
    var content = $(selected).next('.js-accordion__item-content');

    // Tomamos el acordion entero y buscamos los que coincidan
    var accordionActual = $(selected).closest(".js-accordion");

    // Tomamos los elementos del acordeon seleccionado
    var headerItems = accordionActual.find('.js-accordion__item-header');
    var contentItems = accordionActual.find('.js-accordion__item-content');


    // Verifica si el atributo 'aria-expanded' del encabezado actual es 'true'
    var expanded = $(selected).attr('aria-expanded') === 'true';

    // Verifica si el contenido está visible o no
    var isVisible = content.is(':visible');

    // Cambia el estado de 'aria-expanded' del encabezado actual a su valor opuesto
    $(selected).attr('aria-expanded', !expanded);

    // Alterna la visibilidad del contenido con una animación de 3000 ms (3 segundos)
    content.slideToggle(800);

    // Cambia la clase modificadora para el encabezado activo (para estilos CSS)
    $(selected).toggleClass('c-accordion__item-header--active');


    // Cierra los otros elementos del acordeón
    $.each(contentItems, function (index, item) {
        $(item).not(content).slideUp(800);
    });

    $.each(headerItems, function (index, item) {
        $(item).not(selected).removeClass('c-accordion__item-header--active');
        $(item).not(selected).attr('aria-expanded', 'false');
    });

    // Toma los dos iconos del acordeón dentro del encabezado actual
    var icon = $(selected).find('.js-icon');
    var iconUp = $(selected).find('.js-up-icon');

    // Cierra los iconos de los otros elementos del acordeón
    $(accordionActual).find('.js-icon').not(icon).css('display', 'block');
    $(accordionActual).find('.js-up-icon').not(iconUp).css('display', 'none');

    // Determina si el contenido estaba visible y ajusta los iconos en consecuencia
    if (isVisible) {
        icon.css('display', 'block');
        iconUp.css('display', 'none');
    } else {
        icon.css('display', 'none');
        iconUp.css('display', 'block');
    }

    closeOthersAccordions(selected);
}


//Crear una funcion que le pase un accordion como parametro y cierre el resto mientras abre el que pase.
//Agregar clases para llamar funciones, osea js-accordion-header por ejemplo y cambiar etiquetas div por section