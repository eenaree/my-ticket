import { css } from '@emotion/react';
import { mq } from '~/styles/mediaQueries';
import { colors } from '~/styles/theme';

export const styles = {
  noneTeamList: css({
    height: 80,
    padding: '1.25rem',
    backgroundColor: colors.gray[100],
    [mq('sm')]: {
      height: 100,
    },
  }),
  teamList: css({
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    minHeight: 80,
    backgroundColor: colors.gray[100],
    [mq('sm')]: {
      minHeight: 100,
    },
  }),
  team: css({
    width: '20%',
    margin: '0.5rem 0',
    textAlign: 'center',
    button: {
      width: 60,
      height: 60,
      backgroundColor: colors.white,
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
