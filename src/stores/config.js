import { defineStore } from 'pinia'

export const useConfigStore = defineStore('config', {
    state: () => {
        return {
            mapKey: '6f025e700cbacbb0bb866712d20bb35c',
        }
    },
    getters: {
    },
    actions: {

    },
    persist: {
        // key: 'my-custom-key',
        // [] 表示不持久化任何状态，undefined 或 null 表示持久化整个 state。
        // paths: ['save.me', 'saveMeToo'],
        storage: window['utools'] ? utools.dbStorage: localStorage,
    },
})
