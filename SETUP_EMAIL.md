# Email Setup Instructions

## Frontend-Only Email System (Web3Forms)

The contact form now uses **Web3Forms** — a free, secure email service that works without a backend.

---

## Setup Steps

### 1. Get Your Free API Key

1. Go to [https://web3forms.com](https://web3forms.com)
2. Enter your email address where you want to receive messages
3. Click "Get Access Key"
4. Copy your access key

### 2. Add API Key to form.js

Open `js/form.js` and replace:

```javascript
access_key: "YOUR_ACCESS_KEY_HERE"
```

with:

```javascript
access_key: "your-actual-key-from-web3forms"
```

### 3. Test the Form

1. Open `index.html` in a browser
2. Fill out the contact form
3. Submit
4. Check your email for the message

---

## What Changed

✅ **Removed**: PHP backend dependency (mail.php)  
✅ **Added**: Web3Forms API integration  
✅ **Works on**: Static hosting (GitHub Pages, Netlify, Vercel, etc.)  
✅ **No server required**

---

## Files You Can Delete

Once everything works, you can remove:

- `mail.php`
- `phpmailer/` folder (entire directory)

**Note**: Keep these files if you might want to switch back to PHP in the future.

---

## Features

- ✅ Free tier: 250 submissions/month
- ✅ Spam protection built-in
- ✅ Email notifications
- ✅ No backend required
- ✅ Works on static hosts
- ✅ GDPR compliant

---

## Troubleshooting

**Form doesn't send?**
- Check that you replaced `YOUR_ACCESS_KEY_HERE` with your actual key
- Verify your email in Web3Forms dashboard
- Check browser console for errors

**Not receiving emails?**
- Check spam folder
- Verify email address in Web3Forms dashboard
- Test with a different email provider

**Want to customize?**
- Add more fields in the JSON body
- Customize subject line
- Add redirect after submission

---

## Alternative: Keep PHP Option

If you want both options available:

1. Keep `mail.php` in the project
2. Switch between backends by changing the fetch URL in `form.js`
3. Use PHP on servers with PHP support
4. Use Web3Forms on static hosts

---

## Security Notes

- ✅ API key is safe to expose in frontend (it's a public key)
- ✅ Web3Forms has built-in rate limiting
- ✅ Spam protection included
- ✅ No sensitive data in code

---

## Need Help?

- Web3Forms Docs: https://docs.web3forms.com
- Support: support@web3forms.com
