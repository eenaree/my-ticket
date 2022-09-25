import { css } from '@emotion/react';
import { mq } from '@styles/mediaQueries';
import { colors } from '@styles/theme';

export const styles = {
  teamList: css({
    display: 'flex',
    flexWrap: 'wrap',
    marginLeft: '-1rem',
    li: {
      width: '50%',
      height: 150,
      marginBottom: '1rem',
      [mq('xs')]: {
        width: '20%',
      },
    },
    span: {
      position: 'relative',
      display: 'block',
      height: '100%',
      margin: '0 0 1rem 1rem',
      borderRadius: 4,
      border: `1px solid ${colors.gray[300]}`,
      backgroundImage: 'var(--team-logo)',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: '50% 35%',
      backgroundSize: '70px 50px',
    },
    label: {
      height: '100%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'end',
      paddingBottom: '1.25rem',
      fontWeight: 600,
      cursor: 'pointer',
    },
    input: {
      position: 'absolute',
      top: 5,
      right: 5,
    },
  }),
};
