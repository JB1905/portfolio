export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: any }> = { [K in keyof T]: T[K] };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /**
   * A date string, such as 2007-12-03, compliant with the ISO 8601 standard for
   * representation of dates and times using the Gregorian calendar.
   */
  Date: any;
  GRAPHCMS_DateTime: any;
  /**
   * The `Long` scalar type represents non-fractional signed whole numeric values.
   * Long can represent values between -(2^63) and 2^63 - 1.
   */
  GRAPHCMS_Long: any;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
};











export type BooleanQueryOperatorInput = {
  eq?: Maybe<Scalars['Boolean']>;
  ne?: Maybe<Scalars['Boolean']>;
  in?: Maybe<Array<Maybe<Scalars['Boolean']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Boolean']>>>;
};


export type DateQueryOperatorInput = {
  eq?: Maybe<Scalars['Date']>;
  ne?: Maybe<Scalars['Date']>;
  gt?: Maybe<Scalars['Date']>;
  gte?: Maybe<Scalars['Date']>;
  lt?: Maybe<Scalars['Date']>;
  lte?: Maybe<Scalars['Date']>;
  in?: Maybe<Array<Maybe<Scalars['Date']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Date']>>>;
};

export type Directory = Node & {
  sourceInstanceName: Scalars['String'];
  absolutePath: Scalars['String'];
  relativePath: Scalars['String'];
  extension: Scalars['String'];
  size: Scalars['Int'];
  prettySize: Scalars['String'];
  modifiedTime: Scalars['Date'];
  accessTime: Scalars['Date'];
  changeTime: Scalars['Date'];
  birthTime: Scalars['Date'];
  root: Scalars['String'];
  dir: Scalars['String'];
  base: Scalars['String'];
  ext: Scalars['String'];
  name: Scalars['String'];
  relativeDirectory: Scalars['String'];
  dev: Scalars['Int'];
  mode: Scalars['Int'];
  nlink: Scalars['Int'];
  uid: Scalars['Int'];
  gid: Scalars['Int'];
  rdev: Scalars['Int'];
  ino: Scalars['Float'];
  atimeMs: Scalars['Float'];
  mtimeMs: Scalars['Float'];
  ctimeMs: Scalars['Float'];
  atime: Scalars['Date'];
  mtime: Scalars['Date'];
  ctime: Scalars['Date'];
  /** @deprecated Use `birthTime` instead */
  birthtime?: Maybe<Scalars['Date']>;
  /** @deprecated Use `birthTime` instead */
  birthtimeMs?: Maybe<Scalars['Float']>;
  blksize?: Maybe<Scalars['Int']>;
  blocks?: Maybe<Scalars['Int']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type DirectoryModifiedTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type DirectoryAccessTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type DirectoryChangeTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type DirectoryBirthTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type DirectoryAtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type DirectoryMtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type DirectoryCtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type DirectoryConnection = {
  totalCount: Scalars['Int'];
  edges: Array<DirectoryEdge>;
  nodes: Array<Directory>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<DirectoryGroupConnection>;
};


export type DirectoryConnectionDistinctArgs = {
  field: DirectoryFieldsEnum;
};


export type DirectoryConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: DirectoryFieldsEnum;
};

export type DirectoryEdge = {
  next?: Maybe<Directory>;
  node: Directory;
  previous?: Maybe<Directory>;
};

export type DirectoryFieldsEnum = 
  | 'sourceInstanceName'
  | 'absolutePath'
  | 'relativePath'
  | 'extension'
  | 'size'
  | 'prettySize'
  | 'modifiedTime'
  | 'accessTime'
  | 'changeTime'
  | 'birthTime'
  | 'root'
  | 'dir'
  | 'base'
  | 'ext'
  | 'name'
  | 'relativeDirectory'
  | 'dev'
  | 'mode'
  | 'nlink'
  | 'uid'
  | 'gid'
  | 'rdev'
  | 'ino'
  | 'atimeMs'
  | 'mtimeMs'
  | 'ctimeMs'
  | 'atime'
  | 'mtime'
  | 'ctime'
  | 'birthtime'
  | 'birthtimeMs'
  | 'blksize'
  | 'blocks'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type DirectoryFilterInput = {
  sourceInstanceName?: Maybe<StringQueryOperatorInput>;
  absolutePath?: Maybe<StringQueryOperatorInput>;
  relativePath?: Maybe<StringQueryOperatorInput>;
  extension?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<IntQueryOperatorInput>;
  prettySize?: Maybe<StringQueryOperatorInput>;
  modifiedTime?: Maybe<DateQueryOperatorInput>;
  accessTime?: Maybe<DateQueryOperatorInput>;
  changeTime?: Maybe<DateQueryOperatorInput>;
  birthTime?: Maybe<DateQueryOperatorInput>;
  root?: Maybe<StringQueryOperatorInput>;
  dir?: Maybe<StringQueryOperatorInput>;
  base?: Maybe<StringQueryOperatorInput>;
  ext?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  relativeDirectory?: Maybe<StringQueryOperatorInput>;
  dev?: Maybe<IntQueryOperatorInput>;
  mode?: Maybe<IntQueryOperatorInput>;
  nlink?: Maybe<IntQueryOperatorInput>;
  uid?: Maybe<IntQueryOperatorInput>;
  gid?: Maybe<IntQueryOperatorInput>;
  rdev?: Maybe<IntQueryOperatorInput>;
  ino?: Maybe<FloatQueryOperatorInput>;
  atimeMs?: Maybe<FloatQueryOperatorInput>;
  mtimeMs?: Maybe<FloatQueryOperatorInput>;
  ctimeMs?: Maybe<FloatQueryOperatorInput>;
  atime?: Maybe<DateQueryOperatorInput>;
  mtime?: Maybe<DateQueryOperatorInput>;
  ctime?: Maybe<DateQueryOperatorInput>;
  birthtime?: Maybe<DateQueryOperatorInput>;
  birthtimeMs?: Maybe<FloatQueryOperatorInput>;
  blksize?: Maybe<IntQueryOperatorInput>;
  blocks?: Maybe<IntQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type DirectoryGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<DirectoryEdge>;
  nodes: Array<Directory>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type DirectorySortInput = {
  fields?: Maybe<Array<Maybe<DirectoryFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type DuotoneGradient = {
  highlight: Scalars['String'];
  shadow: Scalars['String'];
  opacity?: Maybe<Scalars['Int']>;
};

export type File = Node & {
  sourceInstanceName: Scalars['String'];
  absolutePath: Scalars['String'];
  relativePath: Scalars['String'];
  extension: Scalars['String'];
  size: Scalars['Int'];
  prettySize: Scalars['String'];
  modifiedTime: Scalars['Date'];
  accessTime: Scalars['Date'];
  changeTime: Scalars['Date'];
  birthTime: Scalars['Date'];
  root: Scalars['String'];
  dir: Scalars['String'];
  base: Scalars['String'];
  ext: Scalars['String'];
  name: Scalars['String'];
  relativeDirectory: Scalars['String'];
  dev: Scalars['Int'];
  mode: Scalars['Int'];
  nlink: Scalars['Int'];
  uid: Scalars['Int'];
  gid: Scalars['Int'];
  rdev: Scalars['Int'];
  ino: Scalars['Float'];
  atimeMs: Scalars['Float'];
  mtimeMs: Scalars['Float'];
  ctimeMs: Scalars['Float'];
  atime: Scalars['Date'];
  mtime: Scalars['Date'];
  ctime: Scalars['Date'];
  /** @deprecated Use `birthTime` instead */
  birthtime?: Maybe<Scalars['Date']>;
  /** @deprecated Use `birthTime` instead */
  birthtimeMs?: Maybe<Scalars['Float']>;
  blksize?: Maybe<Scalars['Int']>;
  blocks?: Maybe<Scalars['Int']>;
  /** Copy file to static directory and return public url to it */
  publicURL?: Maybe<Scalars['String']>;
  childImageSharp?: Maybe<ImageSharp>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type FileModifiedTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type FileAccessTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type FileChangeTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type FileBirthTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type FileAtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type FileMtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type FileCtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type FileConnection = {
  totalCount: Scalars['Int'];
  edges: Array<FileEdge>;
  nodes: Array<File>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<FileGroupConnection>;
};


export type FileConnectionDistinctArgs = {
  field: FileFieldsEnum;
};


export type FileConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: FileFieldsEnum;
};

export type FileEdge = {
  next?: Maybe<File>;
  node: File;
  previous?: Maybe<File>;
};

export type FileFieldsEnum = 
  | 'sourceInstanceName'
  | 'absolutePath'
  | 'relativePath'
  | 'extension'
  | 'size'
  | 'prettySize'
  | 'modifiedTime'
  | 'accessTime'
  | 'changeTime'
  | 'birthTime'
  | 'root'
  | 'dir'
  | 'base'
  | 'ext'
  | 'name'
  | 'relativeDirectory'
  | 'dev'
  | 'mode'
  | 'nlink'
  | 'uid'
  | 'gid'
  | 'rdev'
  | 'ino'
  | 'atimeMs'
  | 'mtimeMs'
  | 'ctimeMs'
  | 'atime'
  | 'mtime'
  | 'ctime'
  | 'birthtime'
  | 'birthtimeMs'
  | 'blksize'
  | 'blocks'
  | 'publicURL'
  | 'childImageSharp___fixed___base64'
  | 'childImageSharp___fixed___tracedSVG'
  | 'childImageSharp___fixed___aspectRatio'
  | 'childImageSharp___fixed___width'
  | 'childImageSharp___fixed___height'
  | 'childImageSharp___fixed___src'
  | 'childImageSharp___fixed___srcSet'
  | 'childImageSharp___fixed___srcWebp'
  | 'childImageSharp___fixed___srcSetWebp'
  | 'childImageSharp___fixed___originalName'
  | 'childImageSharp___resolutions___base64'
  | 'childImageSharp___resolutions___tracedSVG'
  | 'childImageSharp___resolutions___aspectRatio'
  | 'childImageSharp___resolutions___width'
  | 'childImageSharp___resolutions___height'
  | 'childImageSharp___resolutions___src'
  | 'childImageSharp___resolutions___srcSet'
  | 'childImageSharp___resolutions___srcWebp'
  | 'childImageSharp___resolutions___srcSetWebp'
  | 'childImageSharp___resolutions___originalName'
  | 'childImageSharp___fluid___base64'
  | 'childImageSharp___fluid___tracedSVG'
  | 'childImageSharp___fluid___aspectRatio'
  | 'childImageSharp___fluid___src'
  | 'childImageSharp___fluid___srcSet'
  | 'childImageSharp___fluid___srcWebp'
  | 'childImageSharp___fluid___srcSetWebp'
  | 'childImageSharp___fluid___sizes'
  | 'childImageSharp___fluid___originalImg'
  | 'childImageSharp___fluid___originalName'
  | 'childImageSharp___fluid___presentationWidth'
  | 'childImageSharp___fluid___presentationHeight'
  | 'childImageSharp___sizes___base64'
  | 'childImageSharp___sizes___tracedSVG'
  | 'childImageSharp___sizes___aspectRatio'
  | 'childImageSharp___sizes___src'
  | 'childImageSharp___sizes___srcSet'
  | 'childImageSharp___sizes___srcWebp'
  | 'childImageSharp___sizes___srcSetWebp'
  | 'childImageSharp___sizes___sizes'
  | 'childImageSharp___sizes___originalImg'
  | 'childImageSharp___sizes___originalName'
  | 'childImageSharp___sizes___presentationWidth'
  | 'childImageSharp___sizes___presentationHeight'
  | 'childImageSharp___original___width'
  | 'childImageSharp___original___height'
  | 'childImageSharp___original___src'
  | 'childImageSharp___resize___src'
  | 'childImageSharp___resize___tracedSVG'
  | 'childImageSharp___resize___width'
  | 'childImageSharp___resize___height'
  | 'childImageSharp___resize___aspectRatio'
  | 'childImageSharp___resize___originalName'
  | 'childImageSharp___id'
  | 'childImageSharp___parent___id'
  | 'childImageSharp___parent___parent___id'
  | 'childImageSharp___parent___parent___children'
  | 'childImageSharp___parent___children'
  | 'childImageSharp___parent___children___id'
  | 'childImageSharp___parent___children___children'
  | 'childImageSharp___parent___internal___content'
  | 'childImageSharp___parent___internal___contentDigest'
  | 'childImageSharp___parent___internal___description'
  | 'childImageSharp___parent___internal___fieldOwners'
  | 'childImageSharp___parent___internal___ignoreType'
  | 'childImageSharp___parent___internal___mediaType'
  | 'childImageSharp___parent___internal___owner'
  | 'childImageSharp___parent___internal___type'
  | 'childImageSharp___children'
  | 'childImageSharp___children___id'
  | 'childImageSharp___children___parent___id'
  | 'childImageSharp___children___parent___children'
  | 'childImageSharp___children___children'
  | 'childImageSharp___children___children___id'
  | 'childImageSharp___children___children___children'
  | 'childImageSharp___children___internal___content'
  | 'childImageSharp___children___internal___contentDigest'
  | 'childImageSharp___children___internal___description'
  | 'childImageSharp___children___internal___fieldOwners'
  | 'childImageSharp___children___internal___ignoreType'
  | 'childImageSharp___children___internal___mediaType'
  | 'childImageSharp___children___internal___owner'
  | 'childImageSharp___children___internal___type'
  | 'childImageSharp___internal___content'
  | 'childImageSharp___internal___contentDigest'
  | 'childImageSharp___internal___description'
  | 'childImageSharp___internal___fieldOwners'
  | 'childImageSharp___internal___ignoreType'
  | 'childImageSharp___internal___mediaType'
  | 'childImageSharp___internal___owner'
  | 'childImageSharp___internal___type'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type FileFilterInput = {
  sourceInstanceName?: Maybe<StringQueryOperatorInput>;
  absolutePath?: Maybe<StringQueryOperatorInput>;
  relativePath?: Maybe<StringQueryOperatorInput>;
  extension?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<IntQueryOperatorInput>;
  prettySize?: Maybe<StringQueryOperatorInput>;
  modifiedTime?: Maybe<DateQueryOperatorInput>;
  accessTime?: Maybe<DateQueryOperatorInput>;
  changeTime?: Maybe<DateQueryOperatorInput>;
  birthTime?: Maybe<DateQueryOperatorInput>;
  root?: Maybe<StringQueryOperatorInput>;
  dir?: Maybe<StringQueryOperatorInput>;
  base?: Maybe<StringQueryOperatorInput>;
  ext?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  relativeDirectory?: Maybe<StringQueryOperatorInput>;
  dev?: Maybe<IntQueryOperatorInput>;
  mode?: Maybe<IntQueryOperatorInput>;
  nlink?: Maybe<IntQueryOperatorInput>;
  uid?: Maybe<IntQueryOperatorInput>;
  gid?: Maybe<IntQueryOperatorInput>;
  rdev?: Maybe<IntQueryOperatorInput>;
  ino?: Maybe<FloatQueryOperatorInput>;
  atimeMs?: Maybe<FloatQueryOperatorInput>;
  mtimeMs?: Maybe<FloatQueryOperatorInput>;
  ctimeMs?: Maybe<FloatQueryOperatorInput>;
  atime?: Maybe<DateQueryOperatorInput>;
  mtime?: Maybe<DateQueryOperatorInput>;
  ctime?: Maybe<DateQueryOperatorInput>;
  birthtime?: Maybe<DateQueryOperatorInput>;
  birthtimeMs?: Maybe<FloatQueryOperatorInput>;
  blksize?: Maybe<IntQueryOperatorInput>;
  blocks?: Maybe<IntQueryOperatorInput>;
  publicURL?: Maybe<StringQueryOperatorInput>;
  childImageSharp?: Maybe<ImageSharpFilterInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type FileGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<FileEdge>;
  nodes: Array<File>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type FileSortInput = {
  fields?: Maybe<Array<Maybe<FileFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type FloatQueryOperatorInput = {
  eq?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
};

export type Graphcms = {
  assets: Array<Maybe<Graphcms_Asset>>;
  projects: Array<Maybe<Graphcms_Project>>;
  technologies: Array<Maybe<Graphcms_Technology>>;
  icons: Array<Maybe<Graphcms_Icon>>;
  asset?: Maybe<Graphcms_Asset>;
  project?: Maybe<Graphcms_Project>;
  technology?: Maybe<Graphcms_Technology>;
  icon?: Maybe<Graphcms_Icon>;
  assetsConnection: Graphcms_AssetConnection;
  projectsConnection: Graphcms_ProjectConnection;
  technologiesConnection: Graphcms_TechnologyConnection;
  iconsConnection: Graphcms_IconConnection;
  /** Fetches an object given its ID */
  node?: Maybe<Graphcms_Node>;
};


export type GraphcmsAssetsArgs = {
  where?: Maybe<Graphcms_AssetWhereInput>;
  orderBy?: Maybe<Graphcms_AssetOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type GraphcmsProjectsArgs = {
  where?: Maybe<Graphcms_ProjectWhereInput>;
  orderBy?: Maybe<Graphcms_ProjectOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type GraphcmsTechnologiesArgs = {
  where?: Maybe<Graphcms_TechnologyWhereInput>;
  orderBy?: Maybe<Graphcms_TechnologyOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type GraphcmsIconsArgs = {
  where?: Maybe<Graphcms_IconWhereInput>;
  orderBy?: Maybe<Graphcms_IconOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type GraphcmsAssetArgs = {
  where: Graphcms_AssetWhereUniqueInput;
};


export type GraphcmsProjectArgs = {
  where: Graphcms_ProjectWhereUniqueInput;
};


export type GraphcmsTechnologyArgs = {
  where: Graphcms_TechnologyWhereUniqueInput;
};


export type GraphcmsIconArgs = {
  where: Graphcms_IconWhereUniqueInput;
};


export type GraphcmsAssetsConnectionArgs = {
  where?: Maybe<Graphcms_AssetWhereInput>;
  orderBy?: Maybe<Graphcms_AssetOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type GraphcmsProjectsConnectionArgs = {
  where?: Maybe<Graphcms_ProjectWhereInput>;
  orderBy?: Maybe<Graphcms_ProjectOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type GraphcmsTechnologiesConnectionArgs = {
  where?: Maybe<Graphcms_TechnologyWhereInput>;
  orderBy?: Maybe<Graphcms_TechnologyOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type GraphcmsIconsConnectionArgs = {
  where?: Maybe<Graphcms_IconWhereInput>;
  orderBy?: Maybe<Graphcms_IconOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type GraphcmsNodeArgs = {
  id: Scalars['ID'];
};

export type Graphcms_AggregateAsset = {
  count: Scalars['Int'];
};

export type Graphcms_AggregateIcon = {
  count: Scalars['Int'];
};

export type Graphcms_AggregateProject = {
  count: Scalars['Int'];
};

export type Graphcms_AggregateTechnology = {
  count: Scalars['Int'];
};

export type Graphcms_Asset = Graphcms_Node & {
  status: Graphcms_Status;
  updatedAt: Scalars['GRAPHCMS_DateTime'];
  createdAt: Scalars['GRAPHCMS_DateTime'];
  id: Scalars['ID'];
  handle: Scalars['String'];
  fileName: Scalars['String'];
  height?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
  mimeType?: Maybe<Scalars['String']>;
  imageProject?: Maybe<Array<Graphcms_Project>>;
  imageTechnology?: Maybe<Array<Graphcms_Technology>>;
  imageIcon?: Maybe<Array<Graphcms_Icon>>;
  /** Get the url for the asset with provided transformations applied. */
  url: Scalars['String'];
};


export type Graphcms_AssetImageProjectArgs = {
  where?: Maybe<Graphcms_ProjectWhereInput>;
  orderBy?: Maybe<Graphcms_ProjectOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type Graphcms_AssetImageTechnologyArgs = {
  where?: Maybe<Graphcms_TechnologyWhereInput>;
  orderBy?: Maybe<Graphcms_TechnologyOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type Graphcms_AssetImageIconArgs = {
  where?: Maybe<Graphcms_IconWhereInput>;
  orderBy?: Maybe<Graphcms_IconOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type Graphcms_AssetUrlArgs = {
  transformation?: Maybe<Graphcms_AssetTransformationInput>;
};

/** A connection to a list of items. */
export type Graphcms_AssetConnection = {
  /** Information to aid in pagination. */
  pageInfo: Graphcms_PageInfo;
  /** A list of edges. */
  edges: Array<Maybe<Graphcms_AssetEdge>>;
  aggregate: Graphcms_AggregateAsset;
};

export type Graphcms_AssetCreateInput = {
  status?: Maybe<Graphcms_Status>;
  handle: Scalars['String'];
  fileName: Scalars['String'];
  height?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
  mimeType?: Maybe<Scalars['String']>;
  imageProject?: Maybe<Graphcms_ProjectCreateManyWithoutImageInput>;
  imageTechnology?: Maybe<Graphcms_TechnologyCreateManyWithoutImageInput>;
  imageIcon?: Maybe<Graphcms_IconCreateManyWithoutImageInput>;
};

export type Graphcms_AssetCreateOneWithoutImageIconInput = {
  upload?: Maybe<Graphcms_AssetUploadWithoutImageIconInput>;
  create?: Maybe<Graphcms_AssetCreateWithoutImageIconInput>;
  connect?: Maybe<Graphcms_AssetWhereUniqueInput>;
};

export type Graphcms_AssetCreateOneWithoutImageProjectInput = {
  upload?: Maybe<Graphcms_AssetUploadWithoutImageProjectInput>;
  create?: Maybe<Graphcms_AssetCreateWithoutImageProjectInput>;
  connect?: Maybe<Graphcms_AssetWhereUniqueInput>;
};

export type Graphcms_AssetCreateOneWithoutImageTechnologyInput = {
  upload?: Maybe<Graphcms_AssetUploadWithoutImageTechnologyInput>;
  create?: Maybe<Graphcms_AssetCreateWithoutImageTechnologyInput>;
  connect?: Maybe<Graphcms_AssetWhereUniqueInput>;
};

export type Graphcms_AssetCreateWithoutImageIconInput = {
  status?: Maybe<Graphcms_Status>;
  handle: Scalars['String'];
  fileName: Scalars['String'];
  height?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
  mimeType?: Maybe<Scalars['String']>;
  imageProject?: Maybe<Graphcms_ProjectCreateManyWithoutImageInput>;
  imageTechnology?: Maybe<Graphcms_TechnologyCreateManyWithoutImageInput>;
};

export type Graphcms_AssetCreateWithoutImageProjectInput = {
  status?: Maybe<Graphcms_Status>;
  handle: Scalars['String'];
  fileName: Scalars['String'];
  height?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
  mimeType?: Maybe<Scalars['String']>;
  imageTechnology?: Maybe<Graphcms_TechnologyCreateManyWithoutImageInput>;
  imageIcon?: Maybe<Graphcms_IconCreateManyWithoutImageInput>;
};

export type Graphcms_AssetCreateWithoutImageTechnologyInput = {
  status?: Maybe<Graphcms_Status>;
  handle: Scalars['String'];
  fileName: Scalars['String'];
  height?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
  mimeType?: Maybe<Scalars['String']>;
  imageProject?: Maybe<Graphcms_ProjectCreateManyWithoutImageInput>;
  imageIcon?: Maybe<Graphcms_IconCreateManyWithoutImageInput>;
};

/** An edge in a connection. */
export type Graphcms_AssetEdge = {
  /** The item at the end of the edge. */
  node: Graphcms_Asset;
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
};

export type Graphcms_AssetOrderByInput = 
  | 'status_ASC'
  | 'status_DESC'
  | 'updatedAt_ASC'
  | 'updatedAt_DESC'
  | 'createdAt_ASC'
  | 'createdAt_DESC'
  | 'id_ASC'
  | 'id_DESC'
  | 'handle_ASC'
  | 'handle_DESC'
  | 'fileName_ASC'
  | 'fileName_DESC'
  | 'height_ASC'
  | 'height_DESC'
  | 'width_ASC'
  | 'width_DESC'
  | 'size_ASC'
  | 'size_DESC'
  | 'mimeType_ASC'
  | 'mimeType_DESC';

export type Graphcms_AssetPreviousValues = {
  status: Graphcms_Status;
  updatedAt: Scalars['GRAPHCMS_DateTime'];
  createdAt: Scalars['GRAPHCMS_DateTime'];
  id: Scalars['ID'];
  handle: Scalars['String'];
  fileName: Scalars['String'];
  height?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
  mimeType?: Maybe<Scalars['String']>;
};

export type Graphcms_AssetSubscriptionPayload = {
  mutation: Graphcms_MutationType;
  node?: Maybe<Graphcms_Asset>;
  updatedFields?: Maybe<Array<Scalars['String']>>;
  previousValues?: Maybe<Graphcms_AssetPreviousValues>;
};

export type Graphcms_AssetSubscriptionWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<Graphcms_AssetSubscriptionWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<Graphcms_AssetSubscriptionWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<Graphcms_AssetSubscriptionWhereInput>>;
  /** The subscription event gets dispatched when it's listed in mutation_in */
  mutation_in?: Maybe<Array<Graphcms_MutationType>>;
  /** The subscription event gets only dispatched when one of the updated fields names is included in this list */
  updatedFields_contains?: Maybe<Scalars['String']>;
  /** The subscription event gets only dispatched when all of the field names included in this list have been updated */
  updatedFields_contains_every?: Maybe<Array<Scalars['String']>>;
  /** The subscription event gets only dispatched when some of the field names included in this list have been updated */
  updatedFields_contains_some?: Maybe<Array<Scalars['String']>>;
  node?: Maybe<Graphcms_AssetWhereInput>;
};

/** Transformations for Assets */
export type Graphcms_AssetTransformationInput = {
  image?: Maybe<Graphcms_ImageTransformationInput>;
  document?: Maybe<Graphcms_DocumentTransformationInput>;
  /** Pass `true` if you want to validate the passed transformation parameters */
  validateOptions?: Maybe<Scalars['Boolean']>;
};

export type Graphcms_AssetUpdateInput = {
  status?: Maybe<Graphcms_Status>;
  handle?: Maybe<Scalars['String']>;
  fileName?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
  mimeType?: Maybe<Scalars['String']>;
  imageProject?: Maybe<Graphcms_ProjectUpdateManyWithoutImageInput>;
  imageTechnology?: Maybe<Graphcms_TechnologyUpdateManyWithoutImageInput>;
  imageIcon?: Maybe<Graphcms_IconUpdateManyWithoutImageInput>;
};

export type Graphcms_AssetUpdateManyMutationInput = {
  status?: Maybe<Graphcms_Status>;
  handle?: Maybe<Scalars['String']>;
  fileName?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
  mimeType?: Maybe<Scalars['String']>;
};

export type Graphcms_AssetUpdateOneWithoutImageIconInput = {
  create?: Maybe<Graphcms_AssetCreateWithoutImageIconInput>;
  connect?: Maybe<Graphcms_AssetWhereUniqueInput>;
  disconnect?: Maybe<Scalars['Boolean']>;
  delete?: Maybe<Scalars['Boolean']>;
  update?: Maybe<Graphcms_AssetUpdateWithoutImageIconDataInput>;
  upsert?: Maybe<Graphcms_AssetUpsertWithoutImageIconInput>;
};

export type Graphcms_AssetUpdateOneWithoutImageProjectInput = {
  create?: Maybe<Graphcms_AssetCreateWithoutImageProjectInput>;
  connect?: Maybe<Graphcms_AssetWhereUniqueInput>;
  disconnect?: Maybe<Scalars['Boolean']>;
  delete?: Maybe<Scalars['Boolean']>;
  update?: Maybe<Graphcms_AssetUpdateWithoutImageProjectDataInput>;
  upsert?: Maybe<Graphcms_AssetUpsertWithoutImageProjectInput>;
};

export type Graphcms_AssetUpdateOneWithoutImageTechnologyInput = {
  create?: Maybe<Graphcms_AssetCreateWithoutImageTechnologyInput>;
  connect?: Maybe<Graphcms_AssetWhereUniqueInput>;
  disconnect?: Maybe<Scalars['Boolean']>;
  delete?: Maybe<Scalars['Boolean']>;
  update?: Maybe<Graphcms_AssetUpdateWithoutImageTechnologyDataInput>;
  upsert?: Maybe<Graphcms_AssetUpsertWithoutImageTechnologyInput>;
};

export type Graphcms_AssetUpdateWithoutImageIconDataInput = {
  status?: Maybe<Graphcms_Status>;
  handle?: Maybe<Scalars['String']>;
  fileName?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
  mimeType?: Maybe<Scalars['String']>;
  imageProject?: Maybe<Graphcms_ProjectUpdateManyWithoutImageInput>;
  imageTechnology?: Maybe<Graphcms_TechnologyUpdateManyWithoutImageInput>;
};

export type Graphcms_AssetUpdateWithoutImageProjectDataInput = {
  status?: Maybe<Graphcms_Status>;
  handle?: Maybe<Scalars['String']>;
  fileName?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
  mimeType?: Maybe<Scalars['String']>;
  imageTechnology?: Maybe<Graphcms_TechnologyUpdateManyWithoutImageInput>;
  imageIcon?: Maybe<Graphcms_IconUpdateManyWithoutImageInput>;
};

export type Graphcms_AssetUpdateWithoutImageTechnologyDataInput = {
  status?: Maybe<Graphcms_Status>;
  handle?: Maybe<Scalars['String']>;
  fileName?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
  mimeType?: Maybe<Scalars['String']>;
  imageProject?: Maybe<Graphcms_ProjectUpdateManyWithoutImageInput>;
  imageIcon?: Maybe<Graphcms_IconUpdateManyWithoutImageInput>;
};

export type Graphcms_AssetUploadInput = {
  url: Scalars['String'];
  status?: Maybe<Graphcms_Status>;
  imageProject?: Maybe<Graphcms_ProjectCreateManyWithoutImageInput>;
  imageTechnology?: Maybe<Graphcms_TechnologyCreateManyWithoutImageInput>;
  imageIcon?: Maybe<Graphcms_IconCreateManyWithoutImageInput>;
};

export type Graphcms_AssetUploadWithoutImageIconInput = {
  url: Scalars['String'];
  status?: Maybe<Graphcms_Status>;
  imageProject?: Maybe<Graphcms_ProjectCreateManyWithoutImageInput>;
  imageTechnology?: Maybe<Graphcms_TechnologyCreateManyWithoutImageInput>;
};

export type Graphcms_AssetUploadWithoutImageProjectInput = {
  url: Scalars['String'];
  status?: Maybe<Graphcms_Status>;
  imageTechnology?: Maybe<Graphcms_TechnologyCreateManyWithoutImageInput>;
  imageIcon?: Maybe<Graphcms_IconCreateManyWithoutImageInput>;
};

export type Graphcms_AssetUploadWithoutImageTechnologyInput = {
  url: Scalars['String'];
  status?: Maybe<Graphcms_Status>;
  imageProject?: Maybe<Graphcms_ProjectCreateManyWithoutImageInput>;
  imageIcon?: Maybe<Graphcms_IconCreateManyWithoutImageInput>;
};

export type Graphcms_AssetUpsertWithoutImageIconInput = {
  update: Graphcms_AssetUpdateWithoutImageIconDataInput;
  create: Graphcms_AssetCreateWithoutImageIconInput;
};

export type Graphcms_AssetUpsertWithoutImageProjectInput = {
  update: Graphcms_AssetUpdateWithoutImageProjectDataInput;
  create: Graphcms_AssetCreateWithoutImageProjectInput;
};

export type Graphcms_AssetUpsertWithoutImageTechnologyInput = {
  update: Graphcms_AssetUpdateWithoutImageTechnologyDataInput;
  create: Graphcms_AssetCreateWithoutImageTechnologyInput;
};

export type Graphcms_AssetWhereInput = {
  _search?: Maybe<Scalars['String']>;
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<Graphcms_AssetWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<Graphcms_AssetWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<Graphcms_AssetWhereInput>>;
  status?: Maybe<Graphcms_Status>;
  /** All values that are not equal to given value. */
  status_not?: Maybe<Graphcms_Status>;
  /** All values that are contained in given list. */
  status_in?: Maybe<Array<Graphcms_Status>>;
  /** All values that are not contained in given list. */
  status_not_in?: Maybe<Array<Graphcms_Status>>;
  updatedAt?: Maybe<Scalars['GRAPHCMS_DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['GRAPHCMS_DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['GRAPHCMS_DateTime']>>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['GRAPHCMS_DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['GRAPHCMS_DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['GRAPHCMS_DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['GRAPHCMS_DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['GRAPHCMS_DateTime']>;
  createdAt?: Maybe<Scalars['GRAPHCMS_DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['GRAPHCMS_DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['GRAPHCMS_DateTime']>>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['GRAPHCMS_DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['GRAPHCMS_DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['GRAPHCMS_DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['GRAPHCMS_DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['GRAPHCMS_DateTime']>;
  id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values less than the given value. */
  id_lt?: Maybe<Scalars['ID']>;
  /** All values less than or equal the given value. */
  id_lte?: Maybe<Scalars['ID']>;
  /** All values greater than the given value. */
  id_gt?: Maybe<Scalars['ID']>;
  /** All values greater than or equal the given value. */
  id_gte?: Maybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string. */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  handle?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  handle_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  handle_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  handle_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  handle_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  handle_lte?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  handle_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  handle_gte?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  handle_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  handle_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  handle_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  handle_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  handle_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  handle_not_ends_with?: Maybe<Scalars['String']>;
  fileName?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  fileName_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  fileName_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  fileName_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  fileName_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  fileName_lte?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  fileName_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  fileName_gte?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  fileName_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  fileName_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  fileName_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  fileName_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  fileName_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  fileName_not_ends_with?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['Float']>;
  /** All values that are not equal to given value. */
  height_not?: Maybe<Scalars['Float']>;
  /** All values that are contained in given list. */
  height_in?: Maybe<Array<Scalars['Float']>>;
  /** All values that are not contained in given list. */
  height_not_in?: Maybe<Array<Scalars['Float']>>;
  /** All values less than the given value. */
  height_lt?: Maybe<Scalars['Float']>;
  /** All values less than or equal the given value. */
  height_lte?: Maybe<Scalars['Float']>;
  /** All values greater than the given value. */
  height_gt?: Maybe<Scalars['Float']>;
  /** All values greater than or equal the given value. */
  height_gte?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Float']>;
  /** All values that are not equal to given value. */
  width_not?: Maybe<Scalars['Float']>;
  /** All values that are contained in given list. */
  width_in?: Maybe<Array<Scalars['Float']>>;
  /** All values that are not contained in given list. */
  width_not_in?: Maybe<Array<Scalars['Float']>>;
  /** All values less than the given value. */
  width_lt?: Maybe<Scalars['Float']>;
  /** All values less than or equal the given value. */
  width_lte?: Maybe<Scalars['Float']>;
  /** All values greater than the given value. */
  width_gt?: Maybe<Scalars['Float']>;
  /** All values greater than or equal the given value. */
  width_gte?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
  /** All values that are not equal to given value. */
  size_not?: Maybe<Scalars['Float']>;
  /** All values that are contained in given list. */
  size_in?: Maybe<Array<Scalars['Float']>>;
  /** All values that are not contained in given list. */
  size_not_in?: Maybe<Array<Scalars['Float']>>;
  /** All values less than the given value. */
  size_lt?: Maybe<Scalars['Float']>;
  /** All values less than or equal the given value. */
  size_lte?: Maybe<Scalars['Float']>;
  /** All values greater than the given value. */
  size_gt?: Maybe<Scalars['Float']>;
  /** All values greater than or equal the given value. */
  size_gte?: Maybe<Scalars['Float']>;
  mimeType?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  mimeType_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  mimeType_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  mimeType_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  mimeType_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  mimeType_lte?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  mimeType_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  mimeType_gte?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  mimeType_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  mimeType_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  mimeType_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  mimeType_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  mimeType_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  mimeType_not_ends_with?: Maybe<Scalars['String']>;
  imageProject_every?: Maybe<Graphcms_ProjectWhereInput>;
  imageProject_some?: Maybe<Graphcms_ProjectWhereInput>;
  imageProject_none?: Maybe<Graphcms_ProjectWhereInput>;
  imageTechnology_every?: Maybe<Graphcms_TechnologyWhereInput>;
  imageTechnology_some?: Maybe<Graphcms_TechnologyWhereInput>;
  imageTechnology_none?: Maybe<Graphcms_TechnologyWhereInput>;
  imageIcon_every?: Maybe<Graphcms_IconWhereInput>;
  imageIcon_some?: Maybe<Graphcms_IconWhereInput>;
  imageIcon_none?: Maybe<Graphcms_IconWhereInput>;
};

export type Graphcms_AssetWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
  handle?: Maybe<Scalars['String']>;
};

export type Graphcms_BatchPayload = {
  /** The number of nodes that have been affected by the Batch operation. */
  count: Scalars['GRAPHCMS_Long'];
};


export type Graphcms_DocumentFileTypes = 
  | 'jpg'
  | 'odp'
  | 'ods'
  | 'odt'
  | 'png'
  | 'svg'
  | 'txt'
  | 'webp'
  | 'docx'
  | 'html'
  | 'pdf'
  | 'doc'
  | 'xlsx'
  | 'xls'
  | 'pptx'
  | 'ppt';

export type Graphcms_DocumentOutputInput = {
  /**
   * Transforms a document into a desired file type.
   * See this matrix for format support:
   * 
   * PDF:	jpg, odp, ods, odt, png, svg, txt, and webp
   * DOC:	docx, html, jpg, odt, pdf, png, svg, txt, and webp
   * DOCX:	doc, html, jpg, odt, pdf, png, svg, txt, and webp
   * ODT:	doc, docx, html, jpg, pdf, png, svg, txt, and webp
   * XLS:	jpg, pdf, ods, png, svg, xlsx, and webp
   * XLSX:	jpg, pdf, ods, png, svg, xls, and webp
   * ODS:	jpg, pdf, png, xls, svg, xlsx, and webp
   * PPT:	jpg, odp, pdf, png, svg, pptx, and webp
   * PPTX:	jpg, odp, pdf, png, svg, ppt, and webp
   * ODP:	jpg, pdf, png, ppt, svg, pptx, and webp
   * BMP:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * GIF:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * JPG:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * PNG:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * WEBP:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * TIFF:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * AI:	    jpg, odp, ods, odt, pdf, png, svg, and webp
   * PSD:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * SVG:	jpg, odp, ods, odt, pdf, png, and webp
   * HTML:	jpg, odt, pdf, svg, txt, and webp
   * TXT:	jpg, html, odt, pdf, svg, and webp
   */
  format?: Maybe<Graphcms_DocumentFileTypes>;
};

/** Transformations for Documents */
export type Graphcms_DocumentTransformationInput = {
  /** Changes the output for the file. */
  output?: Maybe<Graphcms_DocumentOutputInput>;
};

export type Graphcms_Icon = Graphcms_Node & {
  status: Graphcms_Status;
  updatedAt: Scalars['GRAPHCMS_DateTime'];
  createdAt: Scalars['GRAPHCMS_DateTime'];
  id: Scalars['ID'];
  url?: Maybe<Scalars['String']>;
  image?: Maybe<Graphcms_Asset>;
};

/** A connection to a list of items. */
export type Graphcms_IconConnection = {
  /** Information to aid in pagination. */
  pageInfo: Graphcms_PageInfo;
  /** A list of edges. */
  edges: Array<Maybe<Graphcms_IconEdge>>;
  aggregate: Graphcms_AggregateIcon;
};

export type Graphcms_IconCreateInput = {
  status?: Maybe<Graphcms_Status>;
  url?: Maybe<Scalars['String']>;
  image?: Maybe<Graphcms_AssetCreateOneWithoutImageIconInput>;
};

export type Graphcms_IconCreateManyWithoutImageInput = {
  create?: Maybe<Array<Graphcms_IconCreateWithoutImageInput>>;
  connect?: Maybe<Array<Graphcms_IconWhereUniqueInput>>;
};

export type Graphcms_IconCreateWithoutImageInput = {
  status?: Maybe<Graphcms_Status>;
  url?: Maybe<Scalars['String']>;
};

/** An edge in a connection. */
export type Graphcms_IconEdge = {
  /** The item at the end of the edge. */
  node: Graphcms_Icon;
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
};

export type Graphcms_IconOrderByInput = 
  | 'status_ASC'
  | 'status_DESC'
  | 'updatedAt_ASC'
  | 'updatedAt_DESC'
  | 'createdAt_ASC'
  | 'createdAt_DESC'
  | 'id_ASC'
  | 'id_DESC'
  | 'url_ASC'
  | 'url_DESC';

export type Graphcms_IconPreviousValues = {
  status: Graphcms_Status;
  updatedAt: Scalars['GRAPHCMS_DateTime'];
  createdAt: Scalars['GRAPHCMS_DateTime'];
  id: Scalars['ID'];
  url?: Maybe<Scalars['String']>;
};

export type Graphcms_IconScalarWhereInput = {
  _search?: Maybe<Scalars['String']>;
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<Graphcms_IconScalarWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<Graphcms_IconScalarWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<Graphcms_IconScalarWhereInput>>;
  status?: Maybe<Graphcms_Status>;
  /** All values that are not equal to given value. */
  status_not?: Maybe<Graphcms_Status>;
  /** All values that are contained in given list. */
  status_in?: Maybe<Array<Graphcms_Status>>;
  /** All values that are not contained in given list. */
  status_not_in?: Maybe<Array<Graphcms_Status>>;
  updatedAt?: Maybe<Scalars['GRAPHCMS_DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['GRAPHCMS_DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['GRAPHCMS_DateTime']>>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['GRAPHCMS_DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['GRAPHCMS_DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['GRAPHCMS_DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['GRAPHCMS_DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['GRAPHCMS_DateTime']>;
  createdAt?: Maybe<Scalars['GRAPHCMS_DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['GRAPHCMS_DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['GRAPHCMS_DateTime']>>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['GRAPHCMS_DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['GRAPHCMS_DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['GRAPHCMS_DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['GRAPHCMS_DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['GRAPHCMS_DateTime']>;
  id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values less than the given value. */
  id_lt?: Maybe<Scalars['ID']>;
  /** All values less than or equal the given value. */
  id_lte?: Maybe<Scalars['ID']>;
  /** All values greater than the given value. */
  id_gt?: Maybe<Scalars['ID']>;
  /** All values greater than or equal the given value. */
  id_gte?: Maybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string. */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  url?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  url_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  url_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  url_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  url_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  url_lte?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  url_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  url_gte?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  url_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  url_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  url_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  url_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  url_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  url_not_ends_with?: Maybe<Scalars['String']>;
};

export type Graphcms_IconSubscriptionPayload = {
  mutation: Graphcms_MutationType;
  node?: Maybe<Graphcms_Icon>;
  updatedFields?: Maybe<Array<Scalars['String']>>;
  previousValues?: Maybe<Graphcms_IconPreviousValues>;
};

export type Graphcms_IconSubscriptionWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<Graphcms_IconSubscriptionWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<Graphcms_IconSubscriptionWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<Graphcms_IconSubscriptionWhereInput>>;
  /** The subscription event gets dispatched when it's listed in mutation_in */
  mutation_in?: Maybe<Array<Graphcms_MutationType>>;
  /** The subscription event gets only dispatched when one of the updated fields names is included in this list */
  updatedFields_contains?: Maybe<Scalars['String']>;
  /** The subscription event gets only dispatched when all of the field names included in this list have been updated */
  updatedFields_contains_every?: Maybe<Array<Scalars['String']>>;
  /** The subscription event gets only dispatched when some of the field names included in this list have been updated */
  updatedFields_contains_some?: Maybe<Array<Scalars['String']>>;
  node?: Maybe<Graphcms_IconWhereInput>;
};

export type Graphcms_IconUpdateInput = {
  status?: Maybe<Graphcms_Status>;
  url?: Maybe<Scalars['String']>;
  image?: Maybe<Graphcms_AssetUpdateOneWithoutImageIconInput>;
};

export type Graphcms_IconUpdateManyDataInput = {
  status?: Maybe<Graphcms_Status>;
  url?: Maybe<Scalars['String']>;
};

export type Graphcms_IconUpdateManyMutationInput = {
  status?: Maybe<Graphcms_Status>;
  url?: Maybe<Scalars['String']>;
};

export type Graphcms_IconUpdateManyWithoutImageInput = {
  create?: Maybe<Array<Graphcms_IconCreateWithoutImageInput>>;
  connect?: Maybe<Array<Graphcms_IconWhereUniqueInput>>;
  set?: Maybe<Array<Graphcms_IconWhereUniqueInput>>;
  disconnect?: Maybe<Array<Graphcms_IconWhereUniqueInput>>;
  delete?: Maybe<Array<Graphcms_IconWhereUniqueInput>>;
  update?: Maybe<Array<Graphcms_IconUpdateWithWhereUniqueWithoutImageInput>>;
  updateMany?: Maybe<Array<Graphcms_IconUpdateManyWithWhereNestedInput>>;
  deleteMany?: Maybe<Array<Graphcms_IconScalarWhereInput>>;
  upsert?: Maybe<Array<Graphcms_IconUpsertWithWhereUniqueWithoutImageInput>>;
};

export type Graphcms_IconUpdateManyWithWhereNestedInput = {
  where: Graphcms_IconScalarWhereInput;
  data: Graphcms_IconUpdateManyDataInput;
};

export type Graphcms_IconUpdateWithoutImageDataInput = {
  status?: Maybe<Graphcms_Status>;
  url?: Maybe<Scalars['String']>;
};

export type Graphcms_IconUpdateWithWhereUniqueWithoutImageInput = {
  where: Graphcms_IconWhereUniqueInput;
  data: Graphcms_IconUpdateWithoutImageDataInput;
};

export type Graphcms_IconUpsertWithWhereUniqueWithoutImageInput = {
  where: Graphcms_IconWhereUniqueInput;
  update: Graphcms_IconUpdateWithoutImageDataInput;
  create: Graphcms_IconCreateWithoutImageInput;
};

export type Graphcms_IconWhereInput = {
  _search?: Maybe<Scalars['String']>;
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<Graphcms_IconWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<Graphcms_IconWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<Graphcms_IconWhereInput>>;
  status?: Maybe<Graphcms_Status>;
  /** All values that are not equal to given value. */
  status_not?: Maybe<Graphcms_Status>;
  /** All values that are contained in given list. */
  status_in?: Maybe<Array<Graphcms_Status>>;
  /** All values that are not contained in given list. */
  status_not_in?: Maybe<Array<Graphcms_Status>>;
  updatedAt?: Maybe<Scalars['GRAPHCMS_DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['GRAPHCMS_DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['GRAPHCMS_DateTime']>>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['GRAPHCMS_DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['GRAPHCMS_DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['GRAPHCMS_DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['GRAPHCMS_DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['GRAPHCMS_DateTime']>;
  createdAt?: Maybe<Scalars['GRAPHCMS_DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['GRAPHCMS_DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['GRAPHCMS_DateTime']>>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['GRAPHCMS_DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['GRAPHCMS_DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['GRAPHCMS_DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['GRAPHCMS_DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['GRAPHCMS_DateTime']>;
  id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values less than the given value. */
  id_lt?: Maybe<Scalars['ID']>;
  /** All values less than or equal the given value. */
  id_lte?: Maybe<Scalars['ID']>;
  /** All values greater than the given value. */
  id_gt?: Maybe<Scalars['ID']>;
  /** All values greater than or equal the given value. */
  id_gte?: Maybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string. */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  url?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  url_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  url_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  url_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  url_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  url_lte?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  url_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  url_gte?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  url_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  url_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  url_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  url_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  url_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  url_not_ends_with?: Maybe<Scalars['String']>;
  image?: Maybe<Graphcms_AssetWhereInput>;
};

export type Graphcms_IconWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
};

export type Graphcms_ImageFit = 
  /** Resizes the image to fit within the specified parameters without distorting, cropping, or changing the aspect ratio. */
  | 'clip'
  /**
   * Resizes the image to fit the specified parameters exactly by removing any
   * parts of the image that don't fit within the boundaries.
   */
  | 'crop'
  /**
   * Resizes the image to fit the specified parameters exactly by scaling the image
   * to the desired size. The aspect ratio of the image is not respected and the
   * image can be distorted using this method.
   */
  | 'scale'
  /**
   * Resizes the image to fit within the parameters, but as opposed to 'fit:clip'
   * will not scale the image if the image is smaller than the output size.
   */
  | 'max';

export type Graphcms_ImageResizeInput = {
  /** The width in pixels to resize the image to. The value must be an integer from 1 to 10000. */
  width?: Maybe<Scalars['Int']>;
  /** The height in pixels to resize the image to. The value must be an integer from 1 to 10000. */
  height?: Maybe<Scalars['Int']>;
  /** The default value for the fit parameter is fit:clip. */
  fit?: Maybe<Graphcms_ImageFit>;
};

/** Transformations for Images */
export type Graphcms_ImageTransformationInput = {
  /** Resizes the image */
  resize?: Maybe<Graphcms_ImageResizeInput>;
};

export type Graphcms_Locale = 
  | 'EN';


export type Graphcms_MutationType = 
  | 'CREATED'
  | 'UPDATED'
  | 'DELETED';

/** An object with an ID */
export type Graphcms_Node = {
  /** The id of the object. */
  id: Scalars['ID'];
};

/** Information about pagination in a connection. */
export type Graphcms_PageInfo = {
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>;
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>;
};

export type Graphcms_Project = Graphcms_Node & {
  status: Graphcms_Status;
  updatedAt: Scalars['GRAPHCMS_DateTime'];
  createdAt: Scalars['GRAPHCMS_DateTime'];
  id: Scalars['ID'];
  title: Scalars['String'];
  descriptionPl?: Maybe<Scalars['String']>;
  liveLink?: Maybe<Scalars['String']>;
  srcLink?: Maybe<Scalars['String']>;
  image?: Maybe<Graphcms_Asset>;
  descriptionEn?: Maybe<Scalars['String']>;
  date?: Maybe<Scalars['String']>;
  technologies?: Maybe<Array<Graphcms_Technology>>;
};


export type Graphcms_ProjectTechnologiesArgs = {
  where?: Maybe<Graphcms_TechnologyWhereInput>;
  orderBy?: Maybe<Graphcms_TechnologyOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};

/** A connection to a list of items. */
export type Graphcms_ProjectConnection = {
  /** Information to aid in pagination. */
  pageInfo: Graphcms_PageInfo;
  /** A list of edges. */
  edges: Array<Maybe<Graphcms_ProjectEdge>>;
  aggregate: Graphcms_AggregateProject;
};

export type Graphcms_ProjectCreateInput = {
  status?: Maybe<Graphcms_Status>;
  title: Scalars['String'];
  descriptionPl?: Maybe<Scalars['String']>;
  liveLink?: Maybe<Scalars['String']>;
  srcLink?: Maybe<Scalars['String']>;
  descriptionEn?: Maybe<Scalars['String']>;
  date?: Maybe<Scalars['String']>;
  image?: Maybe<Graphcms_AssetCreateOneWithoutImageProjectInput>;
  technologies?: Maybe<Graphcms_TechnologyCreateManyWithoutProjectInput>;
};

export type Graphcms_ProjectCreateManyWithoutImageInput = {
  create?: Maybe<Array<Graphcms_ProjectCreateWithoutImageInput>>;
  connect?: Maybe<Array<Graphcms_ProjectWhereUniqueInput>>;
};

export type Graphcms_ProjectCreateManyWithoutTechnologiesInput = {
  create?: Maybe<Array<Graphcms_ProjectCreateWithoutTechnologiesInput>>;
  connect?: Maybe<Array<Graphcms_ProjectWhereUniqueInput>>;
};

export type Graphcms_ProjectCreateWithoutImageInput = {
  status?: Maybe<Graphcms_Status>;
  title: Scalars['String'];
  descriptionPl?: Maybe<Scalars['String']>;
  liveLink?: Maybe<Scalars['String']>;
  srcLink?: Maybe<Scalars['String']>;
  descriptionEn?: Maybe<Scalars['String']>;
  date?: Maybe<Scalars['String']>;
  technologies?: Maybe<Graphcms_TechnologyCreateManyWithoutProjectInput>;
};

export type Graphcms_ProjectCreateWithoutTechnologiesInput = {
  status?: Maybe<Graphcms_Status>;
  title: Scalars['String'];
  descriptionPl?: Maybe<Scalars['String']>;
  liveLink?: Maybe<Scalars['String']>;
  srcLink?: Maybe<Scalars['String']>;
  descriptionEn?: Maybe<Scalars['String']>;
  date?: Maybe<Scalars['String']>;
  image?: Maybe<Graphcms_AssetCreateOneWithoutImageProjectInput>;
};

/** An edge in a connection. */
export type Graphcms_ProjectEdge = {
  /** The item at the end of the edge. */
  node: Graphcms_Project;
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
};

export type Graphcms_ProjectOrderByInput = 
  | 'status_ASC'
  | 'status_DESC'
  | 'updatedAt_ASC'
  | 'updatedAt_DESC'
  | 'createdAt_ASC'
  | 'createdAt_DESC'
  | 'id_ASC'
  | 'id_DESC'
  | 'title_ASC'
  | 'title_DESC'
  | 'descriptionPl_ASC'
  | 'descriptionPl_DESC'
  | 'liveLink_ASC'
  | 'liveLink_DESC'
  | 'srcLink_ASC'
  | 'srcLink_DESC'
  | 'descriptionEn_ASC'
  | 'descriptionEn_DESC'
  | 'date_ASC'
  | 'date_DESC';

export type Graphcms_ProjectPreviousValues = {
  status: Graphcms_Status;
  updatedAt: Scalars['GRAPHCMS_DateTime'];
  createdAt: Scalars['GRAPHCMS_DateTime'];
  id: Scalars['ID'];
  title: Scalars['String'];
  descriptionPl?: Maybe<Scalars['String']>;
  liveLink?: Maybe<Scalars['String']>;
  srcLink?: Maybe<Scalars['String']>;
  descriptionEn?: Maybe<Scalars['String']>;
  date?: Maybe<Scalars['String']>;
};

export type Graphcms_ProjectScalarWhereInput = {
  _search?: Maybe<Scalars['String']>;
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<Graphcms_ProjectScalarWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<Graphcms_ProjectScalarWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<Graphcms_ProjectScalarWhereInput>>;
  status?: Maybe<Graphcms_Status>;
  /** All values that are not equal to given value. */
  status_not?: Maybe<Graphcms_Status>;
  /** All values that are contained in given list. */
  status_in?: Maybe<Array<Graphcms_Status>>;
  /** All values that are not contained in given list. */
  status_not_in?: Maybe<Array<Graphcms_Status>>;
  updatedAt?: Maybe<Scalars['GRAPHCMS_DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['GRAPHCMS_DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['GRAPHCMS_DateTime']>>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['GRAPHCMS_DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['GRAPHCMS_DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['GRAPHCMS_DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['GRAPHCMS_DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['GRAPHCMS_DateTime']>;
  createdAt?: Maybe<Scalars['GRAPHCMS_DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['GRAPHCMS_DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['GRAPHCMS_DateTime']>>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['GRAPHCMS_DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['GRAPHCMS_DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['GRAPHCMS_DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['GRAPHCMS_DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['GRAPHCMS_DateTime']>;
  id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values less than the given value. */
  id_lt?: Maybe<Scalars['ID']>;
  /** All values less than or equal the given value. */
  id_lte?: Maybe<Scalars['ID']>;
  /** All values greater than the given value. */
  id_gt?: Maybe<Scalars['ID']>;
  /** All values greater than or equal the given value. */
  id_gte?: Maybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string. */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  title?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  title_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  title_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  title_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  title_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  title_lte?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  title_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  title_gte?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  title_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  title_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  title_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  title_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  title_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  title_not_ends_with?: Maybe<Scalars['String']>;
  descriptionPl?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  descriptionPl_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  descriptionPl_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  descriptionPl_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  descriptionPl_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  descriptionPl_lte?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  descriptionPl_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  descriptionPl_gte?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  descriptionPl_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  descriptionPl_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  descriptionPl_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  descriptionPl_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  descriptionPl_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  descriptionPl_not_ends_with?: Maybe<Scalars['String']>;
  liveLink?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  liveLink_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  liveLink_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  liveLink_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  liveLink_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  liveLink_lte?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  liveLink_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  liveLink_gte?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  liveLink_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  liveLink_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  liveLink_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  liveLink_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  liveLink_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  liveLink_not_ends_with?: Maybe<Scalars['String']>;
  srcLink?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  srcLink_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  srcLink_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  srcLink_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  srcLink_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  srcLink_lte?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  srcLink_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  srcLink_gte?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  srcLink_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  srcLink_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  srcLink_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  srcLink_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  srcLink_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  srcLink_not_ends_with?: Maybe<Scalars['String']>;
  descriptionEn?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  descriptionEn_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  descriptionEn_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  descriptionEn_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  descriptionEn_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  descriptionEn_lte?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  descriptionEn_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  descriptionEn_gte?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  descriptionEn_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  descriptionEn_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  descriptionEn_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  descriptionEn_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  descriptionEn_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  descriptionEn_not_ends_with?: Maybe<Scalars['String']>;
  date?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  date_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  date_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  date_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  date_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  date_lte?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  date_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  date_gte?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  date_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  date_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  date_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  date_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  date_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  date_not_ends_with?: Maybe<Scalars['String']>;
};

export type Graphcms_ProjectSubscriptionPayload = {
  mutation: Graphcms_MutationType;
  node?: Maybe<Graphcms_Project>;
  updatedFields?: Maybe<Array<Scalars['String']>>;
  previousValues?: Maybe<Graphcms_ProjectPreviousValues>;
};

export type Graphcms_ProjectSubscriptionWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<Graphcms_ProjectSubscriptionWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<Graphcms_ProjectSubscriptionWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<Graphcms_ProjectSubscriptionWhereInput>>;
  /** The subscription event gets dispatched when it's listed in mutation_in */
  mutation_in?: Maybe<Array<Graphcms_MutationType>>;
  /** The subscription event gets only dispatched when one of the updated fields names is included in this list */
  updatedFields_contains?: Maybe<Scalars['String']>;
  /** The subscription event gets only dispatched when all of the field names included in this list have been updated */
  updatedFields_contains_every?: Maybe<Array<Scalars['String']>>;
  /** The subscription event gets only dispatched when some of the field names included in this list have been updated */
  updatedFields_contains_some?: Maybe<Array<Scalars['String']>>;
  node?: Maybe<Graphcms_ProjectWhereInput>;
};

export type Graphcms_ProjectUpdateInput = {
  status?: Maybe<Graphcms_Status>;
  title?: Maybe<Scalars['String']>;
  descriptionPl?: Maybe<Scalars['String']>;
  liveLink?: Maybe<Scalars['String']>;
  srcLink?: Maybe<Scalars['String']>;
  descriptionEn?: Maybe<Scalars['String']>;
  date?: Maybe<Scalars['String']>;
  image?: Maybe<Graphcms_AssetUpdateOneWithoutImageProjectInput>;
  technologies?: Maybe<Graphcms_TechnologyUpdateManyWithoutProjectInput>;
};

export type Graphcms_ProjectUpdateManyDataInput = {
  status?: Maybe<Graphcms_Status>;
  title?: Maybe<Scalars['String']>;
  descriptionPl?: Maybe<Scalars['String']>;
  liveLink?: Maybe<Scalars['String']>;
  srcLink?: Maybe<Scalars['String']>;
  descriptionEn?: Maybe<Scalars['String']>;
  date?: Maybe<Scalars['String']>;
};

export type Graphcms_ProjectUpdateManyMutationInput = {
  status?: Maybe<Graphcms_Status>;
  title?: Maybe<Scalars['String']>;
  descriptionPl?: Maybe<Scalars['String']>;
  liveLink?: Maybe<Scalars['String']>;
  srcLink?: Maybe<Scalars['String']>;
  descriptionEn?: Maybe<Scalars['String']>;
  date?: Maybe<Scalars['String']>;
};

export type Graphcms_ProjectUpdateManyWithoutImageInput = {
  create?: Maybe<Array<Graphcms_ProjectCreateWithoutImageInput>>;
  connect?: Maybe<Array<Graphcms_ProjectWhereUniqueInput>>;
  set?: Maybe<Array<Graphcms_ProjectWhereUniqueInput>>;
  disconnect?: Maybe<Array<Graphcms_ProjectWhereUniqueInput>>;
  delete?: Maybe<Array<Graphcms_ProjectWhereUniqueInput>>;
  update?: Maybe<Array<Graphcms_ProjectUpdateWithWhereUniqueWithoutImageInput>>;
  updateMany?: Maybe<Array<Graphcms_ProjectUpdateManyWithWhereNestedInput>>;
  deleteMany?: Maybe<Array<Graphcms_ProjectScalarWhereInput>>;
  upsert?: Maybe<Array<Graphcms_ProjectUpsertWithWhereUniqueWithoutImageInput>>;
};

export type Graphcms_ProjectUpdateManyWithoutTechnologiesInput = {
  create?: Maybe<Array<Graphcms_ProjectCreateWithoutTechnologiesInput>>;
  connect?: Maybe<Array<Graphcms_ProjectWhereUniqueInput>>;
  set?: Maybe<Array<Graphcms_ProjectWhereUniqueInput>>;
  disconnect?: Maybe<Array<Graphcms_ProjectWhereUniqueInput>>;
  delete?: Maybe<Array<Graphcms_ProjectWhereUniqueInput>>;
  update?: Maybe<Array<Graphcms_ProjectUpdateWithWhereUniqueWithoutTechnologiesInput>>;
  updateMany?: Maybe<Array<Graphcms_ProjectUpdateManyWithWhereNestedInput>>;
  deleteMany?: Maybe<Array<Graphcms_ProjectScalarWhereInput>>;
  upsert?: Maybe<Array<Graphcms_ProjectUpsertWithWhereUniqueWithoutTechnologiesInput>>;
};

export type Graphcms_ProjectUpdateManyWithWhereNestedInput = {
  where: Graphcms_ProjectScalarWhereInput;
  data: Graphcms_ProjectUpdateManyDataInput;
};

export type Graphcms_ProjectUpdateWithoutImageDataInput = {
  status?: Maybe<Graphcms_Status>;
  title?: Maybe<Scalars['String']>;
  descriptionPl?: Maybe<Scalars['String']>;
  liveLink?: Maybe<Scalars['String']>;
  srcLink?: Maybe<Scalars['String']>;
  descriptionEn?: Maybe<Scalars['String']>;
  date?: Maybe<Scalars['String']>;
  technologies?: Maybe<Graphcms_TechnologyUpdateManyWithoutProjectInput>;
};

export type Graphcms_ProjectUpdateWithoutTechnologiesDataInput = {
  status?: Maybe<Graphcms_Status>;
  title?: Maybe<Scalars['String']>;
  descriptionPl?: Maybe<Scalars['String']>;
  liveLink?: Maybe<Scalars['String']>;
  srcLink?: Maybe<Scalars['String']>;
  descriptionEn?: Maybe<Scalars['String']>;
  date?: Maybe<Scalars['String']>;
  image?: Maybe<Graphcms_AssetUpdateOneWithoutImageProjectInput>;
};

export type Graphcms_ProjectUpdateWithWhereUniqueWithoutImageInput = {
  where: Graphcms_ProjectWhereUniqueInput;
  data: Graphcms_ProjectUpdateWithoutImageDataInput;
};

export type Graphcms_ProjectUpdateWithWhereUniqueWithoutTechnologiesInput = {
  where: Graphcms_ProjectWhereUniqueInput;
  data: Graphcms_ProjectUpdateWithoutTechnologiesDataInput;
};

export type Graphcms_ProjectUpsertWithWhereUniqueWithoutImageInput = {
  where: Graphcms_ProjectWhereUniqueInput;
  update: Graphcms_ProjectUpdateWithoutImageDataInput;
  create: Graphcms_ProjectCreateWithoutImageInput;
};

export type Graphcms_ProjectUpsertWithWhereUniqueWithoutTechnologiesInput = {
  where: Graphcms_ProjectWhereUniqueInput;
  update: Graphcms_ProjectUpdateWithoutTechnologiesDataInput;
  create: Graphcms_ProjectCreateWithoutTechnologiesInput;
};

export type Graphcms_ProjectWhereInput = {
  _search?: Maybe<Scalars['String']>;
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<Graphcms_ProjectWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<Graphcms_ProjectWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<Graphcms_ProjectWhereInput>>;
  status?: Maybe<Graphcms_Status>;
  /** All values that are not equal to given value. */
  status_not?: Maybe<Graphcms_Status>;
  /** All values that are contained in given list. */
  status_in?: Maybe<Array<Graphcms_Status>>;
  /** All values that are not contained in given list. */
  status_not_in?: Maybe<Array<Graphcms_Status>>;
  updatedAt?: Maybe<Scalars['GRAPHCMS_DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['GRAPHCMS_DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['GRAPHCMS_DateTime']>>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['GRAPHCMS_DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['GRAPHCMS_DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['GRAPHCMS_DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['GRAPHCMS_DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['GRAPHCMS_DateTime']>;
  createdAt?: Maybe<Scalars['GRAPHCMS_DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['GRAPHCMS_DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['GRAPHCMS_DateTime']>>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['GRAPHCMS_DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['GRAPHCMS_DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['GRAPHCMS_DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['GRAPHCMS_DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['GRAPHCMS_DateTime']>;
  id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values less than the given value. */
  id_lt?: Maybe<Scalars['ID']>;
  /** All values less than or equal the given value. */
  id_lte?: Maybe<Scalars['ID']>;
  /** All values greater than the given value. */
  id_gt?: Maybe<Scalars['ID']>;
  /** All values greater than or equal the given value. */
  id_gte?: Maybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string. */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  title?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  title_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  title_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  title_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  title_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  title_lte?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  title_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  title_gte?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  title_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  title_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  title_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  title_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  title_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  title_not_ends_with?: Maybe<Scalars['String']>;
  descriptionPl?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  descriptionPl_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  descriptionPl_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  descriptionPl_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  descriptionPl_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  descriptionPl_lte?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  descriptionPl_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  descriptionPl_gte?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  descriptionPl_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  descriptionPl_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  descriptionPl_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  descriptionPl_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  descriptionPl_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  descriptionPl_not_ends_with?: Maybe<Scalars['String']>;
  liveLink?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  liveLink_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  liveLink_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  liveLink_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  liveLink_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  liveLink_lte?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  liveLink_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  liveLink_gte?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  liveLink_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  liveLink_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  liveLink_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  liveLink_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  liveLink_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  liveLink_not_ends_with?: Maybe<Scalars['String']>;
  srcLink?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  srcLink_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  srcLink_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  srcLink_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  srcLink_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  srcLink_lte?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  srcLink_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  srcLink_gte?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  srcLink_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  srcLink_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  srcLink_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  srcLink_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  srcLink_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  srcLink_not_ends_with?: Maybe<Scalars['String']>;
  descriptionEn?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  descriptionEn_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  descriptionEn_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  descriptionEn_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  descriptionEn_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  descriptionEn_lte?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  descriptionEn_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  descriptionEn_gte?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  descriptionEn_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  descriptionEn_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  descriptionEn_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  descriptionEn_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  descriptionEn_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  descriptionEn_not_ends_with?: Maybe<Scalars['String']>;
  date?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  date_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  date_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  date_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  date_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  date_lte?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  date_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  date_gte?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  date_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  date_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  date_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  date_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  date_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  date_not_ends_with?: Maybe<Scalars['String']>;
  image?: Maybe<Graphcms_AssetWhereInput>;
  technologies_every?: Maybe<Graphcms_TechnologyWhereInput>;
  technologies_some?: Maybe<Graphcms_TechnologyWhereInput>;
  technologies_none?: Maybe<Graphcms_TechnologyWhereInput>;
};

export type Graphcms_ProjectWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
};

export type Graphcms_Status = 
  | 'DRAFT'
  | 'PUBLISHED'
  | 'ARCHIVED';

export type Graphcms_Technology = Graphcms_Node & {
  status: Graphcms_Status;
  updatedAt: Scalars['GRAPHCMS_DateTime'];
  createdAt: Scalars['GRAPHCMS_DateTime'];
  id: Scalars['ID'];
  name: Scalars['String'];
  image?: Maybe<Graphcms_Asset>;
  project?: Maybe<Array<Graphcms_Project>>;
};


export type Graphcms_TechnologyProjectArgs = {
  where?: Maybe<Graphcms_ProjectWhereInput>;
  orderBy?: Maybe<Graphcms_ProjectOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};

/** A connection to a list of items. */
export type Graphcms_TechnologyConnection = {
  /** Information to aid in pagination. */
  pageInfo: Graphcms_PageInfo;
  /** A list of edges. */
  edges: Array<Maybe<Graphcms_TechnologyEdge>>;
  aggregate: Graphcms_AggregateTechnology;
};

export type Graphcms_TechnologyCreateInput = {
  status?: Maybe<Graphcms_Status>;
  name: Scalars['String'];
  image?: Maybe<Graphcms_AssetCreateOneWithoutImageTechnologyInput>;
  project?: Maybe<Graphcms_ProjectCreateManyWithoutTechnologiesInput>;
};

export type Graphcms_TechnologyCreateManyWithoutImageInput = {
  create?: Maybe<Array<Graphcms_TechnologyCreateWithoutImageInput>>;
  connect?: Maybe<Array<Graphcms_TechnologyWhereUniqueInput>>;
};

export type Graphcms_TechnologyCreateManyWithoutProjectInput = {
  create?: Maybe<Array<Graphcms_TechnologyCreateWithoutProjectInput>>;
  connect?: Maybe<Array<Graphcms_TechnologyWhereUniqueInput>>;
};

export type Graphcms_TechnologyCreateWithoutImageInput = {
  status?: Maybe<Graphcms_Status>;
  name: Scalars['String'];
  project?: Maybe<Graphcms_ProjectCreateManyWithoutTechnologiesInput>;
};

export type Graphcms_TechnologyCreateWithoutProjectInput = {
  status?: Maybe<Graphcms_Status>;
  name: Scalars['String'];
  image?: Maybe<Graphcms_AssetCreateOneWithoutImageTechnologyInput>;
};

/** An edge in a connection. */
export type Graphcms_TechnologyEdge = {
  /** The item at the end of the edge. */
  node: Graphcms_Technology;
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
};

export type Graphcms_TechnologyOrderByInput = 
  | 'status_ASC'
  | 'status_DESC'
  | 'updatedAt_ASC'
  | 'updatedAt_DESC'
  | 'createdAt_ASC'
  | 'createdAt_DESC'
  | 'id_ASC'
  | 'id_DESC'
  | 'name_ASC'
  | 'name_DESC';

export type Graphcms_TechnologyPreviousValues = {
  status: Graphcms_Status;
  updatedAt: Scalars['GRAPHCMS_DateTime'];
  createdAt: Scalars['GRAPHCMS_DateTime'];
  id: Scalars['ID'];
  name: Scalars['String'];
};

export type Graphcms_TechnologyScalarWhereInput = {
  _search?: Maybe<Scalars['String']>;
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<Graphcms_TechnologyScalarWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<Graphcms_TechnologyScalarWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<Graphcms_TechnologyScalarWhereInput>>;
  status?: Maybe<Graphcms_Status>;
  /** All values that are not equal to given value. */
  status_not?: Maybe<Graphcms_Status>;
  /** All values that are contained in given list. */
  status_in?: Maybe<Array<Graphcms_Status>>;
  /** All values that are not contained in given list. */
  status_not_in?: Maybe<Array<Graphcms_Status>>;
  updatedAt?: Maybe<Scalars['GRAPHCMS_DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['GRAPHCMS_DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['GRAPHCMS_DateTime']>>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['GRAPHCMS_DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['GRAPHCMS_DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['GRAPHCMS_DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['GRAPHCMS_DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['GRAPHCMS_DateTime']>;
  createdAt?: Maybe<Scalars['GRAPHCMS_DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['GRAPHCMS_DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['GRAPHCMS_DateTime']>>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['GRAPHCMS_DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['GRAPHCMS_DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['GRAPHCMS_DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['GRAPHCMS_DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['GRAPHCMS_DateTime']>;
  id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values less than the given value. */
  id_lt?: Maybe<Scalars['ID']>;
  /** All values less than or equal the given value. */
  id_lte?: Maybe<Scalars['ID']>;
  /** All values greater than the given value. */
  id_gt?: Maybe<Scalars['ID']>;
  /** All values greater than or equal the given value. */
  id_gte?: Maybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string. */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  name_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  name_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  name_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  name_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  name_lte?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  name_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  name_gte?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  name_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  name_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  name_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  name_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  name_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  name_not_ends_with?: Maybe<Scalars['String']>;
};

export type Graphcms_TechnologySubscriptionPayload = {
  mutation: Graphcms_MutationType;
  node?: Maybe<Graphcms_Technology>;
  updatedFields?: Maybe<Array<Scalars['String']>>;
  previousValues?: Maybe<Graphcms_TechnologyPreviousValues>;
};

export type Graphcms_TechnologySubscriptionWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<Graphcms_TechnologySubscriptionWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<Graphcms_TechnologySubscriptionWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<Graphcms_TechnologySubscriptionWhereInput>>;
  /** The subscription event gets dispatched when it's listed in mutation_in */
  mutation_in?: Maybe<Array<Graphcms_MutationType>>;
  /** The subscription event gets only dispatched when one of the updated fields names is included in this list */
  updatedFields_contains?: Maybe<Scalars['String']>;
  /** The subscription event gets only dispatched when all of the field names included in this list have been updated */
  updatedFields_contains_every?: Maybe<Array<Scalars['String']>>;
  /** The subscription event gets only dispatched when some of the field names included in this list have been updated */
  updatedFields_contains_some?: Maybe<Array<Scalars['String']>>;
  node?: Maybe<Graphcms_TechnologyWhereInput>;
};

export type Graphcms_TechnologyUpdateInput = {
  status?: Maybe<Graphcms_Status>;
  name?: Maybe<Scalars['String']>;
  image?: Maybe<Graphcms_AssetUpdateOneWithoutImageTechnologyInput>;
  project?: Maybe<Graphcms_ProjectUpdateManyWithoutTechnologiesInput>;
};

export type Graphcms_TechnologyUpdateManyDataInput = {
  status?: Maybe<Graphcms_Status>;
  name?: Maybe<Scalars['String']>;
};

export type Graphcms_TechnologyUpdateManyMutationInput = {
  status?: Maybe<Graphcms_Status>;
  name?: Maybe<Scalars['String']>;
};

export type Graphcms_TechnologyUpdateManyWithoutImageInput = {
  create?: Maybe<Array<Graphcms_TechnologyCreateWithoutImageInput>>;
  connect?: Maybe<Array<Graphcms_TechnologyWhereUniqueInput>>;
  set?: Maybe<Array<Graphcms_TechnologyWhereUniqueInput>>;
  disconnect?: Maybe<Array<Graphcms_TechnologyWhereUniqueInput>>;
  delete?: Maybe<Array<Graphcms_TechnologyWhereUniqueInput>>;
  update?: Maybe<Array<Graphcms_TechnologyUpdateWithWhereUniqueWithoutImageInput>>;
  updateMany?: Maybe<Array<Graphcms_TechnologyUpdateManyWithWhereNestedInput>>;
  deleteMany?: Maybe<Array<Graphcms_TechnologyScalarWhereInput>>;
  upsert?: Maybe<Array<Graphcms_TechnologyUpsertWithWhereUniqueWithoutImageInput>>;
};

export type Graphcms_TechnologyUpdateManyWithoutProjectInput = {
  create?: Maybe<Array<Graphcms_TechnologyCreateWithoutProjectInput>>;
  connect?: Maybe<Array<Graphcms_TechnologyWhereUniqueInput>>;
  set?: Maybe<Array<Graphcms_TechnologyWhereUniqueInput>>;
  disconnect?: Maybe<Array<Graphcms_TechnologyWhereUniqueInput>>;
  delete?: Maybe<Array<Graphcms_TechnologyWhereUniqueInput>>;
  update?: Maybe<Array<Graphcms_TechnologyUpdateWithWhereUniqueWithoutProjectInput>>;
  updateMany?: Maybe<Array<Graphcms_TechnologyUpdateManyWithWhereNestedInput>>;
  deleteMany?: Maybe<Array<Graphcms_TechnologyScalarWhereInput>>;
  upsert?: Maybe<Array<Graphcms_TechnologyUpsertWithWhereUniqueWithoutProjectInput>>;
};

export type Graphcms_TechnologyUpdateManyWithWhereNestedInput = {
  where: Graphcms_TechnologyScalarWhereInput;
  data: Graphcms_TechnologyUpdateManyDataInput;
};

export type Graphcms_TechnologyUpdateWithoutImageDataInput = {
  status?: Maybe<Graphcms_Status>;
  name?: Maybe<Scalars['String']>;
  project?: Maybe<Graphcms_ProjectUpdateManyWithoutTechnologiesInput>;
};

export type Graphcms_TechnologyUpdateWithoutProjectDataInput = {
  status?: Maybe<Graphcms_Status>;
  name?: Maybe<Scalars['String']>;
  image?: Maybe<Graphcms_AssetUpdateOneWithoutImageTechnologyInput>;
};

export type Graphcms_TechnologyUpdateWithWhereUniqueWithoutImageInput = {
  where: Graphcms_TechnologyWhereUniqueInput;
  data: Graphcms_TechnologyUpdateWithoutImageDataInput;
};

export type Graphcms_TechnologyUpdateWithWhereUniqueWithoutProjectInput = {
  where: Graphcms_TechnologyWhereUniqueInput;
  data: Graphcms_TechnologyUpdateWithoutProjectDataInput;
};

export type Graphcms_TechnologyUpsertWithWhereUniqueWithoutImageInput = {
  where: Graphcms_TechnologyWhereUniqueInput;
  update: Graphcms_TechnologyUpdateWithoutImageDataInput;
  create: Graphcms_TechnologyCreateWithoutImageInput;
};

export type Graphcms_TechnologyUpsertWithWhereUniqueWithoutProjectInput = {
  where: Graphcms_TechnologyWhereUniqueInput;
  update: Graphcms_TechnologyUpdateWithoutProjectDataInput;
  create: Graphcms_TechnologyCreateWithoutProjectInput;
};

export type Graphcms_TechnologyWhereInput = {
  _search?: Maybe<Scalars['String']>;
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<Graphcms_TechnologyWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<Graphcms_TechnologyWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<Graphcms_TechnologyWhereInput>>;
  status?: Maybe<Graphcms_Status>;
  /** All values that are not equal to given value. */
  status_not?: Maybe<Graphcms_Status>;
  /** All values that are contained in given list. */
  status_in?: Maybe<Array<Graphcms_Status>>;
  /** All values that are not contained in given list. */
  status_not_in?: Maybe<Array<Graphcms_Status>>;
  updatedAt?: Maybe<Scalars['GRAPHCMS_DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['GRAPHCMS_DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['GRAPHCMS_DateTime']>>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['GRAPHCMS_DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['GRAPHCMS_DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['GRAPHCMS_DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['GRAPHCMS_DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['GRAPHCMS_DateTime']>;
  createdAt?: Maybe<Scalars['GRAPHCMS_DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['GRAPHCMS_DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['GRAPHCMS_DateTime']>>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['GRAPHCMS_DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['GRAPHCMS_DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['GRAPHCMS_DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['GRAPHCMS_DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['GRAPHCMS_DateTime']>;
  id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values less than the given value. */
  id_lt?: Maybe<Scalars['ID']>;
  /** All values less than or equal the given value. */
  id_lte?: Maybe<Scalars['ID']>;
  /** All values greater than the given value. */
  id_gt?: Maybe<Scalars['ID']>;
  /** All values greater than or equal the given value. */
  id_gte?: Maybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string. */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  name_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  name_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  name_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  name_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  name_lte?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  name_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  name_gte?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  name_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  name_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  name_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  name_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  name_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  name_not_ends_with?: Maybe<Scalars['String']>;
  image?: Maybe<Graphcms_AssetWhereInput>;
  project_every?: Maybe<Graphcms_ProjectWhereInput>;
  project_some?: Maybe<Graphcms_ProjectWhereInput>;
  project_none?: Maybe<Graphcms_ProjectWhereInput>;
};

export type Graphcms_TechnologyWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
};

export type GraphQlSource = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  typeName?: Maybe<Scalars['String']>;
  fieldName?: Maybe<Scalars['String']>;
};

export type GraphQlSourceConnection = {
  totalCount: Scalars['Int'];
  edges: Array<GraphQlSourceEdge>;
  nodes: Array<GraphQlSource>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<GraphQlSourceGroupConnection>;
};


export type GraphQlSourceConnectionDistinctArgs = {
  field: GraphQlSourceFieldsEnum;
};


export type GraphQlSourceConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: GraphQlSourceFieldsEnum;
};

export type GraphQlSourceEdge = {
  next?: Maybe<GraphQlSource>;
  node: GraphQlSource;
  previous?: Maybe<GraphQlSource>;
};

export type GraphQlSourceFieldsEnum = 
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'typeName'
  | 'fieldName';

export type GraphQlSourceFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  typeName?: Maybe<StringQueryOperatorInput>;
  fieldName?: Maybe<StringQueryOperatorInput>;
};

export type GraphQlSourceGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<GraphQlSourceEdge>;
  nodes: Array<GraphQlSource>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type GraphQlSourceSortInput = {
  fields?: Maybe<Array<Maybe<GraphQlSourceFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type ImageCropFocus = 
  | 'CENTER'
  | 'NORTH'
  | 'NORTHEAST'
  | 'EAST'
  | 'SOUTHEAST'
  | 'SOUTH'
  | 'SOUTHWEST'
  | 'WEST'
  | 'NORTHWEST'
  | 'ENTROPY'
  | 'ATTENTION';

export type ImageFit = 
  | 'COVER'
  | 'CONTAIN'
  | 'FILL'
  | 'INSIDE'
  | 'OUTSIDE';

export type ImageFormat = 
  | 'NO_CHANGE'
  | 'JPG'
  | 'PNG'
  | 'WEBP';

export type ImageSharp = Node & {
  fixed?: Maybe<ImageSharpFixed>;
  /** @deprecated Resolutions was deprecated in Gatsby v2. It's been renamed to "fixed" https://example.com/write-docs-and-fix-this-example-link */
  resolutions?: Maybe<ImageSharpResolutions>;
  fluid?: Maybe<ImageSharpFluid>;
  /** @deprecated Sizes was deprecated in Gatsby v2. It's been renamed to "fluid" https://example.com/write-docs-and-fix-this-example-link */
  sizes?: Maybe<ImageSharpSizes>;
  original?: Maybe<ImageSharpOriginal>;
  resize?: Maybe<ImageSharpResize>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type ImageSharpFixedArgs = {
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  base64Width?: Maybe<Scalars['Int']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  pngCompressionSpeed?: Maybe<Scalars['Int']>;
  grayscale?: Maybe<Scalars['Boolean']>;
  duotone?: Maybe<DuotoneGradient>;
  traceSVG?: Maybe<Potrace>;
  quality?: Maybe<Scalars['Int']>;
  jpegQuality?: Maybe<Scalars['Int']>;
  pngQuality?: Maybe<Scalars['Int']>;
  webpQuality?: Maybe<Scalars['Int']>;
  toFormat?: Maybe<ImageFormat>;
  toFormatBase64?: Maybe<ImageFormat>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
  background?: Maybe<Scalars['String']>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
};


export type ImageSharpResolutionsArgs = {
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  base64Width?: Maybe<Scalars['Int']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  pngCompressionSpeed?: Maybe<Scalars['Int']>;
  grayscale?: Maybe<Scalars['Boolean']>;
  duotone?: Maybe<DuotoneGradient>;
  traceSVG?: Maybe<Potrace>;
  quality?: Maybe<Scalars['Int']>;
  jpegQuality?: Maybe<Scalars['Int']>;
  pngQuality?: Maybe<Scalars['Int']>;
  webpQuality?: Maybe<Scalars['Int']>;
  toFormat?: Maybe<ImageFormat>;
  toFormatBase64?: Maybe<ImageFormat>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
  background?: Maybe<Scalars['String']>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
};


export type ImageSharpFluidArgs = {
  maxWidth?: Maybe<Scalars['Int']>;
  maxHeight?: Maybe<Scalars['Int']>;
  base64Width?: Maybe<Scalars['Int']>;
  grayscale?: Maybe<Scalars['Boolean']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  pngCompressionSpeed?: Maybe<Scalars['Int']>;
  duotone?: Maybe<DuotoneGradient>;
  traceSVG?: Maybe<Potrace>;
  quality?: Maybe<Scalars['Int']>;
  jpegQuality?: Maybe<Scalars['Int']>;
  pngQuality?: Maybe<Scalars['Int']>;
  webpQuality?: Maybe<Scalars['Int']>;
  toFormat?: Maybe<ImageFormat>;
  toFormatBase64?: Maybe<ImageFormat>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
  background?: Maybe<Scalars['String']>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
  sizes?: Maybe<Scalars['String']>;
  srcSetBreakpoints?: Maybe<Array<Maybe<Scalars['Int']>>>;
};


export type ImageSharpSizesArgs = {
  maxWidth?: Maybe<Scalars['Int']>;
  maxHeight?: Maybe<Scalars['Int']>;
  base64Width?: Maybe<Scalars['Int']>;
  grayscale?: Maybe<Scalars['Boolean']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  pngCompressionSpeed?: Maybe<Scalars['Int']>;
  duotone?: Maybe<DuotoneGradient>;
  traceSVG?: Maybe<Potrace>;
  quality?: Maybe<Scalars['Int']>;
  jpegQuality?: Maybe<Scalars['Int']>;
  pngQuality?: Maybe<Scalars['Int']>;
  webpQuality?: Maybe<Scalars['Int']>;
  toFormat?: Maybe<ImageFormat>;
  toFormatBase64?: Maybe<ImageFormat>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
  background?: Maybe<Scalars['String']>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
  sizes?: Maybe<Scalars['String']>;
  srcSetBreakpoints?: Maybe<Array<Maybe<Scalars['Int']>>>;
};


export type ImageSharpResizeArgs = {
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  quality?: Maybe<Scalars['Int']>;
  jpegQuality?: Maybe<Scalars['Int']>;
  pngQuality?: Maybe<Scalars['Int']>;
  webpQuality?: Maybe<Scalars['Int']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  pngCompressionLevel?: Maybe<Scalars['Int']>;
  pngCompressionSpeed?: Maybe<Scalars['Int']>;
  grayscale?: Maybe<Scalars['Boolean']>;
  duotone?: Maybe<DuotoneGradient>;
  base64?: Maybe<Scalars['Boolean']>;
  traceSVG?: Maybe<Potrace>;
  toFormat?: Maybe<ImageFormat>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
  background?: Maybe<Scalars['String']>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
};

export type ImageSharpConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ImageSharpEdge>;
  nodes: Array<ImageSharp>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<ImageSharpGroupConnection>;
};


export type ImageSharpConnectionDistinctArgs = {
  field: ImageSharpFieldsEnum;
};


export type ImageSharpConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ImageSharpFieldsEnum;
};

export type ImageSharpEdge = {
  next?: Maybe<ImageSharp>;
  node: ImageSharp;
  previous?: Maybe<ImageSharp>;
};

export type ImageSharpFieldsEnum = 
  | 'fixed___base64'
  | 'fixed___tracedSVG'
  | 'fixed___aspectRatio'
  | 'fixed___width'
  | 'fixed___height'
  | 'fixed___src'
  | 'fixed___srcSet'
  | 'fixed___srcWebp'
  | 'fixed___srcSetWebp'
  | 'fixed___originalName'
  | 'resolutions___base64'
  | 'resolutions___tracedSVG'
  | 'resolutions___aspectRatio'
  | 'resolutions___width'
  | 'resolutions___height'
  | 'resolutions___src'
  | 'resolutions___srcSet'
  | 'resolutions___srcWebp'
  | 'resolutions___srcSetWebp'
  | 'resolutions___originalName'
  | 'fluid___base64'
  | 'fluid___tracedSVG'
  | 'fluid___aspectRatio'
  | 'fluid___src'
  | 'fluid___srcSet'
  | 'fluid___srcWebp'
  | 'fluid___srcSetWebp'
  | 'fluid___sizes'
  | 'fluid___originalImg'
  | 'fluid___originalName'
  | 'fluid___presentationWidth'
  | 'fluid___presentationHeight'
  | 'sizes___base64'
  | 'sizes___tracedSVG'
  | 'sizes___aspectRatio'
  | 'sizes___src'
  | 'sizes___srcSet'
  | 'sizes___srcWebp'
  | 'sizes___srcSetWebp'
  | 'sizes___sizes'
  | 'sizes___originalImg'
  | 'sizes___originalName'
  | 'sizes___presentationWidth'
  | 'sizes___presentationHeight'
  | 'original___width'
  | 'original___height'
  | 'original___src'
  | 'resize___src'
  | 'resize___tracedSVG'
  | 'resize___width'
  | 'resize___height'
  | 'resize___aspectRatio'
  | 'resize___originalName'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type ImageSharpFilterInput = {
  fixed?: Maybe<ImageSharpFixedFilterInput>;
  resolutions?: Maybe<ImageSharpResolutionsFilterInput>;
  fluid?: Maybe<ImageSharpFluidFilterInput>;
  sizes?: Maybe<ImageSharpSizesFilterInput>;
  original?: Maybe<ImageSharpOriginalFilterInput>;
  resize?: Maybe<ImageSharpResizeFilterInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type ImageSharpFixed = {
  base64?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  aspectRatio?: Maybe<Scalars['Float']>;
  width: Scalars['Float'];
  height: Scalars['Float'];
  src: Scalars['String'];
  srcSet: Scalars['String'];
  srcWebp?: Maybe<Scalars['String']>;
  srcSetWebp?: Maybe<Scalars['String']>;
  originalName?: Maybe<Scalars['String']>;
};

export type ImageSharpFixedFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>;
  tracedSVG?: Maybe<StringQueryOperatorInput>;
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
  width?: Maybe<FloatQueryOperatorInput>;
  height?: Maybe<FloatQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
  srcSet?: Maybe<StringQueryOperatorInput>;
  srcWebp?: Maybe<StringQueryOperatorInput>;
  srcSetWebp?: Maybe<StringQueryOperatorInput>;
  originalName?: Maybe<StringQueryOperatorInput>;
};

export type ImageSharpFluid = {
  base64?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  aspectRatio: Scalars['Float'];
  src: Scalars['String'];
  srcSet: Scalars['String'];
  srcWebp?: Maybe<Scalars['String']>;
  srcSetWebp?: Maybe<Scalars['String']>;
  sizes: Scalars['String'];
  originalImg?: Maybe<Scalars['String']>;
  originalName?: Maybe<Scalars['String']>;
  presentationWidth: Scalars['Int'];
  presentationHeight: Scalars['Int'];
};

export type ImageSharpFluidFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>;
  tracedSVG?: Maybe<StringQueryOperatorInput>;
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
  srcSet?: Maybe<StringQueryOperatorInput>;
  srcWebp?: Maybe<StringQueryOperatorInput>;
  srcSetWebp?: Maybe<StringQueryOperatorInput>;
  sizes?: Maybe<StringQueryOperatorInput>;
  originalImg?: Maybe<StringQueryOperatorInput>;
  originalName?: Maybe<StringQueryOperatorInput>;
  presentationWidth?: Maybe<IntQueryOperatorInput>;
  presentationHeight?: Maybe<IntQueryOperatorInput>;
};

export type ImageSharpGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ImageSharpEdge>;
  nodes: Array<ImageSharp>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type ImageSharpOriginal = {
  width?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  src?: Maybe<Scalars['String']>;
};

export type ImageSharpOriginalFilterInput = {
  width?: Maybe<FloatQueryOperatorInput>;
  height?: Maybe<FloatQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
};

export type ImageSharpResize = {
  src?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  aspectRatio?: Maybe<Scalars['Float']>;
  originalName?: Maybe<Scalars['String']>;
};

export type ImageSharpResizeFilterInput = {
  src?: Maybe<StringQueryOperatorInput>;
  tracedSVG?: Maybe<StringQueryOperatorInput>;
  width?: Maybe<IntQueryOperatorInput>;
  height?: Maybe<IntQueryOperatorInput>;
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
  originalName?: Maybe<StringQueryOperatorInput>;
};

export type ImageSharpResolutions = {
  base64?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  aspectRatio?: Maybe<Scalars['Float']>;
  width: Scalars['Float'];
  height: Scalars['Float'];
  src: Scalars['String'];
  srcSet: Scalars['String'];
  srcWebp?: Maybe<Scalars['String']>;
  srcSetWebp?: Maybe<Scalars['String']>;
  originalName?: Maybe<Scalars['String']>;
};

export type ImageSharpResolutionsFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>;
  tracedSVG?: Maybe<StringQueryOperatorInput>;
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
  width?: Maybe<FloatQueryOperatorInput>;
  height?: Maybe<FloatQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
  srcSet?: Maybe<StringQueryOperatorInput>;
  srcWebp?: Maybe<StringQueryOperatorInput>;
  srcSetWebp?: Maybe<StringQueryOperatorInput>;
  originalName?: Maybe<StringQueryOperatorInput>;
};

export type ImageSharpSizes = {
  base64?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  aspectRatio: Scalars['Float'];
  src: Scalars['String'];
  srcSet: Scalars['String'];
  srcWebp?: Maybe<Scalars['String']>;
  srcSetWebp?: Maybe<Scalars['String']>;
  sizes: Scalars['String'];
  originalImg?: Maybe<Scalars['String']>;
  originalName?: Maybe<Scalars['String']>;
  presentationWidth: Scalars['Int'];
  presentationHeight: Scalars['Int'];
};

export type ImageSharpSizesFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>;
  tracedSVG?: Maybe<StringQueryOperatorInput>;
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
  srcSet?: Maybe<StringQueryOperatorInput>;
  srcWebp?: Maybe<StringQueryOperatorInput>;
  srcSetWebp?: Maybe<StringQueryOperatorInput>;
  sizes?: Maybe<StringQueryOperatorInput>;
  originalImg?: Maybe<StringQueryOperatorInput>;
  originalName?: Maybe<StringQueryOperatorInput>;
  presentationWidth?: Maybe<IntQueryOperatorInput>;
  presentationHeight?: Maybe<IntQueryOperatorInput>;
};

export type ImageSharpSortInput = {
  fields?: Maybe<Array<Maybe<ImageSharpFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type Internal = {
  content?: Maybe<Scalars['String']>;
  contentDigest: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  fieldOwners?: Maybe<Array<Maybe<Scalars['String']>>>;
  ignoreType?: Maybe<Scalars['Boolean']>;
  mediaType?: Maybe<Scalars['String']>;
  owner: Scalars['String'];
  type: Scalars['String'];
};

export type InternalFilterInput = {
  content?: Maybe<StringQueryOperatorInput>;
  contentDigest?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  fieldOwners?: Maybe<StringQueryOperatorInput>;
  ignoreType?: Maybe<BooleanQueryOperatorInput>;
  mediaType?: Maybe<StringQueryOperatorInput>;
  owner?: Maybe<StringQueryOperatorInput>;
  type?: Maybe<StringQueryOperatorInput>;
};

export type IntQueryOperatorInput = {
  eq?: Maybe<Scalars['Int']>;
  ne?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Int']>>>;
};


/** Node Interface */
export type Node = {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type NodeFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type NodeFilterListInput = {
  elemMatch?: Maybe<NodeFilterInput>;
};

export type PageInfo = {
  currentPage: Scalars['Int'];
  hasPreviousPage: Scalars['Boolean'];
  hasNextPage: Scalars['Boolean'];
  itemCount: Scalars['Int'];
  pageCount: Scalars['Int'];
  perPage?: Maybe<Scalars['Int']>;
  totalCount: Scalars['Int'];
};

export type Potrace = {
  turnPolicy?: Maybe<PotraceTurnPolicy>;
  turdSize?: Maybe<Scalars['Float']>;
  alphaMax?: Maybe<Scalars['Float']>;
  optCurve?: Maybe<Scalars['Boolean']>;
  optTolerance?: Maybe<Scalars['Float']>;
  threshold?: Maybe<Scalars['Int']>;
  blackOnWhite?: Maybe<Scalars['Boolean']>;
  color?: Maybe<Scalars['String']>;
  background?: Maybe<Scalars['String']>;
};

export type PotraceTurnPolicy = 
  | 'TURNPOLICY_BLACK'
  | 'TURNPOLICY_WHITE'
  | 'TURNPOLICY_LEFT'
  | 'TURNPOLICY_RIGHT'
  | 'TURNPOLICY_MINORITY'
  | 'TURNPOLICY_MAJORITY';

export type Query = {
  file?: Maybe<File>;
  allFile: FileConnection;
  directory?: Maybe<Directory>;
  allDirectory: DirectoryConnection;
  sitePage?: Maybe<SitePage>;
  allSitePage: SitePageConnection;
  site?: Maybe<Site>;
  allSite: SiteConnection;
  imageSharp?: Maybe<ImageSharp>;
  allImageSharp: ImageSharpConnection;
  graphQlSource?: Maybe<GraphQlSource>;
  allGraphQlSource: GraphQlSourceConnection;
  siteBuildMetadata?: Maybe<SiteBuildMetadata>;
  allSiteBuildMetadata: SiteBuildMetadataConnection;
  sitePlugin?: Maybe<SitePlugin>;
  allSitePlugin: SitePluginConnection;
  graphCmsData: Graphcms;
};


export type QueryFileArgs = {
  sourceInstanceName?: Maybe<StringQueryOperatorInput>;
  absolutePath?: Maybe<StringQueryOperatorInput>;
  relativePath?: Maybe<StringQueryOperatorInput>;
  extension?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<IntQueryOperatorInput>;
  prettySize?: Maybe<StringQueryOperatorInput>;
  modifiedTime?: Maybe<DateQueryOperatorInput>;
  accessTime?: Maybe<DateQueryOperatorInput>;
  changeTime?: Maybe<DateQueryOperatorInput>;
  birthTime?: Maybe<DateQueryOperatorInput>;
  root?: Maybe<StringQueryOperatorInput>;
  dir?: Maybe<StringQueryOperatorInput>;
  base?: Maybe<StringQueryOperatorInput>;
  ext?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  relativeDirectory?: Maybe<StringQueryOperatorInput>;
  dev?: Maybe<IntQueryOperatorInput>;
  mode?: Maybe<IntQueryOperatorInput>;
  nlink?: Maybe<IntQueryOperatorInput>;
  uid?: Maybe<IntQueryOperatorInput>;
  gid?: Maybe<IntQueryOperatorInput>;
  rdev?: Maybe<IntQueryOperatorInput>;
  ino?: Maybe<FloatQueryOperatorInput>;
  atimeMs?: Maybe<FloatQueryOperatorInput>;
  mtimeMs?: Maybe<FloatQueryOperatorInput>;
  ctimeMs?: Maybe<FloatQueryOperatorInput>;
  atime?: Maybe<DateQueryOperatorInput>;
  mtime?: Maybe<DateQueryOperatorInput>;
  ctime?: Maybe<DateQueryOperatorInput>;
  birthtime?: Maybe<DateQueryOperatorInput>;
  birthtimeMs?: Maybe<FloatQueryOperatorInput>;
  blksize?: Maybe<IntQueryOperatorInput>;
  blocks?: Maybe<IntQueryOperatorInput>;
  publicURL?: Maybe<StringQueryOperatorInput>;
  childImageSharp?: Maybe<ImageSharpFilterInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllFileArgs = {
  filter?: Maybe<FileFilterInput>;
  sort?: Maybe<FileSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryDirectoryArgs = {
  sourceInstanceName?: Maybe<StringQueryOperatorInput>;
  absolutePath?: Maybe<StringQueryOperatorInput>;
  relativePath?: Maybe<StringQueryOperatorInput>;
  extension?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<IntQueryOperatorInput>;
  prettySize?: Maybe<StringQueryOperatorInput>;
  modifiedTime?: Maybe<DateQueryOperatorInput>;
  accessTime?: Maybe<DateQueryOperatorInput>;
  changeTime?: Maybe<DateQueryOperatorInput>;
  birthTime?: Maybe<DateQueryOperatorInput>;
  root?: Maybe<StringQueryOperatorInput>;
  dir?: Maybe<StringQueryOperatorInput>;
  base?: Maybe<StringQueryOperatorInput>;
  ext?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  relativeDirectory?: Maybe<StringQueryOperatorInput>;
  dev?: Maybe<IntQueryOperatorInput>;
  mode?: Maybe<IntQueryOperatorInput>;
  nlink?: Maybe<IntQueryOperatorInput>;
  uid?: Maybe<IntQueryOperatorInput>;
  gid?: Maybe<IntQueryOperatorInput>;
  rdev?: Maybe<IntQueryOperatorInput>;
  ino?: Maybe<FloatQueryOperatorInput>;
  atimeMs?: Maybe<FloatQueryOperatorInput>;
  mtimeMs?: Maybe<FloatQueryOperatorInput>;
  ctimeMs?: Maybe<FloatQueryOperatorInput>;
  atime?: Maybe<DateQueryOperatorInput>;
  mtime?: Maybe<DateQueryOperatorInput>;
  ctime?: Maybe<DateQueryOperatorInput>;
  birthtime?: Maybe<DateQueryOperatorInput>;
  birthtimeMs?: Maybe<FloatQueryOperatorInput>;
  blksize?: Maybe<IntQueryOperatorInput>;
  blocks?: Maybe<IntQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllDirectoryArgs = {
  filter?: Maybe<DirectoryFilterInput>;
  sort?: Maybe<DirectorySortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QuerySitePageArgs = {
  path?: Maybe<StringQueryOperatorInput>;
  component?: Maybe<StringQueryOperatorInput>;
  internalComponentName?: Maybe<StringQueryOperatorInput>;
  componentChunkName?: Maybe<StringQueryOperatorInput>;
  matchPath?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  isCreatedByStatefulCreatePages?: Maybe<BooleanQueryOperatorInput>;
  pluginCreator?: Maybe<SitePluginFilterInput>;
  pluginCreatorId?: Maybe<StringQueryOperatorInput>;
  componentPath?: Maybe<StringQueryOperatorInput>;
};


export type QueryAllSitePageArgs = {
  filter?: Maybe<SitePageFilterInput>;
  sort?: Maybe<SitePageSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QuerySiteArgs = {
  buildTime?: Maybe<DateQueryOperatorInput>;
  siteMetadata?: Maybe<SiteSiteMetadataFilterInput>;
  port?: Maybe<IntQueryOperatorInput>;
  host?: Maybe<StringQueryOperatorInput>;
  pathPrefix?: Maybe<StringQueryOperatorInput>;
  polyfill?: Maybe<BooleanQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllSiteArgs = {
  filter?: Maybe<SiteFilterInput>;
  sort?: Maybe<SiteSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryImageSharpArgs = {
  fixed?: Maybe<ImageSharpFixedFilterInput>;
  resolutions?: Maybe<ImageSharpResolutionsFilterInput>;
  fluid?: Maybe<ImageSharpFluidFilterInput>;
  sizes?: Maybe<ImageSharpSizesFilterInput>;
  original?: Maybe<ImageSharpOriginalFilterInput>;
  resize?: Maybe<ImageSharpResizeFilterInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllImageSharpArgs = {
  filter?: Maybe<ImageSharpFilterInput>;
  sort?: Maybe<ImageSharpSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryGraphQlSourceArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  typeName?: Maybe<StringQueryOperatorInput>;
  fieldName?: Maybe<StringQueryOperatorInput>;
};


export type QueryAllGraphQlSourceArgs = {
  filter?: Maybe<GraphQlSourceFilterInput>;
  sort?: Maybe<GraphQlSourceSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QuerySiteBuildMetadataArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  buildTime?: Maybe<DateQueryOperatorInput>;
};


export type QueryAllSiteBuildMetadataArgs = {
  filter?: Maybe<SiteBuildMetadataFilterInput>;
  sort?: Maybe<SiteBuildMetadataSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QuerySitePluginArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  resolve?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
  pluginOptions?: Maybe<SitePluginPluginOptionsFilterInput>;
  nodeAPIs?: Maybe<StringQueryOperatorInput>;
  browserAPIs?: Maybe<StringQueryOperatorInput>;
  ssrAPIs?: Maybe<StringQueryOperatorInput>;
  pluginFilepath?: Maybe<StringQueryOperatorInput>;
  packageJson?: Maybe<SitePluginPackageJsonFilterInput>;
};


export type QueryAllSitePluginArgs = {
  filter?: Maybe<SitePluginFilterInput>;
  sort?: Maybe<SitePluginSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};

export type Site = Node & {
  buildTime?: Maybe<Scalars['Date']>;
  siteMetadata?: Maybe<SiteSiteMetadata>;
  port?: Maybe<Scalars['Int']>;
  host?: Maybe<Scalars['String']>;
  pathPrefix?: Maybe<Scalars['String']>;
  polyfill?: Maybe<Scalars['Boolean']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type SiteBuildTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type SiteBuildMetadata = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  buildTime?: Maybe<Scalars['Date']>;
};


export type SiteBuildMetadataBuildTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type SiteBuildMetadataConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SiteBuildMetadataEdge>;
  nodes: Array<SiteBuildMetadata>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<SiteBuildMetadataGroupConnection>;
};


export type SiteBuildMetadataConnectionDistinctArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


export type SiteBuildMetadataConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SiteBuildMetadataFieldsEnum;
};

export type SiteBuildMetadataEdge = {
  next?: Maybe<SiteBuildMetadata>;
  node: SiteBuildMetadata;
  previous?: Maybe<SiteBuildMetadata>;
};

export type SiteBuildMetadataFieldsEnum = 
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'buildTime';

export type SiteBuildMetadataFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  buildTime?: Maybe<DateQueryOperatorInput>;
};

export type SiteBuildMetadataGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SiteBuildMetadataEdge>;
  nodes: Array<SiteBuildMetadata>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type SiteBuildMetadataSortInput = {
  fields?: Maybe<Array<Maybe<SiteBuildMetadataFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SiteConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SiteEdge>;
  nodes: Array<Site>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<SiteGroupConnection>;
};


export type SiteConnectionDistinctArgs = {
  field: SiteFieldsEnum;
};


export type SiteConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SiteFieldsEnum;
};

export type SiteEdge = {
  next?: Maybe<Site>;
  node: Site;
  previous?: Maybe<Site>;
};

export type SiteFieldsEnum = 
  | 'buildTime'
  | 'siteMetadata___title'
  | 'siteMetadata___description'
  | 'siteMetadata___author'
  | 'siteMetadata___siteUrl'
  | 'siteMetadata___keywords'
  | 'port'
  | 'host'
  | 'pathPrefix'
  | 'polyfill'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type SiteFilterInput = {
  buildTime?: Maybe<DateQueryOperatorInput>;
  siteMetadata?: Maybe<SiteSiteMetadataFilterInput>;
  port?: Maybe<IntQueryOperatorInput>;
  host?: Maybe<StringQueryOperatorInput>;
  pathPrefix?: Maybe<StringQueryOperatorInput>;
  polyfill?: Maybe<BooleanQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type SiteGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SiteEdge>;
  nodes: Array<Site>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type SitePage = Node & {
  path: Scalars['String'];
  component: Scalars['String'];
  internalComponentName: Scalars['String'];
  componentChunkName: Scalars['String'];
  matchPath?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  isCreatedByStatefulCreatePages?: Maybe<Scalars['Boolean']>;
  pluginCreator?: Maybe<SitePlugin>;
  pluginCreatorId?: Maybe<Scalars['String']>;
  componentPath?: Maybe<Scalars['String']>;
};

export type SitePageConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SitePageEdge>;
  nodes: Array<SitePage>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<SitePageGroupConnection>;
};


export type SitePageConnectionDistinctArgs = {
  field: SitePageFieldsEnum;
};


export type SitePageConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SitePageFieldsEnum;
};

export type SitePageEdge = {
  next?: Maybe<SitePage>;
  node: SitePage;
  previous?: Maybe<SitePage>;
};

export type SitePageFieldsEnum = 
  | 'path'
  | 'component'
  | 'internalComponentName'
  | 'componentChunkName'
  | 'matchPath'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'isCreatedByStatefulCreatePages'
  | 'pluginCreator___id'
  | 'pluginCreator___parent___id'
  | 'pluginCreator___parent___parent___id'
  | 'pluginCreator___parent___parent___children'
  | 'pluginCreator___parent___children'
  | 'pluginCreator___parent___children___id'
  | 'pluginCreator___parent___children___children'
  | 'pluginCreator___parent___internal___content'
  | 'pluginCreator___parent___internal___contentDigest'
  | 'pluginCreator___parent___internal___description'
  | 'pluginCreator___parent___internal___fieldOwners'
  | 'pluginCreator___parent___internal___ignoreType'
  | 'pluginCreator___parent___internal___mediaType'
  | 'pluginCreator___parent___internal___owner'
  | 'pluginCreator___parent___internal___type'
  | 'pluginCreator___children'
  | 'pluginCreator___children___id'
  | 'pluginCreator___children___parent___id'
  | 'pluginCreator___children___parent___children'
  | 'pluginCreator___children___children'
  | 'pluginCreator___children___children___id'
  | 'pluginCreator___children___children___children'
  | 'pluginCreator___children___internal___content'
  | 'pluginCreator___children___internal___contentDigest'
  | 'pluginCreator___children___internal___description'
  | 'pluginCreator___children___internal___fieldOwners'
  | 'pluginCreator___children___internal___ignoreType'
  | 'pluginCreator___children___internal___mediaType'
  | 'pluginCreator___children___internal___owner'
  | 'pluginCreator___children___internal___type'
  | 'pluginCreator___internal___content'
  | 'pluginCreator___internal___contentDigest'
  | 'pluginCreator___internal___description'
  | 'pluginCreator___internal___fieldOwners'
  | 'pluginCreator___internal___ignoreType'
  | 'pluginCreator___internal___mediaType'
  | 'pluginCreator___internal___owner'
  | 'pluginCreator___internal___type'
  | 'pluginCreator___resolve'
  | 'pluginCreator___name'
  | 'pluginCreator___version'
  | 'pluginCreator___pluginOptions___name'
  | 'pluginCreator___pluginOptions___path'
  | 'pluginCreator___pluginOptions___component'
  | 'pluginCreator___pluginOptions___typeName'
  | 'pluginCreator___pluginOptions___fieldName'
  | 'pluginCreator___pluginOptions___url'
  | 'pluginCreator___pluginOptions___headers___Authorization'
  | 'pluginCreator___pluginOptions___test'
  | 'pluginCreator___pluginOptions___options___emitWarning'
  | 'pluginCreator___pluginOptions___options___failOnError'
  | 'pluginCreator___pluginOptions___files'
  | 'pluginCreator___pluginOptions___short_name'
  | 'pluginCreator___pluginOptions___start_url'
  | 'pluginCreator___pluginOptions___background_color'
  | 'pluginCreator___pluginOptions___theme_color'
  | 'pluginCreator___pluginOptions___display'
  | 'pluginCreator___pluginOptions___icon'
  | 'pluginCreator___pluginOptions___cache_busting_mode'
  | 'pluginCreator___pluginOptions___include_favicon'
  | 'pluginCreator___pluginOptions___legacy'
  | 'pluginCreator___pluginOptions___theme_color_in_head'
  | 'pluginCreator___pluginOptions___cacheDigest'
  | 'pluginCreator___pluginOptions___fonts'
  | 'pluginCreator___pluginOptions___pathCheck'
  | 'pluginCreator___nodeAPIs'
  | 'pluginCreator___browserAPIs'
  | 'pluginCreator___ssrAPIs'
  | 'pluginCreator___pluginFilepath'
  | 'pluginCreator___packageJson___name'
  | 'pluginCreator___packageJson___description'
  | 'pluginCreator___packageJson___version'
  | 'pluginCreator___packageJson___main'
  | 'pluginCreator___packageJson___author'
  | 'pluginCreator___packageJson___license'
  | 'pluginCreator___packageJson___dependencies'
  | 'pluginCreator___packageJson___dependencies___name'
  | 'pluginCreator___packageJson___dependencies___version'
  | 'pluginCreator___packageJson___devDependencies'
  | 'pluginCreator___packageJson___devDependencies___name'
  | 'pluginCreator___packageJson___devDependencies___version'
  | 'pluginCreator___packageJson___peerDependencies'
  | 'pluginCreator___packageJson___peerDependencies___name'
  | 'pluginCreator___packageJson___peerDependencies___version'
  | 'pluginCreator___packageJson___keywords'
  | 'pluginCreatorId'
  | 'componentPath';

export type SitePageFilterInput = {
  path?: Maybe<StringQueryOperatorInput>;
  component?: Maybe<StringQueryOperatorInput>;
  internalComponentName?: Maybe<StringQueryOperatorInput>;
  componentChunkName?: Maybe<StringQueryOperatorInput>;
  matchPath?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  isCreatedByStatefulCreatePages?: Maybe<BooleanQueryOperatorInput>;
  pluginCreator?: Maybe<SitePluginFilterInput>;
  pluginCreatorId?: Maybe<StringQueryOperatorInput>;
  componentPath?: Maybe<StringQueryOperatorInput>;
};

export type SitePageGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SitePageEdge>;
  nodes: Array<SitePage>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type SitePageSortInput = {
  fields?: Maybe<Array<Maybe<SitePageFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SitePlugin = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  resolve?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
  pluginOptions?: Maybe<SitePluginPluginOptions>;
  nodeAPIs?: Maybe<Array<Maybe<Scalars['String']>>>;
  browserAPIs?: Maybe<Array<Maybe<Scalars['String']>>>;
  ssrAPIs?: Maybe<Array<Maybe<Scalars['String']>>>;
  pluginFilepath?: Maybe<Scalars['String']>;
  packageJson?: Maybe<SitePluginPackageJson>;
};

export type SitePluginConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SitePluginEdge>;
  nodes: Array<SitePlugin>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<SitePluginGroupConnection>;
};


export type SitePluginConnectionDistinctArgs = {
  field: SitePluginFieldsEnum;
};


export type SitePluginConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SitePluginFieldsEnum;
};

export type SitePluginEdge = {
  next?: Maybe<SitePlugin>;
  node: SitePlugin;
  previous?: Maybe<SitePlugin>;
};

export type SitePluginFieldsEnum = 
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'resolve'
  | 'name'
  | 'version'
  | 'pluginOptions___name'
  | 'pluginOptions___path'
  | 'pluginOptions___component'
  | 'pluginOptions___typeName'
  | 'pluginOptions___fieldName'
  | 'pluginOptions___url'
  | 'pluginOptions___headers___Authorization'
  | 'pluginOptions___test'
  | 'pluginOptions___options___emitWarning'
  | 'pluginOptions___options___failOnError'
  | 'pluginOptions___files'
  | 'pluginOptions___short_name'
  | 'pluginOptions___start_url'
  | 'pluginOptions___background_color'
  | 'pluginOptions___theme_color'
  | 'pluginOptions___display'
  | 'pluginOptions___icon'
  | 'pluginOptions___cache_busting_mode'
  | 'pluginOptions___include_favicon'
  | 'pluginOptions___legacy'
  | 'pluginOptions___theme_color_in_head'
  | 'pluginOptions___cacheDigest'
  | 'pluginOptions___fonts'
  | 'pluginOptions___pathCheck'
  | 'nodeAPIs'
  | 'browserAPIs'
  | 'ssrAPIs'
  | 'pluginFilepath'
  | 'packageJson___name'
  | 'packageJson___description'
  | 'packageJson___version'
  | 'packageJson___main'
  | 'packageJson___author'
  | 'packageJson___license'
  | 'packageJson___dependencies'
  | 'packageJson___dependencies___name'
  | 'packageJson___dependencies___version'
  | 'packageJson___devDependencies'
  | 'packageJson___devDependencies___name'
  | 'packageJson___devDependencies___version'
  | 'packageJson___peerDependencies'
  | 'packageJson___peerDependencies___name'
  | 'packageJson___peerDependencies___version'
  | 'packageJson___keywords';

export type SitePluginFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  resolve?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
  pluginOptions?: Maybe<SitePluginPluginOptionsFilterInput>;
  nodeAPIs?: Maybe<StringQueryOperatorInput>;
  browserAPIs?: Maybe<StringQueryOperatorInput>;
  ssrAPIs?: Maybe<StringQueryOperatorInput>;
  pluginFilepath?: Maybe<StringQueryOperatorInput>;
  packageJson?: Maybe<SitePluginPackageJsonFilterInput>;
};

export type SitePluginGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SitePluginEdge>;
  nodes: Array<SitePlugin>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type SitePluginPackageJson = {
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
  main?: Maybe<Scalars['String']>;
  author?: Maybe<Scalars['String']>;
  license?: Maybe<Scalars['String']>;
  dependencies?: Maybe<Array<Maybe<SitePluginPackageJsonDependencies>>>;
  devDependencies?: Maybe<Array<Maybe<SitePluginPackageJsonDevDependencies>>>;
  peerDependencies?: Maybe<Array<Maybe<SitePluginPackageJsonPeerDependencies>>>;
  keywords?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SitePluginPackageJsonDependencies = {
  name?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
};

export type SitePluginPackageJsonDependenciesFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPackageJsonDependenciesFilterListInput = {
  elemMatch?: Maybe<SitePluginPackageJsonDependenciesFilterInput>;
};

export type SitePluginPackageJsonDevDependencies = {
  name?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
};

export type SitePluginPackageJsonDevDependenciesFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPackageJsonDevDependenciesFilterListInput = {
  elemMatch?: Maybe<SitePluginPackageJsonDevDependenciesFilterInput>;
};

export type SitePluginPackageJsonFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
  main?: Maybe<StringQueryOperatorInput>;
  author?: Maybe<StringQueryOperatorInput>;
  license?: Maybe<StringQueryOperatorInput>;
  dependencies?: Maybe<SitePluginPackageJsonDependenciesFilterListInput>;
  devDependencies?: Maybe<SitePluginPackageJsonDevDependenciesFilterListInput>;
  peerDependencies?: Maybe<SitePluginPackageJsonPeerDependenciesFilterListInput>;
  keywords?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPackageJsonPeerDependencies = {
  name?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
};

export type SitePluginPackageJsonPeerDependenciesFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPackageJsonPeerDependenciesFilterListInput = {
  elemMatch?: Maybe<SitePluginPackageJsonPeerDependenciesFilterInput>;
};

export type SitePluginPluginOptions = {
  name?: Maybe<Scalars['String']>;
  path?: Maybe<Scalars['String']>;
  component?: Maybe<Scalars['String']>;
  typeName?: Maybe<Scalars['String']>;
  fieldName?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  headers?: Maybe<SitePluginPluginOptionsHeaders>;
  test?: Maybe<Scalars['String']>;
  options?: Maybe<SitePluginPluginOptionsOptions>;
  files?: Maybe<Array<Maybe<Scalars['String']>>>;
  short_name?: Maybe<Scalars['String']>;
  start_url?: Maybe<Scalars['String']>;
  background_color?: Maybe<Scalars['String']>;
  theme_color?: Maybe<Scalars['String']>;
  display?: Maybe<Scalars['String']>;
  icon?: Maybe<Scalars['String']>;
  cache_busting_mode?: Maybe<Scalars['String']>;
  include_favicon?: Maybe<Scalars['Boolean']>;
  legacy?: Maybe<Scalars['Boolean']>;
  theme_color_in_head?: Maybe<Scalars['Boolean']>;
  cacheDigest?: Maybe<Scalars['String']>;
  fonts?: Maybe<Array<Maybe<Scalars['String']>>>;
  pathCheck?: Maybe<Scalars['Boolean']>;
};

export type SitePluginPluginOptionsFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  path?: Maybe<StringQueryOperatorInput>;
  component?: Maybe<StringQueryOperatorInput>;
  typeName?: Maybe<StringQueryOperatorInput>;
  fieldName?: Maybe<StringQueryOperatorInput>;
  url?: Maybe<StringQueryOperatorInput>;
  headers?: Maybe<SitePluginPluginOptionsHeadersFilterInput>;
  test?: Maybe<StringQueryOperatorInput>;
  options?: Maybe<SitePluginPluginOptionsOptionsFilterInput>;
  files?: Maybe<StringQueryOperatorInput>;
  short_name?: Maybe<StringQueryOperatorInput>;
  start_url?: Maybe<StringQueryOperatorInput>;
  background_color?: Maybe<StringQueryOperatorInput>;
  theme_color?: Maybe<StringQueryOperatorInput>;
  display?: Maybe<StringQueryOperatorInput>;
  icon?: Maybe<StringQueryOperatorInput>;
  cache_busting_mode?: Maybe<StringQueryOperatorInput>;
  include_favicon?: Maybe<BooleanQueryOperatorInput>;
  legacy?: Maybe<BooleanQueryOperatorInput>;
  theme_color_in_head?: Maybe<BooleanQueryOperatorInput>;
  cacheDigest?: Maybe<StringQueryOperatorInput>;
  fonts?: Maybe<StringQueryOperatorInput>;
  pathCheck?: Maybe<BooleanQueryOperatorInput>;
};

export type SitePluginPluginOptionsHeaders = {
  Authorization?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsHeadersFilterInput = {
  Authorization?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsOptions = {
  emitWarning?: Maybe<Scalars['Boolean']>;
  failOnError?: Maybe<Scalars['Boolean']>;
};

export type SitePluginPluginOptionsOptionsFilterInput = {
  emitWarning?: Maybe<BooleanQueryOperatorInput>;
  failOnError?: Maybe<BooleanQueryOperatorInput>;
};

export type SitePluginSortInput = {
  fields?: Maybe<Array<Maybe<SitePluginFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SiteSiteMetadata = {
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  author?: Maybe<Scalars['String']>;
  siteUrl?: Maybe<Scalars['String']>;
  keywords?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SiteSiteMetadataFilterInput = {
  title?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  author?: Maybe<StringQueryOperatorInput>;
  siteUrl?: Maybe<StringQueryOperatorInput>;
  keywords?: Maybe<StringQueryOperatorInput>;
};

export type SiteSortInput = {
  fields?: Maybe<Array<Maybe<SiteFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SortOrderEnum = 
  | 'ASC'
  | 'DESC';

export type StringQueryOperatorInput = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
};

export type BackgroundQueryVariables = Exact<{ [key: string]: never; }>;


export type BackgroundQuery = { image?: Maybe<Pick<File, 'publicURL'>> };

export type IconsQueryVariables = Exact<{ [key: string]: never; }>;


export type IconsQuery = { graphCmsData: { icons: Array<Maybe<(
      Pick<Graphcms_Icon, 'id' | 'url'>
      & { image?: Maybe<Pick<Graphcms_Asset, 'url'>> }
    )>> } };

export type DefaultSeoQueryVariables = Exact<{ [key: string]: never; }>;


export type DefaultSeoQuery = { site?: Maybe<{ siteMetadata?: Maybe<Pick<SiteSiteMetadata, 'title' | 'description' | 'author' | 'keywords'>> }> };

export type AboutQueryVariables = Exact<{ [key: string]: never; }>;


export type AboutQuery = { image?: Maybe<{ childImageSharp?: Maybe<{ fluid?: Maybe<GatsbyImageSharpFluidFragment> }> }> };

export type ProjectsQueryVariables = Exact<{ [key: string]: never; }>;


export type ProjectsQuery = { graphCmsData: { projects: Array<Maybe<(
      Pick<Graphcms_Project, 'id' | 'title' | 'liveLink' | 'srcLink' | 'descriptionPl' | 'descriptionEn' | 'date'>
      & { image?: Maybe<Pick<Graphcms_Asset, 'handle' | 'width' | 'height'>>, technologies?: Maybe<Array<(
        Pick<Graphcms_Technology, 'id' | 'name'>
        & { image?: Maybe<Pick<Graphcms_Asset, 'url'>> }
      )>> }
    )>> } };

export type TechnologiesQueryVariables = Exact<{ [key: string]: never; }>;


export type TechnologiesQuery = { graphCmsData: { technologies: Array<Maybe<(
      Pick<Graphcms_Technology, 'id' | 'name'>
      & { image?: Maybe<Pick<Graphcms_Asset, 'url'>> }
    )>> } };

export type GatsbyImageSharpFixedFragment = Pick<ImageSharpFixed, 'base64' | 'width' | 'height' | 'src' | 'srcSet'>;

export type GatsbyImageSharpFixed_TracedSvgFragment = Pick<ImageSharpFixed, 'tracedSVG' | 'width' | 'height' | 'src' | 'srcSet'>;

export type GatsbyImageSharpFixed_WithWebpFragment = Pick<ImageSharpFixed, 'base64' | 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>;

export type GatsbyImageSharpFixed_WithWebp_TracedSvgFragment = Pick<ImageSharpFixed, 'tracedSVG' | 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>;

export type GatsbyImageSharpFixed_NoBase64Fragment = Pick<ImageSharpFixed, 'width' | 'height' | 'src' | 'srcSet'>;

export type GatsbyImageSharpFixed_WithWebp_NoBase64Fragment = Pick<ImageSharpFixed, 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>;

export type GatsbyImageSharpFluidFragment = Pick<ImageSharpFluid, 'base64' | 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>;

export type GatsbyImageSharpFluidLimitPresentationSizeFragment = { maxHeight: ImageSharpFluid['presentationHeight'], maxWidth: ImageSharpFluid['presentationWidth'] };

export type GatsbyImageSharpFluid_TracedSvgFragment = Pick<ImageSharpFluid, 'tracedSVG' | 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>;

export type GatsbyImageSharpFluid_WithWebpFragment = Pick<ImageSharpFluid, 'base64' | 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>;

export type GatsbyImageSharpFluid_WithWebp_TracedSvgFragment = Pick<ImageSharpFluid, 'tracedSVG' | 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>;

export type GatsbyImageSharpFluid_NoBase64Fragment = Pick<ImageSharpFluid, 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>;

export type GatsbyImageSharpFluid_WithWebp_NoBase64Fragment = Pick<ImageSharpFluid, 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>;

export type GatsbyImageSharpResolutionsFragment = Pick<ImageSharpResolutions, 'base64' | 'width' | 'height' | 'src' | 'srcSet'>;

export type GatsbyImageSharpResolutions_TracedSvgFragment = Pick<ImageSharpResolutions, 'tracedSVG' | 'width' | 'height' | 'src' | 'srcSet'>;

export type GatsbyImageSharpResolutions_WithWebpFragment = Pick<ImageSharpResolutions, 'base64' | 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>;

export type GatsbyImageSharpResolutions_WithWebp_TracedSvgFragment = Pick<ImageSharpResolutions, 'tracedSVG' | 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>;

export type GatsbyImageSharpResolutions_NoBase64Fragment = Pick<ImageSharpResolutions, 'width' | 'height' | 'src' | 'srcSet'>;

export type GatsbyImageSharpResolutions_WithWebp_NoBase64Fragment = Pick<ImageSharpResolutions, 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>;

export type GatsbyImageSharpSizesFragment = Pick<ImageSharpSizes, 'base64' | 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>;

export type GatsbyImageSharpSizes_TracedSvgFragment = Pick<ImageSharpSizes, 'tracedSVG' | 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>;

export type GatsbyImageSharpSizes_WithWebpFragment = Pick<ImageSharpSizes, 'base64' | 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>;

export type GatsbyImageSharpSizes_WithWebp_TracedSvgFragment = Pick<ImageSharpSizes, 'tracedSVG' | 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>;

export type GatsbyImageSharpSizes_NoBase64Fragment = Pick<ImageSharpSizes, 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>;

export type GatsbyImageSharpSizes_WithWebp_NoBase64Fragment = Pick<ImageSharpSizes, 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>;
