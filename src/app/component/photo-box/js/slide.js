       $(document).ready(function() {
    $( 'li' ).hover(
        function(){
            $(this).find('ul>li').stop().slideDown(200);
        },
        function(){
            $(this).find('ul>li').stop().slideUp(200);
        }
    );
});