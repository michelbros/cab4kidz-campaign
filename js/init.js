window.sr = ScrollReveal();
  sr.reveal('#nav', {
    duration: 2000,
    origin: 'top'
  });

  sr.reveal('#index-banner', {
    duration: 2000,
    origin: 'top'
  });

  sr.reveal('#left', {
    duration: 2000,
    origin: 'left',
    distance: '400px',
    viewFactor: 0.2
  });

  sr.reveal('#right', {
    duration: 2000,
    origin: 'right',
    distance: '400px',
    viewFactor: 0.2
  });

  sr.reveal('#bottom', {
    duration: 2000,
    origin: 'bottom',
    distance: '300px'
  });

(function($){
  $(function(){

    $('.sidenav').sidenav();

  }); // end of document ready
})(jQuery); // end of jQuery name space