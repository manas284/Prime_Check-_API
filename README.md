# 🧪 Prime Check API (Node.js + Express)

A simple REST API built using Node.js and Express that checks whether a given number is a **prime number** or not.

---

## 🚀 Features

- Prime number detection
- Input validation with error handling
- Lightweight and minimal setup

---

## 📦 Tech Stack

- Node.js
- Express.js

---

## 📁 Project Structure

```
prime-check-api/
├── index.js         # Main server file
├── package.json     # Project metadata and dependencies
├── README.md        # Project documentation
```

---

## 🛠️ Setup Instructions

### 1. Clone or Create Project

```bash
git clone https://github.com/yourusername/prime-check-api.git
cd prime-check-api
```

Or manually create the folder and files.

### 2. Install Dependencies

```bash
npm install
```

### 3. Run the Server

```bash
node index.js
```

Server runs at: `http://localhost:3000`

---

## 📡 API Usage

### Endpoint: `GET /api/isPrime?number=<value>`

**Query Parameter:**
- `number`: The integer to check (required)

---

## ✅ Example Requests

### Prime Number
```bash
curl "http://localhost:3000/api/isPrime?number=17"
```
**Response:**
```json
{ "number": 17, "isPrime": true }
```

---

### Non-prime Number
```bash
curl "http://localhost:3000/api/isPrime?number=10"
```
**Response:**
```json
{ "number": 10, "isPrime": false }
```

---

### Invalid Input
```bash
curl "http://localhost:3000/api/isPrime?number=abc"
```
**Response:**
```json
{ "error": "Invalid input: Please provide a number." }
```

---

## 🧠 How It Works

- Parses the `number` query parameter
- Validates if input is numeric
- Uses trial division up to √n to check primality
- Returns result as JSON

---

## ❗ Error Handling

- Returns `400 Bad Request` for invalid inputs
- Returns `200 OK` with result for valid inputs

---

## 🙋 Author

Created by Manas Tiwari 
LinkedIn: [https://linkedin.com/in/yourusername]([https://linkedin.com/in/yourusername](https://www.linkedin.com/in/contactmanas/))

> ⭐ If you find this useful, consider starring the repo!
