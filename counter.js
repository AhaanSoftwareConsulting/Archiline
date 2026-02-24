function animateCounter(id, target) {
  let el = document.getElementById(id);
  let count = 0;
  let speed = target / 100;

  let interval = setInterval(() => {
    count += speed;
    if (count >= target) {
      count = target;
      clearInterval(interval);
    }
    el.innerText = Math.floor(count) + "+";
  }, 20);
}

animateCounter("count1", 12);
animateCounter("count2", 80);
animateCounter("count3", 200);
