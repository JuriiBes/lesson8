<template>
    <div class="cars__items">
        <div v-for="(car, index) in gDataCarsToCategory(category)" :key="index">
            <car-card :car-data="car" />
        </div>
    </div>
</template>

<script>
import CarCard from '@/components/FirstTask/CarCard.vue'
import { mapGetters } from 'vuex'

export default {
    name: 'CarsCardsSection',
    components: {
        CarCard,
    },
    props: {
        category: {
            type: String,
            default: null,
        },
    },
    computed: {
        ...mapGetters(['gDataCarsToCategory']),
        outputResult() {
            return this.category
        },
    },
}
</script>

<style lang="scss" scoped>
.cars__items {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    justify-content: center;
    padding: 10px;
}
</style>
