import { css } from '@emotion/react';
import { colors } from '@styles/theme';

export const styles = {
  active: css({
    color: colors.gray[800],
    fontWeight: 600,
    '&:after': {
      visibility: 'visible',
    },
  }),
  noneActive: css({
    color: colors.gray[300],
    '&:after': {
      visibility: 'hidden',
    },
  }),
  common: css({
    position: 'relative',
    transition: '.5s',
    '&:after': {
      content: '""',
      position: 'absolute',
      bottom: 0,
      left: 0,
      width: '100%',
      height: 1,
      background: colors.black,
    },
  }),
};
