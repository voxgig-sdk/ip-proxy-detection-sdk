
import { test, describe } from 'node:test'
import { equal } from 'node:assert'


import { IpProxyDetectionSDK } from '..'


describe('exists', async () => {

  test('test-mode', async () => {
    const testsdk = await IpProxyDetectionSDK.test()
    equal(null !== testsdk, true)
  })

})
