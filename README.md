# JIMS Greater Noida — Landing Page

A fully responsive college landing page for **Jagan Institute of Management Studies (JIMS), Greater Noida**, built for the CareerChoice360 assignment.

## 🚀 How to Run Locally

### Option 1 — Open directly
Simply double-click `index.html` to open in any modern browser.

### Option 2 — Local server (recommended)
```bash
# Using Python
python -m http.server 8080

# Then open http://localhost:8080
```

### Option 3 — VS Code Live Server
1. Install the **Live Server** extension in VS Code
2. Right-click `index.html` → **Open with Live Server**

## 📁 Folder Structure

```
landing_page/
├── index.html          # Main HTML page
├── css/
│   └── style.css       # All styles (design tokens, components, responsive)
├── js/
│   └── main.js         # Navbar, mobile menu, scroll reveal, form validation
├── assets/             # Image assets directory
└── README.md
```

## ✅ Sections Included

| # | Section | Description |
|---|---------|-------------|
| 1 | **Hero** | Full-width gradient banner, headline, CTA buttons, entry animations |
| 2 | **About** | College description, campus image, 3 key stats (30+ years, 5000+ alumni, 95% placements) |
| 3 | **Courses** | 6 course cards (PGDM specializations + BBA) with hover effects |
| 4 | **CTA Banner** | Admissions open call-to-action with gradient background |
| 5 | **Enquiry Form** | Name, Email, Phone, Course fields with JS validation + success state |
| 6 | **Footer** | Quick links, programmes, branding |

## 🎨 Design Details

- **Colors**: Navy blue (`#1a3c6e`), gold accent (`#e8a838`), dark (`#0f1c2e`)
- **Fonts**: Outfit (headings), Inter (body) via Google Fonts
- **Responsive**: Mobile-first, tested for 480px / 768px / 1024px+ breakpoints
- **Animations**: Scroll reveal, hover effects, hero entry animations

## 📱 Responsive Breakpoints

- **Mobile** (< 768px): Single column, hamburger menu, stacked cards
- **Tablet** (768–1024px): 2-column course grid, adapted layouts
- **Desktop** (> 1024px): Full grid layouts, side-by-side sections

## 🛠 Technologies

- HTML5 (semantic)
- CSS3 (vanilla, custom properties)
- JavaScript (vanilla, no libraries)

## 🌐 Deployment

This project is **Netlify/Vercel ready** — just drag-and-drop the folder or connect the repository.
