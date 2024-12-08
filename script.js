let lastScrollTop = 0; // Menyimpan posisi scroll terakhir
let navbar = document.querySelector(".navbar"); // Ambil navbar
let isNavbarHidden = false; // Flag untuk memantau apakah navbar sudah menghilang
let isAtTop = false; // Flag untuk memantau apakah scroll berada di atas

window.onscroll = function () {
    let currentScroll = window.pageYOffset || document.documentElement.scrollTop;

    // Jika scroll berada di paling atas
    if (currentScroll === 0 && !isAtTop) {
        navbar.style.transition = "top 0.5s ease"; // Efek transisi smooth
        navbar.style.top = "-60px"; // Navbar menghilang
        isAtTop = true; // Tandai bahwa pengguna berada di paling atas
        isNavbarHidden = false; // Reset agar navbar bisa menghilang lagi saat scroll ke bawah
        setTimeout(() => {
            navbar.style.transition = "top 0.5s ease"; // Efek transisi smooth
            navbar.style.top = "0"; // Navbar muncul kembali
        }, 200);
        return; 
    }

    // Jika scroll ke bawah dan navbar belum menghilang
    if (currentScroll > lastScrollTop && !isNavbarHidden) {
        navbar.style.transition = "top 0.5s ease"; // Efek transisi smooth
        navbar.style.top = "-60px"; // Navbar menghilang
        isNavbarHidden = true; // Tandai navbar sudah menghilang
        isAtTop = false; // Reset flag untuk kondisi atas
        setTimeout(() => {
            navbar.style.transition = "top 0.5s ease"; // Efek transisi smooth
            navbar.style.top = "0"; // Navbar muncul kembali
        }, 2000); 
    }

    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // Menjaga nilai scroll tetap positif
};

function toggleMenu() {
    let navbarLinks = document.querySelectorAll('.navbar a');
    navbarLinks.forEach(link => {
        link.classList.toggle('active'); // Toggle visibility of navbar links
    });
}
