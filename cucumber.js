export default {
  default: {
    parallel: 1,
    format: [
      'progress-bar',
      ['html', 'reports/cucumber-report.html'],
      ['json', 'reports/cucumber-report.json']
    ],
    paths: ['features/**/*.feature'],
    import: ['features/step_definitions/*.js'],
    requireModule: ['@playwright/test'],
    importWorkersModuleState: false
  }
};