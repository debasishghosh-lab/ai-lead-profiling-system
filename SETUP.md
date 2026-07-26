# Setup

## Frontend

```bash
npm install

npm run dev
```

---

## Environment

Create

```
.env
```

```env
VITE_N8N_WEBHOOK_URL=http://localhost:5678/webhook/lead-profile
```

---

## n8n

Start Docker

```bash
docker start n8n
```

or

```bash
docker start -ai n8n
```

---

## Run Workflow

1. Start n8n
2. Start frontend
3. Submit contact form
4. Verify Google Sheets
5. Verify Gmail