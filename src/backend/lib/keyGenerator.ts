import { Snowflake } from 'nodejs-snowflake';

export function createKey(keyLength: number) {
	const snowflakeGenerator = new Snowflake({ custom_epoch: 1420070400000, instance_id: 0 });
	return snowflakeGenerator.idFromTimestamp(Date.now()).toString();
}