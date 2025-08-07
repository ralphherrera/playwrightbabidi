import { defineConfig, devices } from '@playwright/test';
import { cucumberReporter, defineBddConfig } from 'playwright-bdd';

const testDir = defineBddConfig({
	features: 'src/feature/*.feature',
	steps: 'src/steps/*.ts',
});

export default defineConfig({
	testDir,
	reporter: [
		cucumberReporter('html', {
			outputFile: 'cucumber-report/index.html',
			externalAttachments: true,
		}),
		['html', { open: 'always' }],
	],
	use: {
		screenshot: 'on',
		trace: 'on',
		video: 'on',
	},
	projects: [
		{
			name: 'chromium',
			use: { ...devices['Desktop Chrome'] },
		},
	],
});
