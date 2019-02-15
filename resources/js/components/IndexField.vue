<template>
    <span>{{ maskedText }}</span>
</template>

<script>
export default {
    props: ['resourceName', 'field'],
    data: function() {
        return {
            text: this.field.value
        }
    },
    computed: {
        maskedText: function() {
            return this.text.replace(/./g, '*')
        }
    }
}
</script>
