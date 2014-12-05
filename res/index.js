/**
 * @author      OA Wu <comdan66@gmail.com>
 * @copyright   Copyright (c) 2014 OA Wu Design
 */

(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-46121102-7', 'auto');
ga('send', 'pageview');

$(function () {
  $container = $('#container');

  $('.navbar').OAnavbar ();


  $('.item').click (function () {
    $(this).addClass ('active').siblings ().removeClass ('active');
    window.location.assign ('#p' + $(this).index ());
  }).filter ('.active').click ();

  $('.item').each (function (i) {
    Path.map ("#p" + i).to (function () {
      if ($('#_p' + i).length) $container.append (_.template ($('#_p' + i).html (), {}) ({})).addClass ('show').find ('.prettyprint').addClass ('linenums');
      prettyPrint ();
    }).enter (function () {
      $container.empty ().removeClass ('show');
    });
  });

  Path.listen();
});