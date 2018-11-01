// Functions
function getSections($links) {
  return $(
    $links
      .map((i, el) => $(el).attr('href'))
      .toArray()
      .filter(href => href.charAt(0) === '#')
      .join(','),
  );
}

function activateLink($sections, $links) {
  const yPosition = $window.scrollTop();

  for (let i = $sections.length - 1; i >= 0; i -= 1) {
    const $section = $sections.eq(i);

    if (yPosition >= $section.offset().top) {
      return $links
        .removeClass('active')
        .filter(`[href="#${$section.attr('id')}"]`)
        .addClass('active');
    }
  }
}

function onScrollHandler() {
  activateLink($sections, $links);
}

function onClickHandler(e) {
  const href = $.attr(e.target, 'href');

  e.preventDefault();
  $root.animate(
    { scrollTop: $(href).offset().top },
    500,
    () => (window.location.hash = href),
  );

  return false;
}

// Variables
const $window = $(window);
const $links = $('.menu > li > a');
const $sections = getSections($links);
const $root = $('html, body');
const $hashLinks = $('a[href^="#"]:not([href="#"])');

// Events
$window.on('scroll', onScrollHandler);
$hashLinks.on('click', onClickHandler);

// Body
window.CP.PenTimer.MAX_TIME_IN_LOOP_WO_EXIT = Number.MAX_SAFE_INT; // For codepen
activateLink($sections, $links);
