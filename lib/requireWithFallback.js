export default function requireWithFallback(path, fallback = {}) {
  try {
    return require(path);
  } catch (e) {
    return fallback;
  }
}
