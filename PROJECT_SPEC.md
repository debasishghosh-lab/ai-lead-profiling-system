# Project Specification

## Objective

Build an AI-powered lead profiling platform capable of automatically classifying website visitors based on their submitted information and browsing behavior.

---

## Functional Requirements

### Visitor Tracking

The application must track visitor interactions throughout the website.

Tracked interactions include:

- Homepage
- Sales Bots
- Organizational Development
- Pricing
- Contact

The tracking system must avoid duplicate entries.

---

### Contact Form

Collect:

- Name
- Email
- Company
- Message

Validation is required.

---

### Webhook

Send a POST request to the n8n webhook.

Payload:

```json
{
"name":"",
"email":"",
"company":"",
"query":"",
"visit_history":[]
}
```

---

### AI Classification

The LLM must classify leads into:

- Sales Bots
- Organizational Development

The model should return JSON only.

---

### Google Sheets

Store:

- Timestamp
- Name
- Email
- Company
- Query
- Visit History
- Category
- Reason

---

### Gmail

Automatically notify the sales team whenever a lead is received.