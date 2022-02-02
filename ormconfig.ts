import { SqliteConnectionOptions } from 'typeorm/driver/sqlite/SqliteConnectionOptions';

const ormconfig: SqliteConnectionOptions = {
  database: 'db.db',
  type: 'sqlite',
  entities: [
    'dist/src/**/*.entity{.ts,.js}',
    'dist/src/**/entities/*.entity{.ts,.js}',
  ],
  synchronize: true,
};
export default ormconfig;
