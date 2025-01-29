const khodamNames = ["macam terbang", "lumba-lumba darat", "harimau malaya", "Setan Merah", "Kodok Zumba", "el klemer", "el nunduk", "wak haji", "Kanjeng Powerbank", "mbah gaming", "bocil kematian", "Nyai Charger Ilang", "Ki Signal Lemot"];

const attributes = [
  "Ahli Scroll Tanpa Henti",
  "Penguasa WiFi Tetangga",
  "Pembawa Quota Unlimited",
  "Pengusir Iklan YouTube",
  "Pemberi Like Otomatis",
  "Penghapus History Browser",
  "Pembawa Diskon Online Shop",
  "Pengusir Bug Software",
  "Pemberi Sinyal 5G",
  "Penguasa Filter Instagram",
  "Pengendali Algoritma",
  "Pemberi Cashback Maksimal",
  "Pengusir Error 404",
  "Pembawa Flash Sale",
  "Pengendali Blue Screen",
  "Penguasa Copy Paste",
];

function getRandomItems(array, count) {
  const shuffled = array.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
}

function checkKhodam() {
  const nameInput = document.getElementById("nameInput").value.trim();
  const resultDiv = document.getElementById("result");

  if (!nameInput) {
    alert("Silakan masukkan nama terlebih dahulu!");
    return;
  }

  resultDiv.innerHTML = "Mencari khodam...";
  resultDiv.classList.add("loading");

  // Simulasi proses pencarian dengan delay
  setTimeout(() => {
    const khodamCount = Math.floor(Math.random() * 3) + 1; // 1-3 khodam
    const selectedKhodams = getRandomItems(khodamNames, khodamCount);
    const selectedAttributes = getRandomItems(attributes, khodamCount);

    let result = `<strong>Hasil Pencarian Khodam untuk ${nameInput}:</strong><br><br>`;

    selectedKhodams.forEach((khodam, index) => {
      result += `${index + 1}. ${khodam}<br>`;
      result += `   Atribut: ${selectedAttributes[index]}<br><br>`;
    });

    resultDiv.innerHTML = result;
    resultDiv.classList.remove("loading");
  }, 2000);
}
