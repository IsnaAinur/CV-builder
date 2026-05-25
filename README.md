# CV Application
CV Application is a web-based resume builder developed using React.js. The application is designed to help users create and manage a simple curriculum vitae by entering personal information, educational background, and work experience through interactive forms.

The project was developed as part of a React learning exercise with a focus on understanding component structure, state management, props, form handling, and conditional rendering in modern frontend development.

## Main Features

```text
1. Users can enter personal data including:

Name
Email address
Phone number

2. Users can add summary and skills

3. Users can add educational history such as:

School or university name
Title of study
Study period

4. Users can provide work experience details including:

Company name
Position title
Main responsibilities
Employment duration

5. Each section supports:

Submit button to display the entered information
Edit button to reopen the form with previously saved values
```

## Project Structure

```text
src
│
├── components
│   ├── GeneralInfo.jsx
│   ├── Education.jsx
│   ├── Experience.jsx
│   └── Preview.jsx
│
├── styles
│   ├── general.css
│   ├── education.css
│   ├── experience.css
│   └── preview.css
│
├── App.jsx
├── main.jsx
└── index.css
```

## Installation Guide

Clone Repository
```bash
git clone https://github.com/IsnaAinur/CV-builder.git

Open Project Directory
```bash
cd CV-builder
```
Install Dependencies
```bash
npm install
```
Run Development Server
```bash
npm run dev
```
If using Create React App:
```bash
npm start