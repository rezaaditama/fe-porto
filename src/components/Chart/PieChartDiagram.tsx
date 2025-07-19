import { useMediaQuery } from 'react-responsive';
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

type PieChartDiagramProps = {
  data: {
    label: string;
    value: number;
  }[];
};

const PieChartDiagram = ({ data }: PieChartDiagramProps) => {
  const COLORS = [
    '#2563eb',
    '#059669',
    '#d97706',
    '#dc2626',
    '#0d9488',
    '#c026d3',
  ];
  const isMd = useMediaQuery({ query: '(min-width: 768px)' });
  const outerRadius = isMd ? 130 : 80;

  return (
    <div className='w-[50vh] h-[50vh] md:w-full md:h-full'>
      <ResponsiveContainer>
        <PieChart>
          <Pie
            data={data}
            dataKey='value'
            nameKey='label'
            cx='50%'
            cy='50%'
            outerRadius={outerRadius}
            fill={'#8884d8'}
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
    <ul className='text-sm md:text-base flex flex-wrap justify-center gap-x-2 sm:mt-3'>
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
