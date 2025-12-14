# AWS Polly Text-to-Speech Converter 🎤

A cloud-based **Text-to-Speech (TTS) web application** built using **AWS Polly** and **Next.js**.
This project converts user-provided text into **natural, human-like speech** using neural voices and allows users to **listen to and download audio in MP3 format**.

---

## 📌 Project Overview

The AWS Polly Text-to-Speech Converter is designed to provide a **fast, secure, and user-friendly platform** for generating speech from text.
It supports **Indian and English voices**, runs on cloud infrastructure, and demonstrates practical usage of **AWS AI services** without complex server management.

---

## 🎯 Objectives

* Convert written text into high-quality speech
* Demonstrate real-world usage of **AWS Polly**
* Provide a simple and responsive web interface
* Enable audio playback and MP3 download
* Ensure secure handling of AWS credentials

---

## 🚀 Features

* ✅ Text-to-Speech conversion using AWS Polly
* ✅ Neural voices (Hindi & English)
* ✅ MP3 audio output
* ✅ Listen and download generated audio
* ✅ Clean and responsive UI
* ✅ Secure backend API
* ❌ No user data storage (privacy-focused)

---

## 🛠️ Tools & Technologies Used

### Frontend

* **Next.js (React)**
* **TypeScript**
* **Tailwind CSS**
* **Lucide Icons**

### Backend

* **Next.js API Routes**
* **AWS SDK for JavaScript (v3)**

### AWS Services

* **Amazon Polly** – Neural Text-to-Speech
* **IAM** – Secure access control

### Deployment

* **AWS EC2 (Ubuntu Server)**
* **Node.js**
* **Public IPv4 access via Security Groups**

---

## 🧩 Project Architecture (High Level)

1. User enters text in the web UI
2. Frontend sends a POST request to backend API
3. Backend validates input and voice selection
4. AWS Polly converts text to speech
5. Audio stream is returned as Base64 MP3
6. Frontend plays and allows download of audio

---

## 🔐 Environment Variables

AWS credentials are **not stored in GitHub**.

Create a `.env.local` file on the server:

```env
AWS_REGION=ap-south-1
AWS_ACCESS_KEY_ID=YOUR_ACCESS_KEY
AWS_SECRET_ACCESS_KEY=YOUR_SECRET_KEY
```

> ⚠️ Never commit `.env` files to GitHub.

---

## ▶️ How to Run Locally

```bash
npm install
npm run dev
```

Open:

```
http://localhost:3000
```

---

## 🌍 Deployment (EC2)

* Ubuntu Server on AWS EC2
* Node.js installed
* Project runs on a public IPv4 address
* Security Group allows application port access
* App listens on `0.0.0.0` for public access

---

## 📊 Output

* 🎧 Users can listen to generated speech directly in the browser
* ⬇️ Users can download the audio in MP3 format
* 🎙️ Users can switch between different voice tones

---

## 📌 Limitations

* No user login or history storage
* Limited number of AWS Polly voices
* No SSML-based customization (current version)

---

## 🔮 Future Scope

* Add more AWS Polly voices and languages
* Implement SSML for advanced speech control
* Store generated audio in AWS S3
* Add user accounts and history
* Deploy with a custom domain and HTTPS

---

## 📚 References

* AWS Polly Documentation
  [https://docs.aws.amazon.com/polly/](https://docs.aws.amazon.com/polly/)
* AWS SDK for JavaScript
  [https://docs.aws.amazon.com/sdk-for-javascript/](https://docs.aws.amazon.com/sdk-for-javascript/)
* Next.js Documentation
  [https://nextjs.org/docs](https://nextjs.org/docs)


Just tell me 👍
