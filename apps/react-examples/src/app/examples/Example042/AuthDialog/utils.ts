const RX_EMAIL = /\S+@\S+\.\S+/;

export const isValidEmail = (email: string) => RX_EMAIL.test(email);
