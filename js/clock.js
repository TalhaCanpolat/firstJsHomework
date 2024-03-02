function getName() {
  const FIRST_NAME = document.querySelector("#myName");
  let USER_NAME = prompt("Adınız: ");

  while (!USER_NAME) {
    USER_NAME = prompt("Lütfen bir değer giriniz: ");
  }

  FIRST_NAME.innerHTML = USER_NAME;
}
getName();

const MY_CLOCK = document.querySelector("#myClock"); //bilerek global değişken olarak tanımlandı

function updateClock() {
  const HISTORY = new Date();

  const GUN = HISTORY.getDate();
  const AY = HISTORY.getMonth() + 1;
  const YIL = HISTORY.getFullYear();
  let saat = HISTORY.getHours();
  let dakika = HISTORY.getMinutes();
  let saniye = HISTORY.getSeconds();

  saat = (saat < 10 ? "0" : "") + saat;
  dakika = (dakika < 10 ? "0" : "") + dakika;
  saniye = (saniye < 10 ? "0" : "") + saniye;

  const CURRENT_DAY = `${GUN}.${AY}.${YIL} - ${saat}:${dakika}:${saniye}`;

  MY_CLOCK.innerHTML = CURRENT_DAY;
}

setInterval(updateClock, 1000); // 1 saniyede bir güncelle

window.addEventListener("DOMContentLoaded", updateClock()); // sayfa açıldığı zaman çalışşsın

/* 2.yol 

function getCurrentDate() {
  const CURRENT_TIME = new Date().toLocaleString("tr-TR");
  MY_CLOCK.innerHTML = CURRENT_TIME;
}

setInterval(getCurrentDate, 1000);

*/
