import { DatafeedSubscribeCallback, Period, SymbolInfo } from "@klinecharts/pro";
import { KLineData } from "klinecharts";

export class CustomDatafeed {
  /**
   * 模糊搜索标的
   * 在搜索框输入的时候触发
   * 返回标的信息数组
   */
  searchSymbols (search?: string): Promise<SymbolInfo[]> {
    // 根据模糊字段远程拉取标的数据
    return Promise.resolve([]);
  }

  /**
   * 获取历史k线数据
   * 当标的和周期发生变化的时候触发
   * 
   * 返回标的k线数据数组
   */
  getHistoryKLineData (symbol: SymbolInfo, period: Period, from: number, to: number): Promise<KLineData[]> {
    // 完成数据请求
    return Promise.resolve([]);
  }

  /**
   * 订阅标的在某个周期的实时数据
   * 当标的和周期发生变化的时候触发
   * 
   * 通过callback告知图表接收数据
   */
  subscribe (symbol: SymbolInfo, period: Period, callback: DatafeedSubscribeCallback): void {
    // 完成ws订阅或者http轮询
  }

  /**
   * 取消订阅标的在某个周期的实时数据
   * 当标的和周期发生变化的时候触发
   * 
   */ 
  unsubscribe (symbol: SymbolInfo, period: Period): void {
    // 完成ws订阅取消或者http轮询取消
  }
}
