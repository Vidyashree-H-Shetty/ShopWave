# ShopWave - eCommerce Platform

## Overview
**ShopWave** is a modern eCommerce web application built for seamless online shopping. It features product browsing, cart management, secure authentication, and an intuitive admin panel for managing orders and products.

## Features
- **User-Friendly Storefront**: Browse and purchase products with ease.
- **Shopping Cart & Checkout**: Add items to the cart and proceed to checkout.
- **User Authentication**: Secure login, signup, and session management.
- **Payments Integration**: Supports multiple payment gateways.
- **Order Management**: Users can track orders; admins can manage products and inventory.
- **Admin Dashboard**: Analytics and insights on sales, revenue, and orders.
- **Responsive Design**: Optimized for both desktop and mobile devices.

## Tech Stack
### **Frontend**
- **React.js** - UI development
- **Tailwind CSS** - Modern styling framework
- **Recharts** - Data visualization for analytics

### **Backend**
- **Node.js & Express.js** - Server-side logic
- **MongoDB** - Database for storing user, product, and order data
- **Mongoose** - Object modeling for MongoDB
- **JWT Authentication** - Secure user authentication
- **Socket.IO** - Real-time chat and notifications

### **Other Dependencies**
- **Zustand** - State management
- **Axios** - API requests
- **Framer Motion** - UI animations
- **Stripe** - Payment processing
- **Redis (ioredis)** - Caching and session management

## Installation & Setup
### **1. Clone the Repository**
```sh
 git clone https://github.com/yourusername/shopwave.git
 cd shopwave
```

### **2. Install Dependencies**
```sh
npm install
```

### **3. Configure Environment Variables**
Create a `.env` file in the root directory and add the following:
```env
PORT=5000
ACCESS_TOKEN_SECRET=access_token_secret
REFRESH_TOKEN_SECRET=refresh_token_secret
CLIENT_URL= http://localhost:5173
MONGO_URI
UPSTASH_REDIS_URL
CLOUDINARY_CLOUD_NAME
CLOUDINARY_API_KEY
CLOUDINARY_API_SECRET
STRIPE_SECRET_KEY
```

### **4. Start the Development Server**
```sh
npm run dev
```
```sh
cd frontend
npm run dev
```
### **Deployment(Live Demo)**
```sh
https://wellness-wizard.onrender.com
```

## Contributing
Contributions are welcome! Feel free to fork the repo and submit pull requests.

## Contact
For any queries or support, reach out via vidyashreehshetty2917@gmail.com

