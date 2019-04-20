// @flow

export type Settings = {
  dark: boolean,
  primaryColour: string,
  dependenciesCheckOnStartup: boolean,
  filterOutdatedDependencies: boolean
};

export type Process = {
  output: string,
  currLine: string,
  executing: boolean,
  hasErrored: boolean,
  pid?: number
};

export type ProcessState = 'executing' | 'erroring' | 'inactive';

export type Script = {
  name: string,
  command: string
};

export type Author = {
  name: string,
  email: string
};

// TODO: other hosts, i.e. BitBucket
type RespositoryHost = 'github';

export type Package = {
  name: string,
  author: Author,
  description: string,
  keywords: Array<string>,
  repository: ?{
    host: RespositoryHost,
    url: string
  },
  time: string,
  version: string
};

export const DEPENDENCY_TYPES = Object.freeze({
  dependencies: 'DEPENDENCY',
  devDependencies: 'DEV_DEPENDENCY',
  peerDependencies: 'PEER_DEPENDENCY',
  optionalDependency: 'OPTIONAL_DEPENDENCY'
});

export type DependencyType = $Keys<typeof DEPENDENCY_TYPES>;

export type Dependency = Package & {
  outdated: boolean,
  installedVersion?: string,
  type: DependencyType
};

export type DependencySuggestion = {
  name: string,
  version: string,
  description: string
};

type SortOder = 'asc' | 'desc';
export type Sort<Keys> = {
  key: Keys,
  order: SortOder
};
