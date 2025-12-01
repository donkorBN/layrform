# LAYR Forms — Voice-Powered Form Engine
`forms.trylayr.com`

LAYR Forms is a voice-native form experience.  
Users fill forms by speaking, and creators build forms using their voice.  
It’s fast, human, friendly, and removes 95% of the friction of traditional forms.

## 📋 Table of Contents
- [Core Features](#-core-features)
- [Architecture Overview](#-architecture-overview)
- [Project Structure](#-project-structure-suggested)
- [How It Works](#-how-it-works-technical-flow)
- [Database Schema](#-database-schema-simplified)
- [Local Development](#-local-development)
- [MVP Checklist](#-mvp-checklist)
- [Contributions](#-contributions)
- [License](#-license)
- [Contact](#️-contact)

---

## 🌟 Core Features
- 🎤 **Voice-powered form filling** — real-time transcript → structured fields.
- 🗣️ **Voice-powered form creation** — describe your form and it auto-creates.
- 🔀 **Dynamic logic & branching** — route users based on answers.
- ⚡ **Real-time UI updates** — partial transcripts update fields instantly.
- 🧩 **Review & edit** — per-field, text, or full JSON editor.
- 📤 **Webhooks & integrations** — deliver submissions anywhere.
- ✨ **Embeddable** — put forms on any website with one script.

---

## 🧱 Architecture Overview
Frontend (React, Vite, Tailwind)
↕ (WebSocket / WebRTC Audio Stream)
Realtime Gateway (Node)
↕
ASR Service (Streaming Speech-to-Text)
↕
Parsing Service (LLM with schema-based JSON extraction)
↕
Logic Engine (schema + rules evaluator)
↕
Database (Postgres + Redis cache)

### Key Concepts
- **Form Schema**: defines fields, steps, and logic.
- **Session**: user’s in-progress state (partial answers).
- **Submission**: final validated dataset.
- **LLM Parsing**: converts transcript chunks → JSON patches.
- **Logic Engine**: chooses the next question dynamically.

---

## 📂 Project Structure (suggested)
```text
/app
  /frontend
    /components
    /hooks
    /utils
    /styles
    /views
  /backend
    /src
      /api
      /services
      /asr
      /llm
      /logic
      /db
      /ws
  /tests
  /docs
    rules.md
    readme.md
```

---

## 🚀 How It Works (Technical Flow)

### 1. User Speaks
Frontend streams audio → backend via WebSocket.

### 2. ASR Converts to Text
ASR returns partial + final transcripts.

### 3. LLM Converts Text → Structured Data
Backend sends transcript + schema → LLM.  
LLM returns a strict JSON object or diff.

### 4. Logic Engine Determines Next Step
Rules like:
`if service_type = "Photography" → show photography_details`

### 5. UI Updates in Real Time
Field values animate into place.

### 6. User Reviews & Edits
Manual edits overwrite voice-extracted values.

### 7. User Submits
Backend validates → stores → triggers webhook.

---

## 💾 Database Schema (simplified)

### forms
```sql
id, owner_id, title, schema_json, logic_json, ui_json, created_at
```

### sessions
```sql
id, form_id, status, current_step, partial_answers_json, updated_at
```

### submissions
```sql
id, form_id, session_id, answers_json, created_at
```

---

## 🧪 Local Development

### 1. Install dependencies
```bash
npm install
```

### 2. Run the backend
```bash
npm run dev:server
```

### 3. Run the frontend
```bash
npm run dev
```

### 4. Environment variables
```bash
DATABASE_URL=
REDIS_URL=
OPENAI_API_KEY=
ASR_PROVIDER_KEY=
```

---

## 📌 MVP Checklist
- [ ] Audio capture + stream
- [ ] Streaming transcription (partial + final)
- [ ] LLM field extraction (JSON schema)
- [ ] Basic logic engine
- [ ] Form renderer + real-time updates
- [ ] Review screen
- [ ] Final submission endpoint
- [ ] Embed script
- [ ] One sample form demo

---

## 🤝 Contributions
Open to PRs as long as they follow `rules.md`.

## 📄 License
MIT.

## ✉️ Contact
Email: team@layr.com (example)
Website: https://forms.trylayr.com