import {
  Controller,
  Put,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpStatus,
  Req,
  DefaultValuePipe,
  ParseIntPipe,
  Query,
} from '@nestjs/common';
import { ApiBearerAuth, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Employee } from 'src/entities/employee.entity';
import {
  EmployeeDto,
  PaginatedEmployeeDto,
  UpdateEmployeeDto,
} from 'src/dtos/employee.dto';
import { EmployeeService } from 'src/services/employee.service';

@ApiBearerAuth()
@ApiTags('V1 - Employee')
@Controller('v1/employee')
export class EmployeeController {
  constructor(private readonly employeeService: EmployeeService) {}

  @Post()
  @ApiResponse({
    status: HttpStatus.OK,
    type: EmployeeDto,
  })
  create(@Body() emplyeeDto: EmployeeDto, @Req() req): Promise<Employee> {
    return this.employeeService.create(emplyeeDto, req.transactionId);
  }

  @Get(':id')
  @ApiResponse({
    status: HttpStatus.OK,
    type: EmployeeDto,
  })
  findOne(@Param('id') id: string): Promise<Employee> {
    return this.employeeService.findOne(id);
  }

  @Get()
  @ApiResponse({
    status: HttpStatus.OK,
    type: PaginatedEmployeeDto,
  })
  findAll(
    @Query('pageNumber', ParseIntPipe) pageNumber: number,
    @Query('pageSize', ParseIntPipe) pageSize: number,
  ): Promise<PaginatedEmployeeDto> {
    return this.employeeService.findAll(pageNumber, pageSize);
  }

  @Put(':id')
  @ApiResponse({
    status: HttpStatus.OK,
    type: String,
  })
  update(
    @Param('id') id: string,
    @Body() updateEmployeeDto: UpdateEmployeeDto,
    @Req() req,
  ): Promise<string> {
    return this.employeeService.update(
      id,
      updateEmployeeDto,
      req.transactionId,
    );
  }

  @Delete(':id')
  @ApiResponse({
    status: HttpStatus.OK,
    type: String,
  })
  remove(@Param('id') id: string): Promise<string> {
    return this.employeeService.remove(id);
  }
}
