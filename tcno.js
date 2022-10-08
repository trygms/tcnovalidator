// TC kimlik no 11 haneli rakamlardan oluşur.
// İlk rakam sıfır (0) olamaz.
// 1, 3, 5, 7 ve 9. hanelerin toplamının 7 katı ile 2, 4, 6 ve 8. hanelerin toplamı çıkartılır, 
// sonucun 10’a bölümünden kalanı 10. haneyi verir.
// İlk 10 hanenin toplamının 10’a bölümünden kalan, son haneyi verir.

const checkButton = document.querySelector(".check-btn");
checkButton.addEventListener("click", ()=> {
    const tcNo = document.querySelector(".guess-input").value;
    const msg = document.querySelector(".msg");
    let tcNoArr = tcNo.split('');
    const tcNoArrNum = tcNoArr.map((item) => parseInt(item));
    const oddDigitsSum = tcNoArrNum[0]+ tcNoArrNum[2]+ tcNoArrNum[4]+ tcNoArrNum[6]+ tcNoArrNum[8];
    const doubleDigitsSum = tcNoArrNum[1]+ tcNoArrNum[3]+ tcNoArrNum[5]+ tcNoArrNum[7];
    const firstTenDigitSum = oddDigitsSum + doubleDigitsSum + tcNoArrNum[9];

 if (tcNoArrNum[0] == 0){
    msg.innerHTML = `TC Number cannot start with zero  <i class="fa-regular fa-face-sad-tear fa-2x"></i>`; }

//  else if (tcNoArrNum.lenght !== 11){
//     msg.innerHTML = `TC Number must be eleven digits  <i class="fa-regular fa-face-sad-tear fa-2x"></i>`; }

 else if ((oddDigitsSum * 7 - doubleDigitsSum) % 10 !== tcNoArrNum[9]){
 msg.innerHTML = `Imvalid TC Number <i class="fa-regular fa-face-sad-tear fa-2x"></i>`; }
 
 else if (firstTenDigitSum % 10 !== tcNoArrNum[10]){
    msg.innerHTML = `Imvalid TC Number <i class="fa-regular fa-face-sad-tear fa-2x"></i>`; }
 
 else {
    msg.innerHTML = `Valid TC Number <i class="fa-solid fa-face-grin-hearts fa-2x"></i>`; }
})
