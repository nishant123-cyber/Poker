# Setup Guide

## Prerequisites

- Node.js 18+
- npm 9+
- Docker & Docker Compose (optional)
- PostgreSQL 14+ (if running locally)

## Local Development Setup

### 1. Clone the Repository

\`\`\`bash
git clone https://github.com/nishant123-cyber/poker.git
cd poker
\`\`\`

### 2. Install Dependencies

\`\`\`bash
npm install
cd backend && npm install
cd ../frontend && npm install
cd ..
\`\`\`

### 3. Setup Environment Variables

\`\`\`bash
cp .env.example .env
cp backend/.env.example backend/.env
\`\`\`

### 4. Start Development Servers

#### Option A: Using Docker Compose

\`\`\`bash
docker-compose up
\`\`\`

#### Option B: Manual Start

\`\`\`bash
# Terminal 1 - Backend
cd backend
npm run dev

# Terminal 2 - Frontend
cd frontend
npm run dev
\`\`\`

## Development Commands

### Backend

\`\`\`bash
cd backend
npm run dev              # Start dev server
npm run build            # Build TypeScript
npm run db:push          # Sync schema to database
npm test                 # Run tests
npm run lint             # Run linter
\`\`\`

### Frontend

\`\`\`bash
cd frontend
npm run dev              # Start dev server
npm run build            # Build for production
npm test                 # Run tests
npm run lint             # Run linter
\`\`\`

## Accessing the Application

- **Frontend**: http://localhost:5173
- **Backend API**: http://localhost:3000
