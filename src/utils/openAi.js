import OpenAI from 'openai';
import { openAiKey } from './constants';

const client = new OpenAI({
  apiKey: openAiKey, dangerouslyAllowBrowser: true // This is the default and can be omitted
});

export default client