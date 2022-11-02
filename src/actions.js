export function carsInitAction(cars) {
  return {
    type: "cars/init",
    payload: cars,
  };
}

export function carsFilterAction(filter) {
  return { type: "cars/filter", payload: filter };
}
