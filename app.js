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
          { title: "Languages", tone: "language", items: ["Python", "TypeScript", "JavaScript", "C++", "SQL"] },
          { title: "Frontend", tone: "frontend", items: ["React", "Next.js", "Vite", "Tailwind CSS", "Bootstrap", "Framer Motion", "React Router", "Zustand", "HTML5", "CSS3"] },
          { title: "Backend", tone: "backend", items: ["FastAPI", "Django", "Flask", "Express", "Node.js", "REST API", "Uvicorn", "Pydantic", "WebSockets"] },
          { title: "Data & Storage", tone: "data", items: ["PostgreSQL", "MySQL", "SQLite", "Redis", "SQLAlchemy", "Alembic", "Elasticsearch", "Celery"] },
          { title: "AI / ML / CV", tone: "ai", items: ["OpenAI", "PyTorch", "NumPy", "Pandas", "Scikit-learn", "Pillow", "OpenCV"] },
          { title: "Automation & QA", tone: "automation", items: ["Scrapy", "Playwright", "Scrapy Playwright", "Selenium", "Postman", "aiohttp", "httpx", "Jinja2"] },
          { title: "Messaging & Platforms", tone: "platform", items: ["Aiogram", "Python Telegram Bot", "Telegram Mini Apps", "Yandex Games", "Unreal Engine 5", "LiveKit", "Socket.IO"] },
          { title: "Infra & Deploy", tone: "infra", items: ["Docker", "Docker Compose", "Nginx", "Linux", "Git", "GitHub", "DigitalOcean", "GitHub Pages", "DevOps", "Server Ops"] }
        ],
        ru: [
          { title: "Языки", tone: "language", items: ["Python", "TypeScript", "JavaScript", "C++", "SQL"] },
          { title: "Frontend", tone: "frontend", items: ["React", "Next.js", "Vite", "Tailwind CSS", "Bootstrap", "Framer Motion", "React Router", "Zustand", "HTML5", "CSS3"] },
          { title: "Backend", tone: "backend", items: ["FastAPI", "Django", "Flask", "Express", "Node.js", "REST API", "Uvicorn", "Pydantic", "WebSockets"] },
          { title: "Данные и хранилища", tone: "data", items: ["PostgreSQL", "MySQL", "SQLite", "Redis", "SQLAlchemy", "Alembic", "Elasticsearch", "Celery"] },
          { title: "AI / ML / CV", tone: "ai", items: ["OpenAI", "PyTorch", "NumPy", "Pandas", "Scikit-learn", "Pillow", "OpenCV"] },
          { title: "Автоматизация и QA", tone: "automation", items: ["Scrapy", "Playwright", "Scrapy Playwright", "Selenium", "Postman", "aiohttp", "httpx", "Jinja2"] },
          { title: "Боты и платформы", tone: "platform", items: ["Aiogram", "Python Telegram Bot", "Telegram Mini Apps", "Yandex Games", "Unreal Engine 5", "LiveKit", "Socket.IO"] },
          { title: "Инфраструктура", tone: "infra", items: ["Docker", "Docker Compose", "Nginx", "Linux", "Git", "GitHub", "DigitalOcean", "GitHub Pages", "DevOps", "Server Ops"] }
        ]
      },
      experience: {
        en: [
          {
            role: "Middle Python Developer",
            company: ".beam",
            period: "Jun 2025 - Present",
            location: "Company",
            bullets: [
              "Develop and support production projects, websites, backend services, and server environments across several products.",
              "Extended a large API-driven service for ordering special equipment through a mobile app, covering marketplace-like logic for machinery, drivers, and truck transport workflows.",
              "Built a QR payment intermediary from scratch and helped validate payment-flow stability under load with 200+ concurrent users.",
              "Handled server and network migration tasks including IP architecture reconfiguration, RAM allocation tuning, and troubleshooting complex production builds."
            ]
          },
          {
            role: "Python Developer",
            company: "Photo Studio",
            period: "Nov 2024 - Apr 2025",
            location: "Product",
            bullets: [
              "Developed a Telegram bot for photo processing focused on appearance enhancement, filters, and document-ready formatting.",
              "Worked on image processing logic and product delivery for a practical, user-facing automation workflow.",
              "Used Python tooling around bot flows, media processing, and backend persistence."
            ]
          },
          {
            role: "Middle Fullstack Developer",
            company: "ZuloCoin",
            period: "Jun 2023 - Aug 2024",
            location: "Remote",
            bullets: [
              "Developed a Telegram crypto game and Mini App with full client-server logic and a React-based frontend.",
              "Worked across backend, bot logic, product flows, and frontend integration as part of the full development cycle.",
              "Contributed to a game-like user experience inside the Telegram ecosystem."
            ]
          },
          {
            role: "Junior Python Developer",
            company: "Self-employed",
            period: "Oct 2022 - May 2023",
            location: "Freelance",
            bullets: [
              "Built REST APIs using FastAPI and Django for client projects and internal tools.",
              "Created Telegram bots for automation, integrations, and parsing tasks.",
              "Delivered practical backend solutions end-to-end, from implementation to deployment."
            ]
          }
        ],
        ru: [
          {
            role: "Middle Python Developer",
            company: ".beam",
            period: "Июнь 2025 - Наст. время",
            location: "Компания",
            bullets: [
              "Разрабатываю и поддерживаю продакшн-проекты, сайты, backend-сервисы и серверную инфраструктуру для нескольких продуктов.",
              "Дорабатываю большой API-сервис для заказа спецтехники через мобильное приложение: бизнес-логика, похожая на маркетплейс техники, водителей и грузового транспорта.",
              "С нуля создала сайт-посредник для QR-платежей и участвовала в проверке стабильности платежных сценариев под нагрузкой 200+ одновременных пользователей.",
              "Выполняла сетевые и серверные миграции: перенастройка IP-архитектуры, аллокация RAM и troubleshooting сложных production-сборок."
            ]
          },
          {
            role: "Python Developer",
            company: "Photo Studio",
            period: "Ноябрь 2024 - Апрель 2025",
            location: "Продукт",
            bullets: [
              "Разработала Telegram-бота для обработки фото: улучшение внешности, фильтры и подготовка изображений под документы.",
              "Работала над логикой обработки изображений и упаковкой удобного пользовательского сценария.",
              "Использовала Python-инструменты для bot-flow, медиа-обработки и backend-хранения данных."
            ]
          },
          {
            role: "Middle Fullstack Developer",
            company: "ZuloCoin",
            period: "Июнь 2023 - Август 2024",
            location: "Удаленно",
            bullets: [
              "Разрабатывала Telegram-криптоигру и Mini App с полной клиент-серверной логикой и фронтендом на React.",
              "Работала на стыке backend, bot-логики, продуктовых сценариев и frontend-интеграции в рамках полного цикла разработки.",
              "Участвовала в создании игрового пользовательского опыта внутри экосистемы Telegram."
            ]
          },
          {
            role: "Junior Python Developer",
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
            name: "Faceless Shorts Pipeline",
            description: "Automated YouTube shorts pipeline for historical and science facts. Covers script generation, narration prompts, voiceover steps, visual prompt packs, and repeatable content assembly for faceless publishing workflows.",
            tags: ["LLM Pipeline", "YouTube Automation", "Prompt Engineering", "TTS", "Content Ops"]
          },
          {
            name: "QR Payment Intermediary",
            description: "Web product built from scratch to simplify commission-free payments with interbank QR flows, plus backend validation and load scenarios proving stable behavior at 200+ concurrent users.",
            tags: ["Python", "Payments", "Load Testing", "Backend", "Reliability"]
          },
          {
            name: "Real Estate Aggregator",
            description: "Large parsing-driven platform that collects the latest property listings from multiple sources and turns them into one searchable, fresh feed.",
            tags: ["Parsing", "FastAPI", "PostgreSQL", "Data pipelines", "Web"]
          },
          {
            name: "LLM Game Master Bot",
            description: "Interactive quest engine for branching stories and GM-led sessions. Manages dynamic prompts, decision memory, session state, and narrative responses for replayable AI adventures.",
            tags: ["LLM", "State Management", "Prompt Design", "Interactive Fiction", "Bots"]
          },
          {
            name: "Yandex Games Mini Apps",
            description: "Mini web apps and quiz games for Yandex Games, including a multi-difficulty The Last of Us trivia experience with progression logic and lightweight frontend gameplay.",
            tags: ["Yandex Games", "Mini Apps", "JavaScript", "Game Logic", "Frontend"]
          },
          {
            name: "Second Dawn",
            description: "AI game prototype in Unreal Engine 5.7 focused on AI NPC interactions. Includes a realtime TypeScript backend, WebSocket communication, structured NPC prompt architecture, short-term memory, and voice pipeline experiments.",
            tags: ["Unreal Engine 5.7", "TypeScript", "WebSockets", "Gemini", "OpenAI STT", "AI NPCs"]
          },
          {
            name: "InfoCompanion",
            description: "Telegram bot focused on practical information access: quick lookup flows, translator features, and daily quote delivery in one lightweight assistant experience.",
            tags: ["Python", "Telegram Bot", "Automation", "Utilities", "Aiogram"]
          },
          {
            name: "PixHarbor",
            description: "Gallery-style web app where users can upload photos, browse visual content, and interact through likes and comments.",
            tags: ["Python", "Web App", "Media Uploads", "Community Features", "Frontend"]
          },
          {
            name: "Swiftalk Chat Application",
            description: "Realtime chat messenger prototype built around direct communication flows, with future wallet integration planned as part of the product direction.",
            tags: ["Chat", "Realtime", "WebSockets", "Messaging", "Product"]
          },
          {
            name: "Zylocoin",
            description: "Public-facing product website for a Telegram crypto game ecosystem. The core gameplay code is confidential, but the shipped product layer reflects fullstack and product packaging work.",
            tags: ["Telegram", "Crypto Game", "Landing", "Product", "Confidential Core"]
          }
        ],
        ru: [
          {
            name: "Faceless Shorts Pipeline",
            description: "Автоматизированный пайплайн для YouTube Shorts с историческими и научными фактами. Покрывает генерацию сценариев, промптов для озвучки, визуальных промптов и сборку повторяемого faceless-контента.",
            tags: ["LLM Pipeline", "YouTube Automation", "Prompt Engineering", "TTS", "Content Ops"]
          },
          {
            name: "QR Payment Intermediary",
            description: "Веб-продукт, созданный с нуля для удобных QR-платежей без комиссии через межбанковские сценарии, с отдельной проверкой backend-стабильности под нагрузкой 200+ одновременных пользователей.",
            tags: ["Python", "Payments", "Load Testing", "Backend", "Reliability"]
          },
          {
            name: "Real Estate Aggregator",
            description: "Крупная parsing-платформа, которая собирает свежие объявления о недвижимости из множества источников и превращает их в единый обновляемый каталог.",
            tags: ["Parsing", "FastAPI", "PostgreSQL", "Data pipelines", "Web"]
          },
          {
            name: "LLM Game Master Bot",
            description: "Интерактивный движок для квестов и ветвящихся сюжетов в стиле game master. Управляет динамическими промптами, памятью решений, состоянием сессии и нарративными ответами.",
            tags: ["LLM", "State Management", "Prompt Design", "Interactive Fiction", "Bots"]
          },
          {
            name: "Yandex Games Mini Apps",
            description: "Мини-приложения и квиз-игры для Яндекс.Игр, включая викторину по The Last of Us с несколькими уровнями сложности, прогрессией и легкой frontend-логикой.",
            tags: ["Yandex Games", "Mini Apps", "JavaScript", "Game Logic", "Frontend"]
          },
          {
            name: "Second Dawn",
            description: "AI-игра на Unreal Engine 5.7 с упором на AI-driven NPC interaction. Внутри realtime TypeScript backend, WebSocket-связь, архитектура промптов для NPC, short-term memory и эксперименты с voice pipeline.",
            tags: ["Unreal Engine 5.7", "TypeScript", "WebSockets", "Gemini", "OpenAI STT", "AI NPCs"]
          },
          {
            name: "InfoCompanion",
            description: "Telegram-бот для быстрого доступа к информации: полезные lookup-сценарии, переводчик и ежедневные цитаты в формате удобного ассистента.",
            tags: ["Python", "Telegram Bot", "Automation", "Utilities", "Aiogram"]
          },
          {
            name: "PixHarbor",
            description: "Веб-приложение в формате галереи, где пользователи могут загружать фотографии, просматривать контент и взаимодействовать через лайки и комментарии.",
            tags: ["Python", "Web App", "Media Uploads", "Community Features", "Frontend"]
          },
          {
            name: "Swiftalk Chat Application",
            description: "Прототип realtime-мессенджера с упором на прямое общение между пользователями и заделом под будущую wallet-интеграцию как часть продуктового направления.",
            tags: ["Chat", "Realtime", "WebSockets", "Messaging", "Product"]
          },
          {
            name: "Zylocoin",
            description: "Публичный продуктовый сайт для экосистемы Telegram-криптоигры. Основной игровой код конфиденциален, но продуктовый слой отражает fullstack- и product-работу.",
            tags: ["Telegram", "Crypto Game", "Landing", "Product", "Confidential Core"]
          }
        ]
      },
      attributes: {
        en: [
          { name: "INT (Backend Core)", value: "93%", desc: "API design, payments, databases, data systems", width: "93%" },
          { name: "DEX (Velocity & CI/CD)", value: "88%", desc: "Fast delivery, Docker, deployment, product launches", width: "88%" },
          { name: "VIT (System Reliability)", value: "90%", desc: "Load testing, migrations, logs, production troubleshooting", width: "90%" },
          { name: "AGI (Fullstack Integrations)", value: "80%", desc: "Mini apps, React, game and web integrations", width: "80%" },
          { name: "LUK (AI Prototyping)", value: "94%", desc: "LLM workflows, content generation, interactive AI systems", width: "94%" }
        ],
        ru: [
          { name: "INT (Основа Бэкенда)", value: "93%", desc: "Проектирование API, платежи, базы данных, data systems", width: "93%" },
          { name: "DEX (Скорость & CI/CD)", value: "88%", desc: "Быстрый запуск, Docker, деплой и вывод продуктов", width: "88%" },
          { name: "VIT (Надежность Систем)", value: "90%", desc: "Нагрузочное тестирование, миграции, логи, troubleshooting", width: "90%" },
          { name: "AGI (Фулстэк интеграция)", value: "80%", desc: "Mini Apps, React, игровые и веб-интеграции", width: "80%" },
          { name: "LUK (Интеграция ИИ)", value: "94%", desc: "LLM-воркфлоу, генерация контента, интерактивные AI-системы", width: "94%" }
        ]
      },
      inventory: [
        { icon: "python", label: "Python" },
        { icon: "typescript", label: "TypeScript" },
        { icon: "javascript", label: "JavaScript" },
        { icon: "fastapi", label: "FastAPI" },
        { icon: "django", label: "Django" },
        { icon: "flask", label: "Flask" },
        { icon: "express", label: "Express" },
        { icon: "nodejs", label: "Node.js" },
        { icon: "restapi", label: "REST API" },
        { icon: "react", label: "React" },
        { icon: "nextjs", label: "Next.js" },
        { icon: "tailwind", label: "Tailwind CSS" },
        { icon: "bootstrap", label: "Bootstrap" },
        { icon: "postgresql", label: "PostgreSQL" },
        { icon: "mysql", label: "MySQL" },
        { icon: "sqlite", label: "SQLite" },
        { icon: "sqlalchemy", label: "SQLAlchemy" },
        { icon: "redis", label: "Redis" },
        { icon: "docker", label: "Docker" },
        { icon: "nginx", label: "Nginx" },
        { icon: "linux", label: "Linux" },
        { icon: "git", label: "Git" },
        { icon: "scrapy", label: "Scrapy/Parser" },
        { icon: "playwright", label: "Playwright" },
        { icon: "selenium", label: "Selenium" },
        { icon: "postman", label: "Postman" },
        { icon: "openai", label: "OpenAI / LLM" },
        { icon: "pytorch", label: "PyTorch" },
        { icon: "aiogram", label: "Aiogram" },
        { icon: "telegram", label: "Telegram Mini Apps" },
        { icon: "yandex", label: "Yandex Games" },
        { icon: "websocket", label: "WebSockets" },
        { icon: "livekit", label: "LiveKit" },
        { icon: "digitalocean", label: "DigitalOcean" },
        { icon: "githubpages", label: "GitHub Pages" },
        { icon: "payments", label: "Payments" },
        { icon: "cicd", label: "CI/CD" },
        { icon: "unreal", label: "UE5/Unreal" }
      ],
      details: {
        en: [
          { label: "Kyrgyz", value: "Native Speaker" },
          { label: "Russian", value: "Fluent" },
          { label: "English", value: "Technical comprehension & documentation, spoken in progress" },
          { label: "Active Roles", value: "Backend, AI automations, content pipelines, mini games, server ops" }
        ],
        ru: [
          { label: "Кыргызский", value: "Родной" },
          { label: "Русский", value: "Свободно" },
          { label: "Английский", value: "Понимание документации и текстов, разговорная практика в процессе" },
          { label: "Активные роли", value: "Бэкенд, AI-автоматизация, контент-пайплайны, мини-игры, серверная инфраструктура" }
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
          brandMeta: "System / Active",
          hudSubtitle: "AI Fullstack Developer",
          printLabel: "Print Resume",
          pdfLabel: "Download Resume PDF",
          metric1Label: "Backend Core",
          metric1Desc: "Payments, load testing, server reliability",
          metric2Label: "AI & Product Integrations",
          metric2Desc: "LLM agents, content pipelines, Mini Apps",
          metric3Label: "Professional Journey",
          metric3Desc: "Active software engineering since 2022",
          workTitle: "Completed & Active Campaigns",
          highlightTitle: "Positioning Profile",
          highlightHeader: "Honest, modern, and product-focused.",
          highlightBody: "This profile highlights my ability to ship real products fast: load-tested payment flows, AI content pipelines, production parsers, mini apps, and experimental game systems.",
          focusTitle: "Active Skill Tree",
          projectsTitle: "Featured Projects",
          statsSheetTitle: "Specs",
          inventoryTitle: "Equipped Tech Stack",
          profileTitle: "Identity Specifications",
          academyTitle: "Academy Background",
          consoleTitle: "System Directory Viewer",
          footerText: "System active. Ready for new collaborative opportunities.",
          tabBtnQuests: "Experience",
          tabBtnCharacter: "Skills & Specs",
          tabBtnTerminal: "System Logs"
        },
        ru: {
          brandMeta: "Система / Активна",
          hudSubtitle: "AI Fullstack Developer",
          printLabel: "Печать резюме",
          pdfLabel: "Скачать резюме PDF",
          metric1Label: "Основа Бэкенда",
          metric1Desc: "Платежи, нагрузка, надежность серверов",
          metric2Label: "ИИ и Продукты",
          metric2Desc: "LLM-агенты, контент-пайплайны, Mini Apps",
          metric3Label: "Опыт Работы",
          metric3Desc: "Активная разработка программных продуктов с 2022 года",
          workTitle: "Активные и завершенные проекты",
          highlightTitle: "Профиль Разработчика",
          highlightHeader: "Честно, современно и по делу.",
          highlightBody: "Профиль показывает меня как инженера, который быстро доводит идеи до работающих продуктов: платежные сценарии под нагрузкой, AI-контентные пайплайны, продакшн-парсеры, mini apps и игровые эксперименты.",
          focusTitle: "Активный стек технологий",
          projectsTitle: "Избранные проекты",
          statsSheetTitle: "Характеристики",
          inventoryTitle: "Инвентарь технологий",
          profileTitle: "Спецификации личности",
          academyTitle: "Академическое образование",
          consoleTitle: "Директория файловой системы",
          footerText: "Система готова к новым масштабным проектам и сотрудничеству.",
          tabBtnQuests: "Опыт работы",
          tabBtnCharacter: "Навыки и профиль",
          tabBtnTerminal: "Логи системы"
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
      const wrap = document.getElementById("projectsGrid");
      wrap.innerHTML = "";
      resume.projects[lang].forEach((p) => {
        const card = document.createElement("article");
        card.className = "project-card";
        card.innerHTML = `
          <h3 class="project-title">${p.name}</h3>
          <p class="project-desc">${p.description}</p>
          <div class="project-tags">
            ${p.tags.map((t) => `<span class="project-tag">${t}</span>`).join("")}
          </div>
        `;
        card.addEventListener("mouseenter", () => sfx.playHover());
        wrap.appendChild(card);
      });
    };

    const renderAttributes = (lang) => {
      const wrap = document.getElementById("attrList");
      wrap.innerHTML = "";
      resume.attributes[lang].forEach((attr) => {
        const row = document.createElement("div");
        row.className = "attr-row";
        row.innerHTML = `
          <div class="attr-name" title="${attr.desc}">${attr.name}</div>
          <div class="attr-val">${attr.value}</div>
          <div class="bar-bg" style="height: 8px;">
            <div class="bar-fill red" style="width: ${attr.width}"></div>
          </div>
        `;
        row.addEventListener("mouseenter", () => sfx.playHover());
        wrap.appendChild(row);
      });
    };

    const renderInventory = () => {
      const wrap = document.getElementById("inventoryGrid");
      wrap.innerHTML = "";
      resume.inventory.forEach((item) => {
        const slot = document.createElement("div");
        slot.className = "inventory-slot";
        slot.innerHTML = `
          <div class="item-icon">${svgIcons[item.icon]}</div>
          <div class="item-label">${item.label}</div>
        `;
        slot.addEventListener("mouseenter", () => sfx.playHover());
        wrap.appendChild(slot);
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
      renderInventory();
      renderDetails(lang);
      renderEducation(lang);

      const pdfDownload = document.getElementById("pdfDownload");
      if (pdfDownload) {
        const suffix = lang === "ru" ? "ru" : "en";
        pdfDownload.href = `output/pdf/ayturgan-karagulova-resume-${suffix}.pdf`;
        pdfDownload.download = `ayturgan-karagulova-resume-${suffix}.pdf`;
        pdfDownload.setAttribute(
          "aria-label",
          lang === "ru" ? "Скачать резюме PDF" : "Download resume PDF"
        );
      }
      
      // Update terminal codes if tab matches language
      updateTerminalContent(activeFile);

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

    // --- TERMINAL FILE CONTROLS ---
    let activeFile = "system.log";
    const fileItems = document.querySelectorAll(".file-item");
    const termBody = document.getElementById("terminalBody");
    const termTabName = document.getElementById("terminalTabName");

    const terminalDocs = {
      en: {
        "system.log": `<div class="terminal-prompt"><span class="user">aiturgan@karagulova</span>:<span class="loc">~</span>$ cat system.log</div>
[   0.000000] Booting Developer Portfolio System - Version 4.2.0-stable
[   0.082490] CPU: Python Fullstack Core V8 running at peak performance
[   0.148102] Core memory initialized: FastAPI & Django frameworks loaded successfully
[   0.281489] Loading databases... PostgreSQL connected [OK]
[   0.312984] Loading cache layers... Redis connection established [OK]
[   0.490214] Initializing AI system connection. Gemini and OpenAI APIs linked
[   0.612849] Loading game engine links... Unreal Engine 5.7 bridges operational
[   0.781023] System status: ACTIVE and ready for new campaigns.
[   0.940214] Welcome back, Programmer. Active user: Ayturgan Karagulova.`,
        "skills.json": `<div class="terminal-prompt"><span class="user">aiturgan@karagulova</span>:<span class="loc">~</span>$ cat skills.json</div>
<pre class="code-json">{
  <span class="key">"languages"</span>: [<span class="string">"Python"</span>, <span class="string">"JavaScript"</span>, <span class="string">"TypeScript"</span>, <span class="string">"C++"</span>],
  <span class="key">"backend"</span>: {
    <span class="key">"frameworks"</span>: [<span class="string">"FastAPI"</span>, <span class="string">"Django"</span>, <span class="string">"Flask"</span>],
    <span class="key">"data"</span>: [<span class="string">"PostgreSQL"</span>, <span class="string">"Redis"</span>, <span class="string">"SQLite"</span>]
  },
  <span class="key">"frontend"</span>: {
    <span class="key">"frameworks"</span>: [<span class="string">"React"</span>, <span class="string">"HTML5"</span>, <span class="string">"CSS3"</span>, <span class="string">"VanillaJS"</span>]
  },
  <span class="key">"infrastructure"</span>: [<span class="string">"Docker"</span>, <span class="string">"Nginx"</span>, <span class="string">"Linux"</span>, <span class="string">"CI/CD"</span>],
  <span class="key">"specializations"</span>: {
    <span class="key">"ai_integration"</span>: <span class="boolean">true</span>,
    <span class="key">"game_dev_ue5"</span>: <span class="boolean">true</span>,
    <span class="key">"telegram_bots"</span>: <span class="boolean">true</span>,
    <span class="key">"data_parsing"</span>: <span class="boolean">true</span>
  }
}</pre>`,
        "developer.py": `<div class="terminal-prompt"><span class="user">aiturgan@karagulova</span>:<span class="loc">~</span>$ python3 -m developer</div>
<pre class="code-py"><span class="keyword">class</span> <span class="def">Developer</span>:
    <span class="keyword">def</span> <span class="def">__init__</span>(self):
        self.name = <span class="string">"Ayturgan Karagulova"</span>
        self.role = <span class="string">"AI Fullstack Developer"</span>
        self.xp_years = <span class="number">4</span>  <span class="comment"># Started in 2022</span>
        self.hobbies = [<span class="string">"Coding"</span>, <span class="string">"Gaming"</span>, <span class="string">"Automation"</span>]

    <span class="keyword">def</span> <span class="def">get_status</span>(self):
        <span class="keyword">return</span> {
            <span class="string">"level"</span>: <span class="string">"Middle"</span>,
            <span class="string">"focus"</span>: <span class="string">"Building robust backend and game-like experiences"</span>
        }

dev = Developer()
print(f<span class="string">"{dev.name} initialized as {dev.get_status()['level']} developer!"</span>)
<span class="comment"># Output: Ayturgan Karagulova initialized as Middle developer!</span></pre>`
      },
      ru: {
        "system.log": `<div class="terminal-prompt"><span class="user">aiturgan@karagulova</span>:<span class="loc">~</span>$ cat system.log</div>
[   0.000000] Загрузка Системы Портфолио - Версия 4.2.0-stable
[   0.082490] CPU: Бэкенд-ядро Python V8 работает на полную мощность
[   0.148102] Инициализация памяти: модули FastAPI и Django успешно импортированы
[   0.281489] Подключение базы данных... PostgreSQL [OK]
[   0.312984] Подключение кэширования... Сервер Redis [OK]
[   0.490214] Инициализация ИИ-цепочек. API Gemini и OpenAI связаны
[   0.612849] Связь с игровым движком... Мосты Unreal Engine 5.7 активны
[   0.781023] Состояние системы: АКТИВНО, готова к новым кампаниям.
[   0.940214] Добро пожаловать, Программист. Пользователь: Айтурган Карагулова.`,
        "skills.json": `<div class="terminal-prompt"><span class="user">aiturgan@karagulova</span>:<span class="loc">~</span>$ cat skills.json</div>
<pre class="code-json">{
  <span class="key">"языки"</span>: [<span class="string">"Python"</span>, <span class="string">"JavaScript"</span>, <span class="string">"TypeScript"</span>, <span class="string">"C++"</span>],
  <span class="key">"бэкенд"</span>: {
    <span class="key">"фреймворки"</span>: [<span class="string">"FastAPI"</span>, <span class="string">"Django"</span>, <span class="string">"Flask"</span>],
    <span class="key">"данные"</span>: [<span class="string">"PostgreSQL"</span>, <span class="string">"Redis"</span>, <span class="string">"SQLite"</span>]
  },
  <span class="key">"фронтенд"</span>: {
    <span class="key">"фреймворки"</span>: [<span class="string">"React"</span>, <span class="string">"HTML5"</span>, <span class="string">"CSS3"</span>, <span class="string">"VanillaJS"</span>]
  },
  <span class="key">"инфраструктура"</span>: [<span class="string">"Docker"</span>, <span class="string">"Nginx"</span>, <span class="string">"Linux"</span>, <span class="string">"CI/CD"</span>],
  <span class="key">"специализация"</span>: {
    <span class="key">"интеграция_ии"</span>: <span class="boolean">true</span>,
    <span class="key">"разработка_игр_ue5"</span>: <span class="boolean">true</span>,
    <span class="key">"телеграм_боты"</span>: <span class="boolean">true</span>,
    <span class="key">"парсеры_данных"</span>: <span class="boolean">true</span>
  }
}</pre>`,
        "developer.py": `<div class="terminal-prompt"><span class="user">aiturgan@karagulova</span>:<span class="loc">~</span>$ python3 -m developer</div>
<pre class="code-py"><span class="keyword">class</span> <span class="def">Developer</span>:
    <span class="keyword">def</span> <span class="def">__init__</span>(self):
        self.name = <span class="string">"Айтурган Карагулова"</span>
        self.role = <span class="string">"AI Fullstack Developer"</span>
        self.xp_years = <span class="number">4</span>  <span class="comment"># Старт в 2022 году</span>
        self.hobbies = [<span class="string">"Код"</span>, <span class="string">"Игры"</span>, <span class="string">"Автоматизация"</span>]

    <span class="keyword">def</span> <span class="def">get_status</span>(self):
        <span class="keyword">return</span> {
            <span class="string">"level"</span>: <span class="string">"Middle"</span>,
            <span class="string">"focus"</span>: <span class="string">"Создание бэкенда и игрового опыта"</span>
        }

dev = Developer()
print(f<span class="string">"{dev.name} инициализирована как {dev.get_status()['level']} разработчик!"</span>)
<span class="comment"># Вывод: Айтурган Карагулова инициализирована как Middle разработчик!</span></pre>`
      }
    };

    const updateTerminalContent = (filename) => {
      const currentLang = document.documentElement.lang || "en";
      termBody.innerHTML = terminalDocs[currentLang][filename];
      termTabName.textContent = filename;
    };

    fileItems.forEach((item) => {
      item.addEventListener("click", () => {
        fileItems.forEach((i) => i.classList.remove("active"));
        item.classList.add("active");
        
        activeFile = item.dataset.file;
        updateTerminalContent(activeFile);
        sfx.playClick();
      });
      item.addEventListener("mouseenter", () => sfx.playHover());
    });

    // --- LANGUAGE BUTTON TRIGGERS ---
    document.querySelectorAll(".lang-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        setLanguage(btn.dataset.lang);
        sfx.playToggle();
      });
      btn.addEventListener("mouseenter", () => sfx.playHover());
    });

    // --- DIGITAL SPACE MATRIX CANVAS ---
    const canvas = document.getElementById("spaceCanvas");
    const ctx = canvas.getContext("2d");

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    window.addEventListener("resize", () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    });

    // Interactive tech space grid
    const particles = [];
    const particleCount = 45;

    class Particle {
      constructor() {
        this.reset();
      }

      reset() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.size = Math.random() * 2 + 1;
        this.speedX = Math.random() * 0.4 - 0.2;
        this.speedY = Math.random() * 0.4 - 0.2;
        this.color = Math.random() > 0.85 ? "rgba(255, 42, 95, 0.4)" : "rgba(0, 162, 255, 0.2)";
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.x < 0 || this.x > width || this.y < 0 || this.y > height) {
          this.reset();
        }
      }

      draw() {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    const animateSpace = () => {
      ctx.clearRect(0, 0, width, height);

      // Space Grid removed for clean, non-straining premium visual style
      // Keeping only the smooth starfield particles for visual excellence

      // Draw active binary-hacker particles
      particles.forEach((p) => {
        p.update();
        p.draw();
      });

      requestAnimationFrame(animateSpace);
    };
    animateSpace();

    // --- INITIALIZE APPLICATION STATE ---
    // Inject folder and file icons
    document.getElementById("folderIcon").innerHTML = svgIcons.folder;
    document.getElementById("fileIcon1").innerHTML = svgIcons.file;
    document.getElementById("fileIcon2").innerHTML = svgIcons.filePy;

    // Inject button icons
    document.getElementById("printIcon").innerHTML = svgIcons.print;
    document.getElementById("pdfIcon").innerHTML = svgIcons.pdf;

    const initialLang = localStorage.getItem("resume-lang") || "en";
    setLanguage(initialLang);
    updateSoundButton();
    updateTerminalContent("system.log");

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
