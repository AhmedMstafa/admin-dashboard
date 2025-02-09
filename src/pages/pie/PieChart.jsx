import { Box, useTheme } from '@mui/material';
import { ResponsivePie } from '@nivo/pie';

const data = [
  {
    id: 'python',
    label: 'python',
    value: 339,
    color: 'hsl(319, 70%, 50%)',
  },
  {
    id: 'go',
    label: 'go',
    value: 149,
    color: 'hsl(281, 70%, 50%)',
  },
  {
    id: 'make',
    label: 'make',
    value: 113,
    color: 'hsl(49, 70%, 50%)',
  },
  {
    id: 'hack',
    label: 'hack',
    value: 346,
    color: 'hsl(62, 70%, 50%)',
  },
  {
    id: 'c',
    label: 'c',
    value: 400,
    color: 'hsl(123, 70%, 50%)',
  },
];

export default function PieChart({ isDashboard = true }) {
  const theme = useTheme();

  return (
    <Box sx={{ height: isDashboard ? '250px' : '75vh' }}>
      <ResponsivePie
        data={data}
        theme={{
          text: {
            fontSize: 11,
            fill: theme.palette.text.primary,
            outlineWidth: 0,
            outlineColor: 'transparent',
          },
          axis: {
            domain: {
              line: {
                stroke: theme.palette.divider,
                strokeWidth: 1,
              },
            },
            legend: {
              text: {
                fontSize: 12,
                fill: theme.palette.text.primary,
                outlineWidth: 0,
                outlineColor: 'transparent',
              },
            },
            ticks: {
              line: {
                stroke: '#777777',
                strokeWidth: 1,
              },
              text: {
                fontSize: 11,
                fill: theme.palette.text.primary,
                outlineWidth: 0,
                outlineColor: 'transparent',
              },
            },
          },
          grid: {
            line: {
              stroke: theme.palette.divider,
              strokeWidth: 1,
            },
          },
          legends: {
            title: {
              text: {
                fontSize: 11,
                fill: theme.palette.text.primary,
                outlineWidth: 0,
                outlineColor: 'transparent',
              },
            },
            text: {
              fontSize: 11,
              fill: theme.palette.text.primary,
              outlineWidth: 0,
              outlineColor: 'transparent',
            },
            ticks: {
              line: {},
              text: {
                fontSize: 10,
                fill: theme.palette.text.primary,
                outlineWidth: 0,
                outlineColor: 'transparent',
              },
            },
          },
          annotations: {
            text: {
              fontSize: 13,
              fill: theme.palette.text.primary,
              outlineWidth: 2,
              outlineColor: '#ffffff',
              outlineOpacity: 1,
            },
            link: {
              stroke: '#000000',
              strokeWidth: 1,
              outlineWidth: 2,
              outlineColor: '#ffffff',
              outlineOpacity: 1,
            },
            outline: {
              stroke: '#000000',
              strokeWidth: 2,
              outlineWidth: 2,
              outlineColor: '#ffffff',
              outlineOpacity: 1,
            },
            symbol: {
              fill: '#000000',
              outlineWidth: 2,
              outlineColor: '#ffffff',
              outlineOpacity: 1,
            },
          },
          tooltip: {
            wrapper: {},
            container: {
              background: theme.palette.background.default,
              color: theme.palette.text.primary,
              fontSize: 12,
            },
            basic: {},
            chip: {},
            table: {},
            tableCell: {},
            tableCellValue: {},
          },
        }}
        margin={
          isDashboard
            ? { top: 10, right: 10, bottom: 10, left: 10 }
            : { top: 40, right: 80, bottom: 80, left: 80 }
        }
        enableArcLabels={!isDashboard}
        enableArcLinkLabels={!isDashboard}
        innerRadius={isDashboard ? 0.7 : 0.5}
        padAngle={0.7}
        cornerRadius={0}
        activeOuterRadiusOffset={8}
        colors={{ scheme: 'paired' }}
        borderWidth={1}
        borderColor={{
          from: 'color',
          modifiers: [['darker', 0.2]],
        }}
        arcLinkLabelsSkipAngle={10}
        arcLinkLabelsTextColor={theme.palette.text.primary}
        arcLinkLabelsThickness={2}
        arcLinkLabelsColor={{ from: 'color' }}
        arcLabelsSkipAngle={10}
        arcLabelsTextColor={{
          from: 'color',
          modifiers: [['darker', 2]],
        }}
        defs={[
          {
            id: 'any',
            type: 'patternany',
            background: 'inherit',
            color: 'rgba(255, 255, 255, 0.3)',
            size: 4,
            padding: 1,
            stagger: true,
          },
          {
            id: 'lines',
            type: 'patternLines',
            background: 'inherit',
            color: 'rgba(255, 255, 255, 0.3)',
            rotation: -45,
            lineWidth: 6,
            spacing: 10,
          },
        ]}
        fill={[
          {
            match: {
              id: 'ruby',
            },
            id: 'any',
          },
          {
            match: {
              id: 'c',
            },
            id: 'any',
          },
          {
            match: {
              id: 'go',
            },
            id: 'any',
          },
          {
            match: {
              id: 'python',
            },
            id: 'any',
          },
          {
            match: {
              id: 'scala',
            },
            id: 'lines',
          },
          {
            match: {
              id: 'lisp',
            },
            id: 'lines',
          },
          {
            match: {
              id: 'elixir',
            },
            id: 'lines',
          },
          {
            match: {
              id: 'javascript',
            },
            id: 'lines',
          },
        ]}
        legends={
          isDashboard
            ? []
            : [
                {
                  anchor: 'bottom',
                  direction: 'row',
                  justify: false,
                  translateX: 0,
                  translateY: 56,
                  itemsSpacing: 0,
                  itemWidth: 100,
                  itemHeight: 18,
                  itemTextColor: theme.palette.text.primary,
                  itemDirection: 'left-to-right',
                  itemOpacity: 1,
                  symbolSize: 18,
                  symbolShape: 'circle',
                  effects: [
                    {
                      on: 'hover',
                      style: {
                        itemTextColor: theme.palette.text.primary,
                      },
                    },
                  ],
                },
              ]
        }
      />
    </Box>
  );
}
