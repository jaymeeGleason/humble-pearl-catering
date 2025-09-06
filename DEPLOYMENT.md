# Humble Pearl Catering - Deployment Guide

## 🚀 Quick Deploy Options

### Option 1: Netlify (Recommended)
1. **Go to [netlify.com](https://netlify.com)**
2. **Sign up/Login** with GitHub
3. **Drag & Drop** the `client/build` folder
4. **Get instant URL** like `amazing-name-123456.netlify.app`
5. **Add custom domain** in Site Settings → Domain Management

### Option 2: Vercel
1. **Go to [vercel.com](https://vercel.com)**
2. **Sign up/Login** with GitHub
3. **Import Project** from your GitHub repo
4. **Auto-deploy** from main branch
5. **Add custom domain** in Project Settings

### Option 3: GitHub Pages
1. **Go to your repo:** https://github.com/jaymeeGleason/humble-pearl-catering
2. **Settings** → **Pages**
3. **Source:** Deploy from a branch
4. **Branch:** main, folder: / (root)
5. **Save** and wait for deployment

## 🌍 Domain Setup (humblepearl.com)

### Step 1: Purchase Domain
- **Go to:** [networksolutions.com](https://networksolutions.com)
- **Search:** humblepearl.com
- **Purchase** the domain
- **Complete registration**

### Step 2: Configure DNS Records

#### For Netlify:
```
Type: A Record
Name: @
Value: 75.2.60.5

Type: CNAME
Name: www
Value: your-site-name.netlify.app
```

#### For Vercel:
```
Type: A Record
Name: @
Value: 76.76.19.61

Type: CNAME
Name: www
Value: your-site-name.vercel.app
```

#### For GitHub Pages:
```
Type: CNAME
Name: www
Value: jaymeeGleason.github.io

Type: A Record
Name: @
Value: 185.199.108.153
Type: A Record
Name: @
Value: 185.199.109.153
Type: A Record
Name: @
Value: 185.199.110.153
Type: A Record
Name: @
Value: 185.199.111.153
```

## 🔧 Local Testing

Test your production build locally:
```bash
cd client
npx serve -s build
```

## 📱 SSL Certificate
- **Netlify/Vercel:** Automatic SSL
- **GitHub Pages:** Automatic SSL
- **Custom domains:** SSL provided by hosting service

## 🎯 Recommended Workflow

1. **Deploy to Netlify** (easiest option)
2. **Get free subdomain** working first
3. **Purchase humblepearl.com** from Network Solutions
4. **Add custom domain** to Netlify
5. **Update DNS** records
6. **Wait 24-48 hours** for DNS propagation
7. **Test** your live site!

## 🆘 Troubleshooting

### DNS Not Working?
- **Wait 24-48 hours** for full propagation
- **Check DNS propagation:** [whatsmydns.net](https://whatsmydns.net)
- **Clear browser cache**
- **Try incognito mode**

### Domain Not Connecting?
- **Verify DNS records** are correct
- **Check domain status** in Network Solutions
- **Contact hosting provider** support

## 📞 Support Contacts

- **Netlify Support:** [netlify.com/support](https://netlify.com/support)
- **Vercel Support:** [vercel.com/help](https://vercel.com/help)
- **Network Solutions:** 1-888-642-9675

---

**Your beautiful Humble Pearl Catering website is ready to go live! 🍽️✨**
