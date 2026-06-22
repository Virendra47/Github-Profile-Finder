// api.js - With GitHub Token (Rate limit: 5000/hr)

const GitHubAPI = {
    BASE_URL: 'https://api.github.com',
    // 🔑 Add your token here (only for local use, remove before publishing!)
    TOKEN: '', // Add your token: 'ghp_xxxxxxxxxxxx'
    
    async getUser(username) {
        const headers = {
            'Accept': 'application/vnd.github.v3+json'
        };
        
        if (this.TOKEN) {
            headers['Authorization'] = `token ${this.TOKEN}`;
        }
        
        const response = await fetch(`${this.BASE_URL}/users/${username}`, { headers });
        
        if (response.status === 404) throw new Error('User not found');
        if (response.status === 403) throw new Error('Rate limit exceeded. Add a token or wait.');
        if (!response.ok) throw new Error(`GitHub API error (${response.status})`);
        
        return await response.json();
    },
    
    async getRepos(username) {
        const headers = {
            'Accept': 'application/vnd.github.v3+json'
        };
        
        if (this.TOKEN) {
            headers['Authorization'] = `token ${this.TOKEN}`;
        }
        
        const response = await fetch(`${this.BASE_URL}/users/${username}/repos?per_page=100&sort=updated`, { headers });
        if (!response.ok) return [];
        return await response.json();
    },
    
    async fetchUserData(username) {
        const [user, repos] = await Promise.all([
            this.getUser(username),
            this.getRepos(username)
        ]);
        return { user, repos };
    }
};
