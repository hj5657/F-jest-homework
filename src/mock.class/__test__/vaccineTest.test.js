import VaccineTest from "../vaccineTest";

const mockAcceptInjection = jest.fn();
const mockGetHasAntibodies = jest.fn();
jest.mock("../recipient", () => {
  // mock class实现
  return jest.fn().mockImplementation(() => {
    return {
      acceptInjection: mockAcceptInjection,
      getHasAntibodies: mockGetHasAntibodies,
    };
  });
});

beforeEach(() => {
  // clear mock here
  mockAcceptInjection.mockClear();
  mockGetHasAntibodies.mockClear();
});

describe("inject", () => {
  test("should recipient accept injection with vaccine", () => {
    // TODO 14: add test here
    const vaccine = new VaccineTest();
    vaccine.inject();
    expect(mockAcceptInjection).toHaveBeenCalled();
  });
});

describe("test", () => {
  test("should get Success if recipient has antibodies", () => {
    // TODO 15: add test here
    mockGetHasAntibodies.mockImplementation(() => true);
    const vaccine = new VaccineTest();
    expect(vaccine.test()).toEqual("Vaccine Test Success");
  });

  test("should get Failed if recipient has no antibodies", () => {
    // TODO 16: add test here
    mockGetHasAntibodies.mockImplementation(() => false);
    const vaccine = new VaccineTest();
    expect(vaccine.test()).toEqual("Vaccine Test Failed");
  });
});
