🚀 Startup Mentor AI

Startup Mentor AI is a premium, high-fidelity mentorship platform built for founders and entrepreneurs.
It delivers persona-driven strategic guidance by simulating the mental models, decision frameworks, and engineering philosophies of legendary technology leaders such as Elon Musk, Sundar Pichai, Sam Altman, and others.

Powered by Google Gemini, the platform enables real-time strategic conversations, technical stack recommendations, and actionable growth roadmaps—tailored to how world-class builders actually think.

✨ Core Features
🧠 Legendary Mentor Personas

Interact with AI-driven simulations of iconic founders and CEOs, each optimized for their unique thinking style:

First-principles reasoning

Customer obsession

Platform-scale thinking

Rapid experimentation and iteration

📊 Strategic Dossiers

Receive deep-dive analyses of your startup idea through different leadership lenses:

Vision validation

Market positioning

Product-market fit

Long-term defensibility

💬 Real-Time Strategic Chat

A fast, streaming chat experience powered by the @google/genai SDK, designed for natural, high-signal conversations.

🧩 Technical Blueprints

Personalized technology stack recommendations aligned with mentor philosophies:

Frontend

Backend

AI/ML

Databases & Infrastructure

🎨 Modern UI / UX

A clean, minimal, Google-inspired interface built with:

React 19

Tailwind CSS

Emoji-driven and SVG-based visuals

🛠️ Technology Stack
Layer	Technology
Frontend	React 19 (ES6+ Modules)
Styling	Tailwind CSS (via CDN for rapid iteration)
AI Engine	Google Gemini 3
SDK	@google/genai
Assets	Custom SVGs & emoji icons
Image Proxy	Weserv.nl (high-performance image optimization)
🚀 Run Locally
1️⃣ Prerequisites

Node.js: v18 or higher

Gemini API Key: Get one from Google AI Studio

2️⃣ Project Structure
startup-mentor-ai/
├─ index.html        # App entry point
├─ src/
│  ├─ index.tsx      # React root
│  ├─ App.tsx        # Core application logic
│  ├─ components/    # Reusable UI components
│  └─ services/      # Gemini API integration

3️⃣ Setup with Vite (Recommended)

Vite provides fast startup, modern ESM support, and environment variable handling.

Step 1: Create the project
npm create vite@latest startup-mentor-ai -- --template react-ts
cd startup-mentor-ai

Step 2: Add project files

Replace the contents of the src/ directory with the provided project files.
Ensure index.html remains in the root directory.

Step 3: Install Gemini SDK
npm install @google/genai

Step 4: Configure Environment Variables

Create a .env file in the project root:

VITE_GEMINI_API_KEY=your_api_key_here


Note:
If the code references process.env.API_KEY, update it to:

import.meta.env.VITE_GEMINI_API_KEY


inside geminiService.ts.

Step 5: Start the development server
npm run dev

