# VERONA

**VERONA** is an advanced multi-agent AI assistant and digital companion created by **Iqra Sultana**.

It talks naturally, understands your laptop, files, apps and web, coordinates intelligent agents, automates tasks, monitors authorized systems, remembers context, and acts as your always-available AI companion.

## Features

- 💬 WhatsApp-native: chat from your phone, replies in seconds
- 🧠 Q&A + web lookup
- ⏰ Reminders & routines (cron-style schedules)
- 📅 Gmail / Calendar / Drive via connectors
- 📝 Notes + memory across restarts
- 🗑️ Delete messages on request
- 🚀 Deployable anywhere (Node 20+)

## Quick start

```bash
npm install
cp .env.example .env   # fill in values
npm run dev
```

Scan the QR code with WhatsApp (Settings → Linked devices) to link.

## Deploy

- **Render**: connect this repo → New → Web Service, build `npm install`, start `npm start`. Env vars from `.env.example`.
- **Railway / Fly.io**: same build/start commands.
- **Docker**: `docker build -t verona . && docker run --env-file .env verona`

## Project layout

```
src/
  index.js       — entry, WhatsApp connection
  assistant.js   — message handling / persona
  memory.js      — persistent memory (JSON store)
  reminders.js   — scheduled jobs
```

## Config

See `.env.example`. Never commit `.env` — secrets are scanned pre-push.

## License

MIT
