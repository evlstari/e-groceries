const bannerContainer = document.querySelector('.banner-container');
const images = bannerContainer.getElementsByTagName('img');
let currentIndex = 0;
setInterval(() => {
  images[currentIndex].classList.remove('active'); // hapus kelas active pada gambar saat ini
  currentIndex = (currentIndex + 1) % images.length; // update indeks gambar berikutnya
  images[currentIndex].classList.add('active'); // tambahkan kelas active pada gambar berikutnya
}, 5000); // ubah gambar setiap 5 detik

  

//   validasi

  function validateForm() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
  
    if (name == "") {
      alert("Name must be filled out");
      return false;
    }
  
    if (email == "") {
      alert("Email must be filled out");
      return false;
    }
  
    if (message == "") {
      alert("Message must be filled out");
      return false;
    }
  
    return true;
  }

  document.getElementById("myForm").addEventListener("submit", function(event) {
    if (!validateForm()) {
      event.preventDefault();
    }
  });
  
  