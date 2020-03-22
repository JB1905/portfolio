declare global {
  namespace NodeJS {
    interface Global {
      location: string;
    }
  }
}

export default () => (global.location = '/');
