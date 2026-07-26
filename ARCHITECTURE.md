# System Architecture

```text
                  Visitor

                     │

                     ▼

          React Frontend (Vite)

                     │

                     ▼

      Contact Form + Visit History

                     │

                     ▼

          POST /lead-profile

                     │

                     ▼

              n8n Webhook

                     │

                     ▼

          Basic LLM Chain

          (OpenRouter)

                     │

                     ▼

               Code Node

         Parse AI Response

                     │

        ┌────────────┴─────────────┐

        ▼                          ▼

Google Sheets                 Gmail

 Store Lead              Notify Sales Team
```