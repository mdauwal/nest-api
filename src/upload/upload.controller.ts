import { BadRequestException, Controller, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { UploadService } from './upload.service';

@Controller('upload')
export class UploadController {
  constructor(private readonly uploadService: UploadService) {}

  @Post('upload')
@UseInterceptors(FileInterceptor('file')) // Ensure 'file' matches the field in Content-Disposition
uploadFile(@UploadedFile() file: Express.Multer.File) {
  console.log(file); // Check if file is received
  if (!file) {
    throw new BadRequestException('File is missing');
  }
  return { message: 'File uploaded successfully' };
}
}
