<template>
    <div class="car__card">
        <div class="car__photo">
            <img :src="carData.imageURL" alt="car photo" class="car__image" />
        </div>
        <div class="car__info">
            <div class="car__title">{{ carData.carGraduationYear }} {{ carData.carBrand }} {{ carData.carModel }}</div>
            <div class="car__body"><span class="car__subtitle">Body style:</span> {{ carData.carBody }}</div>
            <div class="car__technics">
                <div class="car__engine">
                    <span class="car__subtitle">Engines:</span><br />
                    {{ carData.engine }}
                </div>
                <div class="car__transmissions">
                    <span class="car__subtitle">Transmissions:</span><br />
                    {{ carData.transmission }}
                </div>
            </div>
            <div class="car__fuel"><span class="car__subtitle">Fuel:</span> {{ carData.fuel }}</div>
            <div class="car__footer">
                <div class="car__colors">
                    <div class="car__exterior">
                        <span class="car__subtitle">Exterior color:</span><br />
                        {{ carData.exteriorColor }}
                    </div>
                    <div class="car__interior">
                        <span class="car__subtitle">Interior color:</span><br />
                        {{ carData.interiorColor }}
                    </div>
                </div>
            </div>
            <div class="car__price">
                <div class="car__price-title">Price:</div>
                <div class="car__price-money">{{ carData.price }} $</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'CarCard',
    props: {
        carData: {
            type: Object,
            default: () => ({}),
        },
    },
}
</script>

<style lang="scss" scoped>
.car {
    font-size: 16px;
    // .car__card
    &__card {
        display: grid;
        grid-template-columns: 1.3fr 1.5fr;
        column-gap: 10px;
        width: 500px;
        height: 185px;
        // border: 1px solid rgb(196, 193, 193);
        background-color: rgb(235, 245, 250);
    }
    // .car__photo
    &__photo {
        position: relative;
        width: 100%;
        height: 185px;
        overflow: hidden;
        object-fit: cover;
    }
    // .car__image
    &__image {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }
    // .car__info
    &__info {
        text-align: start;
        display: flex;
        flex-direction: column;
        row-gap: 3px;
        padding: 5px;
    }

    // .car__title
    &__title {
        font-size: 18px;
        font-weight: 600;
        flex: 1 1 auto;
    }
    // .car__body
    &__body {
    }
    // .car__subtitle
    &__subtitle {
        font-size: 12px;
        color: rgb(163, 163, 163);
    }
    // .car__technics
    &__technics {
        display: flex;
        font-size: 16px;
        justify-content: space-between;
    }
    // .car__engine
    &__engine {
    }
    // .car__transmissions
    &__transmissions {
    }
    // .car__fuel
    &__fuel {
        font-size: 14px;
    }
    // .car__footer
    &__footer {
        display: flex;
        column-gap: 15px;
        justify-content: space-between;
    }
    // .car__colors
    &__colors {
        width: 100%;
        display: flex;
        column-gap: 15px;
        font-size: 14px;
    }
    // .car__exterior
    &__exterior {
        flex: 0 0 60%;
    }
    // .car__interior
    &__interior {
    }
    // .car__price
    &__price {
        font-weight: 600;
        display: flex;
        justify-content: space-between;
        padding-top: 4px;
        border-top: 1px solid rgb(196, 193, 193);
    }
    // .car__price-title
    &__price-title {
    }
    // .car__price-money
    &__price-money {
        font-size: 18px;
    }
}
</style>
