<template>
    <div class="search__body">
        <div class="search__title">Car brand</div>
        <select v-model="carBrand" class="search__select">
            <option value=""></option>
            <option
                v-for="(brand, index) in gSortBrandsCar"
                :key="index"
                :disabled="auditCars(brand, 'carBrand') == false"
                :value="brand.toLowerCase()"
            >
                {{ brand }}
            </option>
        </select>
    </div>
    <div class="search__body">
        <div class="search__title">Car model</div>
        <select v-model="carModel" :disabled="disableModel == true" class="search__select">
            <option value=""></option>
            <option
                v-for="(model, index) in gSortModelsCar"
                :key="index"
                :disabled="auditCars(model, 'carModel') == false"
                :value="model.toLowerCase()"
            >
                {{ model }}
            </option>
        </select>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
    name: 'BrandAndModel',

    computed: {
        ...mapGetters([
            'gValueCarsByBrand',
            'gSortBrandsCar',
            'gDataCarsByBrand',
            'gSortModelsCar',
            'gValueCarsByModel',
        ]),
        disableModel() {
            if (!this.carBrand) return true
            else return false
        },
        carBrand: {
            get() {
                return this.gValueCarsByBrand
            },
            set(val) {
                this.aValueCarsByBrand(val)
            },
        },
        carModel: {
            get() {
                return this.gValueCarsByModel
            },
            set(val) {
                this.aValueCarsByModel(val)
            },
        },
    },
    methods: {
        ...mapActions(['aValueCarsByBrand', 'aValueCarsByModel']),
        auditCars(val, item) {
            let result = this.gDataCarsByBrand.reduce((res, car) => {
                if (car[item] === val) return (res += 1)
                else return res
            }, 0)
            if (result === 0) return false
            else return true
        },
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
