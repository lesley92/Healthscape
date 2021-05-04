$(document).ready(function() {
    console.log('hi');

    function changeurl(url) {
        var new_url = "/pages/" + url;
        window.history.pushState("data", "Title", new_url);
        document.title = url;
    }


    // CLOSE THE MOBILE MENU ON CLICK SO WE CAN SEE THE STUFF
    $("#sidebarMenu a").click(function() {
        $("#sidebarMenu").collapse('hide');
    });

    $('a.notifications').click(function(e) {
        e.preventDefault();
        $("#page-content").load("/pages/notifications.html");
        console.log('clickn');
        changeurl('Notifications');
    });

    $('a.profile').click(function(e) {
        e.preventDefault();
        $("#page-content").load("/pages/profile.html");
        console.log('clickn');
        changeurl('Profile');
    });

    $('a.help').click(function(e) {
        e.preventDefault();
        $("#page-content").load("/pages/help.html");
        console.log('clickn');
        changeurl('Help');
    });







});