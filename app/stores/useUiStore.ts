import { defineStore } from 'pinia';

interface State {
    overlay: boolean;
}

export const useUiStore = defineStore('ui', {
    state: (): State => ({
        overlay: false,
    }),

    actions: {
        SET_OVERLAY(overlay: boolean): void {
            this.overlay = overlay;
        },
    },
});
