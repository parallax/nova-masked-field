Nova.booting((Vue, router, store) => {
    Vue.component('index-masked-field', require('./components/IndexField'))
    Vue.component('detail-masked-field', require('./components/DetailField'))
    Vue.component('form-masked-field', require('./components/FormField'))
})
