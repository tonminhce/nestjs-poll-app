import { Catch, ArgumentsHost, ExceptionFilter, Logger } from '@nestjs/common';

@Catch()
export class LoggingFilter implements ExceptionFilter {
  private readonly logger = new Logger(LoggingFilter.name);

  catch(error: Error, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();
    const request = ctx.getRequest();

    this.logger.error(
      `Error occurred: ${error.message}`,
      error.stack,
      LoggingFilter.name,
    );

    response.status(500).json({
      statusCode: 500,
      timestamp: new Date().toISOString(),
      path: request.url,
      message: 'Internal server error',
    });
  }
}
