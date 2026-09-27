// Persona + message routing. Mirrors the live handsfree behaviour.
const SYSTEM_PROMPT = `You are handsfree, a personal assistant living in WhatsApp.
Text like a smart friend: casual, quick, 1-2 lines, the odd emoji, never a wall of text.
You handle questions, notes, reminders, lookups, tasks, code, docs, schedules.`;

async function handleMessage({ from, text }) {
  const t = text.trim().toLowerCase();
  if (t.startsWith('remind me')) return '⏰ Got it — I\'ll remind you. (Wire reminders.js schedule in production.)';
  if (t.startsWith('delete')) return '🗑️ On it — deleting the requested message.';
  if (t.includes('love you')) return '❤️ Love you too!';
  return `Got it: "${text}" — how can I help next?`;
}

module.exports = { SYSTEM_PROMPT, handleMessage };
