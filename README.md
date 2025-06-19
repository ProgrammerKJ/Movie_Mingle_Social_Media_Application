# Movie Mingle 🎬

**A comprehensive full-stack social media platform designed for movie enthusiasts to connect, share reviews, and manage their movie experiences.**

🎥 **Video Walkthrough:** [Watch Demo](https://www.loom.com/share/1d6939da9fd5415085f6dbcca78371af?sid=c894d743-7893-4591-99fd-9cc2d5186813)

## ✨ Key Features

### 🎭 Social Media Platform
- **User Authentication** - Secure signup/login with JWT and bcrypt password hashing
- **Social Feed** - Share movie thoughts, reviews, and recommendations
- **Interactive Engagement** - Like and comment on posts from other users
- **Friend System** - Connect with fellow movie enthusiasts and build your network

### 🎯 Movie Management
- **Personalized Watchlists** - Create "To Watch" and "Watched" movie collections
- **Movie Search** - Real-time search using external Movie Database API
- **Advanced State Management** - Seamless watchlist operations with useReducer pattern
- **Persistent Storage** - Local storage integration for offline watchlist access

### 📱 User Experience
- **Protected Routes** - Secure navigation with authentication guards
- **Real-time Updates** - Dynamic content updates without page refreshes
- **Responsive Design** - Optimized for desktop and mobile devices
- **File Upload** - Profile pictures and media sharing capabilities

## 🛠️ Technical Stack

### **Backend (Node.js/Express)**
- **Authentication:** JWT tokens with secure cookie handling
- **Security:** bcrypt password hashing, CORS configuration
- **Database:** MySQL with complex relational schema
- **File Handling:** Multer for media uploads
- **API Design:** RESTful endpoints for all social features

### **Frontend (React)**
- **State Management:** Context API with useReducer for complex state logic
- **Routing:** React Router with protected route implementation
- **Data Fetching:** React Query for efficient API calls
- **Styling:** SCSS for component-specific styling

### **Database Schema**
- **Users:** Authentication and profile management
- **Posts:** User-generated content and reviews
- **Comments:** Nested comment system
- **Likes:** Social engagement tracking
- **Relationships:** Friend connections and social graph

### **External Integrations**
- **RapidAPI Movies Database** - Comprehensive movie information
- **Real-time movie data** including upcoming releases, ratings, and details

## 🏗️ Architecture

```
React Frontend ←→ Express API ←→ MySQL Database
     ↓                ↓              ↓
Context Providers   JWT Auth     Relational Schema
     ↓                ↓              ↓
useReducer State   Secure Routes   Complex Joins
     ↓                ↓              ↓
Local Storage     File Upload    Social Features
     ↓
RapidAPI Integration
```

## 🚀 Installation and Setup

### Prerequisites
- Node.js (v14 or higher)
- MySQL Server
- RapidAPI Account ([Get API Key](https://rapidapi.com/SAdrian/api/moviesdatabase/))

### Backend Setup

1. **Clone the repository:**
```bash
git clone https://github.com/programmerKJ/Movie_Mingle_Social_Media_Application.git
cd Movie_Mingle_Social_Media_Application/Backend_API
```

2. **Install dependencies:**
```bash
npm install
```

3. **Environment Configuration:**
Create `.env` file:
```env
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_mysql_password
DB_NAME=moviemingle
JWT_SECRET=your_jwt_secret
```

4. **Database Setup:**
```bash
# Run migrations to create tables
npx sequelize-cli db:migrate

# Start MySQL server and create database
mysql -u root -p
CREATE DATABASE moviemingle;
```

5. **Start Backend Server:**
```bash
npm start
# Server runs on http://localhost:8800
```

### Frontend Setup

1. **Navigate to frontend:**
```bash
cd ../FrontEnd-Client
```

2. **Install dependencies:**
```bash
npm install
```

3. **Environment Configuration:**
Create `.env.local` file:
```env
REACT_APP_RAPIDAPI_KEY=your_rapidapi_key
```

4. **Start Frontend:**
```bash
npm start
# Application runs on http://localhost:3000
```

## 🎯 Technical Highlights

### Advanced React Patterns
- **useReducer with AppReducer** for complex watchlist state management
- **Multiple Context Providers** (AuthContext, GlobalContext) for state distribution
- **Protected Routes** with authentication middleware
- **Custom Hooks** for API interactions and state logic

### Backend Architecture
- **JWT Authentication Flow** with secure cookie management
- **RESTful API Design** with proper HTTP methods and status codes
- **Database Relationships** handling user connections and social interactions
- **File Upload System** with Multer for profile images and media

### State Management Strategy
```javascript
// Complex state transitions for movie management
const AppReducer = (state, action) => {
  switch (action.type) {
    case "ADD_MOVIE_TO_WATCHLIST":
      return { ...state, watchlist: [action.payload, ...state.watchlist] };
    case "MOVE_TO_WATCHED":
      return {
        ...state,
        watched: state.watched.filter(movie => movie.id !== action.payload.id),
        watchlist: [action.payload, ...state.watchlist]
      };
    // Additional complex state transitions...
  }
};
```

### Security Implementation
- **Password Hashing** with bcrypt salt rounds
- **JWT Token Management** with secure httpOnly cookies
- **CORS Configuration** for cross-origin security
- **Input Validation** and SQL injection prevention

## 📊 Database Schema

**Core Tables:**
- `users` - User authentication and profiles
- `posts` - User-generated movie content
- `comments` - Comment system with user relationships
- `likes` - Social engagement tracking
- `relationships` - Friend connections and social graph

**Key Relationships:**
- Users → Posts (One-to-Many)
- Posts → Comments (One-to-Many)
- Users → Likes (Many-to-Many through posts)
- Users → Relationships (Many-to-Many for friends)

## 🔮 Future Enhancements

- [ ] **Real-time Chat** - WebSocket integration for instant messaging
- [ ] **Advanced Recommendations** - ML-based movie suggestions
- [ ] **Group Features** - Movie clubs and discussion groups
- [ ] **Rating System** - User ratings and review aggregation
- [ ] **Notification System** - Real-time alerts for social interactions
- [ ] **Mobile App** - React Native implementation
- [ ] **Movie Streaming Integration** - Direct links to streaming platforms

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/YourFeature`)
3. Commit your changes (`git commit -am 'Add new feature'`)
4. Push to the branch (`git push origin feature/YourFeature`)
5. Create a Pull Request

## 📝 License

This project is licensed under the MIT License.

---

**Built with ❤️ by Krishna Joshi**  
[LinkedIn](https://linkedin.com/in/krishnajoshi28) | [Portfolio](https://krishnasportfolio23.netlify.app)
