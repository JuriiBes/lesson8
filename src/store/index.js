import { createStore } from 'vuex'

import carsDataCopy from '../data/carsDataCopy.json'
import carsData from '../data/carsData.json'

export default createStore({
    state: {
        // * --------------------------------------- TaskOne
        dataCars: [],
        // * --------------------------------------- TaskTwo
        dataCarsToTaskTwo: [],
        valueByTypeBody: null,
        valueCarsByCheckBox: null,
        valueCarsByBrand: null,
        valueCarsByModel: null,
        checkBoxList: [],
    },
    getters: {
        // * --------------------------------------- TaskOne
        gDataCars: ({ dataCars }) => dataCars,
        gDataCarsToCategory:
            ({ dataCars }) =>
            (category) => {
                if (!category) return dataCars
                else {
                    return dataCars.filter((car) => car.carBody.toUpperCase() === category.toUpperCase())
                }
            },
        // * --------------------------------------- TaskTwo
        gDataCarsToTaskTwo: ({ dataCarsToTaskTwo }) => dataCarsToTaskTwo,
        gCheckBoxList: (state) => {
            let checkBox = new Set()
            state.dataCarsToTaskTwo.forEach((element) => {
                checkBox.add(element.carBody)
            })
            return checkBox
        },
        gValueByTypeBody: ({ valueByTypeBody }) => valueByTypeBody,
        gValueCarsByCheckBox: ({ valueCarsByCheckBox }) => valueCarsByCheckBox,
        gValueCarsByBrand: ({ valueCarsByBrand }) => valueCarsByBrand,
        gValueCarsByModel: ({ valueCarsByModel }) => valueCarsByModel,

        gDataCarsByTypeBody: ({ dataCarsToTaskTwo, valueByTypeBody }) => {
            if (!valueByTypeBody) return dataCarsToTaskTwo
            else {
                return dataCarsToTaskTwo.filter((car) => {
                    if (car.typeBodyCar.toUpperCase() === valueByTypeBody.toUpperCase()) return car
                })
            }
        },
        gDataCarsByCheckBox: (state, getters) => {
            if (!state.valueCarsByCheckBox) return getters.gDataCarsByTypeBody
            else {
                return getters.gDataCarsByTypeBody.filter((car) => {
                    if (car.carBody.toUpperCase() === state.valueCarsByCheckBox.toUpperCase()) return car
                })
            }
        },
        gDataCarsByBrand: (state, getters) => {
            if (!state.valueCarsByBrand) return getters.gDataCarsByCheckBox
            else {
                return getters.gDataCarsByCheckBox.filter((car) => {
                    if (car.carBrand.toUpperCase() === state.valueCarsByBrand.toUpperCase()) return car
                })
            }
        },
        gDataCarsByModel: (state, getters) => {
            if (!state.valueCarsByModel) return getters.gDataCarsByBrand
            else {
                return getters.gDataCarsByBrand.filter((car) => {
                    if (car.carModel.toUpperCase() === state.valueCarsByModel.toUpperCase()) return car
                })
            }
        },
        gSortBrandsCar: ({ dataCarsToTaskTwo }) => {
            const brandsCars = new Set()

            for (const car of dataCarsToTaskTwo) {
                brandsCars.add(car.carBrand)
            }

            return brandsCars
        },
        gSortModelsCar: ({ dataCarsToTaskTwo }) => {
            const modelsCars = new Set()

            for (const car of dataCarsToTaskTwo) {
                modelsCars.add(car.carModel)
            }

            return modelsCars
        },
    },

    mutations: {
        // * --------------------------------------- TaskOne
        mDataCars(state, cars) {
            state.dataCars = JSON.parse(JSON.stringify(cars))
        },
        // * --------------------------------------- TaskTwo
        mDataCarsToTaskTwo(state, carsData) {
            state.dataCarsToTaskTwo = JSON.parse(JSON.stringify(carsData))
        },
        mValueByTypeBody(state, val) {
            state.valueByTypeBody = val
        },
        mValueCarsByCheckBox(state, val) {
            state.valueCarsByCheckBox = val
        },
        mValueCarsByBrand(state, val) {
            state.valueCarsByBrand = val
        },
        mValueCarsByModel(state, val) {
            state.valueCarsByModel = val
        },
    },
    actions: {
        // * --------------------------------------- TaskOne
        aDataCars({ commit }) {
            commit('mDataCars', carsDataCopy)
        },

        // * --------------------------------------- TaskTwo
        aDataCarsToTaskTwo({ commit }) {
            commit('mDataCarsToTaskTwo', carsData)
        },
        aValueByTypeBody({ commit }, val) {
            commit('mValueByTypeBody', val)
        },
        aValueCarsByCheckBox({ commit }, val) {
            commit('mValueCarsByCheckBox', val)
        },
        aValueCarsByBrand({ commit }, val) {
            commit('mValueCarsByBrand', val)
        },
        aValueCarsByModel({ commit }, val) {
            commit('mValueCarsByModel', val)
        },
    },

    modules: {},
})
