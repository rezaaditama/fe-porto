import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from 'recharts';

type chartData = {
  label: string;
  value: number;
};

type BarChartHorizontalDiagramProps = {
  data: chartData[];
  maxValue?: number;
};

const BarChartHorizontalDiagram = ({
  data,
  maxValue = 100,
}: BarChartHorizontalDiagramProps) => {
  const COLORS = ['#1e3a8a', '#0f172a'];

  return (
    <div className='w-full h-auto'>
      <ResponsiveContainer width={'100%'} height={data.length * 45}>
        <BarChart layout='vertical' data={data}>
          <XAxis
            type='number'
            domain={[0, maxValue]}
            tickFormatter={(v) => `${v}%`}
          />
          <YAxis
            type='category'
            dataKey={'label'}
            width={100}
            tick={{ fontSize: 14 }}
          />
          <Tooltip
            formatter={(value: number) => `${value.toFixed(1)}%`}
            labelStyle={{ fontWeight: 'bold' }}
          />
          <Bar dataKey={'value'} barSize={20} radius={[10, 10, 10, 10]} />
          {data.map((_, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default BarChartHorizontalDiagram;
