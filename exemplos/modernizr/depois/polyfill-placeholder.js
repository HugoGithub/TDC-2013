
$(function(){
    if (!Modernizr.input.placeholder) {
        // Ops, esse navegador não tem suporte para placeholder ;(

        $('[placeholder]').each(function () {
            $(this).val($(this).attr('placeholder'));
        });


        $('[placeholder]').focus(function () {
            var value = $(this).attr('placeholder');

            if($(this).val() === value)
                $(this).val('');
        });


        $('[placeholder]').blur(function () {
            var value = $(this).attr('placeholder');

            if($(this).val() === '')
                $(this).val(value);
        });
    }
});