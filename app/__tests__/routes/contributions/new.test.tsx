import { readConfig } from '@remix-run/dev/dist/config'
import { createRequestHandler, Request } from '@remix-run/node'

describe('/contributions/new', () => {
  it('loads categories correctly', async () => {
    const { serverBuildPath } = await readConfig()
    console.log(serverBuildPath)
    const build = await import(serverBuildPath)
    const handleRequest = createRequestHandler(build, 'test')

    const response = await handleRequest(
      new Request(`http://static/contributions/new`, {
        headers: { 'user-agent': 'remix-test' },
      })
    )
    const html = await response.text()
    expect(html).toBeDefined()
  })
})
