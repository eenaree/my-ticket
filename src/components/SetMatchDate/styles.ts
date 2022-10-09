import { css } from '@emotion/react';

export const styles = {
  selectCalendar: css({
    display: 'flex',
    marginLeft: '-1rem',
    '> div': {
      flex: '0 1 33.33%',
      margin: '0 0 1rem 1rem',
    },
  }),
};
