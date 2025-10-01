# Test Repository

This repository contains multiple projects:
- A Node.js/Express backend with MongoDB integration
- A test server with EJS templates
- A Bootstrap frontend starter template

## Frontend

The `frontend/` folder contains a simple HTML starter template using Bootstrap for styling.

### Structure

```
frontend/
├── index.html          # Main HTML file with Bootstrap components
├── css/                # Folder for custom CSS styles (currently empty)
└── js/                 # Folder for custom JavaScript files (currently empty)
```

### Running the Frontend

There are several ways to view the frontend:

#### Option 1: Open Directly in Browser

Simply open the `frontend/index.html` file in your web browser:

```bash
# On Linux
xdg-open frontend/index.html

# On macOS
open frontend/index.html

# On Windows
start frontend/index.html
```

Or navigate to the file in your file explorer and double-click it.

#### Option 2: Use a Local Web Server

For a better development experience, use a local web server:

**Using Python 3:**
```bash
cd frontend
python3 -m http.server 8000
```
Then visit `http://localhost:8000` in your browser.

**Using Node.js (http-server):**
```bash
# Install http-server globally (one time only)
npm install -g http-server

# Run from the frontend directory
cd frontend
http-server -p 8000
```
Then visit `http://localhost:8000` in your browser.

**Using PHP:**
```bash
cd frontend
php -S localhost:8000
```
Then visit `http://localhost:8000` in your browser.

**Using Live Server (VS Code Extension):**

If you're using Visual Studio Code, install the "Live Server" extension and right-click on `index.html` to select "Open with Live Server".

### Features

The frontend demonstrates several Bootstrap components:
- **Navbar**: Responsive navigation bar
- **Buttons**: Various button styles and sizes
- **Cards**: Flexible content containers
- **Grid System**: Responsive column layout
- **Alerts**: Contextual feedback messages
- **Footer**: Simple footer layout

### Customization

To add custom styles or scripts:
- Place CSS files in the `css/` folder and link them in `index.html`
- Place JavaScript files in the `js/` folder and include them in `index.html`

## Backend Setup

For the Node.js backend:

```bash
npm install
npm start
```

The server will run on `http://localhost:80` by default.
