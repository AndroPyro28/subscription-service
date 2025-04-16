// src/index
//! main entry point of the app
import { Hono } from 'hono'
import { logger } from 'hono/logger'

import { cors } from 'hono/cors'
import { secureHeaders } from 'hono/secure-headers'
import { authMiddleware, TAuthVariables } from './middlewares/auth.middleware'
const app = new Hono().basePath('/api/subscription')
.use('/api/*', cors())
.use(secureHeaders())
.use(logger())
.use('*', authMiddleware)
.get('/', async (c) => {
    return c.text("hello world from subscription", 200)
})
// .route('/users', sampleController)

export default app