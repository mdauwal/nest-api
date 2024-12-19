import { Injectable, NestMiddleware, BadRequestException } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class FileValidationMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction): void {
    // Check if the file is uploaded
    if (!req.file) {
      throw new BadRequestException('File is missing');
    }

    // Validate file type
    const allowedMimeTypes = ['image/jpeg', 'image/png', 'image/gif', 'image/jpg'];
    if (!allowedMimeTypes.includes(req.file.mimetype)) {
      throw new BadRequestException(`Invalid file type: ${req.file.mimetype}`);
    }

    // Validate file size (e.g., 2MB limit)
    const maxSizeInBytes = 2 * 1024 * 1024; // 2MB
    if (req.file.size > maxSizeInBytes) {
      throw new BadRequestException('File size exceeds the limit of 2MB');
    }

    next();
  }
}
