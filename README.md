
# Real Estate Ads Platform

A modern **React** web application for creating, managing, and browsing advertisements.  
The project provides a complete user flow — from login via SMS OTP to ad management in an admin panel — built with clean architecture, modular structure.

---

## Overview

This application allows users to:
- Log in using their mobile number and an SMS OTP code  
- Create, edit, and view advertisements  
- Browse ads and categories via a clean and dynamic interface  
- Manage categories and ads through an admin dashboard  
- Enjoy a smooth user experience with loaders, toasts, and optimized API handling  

---

## Key Features

### Authentication
- Two-step login process (phone number + OTP)
- Token-based authentication using `accessToken` and `refreshToken`
- Automatic token refresh and secure cookie storage
- Logout functionality and protected routes

### Category Management
- Create, display, and delete categories from the admin panel
- Fetch and render category lists dynamically
- Fully styled and responsive UI for category management

### Advertisements
- Create new ads with image and file uploads
- Fetch and display all ads or user-specific ads
- Organized listing with clean design

### User Interface
- Global layout with sidebar and navigation
- Toast notifications for feedback messages
- Loader component for async requests
- Persian date and number localization
- Custom favicon and page title
- Consistent CSS styling across components

### Data Handling
- Axios setup with request interceptors for tokens
- React Query for caching, fetching, and invalidating queries
- Centralized API configuration and hooks for clean data flow

---

## Tech Stack

| Category | Technology |
|-----------|-------------|
| **Frontend Framework** | React (Vite) |
| **Data Fetching & Caching** | React Query |
| **HTTP Client** | Axios |
| **Routing** | React Router DOM |
| **UI & Styling** | CSS |
| **Notifications** | React Toastify (or custom Toast) |
| **State & Tokens** | Cookies, React State |
| **Localization** | Custom Persian date & number converter |

---

## 🧩 Project Structure

