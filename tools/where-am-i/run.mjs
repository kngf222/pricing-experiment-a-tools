// Says which computer, project and process ran it (no user lookup, so it runs in any sandbox).
import { hostname, platform, networkInterfaces } from "node:os";
let raw = "";
for await (const chunk of process.stdin) raw += chunk;
const input = raw.trim() ? JSON.parse(raw) : {};
let addresses; try { addresses = Object.values(networkInterfaces()).flat().filter((a) => a && a.family === "IPv4" && !a.internal).map((a) => a.address); } catch (e) { addresses = `unavailable: ${e.code}`; }
process.stdout.write(JSON.stringify({ tool: "where-am-i", project: "pricing-experiment-a-tools", version: 4, hostname: hostname(), platform: platform(), arch: process.arch, addresses, pid: process.pid, at: new Date().toISOString(), note: input.note ?? null }) + "\n");
