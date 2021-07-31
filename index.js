VanillaTilt.init(document.querySelector(".your-element"), {
  max: 10,
  speed: 400,
  easing: "cubic-bezier(.03,.98,.52,.99)",
  gyroscope: true,
  gyroscopeMinAngleX: -45,
  gyroscopeMaxAngleX: 45,
  gyroscopeMinAngleY: -45,
  gyroscopeMaxAngleY: 45,
});
