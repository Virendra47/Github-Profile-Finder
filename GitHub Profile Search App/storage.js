// Storage management for favorites and history

const Storage = {
    getFavorites() {
        return JSON.parse(localStorage.getItem('gh_favs')) || [];
    },
    
    setFavorites(favorites) {
        localStorage.setItem('gh_favs', JSON.stringify(favorites));
    },
    
    getHistory() {
        return JSON.parse(localStorage.getItem('gh_history')) || [];
    },
    
    setHistory(history) {
        localStorage.setItem('gh_history', JSON.stringify(history));
    },
    
    getTheme() {
        return localStorage.getItem('gh_theme') || 'light';
    },
    
    setTheme(theme) {
        localStorage.setItem('gh_theme', theme);
    },
    
    addToHistory(username) {
        const history = this.getHistory();
        const filtered = history.filter(u => u !== username);
        filtered.unshift(username);
        if (filtered.length > 12) filtered.pop();
        this.setHistory(filtered);
        return filtered;
    },
    
    removeFromHistory(username) {
        const history = this.getHistory();
        const filtered = history.filter(u => u !== username);
        this.setHistory(filtered);
        return filtered;
    },
    
    toggleFavorite(username) {
        const favorites = this.getFavorites();
        const idx = favorites.indexOf(username);
        if (idx > -1) {
            favorites.splice(idx, 1);
        } else {
            favorites.push(username);
        }
        this.setFavorites(favorites);
        return favorites;
    },
    
    isFavorite(username) {
        return this.getFavorites().includes(username);
    }
};