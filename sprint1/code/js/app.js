const menu = Vue.createApp({
    data() {
        return {
            menu: false,
            search: false
        }
    }, methods: {
        togglemenu() {
            this.menu = !this.menu;
            this.search = this.search = false;
        },
        togglesearch() {
            this.search = !this.search;
            this.menu = this.menu = false;

        }
    }
});
menu.mount('#nav_right')

