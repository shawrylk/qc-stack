# qc-stack

Start, stop, and inspect local application stacks for tests. Each registered
repository supplies a plugin that starts its services. The tool supervises the
processes, checks their loopback health endpoints, and prints one JSON row per
stack.

Requires Node.js 24. Run directly from GitHub with npm:

```sh
npx --yes github:shawrylk/qc-stack status
npx --yes github:shawrylk/qc-stack up my-app --timeout 120000
npx --yes github:shawrylk/qc-stack down my-app
```

Use `qc-stack up|down|status [names...] [--timeout <ms>]` when installed.
Stack names come from `~/.qc/stacks.json`. Omit names to act on all registered
stacks. The timeout defaults to 120,000 milliseconds.

The kit installs `qc-stack` and `qc-screens` in one `npx` call, enabling Auth0 session refresh.

The stack implementation and tests came from architecture-kit at `7883543`.
