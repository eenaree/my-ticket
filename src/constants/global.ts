import { Teams } from '@typings/db';

export const BASE_URL = 'http://localhost:8080/api';

export const KBO_LEAGUE_TEAMS = {
  KT: 'KT',
  OB: '두산',
  SS: '삼성',
  LG: 'LG',
  WO: '키움',
  SK: 'SSG',
  LT: '롯데',
  NC: 'NC',
  HT: 'KIA',
  HH: '한화',
} as const;

export const KBOTeams = Object.entries(KBO_LEAGUE_TEAMS) as Teams;

export const KBO_LEAGUE_STADIUMS = {
  KT: '수원 KT 위즈 파크',
  OB: '서울 잠실야구장(두산)',
  SS: '대구 삼성 라이온즈 파크',
  LG: '서울 잠실야구장(LG)',
  WO: '고척 스카이돔',
  SK: '인천 SSG 랜더스필드',
  LT: '부산 사직야구장',
  NC: '창원 NC 파크',
  HT: '광주 기아 챔피언스 필드',
  HH: '대전 한화생명 이글스파크',
} as const;
