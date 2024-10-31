const app = Vue.createApp({
    data() {
        return {
            name: 'Matt',
            age: 54,
            image: 'https://th.bing.com/th/id/OIP.82KN1e0l9Z48LIK2lGzP_QAAAA?rs=1&pid=ImgDetMain',
            randomNumber: Math.random()
        };
    },
    methods: {
        agePlusFive() {
            return this.age + 5;
        },
    },
});

app.mount('#assignment');