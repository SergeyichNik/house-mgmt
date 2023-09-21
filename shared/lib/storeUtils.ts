export function createAsyncAction(set, method, map?: (data: any) => any) {
  return async () => {
    try {
      set({ isFetching: true });
      const res = await method();
      if (map) {
        set({ data: map(res.data) });
      } else {
        set({ data: res.data });
      }
    } catch {
      set({ error: "Server error" });
    } finally {
      set({ isFetching: false });
    }
  };
}
