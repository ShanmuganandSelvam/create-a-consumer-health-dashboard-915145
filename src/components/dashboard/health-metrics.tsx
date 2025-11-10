import { Activity, Heart, Moon, Utensils } from 'lucide-react';

const metrics = [
  {
    name: 'Daily Steps',
    value: '8,445',
    change: '+12.5%',
    icon: Activity,
    color: 'primary'
  },
  {
    name: 'Heart Rate',
    value: '72 bpm',
    change: '-3 bpm',
    icon: Heart,
    color: 'danger'
  },
  {
    name: 'Sleep Duration',
    value: '7h 15m',
    change: '+45m',
    icon: Moon,
    color: 'secondary'
  },
  {
    name: 'Calories',
    value: '2,200',
    change: '-150 cal',
    icon: Utensils,
    color: 'success'
  }
];

export function HealthMetrics() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {metrics.map((metric) => (
        <div 
          key={metric.name}
          className="bg-white rounded-lg border p-4 flex items-start space-x-4"
        >
          <div className={`p-2 rounded-lg bg-${metric.color}-100`}>
            <metric.icon className={`w-5 h-5 text-${metric.color}-500`} />
          </div>
          <div>
            <p className="text-sm text-gray-500">{metric.name}</p>
            <p className="text-2xl font-semibold">{metric.value}</p>
            <p className={`text-sm ${metric.change.startsWith('+') ? 'text-success-500' : 'text-danger-500'}`}>
              {metric.change}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}