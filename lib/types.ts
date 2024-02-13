// types.ts
export interface Events {
    name: string;
    date: string;
    amount: string;
    denom: string;
}

export interface Product {
    _id: string;
    cumulativeVolumeUsd: number;
}

export interface DayProduct {
    cumulativePnlUsd: number;
    cumulativeLiquidationsUsd: number;
    date: number;
    _id: string;
}

export interface TokenPrice {
    token: string;
    price: number;
}

export type NetworkData = {
    date: number;
    cumulativeVolumeUsd: number;
    cumulativeFeesUsd: number;
    positionCount: number;
    tradeCount: number;
  };
  
  export interface DataItem {
    day: string;
    vol: number;
    activity: number;
    rev: number;
    tvl: number;
    [key: string]: string | number;
  };
  
  export type HoldingData = {
    timestamp: string;
    close: number;
    vol?: number;
    activity?: number;
    rev?: number;
  };
  
  export type DataReturnType = {
    holdings: HoldingData[];
    address?: string;
    updated_at?: string;
  };
  
  export interface TokenPrice {
    token: string;
    price: number;
  }