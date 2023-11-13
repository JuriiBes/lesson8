<template>
    <div class="section__car">
        <div class="side__left">
            <search-side />
        </div>
        <div class="side__right">
            <div v-for="car in gDataCarsByModel" :key="car.id">
                <card-car :car-data="car" />
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import SearchSide from '@/components/TwoTask/SearchSide/index.vue'
import CardCar from '@/components/TwoTask/CardCar.vue'

export default {
    name: 'TwoTask',
    components: {
        SearchSide,
        CardCar,
    },
    computed: {
        ...mapGetters(['gDataCarsByModel']),
    },
    created() {
        this.aDataCarsToTaskTwo()
    },
    methods: {
        ...mapActions(['aDataCarsToTaskTwo']),
    },
}
</script>

<style lang="scss" scoped>
.section {
    // .section__car
    &__car {
        display: flex;
        flex-wrap: wrap;
        gap: 10px;
    }
}
.side {
    // .side__left
    &__left {
        border-right: 1px solid rgba(128, 128, 128, 0.699);
        padding: 10px 15px 10px 5px;
    }
    // .side__right
    &__right {
        flex: 1 1 80%;
        display: flex;
        flex-wrap: wrap;
        gap: 10px;
    }
}
</style>
