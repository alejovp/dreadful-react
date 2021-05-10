import '@testing-library/jest-dom';

jest.mock('../../src/hooks/useDataFetch');
jest.mock('../../src/services/helpers', () => ({
    textSlicer: jest.fn()
}));

