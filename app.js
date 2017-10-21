new Vue({
    el: '#vue-app',
    data: {
       age: 33,
       x: 0,
       y: 0
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
        },
        logName: function(e) {
            console.log(this);
        },
        logAge: function() {
            console.log('you entered your age');
        }
    }
});