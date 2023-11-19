<template>
    <div class="search__checkbox">
        <div class="search__title">Type car body</div>
        <form action="#" class="search__form">
            <label v-for="(itemCheckBox, index) in gCheckBoxList" :key="index">
                <input
                    v-model="carBody"
                    name="body-type"
                    type="radio"
                    :disabled="activeCheckbox(itemCheckBox) == true"
                    :value="itemCheckBox"
                />{{ itemCheckBox.toLowerCase() }}</label
            >
        </form>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
    name: 'CheckBoxCarBody',
    computed: {
        ...mapGetters(['gValueCarsByCheckBox', 'gDataCarsByModel', 'gCheckBoxList']),
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
            let result = this.gDataCarsByModel.reduce((res, car) => {
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
