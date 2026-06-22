// Main application logic

const App = {
    currentUser: null,
    
    init() {
        this.bindElements();
        this.bindEvents();
        this.renderHistory();
        
        // Load last searched user if exists
        const history = Storage.getHistory();
        if (history.length > 0) {
            const last = history[0];
            document.getElementById('searchInput').value = last;
            this.searchUser(last);
        }
    },
    
    bindElements() {
        this.elements = {
            searchInput: document.getElementById('searchInput'),
            searchBtn: document.getElementById('searchBtn'),
            profileCard: document.getElementById('profileCard'),
            avatar: document.getElementById('avatar'),
            avatarLink: document.getElementById('avatarLink'),
            name: document.getElementById('name'),
            profileNameLink: document.getElementById('profileNameLink'),
            login: document.getElementById('login'),
            bio: document.getElementById('bio'),
            company: document.getElementById('company'),
            location: document.getElementById('location'),
            website: document.getElementById('website'),
            twitter: document.getElementById('twitter'),
            joined: document.getElementById('joined'),
            hireableBadge: document.getElementById('hireableBadge'),
            hireableText: document.getElementById('hireableText'),
            repoCount: document.getElementById('repoCount'),
            followerCount: document.getElementById('followerCount'),
            followingCount: document.getElementById('followingCount'),
            gistCount: document.getElementById('gistCount'),
            accountAge: document.getElementById('accountAge'),
            repoList: document.getElementById('repoList'),
            errorArea: document.getElementById('errorArea'),
            historyArea: document.getElementById('historyArea'),
            favoriteBtn: document.getElementById('favoriteBtn'),
        };
    },
    
    bindEvents() {
        this.elements.searchBtn.addEventListener('click', () => {
            this.searchUser(this.elements.searchInput.value);
        });
        
        this.elements.searchInput.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                this.searchUser(this.elements.searchInput.value);
            }
        });
        
        this.elements.favoriteBtn.addEventListener('click', () => {
            this.toggleFavorite();
        });
    },
    
    async searchUser(username) {
        if (!username || !username.trim()) return;
        const trimmed = username.trim();
        
        this.elements.errorArea.innerHTML = '';
        this.elements.profileCard.classList.remove('visible');
        this.elements.profileCard.style.display = 'block';
        
        // Add to history
        Storage.addToHistory(trimmed);
        this.renderHistory();
        
        try {
            const { user, repos } = await GitHubAPI.fetchUserData(trimmed);
            this.renderProfile(user, repos);
            this.elements.profileCard.classList.add('visible');
            this.currentUser = user.login;
            this.updateFavoriteButton(user.login);
        } catch (error) {
            this.elements.profileCard.classList.remove('visible');
            this.elements.errorArea.innerHTML = `
                <div class="error-msg">
                    <i class="fas fa-exclamation-circle"></i> ${error.message}
                </div>
            `;
            console.error(error);
        }
    },
    
    renderProfile(user, repos) {
        const githubUrl = `https://github.com/${user.login}`;
        const e = this.elements;
        
        // Avatar
        e.avatar.src = user.avatar_url || '';
        e.avatarLink.href = githubUrl;
        e.avatarLink.title = `Visit ${user.login}'s GitHub profile`;
        
        // Name
        e.name.textContent = user.name || user.login;
        e.profileNameLink.href = githubUrl;
        e.profileNameLink.title = `Visit ${user.login}'s GitHub profile`;
        
        // Basic info
        e.login.textContent = `@${user.login}`;
        e.bio.textContent = user.bio || 'No bio available';
        e.company.textContent = user.company || '—';
        e.location.textContent = user.location || '—';
        e.website.textContent = user.blog ? 
            (user.blog.length > 25 ? user.blog.slice(0, 25) + '…' : user.blog) : '—';
        e.twitter.textContent = user.twitter_username || '—';
        e.joined.textContent = new Date(user.created_at).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric'
        });
        
        // Hireable status
        this.updateHireableStatus(user.hireable);
        
        // Stats
        e.repoCount.textContent = user.public_repos ?? 0;
        e.followerCount.textContent = user.followers ?? 0;
        e.followingCount.textContent = user.following ?? 0;
        e.gistCount.textContent = user.public_gists ?? 0;
        const ageDays = Math.floor((Date.now() - new Date(user.created_at).getTime()) / (1000 * 60 * 60 * 24));
        e.accountAge.textContent = ageDays || 0;
        
        // Repositories
        this.renderRepos(repos);
        
        // Chart
        Charts.updateFromRepos(repos);
    },
    
    renderRepos(repos) {
        const sorted = [...repos]
            .sort((a, b) => b.stargazers_count - a.stargazers_count)
            .slice(0, 8);
        
        this.elements.repoList.innerHTML = '';
        sorted.forEach(repo => {
            const div = document.createElement('div');
            div.className = 'repo-item';
            div.innerHTML = `
                <span class="repo-name">${repo.name}</span>
                <span style="display:flex; gap:0.8rem; align-items:center;">
                    <span class="repo-lang">${repo.language || '—'}</span>
                    <span class="repo-stars"><i class="fas fa-star"></i> ${repo.stargazers_count}</span>
                </span>
            `;
            this.elements.repoList.appendChild(div);
        });
    },
    
    updateHireableStatus(hireable) {
        const badge = this.elements.hireableBadge;
        const text = this.elements.hireableText;
        
        badge.classList.remove('available', 'not-available', 'unknown');
        
        if (hireable === true) {
            badge.classList.add('available');
            text.textContent = 'Open to hire';
            badge.title = 'This developer is open to job opportunities';
        } else if (hireable === false) {
            badge.classList.add('not-available');
            text.textContent = 'Not looking';
            badge.title = 'This developer is not currently looking for opportunities';
        } else {
            badge.classList.add('unknown');
            text.textContent = 'Status unknown';
            badge.title = 'Hireable status not set on GitHub';
        }
    },
    
    updateFavoriteButton(username) {
        const isFav = Storage.isFavorite(username);
        const btn = this.elements.favoriteBtn;
        btn.innerHTML = isFav ? '<i class="fas fa-heart"></i>' : '<i class="far fa-heart"></i>';
        btn.classList.toggle('active', isFav);
    },
    
    toggleFavorite() {
        if (!this.currentUser) return;
        Storage.toggleFavorite(this.currentUser);
        this.updateFavoriteButton(this.currentUser);
    },
    
    renderHistory() {
        const history = Storage.getHistory();
        const area = this.elements.historyArea;
        area.innerHTML = '';
        
        if (history.length === 0) {
            const empty = document.createElement('span');
            empty.className = 'history-empty';
            empty.textContent = 'No search history yet';
            area.appendChild(empty);
            return;
        }
        
        const unique = [...new Set(history)];
        unique.forEach(user => {
            const chip = document.createElement('span');
            chip.className = 'history-chip';
            
            const textSpan = document.createElement('span');
            textSpan.className = 'chip-text';
            textSpan.textContent = user;
            textSpan.addEventListener('click', () => {
                this.elements.searchInput.value = user;
                this.searchUser(user);
            });
            
            const deleteBtn = document.createElement('button');
            deleteBtn.className = 'delete-chip';
            deleteBtn.innerHTML = '<i class="fas fa-times"></i>';
            deleteBtn.title = `Remove "${user}" from history`;
            deleteBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                Storage.removeFromHistory(user);
                this.renderHistory();
            });
            
            chip.appendChild(textSpan);
            chip.appendChild(deleteBtn);
            area.appendChild(chip);
        });
    }
};

// Initialize app
document.addEventListener('DOMContentLoaded', () => App.init());