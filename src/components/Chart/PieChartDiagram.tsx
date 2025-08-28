import { useMediaQuery } from 'react-responsive';
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import { useTheme } from '../../context/ThemeContext';

type PieChartDiagramProps = {
  data: {
    label: string;
    value: number;
  }[];
};

const PieChartDiagram = ({ data }: PieChartDiagramProps) => {
  const { theme } = useTheme();
  const COLORS =
    theme === 'dark'
      ? [
          '#4e79a7',
          '#f28e2b',
          '#e15759',
          '#76b7b2',
          '#59a14f',
          '#edc948',
          '#b07aa1',
          '#ff9da7',
        ]
      : ['#2563eb', '#059669', '#d97706', '#dc2626', '#0d9488', '#c026d3'];
  const isMd = useMediaQuery({ query: '(min-width: 768px)' });
  return (
    <div className='w-full aspect-square max-w-md mx-auto rounded-xl text-neutral/80'>
      <ResponsiveContainer width='100%' height='100%'>
        <PieChart>
          <Pie
            data={data}
            dataKey='value'
            nameKey='label'
            outerRadius={isMd ? 120 : 80}
            label
          >
            {data.map((_entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
          <Tooltip />
          <Legend content={renderLegend} />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PieChartDiagram;

const renderLegend = (props: any) => {
  const { payload } = props;
  return (
    <ul className='text-sm md:text-base flex flex-wrap justify-center gap-x-2 mt-3'>
      {payload.map((entry: any, index: number) => (
        <li key={`item-${index}`} className='flex items-center space-x-2'>
          <span
            className='w-3 h-3 inline-block rounded-sm'
            style={{ backgroundColor: entry.color }}
          />
          <span>{entry.value}</span>
        </li>
      ))}
    </ul>
  );
};
