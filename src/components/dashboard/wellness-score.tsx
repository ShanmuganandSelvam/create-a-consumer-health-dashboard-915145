import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const scores = [
  { name: 'Overall', score: 85, color: 'var(--primary-500)' },
  { name: 'Physical', score: 82, color: 'var(--secondary-500)' },
  { name: 'Mental', score: 88, color: 'var(--success-500)' },
];

export function WellnessScore() {
  return (
    <div className="bg-white rounded-lg border p-4">
      <h3 className="text-lg font-semibold mb-4">Wellness Scores</h3>
      <div className="grid grid-cols-3 gap-4">
        {scores.map((item) => (
          <div key={item.name} className="text-center">
            <div className="w-24 h-24 mx-auto">
              <CircularProgressbar
                value={item.score}
                text={`${item.score}%`}
                styles={buildStyles({
                  pathColor: item.color,
                  textColor: item.color,
                  trailColor: '#f1f5f9',
                })}
              />
            </div>
            <p className="mt-2 text-sm text-gray-600">{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}