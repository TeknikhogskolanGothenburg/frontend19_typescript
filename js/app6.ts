function handleError(description: string, errorCode: number): never {
  throw { description: description, errorCode: errorCode };
  console.log("Never here");
}
