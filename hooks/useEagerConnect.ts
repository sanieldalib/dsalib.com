import { useWeb3React } from "@web3-react/core";
import { useEffect, useState } from "react";
import { injected } from "../connectors";

export default function useEagerConnect() {
  const { activate, active } = useWeb3React();

  const [tried, setTried] = useState(false);

  useEffect(() => {
    injected.isAuthorized().then((isAuthorized) => {
      if (isAuthorized) {
        setTimeout(
          () =>
            activate(injected, undefined, true).catch(() => {
              setTried(true);
            }),
          500
        );
      } else {
        setTried(true);
      }
    });
  }, [activate]);

  // if the connection worked, wait until we get confirmation of that to flip the flag
  useEffect(() => {
    if (!tried && active) {
      setTried(true);
    }
  }, [tried, active]);

  return tried;
}
