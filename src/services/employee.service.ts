import { LoggerHelper } from '../utilities/logger';
import { Employee } from 'src/entities/employee.entity';
import {
  EmployeeDto,
  PaginatedEmployeeDto,
  UpdateEmployeeDto,
} from 'src/dtos/employee.dto';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { EmployeeRepository } from 'src/repositories/employee.repository';

@Injectable()
export class EmployeeService {
  logger: LoggerHelper;
  constructor(
    @InjectRepository(Employee)
    private readonly employeeReository: EmployeeRepository,
  ) {
    this.logger = new LoggerHelper('EmployeeService');
  }

  async create(
    employeeDto: EmployeeDto,
    transactionId: number,
  ): Promise<Employee> {
    const employee = await this.employeeReository.save(employeeDto);
    this.logger.log(transactionId, 'Created employee details');

    return employee;
  }

  async findOne(id: string): Promise<Employee> {
    return this.employeeReository.findOneByOrFail({ id });
  }

  async update(
    id: string,
    updateEmployeeDto: UpdateEmployeeDto,
    transactionId: number,
  ): Promise<string> {
    await this.findOne(id);
    await this.employeeReository.update({ id }, updateEmployeeDto);
    this.logger.log(transactionId, `Updted employee ${id}`);

    return `Successfully updated product ${id}`;
  }

  async remove(id: string): Promise<string> {
    await this.employeeReository.delete(id);

    return `Successfully deleted employee ${id}`;
  }

  async findAll(pageNumber = 1, pageSize = 10): Promise<PaginatedEmployeeDto> {
    const records = await this.employeeReository.find({
      skip: (pageNumber - 1) * pageSize,
      take: pageSize,
      order: {
        createdAt: 'ASC',
      },
    });

    const totalRecords = await this.employeeReository.count();
    return {
      pageNumber,
      pageSize,
      records,
      totalRecords,
    };
  }
}
