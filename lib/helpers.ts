import { ethers } from "ethers";
import numbro from "numbro";

export function toBytes32(value: string) {
  return ethers.utils.formatBytes32String(value);
}

export function fromBytes32(value: string) {
  return ethers.utils.parseBytes32String(value);
}

// Data formatters
export function formatUnits(
  number: ethers.BigNumberish,
  units: ethers.BigNumberish | undefined
) {
  return ethers.utils.formatUnits(number || 0, units || 8);
}

export function parseUnits(
  num: string,
  units?: ethers.BigNumberish | undefined
) {
  return ethers.utils.parseUnits(num, units || 8);
}

export function roundAndFloor(
  value: number,
  fractionDigits: number | undefined
) {
  const scale = 10 ** (fractionDigits || 0);
  const fixed = Math.floor(value * scale) / scale;

  // remove trailing zeros
  return parseFloat(fixed.toString()).toString();
}

export function parseUnitsSafe(amount: string, decimals: number | undefined) {
  return parseUnits(
    // round to avoid ethers Error: fractional component exceeds decimals
    roundAndFloor(parseFloat(amount || "0") || 0, decimals),
    decimals
  );
}

export function getPositionKey(
  user: string,
  productId: string,
  currency: string,
  isLong: boolean
): string {
  const types = ["address", "bytes32", "address", "bool"];
  const pack = ethers.utils.solidityPack(types, [
    user,
    productId,
    currency,
    isLong,
  ]);
  return ethers.utils.solidityKeccak256(["address"], [pack]);
}

export function getURLSearchParam(name: "ref") {
  const url = new URL(window.location.href);
  const params = new URLSearchParams(url.search);
  const searchParam = params.get(name);
  return searchParam;
}

export default function shortenENS(ens: string) {
  if (ens.length <= 12) {
    return ens;
  }

  const begin = ens.slice(0, 4);
  const end = ens.slice(-4);
  return `${begin}...${end}`;
}

// using a currency library here in case we want to add more in future
export const formatDollarAmount = (
  num: number | undefined,
  digits = 2,
  round = true
) => {
  if (num === 0) return "$0.00";
  if (!num) return "-";
  if ((0.0 < num) && (num < 0.001) && digits <= 3) {
    return "<$0.001";
  }  

  return numbro(num).formatCurrency({
    average: round,
    mantissa: num > 1000 ? 2 : digits,
    abbreviations: {
      thousand: "K",
      million: "M",
      billion: "B",
    },
  });
};

// using a currency library here in case we want to add more in future
export const formatAmount = (num: number | undefined, digits = 2) => {
  if (num === 0) return "0";
  if (!num) return "-";
  if (num < 0.001) {
    return "<0.001";
  }
  return numbro(num).format({
    average: true,
    mantissa: num > 1000 ? 2 : digits,
    abbreviations: {
      million: "M",
      billion: "B",
    },
  });
};

export const formatTime = (seconds: number) => {
  const minutes = Math.round(seconds / 60);
  if (minutes > 600) {
    return `${Math.round(minutes / 60)}h`;
  } else if (minutes > 0) {
    return `${minutes}min`;
  }
  return `${seconds}s`;
};
