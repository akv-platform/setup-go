export enum StableReleaseAlias {
  Stable = 'stable',
  OldStable = 'oldstable'
}

export class VoidError extends Error {
  constructor() {
    super('');
  }
}
