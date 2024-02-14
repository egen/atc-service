import * as config from 'config';
import { HttpException, Injectable } from '@nestjs/common';
import { Cron, SchedulerRegistry } from '@nestjs/schedule';
import { CronJob } from 'cron';

@Injectable()
export class ProductService {
  constructor(private schedulerRegistry: SchedulerRegistry) {}

  @Cron(config?.cron?.expressions?.notifications || '0 8 * * *', {
    name: 'notifications',
    timeZone: config?.cron?.timeZone || 'America/Chicago',
  })
  async productNotifications(): Promise<string> {
    // execute daily cron job to send out notifications
    console.log(`sending product notifications at ${new Date().toISOString()}`);

    return 'Product notifications sent';
  }

  getCrons() {
    const jobs = this.schedulerRegistry.getCronJobs();
    const out = [];

    jobs.forEach((value) => {
      let next;

      try {
        next = value.nextDates().toJSDate();
      } catch (e) {
        next = `error: next fire date for ${value} is in the past!`;
      }
      out.push(next);
    });

    return out;
  }

  getCronByName(name: string) {
    try {
      const job = this.schedulerRegistry.getCronJob(name);

      return job;
    } catch (error) {
      throw new HttpException(`Could not get the cron job for ${name}`, error);
    }
  }

  addCronJob(name: string, expression: string) {
    try {
      const job = new CronJob(expression, () => {
        console.warn(`expression (${expression}) for job ${name} to run!`);
      });

      this.schedulerRegistry.addCronJob(name, job);
      job.start();
    } catch (error) {
      throw new HttpException(
        `Could not add the cron job for ${name} with expression: ${expression}`,
        error,
      );
    }
  }

  stopCronJob(name: string) {
    try {
      const job = this.schedulerRegistry.getCronJob(name);

      job.stop();
    } catch (error) {
      throw new HttpException(`Could not stop the cron job for ${name}`, error);
    }
  }

  startCronJob(name: string) {
    try {
      const job = this.schedulerRegistry.getCronJob(name);

      job.start();
    } catch (error) {
      throw new HttpException(
        `Could not start the cron job for ${name}`,
        error,
      );
    }
  }

  cronLastRun(name: string) {
    try {
      const job = this.schedulerRegistry.getCronJob(name);

      return job.lastDate();
    } catch (error) {
      throw new HttpException(
        `Could not fetch last date for the cron job ${name}`,
        error,
      );
    }
  }
}
