# Redux Micro-Frontend Anarchy Experiment 🚀  

Not your typical micro-frontend: **React, Vue & Svelte frontend experiment**, connected with **Redux** for cross-framework state synchronization and communication.  

This repo demonstrates how different frameworks can **co-exist inside one app** while sharing a **single Redux store**. Each framework manages its own rendering logic, but they all stay in sync thanks to Redux. It’s an experiment in **frontend anarchy** — not production-ready, but fun to explore.  
Mix and match components from different frontend frameworks (React, Vue, Svelte) in the same app.

👉 [Live Demo](https://amirhoseinhesami.github.io/redux-microfront-anarchy-experiment/)  

---

# 📸 Screenshot  

<img width="1569" height="911" alt="Screenshot (506)" src="https://github.com/user-attachments/assets/6ace6a23-4547-42cb-a55f-6feb01b49283" />

---

## 🔧 Setup  

1. **Clone the repo**  
   ```sh
   git clone https://github.com/AmirhoseinHesami/redux-microfront-anarchy-experiment.git
   cd redux-microfront-anarchy-experiment

2. **Install dependencies**  
   ```sh
   npm install --force
   
3. **Start dev server**
   ```sh
   npm run dev

4. **Build for production**
   ```sh
   npm run build

---

## 🎨 Styling
The project uses **TailwindCSS** for styling, ensuring a consistent design system across React, Vue, and Svelte components.  
This highlights how even when frameworks differ, **UI can remain visually cohesive**.  

---

## 🧩 What It Does  

- Mounts **React**, **Vue**, and **Svelte** apps side by side.  
- Connects all of them to a **single Redux store**.  
- Synchronizes basket state instantly across all UIs.  
- Uses **Redux Toolkit** for predictable state updates.  
- Applies **TailwindCSS styling** across frameworks.  
- Demonstrates **cross-framework communication** and **shared design system**.  

---

## ⚡ Tech Stack  

- **React 19**  
- **Vue 3**  
- **Svelte 5**  
- **Redux Toolkit** (shared state)  
- **TailwindCSS** (shared styling)  
- **Vite** (build + dev server)

## 📂 Project Structure  

```sh
src/
├─ react-app/ # React components
├─ vue-app/ # Vue components
├─ svelte-app/ # Svelte components
├─ store/ # Redux store shared across frameworks
└─ main.ts # App entrypoint
```


## 🚀 Why This Project?  

- Explore **micro-frontend experiments** beyond the usual architecture.  
- Show how **different frameworks can share state and styling**.  
- Serve as a **playground for frontend engineers** interested in interop, synchronization, and design consistency.  
