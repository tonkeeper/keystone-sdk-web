import { parsePath, toBuffer, toHex, uuidParse, uuidStringify } from '../utils'
import { URType, type UR } from '../types/ur'
import { CosmosSignRequest, CosmosSignature, CryptoKeypath, PathComponent, SignDataType as DataType } from '@keystonehq/bc-ur-registry-cosmos'
import { type CosmosSignature as CosmosSignatureType } from '../types/signature'
import { type CosmosSignRequestProps } from '../types/props'

export class KeystoneCosmosSDK {
  static DataType = DataType

  parseSignature (ur: UR): CosmosSignatureType {
    if (ur.type !== URType.CosmosSignature) {
      throw new Error('type not match')
    }
    const sig = CosmosSignature.fromCBOR(ur.cbor)
    return {
      requestId: uuidStringify(sig.getRequestId()),
      signature: toHex(sig.getSignature()),
      publicKey: toHex(sig.getPublicKey())
    }
  }

  generateSignRequest ({
    requestId,
    signData,
    dataType,
    paths,
    xfp,
    addresses,
    origin
  }: CosmosSignRequestProps): UR {
    return new CosmosSignRequest({
      signData: toBuffer(signData),
      dataType,
      derivationPaths: paths.map(path => new CryptoKeypath(parsePath(path).map(e => new PathComponent(e)), toBuffer(xfp))),
      requestId: uuidParse(requestId),
      addresses,
      origin
    }).toUR()
  }
}
