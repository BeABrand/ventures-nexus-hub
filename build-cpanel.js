#!/usr/bin/env node

/**
 * cPanel Deployment Build Script
 * This script builds the React app for cPanel hosting
 */

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🚀 Starting cPanel build process...\n');

try {
  // Step 1: Clean previous build
  console.log('📦 Cleaning previous build...');
  if (fs.existsSync('dist')) {
    fs.rmSync('dist', { recursive: true, force: true });
  }

  // Step 2: Run Vite build
  console.log('🔨 Building production bundle...');
  execSync('npm run build', { stdio: 'inherit' });

  // Step 3: Verify critical files
  console.log('\n✅ Verifying deployment files...');
  
  const criticalFiles = [
    'dist/index.html',
    'dist/.htaccess',
    'dist/robots.txt',
    'dist/sitemap.xml'
  ];

  let allFilesPresent = true;
  criticalFiles.forEach(file => {
    if (fs.existsSync(file)) {
      console.log(`   ✓ ${file}`);
    } else {
      console.log(`   ✗ ${file} - MISSING!`);
      allFilesPresent = false;
    }
  });

  if (!allFilesPresent) {
    throw new Error('Some critical files are missing from the build!');
  }

  // Step 4: Create deployment instructions
  const deploymentGuide = `
╔════════════════════════════════════════════════════════════════╗
║           cPanel Deployment - Ready to Upload! 🎉             ║
╚════════════════════════════════════════════════════════════════╝

📁 Build Location: ./dist

📤 Upload Instructions:
   1. Log in to your cPanel account
   2. Open "File Manager"
   3. Navigate to public_html (or your domain's root directory)
   4. Delete all existing files in the directory (BACKUP FIRST!)
   5. Upload ALL contents from the 'dist' folder
   6. Ensure .htaccess file is uploaded (enable "Show Hidden Files")
   7. Set proper permissions (644 for files, 755 for directories)

✅ Included Files:
   • index.html (main entry point)
   • .htaccess (URL rewriting & security)
   • robots.txt (SEO crawler instructions)
   • sitemap.xml (SEO site structure)
   • All compiled assets (JS, CSS, images)

🔍 Verification:
   After upload, visit your domain and check:
   • Homepage loads correctly
   • Navigation works (no 404 errors)
   • Blog posts are accessible
   • robots.txt is accessible: yourdomain.com/robots.txt
   • sitemap.xml is accessible: yourdomain.com/sitemap.xml

⚠️  Important Notes:
   • Make sure Apache mod_rewrite is enabled
   • If routes don't work, check .htaccess is uploaded
   • Clear browser cache if changes don't appear
   • Update sitemap.xml URLs to match your domain

🌐 Your site will be live at: https://bscventures.co
`;

  console.log(deploymentGuide);

  // Save deployment guide
  fs.writeFileSync('dist/DEPLOYMENT_GUIDE.txt', deploymentGuide);

  console.log('\n✨ Build completed successfully!\n');
  console.log('📝 Deployment guide saved to: dist/DEPLOYMENT_GUIDE.txt\n');

} catch (error) {
  console.error('\n❌ Build failed:', error.message);
  process.exit(1);
}
