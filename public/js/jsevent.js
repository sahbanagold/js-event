var btncolor = '#c00'
$( function() {
  $( "#draggable" ).draggable();
} );

$("input").on('click',function (e) {
  btncolor = $(this).attr('value')
  $("#draggable").attr('style','background-color:'+btncolor)

})

function dohover(obj) {
    $("#draggable").attr('style','background-color:'+$(obj).attr('value'))
}
