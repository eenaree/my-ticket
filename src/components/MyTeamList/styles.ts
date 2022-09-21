import { css } from '@emotion/react';
import { mq } from '@styles/mediaQueries';
import { colors } from '@styles/theme';

export const styles = {
  noneTeamList: css({
    minHeight: 60,
    padding: '0 1.25rem',
  }),
  teamListWrapper: css({
    display: 'flex',
    flexWrap: 'wrap',
    backgroundColor: colors.gray[100],
    [mq('sm')]: {
      padding: '1rem 0',
    },
  }),
  teamList: css({
    width: '20%',
    margin: '0.5rem 0',
    textAlign: 'center',
    button: {
      width: 60,
      height: 60,
      border: `1px solid ${colors.gray[300]}`,
      borderRadius: '50%',
    },
    [mq('sm')]: {
      width: '10%',
      margin: 0,
      button: {
        width: 70,
        height: 70,
      },
    },
  }),
};
