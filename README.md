# Techfest IIT Bombay Parallax Webpage

A visually engaging, high-end parallax scrolling webpage themed for IIT Bombay Technology Fest (Techfest). Built with vanilla HTML, CSS, and JavaScript for a premium, lightweight experience.

## Features
- **Advanced Parallax Scrolling:** Multi-layered sections where background, midground, and foreground elements move at different speeds.
- **Varied Reveal Animations:** Dynamic scroll-triggered entrance animations including slides (left/right/down), 3D flips, rotations, and "fountain" scale-bursts.
- **Neon Dark Mode Theme:** A modern, futuristic aesthetic using cyan and magenta neon accents with glassmorphism UI elements.
- **Smooth Performance:** Utilizes `requestAnimationFrame` for jitter-free scroll interpolation.
- **Dynamic Counters:** Animated statistics that count up upon revealing.

## Getting Started

To view the webpage locally, you can use any static file server.
For example, with Python:
```bash
python3 -m http.server 8000
```
Then open `http://localhost:8000` in your web browser.

## Structure
- `index.html`: Contains the structural markup, section definitions, and stagger classes.
- `style.css`: Provides the styling, responsive layout, glassmorphism UI, and varied CSS keyframe/transition animations.
- `main.js`: Drives the interactive parallax scrolling logic, scroll reveals, and stat counter animations.

## Assets
The `assets` folder contains AI-generated conceptual images for Techfest events (Robowars, Workshops, Exhibitions, Stage) and the official IIT Bombay Techfest logo.

## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
