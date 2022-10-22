import { css } from '@emotion/react';
import { mq } from '~/styles/mediaQueries';

export const styles = {
  radioButtonWrapper: css({
    display: 'flex',
    flexDirection: 'column',
    '> div': {
      margin: '0 0 1rem 0',
    },
    [mq('xs')]: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      marginLeft: '-1rem',
      '> div': {
        maxWidth: 'calc(50% - 1rem)',
        flexBasis: '50%',
        margin: '0 0 1rem 1rem',
      },
    },
    [mq('md')]: {
      '> div': {
        maxWidth: 'calc(25% - 1rem)',
        flexBasis: '25%',
      },
    },
  }),
};
