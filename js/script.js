/*https://drive.google.com/uc?export=view&id=1MAcF2ydw_b_9ZNhBpnw03euC1GhSULmW*/

$(document).ready(function() {
  var animationTimeline = new TimelineMax({ paused: true });
  var revealer = $('.revealer');
  var navigation = $('.top-nav');
  var leftContent = $('.left-content');
  var rightContent = $('.right-content');
  var animationTime = 1;
  var easeOut = Expo.easeOut;

  animationTimeline
    .fromTo(
      revealer,
      animationTime,
      { scale: '0', opacity: 1 },
      { scale: '300%', opacity: 1 }
    )
    .to(revealer, animationTime, { opacity: 0, display: 'none' })
    .add('end', 1.5)
    .fromTo(
      navigation,
      animationTime,
      { y: '-100%' },
      { y: '0%', ease: easeOut },
      'end'
    )
    .fromTo(
      leftContent,
      animationTime,
      { x: '-150%' },
      { x: '0%', ease: easeOut },
      'end'
    )
    .fromTo(
      rightContent,
      animationTime,
      { y: '150%' },
      { y: '0%', ease: easeOut, rotation: '0deg' },
      'end'
    )
    .to(rightContent, animationTime, { rotation: '25deg', ease: easeOut })
    .to(rightContent, animationTime, { rotation: '-25deg', ease: easeOut })
    .to(rightContent, animationTime, { rotation: '25deg', ease: easeOut })
    .to(rightContent, animationTime, { rotation: '-25deg', ease: easeOut })
    .to(rightContent, animationTime, { rotation: '0deg', ease: easeOut });

  animationTimeline.play();
});
