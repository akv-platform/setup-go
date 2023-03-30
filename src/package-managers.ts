type SupportedPackageManagers = {
  [prop: string]: PackageManagerInfo;
};

export interface PackageManagerInfo {
  dependencyFilePattern: string;
  isDependencyFileGoSum?: boolean;
  cacheFolderCommandList: string[];
}

export const supportedPackageManagers: SupportedPackageManagers = {
  default: {
    dependencyFilePattern: 'go.sum',
    isDependencyFileGoSum: true,
    cacheFolderCommandList: ['go env GOMODCACHE', 'go env GOCACHE']
  }
};
