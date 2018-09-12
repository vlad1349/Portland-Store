
$( document ).ready(function() {
    /**
     * Created by dell on 18.08.2018.
     */
    $(".sideBar_item").click(function(){
        console.log ($(this));
        $(this).toggleClass( "opened" );
        $(this).find('.dropMenu').slideToggle()
    });
    $(".tickLast,.country").click(function() {
        console.log($(this));
        $(".tickLast,.country").toggleClass( "openedLast" );
        $('.counry_chosing_wrapper').slideToggle();
        console.log($('.counry_chosing_wrapper'));
    });
});

