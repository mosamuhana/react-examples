export type ProviderType = 'google' | 'github' | 'apple' | 'facebook';

export type ProviderAuthMode = 'login' | 'signup';

export type ProviderAuthCallback = (provider: ProviderType, mode: ProviderAuthMode) => void;

export interface ILoginData {
  email: string;
  password: string;
}

export interface ISignupData {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
}

export interface IForgetPasswordData {
  email: string;
}
