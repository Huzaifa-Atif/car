var cars = [
    "https://png.pngtree.com/thumb_back/fw800/background/20230722/pngtree-d-illustration-of-a-white-backgrounded-sports-car-in-vibrant-yellow-image_3764444.jpg",  // Car 1
    "https://img.freepik.com/free-photo/compact-sports-car-family-sedan-3d-illustration_101266-24772.jpg",  // Car 2
    "https://cache4.pakwheels.com/system/car_generation_pictures/2975/original/Suzuki_Bolan_2012.jpg?1444116837",  // Car 3
    "https://thumbs.dreamstime.com/b/autorickshaw-white-background-traditional-indian-public-transport-tricycle-vintage-retro-motorcycle-years-th-century-115110266.jpg",  // Car 4
    "https://static.vecteezy.com/system/resources/previews/009/749/567/original/classic-bicycle-icon-silhouette-bike-white-background-free-vector.jpg",  // Car 5
    "https://t4.ftcdn.net/jpg/02/33/67/57/360_F_233675795_5BmGeu0W7Ytrs6iSAj6F6sjgBN0BTz5P.jpg"  // Car 6
  ];
  
  var emojis = [
    "https://attic.sh/penn7p68es7s9fbsn07jko9x2syk",  // Emoji 1
    "https://icon2.cleanpng.com/20240323/lxl/transparent-emoji-surprised-man-arms-stretched-blue-background-man-surprised-arms-raised-blue-background65ff7069023146.37064661.webp",  // Emoji 2
    "emoji1.PNG",  // Emoji 3 placeholder
    "emoji2.PNG",  // Emoji 4 placeholder
    "https://cdn2.iconfinder.com/data/icons/boy-emoji-avatars/30/flat_man_emoji_happy_crying_avatar_emoticon_face_profile-512.png",  // Emoji 5
    "emoji3.PNG"  // Emoji 6
  ];
  
  // Index to track current car and emoji
  var currentIndex = 0;
  
  function changeCarAndEmoji() {
    var carImage = document.getElementById("cars");
    var emojiImage = document.querySelector(".image2");
  
    // Change the car and emoji images
    
    // Yeh line carImage ke src property ko update karti hai cars array ke currentIndex ke URL se
    carImage.src = cars[currentIndex];
    emojiImage.src = emojis[currentIndex];
  
    // Increment index for next image
    currentIndex++;
  
    // If we reach the end of the arrays, reset index to 0
    if (currentIndex >= cars.length) {
      currentIndex = 0;
    }
  }
  