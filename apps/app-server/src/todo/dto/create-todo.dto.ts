import { IsBoolean, IsString } from 'class-validator';

export class CreateTodoDto {
  @IsBoolean()
  isCompleted: boolean;

  @IsString()
  title: string;

  @IsString()
  content: string;
}
