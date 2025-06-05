export function createRating(value) {
  return {
    value,
    stars: "★".repeat(value)
  };
}
