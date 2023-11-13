<template>
    <div class="search__checkbox">
        <div class="search__title">Type car body</div>
        <form action="#" class="search__form">
            <label
                ><input
                    v-model="carBody"
                    name="body-type"
                    type="radio"
                    :disabled="activeCheckbox('suv') == true"
                    value="suv"
                />SUV</label
            >
            <label
                ><input
                    v-model="carBody"
                    name="body-type"
                    type="radio"
                    :disabled="activeCheckbox('coupe') == true"
                    value="coupe"
                />Coupe</label
            >
            <label
                ><input
                    v-model="carBody"
                    name="body-type"
                    type="radio"
                    :disabled="activeCheckbox('hatchback') == true"
                    value="hatchback"
                />Hatchback</label
            >
            <label
                ><input
                    v-model="carBody"
                    name="body-type"
                    type="radio"
                    :disabled="activeCheckbox('pickup truck') == true"
                    value="pickup truck"
                />Truck</label
            >
            <label
                ><input
                    v-model="carBody"
                    name="body-type"
                    type="radio"
                    :disabled="activeCheckbox('mini-van') == true"
                    value="mini-van"
                />Minivan</label
            >
        </form>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
    name: 'CheckBoxCarBody',

    computed: {
        ...mapGetters(['gDataCarsToTaskTwo', 'gValueCarsByCheckBox']),
        carBody: {
            get() {
                return this.gValueCarsByCheckBox
            },
            set(val) {
                this.aValueCarsByCheckBox(val)
            },
        },
    },
    methods: {
        ...mapActions(['aValueCarsByCheckBox']),
        activeCheckbox(val) {
            let result = this.gDataCarsToTaskTwo.reduce((res, car) => {
                if (car.carBody.toUpperCase() === val.toUpperCase()) return (res += 1)
                else return res
            }, 0)

            if (!result) return true
            else false
        },
    },
}
</script>

<style lang="scss" scoped>
.search {
    // .search__checkbox
    &__checkbox {
        display: flex;
        flex-direction: column;
        padding: 5px;
        align-items: flex-start;
        row-gap: 5px;
    }
    // .search__title
    &__title {
        font-size: 14px;
        font-weight: 500;
    }
    // .search__form
    &__form {
        display: flex;
        flex-direction: column;
        row-gap: 8px;
        padding: 5px 10px;
        align-items: flex-start;
        font-size: 14px;
        color: rgb(130, 141, 141);
        & label input {
            margin-right: 10px;
        }
    }
}
</style>
