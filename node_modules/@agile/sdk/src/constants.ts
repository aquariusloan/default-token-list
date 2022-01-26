import JSBI from 'jsbi'

// exports for external consumption
export type BigintIsh = JSBI | bigint | string

export enum ChainId {
  MAINNET = 25,
  TESTNET = 338,
  CASSINI = 339
}

export enum TradeType {
  EXACT_INPUT,
  EXACT_OUTPUT
}

export enum Rounding {
  ROUND_DOWN,
  ROUND_HALF_UP,
  ROUND_UP
}

export const FACTORY_ADDRESS = {
  [ChainId.MAINNET]: '0xb89E86701C4Fe4a22a16914e3b0Df53eA4BE771b',
  [ChainId.TESTNET]: '',
  [ChainId.CASSINI]: '0x2172E9c0E32856d4F2E07c58482DE2068f89DF90'
}

export const INIT_CODE_HASH = {
  [ChainId.MAINNET]: '0x05711465afc4c0550521d019458c5d70d182caa4d86702d312fc1b706ae048df',
  [ChainId.TESTNET]: '',
  [ChainId.CASSINI]: '0x451e8f77e1da440b9c36f90619e5278313cd8049e8fb1c61475df3f28d41a28a',
}

export const MINIMUM_LIQUIDITY = JSBI.BigInt(1000)

// exports for internal consumption
export const ZERO = JSBI.BigInt(0)
export const ONE = JSBI.BigInt(1)
export const TWO = JSBI.BigInt(2)
export const THREE = JSBI.BigInt(3)
export const FIVE = JSBI.BigInt(5)
export const TEN = JSBI.BigInt(10)
export const _100 = JSBI.BigInt(100)
export const _998 = JSBI.BigInt(998)
export const _1000 = JSBI.BigInt(1000)

export enum SolidityType {
  uint8 = 'uint8',
  uint256 = 'uint256'
}

export const SOLIDITY_TYPE_MAXIMA = {
  [SolidityType.uint8]: JSBI.BigInt('0xff'),
  [SolidityType.uint256]: JSBI.BigInt('0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff')
}
