<template>
    <type-body />
    <check-box-car-body />
    <brand-and-model />
</template>

<script>
import TypeBody from '@/components/TwoTask/SearchSide/TypeBody.vue'
import CheckBoxCarBody from '@/components/TwoTask/SearchSide/CheckBoxCarBody.vue'
import BrandAndModel from '@/components/TwoTask/SearchSide/BrandAndModel.vue'
export default {
    name: 'SearchSide',
    components: {
        TypeBody,
        CheckBoxCarBody,
        BrandAndModel,
    },
}
</script>

<style lang="scss" scoped></style>
