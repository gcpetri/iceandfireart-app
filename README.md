# Angular Single Page Application

This is a minimal Angular 19 single-page application (SPA) styled with Bootstrap 5.0. The application is designed for easy future development and deployment to GitHub Pages using GitHub Actions.

## Project Structure

```
angular-spa-app
├── src
│   ├── app
│   │   ├── app.component.ts
│   │   ├── app.component.html
│   │   ├── app.component.css
│   │   └── app.module.ts
│   ├── assets
│   └── index.html
├── .github
│   └── workflows
│       └── deploy.yml
├── angular.json
├── package.json
├── tsconfig.json
└── README.md
```

## Setup Instructions

1. **Clone the repository:**
   ```
   git clone https://github.com/yourusername/angular-spa-app.git
   cd angular-spa-app
   ```

2. **Install dependencies:**
   ```
   npm install
   ```

3. **Run the application:**
   ```
   ng serve
   ```
   Open your browser and navigate to `http://localhost:4200` to see the application in action.

## Deployment

This project includes a GitHub Actions workflow for deploying to GitHub Pages. To deploy your application, push your changes to the `main` branch, and the workflow will automatically build and deploy your application.

## Future Development

Feel free to modify the components, add new features, and enhance the styling as needed. The project is structured to facilitate easy updates and maintenance.