import winston from 'winston';
import { ElasticsearchTransport } from 'winston-elasticsearch';
import { elasticSearchClient } from './elasticsearch';
import { Client } from '@elastic/elasticsearch';

const esTransport = new ElasticsearchTransport({
  level: 'info',
  client: elasticSearchClient as unknown as Client,
  indexPrefix: 'jobber-logs',
  indexSuffixPattern: 'YYYY.MM.DD',
});

esTransport.on('error', (error) => {
  console.error('Elasticsearch transport error:', error);
});

const logger = winston.createLogger({
  level: 'info',
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.json()
  ),
  defaultMeta: { service: 'your-service-name' },
  transports: [
    new winston.transports.Console(),
    esTransport,
  ],
});

export { logger };