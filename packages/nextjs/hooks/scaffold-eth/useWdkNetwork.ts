import { AvalancheNetwork, NetworkId } from "~~/config/networks";
import { useWdk } from "~~/contexts/WdkContext";

interface UseWdkNetworkReturn {
  currentNetwork: AvalancheNetwork;
  switchNetwork: (networkId: NetworkId) => Promise<void>;
  isSwitchingNetwork: boolean;
}

/**
 * Hook to access and manage the current network
 * @returns Current network info and switchNetwork function
 */
export function useWdkNetwork(): UseWdkNetworkReturn {
  const { currentNetwork, switchNetwork, isSwitchingNetwork } = useWdk();

  return {
    currentNetwork,
    switchNetwork,
    isSwitchingNetwork,
  };
}
