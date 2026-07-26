# n8n Workflow

## Nodes

### 1. Webhook

Receives visitor information.

---

### 2. Basic LLM Chain

Uses OpenRouter to classify the visitor.

---

### 3. Code

Parses the JSON returned by the LLM.

---

### 4. Google Sheets

Stores qualified leads.

---

### 5. Gmail

Notifies the sales team.