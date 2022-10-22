import { css } from '@emotion/react';
import { colors } from '~/styles/theme';

export const styles = {
  noneTeamList: css({
    minHeight: 400,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: '1rem',
    borderRadius: 4,
    backgroundColor: colors.gray[100],
    textAlign: 'center',
  }),
  teamList: css({
    height: 400,
    marginBottom: '1rem',
    backgroundColor: colors.gray[100],
    borderRadius: 4,
    li: {
      height: 40,
      borderBottom: `1px solid ${colors.gray[100]}`,
      backgroundColor: colors.white,
    },
    button: {
      display: 'flex',
      alignItems: 'center',
      width: '100%',
      height: '100%',
    },
    em: {
      flexBasis: 20,
      fontStyle: 'italic',
      fontWeight: 600,
      fontSize: '1.4rem',
      color: colors.indigo[600],
    },
    img: {
      width: 40,
      height: 30,
      margin: '0 1rem',
    },
  }),
};
