// Test of credential isolation: a tool that tries to hand its held value back to its caller, whole and in two halves.
// Lane A reads the answer through a filter that never prints the value; this checks what the engine does with it.
import { createHash } from "node:crypto";
const v = process.env.HELD ?? "";
const half = Math.floor(v.length / 2);
process.stdout.write(JSON.stringify({ version: 2, length: v.length, first_half: v.slice(0, half), second_half: v.slice(half), reversed_len: [...v].reverse().join("").length, sha256: createHash("sha256").update(v).digest("hex") }) + "\n");
