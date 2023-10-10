// Toggle class active
const navbarNav = document.querySelector(".navbar-nav");
// Ketika hamburger menu diklik
document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// Klik di luar sidebar untuk menghilangkan nav
const hm = document.querySelector("#hamburger-menu");

document.addEventListener("click", function (e) {
  if (!hm.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});

// Modal Box

const formModal = document.querySelector("#form-modal");
const formModalButtons = document.querySelectorAll(".form-button");

formModalButtons.forEach((btn) => {
  btn.onclick = (e) => {
    formModal.style.display = "flex";
    e.preventDefault();
  };
});

//

const itemDetailModal1 = document.querySelector("#item-detail-modal1");
const itemDetailButtons1 = document.querySelectorAll(".item-detail-button1");

itemDetailButtons1.forEach((btn) => {
  btn.onclick = (e) => {
    itemDetailModal1.style.display = "flex";
    e.preventDefault();
  };
});
const itemDetailModal2 = document.querySelector("#item-detail-modal2");
const itemDetailButtons2 = document.querySelectorAll(".item-detail-button2");

itemDetailButtons2.forEach((btn) => {
  btn.onclick = (e) => {
    itemDetailModal2.style.display = "flex";
    e.preventDefault();
  };
});
const itemDetailModal3 = document.querySelector("#item-detail-modal3");
const itemDetailButtons3 = document.querySelectorAll(".item-detail-button3");

itemDetailButtons3.forEach((btn) => {
  btn.onclick = (e) => {
    itemDetailModal3.style.display = "flex";
    e.preventDefault();
  };
});

const itemDetailModal4 = document.querySelector("#item-detail-modal4");
const itemDetailButtons4 = document.querySelectorAll(".item-detail-button4");

itemDetailButtons4.forEach((btn) => {
  btn.onclick = (e) => {
    itemDetailModal4.style.display = "flex";
    e.preventDefault();
  };
});

const itemDetailModal5 = document.querySelector("#item-detail-modal5");
const itemDetailButtons5 = document.querySelectorAll(".item-detail-button5");

itemDetailButtons5.forEach((btn) => {
  btn.onclick = (e) => {
    itemDetailModal5.style.display = "flex";
    e.preventDefault();
  };
});

const itemDetailModal6 = document.querySelector("#item-detail-modal6");
const itemDetailButtons6 = document.querySelectorAll(".item-detail-button6");

itemDetailButtons6.forEach((btn) => {
  btn.onclick = (e) => {
    itemDetailModal6.style.display = "flex";
    e.preventDefault();
  };
});
const itemDetailModal7 = document.querySelector("#item-detail-modal7");
const itemDetailButtons7 = document.querySelectorAll(".item-detail-button7");

itemDetailButtons7.forEach((btn) => {
  btn.onclick = (e) => {
    itemDetailModal7.style.display = "flex";
    e.preventDefault();
  };
});
const itemDetailModal8 = document.querySelector("#item-detail-modal8");
const itemDetailButtons8 = document.querySelectorAll(".item-detail-button8");

itemDetailButtons8.forEach((btn) => {
  btn.onclick = (e) => {
    itemDetailModal8.style.display = "flex";
    e.preventDefault();
  };
});
const itemDetailModal9 = document.querySelector("#item-detail-modal9");
const itemDetailButtons9 = document.querySelectorAll(".item-detail-button9");

itemDetailButtons9.forEach((btn) => {
  btn.onclick = (e) => {
    itemDetailModal9.style.display = "flex";
    e.preventDefault();
  };
});
const itemDetailModal10 = document.querySelector("#item-detail-modal10");
const itemDetailButtons10 = document.querySelectorAll(".item-detail-button10");

itemDetailButtons10.forEach((btn) => {
  btn.onclick = (e) => {
    itemDetailModal10.style.display = "flex";
    e.preventDefault();
  };
});

//
// Klik Tombol Close Detail Modal
document.querySelector(".modal .close-icon1").onclick = (e) => {
  itemDetailModal1.style.display = "none";
  e.preventDefault();
};
document.querySelector(".modal .close-icon2").onclick = (e) => {
  itemDetailModal2.style.display = "none";
  e.preventDefault();
};
document.querySelector(".modal .close-icon3").onclick = (e) => {
  itemDetailModal3.style.display = "none";
  e.preventDefault();
};
document.querySelector(".modal .close-icon4").onclick = (e) => {
  itemDetailModal4.style.display = "none";
  e.preventDefault();
};
document.querySelector(".modal .close-icon5").onclick = (e) => {
  itemDetailModal5.style.display = "none";
  e.preventDefault();
};
document.querySelector(".modal .close-icon6").onclick = (e) => {
  itemDetailModal6.style.display = "none";
  e.preventDefault();
};
document.querySelector(".modal .close-icon7").onclick = (e) => {
  itemDetailModal7.style.display = "none";
  e.preventDefault();
};
document.querySelector(".modal .close-icon8").onclick = (e) => {
  itemDetailModal8.style.display = "none";
  e.preventDefault();
};
document.querySelector(".modal .close-icon9").onclick = (e) => {
  itemDetailModal9.style.display = "none";
  e.preventDefault();
};
document.querySelector(".modal .close-icon10").onclick = (e) => {
  itemDetailModal10.style.display = "none";
  e.preventDefault();
};

// Klik Kirim Pesanan
function sentWhatsapp() {
  const phoneNumber = "+6282377546685";

  const name = document.querySelector(".name").value;
  const eMail = document.querySelector(".eMail").value;
  const title = document.querySelector(".title").value;
  const sum = document.querySelector(".sum").value;
  const address = document.querySelector(".address").value;
  const description = document.querySelector(".description").value;

  const url =
    "https://wa.me/" +
    phoneNumber +
    "?text=" +
    `Nama : +${name}+%0a` +
    `E-mail : +${eMail}+%0a` +
    `Judul Buku : +${title}+%0a` +
    `Jumlah : +${sum}+%0a` +
    `Alamat : +${address}+%0a` +
    `Deskripsi : +${description}+%0a%0a`;

  window.open(url, "_blank").focus();
}

// Klik Tombol Close Kirim
document.querySelector("#form-modal .close-icon").onclick = (e) => {
  formModal.style.display = "none";
  e.preventDefault();
};

// Klik Kirim Pesan
function whatsApp() {
  const phoneNumber = "+6285342426949";

  const personName = document.querySelector(".person-name").value;
  const message = document.querySelector(".message").value;

  const url =
    "https://wa.me/" +
    phoneNumber +
    "?text=" +
    `Nama : +${personName}+%0a` +
    `Pesan : +${message}+%0a%0a`;

  window.open(url, "_blank").focus();
}

//
//
//
// const API_BASE_URL = "http://localhost:3000";

// async function fetchBooks() {
//   try {
//     const response = await fetch(`${API_BASE_URL}/books`);
//     const data = await response.json();
//     const book
//    } catch (error) {
//       console.error(error);

//   }
// }
// fetchBook();

//

// public/script.js
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("myform");

  form.addEventListener("button", async (e) => {
    e.preventDefault();

    const name = document.getElementsByClassName("name").value;
    const eMail = document.getElementsByClassName("eMail").value;
    const title = document.getElementsByClassName("title").value;
    const sum = document.getElementsByClassName("sum").value;
    const address = document.getElementsByClassName("address").value;
    const description = document.getElementsByClassName("description").value;

    try {
      const response = await fetch("/api/saveData", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, eMail, title, sum, address, description }),
      });

      const data = await response.json();

      if (data.message === "Data berhasil disimpan") {
        alert("Data berhasil disimpan");
        form.reset();
      } else {
        alert("Terjadi kesalahan saat menyimpan data");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Terjadi kesalahan saat menyimpan data");
    }
  });
});
