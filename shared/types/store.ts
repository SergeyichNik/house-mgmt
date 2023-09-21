export interface DefaultSchema<Data> {
  data: Data;
  isFetching: boolean;
  error?: string;
}
