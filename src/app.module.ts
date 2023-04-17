import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { MoviesModule } from './movies/movies.module';
import { APP_GUARD } from '@nestjs/core';
import { AuthGuard } from './common/auth.guard';

@Module({
  imports: [UsersModule, AuthModule, MoviesModule],
  controllers: [],
  providers: [
    {
      provide: APP_GUARD,
      useClass: AuthGuard
    }
  ],
})

export class AppModule { }
