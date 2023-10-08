// If-else
var Umur = 30;
var Kategori;

if (Umur >= 17) {
    Kategori = "Dewasa";
} else {
    Kategori = "Anak-anak";
}

// Nested if
var Nilai = "C";
var DescNilai;

if (Nilai === "A") {
    DescNilai = "Sangat Memuaskan";
} else if (Nilai === "B") {
    DescNilai = "Memuaskan";
} else {
    DescNilai = "Belajar lebih rajin dan sungguh-sungguh";
}

// Switch-case
var Hari = 7;
var NamaHari;

switch (Hari) {
    case 1:
        NamaHari = "Minggu";
        break;
    case 2:
        NamaHari = "Senin";
        break;
    case 3:
        NamaHari = "Selasa";
        break;
    case 4:
        NamaHari = "Rabu";
        break;
    case 5:
        NamaHari = "Kamis";
        break;
    case 6:
        NamaHari = "Jumat";
        break;
    case 7:
        NamaHari = "Sabtu";
        break;
    default:
        NamaHari = "Hari tidak valid";
}

// Contoh Penggunaan for statement
var Pengulangan = [];
for (var i = 1; i <= 3; i++) {
    Pengulangan.push("Pengulangan ke-" + i);
}

// Contoh Penggunaan while
var HasilWhileLoop = [];
var count = 0;
while (count < 5) {
    HasilWhileLoop.push("While loop urutan-" + count);
    count++;
}

// Contoh Penggunaan do-while
var HasilDoWhileLoop = [];
var x = 5;
do {
    HasilDoWhileLoop.push("Do-while loop urutan-" + x);
    x--;
} while (x > 0);

// Contoh Penggunaan Function
function tambah(angka1, angka2) {
    var hasil = angka1 + angka2;
    return hasil;
}
var hasilTambah = tambah(5, 3);

// Menampilkan hasil di halaman web
var outputElement = document.getElementById("output");
outputElement.innerHTML = `
    <p>Usia Anda adalah ${Umur} tahun dan termasuk dalam kategori ${Kategori}.</p>
    <p>Nilai Anda ${Nilai}, Anda ${DescNilai}.</p>
    <p>Hari ini adalah hari ${NamaHari}.</p>
    <p>${Pengulangan.join("<br>")}</p>
    <p>${HasilWhileLoop.join("<br>")}</p>
    <p>${HasilDoWhileLoop.join("<br>")}</p>
    <p>Hasil penjumlahan adalah ${hasilTambah}</p>
`;