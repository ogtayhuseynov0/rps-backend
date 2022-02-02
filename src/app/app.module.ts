import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GameModule } from '../game/game.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import ormconfig from '../../ormconfig';
import { UserModule } from "../user/user.module";

@Module({
  imports: [
    TypeOrmModule.forRoot(ormconfig),
    GameModule,
    UserModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
