new Vue({
    el: '#vue-app',
    data: {
        name: '',
        age: 20,
        x: 0,
        y: 0,
        a: 0,
        b: 0
    },
    methods: {
        add: function(e) {
            return this.age += e
        },
        subtract: function(e) {
            return this.age -= e
        },
        updateXY: function(e) {
            this.x = e.offsetX;
            this.y = e.offsetY;
        },
        click: function() {
            alert("You Clicked");
        }
    },
    computed: {
        addToA: function() {
            return this.a + this.age;
        },
        addToB: function() {
            return this.b + this.age;
        }
    }
});

