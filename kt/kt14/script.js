const matchingItems = [
  {term:"Tagging aset",answer:"Digunakan untuk memantau dan mengesan aset fizikal syarikat."},
  {term:"Senarai pembungkusan",answer:"Dokumen yang mengiringi pakej penghantaran."},
  {term:"Pelabelan",answer:"Bahan yang dilekatkan pada produk dan mengandungi maklumat."},
  {term:"Aset tetap",answer:"Aset infrastruktur atau harta fizikal yang kekal pada lokasi."},
  {term:"Aset alih",answer:"Perabot dan peralatan yang bukan sebahagian daripada bangunan."}
];

function shuffle(a){const b=[...a];for(let i=b.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[b[i],b[j]]=[b[j],b[i]]}return b}

document.addEventListener("DOMContentLoaded",()=>{
  const p=C01K14Storage.requireProfile();
  candidateName.textContent=p.name;
  candidateId.textContent=p.id;
  attemptDisplay.textContent=(p.attempts?.[14]||0)+1;
  renderMatching();
  if(p.officialMarks?.[14]?.locked) showOfficial(p.officialMarks[14]);
  else if(p.pendingAssessments?.[14]) showPending(p.pendingAssessments[14]);
});

function renderMatching(){
  const options=matchingItems.map(x=>x.answer);
  matchingContainer.innerHTML=shuffle(matchingItems).map((x,i)=>`
    <div class="match-row" data-answer="${encodeURIComponent(x.answer)}">
      <strong>${i+1}. ${x.term}</strong>
      <select>
        <option value="">Pilih padanan</option>
        ${shuffle(options).map(o=>`<option value="${encodeURIComponent(o)}">${o}</option>`).join("")}
      </select>
    </div>`).join("");
}

function keywordScore(text,groups,max){
  const t=text.toLowerCase();
  let hits=0;
  groups.forEach(g=>{if(g.some(k=>t.includes(k)))hits++});
  return Math.min(max,hits);
}

function scoreSectionA(){
  const s1=keywordScore(a1.value,[["perancangan","susunan"],["pindah","penghantaran","simpan"]],2);
  const s2=keywordScore(a2.value,[["ujian penerimaan pengguna","uat"],["pengguna sebenar"],["fasa terakhir","akhir"],["spesifikasi","tugas sebenar","dunia sebenar"]],4);
  const s3=keywordScore(a3.value,[["memantau","mengesan"],["aset fizikal","inventori"],["penyelenggaraan","pembaikan"],["kehilangan","lokasi","tugasan"]],4);
  return s1+s2+s3;
}

function scoreSectionB(){
  return [...document.querySelectorAll(".match-row")].filter(r=>r.querySelector("select").value===r.dataset.answer).length*2;
}

function complete(){
  return a1.value.trim() && a2.value.trim() && a3.value.trim() &&
    [...document.querySelectorAll(".match-row select")].every(x=>x.value);
}

function submitKT14(){
  const p=C01K14Storage.requireProfile();
  if(p.officialMarks?.[14]?.locked) return alert("Markah rasmi telah dikunci.");
  if(p.pendingAssessments?.[14]) return showPending(p.pendingAssessments[14]);
  if(!complete()) return alert("Sila jawab semua soalan dan lengkapkan semua padanan.");

  const A=scoreSectionA();
  const B=scoreSectionB();
  const total=A+B;
  const percentage=Math.round((total/20)*100);
  const passed=percentage>=60;

  p.scores=p.scores||{};
  p.attempts=p.attempts||{};
  p.pendingAssessments=p.pendingAssessments||{};
  p.scores[14]=percentage;
  p.attempts[14]=(p.attempts[14]||0)+1;

  const record={score:percentage,sectionA:A,sectionB:B,total,passed,attempt:p.attempts[14],submittedAt:new Date().toISOString()};
  if(passed){
    record.status="MENUNGGU_PENGESAHAN";
    p.pendingAssessments[14]=record;
  }
  C01K14Storage.saveProfile(p);
  attemptDisplay.textContent=p.attempts[14]+1;
  passed?showPending(record):showFail(record);
}

function showPending(r){
  statusDisplay.textContent="MENUNGGU PENGESAHAN";
  resultPanel.innerHTML=`<div class="result pass"><h2>Markah Sementara: ${r.score}%</h2>
  <p>Bahagian A: ${r.sectionA}/10</p><p>Bahagian B: ${r.sectionB}/10</p>
  <h3>⏳ MENUNGGU PENGESAHAN PEGAWAI PENILAI</h3></div>`;
}
function showFail(r){
  statusDisplay.textContent="BELUM TERAMPIL";
  resultPanel.innerHTML=`<div class="result fail"><h2>Markah: ${r.score}%</h2>
  <p>Bahagian A: ${r.sectionA}/10</p><p>Bahagian B: ${r.sectionB}/10</p>
  <h3>❌ BELUM TERAMPIL</h3><p>Ulang kaji KP14 dan cuba semula.</p></div>`;
}
function showOfficial(r){
  statusDisplay.textContent="TERAMPIL";
  submitBtn.disabled=true;submitBtn.textContent="MARKAH RASMI DIKUNCI";
  resultPanel.innerHTML=`<div class="result official"><h2>Markah Rasmi: ${r.score}%</h2><h3>✅ TERAMPIL</h3></div>`;
}