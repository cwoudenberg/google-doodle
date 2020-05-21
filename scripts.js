// Top left moving Monstera
var mov1 = '#Monstera1';
TweenMax.fromTo( mov1, 0.5, {
  rotation: 10,
},
  {
    rotation: -10,
   delay: 1,
  repeat: -1,
  repeatDelay: 2,
  yoyo: true,
  }
);


// Bottom right moving monstera
var mov2 = '#Monstera2';
TweenMax.fromTo( mov2, 0.5, {
  rotation: 0,
},
  {
    rotation: 10,
   delay: 1,
  repeat: -1,
  repeatDelay: 5,
  yoyo: true,
  }
);

// Background moving Monstera
var mov1 = '#Monstera';
TweenMax.fromTo( mov1, 0.5, {
  rotation: -10,
},
  {
    rotation: 10,
   delay: 2,
  repeat: -0.5,
  repeatDelay: 2,
  yoyo: true,
  }
);