# React + Flask Calculator

A beautiful and colorful calculator web application built with React + Vite frontend and Flask backend.

## Features

- ✨ Beautiful gradient UI with Tailwind CSS
- 🎨 Colorful and modern design
- ⚡ Fast React + Vite frontend
- 🐍 Flask backend for calculations
- 🔄 Real-time calculation updates
- 📱 Responsive design

## Project Structure

```
Calc/
├── frontend/          # React + Vite application
│   ├── src/
│   │   ├── App.jsx
│   │   └── App.css
│   └── package.json
├── backend/           # Flask application
│   ├── app.py
│   ├── requirements.txt
│   └── venv/
└── README.md
```

## Getting Started

### Prerequisites

- Node.js (for frontend)
- Python 3.8+ (for backend)
- Homebrew (for macOS - optional)

### Backend Setup

1. Navigate to the backend directory:
```bash
cd backend
```

2. Create and activate a virtual environment:
```bash
python3 -m venv venv
source venv/bin/activate
```

3. Install dependencies:
```bash
pip install -r requirements.txt
```

4. Run the Flask server:
```bash
FLASK_APP=app.py flask run
```

The backend will run at `http://127.0.0.1:5000`

### Frontend Setup

1. Navigate to the frontend directory:
```bash
cd frontend
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The frontend will run at `http://localhost:5174`

## Usage

1. Start both the backend and frontend servers (see Getting Started)
2. Open your browser to the frontend URL
3. Use the calculator by clicking buttons
4. Press `=` to calculate
5. Use `⌫` to backspace and `C` to clear

## Technologies Used

- **Frontend**: React, Vite, Tailwind CSS
- **Backend**: Flask, Flask-CORS
- **Language**: JavaScript, Python

## License

MIT
