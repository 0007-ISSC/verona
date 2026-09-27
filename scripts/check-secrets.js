// Scans staged + working-tree files for likely secrets. Fails if found.
const { execSync } = require('child_process');
const PATTERNS = [
  /sk-[A-Za-z0-9]{16,}/, /ghp_[A-Za-z0-9]{20,}/, /gho_[A-Za-z0-9]{20,}/,
  /xox[bpas]-[A-Za-z0-9-]{10,}/, /AKIA[0-9A-Z]{16}/,
  /-----BEGIN (RSA )?PRIVATE KEY-----/,
  /api[_-]?key\s*[:=]\s*['"][^'"]{8,}['"]/i,
  /password\s*[:=]\s*['"][^'"]{4,}['"]/i,
];
function files() {
  try {
    return execSync('git diff --cached --name-only --diff-filter=ACM; git diff --name-only', { encoding: 'utf8' })
      .split('\n').map(s => s.trim()).filter(Boolean);
  } catch { return []; }
}
const fs = require('fs');
let bad = 0;
for (const f of files()) {
  if (f === '.env' || f.endsWith('/.env')) { console.error(`BLOCKED: ${f} must never be committed`); bad++; continue; }
  let content; try { content = fs.readFileSync(f, 'utf8'); } catch { continue; }
  PATTERNS.forEach((re) => { if (re.test(content)) { console.error(`Possible secret in ${f} matching ${re}`); bad++; } });
}
if (bad) { console.error('check-secrets FAILED'); process.exit(1); }
console.log('check-secrets OK');
