import { Box, useTheme } from '@mui/material';
import { ResponsiveLine } from '@nivo/line';

const data = [
  {
    id: 'japan',
    color: 'hsl(274, 70%, 50%)',
    data: [
      {
        x: 'plane',
        y: 20,
      },
      {
        x: 'helicopter',
        y: 282,
      },
      {
        x: 'boat',
        y: 206,
      },
      {
        x: 'train',
        y: 40,
      },
      {
        x: 'subway',
        y: 93,
      },
      {
        x: 'bus',
        y: 107,
      },
      {
        x: 'car',
        y: 263,
      },
      {
        x: 'moto',
        y: 258,
      },
      {
        x: 'bicycle',
        y: 182,
      },
      {
        x: 'horse',
        y: 48,
      },
      {
        x: 'skateboard',
        y: 171,
      },
      {
        x: 'others',
        y: 105,
      },
    ],
  },
  {
    id: 'france',
    color: 'hsl(245, 70%, 50%)',
    data: [
      {
        x: 'plane',
        y: 130,
      },
      {
        x: 'helicopter',
        y: 145,
      },
      {
        x: 'boat',
        y: 73,
      },
      {
        x: 'train',
        y: 15,
      },
      {
        x: 'subway',
        y: 15,
      },
      {
        x: 'bus',
        y: 260,
      },
      {
        x: 'car',
        y: 252,
      },
      {
        x: 'moto',
        y: 10,
      },
      {
        x: 'bicycle',
        y: 77,
      },
      {
        x: 'horse',
        y: 227,
      },
      {
        x: 'skateboard',
        y: 235,
      },
      {
        x: 'others',
        y: 7,
      },
    ],
  },
  {
    id: 'us',
    color: 'hsl(223, 70%, 50%)',
    data: [
      {
        x: 'plane',
        y: 33,
      },
      {
        x: 'helicopter',
        y: 297,
      },
      {
        x: 'boat',
        y: 213,
      },
      {
        x: 'train',
        y: 245,
      },
      {
        x: 'subway',
        y: 37,
      },
      {
        x: 'bus',
        y: 146,
      },
      {
        x: 'car',
        y: 20,
      },
      {
        x: 'moto',
        y: 269,
      },
      {
        x: 'bicycle',
        y: 128,
      },
      {
        x: 'horse',
        y: 82,
      },
      {
        x: 'skateboard',
        y: 257,
      },
      {
        x: 'others',
        y: 178,
      },
    ],
  },
  {
    id: 'germany',
    color: 'hsl(44, 70%, 50%)',
    data: [
      {
        x: 'plane',
        y: 294,
      },
      {
        x: 'helicopter',
        y: 201,
      },
      {
        x: 'boat',
        y: 61,
      },
      {
        x: 'train',
        y: 66,
      },
      {
        x: 'subway',
        y: 234,
      },
      {
        x: 'bus',
        y: 268,
      },
      {
        x: 'car',
        y: 117,
      },
      {
        x: 'moto',
        y: 44,
      },
      {
        x: 'bicycle',
        y: 220,
      },
      {
        x: 'horse',
        y: 133,
      },
      {
        x: 'skateboard',
        y: 101,
      },
      {
        x: 'others',
        y: 255,
      },
    ],
  },
];

export default function LineChart() {
  const theme = useTheme();
  return (
    <Box sx={{ height: '75vh' }}>
      <ResponsiveLine
        data={data}
        theme={{
          text: {
            fontSize: 11,
            fill: theme.palette.text.secondary,
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
                fill: theme.palette.text.secondary,
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
                fill: theme.palette.text.secondary,
                outlineWidth: 0,
                outlineColor: 'transparent',
              },
            },
          },
          grid: {
            line: {
              stroke: theme.palette.divider,
              strokeWidth: 0,
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
        margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
        xScale={{ type: 'point' }}
        yScale={{
          type: 'linear',
          min: 'auto',
          max: 'auto',
          stacked: true,
          reverse: false,
        }}
        yFormat=" >-.2f"
        curve="catmullRom"
        axisTop={null}
        axisRight={null}
        axisBottom={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: 'transportation',
          legendOffset: 36,
          legendPosition: 'middle',
          truncateTickAt: 0,
        }}
        axisLeft={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: 'Count',
          legendOffset: -40,
          legendPosition: 'middle',
          truncateTickAt: 0,
        }}
        pointSize={10}
        pointColor={{ theme: 'background' }}
        pointBorderWidth={2}
        pointBorderColor={{ from: 'serieColor' }}
        pointLabel="data.yFormatted"
        pointLabelYOffset={-12}
        enableTouchCrosshair={true}
        useMesh={true}
        legends={[
          {
            anchor: 'bottom-right',
            direction: 'column',
            justify: false,
            translateX: 100,
            translateY: 0,
            itemsSpacing: 0,
            itemDirection: 'left-to-right',
            itemWidth: 80,
            itemHeight: 20,
            itemOpacity: 0.75,
            symbolSize: 12,
            symbolShape: 'circle',
            symbolBorderColor: 'rgba(0, 0, 0, .5)',
            effects: [
              {
                on: 'hover',
                style: {
                  itemBackground: 'rgba(0, 0, 0, .03)',
                  itemOpacity: 1,
                },
              },
            ],
          },
        ]}
      />
    </Box>
  );
}
