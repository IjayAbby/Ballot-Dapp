import { SUPPORTED_CHAIN } from "../connection";

export const isSupportedChain = (chainId) => 
    Number(chainId) === SUPPORTED_CHAIN;

// export const isSupportedChain = (chainId) => 
// chainId === SUPPORTED_CHAIN;
//why did we not use this and put number instead, whats the chainIs output before?

