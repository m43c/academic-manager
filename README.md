# Academic Manager Project

This project consists of a main folder "AcademicManager" containing the frontend built with React Native and the Expo SDK in the "my-app" folder, and the backend built with Node.js, Express and MongoDB in the "server" folder . The frontend application interacts with the backend to manage academic information.

## Screenshots

![Home Screen](https://github.com/m43c/academic-manager/blob/main/assets/screenshots/home-screen.png?raw=true)
![Student Form Screen](https://github.com/m43c/academic-manager/blob/main/assets/screenshots/student-form-screen.png?raw=true)

## Frontend (Client)

### Previous requirements

Make sure you have Node.js installed on your system.

### Setting

1. Clone this repository:
   ```bash
   git clone https://github.com/m43c/academic-manager.git
   cd academic-manager/my-app
   ```
2. Install the dependencies:

   ```bash
   npm install
   ```

3. Start the client
   ```bash
   npx expo start
   ```

It will provide you with options to run the application on the web and on physical devices or emulators.

## Backend (Server)

### Previous requirements

Make sure you have Node.js and MongoDB installed on your system.

### Setting

1. Change to the server folder:
   ```bash
   cd impulso-store/server
   ```
2. Install the dependencies:
   ```bash
   npm install
   ```
3. Configure the MongoDB database in the database.js file:
   ```javascript
   mongoose.connect("mongodb://127.0.0.1:27017/academicManager");
   ```
4. Start the server
   ```bash
   npm run dev
   ```

## Backend dependencies

- cors: To enable resource sharing between domains.
- express: The web framework used to create the REST API.
- mongoose: To interact with the MongoDB database.
- morgan: For logging HTTP requests.

### Development Dependencies (only for development environment)

- nodemon: Tool that automatically restarts the server when making changes to the code during development.

## Contributions

If you would like to contribute to this project, feel free to open issues and submit pull requests in the repository. Your contribution will be welcomed.
