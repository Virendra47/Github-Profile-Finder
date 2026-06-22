// GitHub API functions

const GitHubAPI = {
    BASE_URL: 'https://api.github.com',
    
    async getUser(username) {
        const response = await fetch(`${this.BASE_URL}/users/${username}`);
        if (!response.ok) {
            if (response.status === 404) throw new Error('User not found');
            throw new Error(`GitHub API error (${response.status})`);
        }
        return await response.json();
    },
    
    async getRepos(username) {
        const response = await fetch(`${this.BASE_URL}/users/${username}/repos?per_page=100&sort=updated`);
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