import { createModel } from "@rematch/core";

export type UserState = {
  result: number;
};

const User = createModel<any>()({
  state: {} as UserState,

  reducers: {
    setResult(state, payload: any) {
      return { ...state, result: payload };
    },
  },

  effects: (dispatch) => ({
    async fetchGoogle() {
      const response = await fetch("www.google.co.jp");
      const text = await response.text();
      console.log(text);
      this.setResult(text);
    },
  }),
});

export default User;
