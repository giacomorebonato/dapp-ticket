import type { FullConfig } from '@playwright/test'
import MCR from 'monocart-coverage-reports'
import coverageOptions from './mcr.config'

async function globalTeardown(config: FullConfig) {
	const mcr = MCR(coverageOptions)
	await mcr.generate()
}

export default globalTeardown
