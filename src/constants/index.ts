import { isProduction, requireEnv } from "@/utils/common"

import { ChainId, RPCUrl } from "./common"

const TESTNET_NAME = "Scroll " + (isProduction ? "Alpha" : requireEnv("REACT_APP_SCROLL_ENVIRONMENT")) + " Testnet"

const addresses = [
  // TODO: Merge with constants/networks
  {
    network: "Goerli Testnet",
    etherscanPrefix: process.env.REACT_APP_EXTERNAL_EXPLORER_URI_L1,
    formattedName: "Goerli Testnet",
    chainIdDec: ChainId.SCROLL_LAYER_1,
    autoconnect: {
      chainId: "0x" + ChainId.SCROLL_LAYER_1.toString(16),
      chainName: "Goerli",
      nativeCurrency: {
        name: "Goerli",
        symbol: process.env.REACT_APP_ETH_SYMBOL,
        decimals: 18,
      },
      rpcUrls: [RPCUrl.SCROLL_LAYER_1],
      blockExplorerUrls: [process.env.REACT_APP_EXTERNAL_EXPLORER_URI_L1],
    },
  },

  {
    network: TESTNET_NAME,
    etherscanPrefix: process.env.REACT_APP_EXTERNAL_EXPLORER_URI_L2,
    formattedName: TESTNET_NAME,
    chainIdDec: ChainId.SCROLL_LAYER_2,
    autoconnect: {
      chainId: "0x" + ChainId.SCROLL_LAYER_2.toString(16),
      chainName: TESTNET_NAME,
      nativeCurrency: {
        name: "Ethereum",
        symbol: process.env.REACT_APP_ETH_SYMBOL,
        decimals: 18,
      },
      rpcUrls: [RPCUrl.SCROLL_LAYER_2],
      blockExplorerUrls: [process.env.REACT_APP_EXTERNAL_EXPLORER_URI_L2],
    },
  },
]

const navigation = [
  {
    name: "Portal",
    description: "Main Portal",
    subdomainOrPath: "",
  },
  {
    name: "Guide",
    description: "",
    isExternal: true,
    subdomainOrPath: "guide",
  },
  {
    name: "Bridge",
    description: "Use Bridge (our Hop fork) to transfer tokens between L1 and L2.",
    subdomainOrPath: "/alpha/bridge",
  },
  {
    name: "Rollup Explorer",
    description: "See L2 blocks being committed to L1 and finalized with zkEVM proofs on our Rollup Explorer.",
    isActive: true,
    subdomainOrPath: "/alpha/rollupscan",
  },
  {
    name: "L1 Block Explorer",
    description: "See your L1 transactions on Goerli's block explorer.",
    isExternal: true,
    subdomainOrPath: process.env.REACT_APP_EXTERNAL_EXPLORER_URI_L1,
  },
  {
    name: "L2 Block Explorer",
    description: "See your L2 transactions on our fork of Blockscout.",
    isExternal: true,
    subdomainOrPath: process.env.REACT_APP_EXTERNAL_EXPLORER_URI_L2,
  },
]

const documentation = [
  {
    name: "Architecture Overview",
    description: "",
    link: "https://scroll.mirror.xyz/nDAbJbSIJdQIWqp9kn8J0MVS4s6pYBwHmK7keidQs-k",
  },
  {
    name: "User Guide",
    description: "",
    link: "https://guide.scroll.io",
  },
]

const ModalStatus = {
  HIDDEN: "hidden",
  LOADING: "loading",
  ERROR: "error",
}

export * from "./common"
export * from "./config"
export * from "./gateway"
export * from "./medias"
export * from "./networks"
export * from "./transaction"
export { addresses, navigation, documentation, TESTNET_NAME, ModalStatus }

export let l1ExplorerUrl = process.env.REACT_APP_EXTERNAL_EXPLORER_URI_L1
export let l2ExplorerUrl = process.env.REACT_APP_EXTERNAL_EXPLORER_URI_L2

export let pathL1Explorer = "l1Explorer"
export let pathL2Explorer = "l2Explorer"
export let pathRollupExplorer = "rollupExplorer"
