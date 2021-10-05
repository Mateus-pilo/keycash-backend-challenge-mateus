import { ConnectionOptions } from 'typeorm';

const config: ConnectionOptions = {
  type: 'mysql',
  host: process.env.TYPEORM_HOST || 'mysql',
  port: parseInt(process.env.TYPEORM_PORT, 10) || 3306,
  username: process.env.TYPEORM_USERNAME || 'chg',
  password: process.env.TYPEORM_PASSWORD || 'qwe123',
  database: process.env.TYPEORM_DATABASE || 'CHALLENGE',
  entities: ['dist/database/entities/*.entity.js'],
  synchronize: false,
  migrations: [__dirname + '/migrations/*.js'],
  migrationsTableName: 'migrations',
  cli: {
    migrationsDir: __dirname + '/migrations',
  },
};

export = config;
