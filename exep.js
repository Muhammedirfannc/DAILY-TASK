try {
  console.log("Trying...");
  throw new Error("Custom error!");
} catch (err) {
  console.log("Caught an error:", err.message);
} finally {
  console.log("This will always run");
}