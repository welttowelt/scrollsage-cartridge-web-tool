import { ControllerConnector } from "@cartridge/connector";
import { mainnet } from "@starknet-react/chains";
import { cartridgeProvider } from "@starknet-react/core";
import { constants } from "starknet";

const defaultMainnetRpcUrl = "https://api.cartridge.gg/x/starknet/mainnet";
const mainnetRpcUrl =
  import.meta.env.VITE_MAINNET_RPC_URL?.trim() || defaultMainnetRpcUrl;

const cartridgeSlot = import.meta.env.VITE_CARTRIDGE_SLOT?.trim();
const cartridgeNamespace = import.meta.env.VITE_CARTRIDGE_NAMESPACE?.trim();

export const starknetChains = [mainnet];

export const starknetProvider = cartridgeProvider();

export const cartridgeConnector = new ControllerConnector({
  defaultChainId: constants.StarknetChainId.SN_MAIN,
  rpcUrl: mainnetRpcUrl,
  chains: [{ rpcUrl: mainnetRpcUrl }],
  lazyload: true,
  namespace: cartridgeNamespace || undefined,
  slot: cartridgeSlot || undefined,
});
