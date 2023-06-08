import { FC, ReactNode, ReactElement } from 'react';

import { GoogleIcon, GithubIcon, AppleIcon, FacebookIcon } from '../icons';

type Props = {
  provider: string;
};

export const ProviderIcon: FC<Props> = ({ provider }) => {
  const icon = iconMap[provider];
  if (!icon) throw new Error(`Invalid provider ${provider}`);
  return icon as ReactElement;
};

const iconMap: Record<string, ReactNode> = {
  google: <GoogleIcon />,
  github: <GithubIcon />,
  apple: <AppleIcon />,
  facebook: <FacebookIcon />,
};
