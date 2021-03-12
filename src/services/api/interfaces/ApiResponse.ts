export interface ApiResponse<T> {
  ok: boolean,
  problem: string,
  data: T | any | null
}