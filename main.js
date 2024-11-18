var angkot1 = [];
var angkot2 = [];
var angkot3 = [];

// Fungsi menambah penumpang
var tambahPenumpang = function (namaPenumpang, penumpang) {
  if (penumpang.length == 0) {
    penumpang.push(namaPenumpang);
    alert(namaPenumpang + " telah ditambahkan sebagai penumpang pertama.");
    return penumpang;
  } else {
    for (var i = 0; i < penumpang.length; i++) {
      if (penumpang[i] == undefined) {
        penumpang[i] = namaPenumpang;
        alert(namaPenumpang + " telah ditambahkan ke kursi kosong.");
        return penumpang;
      } else if (penumpang[i] == namaPenumpang) {
        alert(namaPenumpang + " sudah ada di dalam kendaraan.");
        return penumpang;
      } else if (i == penumpang.length - 1) {
        penumpang.push(namaPenumpang);
        alert(namaPenumpang + " telah ditambahkan ke kursi baru.");
        return penumpang;
      }
    }
  }
};

// Fungsi menghapus penumpang
var hapusPenumpang = function (namaPenumpang, penumpang) {
  if (penumpang.length == 0) {
    alert("Tidak ada penumpang untuk dihapus.");
    return penumpang;
  } else {
    for (var i = 0; i < penumpang.length; i++) {
      if (penumpang[i] == namaPenumpang) {
        penumpang[i] = undefined;
        alert(namaPenumpang + " telah dihapus.");
        return penumpang;
      } else if (i == penumpang.length - 1) {
        alert(namaPenumpang + " tidak ditemukan di dalam angkot.");
        return penumpang;
      }
    }
  }
};

// Fungsi menampilkan penumpang di angkot tertentu
var tampilkanPenumpang = function (penumpang, angkotNumber) {
  if (penumpang.length == 0) {
    alert("Tidak ada penumpang di angkot " + angkotNumber + ".");
  } else {
    var daftarPenumpang = penumpang
      .map((penumpang, index) => `${index + 1}. ${penumpang || "Kosong"}`)
      .join("\n");
    alert("Daftar penumpang angkot " + angkotNumber + ":\n" + daftarPenumpang);
  }
};

// Fungsi menghitung total penumpang dari semua angkot
var hitungTotalPenumpang = function (...angkots) {
  var total = angkots.reduce((acc, penumpang) => {
    return acc + penumpang.filter((p) => p !== undefined).length;
  }, 0);
  return total;
};

// Program utama
while (true) {
  var action = prompt(
    "Masukkan aksi: \n1. Tambah Penumpang\n2. Hapus Penumpang\n3. Tampilkan Penumpang\n4. Hitung Total Penumpang\n5. Keluar"
  ).toLowerCase();

  if (action === "5") {
    alert("Terima kasih!");
    break;
  } else if (action === "1") {
    var nama = prompt("Masukkan nama penumpang:");
    var angkot = prompt("Pilih angkot (1, 2, 3):");
    if (nama && angkot) {
      if (angkot === "1") tambahPenumpang(nama, angkot1);
      else if (angkot === "2") tambahPenumpang(nama, angkot2);
      else if (angkot === "3") tambahPenumpang(nama, angkot3);
      else alert("Pilihan angkot tidak valid.");
    } else {
      alert("Nama atau angkot tidak boleh kosong!");
    }
  } else if (action === "2") {
    var nama = prompt("Masukkan nama penumpang yang akan dihapus:");
    var angkot = prompt("Pilih angkot (1, 2, 3):");
    if (nama && angkot) {
      if (angkot === "1") hapusPenumpang(nama, angkot1);
      else if (angkot === "2") hapusPenumpang(nama, angkot2);
      else if (angkot === "3") hapusPenumpang(nama, angkot3);
      else alert("Pilihan angkot tidak valid.");
    } else {
      alert("Nama atau angkot tidak boleh kosong!");
    }
  } else if (action === "3") {
    var angkot = prompt("Pilih angkot untuk ditampilkan (1, 2, 3):");
    if (angkot === "1") tampilkanPenumpang(angkot1, 1);
    else if (angkot === "2") tampilkanPenumpang(angkot2, 2);
    else if (angkot === "3") tampilkanPenumpang(angkot3, 3);
    else alert("Pilihan angkot tidak valid.");
  } else if (action === "4") {
    var total = hitungTotalPenumpang(angkot1, angkot2, angkot3);
    alert("Total penumpang di semua angkot: " + total);
  } else {
    alert("Masukkan aksi yang benar!");
  }
}
