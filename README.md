# Personal Portfolio Website

A personal portfolio website built with **React and Vite** to showcase my background, technical skills, projects, education, and interests in Machine Learning, Data Science, AI Agents, and Automation.

The portfolio also features an animated **Machine Learning Model Lifecycle** visualization that illustrates the major stages of developing and deploying a machine learning model.

## ✨ Features

- **Personal Introduction:** A hero section with my profile and career interests.
- **About Me:** An overview of my background and learning journey.
- **Technical Skills:** A structured presentation of my technical skills.
- **Interests:** Highlights of my interests in AI, ML, Data Science, and automation.
- **ML Model Lifecycle:** An animated visualization of the machine learning workflow, with play, pause, and restart controls.
- **Projects Showcase:** Displays projects, their current status, and available GitHub or live-demo links.
- **Education:** Academic background and qualifications.
- **Contact Section:** A section for visitors to connect with me.
- **Dark and Light Themes:** Theme switching for a more comfortable viewing experience.
- **Responsive Design:** Layout designed to adapt to different screen sizes.

## 🛠️ Technologies Used

- **React** — Building reusable UI components.
- **Vite** — Development server and build tool.
- **JavaScript (ES6+)** — Application logic and interactivity.
- **CSS3** — Styling, layouts, animations, and responsive design.
- **SVG** — Visual elements for the ML lifecycle diagram.
- **Browser Local Storage** — Persisting the selected theme, if configured in the application.

## 📁 Project Structure

```text
portfolio/
├── public/
├── src/
│   ├── assets/
│   │   └── pic.png
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── Interests.jsx
│   │   ├── MLLifecycle.jsx
│   │   ├── Projects.jsx
│   │   ├── ProjectCard.jsx
│   │   ├── Education.jsx
│   │   ├── Contact.jsx
│   │   ├── Footer.jsx
│   │   └── MLLifecycle.css
│   ├── data/
│   │   ├── profile.js
│   │   ├── skills.js
│   │   └── projects.js
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
└── README.md
```

*Note: The structure above represents the expected organization; adjust filenames to match your actual project.*

## 🚀 Getting Started

### Prerequisites

Make sure you have installed:

- [Node.js](https://nodejs.org/) — preferably a current LTS version.
- npm, which is included with Node.js.
- Git (optional, for version control).

### 1. Clone the Repository

```bash
git clone <your-repository-url>
```

Navigate to the project directory:

```bash
cd portfolio
```

Replace `<your-repository-url>` with your actual GitHub repository URL.

### 2. Install Dependencies

```bash
npm install
```

### 3. Start the Development Server

```bash
npm run dev
```

Open the local URL displayed in your terminal, usually `http://localhost:5173/`.

### 4. Build for Production

```bash
npm run build
```

The production-ready files will be generated in the `dist/` directory.

To preview the production build locally:

```bash
npm run preview
```

## 🧠 ML Model Lifecycle Visualization

The portfolio includes an animated visualization of six conceptual stages in a machine learning workflow:

1. **Data Collection:** Gather relevant data from available sources.
2. **Data Preprocessing:** Clean and prepare data for analysis and training.
3. **Feature Engineering:** Select, transform, or create useful input features.
4. **Model Training:** Train a machine learning algorithm using prepared data.
5. **Model Evaluation:** Assess model performance using appropriate evaluation metrics.
6. **Deployment:** Make the trained model available for use in an application or service.

The animation illustrates the workflow between these stages and includes playback controls for exploring the process.

*The visualization is an educational representation of the ML workflow, not a live model-training or deployment system.*

## 🎨 Customization

You can customize the portfolio by editing the following files:

| File | Purpose |
|---|---|
| `src/data/profile.js` | Personal information and introduction |
| `src/data/skills.js` | Technical skills |
| `src/data/projects.js` | Project descriptions, status, and links |
| `src/components/MLLifecycle.jsx` | ML lifecycle stages and animation logic |
| `src/components/MLLifecycle.css` | ML lifecycle visualization styling |
| `src/index.css` | Global styles, theme variables, and responsive styling |
| `src/App.jsx` | Main application structure and component order |

Update the project data with your actual repository URLs and live-demo links when they become available.

## 📌 Project Status

This portfolio is a work in progress. Features and project information may be updated as I continue learning and building software projects.

## 🎯 Purpose

The goal of this project is to:

- Build and maintain a professional online portfolio.
- Showcase practical software development projects.
- Document my progress in Machine Learning and Data Science.
- Explore interactive UI development and data visualization.
- Share my learning journey toward becoming an AI Engineer.

## 👨‍💻 Author

**Mirza Mohammad Salah Uddin**

Software Engineering Student | Aspiring AI Engineer

Interests: Machine Learning, Data Science, AI Agents, and Automation Systems.

---

If you find this project interesting, feel free to explore the code and follow my learning journey.
