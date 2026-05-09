import satori from 'satori';
import { Resvg } from '@resvg/resvg-js';
import { readFileSync } from 'node:fs';
import { join } from 'node:path';

const projectRoot = process.cwd();

const fontBold = readFileSync(
  join(projectRoot, 'node_modules/@fontsource/montserrat/files/montserrat-latin-700-normal.woff')
);
const fontLight = readFileSync(
  join(projectRoot, 'node_modules/@fontsource/montserrat/files/montserrat-latin-300-normal.woff')
);

const logoSvg = readFileSync(
  join(projectRoot, 'static/assets/logo_cpes-paris-saclay.svg'),
  'utf-8'
);
const logoDataUrl =
  'data:image/svg+xml;base64,' + Buffer.from(logoSvg).toString('base64');

const WIDTH = 1200;
const HEIGHT = 630;

export async function renderOgImage(
  title: string,
  description?: string
): Promise<Buffer> {
  const textChildren: any[] = [
    {
      type: 'div',
      props: {
        style: {
          fontSize: '68px',
          fontWeight: 700,
          color: '#000',
          lineHeight: 1.1,
          display: '-webkit-box',
          WebkitBoxOrient: 'vertical',
          WebkitLineClamp: 2,
          overflow: 'hidden',
          textOverflow: 'ellipsis',
        },
        children: title,
      },
    },
  ];

  if (description) {
    textChildren.push({
      type: 'div',
      props: {
        style: {
          fontSize: '28px',
          fontWeight: 300,
          color: '#222',
          lineHeight: 1.4,
          marginTop: '20px',
          display: '-webkit-box',
          WebkitBoxOrient: 'vertical',
          WebkitLineClamp: 3,
          overflow: 'hidden',
          textOverflow: 'ellipsis',
        },
        children: description,
      },
    });
  }

  const node = {
    type: 'div',
    props: {
      style: {
        width: `${WIDTH}px`,
        height: `${HEIGHT}px`,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        backgroundColor: '#ffffff',
        padding: '64px',
        fontFamily: 'Montserrat',
      },
      children: [
        {
          type: 'img',
          props: {
            src: logoDataUrl,
            width: 705,
            height: 180,
            style: { height: '180px', width: '705px', objectFit: 'contain' },
          },
        },
        {
          type: 'div',
          props: {
            style: { display: 'flex', flexDirection: 'column' },
            children: textChildren,
          },
        },
      ],
    },
  };

  const svg = await satori(node as any, {
    width: WIDTH,
    height: HEIGHT,
    fonts: [
      { name: 'Montserrat', data: fontBold, weight: 700, style: 'normal' },
      { name: 'Montserrat', data: fontLight, weight: 300, style: 'normal' },
    ],
    embedFont: true,
  });

  const resvg = new Resvg(svg, {
    fitTo: { mode: 'width', value: WIDTH },
  });
  return resvg.render().asPng();
}
