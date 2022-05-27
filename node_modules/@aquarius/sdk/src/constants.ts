import JSBI from 'jsbi'

// exports for external consumption
export type BigintIsh = JSBI | bigint | string

export enum ChainId {
  MAINNET = 199,
  TESTNET = 1029
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
  [ChainId.TESTNET]: '0xb89E86701C4Fe4a22a16914e3b0Df53eA4BE771b',
}

export const INIT_CODE_HASH = {
  [ChainId.MAINNET]: '0x05711465afc4c0550521d019458c5d70d182caa4d86702d312fc1b706ae048df',
  [ChainId.TESTNET]: '0x05711465afc4c0550521d019458c5d70d182caa4d86702d312fc1b706ae048df',
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
