import { Logger } from 'winston';
import { app } from './app';
import {winstonLogger } from '@jobber_app_lib/common'
import { config } from './configs/config';

const log: Logger = winstonLogger(`${config.ELASTIC_SEARCH_URL}`, '', '');