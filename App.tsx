@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400&display=swap');
@import "tailwindcss";

@theme {
  --font-sans: "Inter", ui-sans-serif, system-ui, sans-serif;
  --font-serif: "Playfair Display", ui-serif, Georgia, Cambria, "Times New Roman", Times, serif;
  
  --color-background: #FAF9F6;
  --color-surface: #FFFFFF;
  --color-primary: #1C1917;
  --color-secondary: #44403C;
  --color-accent: #64748B; /* Muted slate blue */
  --color-accent-light: #F1F5F9;
  --color-muted: #A8A29E;
}

@layer base {
  body {
    @apply bg-[var(--color-background)] text-[var(--color-primary)] font-sans antialiased selection:bg-slate-200;
  }
  
  h1, h2, h3, h4, h5, h6 {
    @apply font-serif tracking-tight;
  }
}
