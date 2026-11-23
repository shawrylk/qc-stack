const requireValue = (condition, message) => { if (!condition) throw new Error(message); };

/** Branch: seed credentials belong only to a loopback origin. */
export function requireLocalhost(value) {
  const url = new URL(value);
  requireValue(["http:", "https:"].includes(url.protocol) && ["localhost", "127.0.0.1", "[::1]"].includes(url.hostname) && !url.username && !url.password, "seed-login requires localhost");
}
