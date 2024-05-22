# Movie Mingle

Movie Mingle is a full-stack social media application designed for movie enthusiasts. It allows users to create personalized watchlists, search for movies via an external Movie API, post reviews, add friends, and interact with other users through likes and comments.

## Video Walthrough Here: https://www.loom.com/share/1d6939da9fd5415085f6dbcca78371af?sid=c894d743-7693-4591-99fd-9cc2d5186813

## Get you API key here in order to use the features in the application: https://rapidapi.com/SAdrian/api/moviesdatabase/

## Features

- **Personalized Watchlists**: Create and manage lists of movies you want to watch.
- **Movie Search**: Search for movies using an external Movie API.
- **User Posts**: Share your thoughts about movies, what you liked or disliked.
- **Social Interaction**: Like, comment on posts, and add friends.

## Tech Stack

- **Backend**: Node.js, Express
- **Frontend**: React, JavaScript
- **Database**: MySQL

## Getting Started

### Prerequisites

Ensure you have the following installed:

- Node.js
- npm (Node Package Manager)
- MySQL

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/ProgrammerKJ/Movie_Mingle_Social_Media_Application.git
   cd BothClientAndBackend

2. **Backend Setup:**

   Navigate To the backend directory
   
   ```bash
   cd Backend_API

   Install backend dependencies

   ```bash
   npm install

    DB_HOST=localhost
    DB_USER=root
    DB_PASSWORD=yourpassword
    DB_NAME=moviemingle

   Run the database migrations (ensure your MySQL server is running):

   ```bash
   npx sequelize-cli db:migrate

  Start the backend server:

  ```bash
  npm start

2. **Frontend Setup:** 

Navigate to the frontend directory:

```bash
cd FrontEnd-Client

Install frontend dependencies:

```bash
npm install

Create a .env.local file and add youre rapid api key here in thie format: REACT_APP_RAPIDAPI_KEY=(youre key here)

Start the frontend server:

```bash
npm start

Usage

Register/Login: Create an account or log in with your existing credentials.
Search Movies: Use the search bar to find movies.
Create Watchlists: Add movies to your personalized watchlists.
Post Reviews: Share your thoughts on movies by creating posts.
Social Interaction: Like and comment on posts, add friends to connect with other movie enthusiasts.

Contributing
If you wish to contribute to the development of Movie Mingle, please follow these steps:

Fork the repository.
Create a new branch (git checkout -b feature/YourFeature).
Make your changes.
Commit your changes (git commit -am 'Add new feature').
Push to the branch (git push origin feature/YourFeature).
Create a new Pull Request.
