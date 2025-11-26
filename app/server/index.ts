import { Hono } from 'hono'
import { serve } from '@hono/node-server'

const app = new Hono()

app.get('/', (c) => c.text('Hello Hono!'))
app.get('/admin', (c) => c.text('Hello Hono!'))

serve(app, (info) => {
  console.log(`Server running at http://localhost:${info.port}`)
})
