// Shim for requestAnimationFrame
window.requestAnimationFrame = (function () {
  return window.requestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    function (callback) {
      window.setTimeout(callback, 1000 / 60);
    };
})();

// Easing equations from https://github.com/danro/easing-js/blob/master/easing.js
class EasingEquations {
  static easeOutSine (pos) {
    return Math.sin(pos * (Math.PI / 2));
  }

  static easeInOutSine (pos) {
    return (-0.5 * (Math.cos(Math.PI * pos) - 1));
  }

  static easeInOutQuint (pos) {
    if ((pos /= 0.5) < 1) {
      return 0.5 * Math.pow(pos, 5);
    }
    return 0.5 * (Math.pow((pos - 2), 5) + 2);
  }
}

/**
 * @param {Number} scrollTargetY the target scrollY property of the window
 * @param {Number} speed time in pixels per second
 * @param {String} easing easing equation to use
 */
export default function scrollTo (scrollTargetY = 0, speed = 2000, easing = 'easeOutSine') {
  // Animation loop
  function tick (time, currentTime = 0) {
    currentTime += 1 / 60;

    const p = currentTime / time;
    const t = EasingEquations[easing](p);

    if (p < 1) {
      window.requestAnimationFrame(() => tick(time, currentTime));
      window.scrollTo(0, scrollY + ((scrollTargetY - scrollY) * t));
    } else {
      window.scrollTo(0, scrollTargetY);
    }
  }

  const scrollY = window.scrollY !== undefined
    ? window.scrollY
    : document.documentElement.scrollTop;

  // Min time .1, Max time .8 seconds
  const time = Math.max(0.1, Math.min(Math.abs(scrollY - scrollTargetY) / speed, 0.8));

  // Call it once to get started
  tick(time);
}
