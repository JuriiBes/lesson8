<template>
    <div>
        <nav class="cars__navigation">
            <div
                v-for="(navItem, index) in dataLinkNav"
                :key="index"
                class="icon__link"
                @click="clickToLink(navItem.name)"
            >
                <img :src="navItem.linkToIcon" alt="icon" class="icon" /><span>{{ navItem.name }}</span>
            </div>
        </nav>

        <div class="cars__shop">
            <cars-cards-section :category="category" />
        </div>
    </div>
</template>

<script>
import { mapActions } from 'vuex'
import CarsCardsSection from '@/components/FirstTask/CarsCardsSection.vue'
import navigationData from '@/data/navigationData.json'

export default {
    name: 'FirstTask',
    components: {
        CarsCardsSection,
    },
    data() {
        return {
            category: null,
            dataLinkNav: navigationData,
        }
    },

    created() {
        this.aDataCars()
    },
    methods: {
        ...mapActions(['aDataCars']),

        clickToLink(category) {
            this.category = category
        },
    },
}
</script>

<style lang="scss" scoped>
.cars__navigation {
    display: flex;
    flex-wrap: wrap;
    gap: 25px;
    align-items: center;
    justify-content: center;
}
.icon__link {
    position: relative;
    font-weight: 600;
    width: 150px;
    height: 100px;
    border-radius: 50%;
    background-color: aquamarine;
    transition: background-color ease 0.3s;
    cursor: pointer;
    & span {
        // display: block;
        font-size: 16px;
        position: absolute;
        top: 5%;
        left: 50%;
        width: 100px;
        transform: translate(-50%, 95%);
        color: rgba(255, 0, 0, 0.521);
    }
    &:hover {
        background-color: aqua;
    }
}
.icon {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -30%);
    max-width: 80px;
}
.cars__shop {
    width: 100%;
    min-height: 100px;
    // background-color: aqua;
}
</style>
