<template>
    <div>
        <nav class="cars__navigation">
            <div class="icon__link" @click="clickSuv()">
                <img :src="iconSuv" alt="icon" class="icon" /><span>SUV</span>
            </div>
            <div class="icon__link" @click="clickCoupe()">
                <img :src="iconCoupe" alt="icon" class="icon" /><span>Coupe</span>
            </div>
            <div class="icon__link" @click="clickHatchback()">
                <img :src="iconHatchback" alt="icon" class="icon" /><span>Hatchback</span>
            </div>
            <div class="icon__link" @click="clickTruck()">
                <img :src="iconTruck" alt="icon" class="icon" /><span>Truck</span>
            </div>
            <div class="icon__link" @click="clickMinivan()">
                <img :src="iconMinivan" alt="icon" class="icon" /><span>Minivan</span>
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

export default {
    name: 'FirstTask',
    components: {
        CarsCardsSection,
    },
    data() {
        return {
            category: null,
        }
    },

    computed: {
        iconSuv() {
            return require('@/assets/image/suv-sm.png')
        },
        iconCoupe() {
            return require('@/assets/image/coupe-sm.png')
        },
        iconHatchback() {
            return require('@/assets/image/hatchback-sm.png')
        },
        iconTruck() {
            return require('@/assets/image/truck-sm.png')
        },
        iconMinivan() {
            return require('@/assets/image/minivan-sm.png')
        },
    },
    created() {
        this.aDataCars()
    },
    methods: {
        ...mapActions(['aDataCars']),
        clickSuv() {
            this.category = 'suv'
        },
        clickHatchback() {
            this.category = 'hatchback'
        },
        clickCoupe() {
            this.category = 'coupe'
        },
        clickTruck() {
            this.category = 'pickup Truck'
        },
        clickMinivan() {
            this.category = 'mini-van'
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
    width: 120px;
    height: 100px;
    border-radius: 50%;
    background-color: aquamarine;
    transition: background-color ease 0.3s;
    cursor: pointer;
    & span {
        display: block;
        position: absolute;
        top: 0;
        left: 50%;
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
