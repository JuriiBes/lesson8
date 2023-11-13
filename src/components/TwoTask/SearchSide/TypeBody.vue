<template>
    <div class="search__body">
        <div class="search__title">Type car</div>
        <select v-model="typeCar" class="search__select">
            <option value=""></option>
            <option value="car">Car</option>
            <option value="truck">Truck</option>
        </select>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
    name: 'TypeBody',
    computed: {
        ...mapGetters(['gValueByTypeBody']),
        typeCar: {
            get() {
                return this.gValueByTypeBody
            },
            set(val) {
                console.log('val')
                console.log(val)
                this.aValueByTypeBody(val)
            },
        },
    },
    methods: {
        ...mapActions(['aValueByTypeBody']),
    },
}
</script>

<style lang="scss" scoped>
.search {
    // .search__body
    &__body {
        display: flex;
        flex-direction: column;
        gap: 8px;
        padding: 3px 5px;
        align-items: flex-start;
    }
    // .search__title
    &__title {
        font-size: 14px;
        font-weight: 500;
    }
    // .search__select
    &__select {
        font-size: 14px;
        border: 1px solid rgba(128, 128, 128, 0.651);
        width: 150px;
    }
}
</style>
