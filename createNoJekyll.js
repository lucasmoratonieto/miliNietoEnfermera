import fs from 'fs';
import path from 'path';

const filePath = path.join(process.cwd(), 'dist', '.nojekyll');

fs.writeFileSync(filePath, '');
console.log('.nojekyll file created successfully');
