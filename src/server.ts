import 'dotenv/config'
import app from './app'
import Log from './libs/logger'

const port = process.env.PORT || '3000'

process.on('uncaughtException', (error: Error) => {
    Log.error(`UncaughtException event: ${error && error.message}`, {
        stack: error.stack
    })
    process.exit(1)
})

process.on('unhandledRejection', (reason, promise: Promise<any>) => {
    Log.warn(`unhandledRejection event: ${JSON.stringify(reason)}`)
})

const startProcess = async () => {
    try {
        await app.listen(port)
        Log.info(`Server started on port ${port}`)
    } catch (error) {
        Log.error(`Failed to start server: ${error && error.message}`, {
            stack: error.stack
        })
        process.exit(1)
    }
}

startProcess()