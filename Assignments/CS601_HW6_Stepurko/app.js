const dragons = [
    {curImg: '', imgOrg: 'images/IMG_1-org.jpg', imgHov: 'images/IMG_1-hov.jpg', altName: 'img1'},
    {curImg: '', imgOrg: 'images/IMG_2-org.jpg', imgHov: 'images/IMG_2-hov.jpg', altName: 'img2'}
]

var app = new Vue({
    el: '#app',
        data: {
            dragons: dragons,
        },
        created() {
            for (const dragon in dragons) {
                if (Object.hasOwnProperty.call(dragons, dragon)) {
                    const element = dragons[dragon];
                    element.curImg = element.imgOrg;
                }
            }
        },
        methods: {
            mouseover: function(index) {
                this.dragons[index].curImg = this.dragons[index].imgHov;
            },
            mouseleave: function(index) {
                this.dragons[index].curImg = this.dragons[index].imgOrg;
            }
        }
})