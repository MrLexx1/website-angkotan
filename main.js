var angkot1 = [];
var angkot2 = [];
var angkot3 = [];

const tarif = 5000;

// Menambahkan penumpang
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

  document.getElementById("nama").value = "";
});

// Menghapus penumpang
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

  document.getElementById("nama").value = "";
});

// Menampilkan penumpang
document.getElementById("tampilkanBtn").addEventListener("click", function () {
  var angkot = document.getElementById("angkot").value;

  if (angkot === "1") {
    tampilkanPenumpang(angkot1, 1);
  } else if (angkot === "2") {
    tampilkanPenumpang(angkot2, 2);
  } else if (angkot === "3") {
    tampilkanPenumpang(angkot3, 3);
  }
});

// Menghitung total penumpang
document.getElementById("hitungBtn").addEventListener("click", function () {
  var total = hitungTotalPenumpang(angkot1, angkot2, angkot3);
  document.getElementById("output").innerHTML =
    "Total penumpang: " + total + "<br>Total tarif: Rp " + total * tarif;
});

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

// Fungsi menampilkan penumpang
function tampilkanPenumpang(penumpang, angkotNumber) {
  if (penumpang.length === 0) {
    alert("Tidak ada penumpang di angkot " + angkotNumber + ".");
  } else {
    var daftarPenumpang = penumpang
      .map((penumpang, index) => `${index + 1}. ${penumpang || "Kosong"}`)
      .join("\n");
    alert("Daftar penumpang angkot " + angkotNumber + ":\n" + daftarPenumpang);
  }
}

// Fungsi menghitung total penumpang
function hitungTotalPenumpang(...angkots) {
  var total = angkots.reduce((acc, penumpang) => {
    return acc + penumpang.filter((p) => p !== undefined).length;
  }, 0);
  return total;
}
