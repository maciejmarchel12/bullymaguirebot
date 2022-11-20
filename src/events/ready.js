module.exports = {
    name: 'ready',
    once: true,
    async execute(client) {
        console.log('Ready!');

        const activities = [
            'Bullying',
            'Putting Dirt into peoples eyes'
        ]
        
        setInterval(() => {
            const status = activities[Math.floor(Math.random() * activities.length)];
            client.user.setPresence({ activities: [{ name: `${status}`}]});
        }, 50000);
    },
};