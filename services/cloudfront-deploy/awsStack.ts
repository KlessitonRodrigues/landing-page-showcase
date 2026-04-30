import * as cdk from 'aws-cdk-lib';

import { LandingPageTemplateApp } from './src/templateApp';

const app = new cdk.App();

new LandingPageTemplateApp(app);
