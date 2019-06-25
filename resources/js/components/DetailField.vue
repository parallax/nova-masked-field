<template>
    <panel-item :field="field">
        <template slot="value">
            <div v-if="field.value" class="flex items-center">
                <p class="w-full">{{ maskedValue }}</p>
                <span
                    v-on:click="maskedClick"
                    class="btn btn-default btn-primary inline-flex items-center relative ml-3"
                    style="cursor: grab"
                    >{{viewButtonText}}
                </span>
            </div>

            <p v-else class="w-full">&mdash;</p>
        </template>
    </panel-item>
</template>

<script>
export default {
    props: ["resource", "resourceName", "resourceId", "field"],

    data() {
        return {
            viewField: false
        };
    },

    computed: {
        maskedValue: function () {
            if (this.viewField) {
                return this.field.value
            } else {
                return "**************"
            }
        },
        viewButtonText: function () {
            if (this.viewField) {
                return "Hide"
            } else {
                return "Show"
            }
        }
    },

    methods: {
        maskedClick() {
            this.viewField = !this.viewField;
        }
    }
};
</script>
