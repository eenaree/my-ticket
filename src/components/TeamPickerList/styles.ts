import { css } from '@emotion/react';
import { mq } from '@styles/mediaQueries';
import { colors } from '@styles/theme';

export const styles = {
  teamList: css({
    display: 'flex',
    flexWrap: 'wrap',
  }),
  teamBox: css({
    width: '40%',
    height: 150,
    margin: '2% 5%',
    border: `1px solid ${colors.gray[300]}`,
    borderRadius: 4,
    textAlign: 'center',
    backgroundImage: 'var(--team-logo)',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: '50% 35%',
    fontWeight: 600,
    label: {
      position: 'relative',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'end',
      height: '100%',
      cursor: 'pointer',
    },
    span: {
      paddingBottom: 20,
    },
    input: {
      position: 'absolute',
      top: 5,
      right: 5,
    },
    [mq('sm')]: {
      width: '16%',
      margin: '2%',
    },
  }),
};
