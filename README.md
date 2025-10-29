# Vibe Commerce - Full Stack E-Commerce Cart

A modern full-stack shopping cart application built for Vibe Commerce screening assignment.

## 🚀 Features

### Backend (Node.js/Express/MongoDB)
- **Authentication System**: JWT-based user authentication with login/logout
- **Product Management**: RESTful API for products with mock data seeding
- **Shopping Cart**: Add/remove items, quantity management, persistent cart storage
- **Checkout System**: Mock checkout with receipt generation
- **Error Handling**: Comprehensive error handling with custom API responses
- **Database**: MongoDB with Mongoose ODM

### Frontend (React/TypeScript/Tailwind CSS)
- **Responsive Design**: Mobile-first responsive design with Tailwind CSS
- **Product Grid**: Clean product display with images, prices, and descriptions
- **Shopping Cart**: Interactive cart with add/remove functionality
- **Checkout Flow**: Modal-based checkout with form validation
- **Receipt Display**: Beautiful receipt modal after successful checkout
- **Authentication**: Login form with demo account support
- **State Management**: Context API for auth and cart state

## 🛠 Tech Stack

**Backend:**
- Node.js & Express.js
- TypeScript
- MongoDB & Mongoose
- JWT Authentication
- bcrypt for password hashing
- CORS enabled

**Frontend:**
- React 19 with TypeScript
- Vite for build tooling
- Tailwind CSS for styling
- Axios for API calls
- Context API for state management

## 📁 Project Structure

```
nexora_project/
├── backend/
│   ├── src/
│   │   ├── controllers/     # API controllers
│   │   ├── models/         # Database models
│   │   ├── routes/         # API routes
│   │   ├── middleware/     # Auth middleware
│   │   ├── utils/          # Utilities & helpers
│   │   └── db/            # Database connection
│   ├── package.json
│   └── .env
└── frontend/
    ├── src/
    │   ├── components/     # React components
    │   ├── context/       # Context providers
    │   ├── services/      # API services
    │   ├── types/         # TypeScript types
    │   └── App.tsx
    ├── package.json
    └── index.html
```

## 🚀 Setup Instructions

### Prerequisites
- Node.js (v18 or higher)
- MongoDB Atlas account or local MongoDB
- Git

### Backend Setup

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd nexora_project/backend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Configuration**
   Create a `.env` file in the backend directory:
   ```env
   PORT=3000
   MONGO_URI=mongodb+srv://your-connection-string
   ACCESS_TOKEN_SECRET=your-access-token-secret
   REFRESH_TOKEN_SECRET=your-refresh-token-secret
   ```

4. **Seed the database**
   ```bash
   npm run seed          # Seed users
   npm run seed:products # Seed products
   ```

5. **Start the server**
   ```bash
   npm run dev          # Development mode
   # or
   npm run build && npm start  # Production mode
   ```

### Frontend Setup

1. **Navigate to frontend directory**
   ```bash
   cd ../frontend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

## 📋 API Endpoints

### Authentication
- `POST /v1/api/users/login` - User login
- `POST /v1/api/users/logout` - User logout (protected)
- `GET /v1/api/users/profile` - Get current user (protected)

### Products
- `GET /v1/api/products` - Get all products

### Cart (All protected routes)
- `POST /v1/api/cart` - Add item to cart
- `GET /v1/api/cart` - Get cart with total
- `DELETE /v1/api/cart/:id` - Remove item from cart
- `POST /v1/api/cart/checkout` - Checkout and get receipt

## 🧪 Testing

### Demo Account
- **Email**: `charlie.wilson@example.com`
- **Password**: `password123`

### Test Flow
1. Open the application at `http://localhost:5173`
2. Login with demo account or use the "Use Demo Account" button
3. Browse products and add items to cart
4. View cart and proceed to checkout
5. Fill checkout form and complete order
6. View receipt and continue shopping

## 🎯 Key Features Implemented

✅ **Products Grid**: Displays 5-10 mock products with images, names, and prices  
✅ **Add to Cart**: Functional "Add to Cart" buttons with quantity selection  
✅ **Cart Management**: View cart items, quantities, totals, and remove items  
✅ **Checkout Flow**: Form with name/email validation and receipt generation  
✅ **Responsive Design**: Mobile-friendly responsive layout  
✅ **Database Persistence**: MongoDB integration with user-specific carts  
✅ **Error Handling**: Comprehensive error handling throughout the app  
✅ **Authentication**: JWT-based user authentication system  

## 🎨 Screenshots

### Login Page
Clean login interface with demo account option

### Products Grid
Responsive product grid with add to cart functionality

### Shopping Cart
Interactive cart view with item management

### Checkout Modal
Streamlined checkout process with form validation

### Receipt Display
Professional receipt display after successful checkout

## 🚀 Deployment

The application is ready for deployment on platforms like:
- **Backend**: Heroku, Railway, or DigitalOcean
- **Frontend**: Vercel, Netlify, or GitHub Pages
- **Database**: MongoDB Atlas (already configured)

## 📝 Development Notes

- **TypeScript**: Full TypeScript implementation for type safety
- **Error Handling**: Custom ApiError and ApiResponse classes
- **Security**: JWT tokens, password hashing, CORS configuration
- **Code Quality**: ESLint configuration and consistent code formatting
- **Performance**: Optimized builds and lazy loading where applicable

## 🤝 Contributing

This is a screening assignment project. For any questions or clarifications, please reach out through the provided communication channels.

## 📄 License

This project is created for educational and screening purposes.