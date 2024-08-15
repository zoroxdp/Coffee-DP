import 'server-only'

// @ts-ignore
import swell from 'swell-node'

const storeId = process.env.NEXT_PUBLIC_STORE_ID
const secretKey = process.env.SWELL_SECRET_KEY

if (!storeId || !secretKey) {
  throw new Error("Swell store ID or Secret Key is missing");
}

swell.init(storeId, secretKey)

export default swell;
