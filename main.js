var penumpang = [];
var tambahPenumpang = function (namaPenumpang, penumpang) {
  if (penumpang.length == 0) {
    penumpang.push(namaPenumpang);
    return penumpang;
  } else {
    for (var i = 0; i < penumpang.length; i++) {
      if (penumpang[i] == undefined) {
        penumpang[i] = namaPenumpang;
        return penumpang;
      }
      //   Jika sudah ada nama yang sama
      else if (penumpang[i] == namaPenumpang) {
        console.log(namaPenumpang + " nama sudah ada di dalam angkot");
        return penumpang;
      }
      //   Jika seluruh kursi terisi
      else if (i == penumpang.length - 1) {
        penumpang.push(namaPenumpang);
        return penumpang;
      }
    }
  }
};

var hapusPenumpang = function (namaPenumpang, penumpang) {
  if (penumpang.length == 0) {
    console.log("Angkot masih kosong");
    return penumpang;
  } else {
    for (var i = 0; i < penumpang.length; i++) {
      if (penumpang[i] == namaPenumpang) {
        penumpang[i] = undefined;
      } else if (i == penumpang.length - 1) {
        console.log(namaPenumpang + " penumpang tidak ada di dalam angkot");
        return penumpang;
      }
    }
  }

  return penumpang;
};
