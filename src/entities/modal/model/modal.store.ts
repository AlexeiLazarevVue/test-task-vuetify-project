import { defineStore } from "pinia";
import { StoreNames } from "@/shared/types/general.types";
import { ModalStoreState } from "@/entities/modal";

export const useModalStore = defineStore(StoreNames.MODAL, {
  state: (): ModalStoreState => ({
    activeModals: [],
  }),
  getters: {
    checkModal: (state) => (name: string) => {
      return state.activeModals.includes(name);
    },
  },
  actions: {
    openModal(name: string) {
      this.activeModals.push(name);
    },
    closeModal(name: string) {
      this.activeModals = this.activeModals.filter((modal) => modal !== name);
    },
  },
});
