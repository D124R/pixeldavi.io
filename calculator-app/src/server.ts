import express from 'express';
import fs from 'fs';
import path from 'path';

const app = express();
const port = Number(process.env.PORT ?? 3000);
const distPath = path.join(process.cwd(), 'dist', 'public');
const srcPath = path.join(process.cwd(), 'src', 'public');
const publicPath = fs.existsSync(distPath) ? distPath : srcPath;

app.use(express.json());
app.use(express.static(publicPath));

function sanitizeExpression(expression: string): string {
  const cleaned = expression.replace(/\s+/g, '');
  if (!/^[0-9+\-*/().]+$/.test(cleaned)) {
    throw new Error('Expression contains invalid characters.');
  }
  if (/[-+*/]{2,}/.test(cleaned)) {
    throw new Error('Expression is malformed.');
  }
  return cleaned;
}

function evaluateExpression(expression: string): number {
  const sanitized = sanitizeExpression(expression);
  const result = new Function(`"use strict"; return (${sanitized});`)();
  if (typeof result !== 'number' || Number.isNaN(result) || !Number.isFinite(result)) {
    throw new Error('Expression could not be evaluated.');
  }
  return result;
}

app.post('/api/calculate', (req, res) => {
  const expression = String(req.body.expression ?? '').trim();

  if (!expression) {
    return res.status(400).json({ error: 'Expression is required.' });
  }

  try {
    const value = evaluateExpression(expression);
    return res.json({ expression, result: value });
  } catch (error) {
    return res.status(400).json({ error: error instanceof Error ? error.message : 'Invalid expression.' });
  }
});

app.get('*', (_req, res) => {
  res.sendFile(path.join(publicPath, 'index.html'));
});

app.listen(port, () => {
  console.log(`Calculator server is running at http://localhost:${port}`);
});
