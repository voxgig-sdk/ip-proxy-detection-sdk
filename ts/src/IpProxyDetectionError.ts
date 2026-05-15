
import { Context } from './Context'


class IpProxyDetectionError extends Error {

  isIpProxyDetectionError = true

  sdk = 'IpProxyDetection'

  code: string
  ctx: Context

  constructor(code: string, msg: string, ctx: Context) {
    super(msg)
    this.code = code
    this.ctx = ctx
  }

}

export {
  IpProxyDetectionError
}

