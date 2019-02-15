<template>
    <default-field :field="field" :errors="errors">
        <template slot="field">
            <div class="flex items-center">
                <input
                    :id="field.name"
                    :type="fieldType"
                    class="w-full form-control form-input form-input-bordered"
                    :class="errorClasses"
                    :placeholder="field.name"
                    v-model="value"
                />
                <span v-on:click="maskedClick" class="btn btn-default btn-primary inline-flex items-center relative ml-3" style="cursor: grab">{{viewButtonText}}</span>
            </div>

        </template>
    </default-field>
</template>

<script>
import { FormField, HandlesValidationErrors } from 'laravel-nova'

export default {
    mixins: [FormField, HandlesValidationErrors],

    props: ['resourceName', 'resourceId', 'field'],

    data() {
        return {
            viewField: false,
            viewButtonText: 'Show',
            fieldType: 'password'
        }
    },

    computed: {
    },

    methods: {
        /*
         * Set the initial, internal value for the field.
         */
        setInitialValue() {
            this.value = this.field.value || ''
        },

        maskedClick() {
          if(!this.viewField) {
              this.viewField = true
              this.viewButtonText = 'Hide'
              this.fieldType = 'text'
          } else {
             this.viewField = false
             this.viewButtonText = 'Show'
             this.fieldType = 'password'
          }
        },

        /**
         * Fill the given FormData object with the field's internal value.
         */
        fill(formData) {
            formData.append(this.field.attribute, this.value || '')
        },

        /**
         * Update the field's internal value.
         */
        handleChange(value) {
            this.value = value
        },
    },
}
</script>
