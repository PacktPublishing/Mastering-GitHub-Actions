function validateImagesArray(payload) {
  const errors = [];

  if (!Array.isArray(payload)) {
    errors.push("Payload is not an array");
    return errors;
  }

  payload.forEach((item, index) => {
    // Check if item is an object
    if (typeof item !== "object" || item === null) {
      errors.push(`Item at index ${index} is not an object`);
      return; // Skip further checks for this item
    }

    // Check alt
    if (
      !Object.prototype.hasOwnProperty.call(item, "alt") ||
      typeof item.alt !== "string"
    ) {
      errors.push(`Item at index ${index} has an invalid 'alt'`);
    }

    // Check image_url
    if (
      !Object.prototype.hasOwnProperty.call(item, "image_url") ||
      typeof item.image_url !== "string"
    ) {
      errors.push(`Item at index ${index} has an invalid 'image_url'`);
    }

    // Check caption (optional)
    if (
      Object.prototype.hasOwnProperty.call(item, "caption") &&
      typeof item.caption !== "string"
    ) {
      errors.push(`Item at index ${index} has an invalid 'caption'`);
    }
  });

  return errors;
}
exports.validateImagesArray = validateImagesArray;
