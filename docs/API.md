# AutoHub Solutions API Documentation

## Base URL
```
https://api.autohub.in/v1
```

---

## Authentication

All API requests require authentication via Bearer token.

```http
Authorization: Bearer <your-token>
```

---

## Endpoints

### Contact Messages

#### Submit Contact Form
```http
POST /api/contact
Content-Type: application/json

{
  "name": "John Doe",
  "email": "john@company.com",
  "phone": "+91-XXXXX-XXXXX",
  "company": "Company Name",
  "service": "WhatsApp Automation",
  "message": "I'm interested in your services..."
}
```

**Response:**
```json
{
  "success": true,
  "message": "Message sent successfully!",
  "data": {
    "id": "clqxxxxxxx"
  }
}
```

#### Get Messages (Admin)
```http
GET /api/contact?page=1&limit=20&status=NEW
```

**Response:**
```json
{
  "success": true,
  "data": {
    "messages": [...],
    "pagination": {
      "page": 1,
      "limit": 20,
      "total": 100,
      "totalPages": 5
    }
  }
}
```

---

### Authentication

#### Login
```http
POST /api/auth/login
Content-Type: application/json

{
  "email": "admin@autohub.in",
  "password": "your-password"
}
```

**Response:**
```json
{
  "success": true,
  "message": "Login successful",
  "data": {
    "user": {
      "id": "clqxxxxxxx",
      "email": "admin@autohub.in",
      "name": "Admin User",
      "role": "ADMIN"
    },
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
  }
}
```

---

### Leads

#### Create Lead
```http
POST /api/leads
Content-Type: application/json

{
  "email": "lead@company.com",
  "name": "Lead Name",
  "phone": "+91-XXXXX-XXXXX",
  "company": "Company Name",
  "serviceId": "clqxxxxxxx",
  "planId": "clqxxxxxxx",
  "source": "website"
}
```

**Response:**
```json
{
  "success": true,
  "message": "Lead created successfully",
  "data": {
    "id": "clqxxxxxxx",
    "userId": "clqxxxxxxx"
  }
}
```

#### Get Leads (Admin)
```http
GET /api/leads?page=1&limit=20&status=NEW
```

**Response:**
```json
{
  "success": true,
  "data": {
    "leads": [...],
    "pagination": {
      "page": 1,
      "limit": 20,
      "total": 50,
      "totalPages": 3
    }
  }
}
```

---

## Error Responses

```json
{
  "success": false,
  "message": "Error message here",
  "errors": [
    {
      "code": "INVALID_EMAIL",
      "message": "Please enter a valid email address"
    }
  ]
}
```

### Common Error Codes
| Code | Description |
|------|-------------|
| `UNAUTHORIZED` | Invalid or missing authentication token |
| `FORBIDDEN` | Insufficient permissions |
| `NOT_FOUND` | Resource not found |
| `VALIDATION_ERROR` | Invalid input data |
| `INTERNAL_ERROR` | Server error |

---

## Rate Limiting

- 100 requests per minute for authenticated endpoints
- 20 requests per minute for public endpoints

---

## Webhooks

AutoHub can send webhook notifications for:

- New contact form submissions
- Lead status changes
- Message received

**Webhook Payload:**
```json
{
  "event": "contact.created",
  "timestamp": "2024-01-15T10:30:00Z",
  "data": {
    "id": "clqxxxxxxx",
    "name": "John Doe",
    "email": "john@company.com"
  }
}
```

---

## SDKs

### JavaScript/TypeScript
```bash
npm install @autohub/sdk
```

```javascript
import { AutoHub } from '@autohub/sdk';

const client = new AutoHub({ apiKey: 'your-api-key' });

// Send a message
await client.messages.send({
  to: '+91XXXXXXXXXX',
  template: 'welcome'
});
```

### Python (Coming Soon)
```bash
pip install autohub
```

---

## Support

- Email: api-support@autohub.in
- Documentation: docs.autohub.in
