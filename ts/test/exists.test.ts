
import { test, describe } from 'node:test'
import { equal } from 'node:assert'


import { IpProxyDetectionSDK } from '..'


describe('exists', async () => {

  test('test-mode', () => {
    const testsdk = IpProxyDetectionSDK.test()
    equal(testsdk instanceof IpProxyDetectionSDK, true,
      'IpProxyDetectionSDK.test() must return a client synchronously')
  })

})
