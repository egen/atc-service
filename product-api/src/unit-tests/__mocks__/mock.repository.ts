import { Repository } from 'typeorm';

export type MockType<T> = {
  [P in keyof T]?: jest.Mock<Record<string, unknown>>;
};

export const repositoryMockFactory = (
  mocks: Record<string, unknown>,
): (() => MockType<Repository<any>>) =>
  jest.fn(() => ({
    delete: jest.fn((entity) => entity),
    find: jest.fn((entity) => entity),
    findOne: jest.fn((entity) => entity),
    remove: jest.fn((entity) => entity),
    save: jest.fn((entity) => entity),
    update: jest.fn((entity) => entity),
    upsert: jest.fn((entity) => entity),
    ...mocks,
  }));
