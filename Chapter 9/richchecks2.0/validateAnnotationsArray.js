function validateAnnotationsArray(payload) {
  const errors = [];
  if (!Array.isArray(payload)) {
    errors.push("Payload is not an array");
    return errors;
  }
  payload.forEach((item, index) => {
    // Check path
    if (typeof item.path !== "string") {
      errors.push(`Item at index ${index} has an invalid 'path'`);
    }
    // Check start_line
    if (typeof item.start_line !== "number" || item.start_line < 1) {
      errors.push(`Item at index ${index} has an invalid 'start_line'`);
    }
    // Check end_line
    if (typeof item.end_line !== "number" || item.end_line < item.start_line) {
      errors.push(`Item at index ${index} has an invalid 'end_line'`);
    }
    // Check start_column
    if (
      item.start_column !== undefined &&
      (typeof item.start_column !== "number" || item.start_column < 1)
    ) {
      errors.push(`Item at index ${index} has an invalid 'start_column'`);
    }
    // Check end_column
    if (
      item.end_column !== undefined &&
      (typeof item.end_column !== "number" || item.end_column < 1)
    ) {
      errors.push(`Item at index ${index} has an invalid 'end_column'`);
    }
    // Check annotation_level
    if (
      ["notice", "warning", "failure"].indexOf(item.annotation_level) === -1
    ) {
      errors.push(`Item at index ${index} has an invalid 'annotation_level'`);
    }
    // Check message
    if (typeof item.message !== "string") {
      errors.push(`Item at index ${index} has an invalid 'message'`);
    }
    // Check title
    if (item.title !== undefined && typeof item.title !== "string") {
      errors.push(`Item at index ${index} has an invalid 'title'`);
    }
    // Check raw_details
    if (
      item.raw_details !== undefined &&
      typeof item.raw_details !== "string"
    ) {
      errors.push(`Item at index ${index} has an invalid 'raw_details'`);
    }
  });
  return errors;
}
exports.validateAnnotationsArray = validateAnnotationsArray;
