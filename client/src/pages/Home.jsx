import React from 'react'

const Home = () => {
    return (
        <div className="px-4 py-12 max-w-2xl mx-auto">
            <h1 className="text-3xl font-bold mb-4 text-slate-800">Welcome to my MERN Auth App!</h1>
            <p className="text-slate-700 mb-4">This is full-stack authentication application build with React, Node.js, Express and MongoDB.
                It uses JWT tokens for authentication and authorization. It includes features like user registration, login, protected routes, and more.
            </p>
            <p className="text-slate-700 mb-4">This authentication app is a beginner-friendly web application built using the MERN (MongoDB, Express.js, React.js, Node.js) stack, designed to demonstrate fundamental user authentication and profile management capabilities.
                The app features Google OAuth integration, allowing users to seamlessly sign in using their Google accounts. Users can manage their profiles by updating their profile pictures, adding a personal touch to their accounts.
            </p>
            <p className="text-slate-700 mb-4">
                The application includes essential authentication functionalities like user registration, login, and logout processes, making it an excellent learning project for understanding how modern web authentication works. With its clean interface and straightforward features, this project serves as a practical introduction to implementing secure user authentication in MERN stack applications.
            </p>
        </div>
    )
}

export default Home
