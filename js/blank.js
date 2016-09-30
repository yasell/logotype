$(function(){
    var wrapper = $( ".blank__file" ),
        inp = wrapper.find( "input" ),
        btn = wrapper.find( ".blank__file-btn" ),
        lbl = wrapper.find( "mark" );

    // Crutches for the :focus style:
    inp.focus(function(){
        wrapper.addClass( "focus" );
    }).blur(function(){
        wrapper.removeClass( "focus" );
    });

    var file_api = ( window.File && window.FileReader && window.FileList && window.Blob ) ? true : false;

    inp.change(function(){
        var file_name;
        if( file_api && inp[ 0 ].files[ 0 ] )
            file_name = inp[ 0 ].files[ 0 ].name;
        else
            file_name = inp.val().replace( "C:\\fakepath\\", '' );

        if( ! file_name.length )
            return;

        if( lbl.is( ":visible" ) ){
            lbl.text( file_name );
            btn.text( "Выберите файл" );
        }else
            btn.text( file_name );
    }).change();

});
$( window ).resize(function(){
    $( ".blank__file input" ).triggerHandler( "change" );
});

// for checkbox
$('#no').on('change', function() {
    $('#yes').prop('checked', false);
      $(this).prop('checked', true);
});
$('#yes').on('change', function() {
    $('#no').prop('checked', false);
    $(this).prop('checked', true);
});
