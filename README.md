# 90 North Assignment

## Project Overview
This project is a full-stack application with a Django backend and a React frontend. The backend handles API requests, and the frontend provides an interactive user interface.

## Features
- User authentication (Login, Sign Up)
- Real-time chat functionality
- Dynamic content rendering
- Smooth navigation between pages

## Backend Setup (Django) 

## Step 1: Clone the Backend Repository
It's recommended to use a virtual environment to manage your Python dependencies:
python3 -m venv venv

## Step 2: Create a Virtual Environment
It's recommended to use a virtual environment to manage your Python dependencies:
bash:
python3 -m venv venv

## Step 3: Activate the Virtual Environment
On Windows:
venv\Scripts\activate

On macOS/Linux:
source venv/bin/activate

## Step 4: Install Dependencies
If you have a requirements.txt file, run:
bash:
pip install -r requirements.txt

## Step 5: Set Up Database
Make sure to apply migrations to set up your database:
bash:
python manage.py migrate

## Step 6: Run the Django Development Server
Start the Django server:
bash:
python manage.py runserver
Your backend should now be running at http://127.0.0.1:8000/.

### Frontend Setup (React)
## Step 1: Clone the Frontend Repository
If you haven't already, clone the frontend repository to your local machine:
bash:
git clone <frontend-repository-url>
cd <frontend-folder>

## Step 2: Install Node.js and NPM
Make sure you have Node.js and npm installed on your machine. You can download Node.js from here.
After installing Node.js, verify the installation by running:
bash:
node -v
npm -v

## Step 3: Install Frontend Dependencies
Inside the frontend folder, run the following command to install the required dependencies:
bash:
npm install

## Step 4: Configure API URL
Ensure that your frontend is pointing to the correct backend URL. You may need to set the API base URL in your frontend code (in .env or directly in the code) to http://127.0.0.1:8000/ or wherever your Django server is running.

## Step 5: Run the React Development Server
Start the React development server:
bash:
npm start
Your frontend should now be running at http://localhost:3000/.
