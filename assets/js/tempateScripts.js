$(window).load(function () {
    /* init helpers */
    helpers();
});


var ion = new Ion();

/* Ajax commands */
$(document).on('click', '[ion]', function ()
{
    ion.cmd($(this).attr('ion'));
});

function helpers(){
    
    /* Show system messages */
    showSystemMessages();
    
    /* inputMask */
    var inputMaskSelector = $('[inputMask]:not([handler])');
    var inputMaskObj = $(inputMaskSelector);
        inputMaskObj.attr('handler',''); // Блокировка повторного обработчика
    var inputMaskCount = inputMaskObj.size();
    for(var i=0;i<inputMaskCount;i++){
        var mask = inputMaskObj.eq(i).attr('inputMask');
        inputMaskObj.eq(i).inputmask({"mask": mask});
    }
}

/* Sysytem messages */
function showSystemMessages()
{
    $('#SystemMessages>div')
    .not('.showed')
    .addClass('showed')
    .animate({marginBottom:1000,opasity:0},0)
    .show()
    .animate({marginBottom:5,opasity:1},700)
    .delay(3000)
    .fadeOut(300,function(){
        this.remove();
    });
}
$('#SystemMessages').bind("DOMSubtreeModified",function(){
    showSystemMessages();
    var hiddenCmd = $('ion').text();
    if(hiddenCmd){
        ion.cmd(hiddenCmd);
    }
});