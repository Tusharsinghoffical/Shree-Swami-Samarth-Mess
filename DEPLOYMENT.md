# 🚀 Render Deployment Guide - Shree Swami Samarth Mess

## ✅ Prerequisites

1. **Git Repository**: Your code should be in a Git repository (GitHub or GitLab)
2. **Render Account**: Sign up at [render.com](https://render.com)
3. **Gemini API Key**: Get your API key from [Google AI Studio](https://aistudio.google.com/)

---

## 📋 Step-by-Step Deployment Instructions

### Step 1: Push Code to GitHub/GitLab

```bash
# Initialize git if not already done
git init
git add .
git commit -m "Initial commit for Render deployment"

# Add your remote repository (replace with your repo URL)
git remote add origin https://github.com/yourusername/shree-swami-samarth-mess.git

# Push to main/master branch
git push -u origin main
```

### Step 2: Create Render Blueprint

1. **Go to Render Dashboard**
   - Visit: https://dashboard.render.com
   - Sign in with your GitHub/GitLab account

2. **Create New Blueprint**
   - Click **"New +"** button
   - Select **"Blueprint"**
   - Choose **"Connect a repository"**

3. **Connect Your Repository**
   - Select your repository from the list
   - Render will automatically detect the `render.yaml` file
   - Click **"Apply"**

### Step 3: Configure Environment Variables

After connecting the repository, you need to set these environment variables:

1. In the Render dashboard, go to your service
2. Click on **"Environment"** tab
3. Add the following variables:

   ```
   GEMINI_API_KEY = your_actual_gemini_api_key_here
   APP_URL = https://your-app-name.onrender.com (will be auto-generated after first deploy)
   ```

4. Click **"Save Changes"**

### Step 4: Deploy

1. **Automatic Deployment**
   - Render will automatically start building and deploying your app
   - You can see the build logs in real-time

2. **Manual Redeploy** (if needed)
   - Go to your service dashboard
   - Click **"Manual Deploy"**
   - Select the branch and click **"Deploy"**

---

## 🔧 Configuration Details

### Build Settings
- **Build Command**: `npm install; npm run build`
- **Publish Directory**: `./dist`
- **Node Version**: 20

### Auto-Deploy
- Every push to the connected branch will trigger automatic deployment
- You can see deployment history in the Render dashboard

---

## 🌐 Access Your Deployed App

Once deployment is complete:
- Your app will be live at: `https://shree-swami-samarth-mess.onrender.com`
- Or your custom domain if configured

---

## 🛠️ Troubleshooting

### Build Fails
1. Check build logs in Render dashboard
2. Verify all dependencies in `package.json`
3. Run `npm run build` locally to test

### Environment Variables Not Working
1. Ensure variables are set in Render dashboard
2. Restart the service after adding variables
3. Check variable names match exactly (case-sensitive)

### App Shows Blank Page
1. Check browser console for errors
2. Verify `APP_URL` environment variable is set correctly
3. Check CORS settings if using APIs

---

## 📊 Monitoring

- **Logs**: View real-time logs in Render dashboard
- **Metrics**: Monitor CPU, memory, and request stats
- **Alerts**: Set up notifications for failures

---

## 💰 Pricing

Render offers:
- **Free Tier**: Limited resources, spins down after inactivity
- **Paid Plans**: Starting at $7/month for always-on services

---

## 🔗 Useful Links

- Render Docs: https://render.com/docs
- Static Site Hosting: https://render.com/docs/static-sites
- Environment Variables: https://render.com/docs/environment-variables
- Community Forum: https://community.render.com

---

## 🎯 Quick Commands

```bash
# Test build locally
npm run build

# Preview build locally
npm run preview

# Run deployment script
bash .render-deploy.sh
```

---

## ✨ Features Configured

- ✅ Automatic HTTPS
- ✅ Global CDN
- ✅ DDoS Protection
- ✅ Security Headers
- ✅ Auto-deploy on git push
- ✅ Build logs and monitoring

---

**Need Help?** Check Render's documentation or contact their support!

Good luck with your deployment! 🎉
