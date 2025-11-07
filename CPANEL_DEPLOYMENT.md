# cPanel Deployment Guide for BSC Ventures

This guide explains how to deploy your React application to cPanel hosting.

## Prerequisites

- Active cPanel hosting account
- Domain configured in cPanel
- Node.js installed locally (for building)

## Build Process

### Option 1: Using the Build Script (Recommended)

```bash
node build-cpanel.js
```

This script will:
1. Clean previous builds
2. Create optimized production bundle
3. Verify all critical files
4. Generate deployment instructions

### Option 2: Manual Build

```bash
npm run build
```

### Option 3: Add to package.json (If Allowed)

If you can modify package.json, add this script:

```json
{
  "scripts": {
    "build:cpanel": "node build-cpanel.js"
  }
}
```

Then run:
```bash
npm run build:cpanel
```

## Files Generated

The build process creates a `dist` folder containing:

- **index.html** - Main entry point
- **.htaccess** - Apache configuration (routing, security, caching)
- **robots.txt** - SEO crawler directives
- **sitemap.xml** - SEO site structure
- **assets/** - Optimized JS, CSS, and images

## Upload to cPanel

### Step 1: Access File Manager

1. Log in to your cPanel account
2. Navigate to **Files** → **File Manager**
3. Go to `public_html` (or your domain's document root)

### Step 2: Backup Existing Files

1. Select all existing files
2. Click **Compress** → Create backup
3. Download backup to your computer

### Step 3: Clean Directory

1. Select all files in `public_html`
2. Click **Delete**
3. Confirm deletion

### Step 4: Upload New Files

1. Click **Upload** button
2. Select ALL files from your local `dist` folder
3. Wait for upload to complete
4. Click **Reload** to verify

**Important**: Make sure to enable "Show Hidden Files" in File Manager settings to see `.htaccess`

### Step 5: Set Permissions

Recommended permissions:
- **Files**: 644
- **Directories**: 755
- **.htaccess**: 644

To set permissions:
1. Right-click file/folder
2. Select **Change Permissions**
3. Enter appropriate values

## Verification Checklist

After deployment, verify:

- [ ] Homepage loads: `https://yourdomain.com`
- [ ] Navigation works (no 404 errors)
- [ ] Blog posts accessible: `https://yourdomain.com/blog`
- [ ] Individual articles load correctly
- [ ] robots.txt accessible: `https://yourdomain.com/robots.txt`
- [ ] sitemap.xml accessible: `https://yourdomain.com/sitemap.xml`
- [ ] HTTPS redirect works (HTTP → HTTPS)
- [ ] Browser back/forward buttons work
- [ ] Direct URL access works for all routes

## Troubleshooting

### Routes Return 404 Errors

**Cause**: `.htaccess` not uploaded or mod_rewrite disabled

**Solution**:
1. Verify `.htaccess` exists in `public_html`
2. Check File Manager settings: Enable "Show Hidden Files"
3. Contact hosting support to enable `mod_rewrite`

### Blank Page or Console Errors

**Cause**: Incorrect base path in build

**Solution**:
1. Clear browser cache
2. Check browser console for errors
3. Verify all asset files uploaded correctly

### Images Not Loading

**Cause**: Incorrect asset paths

**Solution**:
1. Verify `assets` folder uploaded
2. Check image paths in code
3. Ensure case-sensitive filenames match

### HTTPS Not Working

**Cause**: SSL certificate not installed

**Solution**:
1. Install SSL certificate in cPanel (Let's Encrypt free option)
2. Update `.htaccess` HTTPS redirect rules if needed

### Slow Loading

**Cause**: No caching or compression

**Solution**:
1. Verify `.htaccess` includes caching rules (already configured)
2. Enable Cloudflare or CDN if needed
3. Check hosting plan resources

## Update Domain in SEO Files

After deployment, update these files with your actual domain:

### public/sitemap.xml
Replace all instances of `https://bscventures.co` with your domain

### public/robots.txt
Replace `Sitemap: https://bscventures.co/sitemap.xml` with your domain

### src/components/SEO.tsx
Update the default canonical URL

## Performance Optimization

The `.htaccess` file includes:

✅ **GZIP Compression** - Reduces file sizes
✅ **Browser Caching** - Speeds up repeat visits
✅ **Security Headers** - Protects against attacks
✅ **HTTPS Redirect** - Forces secure connections

## Continuous Deployment

For updates:

1. Make changes locally
2. Run `node build-cpanel.js`
3. Upload only changed files from `dist` folder
4. Clear browser cache to see changes

## Support

If you encounter issues:

1. Check cPanel error logs: **Metrics** → **Errors**
2. Review browser console for JavaScript errors
3. Contact hosting support for server configuration
4. Check that PHP version is compatible (if using PHP)

## Additional Resources

- [cPanel Documentation](https://docs.cpanel.net/)
- [Apache mod_rewrite Guide](https://httpd.apache.org/docs/current/mod/mod_rewrite.html)
- [React Router on Apache](https://reactrouter.com/web/guides/philosophy)

---

**Note**: This configuration is optimized for shared cPanel hosting. For VPS or dedicated servers, additional optimizations are possible.
