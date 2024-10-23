import { createClient } from 'redis';
import type { RedisClientType } from 'redis';

export default class RedisClient {

  private client: RedisClientType<any>;

  constructor() {
    this.client = createClient();
    this.client.on('error', this.error);
    this.client.connect();
  }

  public static start(): RedisClient {
    return new RedisClient();
  }

  public async set(key: string, value: string): Promise<void> {
    this.debug(`Setting key ${key} with value ${value}`);
    await this.client.set(key, value);
  }

  public async get(key: string): Promise<string | null> {
    this.debug(`Getting key ${key}`);
    return await this.client.get(key);
  }

  public async expire(key: string, seconds: number = 0): Promise<void> {
    this.debug(`Setting expiration of key ${key} to ${seconds} seconds`);
    await this.client.expire(key, seconds);
  }

  public async disconnect(): Promise<void> {
    this.debug('Disconnecting from Redis');
    await this.client.disconnect();
  }

  private debug(message: any): void {
    console.debug('DEBUG: ', message);
  }

  private error(message: any): void {
    console.error('Error: ', message);
  }
}
