# whatsAppBot

## Endpoints:

### Endpoint to receive messages from users

```http
POST /webhook
```

Rquest Body :

```javascript
  {
     "Body": "200 liters",
     "From": "whatsapp:+91977654****"
  }
```

Response :

```javascript
  {
         "msg": "message recieved"
  }
```
