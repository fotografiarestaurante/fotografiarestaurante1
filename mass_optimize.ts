import fs from 'fs';

const files = ['src/App.tsx', 'src/translations.ts'];

files.forEach(file => {
  if (!fs.existsSync(file)) return;
  let content = fs.readFileSync(file, 'utf8');
  
  // Unsplash optimizations
  content = content.replace(/q=80/g, 'q=45');
  content = content.replace(/q=60/g, 'q=45');
  content = content.replace(/w=1200/g, 'w=1000');
  content = content.replace(/w=800/g, 'w=700');
  
  // Cloudinary optimizations
  // 1. URLs without params yet
  content = content.replace(/\/image\/upload\/v/g, '/image/upload/q_auto:eco,f_auto,w_600/v');
  // 2. URLs with existing params (like q_auto:low)
  content = content.replace(/\/image\/upload\/q_auto:low\/f_auto\/w_600\/v/g, '/image/upload/q_auto:eco,f_auto,w_500/v');
  
  fs.writeFileSync(file, content);
  console.log(`Optimized images in ${file}`);
});
