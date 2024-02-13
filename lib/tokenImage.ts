export async function getAssetUrl(assetAddress: string) {
  try {
    const response = await fetch('https://r2.forge.trade/tokenImageURI.json');
    const data = await response.json();
    const evmosTokens = data.evmos
    console.log(evmosTokens[assetAddress])
    return evmosTokens[assetAddress];
  } catch (error) {
    console.error(error);
  }
}


