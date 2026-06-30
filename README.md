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
│   ├── public/              # Static assets
│   ├── package.json
│   ├── tsconfig.json
│   ├── vite.config.ts
│   └── tailwind.config.js
│
├── backend/                  # Express + Node.js backend
│   ├── src/
│   │   ├── routes/          # API route handlers
│   │   ├── controllers/     # Request handlers
│   │   ├── services/        # Business logic
│   │   ├── middlewares/     # Express middlewares
│   │   ├── guards/          # Authorization guards
│   │   ├── validators/      # Input validation schemas
│   │   ├── types/           # TypeScript interfaces
│   │   ├── utils/           # Utility functions
│   │   ├── db/              # Database setup
│   │   ├── websocket/       # Socket.IO handlers
│   │   ├── game/            # Poker game engine
│   │   ├── auth/            # Authentication logic
│   │   ├── admin/           # Admin functionality
│   │   ├── config/          # Configuration
│   │   └── server.ts        # Server entry point
│   ├── prisma/
│   │   ├── schema.prisma    # Database schema
│   │   └── migrations/      # Database migrations
│   ├── tests/               # Test suites
│   ├── package.json
│   ├── tsconfig.json
│   └── .env.example
│
├── docs/                     # Documentation
│   ├── API.md               # API documentation
│   ├── SOCKET_EVENTS.md     # Socket.IO events
│   ├── DATABASE.md          # Database schema
│   ├── SETUP.md             # Setup guide
│   ├── DEPLOYMENT.md        # Deployment guide
│   └── ARCHITECTURE.md      # Architecture decisions
│
├── docker-compose.yml       # Development environment
├── docker-compose.prod.yml  # Production environment
├── Dockerfile.backend
├── Dockerfile.frontend
├── nginx.conf               # Nginx configuration
│
├── .github/
│   └── workflows/
│       ├── ci.yml           # CI pipeline
│       └── deploy.yml       # Deployment pipeline
│
├── .gitignore
├── .env.example
└── package.json             # Root package.json for workspace management
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

# Install dependencies
npm install

# Setup environment variables
cp .env.example .env
# Edit .env with your configuration

# Start development environment with Docker Compose
docker-compose up -d

# Run migrations
cd backend && npm run db:migrate

# Start backend (in backend directory)
npm run dev

# Start frontend (in frontend directory, new terminal)
cd frontend && npm run dev
```

### Available Scripts

**Backend:**
```bash
npm run dev              # Start development server
npm run build           # Build for production
npm run start           # Start production server
npm run db:migrate      # Run database migrations
npm run db:push         # Sync schema to database
npm run db:studio       # Open Prisma Studio
npm test                # Run tests
npm run test:watch     # Run tests in watch mode
npm run lint            # Run ESLint
npm run format          # Format code with Prettier
```

**Frontend:**
```bash
npm run dev             # Start development server
npm run build           # Build for production
npm run preview         # Preview production build
npm test                # Run tests
npm run lint            # Run ESLint
npm run format          # Format code with Prettier
```

## 🎮 Features

### Authentication
- User registration with email verification
- Secure login with JWT tokens
- Refresh token mechanism
- Password reset functionality
- Protected routes and APIs

### Dashboard
- User statistics (games played, win rate, chip balance)
- Match history with details
- Friends list management
- Recent activity feed
- Achievement badges

### Lobby
- Create public/private poker tables
- Browse available tables
- Join or leave tables
- Invite friends
- Spectator mode
- Real-time table updates

### Poker Gameplay
- Complete Texas Hold'em rules implementation
- Real-time player actions
- Turn-based betting system
- Multi-way pot handling
- Side pots calculation
- Complete hand evaluation (High Card to Royal Flush)
- Auto-fold on timeout
- Reconnection support
- Live chat during games

### Admin Panel
- User management
- Table moderation
- Active games monitoring
- Server statistics
- System logs

## 🏗 Architecture Decisions

### Real-Time Communication
We use **Socket.IO** over WebSockets for:
- Automatic fallback to polling if WebSockets unavailable
- Built-in reconnection logic
- Namespace support for organizing events
- Room-based broadcasting

### State Management
- **Frontend**: Zustand for lightweight, efficient state management
- **Backend**: In-memory game state with database persistence

### Authentication
- JWT with short-lived access tokens (15 min)
- Refresh tokens stored in HTTP-only cookies
- Password hashing with bcrypt (10 rounds)

### Database
- PostgreSQL for ACID compliance
- Prisma ORM for type-safe queries
- Normalized schema for performance
- Proper indexing strategy

## 📖 Documentation

- [API Documentation](./docs/API.md) - REST API endpoints
- [Socket Events](./docs/SOCKET_EVENTS.md) - Real-time events
- [Database Schema](./docs/DATABASE.md) - Data model
- [Setup Guide](./docs/SETUP.md) - Detailed setup instructions
- [Deployment Guide](./docs/DEPLOYMENT.md) - Production deployment
- [Architecture](./docs/ARCHITECTURE.md) - Design decisions

## 🧪 Testing Strategy

- **Unit Tests**: Pure functions, utilities, hand evaluation
- **Integration Tests**: API endpoints, database operations
- **Socket.IO Tests**: Real-time event handling
- **E2E Tests**: Full game flow scenarios

Target coverage: >80%

## 🔒 Security Features

- Input validation with Joi schemas
- Rate limiting on authentication endpoints
- Helmet.js for security headers
- CORS configuration for specified origins
- Environment variable management
- SQL injection prevention via Prisma
- XSS protection via React
- CSRF tokens for state-changing operations

## 🚢 Deployment

### Docker Deployment
```bash
# Build images
docker-compose -f docker-compose.prod.yml build

# Run production environment
docker-compose -f docker-compose.prod.yml up -d
```

### Manual Deployment
See [DEPLOYMENT.md](./docs/DEPLOYMENT.md) for detailed instructions.

## 📊 Development Roadmap

- [x] Phase 1: Project Setup
- [ ] Phase 2: Backend Architecture
- [ ] Phase 3: Database Schema
- [ ] Phase 4: Authentication System
- [ ] Phase 5: Lobby System
- [ ] Phase 6: Socket.IO Integration
- [ ] Phase 7: Poker Game Engine
- [ ] Phase 8: Hand Evaluation Algorithm
- [ ] Phase 9: Frontend UI
- [ ] Phase 10: Real-Time Gameplay
- [ ] Phase 11: Testing
- [ ] Phase 12: Deployment & CI/CD

## 🤝 Contributing

Contributions welcome! Please follow our coding standards and submit PRs with comprehensive test coverage.

## 📝 License

MIT License - see LICENSE file for details

## 👤 Author

Built by nishant123-cyber as a portfolio project demonstrating advanced full-stack development practices.

---

**Status**: 🚧 In Active Development (Phase 1 Complete)
