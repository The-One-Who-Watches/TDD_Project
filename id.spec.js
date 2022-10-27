let user = {
  name: "John Smith",
  email: "js@somePretendEmail.com",
  posts: [],
};

const currentIds = [1, 3, 2, 4];

function getNewId(min = 0, max = 100, ids = []) {
  let id;
  do {
    id = Math.floor(Math.random() * (max - min + 1)) + min;
  } while (ids.indexOf(id) > -1);
  return id;
}

function getRandomId(min = 0, max = 0, ids = []) {
  let id;
  let a = [];
  do {
    id = Math.floor(Math.random() * (max - min + 1)) + min;
    if (a.indexOf(id) === -1) {
      a.push(id);
    }
    if (a.length === max - min + 1) {
      if (ids.indexOf(id) > -1) {
        return "failed";
      }
    }
  } while (ids.indexOf(id) > -1);
  return id;
}

test("returns a random number", () => {
  jest.spyOn(Math, "floor");
  const mockMath = Object.create(global.Math);
  const originalMath = Object.create(global.Math);
  mockMath.random = () => 0.75;
  global.Math = mockMath;
  const id = getNewId(10, 100);
  expect(id).toBe(78);
  global.Math = originalMath;
});

test("returns an integer", () => {
  const id = getRandomId();
  expect(id).toBe(Math.floor(id));
});

test("generates a number within a defined range", () => {
  for (let i = 0; i < 100; i++) {
    const id = getRandomId(10, 100);

    expect(id).toBeLessThanOrEqual(100);
    expect(id).toBeGreaterThanOrEqual(10);
    expect(id).not.toBeLessThan(10);
    expect(id).not.toBeGreaterThan(100);
  }
});

test("generates a unique number", () => {
  const id = getRandomId();
  const index = currentIds.indexOf(id);
  expect(index).toBe(-1);
});
