import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import { format } from 'date-fns';

const data = [
  { date: '2024-03-10', steps: 8234, calories: 2100 },
  { date: '2024-03-11', steps: 7891, calories: 1950 },
  { date: '2024-03-12', steps: 9102, calories: 2300 },
  { date: '2024-03-13', steps: 6723, calories: 1850 },
  { date: '2024-03-14', steps: 8445, calories: 2200 },
  { date: '2024-03-15', steps: 9556, calories: 2400 },
  { date: '2024-03-16', steps: 7123, calories: 1900 },
];

export function ActivityChart() {
  return (
    <div className="h-[300px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <XAxis 
            dataKey="date" 
            tickFormatter={(date) => format(new Date(date), 'MMM d')}
            stroke="#94a3b8"
          />
          <YAxis 
            yAxisId="steps"
            orientation="left"
            tickFormatter={(value) => `${value}`}
            stroke="#94a3b8"
          />
          <YAxis 
            yAxisId="calories"
            orientation="right"
            tickFormatter={(value) => `${value} cal`}
            stroke="#94a3b8"
          />
          <Tooltip
            contentStyle={{
              backgroundColor: 'white',
              borderRadius: '8px',
              border: '1px solid #e2e8f0',
            }}
            formatter={(value, name) => [value, name === 'steps' ? 'Steps' : 'Calories']}
            labelFormatter={(date) => format(new Date(date), 'MMMM d, yyyy')}
          />
          <Line
            yAxisId="steps"
            type="monotone"
            dataKey="steps"
            stroke="var(--primary-500)"
            strokeWidth={2}
            dot={false}
          />
          <Line
            yAxisId="calories"
            type="monotone"
            dataKey="calories"
            stroke="var(--secondary-500)"
            strokeWidth={2}
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}