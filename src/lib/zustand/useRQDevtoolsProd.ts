import { create } from "zustand";
import { devtools } from "zustand/middleware";

type RQDevtoolsProdOptions = {
  show: boolean;
  toggleShow: () => void;
};

export const useRQDevtoolsProd = create<RQDevtoolsProdOptions>()(
  devtools((set, get) => ({
    show: false,
    toggleShow: () => set(() => ({ show: !get().show }), false, "toogle_devtools_in_prod"),
  }))
);
