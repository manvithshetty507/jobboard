import { Client } from '@elastic/elasticsearch';

const elasticSearchClient = new Client({
  node: 'http://localhost:9200'
});

export { elasticSearchClient };