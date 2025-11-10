import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { format } from 'date-fns';

const data = [
  { date: '2024-03-10', hours: 7.5, quality: 85 },
  { date: '2024-03-11', hours: 6.8, quality: 75 },
  { date: '2024-03-12', hours: 8.2, quality: 90 },
  { date: '2024-03-13', hours: 7.1, quality: 82 },
  { date: '2024-03-14', hours: 7.25, quality: 88 },
  { date: '2024-03-15', hours: 6.5, quality: 70 },
  { date: '2024-03-16', hours: 7.8, quality: 85 },
];

export function SleepTracking() {
  return (
    <div className="bg-white rounded-lg border p-4">
      <h3 className="text-lg font-semibold mb-4">Sleep Analysis</h3>
      <div className="h-[200px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <XAxis 
              dataKey="date" 
              tickFormatter={(date) => format(new Date(date), 'EEE')}
              stroke="#94a3b8"
            />
            <YAxis 
              yAxisId="hours"
              orientation="left"
              tickFormatter={(value) => `${value}h`}
              stroke="#94a3b8"
            />
            <YAxis 
              yAxisId="quality"
              orientation="right"
              tickFormatter={(value) => `${value}%`}
              stroke="#94a3b8"
            />
            <Tooltip
              contentStyle={{
                backgroundColor: 'white',
                borderRadius: '8px',
                border: '1px solid #e2e8f0',
              }}
              formatter={(value, name) => [
                name === 'hours' ? `${value} hours` : `${value}%`,
                name === 'hours' ? 'Sleep Duration' : 'Sleep Quality'
              ]}
              labelFormatter={(date) => format(new Date(date), 'MMMM d, yyyy')}
            />
            <Bar yAxisId="hours" dataKey="hours" fill="var(--primary-400)" />
            <Bar yAxisId="quality" dataKey="quality" fill="var(--secondary-400)" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}