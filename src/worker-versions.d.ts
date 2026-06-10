/**
 * Type surface for the `virtual:worker-versions` module. The module has no real
 * file — it is generated at dev/build time by
 * [tools/vite-plugin-worker-version.ts](../tools/vite-plugin-worker-version.ts).
 * tsc resolves the bare `virtual:worker-versions` specifier HERE via the `paths`
 * entry in tsconfig.app.json (the repo's `@/*` / `@app-config` convention); an
 * ambient `declare module` in vite-env.d.ts is NOT honored under bundler
 * resolution — see [[project_tsc_module_aliases_need_paths]].
 */

/** Per-worker content hashes keyed by the `WorkerSpec.key` registered in the
 *  worker-version plugin. Each value is a 16-char hash of that worker's sources,
 *  or the literal `'prod'` in production builds. Consumers suffix their Worker
 *  `name` with the relevant entry to bust a stale instance on dev rebuilds. */
export const workerVersions: Record<string, string>;
