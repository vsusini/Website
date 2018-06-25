(function($) {

    $(document).ready(function(){
        $('.toggle-nav').on('click', function() {
            toggleNavigation($(this), $('.nav-pane'));
            changeLetters($(this));
        });

        function toggleNavigation(btn, nav) {
            btn.toggleClass('open');
            nav.toggleClass('open');

        }

        function changeLetters(btn) {
            var m = $('.toggle-nav span.m');
            var e = $('.toggle-nav span.e');
            var n = $('.toggle-nav span.n');
            var u = $('.toggle-nav span.u');

            e.toggleClass('btn-close');

            if(btn.hasClass('open'))
            {
                m.text("E");
                m.css("color","white");
                m.css("top","-0.3vh");
                n.text("I");
                n.css("color","white");
                n.css("top","-0.3vh");
                u.text("T");
                u.css("color","white");
                u.css("top","-0.3vh");
            }
            else
            {
                m.text("M");
                m.css("color","black");
                m.css("top","0vh");
                n.text("N");
                n.css("color","black");
                n.css("top","0vh");
                u.text("U");
                u.css("color","black");
                u.css("top","0vh");
            }
        }
    });

})(jQuery);