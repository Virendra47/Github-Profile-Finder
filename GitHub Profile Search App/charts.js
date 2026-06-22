// Chart.js integration for language visualization

const Charts = {
    instance: null,
    
    create(ctx, labels, data) {
        this.destroy();
        
        if (!labels || labels.length === 0) return null;
        
        const colors = ['#3b82f6', '#8b5cf6', '#f59e0b', '#ef4444', '#22c55e', '#ec4899'];
        
        this.instance = new Chart(ctx, {
            type: 'doughnut',
            data: {
                labels: labels,
                datasets: [{
                    data: data,
                    backgroundColor: colors.slice(0, labels.length),
                    borderWidth: 2,
                    borderColor: 'rgba(255,255,255,0.5)',
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: true,
                plugins: {
                    legend: {
                        display: false,
                    },
                },
                cutout: '50%',
            }
        });
        
        return this.instance;
    },
    
    destroy() {
        if (this.instance) {
            this.instance.destroy();
            this.instance = null;
        }
    },
    
    updateFromRepos(repos) {
        const langMap = {};
        repos.forEach(repo => {
            if (repo.language) {
                langMap[repo.language] = (langMap[repo.language] || 0) + 1;
            }
        });
        
        const labels = Object.keys(langMap).slice(0, 6);
        const data = labels.map(l => langMap[l]);
        
        const canvas = document.getElementById('langChart');
        if (!canvas) return;
        
        const ctx = canvas.getContext('2d');
        return this.create(ctx, labels, data);
    }
};