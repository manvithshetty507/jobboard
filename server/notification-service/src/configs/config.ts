import dotenv from 'dotenv';

dotenv.config({ path: '.env.dev'});
class Config  {
    public NODE_ENV: string;
    public CLIENT_URL: string;
    public SENDER_EMAIL: string;
    public SENDER_EMAIL_PASSWORD: string;
    public RABBITMQ_ENDPOINT: string;
    public ELASTIC_SEARCH_URL: string;

    constructor() {
        this.NODE_ENV = process.env.NODE_ENV || '';
        this.CLIENT_URL = process.env.CLIENT_URL || '';
        this.SENDER_EMAIL = process.env.SENDER_EMAIL || '';
        this.SENDER_EMAIL_PASSWORD = process.env.SENDER_EMAIL_PASSWORD || '';
        this.RABBITMQ_ENDPOINT = process.env.RABBITMQ_ENDPOINT || '';
        this.ELASTIC_SEARCH_URL = process.env.ELASTIC_SEARCH_URL || '';
    }
}

export const config = new Config();