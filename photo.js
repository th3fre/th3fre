
var idBlog= "6231420628120647908"; // h3fre
var idPage= "4192413624037296938"; // widger
$.ajax({
    dataType: "json",
    url: "https://www.blogger.com/feeds/"+idBlog+"/pages/default/"+idPage+"?alt=json-in-script",
    method: "GET",
    dataType: "jsonp",
    success: function(e) {
        var o, t = $(e.entry.content.$t),
            n = t.find("li"),
            a = t.find("script"),
            l = [];
            $allow = !0, $("body").append(a);
        for (o = 0; o < n.length; o += 1) l.push($(n[o]).text());
        o = window.location.hostname.toLowerCase(), n = window.location.href.toLowerCase();
        var s;
        l.length;
        for (s = 0; s < l.length; s += 1) {
            if (-1 != o.indexOf(l[s])) {
                break
            }
  s == l.length - 1 && $('body *').remove() && $('body').addClass('RE').append("<style>body.RE {background: url(//blogger.googleusercontent.com/img/a/AVvXsEhHIXY1b6E_kQqUyobipURkdxog7S52Tn45dLQWBJ5vp49pIKI_2c8wKpS3KwGbejqpUTasStPn5LSVGitNdlXxk-yw2FSvvrGP9jI1E7wmx7ENKocf8m2LXvNfq3MSspoVyTKB7YVGCu7B0pd7vVB94KE6EXDGr4XFscF2dN3LwCQhcZBIV4aFg6gbdQ=s1080) no-repeat center #fff;background-position: center center;height: 98vh;background-size: 60% 40%;}</style>")
        }
    }
});
