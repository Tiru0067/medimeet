# MediMeet Server (Backend)

A simple Express.js backend serving static doctor data via a REST API.

## 🛠️ Tools & Libraries Used

**Backend (server):**

- Node.js
- Express.js
- CORS

## 🚀 Getting Started

```bash
npm install
npm start
```

The server will start at:  
**http://localhost:3000**

## 📡 API Endpoint

| Method | Endpoint       | Description               |
| ------ | -------------- | ------------------------- |
| GET    | `/api/doctors` | Fetch list of all doctors |

## 📈 Improvements with More Time

- Add POST endpoint to handle appointment bookings
- Integrate with a database (e.g., MongoDB)
- Add proper validation & error handling
- Use environment variables for config (e.g., `dotenv`)

## 🧠 Challenges Faced & Solutions

- Setting up a mock API with static data → **Used Express.js to serve JSON without needing a database**
- Fetching backend data into the frontend smoothly → **Used Axios to call Express endpoints from React**
- Handling missing or invalid doctor info → **Rendered a fallback `NotFound` component with a helpful message**
- Finding realistic doctor profile images → **Tried various sources and settled on decent ones after some effort**
- Designing pages without using a CSS framework → **Used plain CSS with media queries for responsiveness**
