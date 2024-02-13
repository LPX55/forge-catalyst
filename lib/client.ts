import { HttpLink } from "@apollo/client";
import {
  NextSSRInMemoryCache,
  NextSSRApolloClient,
} from "@apollo/experimental-nextjs-app-support/ssr";
import { registerApolloClient } from "@apollo/experimental-nextjs-app-support/rsc";

export const { getClient } = registerApolloClient(() => {
  return new NextSSRApolloClient({
    cache: new NextSSRInMemoryCache(),
    link: new HttpLink({
      uri: "https://api.covalenthq.com/v1/evmos-mainnet/address/0x21708707f03A19C3a4ea5E1a132B5cF96b86F294/portfolio_v2/?days=30&key=ckey_05fbe84d5a634c9892149e24d6b",
    }),
  });
});