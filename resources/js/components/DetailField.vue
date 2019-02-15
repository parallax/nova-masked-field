<template>
    <panel-item :field="field" />
</template>

<script>
export default {
    props: ['resource', 'resourceName', 'resourceId', 'field'],
    created() {
        this.field.value = this.text.replace(/./g, '*')
    }
}
</script>
