/*


  
*/

const fs = require('fs');
const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

const statusPath = './library/database/autojpmch_status.json';
const teksPath = './library/database/autojpmch_text.json';
const saluranPath = './library/database/idsaluran.json';

let teksIndex = 0; // untuk ganti teks bergiliran

async function autoJPMCH(conn) {
  try {
    if (!fs.existsSync(statusPath)) return;
    const { status } = JSON.parse(fs.readFileSync(statusPath));
    if (!status) return;

    const daftarSaluran = JSON.parse(fs.readFileSync(saluranPath));
    if (!daftarSaluran.length) return console.log("[AUTOJPMCH] Daftar channel kosong.");

    const { texts } = JSON.parse(fs.readFileSync(teksPath)); // ← multiple texts
    if (!texts || !texts.length) return console.log("[AUTOJPMCH] Teks kosong.");

    const teksSekarang = texts[teksIndex]; // ambil teks berdasarkan index
    teksIndex = (teksIndex + 1) % texts.length; // next teks (loop)

    for (const id of daftarSaluran) {
      try {
        await conn.sendMessage(id, { text: teksSekarang });
        console.log(`[AUTOJPMCH] ✅ Success  ${id}`);
        await delay(1000); // Delay antar kirim (1 detik)
      } catch (err) {
        console.error(`[AUTOJPMCH] ❌ Error ${id}: ${err.message}`);
      }
    }

  } catch (err) {
    console.error("[AUTOJPMCH] Error:", err.message);
  }
}

function startAutoJPMCH() {
  console.log("[AUTOJPMCH] Aktif. Kirim otomatis.");
  setInterval(() => {
    if (global.conn) autoJPMCH(global.conn);
  }, 900000); // 15 menit
}

module.exports = { autoJPMCH, startAutoJPMCH };
