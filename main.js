// Arrays untuk menyimpan penumpang per angkot
var angkot1 = [];
var angkot2 = [];
var angkot3 = [];

// Fungsi menambah penumpang
document.getElementById("tambahBtn").addEventListener("click", function () {
  var nama = document.getElementById("nama").value;
  var angkot = document.getElementById("angkot").value;

  if (nama === "") {
    alert("Nama tidak boleh kosong!");
    return;
  }

  if (angkot === "1") {
    angkot1 = tambahPenumpang(nama, angkot1);
  } else if (angkot === "2") {
    angkot2 = tambahPenumpang(nama, angkot2);
  } else if (angkot === "3") {
    angkot3 = tambahPenumpang(nama, angkot3);
  }

  updatePenumpangList();
  document.getElementById("nama").value = ""; // Clear input field
});

// Fungsi menghapus penumpang
document.getElementById("hapusBtn").addEventListener("click", function () {
  var nama = document.getElementById("nama").value;
  var angkot = document.getElementById("angkot").value;

  if (nama === "") {
    alert("Nama tidak boleh kosong!");
    return;
  }

  if (angkot === "1") {
    angkot1 = hapusPenumpang(nama, angkot1);
  } else if (angkot === "2") {
    angkot2 = hapusPenumpang(nama, angkot2);
  } else if (angkot === "3") {
    angkot3 = hapusPenumpang(nama, angkot3);
  }

  updatePenumpangList();
  document.getElementById("nama").value = ""; // Clear input field
});

// Fungsi untuk menampilkan penumpang
function updatePenumpangList() {
  // Update daftar penumpang untuk setiap angkot
  updateList("angkot1List", angkot1);
  updateList("angkot2List", angkot2);
  updateList("angkot3List", angkot3);

  // Hitung total penumpang
  var total = hitungTotalPenumpang(angkot1, angkot2, angkot3);
  document.getElementById("totalPenumpang").textContent = total;
}

// Fungsi untuk memperbarui daftar penumpang di halaman
function updateList(angkotId, penumpang) {
  var listElement = document
    .getElementById(angkotId)
    .getElementsByTagName("ul")[0];
  listElement.innerHTML = ""; // Clear previous list

  penumpang.forEach(function (penumpang) {
    var li = document.createElement("li");
    li.textContent = penumpang || "Kosong";
    listElement.appendChild(li);
  });
}

// Fungsi menambah penumpang
function tambahPenumpang(namaPenumpang, penumpang) {
  if (penumpang.length === 0) {
    penumpang.push(namaPenumpang);
    alert(namaPenumpang + " telah ditambahkan sebagai penumpang pertama.");
    return penumpang;
  } else {
    for (var i = 0; i < penumpang.length; i++) {
      if (penumpang[i] === undefined) {
        penumpang[i] = namaPenumpang;
        alert(namaPenumpang + " telah ditambahkan ke kursi kosong.");
        return penumpang;
      } else if (penumpang[i] === namaPenumpang) {
        alert(namaPenumpang + " sudah ada di dalam kendaraan.");
        return penumpang;
      } else if (i === penumpang.length - 1) {
        penumpang.push(namaPenumpang);
        alert(namaPenumpang + " telah ditambahkan ke kursi baru.");
        return penumpang;
      }
    }
  }
}

// Fungsi menghapus penumpang
function hapusPenumpang(namaPenumpang, penumpang) {
  if (penumpang.length === 0) {
    alert("Tidak ada penumpang untuk dihapus.");
    return penumpang;
  } else {
    for (var i = 0; i < penumpang.length; i++) {
      if (penumpang[i] === namaPenumpang) {
        penumpang[i] = undefined;
        alert(namaPenumpang + " telah dihapus.");
        return penumpang;
      } else if (i === penumpang.length - 1) {
        alert(namaPenumpang + " tidak ditemukan di dalam angkot.");
        return penumpang;
      }
    }
  }
}

// Fungsi menghitung total penumpang
function hitungTotalPenumpang(...angkots) {
  var total = angkots.reduce((acc, penumpang) => {
    return acc + penumpang.filter((p) => p !== undefined).length;
  }, 0);
  return total;
}
