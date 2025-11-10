import { HealthMetrics } from './components/dashboard/health-metrics';
import { ActivityChart } from './components/dashboard/activity-chart';
import { NutritionSummary } from './components/dashboard/nutrition-summary';
import { SleepTracking } from './components/dashboard/sleep-tracking';
import { WellnessScore } from './components/dashboard/wellness-score';
import { CloudFrontThemeProvider } from './hooks/use-cloudfront-theme';
import { bayerSansClasses } from './lib/bayer-sans';

function App() {
  return (
    <CloudFrontThemeProvider defaultTheme="bayer">
      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-8">
          <div className="mb-8">
            <h1 className={bayerSansClasses.heading.h1}>Health Dashboard</h1>
            <p className={bayerSansClasses.body.large}>
              Track your daily health and wellness metrics
            </p>
          </div>

          <div className="space-y-6">
            {/* Health Metrics Cards */}
            <HealthMetrics />

            {/* Activity Chart */}
            <div className="bg-white rounded-lg border p-4">
              <h3 className="text-lg font-semibold mb-4">Activity Overview</h3>
              <ActivityChart />
            </div>

            {/* Three Column Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <NutritionSummary />
              <SleepTracking />
              <WellnessScore />
            </div>
          </div>
        </div>
      </div>
    </CloudFrontThemeProvider>
  );
}

export default App;