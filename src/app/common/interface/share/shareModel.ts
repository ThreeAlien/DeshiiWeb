export interface BaseResponse<T> {
  /**狀態 */
  isSuccess: boolean;
  /**錯誤資料 */
  errorData: errorResult;
  /**訊息 */
  data: T;
}
export class errorResult {
  /**狀態 */
  public errorCode: boolean = false;
  /**錯誤資料 */
  public errorMessages: string = "";
}

