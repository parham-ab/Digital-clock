// 24 hour format
function showTime() {
  const clock = document.querySelector(".clock");
  const date = new Date();
  const H = date.getHours();
  const M = date.getMinutes();
  const S = date.getSeconds();
  const currentTime1 = `${H}:${M}:${S}`;
  clock.innerHTML = currentTime1;
}
setInterval(showTime, 1000);
// AM/PM format
function showTime2() {
  let clock2 = document.querySelector(".clock2");
  let date = new Date();
  let H2 = date.getHours();
  let M2 = date.getMinutes();
  let S2 = date.getSeconds();
  //
  let session = "AM";
  if (H2 === 0) {
    H2 = 12;
  }
  if (H2 > 12) {
    H2 = H2 - 12;
    session = "PM";
  }
  H2 = H2 < 10 ? `0${H2}` : H2;
  M2 = M2 < 10 ? `0${M2}` : M2;
  S2 = S2 < 10 ? `0${S2}` : S2;

  const currentTime2 = `${H2}:${M2}:${S2} ${session}`;
  clock2.innerHTML = currentTime2;
}
setInterval(showTime2, 1000);
