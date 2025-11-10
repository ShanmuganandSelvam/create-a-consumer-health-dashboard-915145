import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from 'recharts';

const data = [
  { name: 'Protein', value: 25 },
  { name: 'Carbs', value: 45 },
  { name: 'Fats', value: 30 }
];

const COLORS = ['var(--primary-400)', 'var(--secondary-400)', 'var(--success-400)'];

export function NutritionSummary() {
  return (
    <div className="bg-white rounded-lg border p-4">
      <h3 className="text-lg font-semibold mb-4">Nutrition Breakdown</h3>
      <div className="h-[200px]">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={80}
              paddingAngle={5}
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>
      <div className="grid grid-cols-3 gap-4 mt-4 text-center">
        {data.map((item, index) => (
          <div key={item.name}>
            <p className="text-sm text-gray-500">{item.name}</p>
            <p className="text-lg font-semibold">{item.value}%</p>
          </div>
        ))}
      </div>
    </div>
  );
}