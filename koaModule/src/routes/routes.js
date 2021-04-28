import combineRoutes from 'koa-combine-routers'

import aRouter from './aRouter'
import bRouter from './bRouter'
import PublicRouter from './PublicRouter'

export default combineRoutes(
    aRouter,
    bRouter,
    PublicRouter
)