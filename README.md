🔍 GitHub Profile Finder
A beautiful, feature-rich GitHub profile search application built with vanilla JavaScript. Search any GitHub username and get detailed profile information with a stunning glassmorphism UI.
✨ Features
🔍 Smart Search
Search by GitHub username with instant results

Press Enter or click search button

Smart debouncing for optimal performance

Recent search history with delete option

📊 Advanced Statistics
Total repositories count

Followers / Following analytics

Public gists tracker

Account age in days

Contribution streak (coming soon)

📈 Repository Analytics
Top 8 repositories sorted by stars

Most used languages visualization (Chart.js doughnut chart)

Repository star count with visual indicators

Language badges for quick recognition

🎨 UI/UX Excellence
Dark / Light mode with smooth transitions

Glassmorphism design with backdrop blur

Smooth animations and micro-interactions

Fully responsive across all devices

Loading skeletons (coming soon)

📌 Extra Profile Information
Company and organization details

Location with map integration

Website/Blog links

Twitter/X handle

Account creation date

Hireable status with visual indicators:

✅ Open to hire (Green)

🔹 Not looking (Gray)

❓ Status unknown (Yellow)

❤️ Favorites System
Save favorite developers with one click

Local storage persistence

Visual heart toggle with animation

Never lose your favorite developers

⚡ Performance Optimizations
Debounced search input

API response caching

Parallel API requests

Comprehensive error handling

User-friendly error messages

🗑️ Smart History Management
View recent searches

Click to re-search

Delete individual history items

Maximum 12 history entries

🔗 Seamless Navigation
Click on avatar → Visit GitHub profile

Click on full name → Visit GitHub profile

Opens in new tab for convenience

All links accessible

🛠️ Tech Stack
Technology	Purpose	Version
HTML5	Structure	Latest
CSS3	Styling, Animations, Glassmorphism	Latest
JavaScript	Application Logic	ES6+
GitHub REST API	User & Repository Data	v3
Chart.js	Language Visualization	4.4.0
LocalStorage	Favorites & History Persistence	Web API
Font Awesome	Icons	6.0.0+
📁 Project Structure
text
github-profile-finder/
│
├── 📄 index.html          # Main HTML file
├── 🎨 style.css           # All styles (glassmorphism, dark mode, responsive)
├── ⚙️ script.js           # Main application logic
├── 🔌 api.js              # GitHub API functions
├── 📊 charts.js           # Chart.js integration
├── 💾 storage.js          # LocalStorage management
├── 🎯 theme.js            # Theme management
├── 📖 README.md           # Documentation
│
└── 📁 assets/             # (Optional) Images, icons
    ├── icons/
    └── images/
🚀 Installation
Method 1: Clone Repository
bash
git clone https://github.com/yourusername/github-profile-finder.git
cd github-profile-finder
Method 2: Manual Download
Download all files from this repository

Place them in a folder named github-profile-finder

Ensure all files are in the same directory

Method 3: Local Server (Recommended)
bash
# Using Python
python -m http.server 8000

# Using Node.js
npx serve

# Using VS Code Live Server
# Install Live Server extension and click "Go Live"
📖 Usage Guide
🎯 Basic Search
Enter a username in the search bar (e.g., octocat)

Press Enter or click the Search button

Watch the magic happen! ✨

🧭 Navigation
Action	Result
Click on Avatar	Opens GitHub profile in new tab
Click on Full Name	Opens GitHub profile in new tab
Click History Chip	Re-search that username
Click × on History	Remove from history
❤️ Favorites
Click the heart icon on any profile

It turns red to indicate it's saved ❤️

Favorites persist in local storage

Click again to remove from favorites

🌓 Theme Toggle
Click the Dark/Light button in the top-right

Theme preference is saved in local storage

Automatically persists across sessions

📊 Profile Information Displayed
Category	Details
Basic	Avatar, Full Name, Username, Bio
Stats	Repos, Followers, Following, Gists, Account Age
Contact	Company, Location, Website, Twitter
Status	Join Date, Hireable Status
Repos	Top 8 repositories (by stars), Language, Stars
Languages	Doughnut chart showing language distribution
🌐 API Reference
GitHub REST API Endpoints
http
GET /users/{username}
GET /users/{username}/repos
Rate Limits
Authentication	Requests per Hour
No Token	60
With Token	5,000
Example Response
json
{
  "login": "octocat",
  "name": "The Octocat",
  "bio": "Example bio",
  "public_repos": 8,
  "followers": 1234,
  "following": 9,
  "hireable": true,
  "created_at": "2011-01-25T18:44:36Z",
  "company": "GitHub",
  "location": "San Francisco",
  "blog": "https://github.blog",
  "twitter_username": "octocat"
}
📱 Responsive Design
Device	Breakpoint	Layout
Desktop	> 600px	Full layout with grid
Tablet	600-900px	Adjusted grid, smaller charts
Mobile	< 600px	Stacked layout, simplified stats
🔧 Configuration
Adding Your GitHub Token
javascript
// In api.js
const GitHubAPI = {
    BASE_URL: 'https://api.github.com',
    TOKEN: 'YOUR_GITHUB_TOKEN_HERE', // Add your token for higher limits
Changing History Limit
javascript
// In storage.js
addToHistory(username) {
    // ...
    if (filtered.length > 12) filtered.pop(); // Change 12 to desired limit
}
Customizing Colors
css
/* In style.css - Light Mode */
.glass-card {
    background: rgba(255, 255, 255, 0.5);
}

/* In style.css - Dark Mode */
body.dark .glass-card {
    background: rgba(30, 30, 40, 0.6);
}
🎨 Design System
Colors (Light Mode)
Color	Hex	Usage
Primary	#3b82f6	Accents, links
Text Primary	#0f172a	Headings
Text Secondary	#475569	Body text
Background	#f0f2f5	Page background
Glass Card	rgba(255,255,255,0.5)	Card background
Colors (Dark Mode)
Color	Hex	Usage
Primary	#60a5fa	Accents, links
Text Primary	#f1f5f9	Headings
Text Secondary	#94a3b8	Body text
Background	#0f172a	Page background
Glass Card	rgba(30,30,40,0.6)	Card background
Typography
Font Family: Inter, system-ui, -apple-system, sans-serif

Headings: 1.8rem, 600 weight

Body: 0.9rem, 400 weight

Small: 0.7rem, 500 weight

🔒 Security
⚠️ Important Security Notes
NEVER commit your GitHub token to the repository

Use environment variables for sensitive data

Always add a .gitignore file

Regularly rotate your tokens

Safe Token Usage
javascript
// ✅ Safe (environment variable)
const TOKEN = process.env.GITHUB_TOKEN;

// ❌ NOT SAFE (hardcoded in code)
const TOKEN = 'ghp_xxxxxxxxxxxxxxxxxxxxx';
🐛 Known Issues
GitHub API rate limits: 60 requests/hour (unauthenticated)

Some users may have no public repos (shows empty chart)

Website/blog URL may be truncated if very long

Proxy APIs may have downtime

🚧 Future Improvements
Add contribution streak calculation

Implement infinite scroll for repos

Add loading skeleton animations

Support for organization profiles

Export profile as PDF

Compare multiple users

Search by email or location

Add GitHub activity feed

Support for private repositories (with auth)

Add repository search within profile

GitHub Gist visualization

Social media sharing

User comparison feature

🤝 Contributing
How to Contribute
Fork the repository

Create a feature branch

bash
git checkout -b feature/AmazingFeature
Commit your changes

bash
git commit -m 'Add some AmazingFeature'
Push to the branch

bash
git push origin feature/AmazingFeature
Open a Pull Request

Contribution Guidelines
Follow the existing code style

Add comments for complex logic

Update documentation

Test your changes

Be respectful and constructive

👨‍💻 Author
Virendra

https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white
https://img.shields.io/badge/Twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white
https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white

🙏 Acknowledgments
GitHub API - Amazing data source

Chart.js - Beautiful charts

Font Awesome - Icons

Glassmorphism - Design inspiration

All contributors and users ❤️

📄 License
This project is licensed under the MIT License - see the LICENSE file for details.

text
MIT License

Copyright (c) 2026 Virendra

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:
...
⭐ Show Your Support
If you find this project useful, please:

⭐ Star the repository on GitHub

🐛 Report issues you find

💡 Suggest new features

🔧 Contribute to the codebase

📢 Share with others
📸 Screenshots
<img width="957" height="368" alt="image" src="https://github.com/user-attachments/assets/71e7e5d5-11d2-4d5d-a988-2a0dd6d43b95" />
<img width="871" height="857" alt="image" src="https://github.com/user-attachments/assets/ebc200b7-9485-4047-926f-f649037c76f7" />


📧 Contact
For questions, feedback, or support:

Open an Issue

Email: virendra7070@gmail.com

🎉 Final Note
"Built with ❤️ by Virendra © 2026"

Thank you for checking out GitHub Profile Finder! If you love it, don't forget to give it a ⭐!
