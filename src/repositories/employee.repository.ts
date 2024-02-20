import { Repository } from 'typeorm';
import { Employee } from '../entities/employee.entity';

export class EmployeeRepository extends Repository<Employee> {}
