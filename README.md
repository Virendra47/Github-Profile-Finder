GitHub Profile Finder
A beautiful, feature-rich GitHub profile search application built with vanilla JavaScript.

Features
Smart Search - Search by username with Enter key support

Advanced Stats - Repositories, followers, following, gists, account age

Repository Analytics - Top repos, language chart, star count

UI Improvements - Dark/Light mode, smooth animations, glassmorphism

Extra Profile Info - Company, location, website, Twitter, join date, hireable status

Favorites - Save favorite developers with local storage

Search History - Recent searches with delete option

Clickable Profile - Click avatar or name to visit GitHub profile

Tech Stack
HTML5

CSS3 (Glassmorphism, animations)

JavaScript (ES6+)

GitHub REST API

Chart.js

LocalStorage

Installation
Clone the repository:

bash
git clone https://github.com/yourusername/github-profile-finder.git
Navigate to the project folder:

bash
cd github-profile-finder
Open index.html in your browser or use a live server.

File Structure
text
github-profile-finder/
├── index.html          # Main HTML file
├── style.css           # All styles
├── script.js           # Main application logic
├── api.js              # GitHub API functions
├── charts.js           # Chart.js integration
├── storage.js          # LocalStorage management
├── theme.js            # Theme management
└── README.md           # Documentation
Usage
Enter a GitHub username in the search bar

Press Enter or click the Search button

View the user's complete profile information

Click the heart icon to save to favorites

Use the theme toggle for dark/light mode

Click on the avatar or name to visit the GitHub profile

Delete individual search history items with the × button

API Reference
Uses the GitHub REST API endpoints:

GET /users/{username}

GET /users/{username}/repos
Output Screenshot :
<img width="925" height="340" alt="image" src="https://github.com/user-attachments/assets/8b234109-a2ff-4651-af80-0d395bace931" />
<img width="642" height="651" alt="image" src="https://github.com/user-attachments/assets/5d6fba7c-4015-4fee-a404-081eebb9d54b" />



License
MIT

Author
Virendra - 2026
