// (function () {
//     const second = 1000,
//           minute = second * 60,
//           hour = minute * 60,
//           day = hour * 24;

//     //這邊輸入區塊時間timestamp
//     var timestamp = 1657814400;

//     var targetTime = new Date(timestamp*1000);
//     console.log(targetTime);

//     const countDown = new Date(targetTime).getTime(),
//         x = setInterval(function() {

//           const now = new Date().getTime(),
//                 distance = countDown - now;
//                 // console.log(distance);
//           if (distance>0){
//             document.getElementById("days").innerText = Math.floor(distance / (day)),
//             document.getElementById("hours").innerText = Math.floor((distance % (day)) / (hour)),
//              document.getElementById("minutes").innerText = Math.floor((distance % (hour)) / (minute)),
//              document.getElementById("seconds").innerText = Math.floor((distance % (minute)) / second);
//           }
//           else{
//             document.getElementById("days").innerText = 0,
//             document.getElementById("hours").innerText = 0,
//              document.getElementById("minutes").innerText = 0,
//              document.getElementById("seconds").innerText = 0;
//           }
//         }, 0)
//     }());



    async function che(){
      const second = 1000,
      minute = second * 60,
      hour = minute * 60,
      day = hour * 24;

      const distance =  await MerageStartTime();

          document.getElementById("days").innerText = Math.floor(distance / (day)),
            document.getElementById("hours").innerText = Math.floor((distance % (day)) / (hour)),
            document.getElementById("minutes").innerText = Math.floor((distance % (hour)) / (minute)),
            document.getElementById("seconds").innerText = Math.floor((distance % (minute)) / second);

          //do something later when date is reached
          if (distance < 0) {
            document.getElementById("headline").innerText = "It's my birthday!";
            document.getElementById("countdown").style.display = "none";
            document.getElementById("content").style.display = "block";
            clearInterval(x);
          }
    }
