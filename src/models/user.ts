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
    async finalizeAsync() {},
  }),
});

export default User;
