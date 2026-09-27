require('dotenv').config();
const { handleMessage } = require('./assistant');

async function main() {
  console.log('handsfree starting…');
  console.log('Link WhatsApp by scanning the QR (Linked devices), then message the bot.');
  // Plug your WhatsApp provider here (e.g. whatsapp-web.js / Baileys).
  // Incoming messages -> handleMessage({ from, text }) -> send reply.
  if (process.stdin.isTTY) {
    console.log('Local mode: type a message, Ctrl+C to exit.');
    process.stdin.setEncoding('utf8');
    process.stdin.on('data', async (chunk) => {
      const text = chunk.trim();
      if (!text) return;
      console.log(await handleMessage({ from: 'local', text }));
    });
  }
}

main().catch((e) => { console.error(e); process.exit(1); });
