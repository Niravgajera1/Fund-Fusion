# 🌟 FundFusion - A Crowdfunding Platform

**FundFusion** is a full-stack crowdfunding platform built with **Next.js** (Frontend) and **NestJS** (Backend). The platform enables users to create, share, and support campaigns, with integrated **Stripe** payment support for seamless transactions.

---

## ✨ Features

### 🛡️ Authentication & Authorization
- Secure user authentication and role-based access.
- Admins have elevated privileges to manage campaigns and users.

### 📢 Campaign Management
- **Users** can:
  - Create campaigns with details and images.
  - Share campaigns to increase reach.
  - Like campaigns to show support.
  - Raise funds via **Stripe** payments.
- **Admins** can:
  - View and manage all campaigns.
  - Moderate user activity and content.

### 💳 Payment Integration
- Fully integrated with **Stripe** for secure and efficient transactions.

---

## 🛠️ Technology Stack

### Frontend
- **Framework**: [Next.js](https://nextjs.org/)
- **Styling**: CSS Modules / Tailwind CSS
- **Font Optimization**: [next/font](https://nextjs.org/docs/basic-features/font-optimization)

### Backend
- **Framework**: [NestJS](https://nestjs.com/)
- **API**: RESTful architecture
- **Payment Gateway**: Stripe

---

## 🚀 Getting Started

### 1. Clone the repository
```bash
git clone https://github.com/your-username/fundfusion.git
cd fundfusion
```

### 2. Install dependencies
```bash
# Install frontend dependencies
cd frontend
npm install

# Install backend dependencies
cd ../backend
npm install
```

### 3. Environment Setup
Create `.env` files for both frontend and backend with the necessary configurations:
- **Frontend**: Stripe API keys, API URLs
- **Backend**: Database configurations, Stripe secrets

### 4. Run the development servers
```bash
# Start frontend (Next.js)
cd frontend
npm run dev

# Start backend (NestJS)
cd ../backend
npm run start:dev
```

### 5. Open in your browser 🌐
- Frontend: [http://localhost:3000](http://localhost:3000)
- Backend API: [http://localhost:4000](http://localhost:4000)

---

## 🤖 How It Works

1. **Users**:
   - Register or log in to the platform.
   - Create campaigns with a title, description, images, and target funding.
   - Share and promote campaigns to attract supporters.
   - Receive funds directly via Stripe.

2. **Admins**:
   - Monitor all campaigns and user activity.
   - Moderate content and manage users.

---

<!-- ## 📸 Screenshots -->

<!-- ### Login Page 🔑
![Login Page Screenshot](screenshots/login-page.png)

### Campaign Creation 🎨
![Campaign Creation Screenshot](screenshots/campaign-creation.png)

### Admin Dashboard 🖥️
![Admin Dashboard Screenshot](screenshots/admin-dashboard.png)

### Campaign Page 📢
![Campaign Page Screenshot](screenshots/campaign-page.png) -->

---

## 📬 Feedback & Contributions

We welcome your feedback and contributions!  
- Open an issue or submit a pull request on [GitHub](https://github.com/your-username/fundfusion).

---

👨‍💻 Happy Coding! 💻✨
