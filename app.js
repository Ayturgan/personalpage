// --- SLEEK INLINE HIGH-FIDELITY SVGs ---
    const svgIcons = {
      soundOn: `<svg class="btn-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path></svg>`,
      soundOff: `<svg class="btn-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><line x1="23" y1="9" x2="17" y2="15"></line><line x1="17" y1="9" x2="23" y2="15"></line></svg>`,
      print: `<svg class="btn-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 6 2 18 2 18 9"></polyline><path d="M6 18H4a2 2 0 0 0-2 2v-5a2 2 0 0 0 2-2h16a2 2 0 0 0 2 2v5a2 2 0 0 0-2 2h-2"></path><rect x="6" y="14" width="12" height="8"></rect></svg>`,
      pdf: `<svg class="btn-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>`,
      
      email: `<svg class="contact-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>`,
      phone: `<svg class="contact-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>`,
      location: `<svg class="contact-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>`,
      github: `<svg class="contact-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>`,
      
      folder: `<svg class="file-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>`,
      file: `<svg class="file-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"></path><polyline points="13 2 13 9 20 9"></polyline></svg>`,
      filePy: `<svg class="file-icon accent-py" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"></path><polyline points="13 2 13 9 20 9"></polyline><circle cx="9" cy="14" r="1.5"></circle><circle cx="15" cy="14" r="1.5"></circle></svg>`,

      python: `<svg class="item-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>`,
      fastapi: `<svg class="item-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>`,
      django: `<svg class="item-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="9" y1="9" x2="15" y2="15"></line><line x1="15" y1="9" x2="9" y2="15"></line></svg>`,
      react: `<svg class="item-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(30 12 12)"></ellipse><ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(90 12 12)"></ellipse><ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(150 12 12)"></ellipse><circle cx="12" cy="12" r="1.5" fill="currentColor"></circle></svg>`,
      postgresql: `<svg class="item-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path><path d="M3 12c0 1.66 4 3 9 3s9-1.34 9-3"></path></svg>`,
      redis: `<svg class="item-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="6" rx="1"></rect><rect x="3" y="11" width="18" height="6" rx="1"></rect><rect x="3" y="19" width="18" height="2" rx="1"></rect></svg>`,
      docker: `<svg class="item-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>`,
      nginx: `<svg class="item-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="16"></line><line x1="8" y1="12" x2="16" y2="12"></line></svg>`,
      linux: `<svg class="item-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="10" rx="2"></rect><path d="M12 2a5 5 0 0 0-5 5v4h10V7a5 5 0 0 0-5-5z"></path></svg>`,
      scrapy: `<svg class="item-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path><path d="M2 12h20"></path></svg>`,
      telegram: `<svg class="item-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>`,
      payments: `<svg class="item-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect><line x1="1" y1="10" x2="23" y2="10"></line></svg>`,
      cicd: `<svg class="item-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21.5 2v6h-6M21.34 15.57a10 10 0 1 1-.57-8.38l5.67-5.67"></path></svg>`,
      unreal: `<svg class="item-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><polygon points="10 8 16 12 10 16 10 8"></polygon></svg>`,
      typescript: `<svg class="item-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="16" rx="2"></rect><path d="M8 9h8M12 9v8M9 17h6"></path></svg>`,
      javascript: `<svg class="item-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="16" rx="2"></rect><path d="M10 9v6a2 2 0 0 1-2 2M14 15c0 1.1.9 2 2 2s2-.9 2-2c0-2-4-1.5-4-4 0-1.1.9-2 2-2s2 .9 2 2"></path></svg>`,
      nextjs: `<svg class="item-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"></circle><path d="M9 15V9l6 6V9"></path></svg>`,
      tailwind: `<svg class="item-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 9c2-3 4-4 6-4 3 0 4 2 5 4 1 2 2 4 5 4"></path><path d="M4 15c2-3 4-4 6-4 3 0 4 2 5 4 1 2 2 4 5 4"></path></svg>`,
      flask: `<svg class="item-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10 3h4"></path><path d="M10 3v4l-5 8a4 4 0 0 0 3.4 6h7.2A4 4 0 0 0 19 15l-5-8V3"></path><path d="M8 13h8"></path></svg>`,
      express: `<svg class="item-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 7h14"></path><path d="M5 12h10"></path><path d="M5 17h14"></path><path d="M17 9l2 3-2 3"></path></svg>`,
      sqlalchemy: `<svg class="item-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="12" cy="6" rx="7" ry="3"></ellipse><path d="M5 6v6c0 1.7 3.1 3 7 3s7-1.3 7-3V6"></path><path d="M5 12v6c0 1.7 3.1 3 7 3s7-1.3 7-3v-6"></path></svg>`,
      openai: `<svg class="item-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3l4 2.5v5L12 13l-4-2.5v-5L12 3z"></path><path d="M8 10.5v5L12 18l4-2.5v-5"></path><path d="M6 8l-2 3.5L6 15"></path><path d="M18 8l2 3.5-2 3.5"></path></svg>`,
      pytorch: `<svg class="item-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3v4"></path><path d="M16.5 7.5A6.5 6.5 0 1 1 9 6"></path><circle cx="12" cy="12" r="2"></circle></svg>`,
      playwright: `<svg class="item-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="14" rx="2"></rect><path d="M8 20h8"></path><path d="M9 9h6"></path><path d="M9 13h4"></path></svg>`,
      aiogram: `<svg class="item-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 5L3 12l7 2 2 7 9-16z"></path><path d="M10 14l4-4"></path></svg>`,
      yandex: `<svg class="item-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8 4h8"></path><path d="M12 4v8"></path><path d="M8 20l4-8 4 8"></path></svg>`,
      livekit: `<svg class="item-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 16l4-4 3 3 5-5 4 4"></path><path d="M4 8l4 4 3-3 5 5 4-4"></path></svg>`,
      websocket: `<svg class="item-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 8l-4 4 4 4"></path><path d="M17 8l4 4-4 4"></path><path d="M10 19l4-14"></path></svg>`,
      nodejs: `<svg class="item-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3l7 4v10l-7 4-7-4V7l7-4z"></path><path d="M9.5 9.5v5"></path><path d="M14.5 9.5c1.2 0 2 .8 2 2v3"></path><path d="M14.5 9.5c-1.2 0-2 .8-2 2v3"></path></svg>`,
      mysql: `<svg class="item-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 18c0-5 3-9 8-12"></path><path d="M5 14c3-1 6-1 9 1"></path><path d="M13 17c2 0 4 .7 6 2"></path><path d="M9 9c2 0 4 .7 6 2"></path></svg>`,
      sqlite: `<svg class="item-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 4h12v16H6z"></path><path d="M9 8h6"></path><path d="M9 12h6"></path><path d="M9 16h4"></path></svg>`,
      bootstrap: `<svg class="item-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="4" width="16" height="16" rx="3"></rect><path d="M10 8h3a2 2 0 0 1 0 4h-3z"></path><path d="M10 12h3.5a2 2 0 0 1 0 4H10z"></path></svg>`,
      git: `<svg class="item-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3l9 9-9 9-9-9 9-9z"></path><circle cx="9" cy="9" r="1"></circle><circle cx="15" cy="15" r="1"></circle><path d="M10 10l4 4"></path><path d="M9 9v6"></path></svg>`,
      postman: `<svg class="item-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="8"></circle><path d="M10 14l6-6"></path><path d="M13 8h3v3"></path></svg>`,
      selenium: `<svg class="item-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3l7 4v10l-7 4-7-4V7l7-4z"></path><path d="M9 12l2 2 4-4"></path></svg>`,
      digitalocean: `<svg class="item-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="10" r="5"></circle><path d="M7 18h5"></path><path d="M7 14h3"></path><path d="M7 22h7"></path></svg>`,
      githubpages: `<svg class="item-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 5h16v14H4z"></path><path d="M8 9h8"></path><path d="M8 13h5"></path><path d="M8 17h3"></path></svg>`,
      restapi: `<svg class="item-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 7h16"></path><path d="M4 12h10"></path><path d="M4 17h16"></path><circle cx="18" cy="12" r="2"></circle></svg>`
    };

    // --- BILINGUAL DATA OBJECT ---
    const resume = {
      contacts: [
        { icon: "email", label: { en: "Email", ru: "Email" }, value: "karagulovaayturgan@gmail.com", href: "mailto:karagulovaayturgan@gmail.com" },
        { icon: "phone", label: { en: "Phone", ru: "Телефон" }, value: "+996 707 759 955", href: "tel:+996707759955" },
        { icon: "location", label: { en: "Location", ru: "Локация" }, value: { en: "Bishkek, Kyrgyzstan", ru: "Бишкек, Кыргызстан" } },
        { icon: "github", label: { en: "GitHub", ru: "GitHub" }, value: "github.com/Ayturgan", href: "https://github.com/Ayturgan" }
      ],
      focusGroups: {
        en: [
          { title: "Languages", tone: "language", items: ["Python", "PHP", "JavaScript", "TypeScript", "SQL", "Dart", "MQL5"] },
          { title: "Backend & APIs", tone: "backend", items: ["Django", "Django REST Framework", "FastAPI", "Flask", "Laravel", "REST APIs", "WebSockets"] },
          { title: "Web & Mobile", tone: "frontend", items: ["React", "Vue", "Nuxt", "Vite", "Flutter", "HTML", "CSS"] },
          { title: "Data & Queues", tone: "data", items: ["PostgreSQL", "PostGIS", "MySQL", "SQLite", "Redis", "Celery", "Elasticsearch"] },
          { title: "AI, Speech & Vision", tone: "ai", items: ["OpenAI", "Ollama", "Faster-Whisper", "XTTS", "OpenCV", "MediaPipe", "LiveKit"] },
          { title: "Scraping & QA", tone: "automation", items: ["Scrapy", "Playwright", "Pytest", "PHPUnit", "Postman"] },
          { title: "AI Coding Agents", tone: "platform", items: ["OpenAI Codex", "OpenCode", "Antigravity", "Aider", "GitHub Copilot", "ChatGPT", "Gemini"] },
          { title: "Infrastructure", tone: "infra", items: ["Docker", "Docker Compose", "Nginx", "Linux", "Git", "GitHub Actions"] }
        ],
        ru: [
          { title: "Языки", tone: "language", items: ["Python", "PHP", "JavaScript", "TypeScript", "SQL", "Dart", "MQL5"] },
          { title: "Backend и API", tone: "backend", items: ["Django", "Django REST Framework", "FastAPI", "Flask", "Laravel", "REST API", "WebSockets"] },
          { title: "Web и мобильная разработка", tone: "frontend", items: ["React", "Vue", "Nuxt", "Vite", "Flutter", "HTML", "CSS"] },
          { title: "Данные и очереди", tone: "data", items: ["PostgreSQL", "PostGIS", "MySQL", "SQLite", "Redis", "Celery", "Elasticsearch"] },
          { title: "ИИ, речь и компьютерное зрение", tone: "ai", items: ["OpenAI", "Ollama", "Faster-Whisper", "XTTS", "OpenCV", "MediaPipe", "LiveKit"] },
          { title: "Парсинг и тестирование", tone: "automation", items: ["Scrapy", "Playwright", "Pytest", "PHPUnit", "Postman"] },
          { title: "ИИ-агенты для разработки", tone: "platform", items: ["OpenAI Codex", "OpenCode", "Antigravity", "Aider", "GitHub Copilot", "ChatGPT", "Gemini"] },
          { title: "Инфраструктура", tone: "infra", items: ["Docker", "Docker Compose", "Nginx", "Linux", "Git", "GitHub Actions"] }
        ]
      },
      experience: {
        en: [
          {
            role: "Python Backend Developer",
            company: ".beam",
            period: "Jun 2025 - Oct 2026",
            location: "Company",
            bullets: [
              "Developed and maintained production backend services and administrative tools across several products.",
              "Worked on the SpecTech Django/PostGIS platform for equipment and freight orders, including order responses and role-aware administration.",
              "Hardened Celery/Redis task handling so broker failures would not block order flows, and added regression coverage.",
              "Supported Docker releases, production fixes, and server operations."
            ]
          },
          {
            role: "Python Developer - Client Prototype",
            company: "PhotoBeautyBot",
            period: "Nov 2024 - Apr 2025",
            location: "Commercial Prototype",
            bullets: [
              "Built a Telegram photo-processing bot with guided upload flows, image filters, and media handling.",
              "The prototype was ready for client delivery; the client stopped the project before launch."
            ]
          },
          {
            role: "Full-Stack Developer - Client Prototype",
            company: "ZyloCoin",
            period: "Jun 2023 - Aug 2024",
            location: "Commercial Prototype",
            bullets: [
              "Built a Telegram Mini App with React, Django, user profiles, tasks, referral flows, and TON Connect wallet interfaces.",
              "The client stopped the project before public launch."
            ]
          },
          {
            role: "Python Developer - Freelance",
            company: "Self-employed",
            period: "Oct 2022 - May 2023",
            location: "Freelance",
            bullets: [
              "Built REST APIs using FastAPI and Django for client projects and internal tools.",
              "Created Telegram bots for automation, integrations, and parsing tasks.",
              "Delivered backend features and Telegram bots for client projects."
            ]
          }
        ],
        ru: [
          {
            role: "Python Backend Developer",
            company: ".beam",
            period: "Июнь 2025 - Октябрь 2026",
            location: "Компания",
            bullets: [
              "Разрабатывала и поддерживала production backend-сервисы и административные инструменты нескольких продуктов.",
              "Работала над платформой SpecTech на Django/PostGIS: API заказов спецтехники и перевозок, отклики исполнителей и администрирование с учётом ролей.",
              "Укрепила обработку задач Celery/Redis, чтобы сбои брокера не блокировали сценарии заказов, и добавила регрессионное покрытие.",
              "Поддерживала Docker-релизы, исправления production-ошибок и серверную эксплуатацию."
            ]
          },
          {
            role: "Python-разработчица - клиентский прототип",
            company: "PhotoBeautyBot",
            period: "Ноябрь 2024 - Апрель 2025",
            location: "Коммерческий прототип",
            bullets: [
              "С нуля создала Telegram-бота для обработки фото: сценарии загрузки, меню, фильтры и сохранение изображений.",
              "Прототип был подготовлен к передаче, но заказчик остановил проект до запуска."
            ]
          },
          {
            role: "Full-Stack Developer - клиентский прототип",
            company: "ZyloCoin",
            period: "Июнь 2023 - Август 2024",
            location: "Коммерческий прототип",
            bullets: [
              "С нуля создала Telegram Mini App на React и Django: профили, задания, реферальные сценарии и интерфейс кошелька с TON Connect.",
              "Заказчик остановил коммерческий проект до публичного запуска."
            ]
          },
          {
            role: "Python Developer - фриланс",
            company: "Самозанятость",
            period: "Октябрь 2022 - Май 2023",
            location: "Фриланс",
            bullets: [
              "Разрабатывала REST API на FastAPI и Django для клиентских задач и внутренних инструментов.",
              "Создавала Telegram-ботов для автоматизации, интеграций и парсинга.",
              "Доводила backend-решения до рабочего состояния end-to-end, включая деплой."
            ]
          }
        ]
      },
      projects: {
        en: [
          {
            name: "SpecTech",
            description: "Production marketplace for special equipment, freight and service crews. My backend work covered order and responder APIs, role-aware admin flows, Celery/Redis failure handling, and regression tests.",
            tags: ["Commercial", "Production", "Python", "Django", "PostGIS"],
            links: [{ href: "https://specgo.i7.kg/", label: { en: "Live platform", ru: "Сайт платформы" } }]
          },
          {
            name: "Advocato",
            description: "Production workspace for lawyers and legal teams. Contributed backend and product work across role-based access, case documents, search, client portals, CI/CD, and operations.",
            tags: ["Commercial", "Production", "Python", "Django", "PostgreSQL"],
            links: [{ href: "https://advocato.i7.kg/ais/", label: { en: "Live platform", ru: "Сайт платформы" } }]
          },
          {
            name: "Estate Parser",
            description: "Built from scratch: a multi-source real estate collection system with a Scrapy pipeline, FastAPI service, job controls, duplicate detection for listings and photos, search, and analytics.",
            tags: ["Personal Project", "Built from Scratch", "Python", "FastAPI", "Scrapy"]
          },
          {
            name: "Pointora",
            description: "Team-built loyalty and payment platform for venues. My contributions span Laravel API features, admin and partner portals, the guest Flutter app, OTP, wallet flows, and notifications.",
            tags: ["Commercial", "In Development", "Laravel", "React", "Flutter"]
          },
          {
            name: "AppMagic Parser",
            description: "Built an authenticated browser collection pipeline for AppMagic metrics, with historical PostgreSQL data, analytics API and dashboard, scheduled refreshes, and session management.",
            tags: ["Personal Project", "Python", "FastAPI", "Playwright", "PostgreSQL"]
          },
          {
            name: "Amanat / EKurulush",
            description: "Production construction procurement system for requests, tenders, suppliers, contracts, deliveries, claims, acceptance acts, payments, and archives. Contributed to process implementation and release verification.",
            tags: ["Commercial", "Production", "Laravel", "Nuxt", "MySQL"],
            links: [{ href: "https://ekurulush.e7.kg/", label: { en: "Live platform", ru: "Сайт платформы" } }]
          },
          {
            name: "Virtual Makeup / AI Beauty",
            description: "Computer vision portrait and webcam app for virtual makeup and appearance effects. Built from scratch around face landmarks, masks, segmentation, and image processing; the commercial project paused at the client side.",
            tags: ["Commercial Prototype", "Client Project", "Python", "OpenCV", "MediaPipe"]
          },
          {
            name: "ZyloCoin / Telegram Mini App",
            description: "Telegram game and Mini App with user profiles, tasks, referrals, balance flows, and TON Connect wallet interfaces. The commercial project did not launch after the client stopped it.",
            tags: ["Commercial Prototype", "Client Project", "Django", "React", "TON Connect"]
          },
          {
            name: "BBI Telegram Bot",
            description: "Commercial Telegram bot built from scratch for catalog and request flows, payment details, administrator controls, contacts, and statistics. The client project stopped before launch.",
            tags: ["Commercial Prototype", "Client Project", "Python", "Telegram Bot", "SQLite"]
          },
          {
            name: "PhotoBeautyBot",
            description: "Commercial Telegram photo-processing bot built from scratch with guided menus, upload and media handling, and image filters. The client project stopped before launch.",
            tags: ["Commercial Prototype", "Client Project", "Python", "Aiogram", "OpenCV"]
          },
          {
            name: "Local Voice AI Assistant",
            description: "Built from scratch as a local text and voice assistant with speech recognition, Ollama/Mistral responses, XTTS speech output, conversation controls, and voice profile selection.",
            tags: ["Personal Project", "FastAPI", "Faster-Whisper", "Ollama", "XTTS"]
          },
          {
            name: "Streaming AI Voice Chatbot",
            description: "Real-time voice and text sessions with LiveKit, configurable conversation scenarios, voice profiles, streaming audio processing, and a React control interface.",
            tags: ["Personal Project", "LiveKit", "FastAPI", "React", "WebSockets"]
          },
          {
            name: "AI Car Call Centre",
            description: "Real-time voice assistant prototype for car enquiries, with tool calls to look up vehicles by VIN or add vehicle records through an API and SQLite database.",
            tags: ["Personal Project", "LiveKit Agents", "OpenAI Realtime", "Flask", "React"]
          },
          {
            name: "Bybit Price Analyzer",
            description: "Scans Bybit futures, detects support and resistance patterns, filters sideways markets, plots candidate signals, and sends charts and alerts through Telegram.",
            tags: ["Personal Project", "Python", "Bybit API", "CCXT", "Telegram Bot"]
          },
          {
            name: "Overturn X",
            description: "Modular MetaTrader 5 Expert Advisor with a state machine, trade gateway, basket and trailing logic, persistence, and daily risk controls.",
            tags: ["Personal Project", "MQL5", "MetaTrader 5", "Risk Controls", "Expert Advisor"]
          },
          {
            name: "PixHarbor",
            description: "One of my first projects: a Flask community gallery with user profiles, image uploads, posts, editing, and comments.",
            tags: ["Personal Project", "First Projects", "Python", "Flask", "SQLite"]
          },
          {
            name: "Swiftalk Chat Application",
            description: "One of my first projects: a Django messenger with user accounts, real-time WebSocket chats, file attachments, and notifications.",
            tags: ["Personal Project", "First Projects", "Django", "Channels", "WebSockets"]
          }
        ],
        ru: [
          {
            name: "SpecTech",
            description: "Рабочий маркетплейс спецтехники, перевозок и бригад. В моей backend-работе: API заказов и откликов, админка с правами по ролям, обработка сбоев Celery/Redis и регрессионные тесты.",
            tags: ["Коммерческий", "В проде", "Python", "Django", "PostGIS"],
            links: [{ href: "https://specgo.i7.kg/", label: { en: "Live platform", ru: "Сайт платформы" } }]
          },
          {
            name: "Advocato",
            description: "Рабочая система для адвокатов и юридических команд. Внесла вклад в backend и продукт: права доступа, документы дел, поиск, клиентский портал, CI/CD и эксплуатация.",
            tags: ["Коммерческий", "В проде", "Python", "Django", "PostgreSQL"],
            links: [{ href: "https://advocato.i7.kg/ais/", label: { en: "Live platform", ru: "Сайт платформы" } }]
          },
          {
            name: "Estate Parser",
            description: "С нуля создала систему сбора объявлений о недвижимости из разных источников: Scrapy-парсеры, FastAPI, управление заданиями, поиск дублей объявлений и фото, поиск и аналитика.",
            tags: ["Личный проект", "С нуля", "Python", "FastAPI", "Scrapy"]
          },
          {
            name: "Pointora",
            description: "Командная платформа лояльности и платежей для заведений. Мой вклад: Laravel API, кабинеты администратора и партнёра, Flutter-приложение гостя, OTP, кошелёк и уведомления.",
            tags: ["Коммерческий", "В разработке", "Laravel", "React", "Flutter"]
          },
          {
            name: "AppMagic Parser",
            description: "Создала авторизованный сбор данных AppMagic: историю метрик в PostgreSQL, API и панель аналитики, обновление по расписанию и управление браузерной сессией.",
            tags: ["Личный проект", "Python", "FastAPI", "Playwright", "PostgreSQL"]
          },
          {
            name: "Amanat / EKurulush",
            description: "Рабочая система строительных закупок: заявки, тендеры, поставщики, договоры, поставки, претензии, акты, оплаты и архив. Участвовала в реализации процессов и проверке релиза.",
            tags: ["Коммерческий", "В проде", "Laravel", "Nuxt", "MySQL"],
            links: [{ href: "https://ekurulush.e7.kg/", label: { en: "Live platform", ru: "Сайт платформы" } }]
          },
          {
            name: "Virtual Makeup / AI Beauty",
            description: "Приложение компьютерного зрения для обработки портретов и изображения с веб-камеры, виртуального макияжа и эффектов внешности. Сделано с нуля; коммерческую разработку остановил заказчик.",
            tags: ["Коммерческий прототип", "Проект заказчика", "Python", "OpenCV", "MediaPipe"]
          },
          {
            name: "ZyloCoin / Telegram Mini App",
            description: "Telegram-игра и Mini App с профилями, заданиями, рефералами, балансом и интерфейсом TON Connect. Коммерческий проект не вышел после остановки со стороны заказчика.",
            tags: ["Коммерческий прототип", "Проект заказчика", "Django", "React", "TON Connect"]
          },
          {
            name: "BBI Telegram Bot",
            description: "Коммерческий Telegram-бот, написанный с нуля: каталог и заявки, платёжные реквизиты, управление администраторами, контактами и статистикой. Заказчик остановил проект до запуска.",
            tags: ["Коммерческий прототип", "Проект заказчика", "Python", "Telegram Bot", "SQLite"]
          },
          {
            name: "PhotoBeautyBot",
            description: "Коммерческий Telegram-бот для обработки фотографий, написанный с нуля: меню, загрузка и хранение фото, управление состояниями диалога и фильтры. Заказчик остановил проект до запуска.",
            tags: ["Коммерческий прототип", "Проект заказчика", "Python", "Aiogram", "OpenCV"]
          },
          {
            name: "Локальный голосовой ИИ-ассистент",
            description: "С нуля созданный локальный текстовый и голосовой ассистент: распознавание речи, ответы Ollama/Mistral, озвучка XTTS, управление диалогом и выбор голосового профиля.",
            tags: ["Личный проект", "FastAPI", "Faster-Whisper", "Ollama", "XTTS"]
          },
          {
            name: "Streaming AI Voice Chatbot",
            description: "Голосовые и текстовые сессии в реальном времени на LiveKit, настраиваемые сценарии, голосовые профили, потоковая обработка аудио и React-интерфейс управления.",
            tags: ["Личный проект", "LiveKit", "FastAPI", "React", "WebSockets"]
          },
          {
            name: "AI Car Call Centre",
            description: "Прототип голосового помощника для консультаций по автомобилям. Через вызов функций ищет машину по VIN или добавляет запись через API и базу SQLite.",
            tags: ["Личный проект", "LiveKit Agents", "OpenAI Realtime", "Flask", "React"]
          },
          {
            name: "Bybit Price Analyzer",
            description: "Сканирует фьючерсы Bybit, ищет ценовые уровни, фильтрует боковой рынок, строит графики сигналов и отправляет уведомления в Telegram.",
            tags: ["Личный проект", "Python", "Bybit API", "CCXT", "Telegram Bot"]
          },
          {
            name: "Overturn X",
            description: "Модульный советник MetaTrader 5 с конечным автоматом, торговым шлюзом, логикой корзины и трейлинга, сохранением состояния и дневными ограничениями риска.",
            tags: ["Личный проект", "MQL5", "MetaTrader 5", "Контроль риска", "Expert Advisor"]
          },
          {
            name: "PixHarbor",
            description: "Один из моих первых проектов: Flask-галерея с аккаунтами, профилями, загрузкой изображений, публикациями, редактированием и комментариями.",
            tags: ["Личный проект", "Первые проекты", "Python", "Flask", "SQLite"]
          },
          {
            name: "Swiftalk Chat Application",
            description: "Один из моих первых проектов: Django-мессенджер с аккаунтами, чатами в реальном времени через WebSocket, вложениями и уведомлениями.",
            tags: ["Личный проект", "Первые проекты", "Django", "Channels", "WebSockets"]
          }
        ]
      },
      attributes: {
        en: [
          { name: "Backend development", desc: "APIs, business workflows, databases, and production services" },
          { name: "Data collection & search", desc: "Web scraping, data normalization, duplicate detection, and analytics" },
          { name: "Integrations & reliability", desc: "Task queues, external APIs, regression coverage, and release fixes" },
          { name: "Full-stack delivery", desc: "Admin and partner portals, mobile API integration, and Docker deployment" },
          { name: "AI application prototypes", desc: "Voice pipelines, local LLM integration, and computer vision" }
        ],
        ru: [
          { name: "Backend-разработка", desc: "API, бизнес-процессы, базы данных и production-сервисы" },
          { name: "Сбор и поиск данных", desc: "Парсинг сайтов, нормализация данных, поиск дублей и аналитика" },
          { name: "Интеграции и надёжность", desc: "Очереди задач, внешние API, регрессионное покрытие и исправления релизов" },
          { name: "Full-stack разработка", desc: "Админ-панели, кабинеты партнёров, мобильные API и Docker-развёртывание" },
          { name: "Прототипы приложений с ИИ", desc: "Голосовые конвейеры, локальные LLM и компьютерное зрение" }
        ]
      },
      details: {
        en: [
          { label: "Kyrgyz", value: "Native Speaker" },
          { label: "Russian", value: "Fluent" },
          { label: "English", value: "Technical comprehension & documentation, spoken in progress" },
          { label: "Focus", value: "Backend APIs, data collection, production support, AI integrations" }
        ],
        ru: [
          { label: "Кыргызский", value: "Родной" },
          { label: "Русский", value: "Свободно" },
          { label: "Английский", value: "Понимание документации и текстов, разговорная практика в процессе" },
          { label: "Основные направления", value: "Backend API, сбор данных, production-поддержка, интеграции с ИИ" }
        ]
      },
      education: {
        en: [
          { label: "Degree", value: "Bachelor's degree, Programmer Engineer" },
          { label: "University", value: "Kyrgyz State Technical University named after I. Razzakov" },
          { label: "Graduation", value: "2023" }
        ],
        ru: [
          { label: "Степень", value: "Бакалавр, программист-инженер" },
          { label: "Университет", value: "КГТУ им. И. Раззакова" },
          { label: "Год выпуска", value: "2023" }
        ]
      },
      copy: {
        en: {
          brandMeta: "Developer portfolio",
          hudSubtitle: "Python Backend Developer",
          printLabel: "Print Portfolio",
          pdfLabel: "Download CV (2 pages)",
          portfolioPdfLabel: "Download Full Portfolio",
          metric1Label: "Backend development",
          metric1Desc: "APIs, databases and reliable services",
          metric2Label: "AI & automation",
          metric2Desc: "Voice assistants, data and web tools",
          metric3Label: "Experience",
          metric3Desc: "Commercial and client projects since 2022",
          workTitle: "Professional experience",
          focusTitle: "Skills & technologies",
          projectsTitle: "Featured Projects",
          otherProjectsTitle: "Other projects",
          statsSheetTitle: "Areas of work",
          profileTitle: "Languages & focus",
          academyTitle: "Education",
          footerText: "Python backend development · APIs · AI integrations",
          tabBtnQuests: "Experience",
          tabBtnCharacter: "Specs",
          tabBtnProjects: "Projects"
        },
        ru: {
          brandMeta: "Портфолио разработчика",
          hudSubtitle: "Python Backend Developer",
          printLabel: "Печать портфолио",
          pdfLabel: "Скачать резюме · 2 страницы",
          portfolioPdfLabel: "Скачать полное портфолио",
          metric1Label: "Backend-разработка",
          metric1Desc: "API, базы данных и серверные сервисы",
          metric2Label: "ИИ и автоматизация",
          metric2Desc: "Голосовые ассистенты, данные и веб-инструменты",
          metric3Label: "Опыт",
          metric3Desc: "Коммерческие и клиентские проекты с 2022 года",
          workTitle: "Опыт работы",
          focusTitle: "Навыки и технологии",
          projectsTitle: "Избранные проекты",
          otherProjectsTitle: "Другие проекты",
          statsSheetTitle: "Направления работы",
          profileTitle: "Языки и специализация",
          academyTitle: "Образование",
          footerText: "Python backend · API · интеграции с ИИ",
          tabBtnQuests: "Опыт работы",
          tabBtnCharacter: "Характеристики",
          tabBtnProjects: "Проекты"
        }
      }
    };

    // --- SOUND EFFECTS (Web Audio API Synthesizer) ---
    class WebAudioSynth {
      constructor() {
        this.ctx = null;
        this.enabled = false;
      }

      init() {
        if (!this.ctx) {
          this.ctx = new (window.AudioContext || window.webkitAudioContext)();
        }
      }

      playClick() {
        if (!this.enabled) return;
        this.init();
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        
        osc.type = 'sine';
        osc.frequency.setValueAtTime(900, this.ctx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(150, this.ctx.currentTime + 0.04);
        
        gain.gain.setValueAtTime(0.015, this.ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.04);
        
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start();
        osc.stop(this.ctx.currentTime + 0.04);
      }

      playHover() {
        if (!this.enabled) return;
        this.init();
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(1400, this.ctx.currentTime);
        
        gain.gain.setValueAtTime(0.003, this.ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.0005, this.ctx.currentTime + 0.015);
        
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start();
        osc.stop(this.ctx.currentTime + 0.015);
      }

      playToggle() {
        if (!this.enabled) return;
        this.init();
        const now = this.ctx.currentTime;
        const playTone = (freq, delay, dur) => {
          const osc = this.ctx.createOscillator();
          const gain = this.ctx.createGain();
          osc.type = 'sine';
          osc.frequency.setValueAtTime(freq, now + delay);
          gain.gain.setValueAtTime(0.01, now + delay);
          gain.gain.exponentialRampToValueAtTime(0.001, now + delay + dur);
          osc.connect(gain);
          gain.connect(this.ctx.destination);
          osc.start(now + delay);
          osc.stop(now + delay + dur);
        };
        playTone(550, 0, 0.06);
        playTone(850, 0.05, 0.1);
      }
    }
    const sfx = new WebAudioSynth();

    // --- SOUND INTERACTION TOGGLES ---
    const soundToggle = document.getElementById("soundToggle");

    const updateSoundButton = () => {
      soundToggle.innerHTML = sfx.enabled 
        ? `${svgIcons.soundOn} <span>SOUND: ON</span>` 
        : `${svgIcons.soundOff} <span>SOUND: OFF</span>`;
    };

    soundToggle.addEventListener("click", () => {
      sfx.enabled = !sfx.enabled;
      soundToggle.classList.toggle("active", sfx.enabled);
      updateSoundButton();
      sfx.playToggle();
    });

    // --- RENDER FUNCTIONS FOR EACH DATA PORTION ---
    const renderContacts = (lang) => {
      const wrap = document.getElementById("contactStrip");
      wrap.innerHTML = "";
      resume.contacts.forEach((c) => {
        const val = typeof c.value === "string" ? c.value : c.value[lang];
        const el = document.createElement(c.href ? "a" : "div");
        el.className = "contact-item";
        if (c.href) {
          el.href = c.href;
          el.target = c.href.startsWith("http") ? "_blank" : "_self";
          if (c.href.startsWith("http")) el.rel = "noreferrer";
        }
        el.innerHTML = `<span class="icon">${svgIcons[c.icon]}</span><span>${val}</span>`;
        // Sound hover triggers
        el.addEventListener("mouseenter", () => sfx.playHover());
        wrap.appendChild(el);
      });
    };

    const renderExperience = (lang) => {
      const wrap = document.getElementById("experienceList");
      wrap.innerHTML = "";
      resume.experience[lang].forEach((exp) => {
        const item = document.createElement("article");
        item.className = "quest-card";
        item.innerHTML = `
          <div class="quest-header">
            <div>
              <h3>${exp.role}</h3>
              <div class="quest-company">${exp.company}</div>
            </div>
            <div class="quest-meta">
              <strong>${exp.location}</strong>
              <span>${exp.period}</span>
            </div>
          </div>
          <ul class="quest-objectives">
            ${exp.bullets.map((b) => `<li>${b}</li>`).join("")}
          </ul>
        `;
        item.addEventListener("mouseenter", () => sfx.playHover());
        wrap.appendChild(item);
      });
    };

    const renderFocus = (lang) => {
      const wrap = document.getElementById("focusTags");
      wrap.className = "stack-grid";
      wrap.innerHTML = "";
      resume.focusGroups[lang].forEach((group) => {
        const card = document.createElement("article");
        card.className = "stack-card";
        card.dataset.tone = group.tone;
        card.innerHTML = `
          <div class="stack-card-title">${group.title}</div>
          <div class="stack-chip-wrap">
            ${group.items.map((item) => `<span class="stack-chip">${item}</span>`).join("")}
          </div>
        `;
        card.addEventListener("mouseenter", () => sfx.playHover());
        wrap.appendChild(card);
      });
    };

    const renderProjects = (lang) => {
      const featuredWrap = document.getElementById("featuredProjectsGrid");
      const otherWrap = document.getElementById("otherProjectsGrid");
      const projects = resume.projects[lang];
      const featured = projects.slice(0, 6);
      const other = projects.slice(6);
      const cardMarkup = (p) => {
        const card = document.createElement("article");
        card.className = "project-card";
        card.innerHTML = `
          <h3 class="project-title">${p.name}</h3>
          <p class="project-desc">${p.description}</p>
          <div class="project-tags">
            ${p.tags.map((t) => `<span class="project-tag">${t}</span>`).join("")}
          </div>
        `;
        if (p.links?.length) {
          const links = document.createElement("div");
          links.className = "project-links";
          links.innerHTML = p.links.map((link) => `<a href="${link.href}" target="_blank" rel="noreferrer">${link.label[lang]} ↗</a>`).join("");
          card.appendChild(links);
        }
        card.addEventListener("mouseenter", () => sfx.playHover());
        return card;
      };
      featuredWrap.replaceChildren(...featured.map(cardMarkup));
      otherWrap.replaceChildren(...other.map(cardMarkup));
      document.getElementById("otherProjectsTitle").textContent = `${resume.copy[lang].otherProjectsTitle} (${other.length})`;
    };

    const renderAttributes = (lang) => {
      const wrap = document.getElementById("attrList");
      wrap.innerHTML = "";
      resume.attributes[lang].forEach((attr) => {
        const row = document.createElement("div");
        row.className = "attr-row";
        const name = attr.name.replace(/^[A-Z]+\s+\((.*)\)$/, "$1");
        row.innerHTML = `
          <div class="attr-name">${name}</div>
          <p class="attr-desc">${attr.desc}</p>
        `;
        row.addEventListener("mouseenter", () => sfx.playHover());
        wrap.appendChild(row);
      });
    };

    const renderDetails = (lang) => {
      const wrap = document.getElementById("profileWrap");
      wrap.innerHTML = "";
      resume.details[lang].forEach((row) => {
        const r = document.createElement("div");
        r.className = "info-row";
        r.innerHTML = `
          <span class="info-row-label">${row.label}</span>
          <span class="info-row-val">${row.value}</span>
        `;
        wrap.appendChild(r);
      });
    };

    const renderEducation = (lang) => {
      const wrap = document.getElementById("educationWrap");
      wrap.innerHTML = "";
      resume.education[lang].forEach((row) => {
        const r = document.createElement("div");
        r.className = "info-row";
        r.innerHTML = `
          <span class="info-row-label">${row.label}</span>
          <span class="info-row-val">${row.value}</span>
        `;
        wrap.appendChild(r);
      });
    };

    // --- LANGUAGE MANAGER ---
    const setLanguage = (lang) => {
      document.documentElement.lang = lang;
      localStorage.setItem("resume-lang", lang);

      // Simple Text nodes replacements
      const copyKeys = Object.keys(resume.copy[lang]);
      copyKeys.forEach((key) => {
        const node = document.getElementById(key);
        if (node) node.textContent = resume.copy[lang][key];
      });

      renderContacts(lang);
      renderExperience(lang);
      renderFocus(lang);
      renderProjects(lang);
      renderAttributes(lang);
      renderDetails(lang);
      renderEducation(lang);

      const pdfDownload = document.getElementById("pdfDownload");
      if (pdfDownload) {
        const suffix = lang === "ru" ? "ru" : "en";
        pdfDownload.href = `output/pdf/ayturgan-karagulova-resume-${suffix}.pdf?v=20261029e`;
        pdfDownload.download = `ayturgan-karagulova-resume-${suffix}.pdf`;
        pdfDownload.setAttribute(
          "aria-label",
          lang === "ru" ? "Скачать резюме PDF" : "Download resume PDF"
        );
      }

      const portfolioDownload = document.getElementById("portfolioPdfDownload");
      if (portfolioDownload) {
        const suffix = lang === "ru" ? "ru" : "en";
        portfolioDownload.href = `output/pdf/ayturgan-karagulova-portfolio-${suffix}.pdf?v=20261029e`;
        portfolioDownload.download = `ayturgan-karagulova-portfolio-${suffix}.pdf`;
        portfolioDownload.setAttribute(
          "aria-label",
          lang === "ru" ? "Скачать полное портфолио PDF" : "Download full portfolio PDF"
        );
      }

      // Sync active buttons
      document.querySelectorAll(".lang-btn").forEach((btn) => {
        btn.classList.toggle("active", btn.dataset.lang === lang);
      });
    };

    // --- TAB MANAGER ---
    const tabs = document.querySelectorAll(".tab-btn");
    const contents = document.querySelectorAll(".tab-content");

    tabs.forEach((tab) => {
      tab.addEventListener("click", () => {
        const target = tab.dataset.tab;
        
        tabs.forEach((t) => t.classList.remove("active"));
        contents.forEach((c) => c.classList.remove("active"));

        tab.classList.add("active");
        document.getElementById(`${target}-tab`).classList.add("active");

        sfx.playClick();
      });
      tab.addEventListener("mouseenter", () => sfx.playHover());
    });

    // --- LANGUAGE BUTTON TRIGGERS ---
    document.querySelectorAll(".lang-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        setLanguage(btn.dataset.lang);
        sfx.playToggle();
      });
      btn.addEventListener("mouseenter", () => sfx.playHover());
    });

    // --- INITIALIZE APPLICATION STATE ---
    // Inject button icons
    document.getElementById("printIcon").innerHTML = svgIcons.print;
    document.getElementById("pdfIcon").innerHTML = svgIcons.pdf;

    const initialLang = localStorage.getItem("resume-lang") || "en";
    setLanguage(initialLang);
    updateSoundButton();

    // --- AVATAR LIGHTBOX INTERACTION ---
    const avatarCircle = document.querySelector(".avatar-circle");
    const avatarModal = document.getElementById("avatarModal");

    avatarCircle.addEventListener("click", () => {
      avatarModal.classList.add("active");
      sfx.playClick();
    });

    avatarModal.addEventListener("click", () => {
      avatarModal.classList.remove("active");
      sfx.playClick();
    });
