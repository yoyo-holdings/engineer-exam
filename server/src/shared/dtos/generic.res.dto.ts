import { IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";

export class ResponseDTO<T = any> {
  @IsNotEmpty()
  @IsNumber()
  status: number;

  @IsNotEmpty()
  @IsString()
  message: string;

  @IsOptional()
  data?: T;

  constructor(status: number, message: string, data?: T) {
    this.status = status;
    this.message = message;
    this.data = data;
  }
}
