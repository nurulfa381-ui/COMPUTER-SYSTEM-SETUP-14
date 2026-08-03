const slides = [{"title": "PENGENDALIAN PERKAKASAN TAMBAHAN KOMPUTER", "text": "Pengenalan KP14, tujuan dan hasil pembelajaran."}, {"title": "HASIL PEMBELAJARAN", "text": "Menerangkan sistem pengendalian, tagging aset, pelabelan, senarai pembungkusan, logistik dan UAT."}, {"title": "APA ITU SISTEM PENGENDALIAN?", "text": "Sekumpulan atur cara yang mengurus sumber perkakasan dan perisian secara tersusun."}, {"title": "FUNGSI SISTEM PENGENDALIAN", "text": "Mengurus pemproses, memori, storan, peranti, fail dan antara muka pengguna."}, {"title": "ANTARA MUKA PENGGUNA", "text": "Garis perintah dan antara muka pengguna grafik membantu pengguna mengendalikan komputer."}, {"title": "CONTOH SISTEM PENGENDALIAN", "text": "Microsoft Windows, Linux dan macOS."}, {"title": "PENYEDIAAN KOMPUTER UNTUK PENGGUNA", "text": "Semak konfigurasi, kemas kini, akaun pengguna, aplikasi dan peranti tambahan."}, {"title": "ALIRAN PENYERAHAN KOMPUTER", "text": "Sedia → Uji → Rekod → Label → Bungkus → Hantar → UAT."}, {"title": "PENGENALAN TAGGING ASET", "text": "Tag aset digunakan untuk memantau dan mengesan aset fizikal syarikat."}, {"title": "TUJUAN TAGGING ASET", "text": "Kawalan inventori, penyelenggaraan, tugasan peralatan dan pencegahan kehilangan."}, {"title": "MAKLUMAT PADA TAG ASET", "text": "Nombor aset, kategori, lokasi, pemilik, tarikh perolehan dan kod bar/QR."}, {"title": "ASET ALIH", "text": "Perabot dan peralatan yang boleh berpindah lokasi seperti komputer riba."}, {"title": "CONTOH ASET ALIH", "text": "Laptop, projektor, pencetak mudah alih, tablet dan UPS kecil."}, {"title": "ASET TETAP", "text": "Aset infrastruktur yang kekal di lokasi sepanjang jangka hayatnya."}, {"title": "CONTOH ASET TETAP", "text": "Bangunan, sistem lampu, jentera dipasang dan infrastruktur."}, {"title": "PERBANDINGAN ASET ALIH & TETAP", "text": "Aset alih mudah berpindah; aset tetap kekal pada lokasi."}, {"title": "PROSEDUR TAGGING ASET", "text": "Kenal pasti → Jana nombor → Cetak tag → Lekat → Rekod → Audit."}, {"title": "KESILAPAN TAGGING ASET", "text": "Tag tidak jelas, nombor berganda, lokasi salah dan rekod tidak dikemas kini."}, {"title": "PENGENALAN PELABELAN", "text": "Label ialah bahan yang dilekatkan pada produk atau bekas dan mengandungi maklumat."}, {"title": "BAHAN LABEL", "text": "Kertas, polimer, kain, logam atau bahan tahan lasak."}, {"title": "FUNGSI PELABELAN", "text": "Asal, penggunaan, jangka hayat, amaran, pelupusan dan pengenalan produk."}, {"title": "LABEL PERKAKASAN KOMPUTER", "text": "Nama peranti, nombor siri, voltan, pemilik, lokasi dan arahan keselamatan."}, {"title": "CIRI LABEL YANG BAIK", "text": "Jelas, tahan lama, mudah dibaca, tepat dan tidak menutup pengudaraan."}, {"title": "TAG ASET VS LABEL", "text": "Tag aset untuk pengesanan inventori; label untuk maklumat dan arahan produk."}, {"title": "SENARAI PEMBUNGKUSAN", "text": "Dokumen yang mengiringi pakej penghantaran dan menyenaraikan kandungan."}, {"title": "KANDUNGAN PACKING LIST", "text": "Nama item, kuantiti, nombor siri, keadaan, aksesori dan penerima."}, {"title": "KEPENTINGAN PACKING LIST", "text": "Mengesahkan semua item, mengurangkan kehilangan dan memudahkan penerimaan."}, {"title": "PROSES SEMAKAN PACKING LIST", "text": "Kira → Padankan → Periksa keadaan → Tandakan → Tandatangan."}, {"title": "PENYEDIAAN LOGISTIK", "text": "Perancangan awal tentang pemindahan, penyimpanan dan penghantaran barangan."}, {"title": "TUJUAN LOGISTIK", "text": "Mengurangkan kelewatan, kerosakan, kehilangan dan masalah penghantaran."}, {"title": "PEMBUNGKUSAN PERKAKASAN", "text": "Melindungi produk untuk simpanan, pengangkutan dan penggunaan akhir."}, {"title": "BAHAN PEMBUNGKUSAN", "text": "Kotak kukuh, beg antistatik, bubble wrap, foam dan pelekat amaran."}, {"title": "PERLINDUNGAN ESD", "text": "Komponen elektronik perlu menggunakan beg antistatik dan kaedah pengendalian selamat."}, {"title": "PENGATURAN PENGANGKUTAN", "text": "Merancang perjalanan barang dari tempat A ke tempat B."}, {"title": "CHECKLIST SEBELUM PENGHANTARAN", "text": "Label, packing list, aksesori, perlindungan, alamat dan pegawai penerima."}, {"title": "PENGENALAN UAT", "text": "Ujian Penerimaan Pengguna ialah fasa akhir sebelum sistem diserahkan."}, {"title": "SIAPA MELAKSANAKAN UAT?", "text": "Pengguna sebenar menguji sistem di lokasi penggunaan sebenar."}, {"title": "KRITERIA UAT", "text": "Fungsi memenuhi spesifikasi, mudah digunakan, stabil dan diterima pengguna."}, {"title": "ALIRAN UAT", "text": "Sedia senario → Uji → Rekod keputusan → Baiki → Uji semula → Terima."}, {"title": "RUMUSAN KP14", "text": "Tagging, pelabelan, packing list, logistik dan UAT memastikan penyerahan sistem tersusun."}];

let currentSlide = 0;
let sequence = [];
const sequenceAnswer = [
  "Kenal pasti aset atau peralatan",
  "Jana nombor atau kod aset",
  "Cetak dan lekatkan tag",
  "Rekod maklumat dalam sistem",
  "Jalankan audit dan kemas kini"
];

document.addEventListener("DOMContentLoaded", () => {
  C01K14Storage.requireProfile();
  renderSlide();
  renderMenu();
  showActivity("matching");
});

function renderSlide(){
  const item = slides[currentSlide];
  const icons = ["🖥️","🎯","⚙️","🧠","🪟","💻","🧰","🚚","🏷️","📋","🔢","💼","💻","🏢","🏗️","⚖️","🔄","⚠️","🏷️","📄","ℹ️","🖨️","✅","🔍","📦","🧾","🛡️","✔️","🚛","⏱️","📦","🫧","⚡","🚚","✅","🤝","👤","📑","🔁","🏆"];
  slideStage.innerHTML = `
    <article class="slide-card">
      <p class="eyebrow">PAPARAN ${currentSlide + 1} / 40</p>
      <h2 class="slide-title">${item.title}</h2>
      <div class="slide-grid">
        <div class="slide-content">
          <p>${item.text}</p>
          <div class="info-box">
            <strong>INFO PENTING</strong>
            <p>${getExtra(currentSlide)}</p>
          </div>
        </div>
        <div class="visual">
          <div>
            <div class="visual-icon">${icons[currentSlide]}</div>
            <strong>${item.title}</strong>
          </div>
        </div>
      </div>
    </article>`;
  slideCounter.textContent = `${currentSlide + 1} / 40`;
  progressBar.style.width = `${((currentSlide + 1) / slides.length) * 100}%`;
  prevBtn.disabled = currentSlide === 0;
  nextBtn.textContent = currentSlide === slides.length - 1 ? "SELESAI →" : "SETERUSNYA →";

  const p = C01K14Storage.requireProfile();
  p.kp14Progress = Math.max(p.kp14Progress || 0, Math.round(((currentSlide + 1)/slides.length)*100));
  C01K14Storage.saveProfile(p);
}

function getExtra(i){
  const tips = [
    "KP14 menumpukan proses menyediakan, merekod, membungkus dan menyerahkan perkakasan kepada pengguna akhir.",
    "Pelatih perlu memahami dokumen dan prosedur, bukan sekadar mengenal nama.",
    "Sistem pengendalian menyelaras sumber komputer sebagai perkhidmatan kepada pengguna dan aplikasi.",
    "Pengurusan sumber yang baik membantu sistem stabil dan mudah digunakan.",
    "GUI memudahkan pengguna melaksanakan tugas melalui ikon, menu dan tetingkap.",
    "Pemilihan sistem pengendalian bergantung kepada keperluan pengguna dan organisasi.",
    "Sebelum serahan, pastikan semua aplikasi, akaun dan peranti telah diuji.",
    "Setiap langkah perlu mempunyai bukti atau rekod.",
    "Tag aset ialah asas kawalan inventori.",
    "Rekod aset perlu sentiasa dikemas kini apabila lokasi atau pemilik berubah."
  ];
  return tips[i % tips.length];
}

function changeSlide(step){
  if(currentSlide === slides.length - 1 && step > 0){
    document.getElementById("activityPanel").scrollIntoView({behavior:"smooth"});
    return;
  }
  currentSlide = Math.max(0, Math.min(slides.length - 1, currentSlide + step));
  renderSlide();
  window.scrollTo({top:0,behavior:"smooth"});
}

function renderMenu(){
  slideMenu.innerHTML = slides.map((s,i)=>`<button onclick="goSlide(${i})">${i+1}. ${s.title}</button>`).join("");
}
function showMenu(){menuModal.classList.remove("hidden")}
function hideMenu(){menuModal.classList.add("hidden")}
function goSlide(i){currentSlide=i;hideMenu();renderSlide();window.scrollTo({top:0,behavior:"smooth"})}
function toggleProjector(){document.body.classList.toggle("projector")}
function toggleFullscreen(){if(!document.fullscreenElement)document.documentElement.requestFullscreen?.();else document.exitFullscreen?.()}
function speakCurrent(){
  if(!("speechSynthesis" in window)) return alert("Audio tidak disokong.");
  speechSynthesis.cancel();
  const u = new SpeechSynthesisUtterance(slides[currentSlide].title + ". " + slides[currentSlide].text);
  u.lang="ms-MY";u.rate=.88;speechSynthesis.speak(u);
}

function shuffle(a){const b=[...a];for(let i=b.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[b[i],b[j]]=[b[j],b[i]]}return b}

function showActivity(type){
  if(type==="matching") renderMatching();
  if(type==="sequence") renderSequence();
  if(type==="packing") renderPacking();
  if(type==="uat") renderUAT();
}

function renderMatching(){
  const items = [
    ["Tagging aset","Memantau dan mengesan aset fizikal syarikat"],
    ["Aset alih","Peralatan yang boleh berubah tangan atau lokasi"],
    ["Aset tetap","Harta fizikal yang kekal pada lokasi"],
    ["Pelabelan","Maklumat yang dilekatkan pada produk atau bekas"],
    ["Senarai pembungkusan","Dokumen yang menyenaraikan kandungan pakej"]
  ];
  const opts = shuffle(items.map(x=>x[1]));
  activityContent.innerHTML=`<div class="activity-card"><h3>PADANKAN ISTILAH</h3>
  ${shuffle(items).map((x,i)=>`<div class="match-row" data-answer="${x[1]}"><strong>${x[0]}</strong><select><option value="">Pilih jawapan</option>${shuffle(opts).map(o=>`<option>${o}</option>`).join("")}</select></div>`).join("")}
  <button onclick="checkMatching()">SEMAK PADANAN</button><div id="matchResult" class="result"></div></div>`;
}
function checkMatching(){
  const rows=[...document.querySelectorAll(".match-row")];
  const score=rows.filter(r=>r.querySelector("select").value===r.dataset.answer).length;
  matchResult.textContent=score===rows.length?"✅ Semua padanan betul.":"❌ "+score+" daripada "+rows.length+" padanan betul.";
}

function renderSequence(){
  sequence=shuffle(sequenceAnswer);
  if(sequence.every((x,i)=>x===sequenceAnswer[i])) sequence=shuffle(sequenceAnswer);
  drawSequence();
}
function drawSequence(){
  activityContent.innerHTML=`<div class="activity-card"><h3>SUSUN LANGKAH TAGGING ASET</h3><div class="sequence-list">
  ${sequence.map((x,i)=>`<div class="sequence-item"><span>${x}</span><div><button onclick="move(${i},-1)">▲</button><button onclick="move(${i},1)">▼</button></div></div>`).join("")}
  </div><button onclick="checkSequence()">SEMAK URUTAN</button><div id="sequenceResult" class="result"></div></div>`;
}
function move(i,d){const n=i+d;if(n<0||n>=sequence.length)return;[sequence[i],sequence[n]]=[sequence[n],sequence[i]];drawSequence()}
function checkSequence(){
  const ok=sequence.every((x,i)=>x===sequenceAnswer[i]);
  sequenceResult.textContent=ok?"✅ Urutan tepat.":"❌ Urutan belum tepat. Mulakan dengan mengenal pasti aset.";
}

function renderPacking(){
  const items = shuffle(["Komputer riba","Pengecas","Tetikus","Beg komputer","Kad waranti"]);
  activityContent.innerHTML=`<div class="activity-card"><h3>SIMULASI SENARAI PEMBUNGKUSAN</h3>
  <p>Pilih semua item yang perlu direkodkan sebelum penghantaran.</p>
  ${items.map(x=>`<label class="packing-row"><span>${x}</span><input type="checkbox" data-item="${x}"></label>`).join("")}
  <button onclick="checkPacking()">SAHKAN PACKING LIST</button><div id="packingResult" class="result"></div></div>`;
}
function checkPacking(){
  const checked=[...document.querySelectorAll("[data-item]:checked")];
  packingResult.textContent=checked.length===5?"✅ Senarai pembungkusan lengkap.":"❌ Masih ada item belum direkodkan.";
}

function renderUAT(){
  const checks=shuffle(["Komputer boleh boot","Aplikasi utama boleh dibuka","Pencetak boleh digunakan","Sambungan rangkaian berfungsi","Pengguna menerima sistem"]);
  activityContent.innerHTML=`<div class="activity-card"><h3>SIMULASI UAT</h3>
  <p>Tandakan semua kriteria yang telah disahkan pengguna.</p>
  ${checks.map(x=>`<label class="uat-row"><span>${x}</span><input type="checkbox" class="uat-check"></label>`).join("")}
  <button onclick="checkUAT()">SAHKAN UAT</button><div id="uatResult" class="result"></div></div>`;
}
function checkUAT(){
  const all=[...document.querySelectorAll(".uat-check")].every(x=>x.checked);
  uatResult.textContent=all?"✅ UAT lengkap. Sistem boleh diserahkan kepada pengguna.":"❌ Lengkapkan semua kriteria sebelum penerimaan.";
  if(all){
    const p=C01K14Storage.requireProfile();
    if(!p.badges.includes("uat-ready")){p.badges.push("uat-ready");p.xp+=50;p.coins+=10}
    p.kp14Progress=100;C01K14Storage.saveProfile(p);
  }
}