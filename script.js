const config = {
  descriptions: [
    /* 100 */ [121, 80, 45, 117, 72, 112, 70, 108, 109, 113, 77],
    /* 99 */ [95, 100, 86, 75, 95, 102, 55, 56, 112, 101, 69],
    /* 98 */ [67, 49, 54, 78, 82, 101, 66, 111, 98, 69, 52],
    /* 97 */ [112, 122, 90, 88, 76, 45, 109, 48, 105, 90, 77],
    /* 96 */ [97, 114, 72, 90, 117, 105, 108, 86, 122, 50, 77],
    /* 95 */ [99, 72, 106, 79, 68, 98, 70, 100, 103, 116, 69],
    /* 94 */ [90, 97, 75, 104, 88, 108, 74, 54, 111, 68, 48],
    /* 93 */ [107, 118, 72, 65, 65, 86, 72, 103, 114, 83, 89],
    /* 92 */ [53, 65, 90, 82, 68, 78, 68, 70, 112, 117, 48],
    /* 91 */ [73, 78, 101, 98, 84, 53, 114, 99, 98, 98, 73],
    /* 90 */ [101, 88, 56, 69, 101, 50, 84, 86, 52, 87, 65],
    /* 89 */ [100, 103, 48, 52, 57, 71, 81, 106, 104, 97, 48],
    /* 88 */ [56, 86, 104, 84, 49, 50, 51, 71, 52, 97, 119],
    /* 87 */ [106, 112, 113, 95, 112, 100, 83, 68, 80, 119, 81],
    /* 86 */ [89, 86, 50, 53, 82, 108, 114, 107, 115, 51, 107],
    /* 85 */ [56, 105, 73, 52, 80, 83, 78, 52, 77, 90, 119],
    /* 84 */ [45, 109, 122, 81, 121, 122, 108, 83, 71, 86, 119],
    /* 83 */ [54, 106, 117, 56, 115, 87, 108, 90, 110, 110, 65],
    /* 82 */ [82, 109, 52, 79, 113, 80, 121, 71, 82, 100, 107],
    /* 81 */ [76, 50, 88, 119, 122, 51, 106, 117, 118, 52, 115],
    /* 80 */ [101, 100, 83, 48, 116, 57, 116, 69, 48, 53, 119],
    /* 79 */ [95, 98, 54, 100, 97, 65, 102, 99, 83, 54, 65],
    /* 78 */ [121, 97, 57, 90, 122, 86, 54, 50, 71, 65, 73],
    /* 77 */ [99, 121, 50, 90, 114, 102, 105, 114, 71, 90, 73],
    /* 76 */ [56, 48, 111, 82, 102, 67, 105, 119, 85, 109, 103],
    /* 75 */ [106, 86, 111, 85, 78, 54, 114, 97, 109, 102, 52],
    /* 74 */ [77, 57, 101, 69, 97, 51, 87, 54, 121, 104, 69],
    /* 73 */ [85, 110, 56, 104, 53, 51, 111, 79, 106, 121, 107],
    /* 72 */ [55, 100, 84, 103, 76, 57, 114, 107, 112, 117, 56],
    /* 71 */ [70, 104, 82, 121, 49, 110, 88, 65, 112, 115, 73],
    /* 70 */ [72, 90, 102, 57, 105, 77, 100, 109, 56, 112, 69],
    /* 69 */ [54, 49, 51, 106, 98, 56, 116, 56, 89, 98, 103],
    /* 68 */ [103, 102, 75, 56, 68, 81, 67, 54, 80, 84, 48],
    /* 67 */ [90, 97, 50, 108, 74, 49, 70, 55, 80, 108, 77],
    /* 66 */ [100, 99, 85, 109, 49, 57, 77, 114, 57, 69, 115],
    /* 65 */ [121, 110, 79, 109, 66, 75, 72, 52, 82, 48, 111],
    /* 64 */ [116, 56, 78, 71, 121, 50, 86, 118, 104, 87, 103],
    /* 63 */ [49, 122, 76, 119, 102, 69, 87, 122, 88, 68, 103],
    /* 62 */ [87, 104, 81, 80, 114, 52, 56, 121, 119, 105, 56],
    /* 61 */ [112, 56, 80, 106, 116, 113, 110, 101, 52, 69, 56],
    /* 60 */ [69, 81, 85, 117, 100, 75, 78, 50, 56, 113, 99],
    /* 59 */ [88, 115, 45, 114, 104, 65, 98, 53, 71, 107, 107],
    /* 58 */ [68, 52, 55, 55, 67, 73, 56, 55, 70, 100, 65],
    /* 57 */ [109, 50, 85, 100, 119, 78, 71, 85, 54, 87, 56],
    /* 56 */ [52, 104, 53, 120, 112, 117, 75, 80, 101, 73, 119],
    /* 55 */ [108, 68, 100, 104, 73, 118, 84, 104, 101, 49, 85],
    /* 54 */ [82, 50, 71, 121, 71, 57, 114, 84, 89, 101, 85],
    /* 53 */ [99, 56, 52, 115, 120, 98, 98, 109, 110, 88, 89],
    /* 52 */ [85, 118, 83, 112, 70, 95, 67, 119, 81, 72, 77],
    /* 51 */ [65, 51, 50, 79, 66, 84, 74, 55, 99, 90, 65],
    /* 50 */ [74, 68, 113, 55, 65, 106, 53, 95, 48, 102, 107],
    /* 49 */ [84, 109, 98, 120, 79, 103, 115, 113, 55, 76, 89],
    /* 48 */ [65, 104, 54, 117, 78, 54, 115, 52, 48, 95, 89],
    /* 47 */ [73, 57, 67, 121, 48, 107, 98, 105, 70, 99, 56],
    /* 46 */ [109, 120, 117, 72, 122, 54, 69, 110, 71, 109, 89],
    /* 45 */ [118, 119, 49, 86, 89, 103, 75, 117, 76, 78, 89],
    /* 44 */ [97, 109, 116, 121, 110, 119, 89, 50, 56, 95, 65],
    /* 43 */ [111, 100, 76, 77, 84, 116, 77, 98, 101, 111, 77],
    /* 42 */ [83, 69, 88, 88, 111, 98, 72, 50, 114, 106, 69],
    /* 41 */ [78, 121, 82, 116, 98, 103, 107, 69, 83, 108, 99],
    /* 40 */ [89, 88, 81, 72, 48, 80, 89, 119, 51, 97, 111],
    /* 39 */ [115, 78, 100, 72, 48, 121, 76, 76, 54, 67, 115],
    /* 38 */ [112, 112, 100, 116, 98, 57, 67, 102, 83, 86, 48],
    /* 37 */ [72, 76, 65, 120, 45, 74, 98, 79, 83, 53, 89],
    /* 36 */ [82, 84, 114, 52, 49, 85, 115, 50, 100, 98, 65],
    /* 35 */ [117, 97, 109, 55, 78, 56, 110, 88, 72, 106, 85],
    /* 34 */ [88, 73, 85, 90, 52, 107, 100, 108, 97, 74, 48],
    /* 33 */ [97, 50, 90, 111, 77, 104, 101, 88, 70, 84, 115],
    /* 32 */ [85, 89, 50, 70, 104, 76, 114, 118, 73, 111, 115],
    /* 31 */ [90, 83, 53, 113, 103, 75, 107, 55, 57, 45, 65],
    /* 30 */ [65, 85, 84, 118, 119, 73, 109, 51, 72, 107, 48],
    /* 29 */ [85, 102, 112, 69, 102, 101, 106, 50, 120, 70, 52],
    /* 28 */ [55, 48, 119, 68, 107, 74, 105, 114, 114, 119, 107],
    /* 27 */ [53, 112, 79, 79, 109, 97, 104, 54, 48, 54, 52],
    /* 26 */ [51, 115, 77, 114, 90, 90, 115, 74, 85, 52, 115],
    /* 25 */ [86, 88, 108, 120, 86, 69, 84, 72, 108, 76, 48],
    /* 24 */ [87, 65, 48, 51, 122, 107, 103, 76, 78, 106, 48],
    /* 23 */ [66, 82, 82, 110, 97, 110, 75, 79, 55, 72, 111],
    /* 22 */ [107, 107, 73, 111, 52, 65, 70, 85, 85, 115, 107],
    /* 21 */ [79, 119, 82, 77, 122, 101, 55, 56, 81, 68, 89],
    /* 20 */ [83, 117, 49, 74, 99, 76, 81, 102, 69, 103, 103],
    /* 19 */ [56, 50, 112, 111, 88, 52, 80, 114, 121, 85, 77],
    /* 18 */ [110, 110, 69, 102, 98, 98, 68, 68, 100, 118, 103],
    /* 17 */ [117, 72, 72, 76, 89, 67, 81, 111, 107, 83, 81],
    /* 16 */ [90, 115, 97, 103, 50, 45, 122, 74, 50, 118, 119],
    /* 15 */ [99, 101, 49, 98, 78, 45, 109, 116, 95, 114, 119],
    /* 14 */ [111, 99, 104, 89, 65, 69, 70, 76, 52, 97, 77],
    /* 13 */ [78, 55, 110, 113, 79, 73, 108, 72, 81, 103, 115],
    /* 12 */ [72, 75, 54, 51, 66, 114, 111, 110, 89, 108, 85],
    /* 11 */ [65, 95, 119, 119, 45, 45, 79, 78, 68, 49, 107],
    /* 10 */ [81, 78, 114, 54, 112, 77, 67, 89, 83, 118, 103],
    /* 9 */ [120, 112, 82, 56, 85, 83, 87, 100, 100, 74, 107],
    /* 8 */ [55, 89, 105, 66, 110, 68, 77, 45, 78, 72, 89],
    /* 7 */ [72, 82, 56, 56, 57, 110, 117, 71, 82, 86, 115],
    /* 6 */ [87, 109, 67, 98, 84, 85, 69, 109, 88, 122, 52],
    /* 5 */ [120, 45, 56, 86, 101, 50, 72, 56, 74, 78, 77],
    /* 4 */ [57, 72, 106, 71, 80, 109, 82, 106, 80, 114, 99],
    /* 3 */ [69, 121, 53, 48, 53, 71, 98, 75, 112, 108, 107],
    /* 2 */ [76, 52, 120, 112, 89, 101, 97, 89, 110, 97, 48],
    /* 1 */ [50, 100, 80, 110, 114, 76, 84, 115, 118, 122, 73],
    /* 0 */ [106, 107, 120, 57, 87, 80, 100, 102, 78, 73, 52],
  ],
  morseCode: [
    /* 100 */ "-",
    /* 99 */ ".",
    /* 98 */ "--.",
    /* 97 */ "-.-.",
    /* 96 */ "---",
    /* 95 */ "--.",
    /* 94 */ "..-",
    /* 93 */ ".-",
    /* 92 */ "-.--",
    /* 91 */ ".-.",
    /* 90 */ "..-",
    /* 89 */ "-..",
    /* 88 */ "-.",
    /* 87 */ "-.",
    /* 86 */ "---",
    /* 85 */ "-.",
    /* 84 */ ".",
    /* 83 */ "-.",
    /* 82 */ "-.",
    /* 81 */ "---",
    /* 80 */ "-..",
    /* 79 */ "---",
    /* 78 */ "-.--",
    /* 77 */ ".--",
    /* 76 */ ".-",
    /* 75 */ "-..",
    /* 74 */ "--.",
    /* 73 */ "---",
    /* 72 */ "-.",
    /* 71 */ ".",
    /* 70 */ ".-.",
    /* 69 */ ".-",
    /* 68 */ ".-.",
    /* 67 */ "...",
    /* 66 */ ".--.",
    /* 65 */ ".",
    /* 64 */ "...-",
    /* 63 */ "-.",
    /* 62 */ ".-",
    /* 61 */ "---",
    /* 60 */ "--.",
    /* 59 */ "--.",
    /* 58 */ "-.",
    /* 57 */ "-.",
    /* 56 */ "-..",
    /* 55 */ ".-.",
    /* 54 */ ".-.",
    /* 53 */ ".",
    /* 52 */ "---",
    /* 51 */ "--",
    /* 50 */ "---",
    /* 49 */ ".-.",
    /* 48 */ "-.--",
    /* 47 */ "-.",
    /* 46 */ ".",
    /* 45 */ ".",
    /* 44 */ "..-",
    /* 43 */ "--.",
    /* 42 */ "---",
    /* 41 */ "...-",
    /* 40 */ "-.",
    /* 39 */ ".",
    /* 38 */ "-.",
    /* 37 */ "...-",
    /* 36 */ "-.",
    /* 35 */ "-.",
    /* 34 */ ".",
    /* 33 */ "---",
    /* 32 */ "-.",
    /* 31 */ "-.",
    /* 30 */ ".-.",
    /* 29 */ ".-.",
    /* 28 */ "..-",
    /* 27 */ "..-",
    /* 26 */ "---",
    /* 25 */ "...-",
    /* 24 */ ".",
    /* 23 */ "..-",
    /* 22 */ "...-",
    /* 21 */ ".",
    /* 20 */ "..",
    /* 19 */ ".",
    /* 18 */ "-.--",
    /* 17 */ ".-.",
    /* 16 */ "...-",
    /* 15 */ ".-",
    /* 14 */ ".",
    /* 13 */ "-.",
    /* 12 */ "-.-",
    /* 11 */ "-.",
    /* 10 */ "-.--",
    /* 9 */ ".-..",
    /* 8 */ "-",
    /* 7 */ "..-",
    /* 6 */ ".",
    /* 5 */ ".",
    /* 4 */ ".-",
    /* 3 */ "-.",
    /* 2 */ "-.",
    /* 1 */ ".-",
    /* 0 */ ".- -. ... .-- . .-.",
  ],
  hexCode: [
    /* 100 */ "d3ceed",
    /* 99 */ "433c30",
    /* 98 */ "977d86",
    /* 97 */ "675c5b",
    /* 96 */ "867a7e",
    /* 95 */ "c2a9b6",
    /* 94 */ "d6d2ea",
    /* 93 */ "b8b8d8",
    /* 92 */ "a15948",
    /* 91 */ "2d2712",
    /* 90 */ "231e12",
    /* 89 */ "c1adbb",
    /* 88 */ "d0d2f1",
    /* 87 */ "362e28",
    /* 86 */ "d3b2c2",
    /* 85 */ "bfbdd4",
    /* 84 */ "553a2a",
    /* 83 */ "d0ceea",
    /* 82 */ "c2b9d2",
    /* 81 */ "5a3b32",
    /* 80 */ "7d6667",
    /* 79 */ "2f2f26",
    /* 78 */ "dbd9f2",
    /* 77 */ "c2b9d2",
    /* 76 */ "c8c3dd",
    /* 75 */ "cfcbde",
    /* 74 */ "ced4f5",
    /* 73 */ "5f5450",
    /* 72 */ "cbd2f0",
    /* 71 */ "493a30",
    /* 70 */ "cd9793",
    /* 69 */ "89747d",
    /* 68 */ "837982",
    /* 67 */ "5f5549",
    /* 66 */ "d7d6f6",
    /* 65 */ "786262",
    /* 64 */ "d3d0f0",
    /* 63 */ "aeaabb",
    /* 62 */ "271700",
    /* 61 */ "3f322c",
    /* 60 */ "c4766c",
    /* 59 */ "292718",
    /* 58 */ "b7b7d0",
    /* 57 */ "b3aeca",
    /* 56 */ "675959",
    /* 55 */ "a57f75",
    /* 54 */ "292613",
    /* 53 */ "bdaab0",
    /* 52 */ "beb1c4",
    /* 51 */ "b7b4c7",
    /* 50 */ "ab807d",
    /* 49 */ "bdbdd6",
    /* 48 */ "a3a0b0",
    /* 47 */ "a698a7",
    /* 46 */ "574539",
    /* 45 */ "cacee9",
    /* 44 */ "afafc9",
    /* 43 */ "603a2d",
    /* 42 */ "131200",
    /* 41 */ "c7c8e7",
    /* 40 */ "b9b6d1",
    /* 39 */ "886964",
    /* 38 */ "bfbfd9",
    /* 37 */ "746165",
    /* 36 */ "534137",
    /* 35 */ "1e180a",
    /* 34 */ "c7c4e7",
    /* 33 */ "b7b4ce",
    /* 32 */ "c8c4d7",
    /* 31 */ "a7a1ae",
    /* 30 */ "73695d",
    /* 29 */ "b07f6d",
    /* 28 */ "1e1908",
    /* 27 */ "b4b3d3",
    /* 26 */ "c29697",
    /* 25 */ "3b2410",
    /* 24 */ "211801",
    /* 23 */ "dcd3e9",
    /* 22 */ "b3a4b7",
    /* 21 */ "d1d5f6",
    /* 20 */ "cac9ed",
    /* 19 */ "aba0b0",
    /* 18 */ "25200f",
    /* 17 */ "774b42",
    /* 16 */ "c4c5e5",
    /* 15 */ "c3b7ce",
    /* 14 */ "e4e4fb",
    /* 13 */ "918790",
    /* 12 */ "784334",
    /* 11 */ "bdb2c7",
    /* 10 */ "201d07",
    /* 9 */ "bfc3e2",
    /* 8 */ "3f2e22",
    /* 7 */ "c27872",
    /* 6 */ "bf8a78",
    /* 5 */ "d4d9f3",
    /* 4 */ "d2cdea",
    /* 3 */ "826b6c",
    /* 2 */ "1d1e17",
    /* 1 */ "9fa0ad",
    /* 1 */ "000000",
  ],
  //lastUpdatedDate: createDate(5, 22, 2024, 3, 3, false),
};

const ANSWER = [
  [
    72, 34, 16, 53, 29, 95, 33, 58, 83, 4, 74, 20, 41, 6, 92, 50, 44, 27, 66,
    88, 21, 64, 14, 70, 60, 86, 40, 57, 93, 9, 5, 100, 78, 26, 7, 89, 52, 77,
    38, 82,
  ],
  [
    5, 100, 78, 26, 7, 89, 52, 77, 38, 82, 45, 22, 39, 55, 98, 61, 36, 47, 76,
    49, 94, 3, 62, 30, 73, 90, 35, 56, 15, 85, 75, 80, 24, 67, 71, 17, 8, 18,
    96, 23,
  ],
  [
    75, 80, 24, 67, 71, 17, 8, 18, 96, 23, 32, 65, 25, 46, 91, 43, 81, 2, 87,
    11, 51, 69, 12, 84, 10, 42, 28, 97, 68, 48, 63, 19, 37, 99, 54, 59, 79, 13,
    31, 1,
  ],
];
const ANSWER_COMBINED = [
  72, 34, 16, 53, 29, 95, 33, 58, 83, 4, 74, 20, 41, 6, 92, 50, 44, 27, 66, 88,
  21, 64, 14, 70, 60, 86, 40, 57, 93, 9, 5, 100, 78, 26, 7, 89, 52, 77, 38, 82,
  45, 22, 39, 55, 98, 61, 36, 47, 76, 49, 94, 3, 62, 30, 73, 90, 35, 56, 15, 85,
  75, 80, 24, 67, 71, 17, 8, 18, 96, 23, 32, 65, 25, 46, 91, 43, 81, 2, 87, 11,
  51, 69, 12, 84, 10, 42, 28, 97, 68, 48, 63, 19, 37, 99, 54, 59, 79, 13, 31, 1,
];

/*
  I use AI Generated code as a starting point for a few functions. All code is modified to fit the needs. There is very little AI code left.
*/

let bell = new Audio("assets/bell.mp3");
//let clock1 = new Audio('assets/tick-1.wav');
//let clock2 = new Audio('assets/tick-2.mp3');
let m = new Audio("assets/m.mp3");

bell.addEventListener("canplaythrough", function () {
  let btn = document.querySelector("button#day-counter");
  let clock = document.querySelector("div#clock-container");
  btn.addEventListener("click", function () {
    btn.animate(
      [
        {
          opacity: 1,
        },
        {
          opacity: 0,
        },
      ],
      {
        duration: 500,
        fill: "forwards",
      },
    );
    btn.disabled = true;
    setTimeout(function () {
      btn.remove();
    }, 500);

    let dayNum = 100 - config.descriptions.length + 1;
    clock.style.display = "block";
    bell.play().then(function () {
      gtag("event", "c_user_see_current_day", {
        day: dayNum,
        unix: Date.now(),
      });
      animateClock(100, dayNum, 6700, 25);
    });
  });
});

const clock = document.querySelector("svg.clock");
const hand = document.querySelector("#hand");
const day = document.querySelector("#day");

// https://easings.net/#easeOutCubic
function easeOutCubic(x) {
  return 1 - Math.pow(1 - x, 3);
}
function easeInCubic(x) {
  return Math.pow(1 - x, 3);
}

function interpolate(start, end, factor) {
  return start + (end - start) * factor;
}

function animateClock(start, end, duration) {
  const startTime = Date.now();

  //let lastValue = 0;
  //let bool = false;

  function update() {
    const elapsed = Date.now() - startTime;
    const factor = Math.min(elapsed / duration, 1);
    const easedFactor = easeOutCubic(factor);
    const currentValue = interpolate(start, end, easedFactor);
    const currentDay = Math.ceil(currentValue);
    //console.log(currentValue, currentDay);

    /*if (lastValue !== currentDay) {
      /*if (bool) {
        clock1.volume = factor;
        clock1.currentTime = 0;
        clock1.play();
      } else {
        clock2.volume = factor;
        clock2.currentTime = 0;
        clock2.play();
      };
      bool = !bool;* /
      console.log(lastValue, currentDay);
      clock1.pause();
      clock1.volume = factor;
      clock1.currentTime = 0;
      clock1.play();

      lastValue = currentDay;
    };*/

    const angle = 360 * (currentValue / start);
    if (isFinite(angle)) {
      hand.setAttribute("transform", `rotate(${angle} 0 0)`);
    } else {
      hand.remove();
    }
    day.textContent = currentDay;
    day.style.setProperty("transform", `scale(${factor}) translateY(3px)`);

    if (factor < 1) {
      requestAnimationFrame(update);
    } else {
      day.textContent = end;
      if (end === 0) {
        hand.style.setProperty("opacity", 0);
        day.textContent = "";
        setTimeout(function () {
          m.play().then(function () {
            window.addEventListener("blur", function () {
              if (!m.isDone) {
                m.pause();
              }
            });
            window.addEventListener("focus", function () {
              if (!m.isDone) {
                m.play();
              }
            });
            gtag("event", "c_user_rr_start", {
              day: currentDay,
              unix: Date.now(),
            });

            let time1 = 1358,
              time2 = 61000; /*, c = (time1 + time2), interval = c / 10;
            let elapsed2 = 0;
            let bool2 = false;
            let i = setInterval(function() {
              if (bool2) {
                animateClock(0, 100, interval);
              } else {
                animateClock(100, 0, interval);
              };
              bool2 = !bool2;
              elapsed2 += interval;
              if (elapsed2 > c) {
                clearInterval(i);
              };
            }, interval);*/
            setTimeout(function () {
              //animateClock(0, 100, 1500);
              clock.classList.add("m");

              var iframe = document.createElement("iframe");
              iframe.width = "560";
              iframe.height = "315";
              iframe.src = "https://www.youtube.com/embed/J-8WNC6vlyk";
              iframe.frameBorder = "0";
              iframe.referrerPolicy = "strict-origin-when-cross-origin";
              iframe.allowFullscreen = true;

              document.body.insertBefore(
                iframe,
                document.querySelector("p#updateDay"),
              );
            }, time1);
            /*setTimeout(function () {
              clock.classList.remove("m");
              gtag("event", "c_user_rr_end", {
                day: currentDay,
                unix: Date.now(),
              });
            }, time2);*/
            m.addEventListener("timeupdate", function () {
              if (m.currentTime >= time2 / 1000) {
                m.isDone = true;
                clock.classList.remove("m");
                gtag("event", "c_user_rr_end", {
                  day: currentDay,
                  unix: Date.now(),
                });
              }
            });
          });
        }, 1500);
      }
    }
  }
  update();
}

/*
  ChatGPT 3.5 Prompt:

  js join array with commas and "and" at the end
*/
function joinWithCommasAnd(array) {
  if (array.length === 0) {
    return "";
  } else if (array.length === 1) {
    return array[0];
  } else if (array.length === 2) {
    return array.join(" and ");
  } else {
    const lastElement = array.pop();
    return `${array.join(", ")}, and ${lastElement}`;
  }
}

/*
  ChatGPT 3.5 Prompt:

  js function create date from m, d, y, and h:m, and isAm
*/
function createDate(month, day, year, hour, minute, isAm) {
  if (isAm && hour === 12) {
    hour = 0;
  } else if (!isAm && hour !== 12) {
    hour += 12;
  }

  return new Date(year, month - 1, day, hour, minute);
}

/*
  ChatGPT 3.5 Prompt:
  
  js date get "N Days, N Hours, and N Minutes Ago" function when passed a time in the past 
*/
function timeAgo(pastDate) {
  const now = new Date();
  const diffInMilliseconds = now - new Date(pastDate);

  const minutes = Math.floor(diffInMilliseconds / 60000);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);

  const displayMinutes = minutes % 60;
  const displayHours = hours % 24;
  const displayDays = days;

  let array = [];
  if (displayDays > 0) {
    array.push(`${displayDays} Day${displayDays === 1 ? "" : "s"}`);
  }
  if (displayHours) {
    array.push(`${displayHours} Hour${displayHours === 1 ? "" : "s"}`);
  }
  if (displayMinutes) {
    array.push(`${displayMinutes} Minute${displayMinutes === 1 ? "" : "s"}`);
  }
  return `<span style="color: ${displayDays >= 1 ? "#ff5454" : "#54ff54"};">Day ${100 - (config.descriptions.length - 1)} (${array.length === 0 ? "Right Now" : `${joinWithCommasAnd(array)} Ago`})</span>`;
}

//document.querySelector("p#updateDay").innerHTML =
//`Last updated on ${timeAgo(config.lastUpdatedDate)}. `;

let descToUrl = document.querySelector("textarea#descToUrl");
descToUrl.value =
  config.descriptions[config.descriptions.length - 1].join("\n");
let descToUrlOut = document.querySelector("span#descToUrlOut");
function descToUrlMakeLink(split) {
  return (
    "https://www.youtube.com/watch?v=" +
    split
      .map((e) => parseInt(e))
      .map((e) => String.fromCharCode(e))
      .join("")
  );
}
function descToUrlUpdate() {
  let split = descToUrl.value.split("\n");
  if (split.length !== 11) {
    descToUrlOut.innerText = "Invalid Input";
    return;
  }
  //console.log(split.join(", "));
  let link = descToUrlMakeLink(split);
  descToUrlOut.innerHTML = `<a href="${link}" target="_blank">${link}</a>`;
}
descToUrl.addEventListener("input", descToUrlUpdate);
descToUrlUpdate();
let descToUrlHistory = document.querySelector(
  "div#collapseDescToUrlHistoryContent",
);
config.descriptions.forEach((d, i) => {
  let link = descToUrlMakeLink(d);
  descToUrlHistory.innerHTML += `<span class="d-block ${i === config.descriptions.length - 1 ? "mb-0" : "mb-2"}">Day ${100 - i}: <a href="${link}" target="_blank">${link}</a></span>`;
});

// https://stackoverflow.com/a/43726671/24451450
function decodeMorse(morseCode) {
  var ref = {
    ".-": "a",
    "-...": "b",
    "-.-.": "c",
    "-..": "d",
    ".": "e",
    "..-.": "f",
    "--.": "g",
    "....": "h",
    "..": "i",
    ".---": "j",
    "-.-": "k",
    ".-..": "l",
    "--": "m",
    "-.": "n",
    "---": "o",
    ".--.": "p",
    "--.-": "q",
    ".-.": "r",
    "...": "s",
    "-": "t",
    "..-": "u",
    "...-": "v",
    ".--": "w",
    "-..-": "x",
    "-.--": "y",
    "--..": "z",
    ".----": "1",
    "..---": "2",
    "...--": "3",
    "....-": "4",
    ".....": "5",
    "-....": "6",
    "--...": "7",
    "---..": "8",
    "----.": "9",
    "-----": "0",
  };

  return morseCode
    .split(" ")
    .map((a) =>
      a
        .split(" ")
        .map((b) => ref[b])
        .join(""),
    )
    .join("");
}

// https://stackoverflow.com/a/6234804
function escapeHtml(unsafe) {
  return unsafe
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

let morseCode = document.querySelector("input#morseDecode");
morseCode.value = config.morseCode.join(" ");
let morseDecodeOut = document.querySelector("span#morseDecodeOut");
Array.prototype.remove = function () {
  var what,
    a = arguments,
    L = a.length,
    ax;
  while (L && this.length) {
    what = a[--L];
    while ((ax = this.indexOf(what)) !== -1) {
      this.splice(ax, 1);
    }
  }
  return this;
};
/*
  ChatGPT 3.5 Prompt:
  
  js function called fillLetters(fillPhrase, inputPhrase)
  where fillPhrase is a string, and inputphrase is another string.
  for each letter in fillPhrase:
  if the letter in inputPhrase that is also in fillPhrase, add a span element with the class "filled" with the letter. REMOVE THE FIRST INSTANCE OF THAT CHARACTER FROM FILLPHRASE
  if the letter in inputPhrase is NOT in fillPhrase, add a span element with the class "unfilled". then move to the next character in fillPhrase. 
  
  example:
  fillLetters('extst', 'tex')
  
  output:
  <span class="filled">e</span><span class="filled">x</span><span class="filled">t</span><span class="unfilled">s</span><span class="unfilled">t</span>
*/
/*function fillLetters(fillPhrase, hexes, inputPhrase) {
  let output = "";
  let otherHex = [];
  let used = [];
  for (let i = 0; i < fillPhrase.length; i++) {
    const letter = fillPhrase[i];
    const index = inputPhrase.toLowerCase().indexOf(letter.toLowerCase());
    if (index !== -1) {
      console.log(letter, index);
      output += `<span class="filled">${letter}</span>`;
      used.push(index);
      otherHex.push(hexes[index]);
      inputPhrase = inputPhrase.slice(0, index) + inputPhrase.slice(index + 1);
      console.log(inputPhrase);
    } else {
      output += `<span class="unfilled">${letter}</span>`;
      if (letter !== " " && !letter.includes("\r") && !letter.includes("\n")) {
        otherHex.push("000000");
      }
    }
  }
  console.log(otherHex.join("\n"));
  console.log(used.sort((a, b) => a - b));
  config.hexCodeUnscramble = otherHex;
  return output;
}*/
function fillLetters(fillPhrase, hexes, inputPhrase) {
  let fillArray = fillPhrase
    //.replace(/ |\r|\n/g, "")
    .toLowerCase()
    .split("");
  let fillArrayCase = fillPhrase.split("");
  let inputArray = inputPhrase.toLowerCase().split("");
  let output = "";
  let otherHex = [];
  fillArray.forEach((letter, fillIndexOfChar) => {
    let inputIndexOfChar = inputArray.indexOf(letter);
    if (inputIndexOfChar > -1) {
      //console.log(letter, fillIndexOfChar, hexes[inputIndexOfChar]);
      output += `<span class="filled">${fillArrayCase[fillIndexOfChar]}</span>`;
      otherHex.push({
        letter: letter,
        hex: hexes[inputIndexOfChar],
      });
      inputArray[inputIndexOfChar] = null;
    } else {
      output += `<span class="unfilled">${fillArrayCase[fillIndexOfChar]}</span>`;
      if (letter !== " " && !letter.includes("\r") && !letter.includes("\n")) {
        otherHex.push({
          letter: letter,
          hex: "00000000",
        });
      }
    }
  });
  config.hexCodeUnscramble = otherHex;
  //console.log(otherHex);
  return output;
}

/*
  ChatGPT 3.5 Prompt:

  js insert period for every 30 characters in a string
*/
function insertEveryNthChars(str, char, n) {
  let result = "";
  for (let i = 0; i < str.length; i++) {
    result += str[i];
    if ((i + 1) % n === 0) {
      result += char;
    }
  }
  return result;
}

let spreadComment = document.querySelector("textarea#spreadComment");
let decodedMorse = "";
function morseCodeUpdate() {
  decodedMorse = decodeMorse(morseCode.value);
  morseDecodeOut.innerHTML =
    '<span class="d-block mt-3 mb-1">Result: <code>' +
    decodedMorse +
    '</code></span><h4>Morse Lyric Map</h4><p class="ms-2" style="overflow-wrap: anywhere;">' +
    fillLetters(
      `Never gonna give you up
Never gonna let you down
Never gonna run around and desert you
Never gonna make you cry
Never gonna say goodbye
Never gonna tell a lie and hurt you`,
      config.hexCode,
      decodedMorse,
    ) +
    "</p>";

  spreadComment.value = `hidden message:
current morse: (...) ${config.morseCode.join(" ").slice(-30)}
current message: (...) ${insertEveryNthChars(decodedMorse, ".", 31).slice(-30)}
countdown arg tool (with unscrambled letters & predicted image) in description of the Countdown ARG Unlisted Videos playlist on my channel (Countdown blocked playlist links)`;
} // of this playlist: https://www.youtube.com/playlist?list=PL5Y8yo2AZE3E-I5dKD8djw4v46wKOoWgG
morseCodeUpdate();
morseCode.addEventListener("input", morseCodeUpdate);

/*
  ChatGPT 3.5 Prompt:
  
  js function drawPixels(hexArray, width, height) that does the following:
  clear canvas
  set canvas width and height
  for each hex value in hexArray
  add "#" to the beginning and draw that pixel at the (Math.floor(index / width) + 1, index % height)
*/
function drawCanvasPixels(canvas, ctx, hexArray, width, height, vflip) {
  /*if (vflip) {
    hexArray = config.hexCodeUnscramble;
  }
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  canvas.width = width;
  canvas.height = height;
  hexArray.forEach((obj, index) => {
    if (!obj || !obj.hex) {
      return;
    }
    if (obj.hex.length === 6 || obj.hex.length == 8) {
      let hex = "#" + obj.hex;
      const x = (index % (width / 100)) * 100;
      const y = Math.floor(index / (width / 100)) * 100;
      ctx.fillStyle = hex;
      ctx.fillRect(x, y, 100, 100);
      ctx.font = "48px serif";
      ctx.textBaseline = "top";
      ctx.fillStyle = "#ffffff";
      ctx.fillText(obj.letter, x, y);
    } else {
      hex = "#000000";
    }
  });*/
  //if (vflip) {
  //hexArray = config.hexCodeUnscramble;
  //}
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  canvas.width = width;
  canvas.height = height;
  //console.log(hexArray);
  ANSWER_COMBINED.forEach((num, index) => {
    if (num === 0) {
      return;
    }
    const coords = indexToCoords(index, 10, 10);
    const x = coords.x * 100;
    const y = coords.y * 100;
    //console.log(coords);
    ctx.fillStyle = "#" + config.hexCode[100 - num];
    ctx.fillRect(x, y, 100, 100);
    ctx.font = "48px serif";
    ctx.textBaseline = "top";
    ctx.fillStyle = "#ffffff";
    ctx.fillText(num, x, y);
  });
}
function indexToCoords(index, width, height) {
  let x = index % width;
  let y = Math.floor(index / width);

  return { x: x, y: y };
}

let videoHexCodes = document.querySelector("textarea#videoHexCodes");
videoHexCodes.value = config.hexCode.join("\n");
let videoHexCodesOut = document.querySelector("canvas#videoHexCodesOut");
let videoHexCodesOutCtx = videoHexCodesOut.getContext("2d");

drawCanvasPixels(
  videoHexCodesOut,
  videoHexCodesOutCtx,
  null,
  1000,
  1000,
  false,
);

/*let videoHexCodesDimesion = {
  x: 10,
  y: 10,
  vflip: true,
};
function videoHexCodesUpdate() {
  let split = videoHexCodes.value.split("\n");
  //videoHexCodes.setAttribute("rows", split.length);
  drawCanvasPixels(
    videoHexCodesOut,
    videoHexCodesOutCtx,
    null, //split,
    videoHexCodesDimesion.x,
    videoHexCodesDimesion.y,
    videoHexCodesDimesion.vflip,
  );
}
//videoHexCodesUpdate();
videoHexCodes.addEventListener("input", videoHexCodesUpdate);
function videoHexCodesOutDimensionsUpdate() {
  videoHexCodesDimesion.x = parseInt(videoHexCodesOutWidth.value) * 100;
  videoHexCodesDimesion.y = parseInt(videoHexCodesOutHeight.value) * 100;
  videoHexCodesDimesion.vflip = videoHexCodesOutVFlip.checked;
  videoHexCodesOutWidthLabel.innerText = "Width: " + videoHexCodesDimesion.x;
  videoHexCodesOutHeightLabel.innerText = "Height: " + videoHexCodesDimesion.y;
  videoHexCodesUpdate();
}
let videoHexCodesOutVFlip = document.querySelector(
  "input#videoHexCodesOutVFlip",
);
videoHexCodesOutVFlip.value = videoHexCodesDimesion.vflip;
videoHexCodesOutVFlip.addEventListener(
  "input",
  videoHexCodesOutDimensionsUpdate,
);
let videoHexCodesOutWidthLabel = document.querySelector(
  "#videoHexCodesOutWidthLabel",
);
let videoHexCodesOutWidth = document.querySelector("#videoHexCodesOutWidth");
videoHexCodesOutWidth.value = videoHexCodesDimesion.x;
videoHexCodesOutWidth.addEventListener(
  "input",
  videoHexCodesOutDimensionsUpdate,
);

let videoHexCodesOutHeightLabel = document.querySelector(
  "#videoHexCodesOutHeightLabel",
);
let videoHexCodesOutHeight = document.querySelector("#videoHexCodesOutHeight");
videoHexCodesOutHeight.value = videoHexCodesDimesion.y;
videoHexCodesOutHeight.addEventListener(
  "input",
  videoHexCodesOutDimensionsUpdate,
);
videoHexCodesOutDimensionsUpdate();
*/

document.querySelectorAll("textarea").forEach(function (textarea) {
  textarea.setAttribute(
    "style",
    "height:" + textarea.scrollHeight + "px;overflow-y:auto;",
  );
  textarea.addEventListener("input", function () {
    this.style.height = 0;
    this.style.height = this.scrollHeight + "px";
  });
});
