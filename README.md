# Texas Hold'em Poker - Full-Stack Web Application

A production-quality, real-time multiplayer Texas Hold'em Poker web application built with play money only. No real-money gambling.

## 🎯 Project Vision

Build a scalable, real-time multiplayer poker platform demonstrating advanced software engineering practices including:
- Real-time bidirectional communication (Socket.IO)
- Complex game state management
- Responsive UI with animations
- Secure authentication and authorization
- Scalable backend architecture
- Comprehensive testing strategy
- Production-ready deployment

## 🛠 Tech Stack

### Frontend
- **React 18** with TypeScript
- **Vite** for fast development and optimized builds
- **Tailwind CSS** for styling
- **Zustand** for state management
- **Socket.IO Client** for real-time communication
- **Jest + React Testing Library** for testing

### Backend
- **Node.js** with Express
- **TypeScript** for type safety
- **PostgreSQL** with Prisma ORM
- **Socket.IO** for WebSocket communication
- **JWT** for authentication (access + refresh tokens)
- **Bcrypt** for password hashing
- **Joi** for input validation
- **Helmet** for security headers

### Infrastructure
- **Docker & Docker Compose** for containerization
- **GitHub Actions** for CI/CD
- **Nginx** for reverse proxy
- **PostgreSQL** database

## 📁 Project Structure

```
poker/
├── frontend/                 # React + TypeScript frontend
│   ├── src/
│   │   ├── components/      # Reusable UI components
│   │   ├── pages/           # Page components
│   │   ├── stores/          # Zustand state management
│   │   ├── services/        # API and socket services
│   │   ├── hooks/           # Custom React hooks
│   │   ├── types/           # TypeScript interfaces
│   │   ├── utils/           # Utility functions
│   │   ├── App.tsx          # Root component
│   │   └── main.tsx         # Entry point
│   ├── package.json
│   ├── tsconfig.json
│   └── vite.config.ts
│
├── backend/                  # Express + Node.js backend
│   ├── src/
│   │   ├── routes/          # API routes
│   │   ├── controllers/     # Request handlers
│   │   ├── services/        # Business logic
│   │   ├── middlewares/     # Express middlewares
│   │   ├── types/           # TypeScript interfaces
│   │   ├── utils/           # Utility functions
│   │   ├── config/          # Configuration
│   │   └── server.ts        # Entry point
│   ├── prisma/
│   │   └── schema.prisma    # Database schema
│   ├── package.json
│   └── tsconfig.json
│
├── docs/                     # Documentation
│   ├── SETUP.md             # Setup guide
│   ├── API.md               # API documentation
│   └── DATABASE.md          # Database schema
│
├── docker-compose.yml        # Development environment
├── Dockerfile.backend
├── Dockerfile.frontend
├── nginx.conf
└── README.md
```

## 🚀 Quick Start

### Prerequisites
- Node.js 18+
- Docker & Docker Compose
- PostgreSQL 14+ (or use Docker)

### Development Setup

```bash
# Clone the repository
git clone https://github.com/nishant123-cyber/poker.git
cd poker

# Install dependencies (if not using Docker)
npm install
cd backend && npm install
cd ../frontend && npm install
cd ..

# Setup environment variables
cp .env.example .env
cp backend/.env.example backend/.env

# Start with Docker Compose (Recommended)
docker-compose up -d

# Frontend: http://localhost:5173
# Backend API: http://localhost:3000
```

## 📖 Documentation

- [Setup Guide](./docs/SETUP.md) - Detailed setup instructions
- [API Documentation](./docs/API.md) - REST API endpoints
- [Socket Events](./docs/SOCKET_EVENTS.md) - Real-time events
- [Database Schema](./docs/DATABASE.md) - Data model

## 🎮 Features

### Current Phase 1 ✅
- Project structure and setup
- Database schema design
- Docker configuration
- Authentication framework
- Environment configuration

### Upcoming Features
- User registration and login
- Dashboard with statistics
- Poker table creation
- Real-time multiplayer gameplay
- Hand evaluation engine
- Chip management
- Friend system
- Game history and leaderboards

## 🧪 Testing

- **Backend**: Jest with TypeScript
- **Frontend**: Vitest + React Testing Library
- Target coverage: >80%

## 🔒 Security Features

- Input validation with Joi schemas
- JWT authentication with refresh tokens
- Bcrypt password hashing
- Rate limiting
- Helmet.js security headers
- CORS configuration
- Environment variable management

## 🚢 Deployment

### Using Docker
```bash
docker-compose up -d
```

### Using Docker Compose Production
```bash
docker-compose -f docker-compose.prod.yml up -d
```

See [DEPLOYMENT.md](./docs/DEPLOYMENT.md) for detailed instructions.

## 📊 Development Roadmap

- [x] Phase 1: Project Setup & Structure
- [ ] Phase 2: Backend Architecture & Auth
- [ ] Phase 3: Game Engine Implementation
- [ ] Phase 4: Frontend Components & UI
- [ ] Phase 5: Real-Time Gameplay
- [ ] Phase 6: Testing & Deployment

## 🤝 Contributing

Contributions welcome! Please follow our coding standards and submit PRs with comprehensive test coverage.

## 📝 License

MIT License - see LICENSE file for details

## 👤 Author

Built by [@nishant123-cyber](https://github.com/nishant123-cyber)

---

**Status**: 🚧 In Active Development (Phase 1: Complete ✅)
