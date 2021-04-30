/* eslint-disable */

declare namespace GatsbyTypes {
type Maybe<T> = T | undefined;
type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
type Scalars = {
  /** The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID. */
  ID: string;
  /** The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text. */
  String: string;
  /** The `Boolean` scalar type represents `true` or `false`. */
  Boolean: boolean;
  /** The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1. */
  Int: number;
  /** The `Float` scalar type represents signed double-precision fractional values as specified by [IEEE 754](https://en.wikipedia.org/wiki/IEEE_floating_point). */
  Float: number;
  /** A date string, such as 2007-12-03, compliant with the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  Date: string;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: never;
  /** A date string, such as 2007-12-03 (YYYY-MM-DD), compliant with ISO 8601 standard for representation of dates using the Gregorian calendar. */
  GRAPHCMS_Date: any;
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the date-timeformat outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representationof dates and times using the Gregorian calendar. */
  GRAPHCMS_DateTime: any;
  GRAPHCMS_Hex: any;
  /** Raw JSON value */
  GRAPHCMS_Json: any;
  /** The Long scalar type represents non-fractional signed whole numeric values. Long can represent values between -(2^63) and 2^63 - 1. */
  GRAPHCMS_Long: any;
  GRAPHCMS_RGBAHue: any;
  GRAPHCMS_RGBATransparency: any;
  /** Slate-compatible RichText AST */
  GRAPHCMS_RichTextAST: any;
};










type File = Node & {
  readonly sourceInstanceName: Scalars['String'];
  readonly absolutePath: Scalars['String'];
  readonly relativePath: Scalars['String'];
  readonly extension: Scalars['String'];
  readonly size: Scalars['Int'];
  readonly prettySize: Scalars['String'];
  readonly modifiedTime: Scalars['Date'];
  readonly accessTime: Scalars['Date'];
  readonly changeTime: Scalars['Date'];
  readonly birthTime: Scalars['Date'];
  readonly root: Scalars['String'];
  readonly dir: Scalars['String'];
  readonly base: Scalars['String'];
  readonly ext: Scalars['String'];
  readonly name: Scalars['String'];
  readonly relativeDirectory: Scalars['String'];
  readonly dev: Scalars['Int'];
  readonly mode: Scalars['Int'];
  readonly nlink: Scalars['Int'];
  readonly uid: Scalars['Int'];
  readonly gid: Scalars['Int'];
  readonly rdev: Scalars['Int'];
  readonly ino: Scalars['Float'];
  readonly atimeMs: Scalars['Float'];
  readonly mtimeMs: Scalars['Float'];
  readonly ctimeMs: Scalars['Float'];
  readonly atime: Scalars['Date'];
  readonly mtime: Scalars['Date'];
  readonly ctime: Scalars['Date'];
  /** @deprecated Use `birthTime` instead */
  readonly birthtime: Maybe<Scalars['Date']>;
  /** @deprecated Use `birthTime` instead */
  readonly birthtimeMs: Maybe<Scalars['Float']>;
  readonly blksize: Maybe<Scalars['Int']>;
  readonly blocks: Maybe<Scalars['Int']>;
  /** Copy file to static directory and return public url to it */
  readonly publicURL: Maybe<Scalars['String']>;
  /** Returns all children nodes filtered by type ImageSharp */
  readonly childrenImageSharp: Maybe<ReadonlyArray<Maybe<ImageSharp>>>;
  /** Returns the first child node of type ImageSharp or null if there are no children of given type on this node */
  readonly childImageSharp: Maybe<ImageSharp>;
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};


type File_modifiedTimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type File_accessTimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type File_changeTimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type File_birthTimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type File_atimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type File_mtimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type File_ctimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};

/** Node Interface */
type Node = {
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};

type Internal = {
  readonly content: Maybe<Scalars['String']>;
  readonly contentDigest: Scalars['String'];
  readonly description: Maybe<Scalars['String']>;
  readonly fieldOwners: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly ignoreType: Maybe<Scalars['Boolean']>;
  readonly mediaType: Maybe<Scalars['String']>;
  readonly owner: Scalars['String'];
  readonly type: Scalars['String'];
};


type Directory = Node & {
  readonly sourceInstanceName: Scalars['String'];
  readonly absolutePath: Scalars['String'];
  readonly relativePath: Scalars['String'];
  readonly extension: Scalars['String'];
  readonly size: Scalars['Int'];
  readonly prettySize: Scalars['String'];
  readonly modifiedTime: Scalars['Date'];
  readonly accessTime: Scalars['Date'];
  readonly changeTime: Scalars['Date'];
  readonly birthTime: Scalars['Date'];
  readonly root: Scalars['String'];
  readonly dir: Scalars['String'];
  readonly base: Scalars['String'];
  readonly ext: Scalars['String'];
  readonly name: Scalars['String'];
  readonly relativeDirectory: Scalars['String'];
  readonly dev: Scalars['Int'];
  readonly mode: Scalars['Int'];
  readonly nlink: Scalars['Int'];
  readonly uid: Scalars['Int'];
  readonly gid: Scalars['Int'];
  readonly rdev: Scalars['Int'];
  readonly ino: Scalars['Float'];
  readonly atimeMs: Scalars['Float'];
  readonly mtimeMs: Scalars['Float'];
  readonly ctimeMs: Scalars['Float'];
  readonly atime: Scalars['Date'];
  readonly mtime: Scalars['Date'];
  readonly ctime: Scalars['Date'];
  /** @deprecated Use `birthTime` instead */
  readonly birthtime: Maybe<Scalars['Date']>;
  /** @deprecated Use `birthTime` instead */
  readonly birthtimeMs: Maybe<Scalars['Float']>;
  readonly blksize: Maybe<Scalars['Int']>;
  readonly blocks: Maybe<Scalars['Int']>;
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};


type Directory_modifiedTimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type Directory_accessTimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type Directory_changeTimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type Directory_birthTimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type Directory_atimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type Directory_mtimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type Directory_ctimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};

type Site = Node & {
  readonly buildTime: Maybe<Scalars['Date']>;
  readonly siteMetadata: Maybe<SiteSiteMetadata>;
  readonly port: Maybe<Scalars['Int']>;
  readonly host: Maybe<Scalars['String']>;
  readonly polyfill: Maybe<Scalars['Boolean']>;
  readonly pathPrefix: Maybe<Scalars['String']>;
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};


type Site_buildTimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};

type SiteSiteMetadata = {
  readonly title: Maybe<Scalars['String']>;
  readonly description: Maybe<Scalars['String']>;
  readonly author: Maybe<Scalars['String']>;
  readonly siteUrl: Maybe<Scalars['String']>;
  readonly keywords: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
};

type SiteFunction = Node & {
  readonly apiRoute: Scalars['String'];
  readonly originalFilePath: Scalars['String'];
  readonly relativeCompiledFilePath: Scalars['String'];
  readonly absoluteCompiledFilePath: Scalars['String'];
  readonly matchPath: Maybe<Scalars['String']>;
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};

type SitePage = Node & {
  readonly path: Scalars['String'];
  readonly component: Scalars['String'];
  readonly internalComponentName: Scalars['String'];
  readonly componentChunkName: Scalars['String'];
  readonly matchPath: Maybe<Scalars['String']>;
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
  readonly isCreatedByStatefulCreatePages: Maybe<Scalars['Boolean']>;
  readonly pluginCreator: Maybe<SitePlugin>;
  readonly pluginCreatorId: Maybe<Scalars['String']>;
  readonly componentPath: Maybe<Scalars['String']>;
};

type ImageFormat =
  | 'NO_CHANGE'
  | 'AUTO'
  | 'jpg'
  | 'png'
  | 'webp'
  | 'avif';

type ImageFit =
  | 'cover'
  | 'contain'
  | 'fill'
  | 'inside'
  | 'outside';

type ImageLayout =
  | 'fixed'
  | 'fullWidth'
  | 'constrained';

type ImageCropFocus =
  | 'CENTER'
  | 1
  | 5
  | 2
  | 6
  | 3
  | 7
  | 4
  | 8
  | 16
  | 17;

type DuotoneGradient = {
  readonly highlight: Scalars['String'];
  readonly shadow: Scalars['String'];
  readonly opacity: Maybe<Scalars['Int']>;
};

type PotraceTurnPolicy =
  | 'black'
  | 'white'
  | 'left'
  | 'right'
  | 'minority'
  | 'majority';

type Potrace = {
  readonly turnPolicy: Maybe<PotraceTurnPolicy>;
  readonly turdSize: Maybe<Scalars['Float']>;
  readonly alphaMax: Maybe<Scalars['Float']>;
  readonly optCurve: Maybe<Scalars['Boolean']>;
  readonly optTolerance: Maybe<Scalars['Float']>;
  readonly threshold: Maybe<Scalars['Int']>;
  readonly blackOnWhite: Maybe<Scalars['Boolean']>;
  readonly color: Maybe<Scalars['String']>;
  readonly background: Maybe<Scalars['String']>;
};

type ImageSharp = Node & {
  readonly fixed: Maybe<ImageSharpFixed>;
  readonly fluid: Maybe<ImageSharpFluid>;
  readonly gatsbyImageData: Scalars['JSON'];
  readonly original: Maybe<ImageSharpOriginal>;
  readonly resize: Maybe<ImageSharpResize>;
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};


type ImageSharp_fixedArgs = {
  width: Maybe<Scalars['Int']>;
  height: Maybe<Scalars['Int']>;
  base64Width: Maybe<Scalars['Int']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  pngCompressionSpeed?: Maybe<Scalars['Int']>;
  grayscale?: Maybe<Scalars['Boolean']>;
  duotone: Maybe<DuotoneGradient>;
  traceSVG: Maybe<Potrace>;
  quality: Maybe<Scalars['Int']>;
  jpegQuality: Maybe<Scalars['Int']>;
  pngQuality: Maybe<Scalars['Int']>;
  webpQuality: Maybe<Scalars['Int']>;
  toFormat?: Maybe<ImageFormat>;
  toFormatBase64?: Maybe<ImageFormat>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
  background?: Maybe<Scalars['String']>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
};


type ImageSharp_fluidArgs = {
  maxWidth: Maybe<Scalars['Int']>;
  maxHeight: Maybe<Scalars['Int']>;
  base64Width: Maybe<Scalars['Int']>;
  grayscale?: Maybe<Scalars['Boolean']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  pngCompressionSpeed?: Maybe<Scalars['Int']>;
  duotone: Maybe<DuotoneGradient>;
  traceSVG: Maybe<Potrace>;
  quality: Maybe<Scalars['Int']>;
  jpegQuality: Maybe<Scalars['Int']>;
  pngQuality: Maybe<Scalars['Int']>;
  webpQuality: Maybe<Scalars['Int']>;
  toFormat?: Maybe<ImageFormat>;
  toFormatBase64?: Maybe<ImageFormat>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
  background?: Maybe<Scalars['String']>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
  sizes?: Maybe<Scalars['String']>;
  srcSetBreakpoints?: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
};


type ImageSharp_gatsbyImageDataArgs = {
  layout?: Maybe<ImageLayout>;
  width: Maybe<Scalars['Int']>;
  height: Maybe<Scalars['Int']>;
  aspectRatio: Maybe<Scalars['Float']>;
  placeholder: Maybe<ImagePlaceholder>;
  blurredOptions: Maybe<BlurredOptions>;
  tracedSVGOptions: Maybe<Potrace>;
  formats: Maybe<ReadonlyArray<Maybe<ImageFormat>>>;
  outputPixelDensities: Maybe<ReadonlyArray<Maybe<Scalars['Float']>>>;
  breakpoints: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
  sizes: Maybe<Scalars['String']>;
  quality: Maybe<Scalars['Int']>;
  jpgOptions: Maybe<JPGOptions>;
  pngOptions: Maybe<PNGOptions>;
  webpOptions: Maybe<WebPOptions>;
  avifOptions: Maybe<AVIFOptions>;
  transformOptions: Maybe<TransformOptions>;
  backgroundColor: Maybe<Scalars['String']>;
};


type ImageSharp_resizeArgs = {
  width: Maybe<Scalars['Int']>;
  height: Maybe<Scalars['Int']>;
  quality: Maybe<Scalars['Int']>;
  jpegQuality: Maybe<Scalars['Int']>;
  pngQuality: Maybe<Scalars['Int']>;
  webpQuality: Maybe<Scalars['Int']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  pngCompressionLevel?: Maybe<Scalars['Int']>;
  pngCompressionSpeed?: Maybe<Scalars['Int']>;
  grayscale?: Maybe<Scalars['Boolean']>;
  duotone: Maybe<DuotoneGradient>;
  base64?: Maybe<Scalars['Boolean']>;
  traceSVG: Maybe<Potrace>;
  toFormat?: Maybe<ImageFormat>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
  background?: Maybe<Scalars['String']>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
};

type ImageSharpFixed = {
  readonly base64: Maybe<Scalars['String']>;
  readonly tracedSVG: Maybe<Scalars['String']>;
  readonly aspectRatio: Maybe<Scalars['Float']>;
  readonly width: Scalars['Float'];
  readonly height: Scalars['Float'];
  readonly src: Scalars['String'];
  readonly srcSet: Scalars['String'];
  readonly srcWebp: Maybe<Scalars['String']>;
  readonly srcSetWebp: Maybe<Scalars['String']>;
  readonly originalName: Maybe<Scalars['String']>;
};

type ImageSharpFluid = {
  readonly base64: Maybe<Scalars['String']>;
  readonly tracedSVG: Maybe<Scalars['String']>;
  readonly aspectRatio: Scalars['Float'];
  readonly src: Scalars['String'];
  readonly srcSet: Scalars['String'];
  readonly srcWebp: Maybe<Scalars['String']>;
  readonly srcSetWebp: Maybe<Scalars['String']>;
  readonly sizes: Scalars['String'];
  readonly originalImg: Maybe<Scalars['String']>;
  readonly originalName: Maybe<Scalars['String']>;
  readonly presentationWidth: Scalars['Int'];
  readonly presentationHeight: Scalars['Int'];
};


type ImagePlaceholder =
  | 'dominantColor'
  | 'tracedSVG'
  | 'blurred'
  | 'none';

type BlurredOptions = {
  /** Width of the generated low-res preview. Default is 20px */
  readonly width: Maybe<Scalars['Int']>;
  /** Force the output format for the low-res preview. Default is to use the same format as the input. You should rarely need to change this */
  readonly toFormat: Maybe<ImageFormat>;
};

type JPGOptions = {
  readonly quality: Maybe<Scalars['Int']>;
  readonly progressive: Maybe<Scalars['Boolean']>;
};

type PNGOptions = {
  readonly quality: Maybe<Scalars['Int']>;
  readonly compressionSpeed: Maybe<Scalars['Int']>;
};

type WebPOptions = {
  readonly quality: Maybe<Scalars['Int']>;
};

type AVIFOptions = {
  readonly quality: Maybe<Scalars['Int']>;
  readonly lossless: Maybe<Scalars['Boolean']>;
  readonly speed: Maybe<Scalars['Int']>;
};

type TransformOptions = {
  readonly grayscale: Maybe<Scalars['Boolean']>;
  readonly duotone: Maybe<DuotoneGradient>;
  readonly rotate: Maybe<Scalars['Int']>;
  readonly trim: Maybe<Scalars['Float']>;
  readonly cropFocus: Maybe<ImageCropFocus>;
  readonly fit: Maybe<ImageFit>;
};

type ImageSharpOriginal = {
  readonly width: Maybe<Scalars['Float']>;
  readonly height: Maybe<Scalars['Float']>;
  readonly src: Maybe<Scalars['String']>;
};

type ImageSharpResize = {
  readonly src: Maybe<Scalars['String']>;
  readonly tracedSVG: Maybe<Scalars['String']>;
  readonly width: Maybe<Scalars['Int']>;
  readonly height: Maybe<Scalars['Int']>;
  readonly aspectRatio: Maybe<Scalars['Float']>;
  readonly originalName: Maybe<Scalars['String']>;
};

type GraphQLSource = Node & {
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
  readonly typeName: Maybe<Scalars['String']>;
  readonly fieldName: Maybe<Scalars['String']>;
};

type SiteBuildMetadata = Node & {
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
  readonly buildTime: Maybe<Scalars['Date']>;
};


type SiteBuildMetadata_buildTimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};

type SitePlugin = Node & {
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
  readonly resolve: Maybe<Scalars['String']>;
  readonly name: Maybe<Scalars['String']>;
  readonly version: Maybe<Scalars['String']>;
  readonly pluginOptions: Maybe<SitePluginPluginOptions>;
  readonly nodeAPIs: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly browserAPIs: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly ssrAPIs: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly pluginFilepath: Maybe<Scalars['String']>;
  readonly packageJson: Maybe<SitePluginPackageJson>;
};

type SitePluginPluginOptions = {
  readonly isTSX: Maybe<Scalars['Boolean']>;
  readonly jsxPragma: Maybe<Scalars['String']>;
  readonly allExtensions: Maybe<Scalars['Boolean']>;
  readonly name: Maybe<Scalars['String']>;
  readonly path: Maybe<Scalars['String']>;
  readonly component: Maybe<Scalars['String']>;
  readonly typeName: Maybe<Scalars['String']>;
  readonly fieldName: Maybe<Scalars['String']>;
  readonly url: Maybe<Scalars['String']>;
  readonly headers: Maybe<SitePluginPluginOptionsHeaders>;
  readonly test: Maybe<Scalars['String']>;
  readonly options: Maybe<SitePluginPluginOptionsOptions>;
  readonly files: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly short_name: Maybe<Scalars['String']>;
  readonly start_url: Maybe<Scalars['String']>;
  readonly background_color: Maybe<Scalars['String']>;
  readonly theme_color: Maybe<Scalars['String']>;
  readonly display: Maybe<Scalars['String']>;
  readonly icon: Maybe<Scalars['String']>;
  readonly legacy: Maybe<Scalars['Boolean']>;
  readonly theme_color_in_head: Maybe<Scalars['Boolean']>;
  readonly cache_busting_mode: Maybe<Scalars['String']>;
  readonly crossOrigin: Maybe<Scalars['String']>;
  readonly include_favicon: Maybe<Scalars['Boolean']>;
  readonly cacheDigest: Maybe<Scalars['String']>;
  readonly base64Width: Maybe<Scalars['Int']>;
  readonly stripMetadata: Maybe<Scalars['Boolean']>;
  readonly defaultQuality: Maybe<Scalars['Int']>;
  readonly failOnError: Maybe<Scalars['Boolean']>;
  readonly fonts: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly pathCheck: Maybe<Scalars['Boolean']>;
};

type SitePluginPluginOptionsHeaders = {
  readonly Authorization: Maybe<Scalars['String']>;
};

type SitePluginPluginOptionsOptions = {
  readonly emitWarning: Maybe<Scalars['Boolean']>;
  readonly failOnError: Maybe<Scalars['Boolean']>;
  readonly extensions: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly exclude: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
};

type SitePluginPackageJson = {
  readonly name: Maybe<Scalars['String']>;
  readonly description: Maybe<Scalars['String']>;
  readonly version: Maybe<Scalars['String']>;
  readonly main: Maybe<Scalars['String']>;
  readonly license: Maybe<Scalars['String']>;
  readonly dependencies: Maybe<ReadonlyArray<Maybe<SitePluginPackageJsonDependencies>>>;
  readonly devDependencies: Maybe<ReadonlyArray<Maybe<SitePluginPackageJsonDevDependencies>>>;
  readonly peerDependencies: Maybe<ReadonlyArray<Maybe<SitePluginPackageJsonPeerDependencies>>>;
  readonly keywords: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
};

type SitePluginPackageJsonDependencies = {
  readonly name: Maybe<Scalars['String']>;
  readonly version: Maybe<Scalars['String']>;
};

type SitePluginPackageJsonDevDependencies = {
  readonly name: Maybe<Scalars['String']>;
  readonly version: Maybe<Scalars['String']>;
};

type SitePluginPackageJsonPeerDependencies = {
  readonly name: Maybe<Scalars['String']>;
  readonly version: Maybe<Scalars['String']>;
};

type GRAPHCMS_Aggregate = {
  readonly count: Scalars['Int'];
};

/** Asset system model */
type GRAPHCMS_Asset = GRAPHCMS_Node & {
  /** System stage field */
  readonly stage: GRAPHCMS_Stage;
  /** System Locale field */
  readonly locale: GRAPHCMS_Locale;
  /** Get the other localizations for this document */
  readonly localizations: ReadonlyArray<GRAPHCMS_Asset>;
  /** Get the document in other stages */
  readonly documentInStages: ReadonlyArray<GRAPHCMS_Asset>;
  /** The unique identifier */
  readonly id: Scalars['ID'];
  /** The time the document was created */
  readonly createdAt: Scalars['GRAPHCMS_DateTime'];
  /** User that created this document */
  readonly createdBy: Maybe<GRAPHCMS_User>;
  /** The time the document was updated */
  readonly updatedAt: Scalars['GRAPHCMS_DateTime'];
  /** User that last updated this document */
  readonly updatedBy: Maybe<GRAPHCMS_User>;
  /** The time the document was published. Null on documents in draft stage. */
  readonly publishedAt: Maybe<Scalars['GRAPHCMS_DateTime']>;
  /** User that last published this document */
  readonly publishedBy: Maybe<GRAPHCMS_User>;
  /** The file handle */
  readonly handle: Scalars['String'];
  /** The file name */
  readonly fileName: Scalars['String'];
  /** The height of the file */
  readonly height: Maybe<Scalars['Float']>;
  /** The file width */
  readonly width: Maybe<Scalars['Float']>;
  /** The file size */
  readonly size: Maybe<Scalars['Float']>;
  /** The mime type of the file */
  readonly mimeType: Maybe<Scalars['String']>;
  readonly imageIcon: ReadonlyArray<GRAPHCMS_Icon>;
  readonly imageTechnology: ReadonlyArray<GRAPHCMS_Technology>;
  readonly imageProject: ReadonlyArray<GRAPHCMS_Project>;
  /** List of Asset versions */
  readonly history: ReadonlyArray<GRAPHCMS_Version>;
  /** Get the url for the asset with provided transformations applied. */
  readonly url: Scalars['String'];
};


/** Asset system model */
type GRAPHCMS_Asset_localizationsArgs = {
  locales?: ReadonlyArray<GRAPHCMS_Locale>;
  includeCurrent?: Scalars['Boolean'];
};


/** Asset system model */
type GRAPHCMS_Asset_documentInStagesArgs = {
  stages?: ReadonlyArray<GRAPHCMS_Stage>;
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
};


/** Asset system model */
type GRAPHCMS_Asset_createdAtArgs = {
  variation?: GRAPHCMS_SystemDateTimeFieldVariation;
};


/** Asset system model */
type GRAPHCMS_Asset_createdByArgs = {
  locales: Maybe<ReadonlyArray<GRAPHCMS_Locale>>;
};


/** Asset system model */
type GRAPHCMS_Asset_updatedAtArgs = {
  variation?: GRAPHCMS_SystemDateTimeFieldVariation;
};


/** Asset system model */
type GRAPHCMS_Asset_updatedByArgs = {
  locales: Maybe<ReadonlyArray<GRAPHCMS_Locale>>;
};


/** Asset system model */
type GRAPHCMS_Asset_publishedAtArgs = {
  variation?: GRAPHCMS_SystemDateTimeFieldVariation;
};


/** Asset system model */
type GRAPHCMS_Asset_publishedByArgs = {
  locales: Maybe<ReadonlyArray<GRAPHCMS_Locale>>;
};


/** Asset system model */
type GRAPHCMS_Asset_imageIconArgs = {
  where: Maybe<GRAPHCMS_IconWhereInput>;
  orderBy: Maybe<GRAPHCMS_IconOrderByInput>;
  skip: Maybe<Scalars['Int']>;
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  locales: Maybe<ReadonlyArray<GRAPHCMS_Locale>>;
};


/** Asset system model */
type GRAPHCMS_Asset_imageTechnologyArgs = {
  where: Maybe<GRAPHCMS_TechnologyWhereInput>;
  orderBy: Maybe<GRAPHCMS_TechnologyOrderByInput>;
  skip: Maybe<Scalars['Int']>;
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  locales: Maybe<ReadonlyArray<GRAPHCMS_Locale>>;
};


/** Asset system model */
type GRAPHCMS_Asset_imageProjectArgs = {
  where: Maybe<GRAPHCMS_ProjectWhereInput>;
  orderBy: Maybe<GRAPHCMS_ProjectOrderByInput>;
  skip: Maybe<Scalars['Int']>;
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  locales: Maybe<ReadonlyArray<GRAPHCMS_Locale>>;
};


/** Asset system model */
type GRAPHCMS_Asset_historyArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride: Maybe<GRAPHCMS_Stage>;
};


/** Asset system model */
type GRAPHCMS_Asset_urlArgs = {
  transformation: Maybe<GRAPHCMS_AssetTransformationInput>;
};

type GRAPHCMS_AssetConnectInput = {
  /** Document to connect */
  readonly where: GRAPHCMS_AssetWhereUniqueInput;
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  readonly position: Maybe<GRAPHCMS_ConnectPositionInput>;
};

/** A connection to a list of items. */
type GRAPHCMS_AssetConnection = {
  /** Information to aid in pagination. */
  readonly pageInfo: GRAPHCMS_PageInfo;
  /** A list of edges. */
  readonly edges: ReadonlyArray<GRAPHCMS_AssetEdge>;
  readonly aggregate: GRAPHCMS_Aggregate;
};

type GRAPHCMS_AssetCreateInput = {
  readonly createdAt: Maybe<Scalars['GRAPHCMS_DateTime']>;
  readonly updatedAt: Maybe<Scalars['GRAPHCMS_DateTime']>;
  readonly handle: Scalars['String'];
  readonly fileName: Scalars['String'];
  readonly height: Maybe<Scalars['Float']>;
  readonly width: Maybe<Scalars['Float']>;
  readonly size: Maybe<Scalars['Float']>;
  readonly mimeType: Maybe<Scalars['String']>;
  readonly imageIcon: Maybe<GRAPHCMS_IconCreateManyInlineInput>;
  readonly imageTechnology: Maybe<GRAPHCMS_TechnologyCreateManyInlineInput>;
  readonly imageProject: Maybe<GRAPHCMS_ProjectCreateManyInlineInput>;
  /** Inline mutations for managing document localizations excluding the default locale */
  readonly localizations: Maybe<GRAPHCMS_AssetCreateLocalizationsInput>;
};

type GRAPHCMS_AssetCreateLocalizationDataInput = {
  readonly createdAt: Maybe<Scalars['GRAPHCMS_DateTime']>;
  readonly updatedAt: Maybe<Scalars['GRAPHCMS_DateTime']>;
  readonly handle: Scalars['String'];
  readonly fileName: Scalars['String'];
  readonly height: Maybe<Scalars['Float']>;
  readonly width: Maybe<Scalars['Float']>;
  readonly size: Maybe<Scalars['Float']>;
  readonly mimeType: Maybe<Scalars['String']>;
};

type GRAPHCMS_AssetCreateLocalizationInput = {
  /** Localization input */
  readonly data: GRAPHCMS_AssetCreateLocalizationDataInput;
  readonly locale: GRAPHCMS_Locale;
};

type GRAPHCMS_AssetCreateLocalizationsInput = {
  /** Create localizations for the newly-created document */
  readonly create: Maybe<ReadonlyArray<GRAPHCMS_AssetCreateLocalizationInput>>;
};

type GRAPHCMS_AssetCreateManyInlineInput = {
  /** Create and connect multiple existing Asset documents */
  readonly create: Maybe<ReadonlyArray<GRAPHCMS_AssetCreateInput>>;
  /** Connect multiple existing Asset documents */
  readonly connect: Maybe<ReadonlyArray<GRAPHCMS_AssetWhereUniqueInput>>;
};

type GRAPHCMS_AssetCreateOneInlineInput = {
  /** Create and connect one Asset document */
  readonly create: Maybe<GRAPHCMS_AssetCreateInput>;
  /** Connect one existing Asset document */
  readonly connect: Maybe<GRAPHCMS_AssetWhereUniqueInput>;
};

/** An edge in a connection. */
type GRAPHCMS_AssetEdge = {
  /** The item at the end of the edge. */
  readonly node: GRAPHCMS_Asset;
  /** A cursor for use in pagination. */
  readonly cursor: Scalars['String'];
};

/** Identifies documents */
type GRAPHCMS_AssetManyWhereInput = {
  /** Contains search across all appropriate fields. */
  readonly _search: Maybe<Scalars['String']>;
  /** Logical AND on all given filters. */
  readonly AND: Maybe<ReadonlyArray<GRAPHCMS_AssetWhereInput>>;
  /** Logical OR on all given filters. */
  readonly OR: Maybe<ReadonlyArray<GRAPHCMS_AssetWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  readonly NOT: Maybe<ReadonlyArray<GRAPHCMS_AssetWhereInput>>;
  readonly id: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  readonly id_not: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  readonly id_in: Maybe<ReadonlyArray<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  readonly id_not_in: Maybe<ReadonlyArray<Scalars['ID']>>;
  /** All values containing the given string. */
  readonly id_contains: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  readonly id_not_contains: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  readonly id_starts_with: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  readonly id_not_starts_with: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  readonly id_ends_with: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  readonly id_not_ends_with: Maybe<Scalars['ID']>;
  readonly createdAt: Maybe<Scalars['GRAPHCMS_DateTime']>;
  /** All values that are not equal to given value. */
  readonly createdAt_not: Maybe<Scalars['GRAPHCMS_DateTime']>;
  /** All values that are contained in given list. */
  readonly createdAt_in: Maybe<ReadonlyArray<Scalars['GRAPHCMS_DateTime']>>;
  /** All values that are not contained in given list. */
  readonly createdAt_not_in: Maybe<ReadonlyArray<Scalars['GRAPHCMS_DateTime']>>;
  /** All values less than the given value. */
  readonly createdAt_lt: Maybe<Scalars['GRAPHCMS_DateTime']>;
  /** All values less than or equal the given value. */
  readonly createdAt_lte: Maybe<Scalars['GRAPHCMS_DateTime']>;
  /** All values greater than the given value. */
  readonly createdAt_gt: Maybe<Scalars['GRAPHCMS_DateTime']>;
  /** All values greater than or equal the given value. */
  readonly createdAt_gte: Maybe<Scalars['GRAPHCMS_DateTime']>;
  readonly createdBy: Maybe<GRAPHCMS_UserWhereInput>;
  readonly updatedAt: Maybe<Scalars['GRAPHCMS_DateTime']>;
  /** All values that are not equal to given value. */
  readonly updatedAt_not: Maybe<Scalars['GRAPHCMS_DateTime']>;
  /** All values that are contained in given list. */
  readonly updatedAt_in: Maybe<ReadonlyArray<Scalars['GRAPHCMS_DateTime']>>;
  /** All values that are not contained in given list. */
  readonly updatedAt_not_in: Maybe<ReadonlyArray<Scalars['GRAPHCMS_DateTime']>>;
  /** All values less than the given value. */
  readonly updatedAt_lt: Maybe<Scalars['GRAPHCMS_DateTime']>;
  /** All values less than or equal the given value. */
  readonly updatedAt_lte: Maybe<Scalars['GRAPHCMS_DateTime']>;
  /** All values greater than the given value. */
  readonly updatedAt_gt: Maybe<Scalars['GRAPHCMS_DateTime']>;
  /** All values greater than or equal the given value. */
  readonly updatedAt_gte: Maybe<Scalars['GRAPHCMS_DateTime']>;
  readonly updatedBy: Maybe<GRAPHCMS_UserWhereInput>;
  readonly publishedAt: Maybe<Scalars['GRAPHCMS_DateTime']>;
  /** All values that are not equal to given value. */
  readonly publishedAt_not: Maybe<Scalars['GRAPHCMS_DateTime']>;
  /** All values that are contained in given list. */
  readonly publishedAt_in: Maybe<ReadonlyArray<Scalars['GRAPHCMS_DateTime']>>;
  /** All values that are not contained in given list. */
  readonly publishedAt_not_in: Maybe<ReadonlyArray<Scalars['GRAPHCMS_DateTime']>>;
  /** All values less than the given value. */
  readonly publishedAt_lt: Maybe<Scalars['GRAPHCMS_DateTime']>;
  /** All values less than or equal the given value. */
  readonly publishedAt_lte: Maybe<Scalars['GRAPHCMS_DateTime']>;
  /** All values greater than the given value. */
  readonly publishedAt_gt: Maybe<Scalars['GRAPHCMS_DateTime']>;
  /** All values greater than or equal the given value. */
  readonly publishedAt_gte: Maybe<Scalars['GRAPHCMS_DateTime']>;
  readonly publishedBy: Maybe<GRAPHCMS_UserWhereInput>;
  readonly imageIcon_every: Maybe<GRAPHCMS_IconWhereInput>;
  readonly imageIcon_some: Maybe<GRAPHCMS_IconWhereInput>;
  readonly imageIcon_none: Maybe<GRAPHCMS_IconWhereInput>;
  readonly imageTechnology_every: Maybe<GRAPHCMS_TechnologyWhereInput>;
  readonly imageTechnology_some: Maybe<GRAPHCMS_TechnologyWhereInput>;
  readonly imageTechnology_none: Maybe<GRAPHCMS_TechnologyWhereInput>;
  readonly imageProject_every: Maybe<GRAPHCMS_ProjectWhereInput>;
  readonly imageProject_some: Maybe<GRAPHCMS_ProjectWhereInput>;
  readonly imageProject_none: Maybe<GRAPHCMS_ProjectWhereInput>;
};

type GRAPHCMS_AssetOrderByInput =
  | 'id_ASC'
  | 'id_DESC'
  | 'createdAt_ASC'
  | 'createdAt_DESC'
  | 'updatedAt_ASC'
  | 'updatedAt_DESC'
  | 'publishedAt_ASC'
  | 'publishedAt_DESC'
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

/** Transformations for Assets */
type GRAPHCMS_AssetTransformationInput = {
  readonly image: Maybe<GRAPHCMS_ImageTransformationInput>;
  readonly document: Maybe<GRAPHCMS_DocumentTransformationInput>;
  /** Pass true if you want to validate the passed transformation parameters */
  readonly validateOptions: Maybe<Scalars['Boolean']>;
};

type GRAPHCMS_AssetUpdateInput = {
  readonly handle: Maybe<Scalars['String']>;
  readonly fileName: Maybe<Scalars['String']>;
  readonly height: Maybe<Scalars['Float']>;
  readonly width: Maybe<Scalars['Float']>;
  readonly size: Maybe<Scalars['Float']>;
  readonly mimeType: Maybe<Scalars['String']>;
  readonly imageIcon: Maybe<GRAPHCMS_IconUpdateManyInlineInput>;
  readonly imageTechnology: Maybe<GRAPHCMS_TechnologyUpdateManyInlineInput>;
  readonly imageProject: Maybe<GRAPHCMS_ProjectUpdateManyInlineInput>;
  /** Manage document localizations */
  readonly localizations: Maybe<GRAPHCMS_AssetUpdateLocalizationsInput>;
};

type GRAPHCMS_AssetUpdateLocalizationDataInput = {
  readonly handle: Maybe<Scalars['String']>;
  readonly fileName: Maybe<Scalars['String']>;
  readonly height: Maybe<Scalars['Float']>;
  readonly width: Maybe<Scalars['Float']>;
  readonly size: Maybe<Scalars['Float']>;
  readonly mimeType: Maybe<Scalars['String']>;
};

type GRAPHCMS_AssetUpdateLocalizationInput = {
  readonly data: GRAPHCMS_AssetUpdateLocalizationDataInput;
  readonly locale: GRAPHCMS_Locale;
};

type GRAPHCMS_AssetUpdateLocalizationsInput = {
  /** Localizations to create */
  readonly create: Maybe<ReadonlyArray<GRAPHCMS_AssetCreateLocalizationInput>>;
  /** Localizations to update */
  readonly update: Maybe<ReadonlyArray<GRAPHCMS_AssetUpdateLocalizationInput>>;
  readonly upsert: Maybe<ReadonlyArray<GRAPHCMS_AssetUpsertLocalizationInput>>;
  /** Localizations to delete */
  readonly delete: Maybe<ReadonlyArray<GRAPHCMS_Locale>>;
};

type GRAPHCMS_AssetUpdateManyInlineInput = {
  /** Create and connect multiple Asset documents */
  readonly create: Maybe<ReadonlyArray<GRAPHCMS_AssetCreateInput>>;
  /** Connect multiple existing Asset documents */
  readonly connect: Maybe<ReadonlyArray<GRAPHCMS_AssetConnectInput>>;
  /** Override currently-connected documents with multiple existing Asset documents */
  readonly set: Maybe<ReadonlyArray<GRAPHCMS_AssetWhereUniqueInput>>;
  /** Update multiple Asset documents */
  readonly update: Maybe<ReadonlyArray<GRAPHCMS_AssetUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Asset documents */
  readonly upsert: Maybe<ReadonlyArray<GRAPHCMS_AssetUpsertWithNestedWhereUniqueInput>>;
  /** Disconnect multiple Asset documents */
  readonly disconnect: Maybe<ReadonlyArray<GRAPHCMS_AssetWhereUniqueInput>>;
  /** Delete multiple Asset documents */
  readonly delete: Maybe<ReadonlyArray<GRAPHCMS_AssetWhereUniqueInput>>;
};

type GRAPHCMS_AssetUpdateManyInput = {
  readonly fileName: Maybe<Scalars['String']>;
  readonly height: Maybe<Scalars['Float']>;
  readonly width: Maybe<Scalars['Float']>;
  readonly size: Maybe<Scalars['Float']>;
  readonly mimeType: Maybe<Scalars['String']>;
  /** Optional updates to localizations */
  readonly localizations: Maybe<GRAPHCMS_AssetUpdateManyLocalizationsInput>;
};

type GRAPHCMS_AssetUpdateManyLocalizationDataInput = {
  readonly fileName: Maybe<Scalars['String']>;
  readonly height: Maybe<Scalars['Float']>;
  readonly width: Maybe<Scalars['Float']>;
  readonly size: Maybe<Scalars['Float']>;
  readonly mimeType: Maybe<Scalars['String']>;
};

type GRAPHCMS_AssetUpdateManyLocalizationInput = {
  readonly data: GRAPHCMS_AssetUpdateManyLocalizationDataInput;
  readonly locale: GRAPHCMS_Locale;
};

type GRAPHCMS_AssetUpdateManyLocalizationsInput = {
  /** Localizations to update */
  readonly update: Maybe<ReadonlyArray<GRAPHCMS_AssetUpdateManyLocalizationInput>>;
};

type GRAPHCMS_AssetUpdateManyWithNestedWhereInput = {
  /** Document search */
  readonly where: GRAPHCMS_AssetWhereInput;
  /** Update many input */
  readonly data: GRAPHCMS_AssetUpdateManyInput;
};

type GRAPHCMS_AssetUpdateOneInlineInput = {
  /** Create and connect one Asset document */
  readonly create: Maybe<GRAPHCMS_AssetCreateInput>;
  /** Update single Asset document */
  readonly update: Maybe<GRAPHCMS_AssetUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Asset document */
  readonly upsert: Maybe<GRAPHCMS_AssetUpsertWithNestedWhereUniqueInput>;
  /** Connect existing Asset document */
  readonly connect: Maybe<GRAPHCMS_AssetWhereUniqueInput>;
  /** Disconnect currently connected Asset document */
  readonly disconnect: Maybe<Scalars['Boolean']>;
  /** Delete currently connected Asset document */
  readonly delete: Maybe<Scalars['Boolean']>;
};

type GRAPHCMS_AssetUpdateWithNestedWhereUniqueInput = {
  /** Unique document search */
  readonly where: GRAPHCMS_AssetWhereUniqueInput;
  /** Document to update */
  readonly data: GRAPHCMS_AssetUpdateInput;
};

type GRAPHCMS_AssetUpsertInput = {
  /** Create document if it didn't exist */
  readonly create: GRAPHCMS_AssetCreateInput;
  /** Update document if it exists */
  readonly update: GRAPHCMS_AssetUpdateInput;
};

type GRAPHCMS_AssetUpsertLocalizationInput = {
  readonly update: GRAPHCMS_AssetUpdateLocalizationDataInput;
  readonly create: GRAPHCMS_AssetCreateLocalizationDataInput;
  readonly locale: GRAPHCMS_Locale;
};

type GRAPHCMS_AssetUpsertWithNestedWhereUniqueInput = {
  /** Unique document search */
  readonly where: GRAPHCMS_AssetWhereUniqueInput;
  /** Upsert data */
  readonly data: GRAPHCMS_AssetUpsertInput;
};

/** Identifies documents */
type GRAPHCMS_AssetWhereInput = {
  /** Contains search across all appropriate fields. */
  readonly _search: Maybe<Scalars['String']>;
  /** Logical AND on all given filters. */
  readonly AND: Maybe<ReadonlyArray<GRAPHCMS_AssetWhereInput>>;
  /** Logical OR on all given filters. */
  readonly OR: Maybe<ReadonlyArray<GRAPHCMS_AssetWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  readonly NOT: Maybe<ReadonlyArray<GRAPHCMS_AssetWhereInput>>;
  readonly id: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  readonly id_not: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  readonly id_in: Maybe<ReadonlyArray<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  readonly id_not_in: Maybe<ReadonlyArray<Scalars['ID']>>;
  /** All values containing the given string. */
  readonly id_contains: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  readonly id_not_contains: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  readonly id_starts_with: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  readonly id_not_starts_with: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  readonly id_ends_with: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  readonly id_not_ends_with: Maybe<Scalars['ID']>;
  readonly createdAt: Maybe<Scalars['GRAPHCMS_DateTime']>;
  /** All values that are not equal to given value. */
  readonly createdAt_not: Maybe<Scalars['GRAPHCMS_DateTime']>;
  /** All values that are contained in given list. */
  readonly createdAt_in: Maybe<ReadonlyArray<Scalars['GRAPHCMS_DateTime']>>;
  /** All values that are not contained in given list. */
  readonly createdAt_not_in: Maybe<ReadonlyArray<Scalars['GRAPHCMS_DateTime']>>;
  /** All values less than the given value. */
  readonly createdAt_lt: Maybe<Scalars['GRAPHCMS_DateTime']>;
  /** All values less than or equal the given value. */
  readonly createdAt_lte: Maybe<Scalars['GRAPHCMS_DateTime']>;
  /** All values greater than the given value. */
  readonly createdAt_gt: Maybe<Scalars['GRAPHCMS_DateTime']>;
  /** All values greater than or equal the given value. */
  readonly createdAt_gte: Maybe<Scalars['GRAPHCMS_DateTime']>;
  readonly createdBy: Maybe<GRAPHCMS_UserWhereInput>;
  readonly updatedAt: Maybe<Scalars['GRAPHCMS_DateTime']>;
  /** All values that are not equal to given value. */
  readonly updatedAt_not: Maybe<Scalars['GRAPHCMS_DateTime']>;
  /** All values that are contained in given list. */
  readonly updatedAt_in: Maybe<ReadonlyArray<Scalars['GRAPHCMS_DateTime']>>;
  /** All values that are not contained in given list. */
  readonly updatedAt_not_in: Maybe<ReadonlyArray<Scalars['GRAPHCMS_DateTime']>>;
  /** All values less than the given value. */
  readonly updatedAt_lt: Maybe<Scalars['GRAPHCMS_DateTime']>;
  /** All values less than or equal the given value. */
  readonly updatedAt_lte: Maybe<Scalars['GRAPHCMS_DateTime']>;
  /** All values greater than the given value. */
  readonly updatedAt_gt: Maybe<Scalars['GRAPHCMS_DateTime']>;
  /** All values greater than or equal the given value. */
  readonly updatedAt_gte: Maybe<Scalars['GRAPHCMS_DateTime']>;
  readonly updatedBy: Maybe<GRAPHCMS_UserWhereInput>;
  readonly publishedAt: Maybe<Scalars['GRAPHCMS_DateTime']>;
  /** All values that are not equal to given value. */
  readonly publishedAt_not: Maybe<Scalars['GRAPHCMS_DateTime']>;
  /** All values that are contained in given list. */
  readonly publishedAt_in: Maybe<ReadonlyArray<Scalars['GRAPHCMS_DateTime']>>;
  /** All values that are not contained in given list. */
  readonly publishedAt_not_in: Maybe<ReadonlyArray<Scalars['GRAPHCMS_DateTime']>>;
  /** All values less than the given value. */
  readonly publishedAt_lt: Maybe<Scalars['GRAPHCMS_DateTime']>;
  /** All values less than or equal the given value. */
  readonly publishedAt_lte: Maybe<Scalars['GRAPHCMS_DateTime']>;
  /** All values greater than the given value. */
  readonly publishedAt_gt: Maybe<Scalars['GRAPHCMS_DateTime']>;
  /** All values greater than or equal the given value. */
  readonly publishedAt_gte: Maybe<Scalars['GRAPHCMS_DateTime']>;
  readonly publishedBy: Maybe<GRAPHCMS_UserWhereInput>;
  readonly handle: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  readonly handle_not: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  readonly handle_in: Maybe<ReadonlyArray<Scalars['String']>>;
  /** All values that are not contained in given list. */
  readonly handle_not_in: Maybe<ReadonlyArray<Scalars['String']>>;
  /** All values containing the given string. */
  readonly handle_contains: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  readonly handle_not_contains: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  readonly handle_starts_with: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  readonly handle_not_starts_with: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  readonly handle_ends_with: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  readonly handle_not_ends_with: Maybe<Scalars['String']>;
  readonly fileName: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  readonly fileName_not: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  readonly fileName_in: Maybe<ReadonlyArray<Scalars['String']>>;
  /** All values that are not contained in given list. */
  readonly fileName_not_in: Maybe<ReadonlyArray<Scalars['String']>>;
  /** All values containing the given string. */
  readonly fileName_contains: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  readonly fileName_not_contains: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  readonly fileName_starts_with: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  readonly fileName_not_starts_with: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  readonly fileName_ends_with: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  readonly fileName_not_ends_with: Maybe<Scalars['String']>;
  readonly height: Maybe<Scalars['Float']>;
  /** All values that are not equal to given value. */
  readonly height_not: Maybe<Scalars['Float']>;
  /** All values that are contained in given list. */
  readonly height_in: Maybe<ReadonlyArray<Scalars['Float']>>;
  /** All values that are not contained in given list. */
  readonly height_not_in: Maybe<ReadonlyArray<Scalars['Float']>>;
  /** All values less than the given value. */
  readonly height_lt: Maybe<Scalars['Float']>;
  /** All values less than or equal the given value. */
  readonly height_lte: Maybe<Scalars['Float']>;
  /** All values greater than the given value. */
  readonly height_gt: Maybe<Scalars['Float']>;
  /** All values greater than or equal the given value. */
  readonly height_gte: Maybe<Scalars['Float']>;
  readonly width: Maybe<Scalars['Float']>;
  /** All values that are not equal to given value. */
  readonly width_not: Maybe<Scalars['Float']>;
  /** All values that are contained in given list. */
  readonly width_in: Maybe<ReadonlyArray<Scalars['Float']>>;
  /** All values that are not contained in given list. */
  readonly width_not_in: Maybe<ReadonlyArray<Scalars['Float']>>;
  /** All values less than the given value. */
  readonly width_lt: Maybe<Scalars['Float']>;
  /** All values less than or equal the given value. */
  readonly width_lte: Maybe<Scalars['Float']>;
  /** All values greater than the given value. */
  readonly width_gt: Maybe<Scalars['Float']>;
  /** All values greater than or equal the given value. */
  readonly width_gte: Maybe<Scalars['Float']>;
  readonly size: Maybe<Scalars['Float']>;
  /** All values that are not equal to given value. */
  readonly size_not: Maybe<Scalars['Float']>;
  /** All values that are contained in given list. */
  readonly size_in: Maybe<ReadonlyArray<Scalars['Float']>>;
  /** All values that are not contained in given list. */
  readonly size_not_in: Maybe<ReadonlyArray<Scalars['Float']>>;
  /** All values less than the given value. */
  readonly size_lt: Maybe<Scalars['Float']>;
  /** All values less than or equal the given value. */
  readonly size_lte: Maybe<Scalars['Float']>;
  /** All values greater than the given value. */
  readonly size_gt: Maybe<Scalars['Float']>;
  /** All values greater than or equal the given value. */
  readonly size_gte: Maybe<Scalars['Float']>;
  readonly mimeType: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  readonly mimeType_not: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  readonly mimeType_in: Maybe<ReadonlyArray<Scalars['String']>>;
  /** All values that are not contained in given list. */
  readonly mimeType_not_in: Maybe<ReadonlyArray<Scalars['String']>>;
  /** All values containing the given string. */
  readonly mimeType_contains: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  readonly mimeType_not_contains: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  readonly mimeType_starts_with: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  readonly mimeType_not_starts_with: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  readonly mimeType_ends_with: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  readonly mimeType_not_ends_with: Maybe<Scalars['String']>;
  readonly imageIcon_every: Maybe<GRAPHCMS_IconWhereInput>;
  readonly imageIcon_some: Maybe<GRAPHCMS_IconWhereInput>;
  readonly imageIcon_none: Maybe<GRAPHCMS_IconWhereInput>;
  readonly imageTechnology_every: Maybe<GRAPHCMS_TechnologyWhereInput>;
  readonly imageTechnology_some: Maybe<GRAPHCMS_TechnologyWhereInput>;
  readonly imageTechnology_none: Maybe<GRAPHCMS_TechnologyWhereInput>;
  readonly imageProject_every: Maybe<GRAPHCMS_ProjectWhereInput>;
  readonly imageProject_some: Maybe<GRAPHCMS_ProjectWhereInput>;
  readonly imageProject_none: Maybe<GRAPHCMS_ProjectWhereInput>;
};

/** References Asset record uniquely */
type GRAPHCMS_AssetWhereUniqueInput = {
  readonly id: Maybe<Scalars['ID']>;
};

type GRAPHCMS_BatchPayload = {
  /** The number of nodes that have been affected by the Batch operation. */
  readonly count: Scalars['GRAPHCMS_Long'];
};

/** Representing a color value comprising of HEX, RGBA and css color values */
type GRAPHCMS_Color = {
  readonly hex: Scalars['GRAPHCMS_Hex'];
  readonly rgba: GRAPHCMS_RGBA;
  readonly css: Scalars['String'];
};

/** Accepts either HEX or RGBA color value. At least one of hex or rgba value should be passed. If both are passed RGBA is used. */
type GRAPHCMS_ColorInput = {
  readonly hex: Maybe<Scalars['GRAPHCMS_Hex']>;
  readonly rgba: Maybe<GRAPHCMS_RGBAInput>;
};

type GRAPHCMS_ConnectPositionInput = {
  /** Connect document after specified document */
  readonly after: Maybe<Scalars['ID']>;
  /** Connect document before specified document */
  readonly before: Maybe<Scalars['ID']>;
  /** Connect document at first position */
  readonly start: Maybe<Scalars['Boolean']>;
  /** Connect document at last position */
  readonly end: Maybe<Scalars['Boolean']>;
};



type GRAPHCMS_DocumentFileTypes =
  | 'jpg'
  | 'odp'
  | 'ods'
  | 'odt'
  | 'png'
  | 'svg'
  | 'txt'
  | 'webp'
  | 'docx'
  | 'pdf'
  | 'html'
  | 'doc'
  | 'xlsx'
  | 'xls'
  | 'pptx'
  | 'ppt';

type GRAPHCMS_DocumentOutputInput = {
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
  readonly format: Maybe<GRAPHCMS_DocumentFileTypes>;
};

/** Transformations for Documents */
type GRAPHCMS_DocumentTransformationInput = {
  /** Changes the output for the file. */
  readonly output: Maybe<GRAPHCMS_DocumentOutputInput>;
};

type GRAPHCMS_DocumentVersion = {
  readonly id: Scalars['ID'];
  readonly stage: GRAPHCMS_Stage;
  readonly revision: Scalars['Int'];
  readonly createdAt: Scalars['GRAPHCMS_DateTime'];
  readonly data: Maybe<Scalars['GRAPHCMS_Json']>;
};


type GRAPHCMS_Icon = GRAPHCMS_Node & {
  /** System stage field */
  readonly stage: GRAPHCMS_Stage;
  /** Get the document in other stages */
  readonly documentInStages: ReadonlyArray<GRAPHCMS_Icon>;
  /** The unique identifier */
  readonly id: Scalars['ID'];
  /** The time the document was created */
  readonly createdAt: Scalars['GRAPHCMS_DateTime'];
  /** User that created this document */
  readonly createdBy: Maybe<GRAPHCMS_User>;
  /** The time the document was updated */
  readonly updatedAt: Scalars['GRAPHCMS_DateTime'];
  /** User that last updated this document */
  readonly updatedBy: Maybe<GRAPHCMS_User>;
  /** The time the document was published. Null on documents in draft stage. */
  readonly publishedAt: Maybe<Scalars['GRAPHCMS_DateTime']>;
  /** User that last published this document */
  readonly publishedBy: Maybe<GRAPHCMS_User>;
  readonly title: Scalars['String'];
  readonly image: GRAPHCMS_Asset;
  readonly url: Scalars['String'];
  readonly listed: Maybe<Scalars['Boolean']>;
  /** List of Icon versions */
  readonly history: ReadonlyArray<GRAPHCMS_Version>;
};


type GRAPHCMS_Icon_documentInStagesArgs = {
  stages?: ReadonlyArray<GRAPHCMS_Stage>;
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
};


type GRAPHCMS_Icon_createdByArgs = {
  locales: Maybe<ReadonlyArray<GRAPHCMS_Locale>>;
};


type GRAPHCMS_Icon_updatedByArgs = {
  locales: Maybe<ReadonlyArray<GRAPHCMS_Locale>>;
};


type GRAPHCMS_Icon_publishedByArgs = {
  locales: Maybe<ReadonlyArray<GRAPHCMS_Locale>>;
};


type GRAPHCMS_Icon_imageArgs = {
  locales: Maybe<ReadonlyArray<GRAPHCMS_Locale>>;
};


type GRAPHCMS_Icon_historyArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride: Maybe<GRAPHCMS_Stage>;
};

type GRAPHCMS_IconConnectInput = {
  /** Document to connect */
  readonly where: GRAPHCMS_IconWhereUniqueInput;
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  readonly position: Maybe<GRAPHCMS_ConnectPositionInput>;
};

/** A connection to a list of items. */
type GRAPHCMS_IconConnection = {
  /** Information to aid in pagination. */
  readonly pageInfo: GRAPHCMS_PageInfo;
  /** A list of edges. */
  readonly edges: ReadonlyArray<GRAPHCMS_IconEdge>;
  readonly aggregate: GRAPHCMS_Aggregate;
};

type GRAPHCMS_IconCreateInput = {
  readonly createdAt: Maybe<Scalars['GRAPHCMS_DateTime']>;
  readonly updatedAt: Maybe<Scalars['GRAPHCMS_DateTime']>;
  readonly title: Scalars['String'];
  readonly image: GRAPHCMS_AssetCreateOneInlineInput;
  readonly url: Scalars['String'];
  readonly listed: Maybe<Scalars['Boolean']>;
};

type GRAPHCMS_IconCreateManyInlineInput = {
  /** Create and connect multiple existing Icon documents */
  readonly create: Maybe<ReadonlyArray<GRAPHCMS_IconCreateInput>>;
  /** Connect multiple existing Icon documents */
  readonly connect: Maybe<ReadonlyArray<GRAPHCMS_IconWhereUniqueInput>>;
};

type GRAPHCMS_IconCreateOneInlineInput = {
  /** Create and connect one Icon document */
  readonly create: Maybe<GRAPHCMS_IconCreateInput>;
  /** Connect one existing Icon document */
  readonly connect: Maybe<GRAPHCMS_IconWhereUniqueInput>;
};

/** An edge in a connection. */
type GRAPHCMS_IconEdge = {
  /** The item at the end of the edge. */
  readonly node: GRAPHCMS_Icon;
  /** A cursor for use in pagination. */
  readonly cursor: Scalars['String'];
};

/** Identifies documents */
type GRAPHCMS_IconManyWhereInput = {
  /** Contains search across all appropriate fields. */
  readonly _search: Maybe<Scalars['String']>;
  /** Logical AND on all given filters. */
  readonly AND: Maybe<ReadonlyArray<GRAPHCMS_IconWhereInput>>;
  /** Logical OR on all given filters. */
  readonly OR: Maybe<ReadonlyArray<GRAPHCMS_IconWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  readonly NOT: Maybe<ReadonlyArray<GRAPHCMS_IconWhereInput>>;
  readonly id: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  readonly id_not: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  readonly id_in: Maybe<ReadonlyArray<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  readonly id_not_in: Maybe<ReadonlyArray<Scalars['ID']>>;
  /** All values containing the given string. */
  readonly id_contains: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  readonly id_not_contains: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  readonly id_starts_with: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  readonly id_not_starts_with: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  readonly id_ends_with: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  readonly id_not_ends_with: Maybe<Scalars['ID']>;
  readonly createdAt: Maybe<Scalars['GRAPHCMS_DateTime']>;
  /** All values that are not equal to given value. */
  readonly createdAt_not: Maybe<Scalars['GRAPHCMS_DateTime']>;
  /** All values that are contained in given list. */
  readonly createdAt_in: Maybe<ReadonlyArray<Scalars['GRAPHCMS_DateTime']>>;
  /** All values that are not contained in given list. */
  readonly createdAt_not_in: Maybe<ReadonlyArray<Scalars['GRAPHCMS_DateTime']>>;
  /** All values less than the given value. */
  readonly createdAt_lt: Maybe<Scalars['GRAPHCMS_DateTime']>;
  /** All values less than or equal the given value. */
  readonly createdAt_lte: Maybe<Scalars['GRAPHCMS_DateTime']>;
  /** All values greater than the given value. */
  readonly createdAt_gt: Maybe<Scalars['GRAPHCMS_DateTime']>;
  /** All values greater than or equal the given value. */
  readonly createdAt_gte: Maybe<Scalars['GRAPHCMS_DateTime']>;
  readonly createdBy: Maybe<GRAPHCMS_UserWhereInput>;
  readonly updatedAt: Maybe<Scalars['GRAPHCMS_DateTime']>;
  /** All values that are not equal to given value. */
  readonly updatedAt_not: Maybe<Scalars['GRAPHCMS_DateTime']>;
  /** All values that are contained in given list. */
  readonly updatedAt_in: Maybe<ReadonlyArray<Scalars['GRAPHCMS_DateTime']>>;
  /** All values that are not contained in given list. */
  readonly updatedAt_not_in: Maybe<ReadonlyArray<Scalars['GRAPHCMS_DateTime']>>;
  /** All values less than the given value. */
  readonly updatedAt_lt: Maybe<Scalars['GRAPHCMS_DateTime']>;
  /** All values less than or equal the given value. */
  readonly updatedAt_lte: Maybe<Scalars['GRAPHCMS_DateTime']>;
  /** All values greater than the given value. */
  readonly updatedAt_gt: Maybe<Scalars['GRAPHCMS_DateTime']>;
  /** All values greater than or equal the given value. */
  readonly updatedAt_gte: Maybe<Scalars['GRAPHCMS_DateTime']>;
  readonly updatedBy: Maybe<GRAPHCMS_UserWhereInput>;
  readonly publishedAt: Maybe<Scalars['GRAPHCMS_DateTime']>;
  /** All values that are not equal to given value. */
  readonly publishedAt_not: Maybe<Scalars['GRAPHCMS_DateTime']>;
  /** All values that are contained in given list. */
  readonly publishedAt_in: Maybe<ReadonlyArray<Scalars['GRAPHCMS_DateTime']>>;
  /** All values that are not contained in given list. */
  readonly publishedAt_not_in: Maybe<ReadonlyArray<Scalars['GRAPHCMS_DateTime']>>;
  /** All values less than the given value. */
  readonly publishedAt_lt: Maybe<Scalars['GRAPHCMS_DateTime']>;
  /** All values less than or equal the given value. */
  readonly publishedAt_lte: Maybe<Scalars['GRAPHCMS_DateTime']>;
  /** All values greater than the given value. */
  readonly publishedAt_gt: Maybe<Scalars['GRAPHCMS_DateTime']>;
  /** All values greater than or equal the given value. */
  readonly publishedAt_gte: Maybe<Scalars['GRAPHCMS_DateTime']>;
  readonly publishedBy: Maybe<GRAPHCMS_UserWhereInput>;
  readonly title: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  readonly title_not: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  readonly title_in: Maybe<ReadonlyArray<Scalars['String']>>;
  /** All values that are not contained in given list. */
  readonly title_not_in: Maybe<ReadonlyArray<Scalars['String']>>;
  /** All values containing the given string. */
  readonly title_contains: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  readonly title_not_contains: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  readonly title_starts_with: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  readonly title_not_starts_with: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  readonly title_ends_with: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  readonly title_not_ends_with: Maybe<Scalars['String']>;
  readonly image: Maybe<GRAPHCMS_AssetWhereInput>;
  readonly url: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  readonly url_not: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  readonly url_in: Maybe<ReadonlyArray<Scalars['String']>>;
  /** All values that are not contained in given list. */
  readonly url_not_in: Maybe<ReadonlyArray<Scalars['String']>>;
  /** All values containing the given string. */
  readonly url_contains: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  readonly url_not_contains: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  readonly url_starts_with: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  readonly url_not_starts_with: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  readonly url_ends_with: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  readonly url_not_ends_with: Maybe<Scalars['String']>;
  readonly listed: Maybe<Scalars['Boolean']>;
  /** All values that are not equal to given value. */
  readonly listed_not: Maybe<Scalars['Boolean']>;
};

type GRAPHCMS_IconOrderByInput =
  | 'id_ASC'
  | 'id_DESC'
  | 'createdAt_ASC'
  | 'createdAt_DESC'
  | 'updatedAt_ASC'
  | 'updatedAt_DESC'
  | 'publishedAt_ASC'
  | 'publishedAt_DESC'
  | 'title_ASC'
  | 'title_DESC'
  | 'url_ASC'
  | 'url_DESC'
  | 'listed_ASC'
  | 'listed_DESC';

type GRAPHCMS_IconUpdateInput = {
  readonly title: Maybe<Scalars['String']>;
  readonly image: Maybe<GRAPHCMS_AssetUpdateOneInlineInput>;
  readonly url: Maybe<Scalars['String']>;
  readonly listed: Maybe<Scalars['Boolean']>;
};

type GRAPHCMS_IconUpdateManyInlineInput = {
  /** Create and connect multiple Icon documents */
  readonly create: Maybe<ReadonlyArray<GRAPHCMS_IconCreateInput>>;
  /** Connect multiple existing Icon documents */
  readonly connect: Maybe<ReadonlyArray<GRAPHCMS_IconConnectInput>>;
  /** Override currently-connected documents with multiple existing Icon documents */
  readonly set: Maybe<ReadonlyArray<GRAPHCMS_IconWhereUniqueInput>>;
  /** Update multiple Icon documents */
  readonly update: Maybe<ReadonlyArray<GRAPHCMS_IconUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Icon documents */
  readonly upsert: Maybe<ReadonlyArray<GRAPHCMS_IconUpsertWithNestedWhereUniqueInput>>;
  /** Disconnect multiple Icon documents */
  readonly disconnect: Maybe<ReadonlyArray<GRAPHCMS_IconWhereUniqueInput>>;
  /** Delete multiple Icon documents */
  readonly delete: Maybe<ReadonlyArray<GRAPHCMS_IconWhereUniqueInput>>;
};

type GRAPHCMS_IconUpdateManyInput = {
  readonly listed: Maybe<Scalars['Boolean']>;
};

type GRAPHCMS_IconUpdateManyWithNestedWhereInput = {
  /** Document search */
  readonly where: GRAPHCMS_IconWhereInput;
  /** Update many input */
  readonly data: GRAPHCMS_IconUpdateManyInput;
};

type GRAPHCMS_IconUpdateOneInlineInput = {
  /** Create and connect one Icon document */
  readonly create: Maybe<GRAPHCMS_IconCreateInput>;
  /** Update single Icon document */
  readonly update: Maybe<GRAPHCMS_IconUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Icon document */
  readonly upsert: Maybe<GRAPHCMS_IconUpsertWithNestedWhereUniqueInput>;
  /** Connect existing Icon document */
  readonly connect: Maybe<GRAPHCMS_IconWhereUniqueInput>;
  /** Disconnect currently connected Icon document */
  readonly disconnect: Maybe<Scalars['Boolean']>;
  /** Delete currently connected Icon document */
  readonly delete: Maybe<Scalars['Boolean']>;
};

type GRAPHCMS_IconUpdateWithNestedWhereUniqueInput = {
  /** Unique document search */
  readonly where: GRAPHCMS_IconWhereUniqueInput;
  /** Document to update */
  readonly data: GRAPHCMS_IconUpdateInput;
};

type GRAPHCMS_IconUpsertInput = {
  /** Create document if it didn't exist */
  readonly create: GRAPHCMS_IconCreateInput;
  /** Update document if it exists */
  readonly update: GRAPHCMS_IconUpdateInput;
};

type GRAPHCMS_IconUpsertWithNestedWhereUniqueInput = {
  /** Unique document search */
  readonly where: GRAPHCMS_IconWhereUniqueInput;
  /** Upsert data */
  readonly data: GRAPHCMS_IconUpsertInput;
};

/** Identifies documents */
type GRAPHCMS_IconWhereInput = {
  /** Contains search across all appropriate fields. */
  readonly _search: Maybe<Scalars['String']>;
  /** Logical AND on all given filters. */
  readonly AND: Maybe<ReadonlyArray<GRAPHCMS_IconWhereInput>>;
  /** Logical OR on all given filters. */
  readonly OR: Maybe<ReadonlyArray<GRAPHCMS_IconWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  readonly NOT: Maybe<ReadonlyArray<GRAPHCMS_IconWhereInput>>;
  readonly id: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  readonly id_not: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  readonly id_in: Maybe<ReadonlyArray<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  readonly id_not_in: Maybe<ReadonlyArray<Scalars['ID']>>;
  /** All values containing the given string. */
  readonly id_contains: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  readonly id_not_contains: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  readonly id_starts_with: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  readonly id_not_starts_with: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  readonly id_ends_with: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  readonly id_not_ends_with: Maybe<Scalars['ID']>;
  readonly createdAt: Maybe<Scalars['GRAPHCMS_DateTime']>;
  /** All values that are not equal to given value. */
  readonly createdAt_not: Maybe<Scalars['GRAPHCMS_DateTime']>;
  /** All values that are contained in given list. */
  readonly createdAt_in: Maybe<ReadonlyArray<Scalars['GRAPHCMS_DateTime']>>;
  /** All values that are not contained in given list. */
  readonly createdAt_not_in: Maybe<ReadonlyArray<Scalars['GRAPHCMS_DateTime']>>;
  /** All values less than the given value. */
  readonly createdAt_lt: Maybe<Scalars['GRAPHCMS_DateTime']>;
  /** All values less than or equal the given value. */
  readonly createdAt_lte: Maybe<Scalars['GRAPHCMS_DateTime']>;
  /** All values greater than the given value. */
  readonly createdAt_gt: Maybe<Scalars['GRAPHCMS_DateTime']>;
  /** All values greater than or equal the given value. */
  readonly createdAt_gte: Maybe<Scalars['GRAPHCMS_DateTime']>;
  readonly createdBy: Maybe<GRAPHCMS_UserWhereInput>;
  readonly updatedAt: Maybe<Scalars['GRAPHCMS_DateTime']>;
  /** All values that are not equal to given value. */
  readonly updatedAt_not: Maybe<Scalars['GRAPHCMS_DateTime']>;
  /** All values that are contained in given list. */
  readonly updatedAt_in: Maybe<ReadonlyArray<Scalars['GRAPHCMS_DateTime']>>;
  /** All values that are not contained in given list. */
  readonly updatedAt_not_in: Maybe<ReadonlyArray<Scalars['GRAPHCMS_DateTime']>>;
  /** All values less than the given value. */
  readonly updatedAt_lt: Maybe<Scalars['GRAPHCMS_DateTime']>;
  /** All values less than or equal the given value. */
  readonly updatedAt_lte: Maybe<Scalars['GRAPHCMS_DateTime']>;
  /** All values greater than the given value. */
  readonly updatedAt_gt: Maybe<Scalars['GRAPHCMS_DateTime']>;
  /** All values greater than or equal the given value. */
  readonly updatedAt_gte: Maybe<Scalars['GRAPHCMS_DateTime']>;
  readonly updatedBy: Maybe<GRAPHCMS_UserWhereInput>;
  readonly publishedAt: Maybe<Scalars['GRAPHCMS_DateTime']>;
  /** All values that are not equal to given value. */
  readonly publishedAt_not: Maybe<Scalars['GRAPHCMS_DateTime']>;
  /** All values that are contained in given list. */
  readonly publishedAt_in: Maybe<ReadonlyArray<Scalars['GRAPHCMS_DateTime']>>;
  /** All values that are not contained in given list. */
  readonly publishedAt_not_in: Maybe<ReadonlyArray<Scalars['GRAPHCMS_DateTime']>>;
  /** All values less than the given value. */
  readonly publishedAt_lt: Maybe<Scalars['GRAPHCMS_DateTime']>;
  /** All values less than or equal the given value. */
  readonly publishedAt_lte: Maybe<Scalars['GRAPHCMS_DateTime']>;
  /** All values greater than the given value. */
  readonly publishedAt_gt: Maybe<Scalars['GRAPHCMS_DateTime']>;
  /** All values greater than or equal the given value. */
  readonly publishedAt_gte: Maybe<Scalars['GRAPHCMS_DateTime']>;
  readonly publishedBy: Maybe<GRAPHCMS_UserWhereInput>;
  readonly title: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  readonly title_not: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  readonly title_in: Maybe<ReadonlyArray<Scalars['String']>>;
  /** All values that are not contained in given list. */
  readonly title_not_in: Maybe<ReadonlyArray<Scalars['String']>>;
  /** All values containing the given string. */
  readonly title_contains: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  readonly title_not_contains: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  readonly title_starts_with: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  readonly title_not_starts_with: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  readonly title_ends_with: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  readonly title_not_ends_with: Maybe<Scalars['String']>;
  readonly image: Maybe<GRAPHCMS_AssetWhereInput>;
  readonly url: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  readonly url_not: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  readonly url_in: Maybe<ReadonlyArray<Scalars['String']>>;
  /** All values that are not contained in given list. */
  readonly url_not_in: Maybe<ReadonlyArray<Scalars['String']>>;
  /** All values containing the given string. */
  readonly url_contains: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  readonly url_not_contains: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  readonly url_starts_with: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  readonly url_not_starts_with: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  readonly url_ends_with: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  readonly url_not_ends_with: Maybe<Scalars['String']>;
  readonly listed: Maybe<Scalars['Boolean']>;
  /** All values that are not equal to given value. */
  readonly listed_not: Maybe<Scalars['Boolean']>;
};

/** References Icon record uniquely */
type GRAPHCMS_IconWhereUniqueInput = {
  readonly id: Maybe<Scalars['ID']>;
  readonly title: Maybe<Scalars['String']>;
  readonly url: Maybe<Scalars['String']>;
};

type GRAPHCMS_ImageFit =
  /** Resizes the image to fit within the specified parameters without distorting, cropping, or changing the aspect ratio. */
  | 'clip'
  /** Resizes the image to fit the specified parameters exactly by removing any parts of the image that don't fit within the boundaries. */
  | 'crop'
  /** Resizes the image to fit the specified parameters exactly by scaling the image to the desired size. The aspect ratio of the image is not respected and the image can be distorted using this method. */
  | 'scale'
  /** Resizes the image to fit within the parameters, but as opposed to 'fit:clip' will not scale the image if the image is smaller than the output size. */
  | 'max';

type GRAPHCMS_ImageResizeInput = {
  /** The width in pixels to resize the image to. The value must be an integer from 1 to 10000. */
  readonly width: Maybe<Scalars['Int']>;
  /** The height in pixels to resize the image to. The value must be an integer from 1 to 10000. */
  readonly height: Maybe<Scalars['Int']>;
  /** The default value for the fit parameter is fit:clip. */
  readonly fit: Maybe<GRAPHCMS_ImageFit>;
};

/** Transformations for Images */
type GRAPHCMS_ImageTransformationInput = {
  /** Resizes the image */
  readonly resize: Maybe<GRAPHCMS_ImageResizeInput>;
};


/** Locale system enumeration */
type GRAPHCMS_Locale =
  /** System locale */
  | 'en'
  | 'pl';

/** Representing a geolocation point with latitude and longitude */
type GRAPHCMS_Location = {
  readonly latitude: Scalars['Float'];
  readonly longitude: Scalars['Float'];
  readonly distance: Scalars['Float'];
};


/** Representing a geolocation point with latitude and longitude */
type GRAPHCMS_Location_distanceArgs = {
  from: GRAPHCMS_LocationInput;
};

/** Input for a geolocation point with latitude and longitude */
type GRAPHCMS_LocationInput = {
  readonly latitude: Scalars['Float'];
  readonly longitude: Scalars['Float'];
};


/** An object with an ID */
type GRAPHCMS_Node = {
  /** The id of the object. */
  readonly id: Scalars['ID'];
  /** The Stage of an object */
  readonly stage: GRAPHCMS_Stage;
};

/** Information about pagination in a connection. */
type GRAPHCMS_PageInfo = {
  /** When paginating forwards, are there more items? */
  readonly hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  readonly hasPreviousPage: Scalars['Boolean'];
  /** When paginating backwards, the cursor to continue. */
  readonly startCursor: Maybe<Scalars['String']>;
  /** When paginating forwards, the cursor to continue. */
  readonly endCursor: Maybe<Scalars['String']>;
  /** Number of items in the current page. */
  readonly pageSize: Maybe<Scalars['Int']>;
};

type GRAPHCMS_Project = GRAPHCMS_Node & {
  /** System stage field */
  readonly stage: GRAPHCMS_Stage;
  /** System Locale field */
  readonly locale: GRAPHCMS_Locale;
  /** Get the other localizations for this document */
  readonly localizations: ReadonlyArray<GRAPHCMS_Project>;
  /** Get the document in other stages */
  readonly documentInStages: ReadonlyArray<GRAPHCMS_Project>;
  /** The unique identifier */
  readonly id: Scalars['ID'];
  /** The time the document was created */
  readonly createdAt: Scalars['GRAPHCMS_DateTime'];
  /** User that created this document */
  readonly createdBy: Maybe<GRAPHCMS_User>;
  /** The time the document was updated */
  readonly updatedAt: Scalars['GRAPHCMS_DateTime'];
  /** User that last updated this document */
  readonly updatedBy: Maybe<GRAPHCMS_User>;
  /** The time the document was published. Null on documents in draft stage. */
  readonly publishedAt: Maybe<Scalars['GRAPHCMS_DateTime']>;
  /** User that last published this document */
  readonly publishedBy: Maybe<GRAPHCMS_User>;
  readonly title: Scalars['String'];
  readonly description: Scalars['String'];
  readonly image: GRAPHCMS_Asset;
  readonly technologies: ReadonlyArray<GRAPHCMS_Technology>;
  readonly year: Maybe<Scalars['String']>;
  readonly srcLink: Maybe<Scalars['String']>;
  readonly liveLink: Maybe<Scalars['String']>;
  readonly listed: Maybe<Scalars['Boolean']>;
  /** List of Project versions */
  readonly history: ReadonlyArray<GRAPHCMS_Version>;
};


type GRAPHCMS_Project_localizationsArgs = {
  locales?: ReadonlyArray<GRAPHCMS_Locale>;
  includeCurrent?: Scalars['Boolean'];
};


type GRAPHCMS_Project_documentInStagesArgs = {
  stages?: ReadonlyArray<GRAPHCMS_Stage>;
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
};


type GRAPHCMS_Project_createdAtArgs = {
  variation?: GRAPHCMS_SystemDateTimeFieldVariation;
};


type GRAPHCMS_Project_createdByArgs = {
  locales: Maybe<ReadonlyArray<GRAPHCMS_Locale>>;
};


type GRAPHCMS_Project_updatedAtArgs = {
  variation?: GRAPHCMS_SystemDateTimeFieldVariation;
};


type GRAPHCMS_Project_updatedByArgs = {
  locales: Maybe<ReadonlyArray<GRAPHCMS_Locale>>;
};


type GRAPHCMS_Project_publishedAtArgs = {
  variation?: GRAPHCMS_SystemDateTimeFieldVariation;
};


type GRAPHCMS_Project_publishedByArgs = {
  locales: Maybe<ReadonlyArray<GRAPHCMS_Locale>>;
};


type GRAPHCMS_Project_imageArgs = {
  locales: Maybe<ReadonlyArray<GRAPHCMS_Locale>>;
};


type GRAPHCMS_Project_technologiesArgs = {
  where: Maybe<GRAPHCMS_TechnologyWhereInput>;
  orderBy: Maybe<GRAPHCMS_TechnologyOrderByInput>;
  skip: Maybe<Scalars['Int']>;
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  locales: Maybe<ReadonlyArray<GRAPHCMS_Locale>>;
};


type GRAPHCMS_Project_historyArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride: Maybe<GRAPHCMS_Stage>;
};

type GRAPHCMS_ProjectConnectInput = {
  /** Document to connect */
  readonly where: GRAPHCMS_ProjectWhereUniqueInput;
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  readonly position: Maybe<GRAPHCMS_ConnectPositionInput>;
};

/** A connection to a list of items. */
type GRAPHCMS_ProjectConnection = {
  /** Information to aid in pagination. */
  readonly pageInfo: GRAPHCMS_PageInfo;
  /** A list of edges. */
  readonly edges: ReadonlyArray<GRAPHCMS_ProjectEdge>;
  readonly aggregate: GRAPHCMS_Aggregate;
};

type GRAPHCMS_ProjectCreateInput = {
  readonly createdAt: Maybe<Scalars['GRAPHCMS_DateTime']>;
  readonly updatedAt: Maybe<Scalars['GRAPHCMS_DateTime']>;
  readonly title: Scalars['String'];
  /** description input for default locale (en) */
  readonly description: Scalars['String'];
  readonly image: GRAPHCMS_AssetCreateOneInlineInput;
  readonly technologies: Maybe<GRAPHCMS_TechnologyCreateManyInlineInput>;
  readonly year: Maybe<Scalars['String']>;
  readonly srcLink: Maybe<Scalars['String']>;
  readonly liveLink: Maybe<Scalars['String']>;
  readonly listed: Maybe<Scalars['Boolean']>;
  /** Inline mutations for managing document localizations excluding the default locale */
  readonly localizations: Maybe<GRAPHCMS_ProjectCreateLocalizationsInput>;
};

type GRAPHCMS_ProjectCreateLocalizationDataInput = {
  readonly createdAt: Maybe<Scalars['GRAPHCMS_DateTime']>;
  readonly updatedAt: Maybe<Scalars['GRAPHCMS_DateTime']>;
  readonly description: Scalars['String'];
};

type GRAPHCMS_ProjectCreateLocalizationInput = {
  /** Localization input */
  readonly data: GRAPHCMS_ProjectCreateLocalizationDataInput;
  readonly locale: GRAPHCMS_Locale;
};

type GRAPHCMS_ProjectCreateLocalizationsInput = {
  /** Create localizations for the newly-created document */
  readonly create: Maybe<ReadonlyArray<GRAPHCMS_ProjectCreateLocalizationInput>>;
};

type GRAPHCMS_ProjectCreateManyInlineInput = {
  /** Create and connect multiple existing Project documents */
  readonly create: Maybe<ReadonlyArray<GRAPHCMS_ProjectCreateInput>>;
  /** Connect multiple existing Project documents */
  readonly connect: Maybe<ReadonlyArray<GRAPHCMS_ProjectWhereUniqueInput>>;
};

type GRAPHCMS_ProjectCreateOneInlineInput = {
  /** Create and connect one Project document */
  readonly create: Maybe<GRAPHCMS_ProjectCreateInput>;
  /** Connect one existing Project document */
  readonly connect: Maybe<GRAPHCMS_ProjectWhereUniqueInput>;
};

/** An edge in a connection. */
type GRAPHCMS_ProjectEdge = {
  /** The item at the end of the edge. */
  readonly node: GRAPHCMS_Project;
  /** A cursor for use in pagination. */
  readonly cursor: Scalars['String'];
};

/** Identifies documents */
type GRAPHCMS_ProjectManyWhereInput = {
  /** Contains search across all appropriate fields. */
  readonly _search: Maybe<Scalars['String']>;
  /** Logical AND on all given filters. */
  readonly AND: Maybe<ReadonlyArray<GRAPHCMS_ProjectWhereInput>>;
  /** Logical OR on all given filters. */
  readonly OR: Maybe<ReadonlyArray<GRAPHCMS_ProjectWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  readonly NOT: Maybe<ReadonlyArray<GRAPHCMS_ProjectWhereInput>>;
  readonly id: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  readonly id_not: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  readonly id_in: Maybe<ReadonlyArray<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  readonly id_not_in: Maybe<ReadonlyArray<Scalars['ID']>>;
  /** All values containing the given string. */
  readonly id_contains: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  readonly id_not_contains: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  readonly id_starts_with: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  readonly id_not_starts_with: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  readonly id_ends_with: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  readonly id_not_ends_with: Maybe<Scalars['ID']>;
  readonly createdAt: Maybe<Scalars['GRAPHCMS_DateTime']>;
  /** All values that are not equal to given value. */
  readonly createdAt_not: Maybe<Scalars['GRAPHCMS_DateTime']>;
  /** All values that are contained in given list. */
  readonly createdAt_in: Maybe<ReadonlyArray<Scalars['GRAPHCMS_DateTime']>>;
  /** All values that are not contained in given list. */
  readonly createdAt_not_in: Maybe<ReadonlyArray<Scalars['GRAPHCMS_DateTime']>>;
  /** All values less than the given value. */
  readonly createdAt_lt: Maybe<Scalars['GRAPHCMS_DateTime']>;
  /** All values less than or equal the given value. */
  readonly createdAt_lte: Maybe<Scalars['GRAPHCMS_DateTime']>;
  /** All values greater than the given value. */
  readonly createdAt_gt: Maybe<Scalars['GRAPHCMS_DateTime']>;
  /** All values greater than or equal the given value. */
  readonly createdAt_gte: Maybe<Scalars['GRAPHCMS_DateTime']>;
  readonly createdBy: Maybe<GRAPHCMS_UserWhereInput>;
  readonly updatedAt: Maybe<Scalars['GRAPHCMS_DateTime']>;
  /** All values that are not equal to given value. */
  readonly updatedAt_not: Maybe<Scalars['GRAPHCMS_DateTime']>;
  /** All values that are contained in given list. */
  readonly updatedAt_in: Maybe<ReadonlyArray<Scalars['GRAPHCMS_DateTime']>>;
  /** All values that are not contained in given list. */
  readonly updatedAt_not_in: Maybe<ReadonlyArray<Scalars['GRAPHCMS_DateTime']>>;
  /** All values less than the given value. */
  readonly updatedAt_lt: Maybe<Scalars['GRAPHCMS_DateTime']>;
  /** All values less than or equal the given value. */
  readonly updatedAt_lte: Maybe<Scalars['GRAPHCMS_DateTime']>;
  /** All values greater than the given value. */
  readonly updatedAt_gt: Maybe<Scalars['GRAPHCMS_DateTime']>;
  /** All values greater than or equal the given value. */
  readonly updatedAt_gte: Maybe<Scalars['GRAPHCMS_DateTime']>;
  readonly updatedBy: Maybe<GRAPHCMS_UserWhereInput>;
  readonly publishedAt: Maybe<Scalars['GRAPHCMS_DateTime']>;
  /** All values that are not equal to given value. */
  readonly publishedAt_not: Maybe<Scalars['GRAPHCMS_DateTime']>;
  /** All values that are contained in given list. */
  readonly publishedAt_in: Maybe<ReadonlyArray<Scalars['GRAPHCMS_DateTime']>>;
  /** All values that are not contained in given list. */
  readonly publishedAt_not_in: Maybe<ReadonlyArray<Scalars['GRAPHCMS_DateTime']>>;
  /** All values less than the given value. */
  readonly publishedAt_lt: Maybe<Scalars['GRAPHCMS_DateTime']>;
  /** All values less than or equal the given value. */
  readonly publishedAt_lte: Maybe<Scalars['GRAPHCMS_DateTime']>;
  /** All values greater than the given value. */
  readonly publishedAt_gt: Maybe<Scalars['GRAPHCMS_DateTime']>;
  /** All values greater than or equal the given value. */
  readonly publishedAt_gte: Maybe<Scalars['GRAPHCMS_DateTime']>;
  readonly publishedBy: Maybe<GRAPHCMS_UserWhereInput>;
  readonly title: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  readonly title_not: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  readonly title_in: Maybe<ReadonlyArray<Scalars['String']>>;
  /** All values that are not contained in given list. */
  readonly title_not_in: Maybe<ReadonlyArray<Scalars['String']>>;
  /** All values containing the given string. */
  readonly title_contains: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  readonly title_not_contains: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  readonly title_starts_with: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  readonly title_not_starts_with: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  readonly title_ends_with: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  readonly title_not_ends_with: Maybe<Scalars['String']>;
  readonly image: Maybe<GRAPHCMS_AssetWhereInput>;
  readonly technologies_every: Maybe<GRAPHCMS_TechnologyWhereInput>;
  readonly technologies_some: Maybe<GRAPHCMS_TechnologyWhereInput>;
  readonly technologies_none: Maybe<GRAPHCMS_TechnologyWhereInput>;
  readonly year: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  readonly year_not: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  readonly year_in: Maybe<ReadonlyArray<Scalars['String']>>;
  /** All values that are not contained in given list. */
  readonly year_not_in: Maybe<ReadonlyArray<Scalars['String']>>;
  /** All values containing the given string. */
  readonly year_contains: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  readonly year_not_contains: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  readonly year_starts_with: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  readonly year_not_starts_with: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  readonly year_ends_with: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  readonly year_not_ends_with: Maybe<Scalars['String']>;
  readonly srcLink: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  readonly srcLink_not: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  readonly srcLink_in: Maybe<ReadonlyArray<Scalars['String']>>;
  /** All values that are not contained in given list. */
  readonly srcLink_not_in: Maybe<ReadonlyArray<Scalars['String']>>;
  /** All values containing the given string. */
  readonly srcLink_contains: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  readonly srcLink_not_contains: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  readonly srcLink_starts_with: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  readonly srcLink_not_starts_with: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  readonly srcLink_ends_with: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  readonly srcLink_not_ends_with: Maybe<Scalars['String']>;
  readonly liveLink: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  readonly liveLink_not: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  readonly liveLink_in: Maybe<ReadonlyArray<Scalars['String']>>;
  /** All values that are not contained in given list. */
  readonly liveLink_not_in: Maybe<ReadonlyArray<Scalars['String']>>;
  /** All values containing the given string. */
  readonly liveLink_contains: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  readonly liveLink_not_contains: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  readonly liveLink_starts_with: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  readonly liveLink_not_starts_with: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  readonly liveLink_ends_with: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  readonly liveLink_not_ends_with: Maybe<Scalars['String']>;
  readonly listed: Maybe<Scalars['Boolean']>;
  /** All values that are not equal to given value. */
  readonly listed_not: Maybe<Scalars['Boolean']>;
};

type GRAPHCMS_ProjectOrderByInput =
  | 'id_ASC'
  | 'id_DESC'
  | 'createdAt_ASC'
  | 'createdAt_DESC'
  | 'updatedAt_ASC'
  | 'updatedAt_DESC'
  | 'publishedAt_ASC'
  | 'publishedAt_DESC'
  | 'title_ASC'
  | 'title_DESC'
  | 'description_ASC'
  | 'description_DESC'
  | 'year_ASC'
  | 'year_DESC'
  | 'srcLink_ASC'
  | 'srcLink_DESC'
  | 'liveLink_ASC'
  | 'liveLink_DESC'
  | 'listed_ASC'
  | 'listed_DESC';

type GRAPHCMS_ProjectUpdateInput = {
  readonly title: Maybe<Scalars['String']>;
  /** description input for default locale (en) */
  readonly description: Maybe<Scalars['String']>;
  readonly image: Maybe<GRAPHCMS_AssetUpdateOneInlineInput>;
  readonly technologies: Maybe<GRAPHCMS_TechnologyUpdateManyInlineInput>;
  readonly year: Maybe<Scalars['String']>;
  readonly srcLink: Maybe<Scalars['String']>;
  readonly liveLink: Maybe<Scalars['String']>;
  readonly listed: Maybe<Scalars['Boolean']>;
  /** Manage document localizations */
  readonly localizations: Maybe<GRAPHCMS_ProjectUpdateLocalizationsInput>;
};

type GRAPHCMS_ProjectUpdateLocalizationDataInput = {
  readonly description: Maybe<Scalars['String']>;
};

type GRAPHCMS_ProjectUpdateLocalizationInput = {
  readonly data: GRAPHCMS_ProjectUpdateLocalizationDataInput;
  readonly locale: GRAPHCMS_Locale;
};

type GRAPHCMS_ProjectUpdateLocalizationsInput = {
  /** Localizations to create */
  readonly create: Maybe<ReadonlyArray<GRAPHCMS_ProjectCreateLocalizationInput>>;
  /** Localizations to update */
  readonly update: Maybe<ReadonlyArray<GRAPHCMS_ProjectUpdateLocalizationInput>>;
  readonly upsert: Maybe<ReadonlyArray<GRAPHCMS_ProjectUpsertLocalizationInput>>;
  /** Localizations to delete */
  readonly delete: Maybe<ReadonlyArray<GRAPHCMS_Locale>>;
};

type GRAPHCMS_ProjectUpdateManyInlineInput = {
  /** Create and connect multiple Project documents */
  readonly create: Maybe<ReadonlyArray<GRAPHCMS_ProjectCreateInput>>;
  /** Connect multiple existing Project documents */
  readonly connect: Maybe<ReadonlyArray<GRAPHCMS_ProjectConnectInput>>;
  /** Override currently-connected documents with multiple existing Project documents */
  readonly set: Maybe<ReadonlyArray<GRAPHCMS_ProjectWhereUniqueInput>>;
  /** Update multiple Project documents */
  readonly update: Maybe<ReadonlyArray<GRAPHCMS_ProjectUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Project documents */
  readonly upsert: Maybe<ReadonlyArray<GRAPHCMS_ProjectUpsertWithNestedWhereUniqueInput>>;
  /** Disconnect multiple Project documents */
  readonly disconnect: Maybe<ReadonlyArray<GRAPHCMS_ProjectWhereUniqueInput>>;
  /** Delete multiple Project documents */
  readonly delete: Maybe<ReadonlyArray<GRAPHCMS_ProjectWhereUniqueInput>>;
};

type GRAPHCMS_ProjectUpdateManyInput = {
  /** description input for default locale (en) */
  readonly description: Maybe<Scalars['String']>;
  readonly year: Maybe<Scalars['String']>;
  readonly listed: Maybe<Scalars['Boolean']>;
  /** Optional updates to localizations */
  readonly localizations: Maybe<GRAPHCMS_ProjectUpdateManyLocalizationsInput>;
};

type GRAPHCMS_ProjectUpdateManyLocalizationDataInput = {
  readonly description: Maybe<Scalars['String']>;
};

type GRAPHCMS_ProjectUpdateManyLocalizationInput = {
  readonly data: GRAPHCMS_ProjectUpdateManyLocalizationDataInput;
  readonly locale: GRAPHCMS_Locale;
};

type GRAPHCMS_ProjectUpdateManyLocalizationsInput = {
  /** Localizations to update */
  readonly update: Maybe<ReadonlyArray<GRAPHCMS_ProjectUpdateManyLocalizationInput>>;
};

type GRAPHCMS_ProjectUpdateManyWithNestedWhereInput = {
  /** Document search */
  readonly where: GRAPHCMS_ProjectWhereInput;
  /** Update many input */
  readonly data: GRAPHCMS_ProjectUpdateManyInput;
};

type GRAPHCMS_ProjectUpdateOneInlineInput = {
  /** Create and connect one Project document */
  readonly create: Maybe<GRAPHCMS_ProjectCreateInput>;
  /** Update single Project document */
  readonly update: Maybe<GRAPHCMS_ProjectUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Project document */
  readonly upsert: Maybe<GRAPHCMS_ProjectUpsertWithNestedWhereUniqueInput>;
  /** Connect existing Project document */
  readonly connect: Maybe<GRAPHCMS_ProjectWhereUniqueInput>;
  /** Disconnect currently connected Project document */
  readonly disconnect: Maybe<Scalars['Boolean']>;
  /** Delete currently connected Project document */
  readonly delete: Maybe<Scalars['Boolean']>;
};

type GRAPHCMS_ProjectUpdateWithNestedWhereUniqueInput = {
  /** Unique document search */
  readonly where: GRAPHCMS_ProjectWhereUniqueInput;
  /** Document to update */
  readonly data: GRAPHCMS_ProjectUpdateInput;
};

type GRAPHCMS_ProjectUpsertInput = {
  /** Create document if it didn't exist */
  readonly create: GRAPHCMS_ProjectCreateInput;
  /** Update document if it exists */
  readonly update: GRAPHCMS_ProjectUpdateInput;
};

type GRAPHCMS_ProjectUpsertLocalizationInput = {
  readonly update: GRAPHCMS_ProjectUpdateLocalizationDataInput;
  readonly create: GRAPHCMS_ProjectCreateLocalizationDataInput;
  readonly locale: GRAPHCMS_Locale;
};

type GRAPHCMS_ProjectUpsertWithNestedWhereUniqueInput = {
  /** Unique document search */
  readonly where: GRAPHCMS_ProjectWhereUniqueInput;
  /** Upsert data */
  readonly data: GRAPHCMS_ProjectUpsertInput;
};

/** Identifies documents */
type GRAPHCMS_ProjectWhereInput = {
  /** Contains search across all appropriate fields. */
  readonly _search: Maybe<Scalars['String']>;
  /** Logical AND on all given filters. */
  readonly AND: Maybe<ReadonlyArray<GRAPHCMS_ProjectWhereInput>>;
  /** Logical OR on all given filters. */
  readonly OR: Maybe<ReadonlyArray<GRAPHCMS_ProjectWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  readonly NOT: Maybe<ReadonlyArray<GRAPHCMS_ProjectWhereInput>>;
  readonly id: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  readonly id_not: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  readonly id_in: Maybe<ReadonlyArray<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  readonly id_not_in: Maybe<ReadonlyArray<Scalars['ID']>>;
  /** All values containing the given string. */
  readonly id_contains: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  readonly id_not_contains: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  readonly id_starts_with: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  readonly id_not_starts_with: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  readonly id_ends_with: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  readonly id_not_ends_with: Maybe<Scalars['ID']>;
  readonly createdAt: Maybe<Scalars['GRAPHCMS_DateTime']>;
  /** All values that are not equal to given value. */
  readonly createdAt_not: Maybe<Scalars['GRAPHCMS_DateTime']>;
  /** All values that are contained in given list. */
  readonly createdAt_in: Maybe<ReadonlyArray<Scalars['GRAPHCMS_DateTime']>>;
  /** All values that are not contained in given list. */
  readonly createdAt_not_in: Maybe<ReadonlyArray<Scalars['GRAPHCMS_DateTime']>>;
  /** All values less than the given value. */
  readonly createdAt_lt: Maybe<Scalars['GRAPHCMS_DateTime']>;
  /** All values less than or equal the given value. */
  readonly createdAt_lte: Maybe<Scalars['GRAPHCMS_DateTime']>;
  /** All values greater than the given value. */
  readonly createdAt_gt: Maybe<Scalars['GRAPHCMS_DateTime']>;
  /** All values greater than or equal the given value. */
  readonly createdAt_gte: Maybe<Scalars['GRAPHCMS_DateTime']>;
  readonly createdBy: Maybe<GRAPHCMS_UserWhereInput>;
  readonly updatedAt: Maybe<Scalars['GRAPHCMS_DateTime']>;
  /** All values that are not equal to given value. */
  readonly updatedAt_not: Maybe<Scalars['GRAPHCMS_DateTime']>;
  /** All values that are contained in given list. */
  readonly updatedAt_in: Maybe<ReadonlyArray<Scalars['GRAPHCMS_DateTime']>>;
  /** All values that are not contained in given list. */
  readonly updatedAt_not_in: Maybe<ReadonlyArray<Scalars['GRAPHCMS_DateTime']>>;
  /** All values less than the given value. */
  readonly updatedAt_lt: Maybe<Scalars['GRAPHCMS_DateTime']>;
  /** All values less than or equal the given value. */
  readonly updatedAt_lte: Maybe<Scalars['GRAPHCMS_DateTime']>;
  /** All values greater than the given value. */
  readonly updatedAt_gt: Maybe<Scalars['GRAPHCMS_DateTime']>;
  /** All values greater than or equal the given value. */
  readonly updatedAt_gte: Maybe<Scalars['GRAPHCMS_DateTime']>;
  readonly updatedBy: Maybe<GRAPHCMS_UserWhereInput>;
  readonly publishedAt: Maybe<Scalars['GRAPHCMS_DateTime']>;
  /** All values that are not equal to given value. */
  readonly publishedAt_not: Maybe<Scalars['GRAPHCMS_DateTime']>;
  /** All values that are contained in given list. */
  readonly publishedAt_in: Maybe<ReadonlyArray<Scalars['GRAPHCMS_DateTime']>>;
  /** All values that are not contained in given list. */
  readonly publishedAt_not_in: Maybe<ReadonlyArray<Scalars['GRAPHCMS_DateTime']>>;
  /** All values less than the given value. */
  readonly publishedAt_lt: Maybe<Scalars['GRAPHCMS_DateTime']>;
  /** All values less than or equal the given value. */
  readonly publishedAt_lte: Maybe<Scalars['GRAPHCMS_DateTime']>;
  /** All values greater than the given value. */
  readonly publishedAt_gt: Maybe<Scalars['GRAPHCMS_DateTime']>;
  /** All values greater than or equal the given value. */
  readonly publishedAt_gte: Maybe<Scalars['GRAPHCMS_DateTime']>;
  readonly publishedBy: Maybe<GRAPHCMS_UserWhereInput>;
  readonly title: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  readonly title_not: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  readonly title_in: Maybe<ReadonlyArray<Scalars['String']>>;
  /** All values that are not contained in given list. */
  readonly title_not_in: Maybe<ReadonlyArray<Scalars['String']>>;
  /** All values containing the given string. */
  readonly title_contains: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  readonly title_not_contains: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  readonly title_starts_with: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  readonly title_not_starts_with: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  readonly title_ends_with: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  readonly title_not_ends_with: Maybe<Scalars['String']>;
  readonly description: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  readonly description_not: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  readonly description_in: Maybe<ReadonlyArray<Scalars['String']>>;
  /** All values that are not contained in given list. */
  readonly description_not_in: Maybe<ReadonlyArray<Scalars['String']>>;
  /** All values containing the given string. */
  readonly description_contains: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  readonly description_not_contains: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  readonly description_starts_with: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  readonly description_not_starts_with: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  readonly description_ends_with: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  readonly description_not_ends_with: Maybe<Scalars['String']>;
  readonly image: Maybe<GRAPHCMS_AssetWhereInput>;
  readonly technologies_every: Maybe<GRAPHCMS_TechnologyWhereInput>;
  readonly technologies_some: Maybe<GRAPHCMS_TechnologyWhereInput>;
  readonly technologies_none: Maybe<GRAPHCMS_TechnologyWhereInput>;
  readonly year: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  readonly year_not: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  readonly year_in: Maybe<ReadonlyArray<Scalars['String']>>;
  /** All values that are not contained in given list. */
  readonly year_not_in: Maybe<ReadonlyArray<Scalars['String']>>;
  /** All values containing the given string. */
  readonly year_contains: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  readonly year_not_contains: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  readonly year_starts_with: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  readonly year_not_starts_with: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  readonly year_ends_with: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  readonly year_not_ends_with: Maybe<Scalars['String']>;
  readonly srcLink: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  readonly srcLink_not: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  readonly srcLink_in: Maybe<ReadonlyArray<Scalars['String']>>;
  /** All values that are not contained in given list. */
  readonly srcLink_not_in: Maybe<ReadonlyArray<Scalars['String']>>;
  /** All values containing the given string. */
  readonly srcLink_contains: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  readonly srcLink_not_contains: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  readonly srcLink_starts_with: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  readonly srcLink_not_starts_with: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  readonly srcLink_ends_with: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  readonly srcLink_not_ends_with: Maybe<Scalars['String']>;
  readonly liveLink: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  readonly liveLink_not: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  readonly liveLink_in: Maybe<ReadonlyArray<Scalars['String']>>;
  /** All values that are not contained in given list. */
  readonly liveLink_not_in: Maybe<ReadonlyArray<Scalars['String']>>;
  /** All values containing the given string. */
  readonly liveLink_contains: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  readonly liveLink_not_contains: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  readonly liveLink_starts_with: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  readonly liveLink_not_starts_with: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  readonly liveLink_ends_with: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  readonly liveLink_not_ends_with: Maybe<Scalars['String']>;
  readonly listed: Maybe<Scalars['Boolean']>;
  /** All values that are not equal to given value. */
  readonly listed_not: Maybe<Scalars['Boolean']>;
};

/** References Project record uniquely */
type GRAPHCMS_ProjectWhereUniqueInput = {
  readonly id: Maybe<Scalars['ID']>;
  readonly title: Maybe<Scalars['String']>;
  readonly srcLink: Maybe<Scalars['String']>;
  readonly liveLink: Maybe<Scalars['String']>;
};

type GRAPHCMS_PublishLocaleInput = {
  /** Locales to publish */
  readonly locale: GRAPHCMS_Locale;
  /** Stages to publish selected locales to */
  readonly stages: ReadonlyArray<GRAPHCMS_Stage>;
};

/** Representing a RGBA color value: https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#rgb()_and_rgba() */
type GRAPHCMS_RGBA = {
  readonly r: Scalars['GRAPHCMS_RGBAHue'];
  readonly g: Scalars['GRAPHCMS_RGBAHue'];
  readonly b: Scalars['GRAPHCMS_RGBAHue'];
  readonly a: Scalars['GRAPHCMS_RGBATransparency'];
};


/** Input type representing a RGBA color value: https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#rgb()_and_rgba() */
type GRAPHCMS_RGBAInput = {
  readonly r: Scalars['GRAPHCMS_RGBAHue'];
  readonly g: Scalars['GRAPHCMS_RGBAHue'];
  readonly b: Scalars['GRAPHCMS_RGBAHue'];
  readonly a: Scalars['GRAPHCMS_RGBATransparency'];
};


/** Custom type representing a rich text value comprising of raw rich text ast, html, markdown and text values */
type GRAPHCMS_RichText = {
  /** Returns AST representation */
  readonly raw: Scalars['GRAPHCMS_RichTextAST'];
  /** Returns HTMl representation */
  readonly html: Scalars['String'];
  /** Returns Markdown representation */
  readonly markdown: Scalars['String'];
  /** Returns plain-text contents of RichText */
  readonly text: Scalars['String'];
};


/** Stage system enumeration */
type GRAPHCMS_Stage =
  /** The Published stage is where you can publish your content to. */
  | 'PUBLISHED'
  /** The Draft is the default stage for all your content. */
  | 'DRAFT';

type GRAPHCMS_SystemDateTimeFieldVariation =
  | 'BASE'
  | 'LOCALIZATION'
  | 'COMBINED';

type GRAPHCMS_Technology = GRAPHCMS_Node & {
  /** System stage field */
  readonly stage: GRAPHCMS_Stage;
  /** Get the document in other stages */
  readonly documentInStages: ReadonlyArray<GRAPHCMS_Technology>;
  /** The unique identifier */
  readonly id: Scalars['ID'];
  /** The time the document was created */
  readonly createdAt: Scalars['GRAPHCMS_DateTime'];
  /** User that created this document */
  readonly createdBy: Maybe<GRAPHCMS_User>;
  /** The time the document was updated */
  readonly updatedAt: Scalars['GRAPHCMS_DateTime'];
  /** User that last updated this document */
  readonly updatedBy: Maybe<GRAPHCMS_User>;
  /** The time the document was published. Null on documents in draft stage. */
  readonly publishedAt: Maybe<Scalars['GRAPHCMS_DateTime']>;
  /** User that last published this document */
  readonly publishedBy: Maybe<GRAPHCMS_User>;
  readonly name: Scalars['String'];
  readonly image: GRAPHCMS_Asset;
  readonly projects: ReadonlyArray<GRAPHCMS_Project>;
  readonly url: Maybe<Scalars['String']>;
  readonly listed: Maybe<Scalars['Boolean']>;
  /** List of Technology versions */
  readonly history: ReadonlyArray<GRAPHCMS_Version>;
};


type GRAPHCMS_Technology_documentInStagesArgs = {
  stages?: ReadonlyArray<GRAPHCMS_Stage>;
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
};


type GRAPHCMS_Technology_createdByArgs = {
  locales: Maybe<ReadonlyArray<GRAPHCMS_Locale>>;
};


type GRAPHCMS_Technology_updatedByArgs = {
  locales: Maybe<ReadonlyArray<GRAPHCMS_Locale>>;
};


type GRAPHCMS_Technology_publishedByArgs = {
  locales: Maybe<ReadonlyArray<GRAPHCMS_Locale>>;
};


type GRAPHCMS_Technology_imageArgs = {
  locales: Maybe<ReadonlyArray<GRAPHCMS_Locale>>;
};


type GRAPHCMS_Technology_projectsArgs = {
  where: Maybe<GRAPHCMS_ProjectWhereInput>;
  orderBy: Maybe<GRAPHCMS_ProjectOrderByInput>;
  skip: Maybe<Scalars['Int']>;
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  locales: Maybe<ReadonlyArray<GRAPHCMS_Locale>>;
};


type GRAPHCMS_Technology_historyArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride: Maybe<GRAPHCMS_Stage>;
};

type GRAPHCMS_TechnologyConnectInput = {
  /** Document to connect */
  readonly where: GRAPHCMS_TechnologyWhereUniqueInput;
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  readonly position: Maybe<GRAPHCMS_ConnectPositionInput>;
};

/** A connection to a list of items. */
type GRAPHCMS_TechnologyConnection = {
  /** Information to aid in pagination. */
  readonly pageInfo: GRAPHCMS_PageInfo;
  /** A list of edges. */
  readonly edges: ReadonlyArray<GRAPHCMS_TechnologyEdge>;
  readonly aggregate: GRAPHCMS_Aggregate;
};

type GRAPHCMS_TechnologyCreateInput = {
  readonly createdAt: Maybe<Scalars['GRAPHCMS_DateTime']>;
  readonly updatedAt: Maybe<Scalars['GRAPHCMS_DateTime']>;
  readonly name: Scalars['String'];
  readonly image: GRAPHCMS_AssetCreateOneInlineInput;
  readonly projects: Maybe<GRAPHCMS_ProjectCreateManyInlineInput>;
  readonly url: Maybe<Scalars['String']>;
  readonly listed: Maybe<Scalars['Boolean']>;
};

type GRAPHCMS_TechnologyCreateManyInlineInput = {
  /** Create and connect multiple existing Technology documents */
  readonly create: Maybe<ReadonlyArray<GRAPHCMS_TechnologyCreateInput>>;
  /** Connect multiple existing Technology documents */
  readonly connect: Maybe<ReadonlyArray<GRAPHCMS_TechnologyWhereUniqueInput>>;
};

type GRAPHCMS_TechnologyCreateOneInlineInput = {
  /** Create and connect one Technology document */
  readonly create: Maybe<GRAPHCMS_TechnologyCreateInput>;
  /** Connect one existing Technology document */
  readonly connect: Maybe<GRAPHCMS_TechnologyWhereUniqueInput>;
};

/** An edge in a connection. */
type GRAPHCMS_TechnologyEdge = {
  /** The item at the end of the edge. */
  readonly node: GRAPHCMS_Technology;
  /** A cursor for use in pagination. */
  readonly cursor: Scalars['String'];
};

/** Identifies documents */
type GRAPHCMS_TechnologyManyWhereInput = {
  /** Contains search across all appropriate fields. */
  readonly _search: Maybe<Scalars['String']>;
  /** Logical AND on all given filters. */
  readonly AND: Maybe<ReadonlyArray<GRAPHCMS_TechnologyWhereInput>>;
  /** Logical OR on all given filters. */
  readonly OR: Maybe<ReadonlyArray<GRAPHCMS_TechnologyWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  readonly NOT: Maybe<ReadonlyArray<GRAPHCMS_TechnologyWhereInput>>;
  readonly id: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  readonly id_not: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  readonly id_in: Maybe<ReadonlyArray<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  readonly id_not_in: Maybe<ReadonlyArray<Scalars['ID']>>;
  /** All values containing the given string. */
  readonly id_contains: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  readonly id_not_contains: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  readonly id_starts_with: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  readonly id_not_starts_with: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  readonly id_ends_with: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  readonly id_not_ends_with: Maybe<Scalars['ID']>;
  readonly createdAt: Maybe<Scalars['GRAPHCMS_DateTime']>;
  /** All values that are not equal to given value. */
  readonly createdAt_not: Maybe<Scalars['GRAPHCMS_DateTime']>;
  /** All values that are contained in given list. */
  readonly createdAt_in: Maybe<ReadonlyArray<Scalars['GRAPHCMS_DateTime']>>;
  /** All values that are not contained in given list. */
  readonly createdAt_not_in: Maybe<ReadonlyArray<Scalars['GRAPHCMS_DateTime']>>;
  /** All values less than the given value. */
  readonly createdAt_lt: Maybe<Scalars['GRAPHCMS_DateTime']>;
  /** All values less than or equal the given value. */
  readonly createdAt_lte: Maybe<Scalars['GRAPHCMS_DateTime']>;
  /** All values greater than the given value. */
  readonly createdAt_gt: Maybe<Scalars['GRAPHCMS_DateTime']>;
  /** All values greater than or equal the given value. */
  readonly createdAt_gte: Maybe<Scalars['GRAPHCMS_DateTime']>;
  readonly createdBy: Maybe<GRAPHCMS_UserWhereInput>;
  readonly updatedAt: Maybe<Scalars['GRAPHCMS_DateTime']>;
  /** All values that are not equal to given value. */
  readonly updatedAt_not: Maybe<Scalars['GRAPHCMS_DateTime']>;
  /** All values that are contained in given list. */
  readonly updatedAt_in: Maybe<ReadonlyArray<Scalars['GRAPHCMS_DateTime']>>;
  /** All values that are not contained in given list. */
  readonly updatedAt_not_in: Maybe<ReadonlyArray<Scalars['GRAPHCMS_DateTime']>>;
  /** All values less than the given value. */
  readonly updatedAt_lt: Maybe<Scalars['GRAPHCMS_DateTime']>;
  /** All values less than or equal the given value. */
  readonly updatedAt_lte: Maybe<Scalars['GRAPHCMS_DateTime']>;
  /** All values greater than the given value. */
  readonly updatedAt_gt: Maybe<Scalars['GRAPHCMS_DateTime']>;
  /** All values greater than or equal the given value. */
  readonly updatedAt_gte: Maybe<Scalars['GRAPHCMS_DateTime']>;
  readonly updatedBy: Maybe<GRAPHCMS_UserWhereInput>;
  readonly publishedAt: Maybe<Scalars['GRAPHCMS_DateTime']>;
  /** All values that are not equal to given value. */
  readonly publishedAt_not: Maybe<Scalars['GRAPHCMS_DateTime']>;
  /** All values that are contained in given list. */
  readonly publishedAt_in: Maybe<ReadonlyArray<Scalars['GRAPHCMS_DateTime']>>;
  /** All values that are not contained in given list. */
  readonly publishedAt_not_in: Maybe<ReadonlyArray<Scalars['GRAPHCMS_DateTime']>>;
  /** All values less than the given value. */
  readonly publishedAt_lt: Maybe<Scalars['GRAPHCMS_DateTime']>;
  /** All values less than or equal the given value. */
  readonly publishedAt_lte: Maybe<Scalars['GRAPHCMS_DateTime']>;
  /** All values greater than the given value. */
  readonly publishedAt_gt: Maybe<Scalars['GRAPHCMS_DateTime']>;
  /** All values greater than or equal the given value. */
  readonly publishedAt_gte: Maybe<Scalars['GRAPHCMS_DateTime']>;
  readonly publishedBy: Maybe<GRAPHCMS_UserWhereInput>;
  readonly name: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  readonly name_not: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  readonly name_in: Maybe<ReadonlyArray<Scalars['String']>>;
  /** All values that are not contained in given list. */
  readonly name_not_in: Maybe<ReadonlyArray<Scalars['String']>>;
  /** All values containing the given string. */
  readonly name_contains: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  readonly name_not_contains: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  readonly name_starts_with: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  readonly name_not_starts_with: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  readonly name_ends_with: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  readonly name_not_ends_with: Maybe<Scalars['String']>;
  readonly image: Maybe<GRAPHCMS_AssetWhereInput>;
  readonly projects_every: Maybe<GRAPHCMS_ProjectWhereInput>;
  readonly projects_some: Maybe<GRAPHCMS_ProjectWhereInput>;
  readonly projects_none: Maybe<GRAPHCMS_ProjectWhereInput>;
  readonly url: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  readonly url_not: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  readonly url_in: Maybe<ReadonlyArray<Scalars['String']>>;
  /** All values that are not contained in given list. */
  readonly url_not_in: Maybe<ReadonlyArray<Scalars['String']>>;
  /** All values containing the given string. */
  readonly url_contains: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  readonly url_not_contains: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  readonly url_starts_with: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  readonly url_not_starts_with: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  readonly url_ends_with: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  readonly url_not_ends_with: Maybe<Scalars['String']>;
  readonly listed: Maybe<Scalars['Boolean']>;
  /** All values that are not equal to given value. */
  readonly listed_not: Maybe<Scalars['Boolean']>;
};

type GRAPHCMS_TechnologyOrderByInput =
  | 'id_ASC'
  | 'id_DESC'
  | 'createdAt_ASC'
  | 'createdAt_DESC'
  | 'updatedAt_ASC'
  | 'updatedAt_DESC'
  | 'publishedAt_ASC'
  | 'publishedAt_DESC'
  | 'name_ASC'
  | 'name_DESC'
  | 'url_ASC'
  | 'url_DESC'
  | 'listed_ASC'
  | 'listed_DESC';

type GRAPHCMS_TechnologyUpdateInput = {
  readonly name: Maybe<Scalars['String']>;
  readonly image: Maybe<GRAPHCMS_AssetUpdateOneInlineInput>;
  readonly projects: Maybe<GRAPHCMS_ProjectUpdateManyInlineInput>;
  readonly url: Maybe<Scalars['String']>;
  readonly listed: Maybe<Scalars['Boolean']>;
};

type GRAPHCMS_TechnologyUpdateManyInlineInput = {
  /** Create and connect multiple Technology documents */
  readonly create: Maybe<ReadonlyArray<GRAPHCMS_TechnologyCreateInput>>;
  /** Connect multiple existing Technology documents */
  readonly connect: Maybe<ReadonlyArray<GRAPHCMS_TechnologyConnectInput>>;
  /** Override currently-connected documents with multiple existing Technology documents */
  readonly set: Maybe<ReadonlyArray<GRAPHCMS_TechnologyWhereUniqueInput>>;
  /** Update multiple Technology documents */
  readonly update: Maybe<ReadonlyArray<GRAPHCMS_TechnologyUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Technology documents */
  readonly upsert: Maybe<ReadonlyArray<GRAPHCMS_TechnologyUpsertWithNestedWhereUniqueInput>>;
  /** Disconnect multiple Technology documents */
  readonly disconnect: Maybe<ReadonlyArray<GRAPHCMS_TechnologyWhereUniqueInput>>;
  /** Delete multiple Technology documents */
  readonly delete: Maybe<ReadonlyArray<GRAPHCMS_TechnologyWhereUniqueInput>>;
};

type GRAPHCMS_TechnologyUpdateManyInput = {
  readonly listed: Maybe<Scalars['Boolean']>;
};

type GRAPHCMS_TechnologyUpdateManyWithNestedWhereInput = {
  /** Document search */
  readonly where: GRAPHCMS_TechnologyWhereInput;
  /** Update many input */
  readonly data: GRAPHCMS_TechnologyUpdateManyInput;
};

type GRAPHCMS_TechnologyUpdateOneInlineInput = {
  /** Create and connect one Technology document */
  readonly create: Maybe<GRAPHCMS_TechnologyCreateInput>;
  /** Update single Technology document */
  readonly update: Maybe<GRAPHCMS_TechnologyUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Technology document */
  readonly upsert: Maybe<GRAPHCMS_TechnologyUpsertWithNestedWhereUniqueInput>;
  /** Connect existing Technology document */
  readonly connect: Maybe<GRAPHCMS_TechnologyWhereUniqueInput>;
  /** Disconnect currently connected Technology document */
  readonly disconnect: Maybe<Scalars['Boolean']>;
  /** Delete currently connected Technology document */
  readonly delete: Maybe<Scalars['Boolean']>;
};

type GRAPHCMS_TechnologyUpdateWithNestedWhereUniqueInput = {
  /** Unique document search */
  readonly where: GRAPHCMS_TechnologyWhereUniqueInput;
  /** Document to update */
  readonly data: GRAPHCMS_TechnologyUpdateInput;
};

type GRAPHCMS_TechnologyUpsertInput = {
  /** Create document if it didn't exist */
  readonly create: GRAPHCMS_TechnologyCreateInput;
  /** Update document if it exists */
  readonly update: GRAPHCMS_TechnologyUpdateInput;
};

type GRAPHCMS_TechnologyUpsertWithNestedWhereUniqueInput = {
  /** Unique document search */
  readonly where: GRAPHCMS_TechnologyWhereUniqueInput;
  /** Upsert data */
  readonly data: GRAPHCMS_TechnologyUpsertInput;
};

/** Identifies documents */
type GRAPHCMS_TechnologyWhereInput = {
  /** Contains search across all appropriate fields. */
  readonly _search: Maybe<Scalars['String']>;
  /** Logical AND on all given filters. */
  readonly AND: Maybe<ReadonlyArray<GRAPHCMS_TechnologyWhereInput>>;
  /** Logical OR on all given filters. */
  readonly OR: Maybe<ReadonlyArray<GRAPHCMS_TechnologyWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  readonly NOT: Maybe<ReadonlyArray<GRAPHCMS_TechnologyWhereInput>>;
  readonly id: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  readonly id_not: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  readonly id_in: Maybe<ReadonlyArray<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  readonly id_not_in: Maybe<ReadonlyArray<Scalars['ID']>>;
  /** All values containing the given string. */
  readonly id_contains: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  readonly id_not_contains: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  readonly id_starts_with: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  readonly id_not_starts_with: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  readonly id_ends_with: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  readonly id_not_ends_with: Maybe<Scalars['ID']>;
  readonly createdAt: Maybe<Scalars['GRAPHCMS_DateTime']>;
  /** All values that are not equal to given value. */
  readonly createdAt_not: Maybe<Scalars['GRAPHCMS_DateTime']>;
  /** All values that are contained in given list. */
  readonly createdAt_in: Maybe<ReadonlyArray<Scalars['GRAPHCMS_DateTime']>>;
  /** All values that are not contained in given list. */
  readonly createdAt_not_in: Maybe<ReadonlyArray<Scalars['GRAPHCMS_DateTime']>>;
  /** All values less than the given value. */
  readonly createdAt_lt: Maybe<Scalars['GRAPHCMS_DateTime']>;
  /** All values less than or equal the given value. */
  readonly createdAt_lte: Maybe<Scalars['GRAPHCMS_DateTime']>;
  /** All values greater than the given value. */
  readonly createdAt_gt: Maybe<Scalars['GRAPHCMS_DateTime']>;
  /** All values greater than or equal the given value. */
  readonly createdAt_gte: Maybe<Scalars['GRAPHCMS_DateTime']>;
  readonly createdBy: Maybe<GRAPHCMS_UserWhereInput>;
  readonly updatedAt: Maybe<Scalars['GRAPHCMS_DateTime']>;
  /** All values that are not equal to given value. */
  readonly updatedAt_not: Maybe<Scalars['GRAPHCMS_DateTime']>;
  /** All values that are contained in given list. */
  readonly updatedAt_in: Maybe<ReadonlyArray<Scalars['GRAPHCMS_DateTime']>>;
  /** All values that are not contained in given list. */
  readonly updatedAt_not_in: Maybe<ReadonlyArray<Scalars['GRAPHCMS_DateTime']>>;
  /** All values less than the given value. */
  readonly updatedAt_lt: Maybe<Scalars['GRAPHCMS_DateTime']>;
  /** All values less than or equal the given value. */
  readonly updatedAt_lte: Maybe<Scalars['GRAPHCMS_DateTime']>;
  /** All values greater than the given value. */
  readonly updatedAt_gt: Maybe<Scalars['GRAPHCMS_DateTime']>;
  /** All values greater than or equal the given value. */
  readonly updatedAt_gte: Maybe<Scalars['GRAPHCMS_DateTime']>;
  readonly updatedBy: Maybe<GRAPHCMS_UserWhereInput>;
  readonly publishedAt: Maybe<Scalars['GRAPHCMS_DateTime']>;
  /** All values that are not equal to given value. */
  readonly publishedAt_not: Maybe<Scalars['GRAPHCMS_DateTime']>;
  /** All values that are contained in given list. */
  readonly publishedAt_in: Maybe<ReadonlyArray<Scalars['GRAPHCMS_DateTime']>>;
  /** All values that are not contained in given list. */
  readonly publishedAt_not_in: Maybe<ReadonlyArray<Scalars['GRAPHCMS_DateTime']>>;
  /** All values less than the given value. */
  readonly publishedAt_lt: Maybe<Scalars['GRAPHCMS_DateTime']>;
  /** All values less than or equal the given value. */
  readonly publishedAt_lte: Maybe<Scalars['GRAPHCMS_DateTime']>;
  /** All values greater than the given value. */
  readonly publishedAt_gt: Maybe<Scalars['GRAPHCMS_DateTime']>;
  /** All values greater than or equal the given value. */
  readonly publishedAt_gte: Maybe<Scalars['GRAPHCMS_DateTime']>;
  readonly publishedBy: Maybe<GRAPHCMS_UserWhereInput>;
  readonly name: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  readonly name_not: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  readonly name_in: Maybe<ReadonlyArray<Scalars['String']>>;
  /** All values that are not contained in given list. */
  readonly name_not_in: Maybe<ReadonlyArray<Scalars['String']>>;
  /** All values containing the given string. */
  readonly name_contains: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  readonly name_not_contains: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  readonly name_starts_with: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  readonly name_not_starts_with: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  readonly name_ends_with: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  readonly name_not_ends_with: Maybe<Scalars['String']>;
  readonly image: Maybe<GRAPHCMS_AssetWhereInput>;
  readonly projects_every: Maybe<GRAPHCMS_ProjectWhereInput>;
  readonly projects_some: Maybe<GRAPHCMS_ProjectWhereInput>;
  readonly projects_none: Maybe<GRAPHCMS_ProjectWhereInput>;
  readonly url: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  readonly url_not: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  readonly url_in: Maybe<ReadonlyArray<Scalars['String']>>;
  /** All values that are not contained in given list. */
  readonly url_not_in: Maybe<ReadonlyArray<Scalars['String']>>;
  /** All values containing the given string. */
  readonly url_contains: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  readonly url_not_contains: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  readonly url_starts_with: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  readonly url_not_starts_with: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  readonly url_ends_with: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  readonly url_not_ends_with: Maybe<Scalars['String']>;
  readonly listed: Maybe<Scalars['Boolean']>;
  /** All values that are not equal to given value. */
  readonly listed_not: Maybe<Scalars['Boolean']>;
};

/** References Technology record uniquely */
type GRAPHCMS_TechnologyWhereUniqueInput = {
  readonly id: Maybe<Scalars['ID']>;
  readonly name: Maybe<Scalars['String']>;
  readonly url: Maybe<Scalars['String']>;
};

type GRAPHCMS_UnpublishLocaleInput = {
  /** Locales to unpublish */
  readonly locale: GRAPHCMS_Locale;
  /** Stages to unpublish selected locales from */
  readonly stages: ReadonlyArray<GRAPHCMS_Stage>;
};

/** User system model */
type GRAPHCMS_User = GRAPHCMS_Node & {
  /** System stage field */
  readonly stage: GRAPHCMS_Stage;
  /** Get the document in other stages */
  readonly documentInStages: ReadonlyArray<GRAPHCMS_User>;
  /** The unique identifier */
  readonly id: Scalars['ID'];
  /** The time the document was created */
  readonly createdAt: Scalars['GRAPHCMS_DateTime'];
  /** The time the document was updated */
  readonly updatedAt: Scalars['GRAPHCMS_DateTime'];
  /** The time the document was published. Null on documents in draft stage. */
  readonly publishedAt: Maybe<Scalars['GRAPHCMS_DateTime']>;
  /** The username */
  readonly name: Scalars['String'];
  /** Profile Picture url */
  readonly picture: Maybe<Scalars['String']>;
  /** User Kind. Can be either MEMBER, PAT or PUBLIC */
  readonly kind: GRAPHCMS_UserKind;
  /** Flag to determine if user is active or not */
  readonly isActive: Scalars['Boolean'];
};


/** User system model */
type GRAPHCMS_User_documentInStagesArgs = {
  stages?: ReadonlyArray<GRAPHCMS_Stage>;
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
};

/** A connection to a list of items. */
type GRAPHCMS_UserConnection = {
  /** Information to aid in pagination. */
  readonly pageInfo: GRAPHCMS_PageInfo;
  /** A list of edges. */
  readonly edges: ReadonlyArray<GRAPHCMS_UserEdge>;
  readonly aggregate: GRAPHCMS_Aggregate;
};

/** An edge in a connection. */
type GRAPHCMS_UserEdge = {
  /** The item at the end of the edge. */
  readonly node: GRAPHCMS_User;
  /** A cursor for use in pagination. */
  readonly cursor: Scalars['String'];
};

/** System User Kind */
type GRAPHCMS_UserKind =
  | 'MEMBER'
  | 'PAT'
  | 'PUBLIC'
  | 'WEBHOOK';

/** Identifies documents */
type GRAPHCMS_UserManyWhereInput = {
  /** Contains search across all appropriate fields. */
  readonly _search: Maybe<Scalars['String']>;
  /** Logical AND on all given filters. */
  readonly AND: Maybe<ReadonlyArray<GRAPHCMS_UserWhereInput>>;
  /** Logical OR on all given filters. */
  readonly OR: Maybe<ReadonlyArray<GRAPHCMS_UserWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  readonly NOT: Maybe<ReadonlyArray<GRAPHCMS_UserWhereInput>>;
  readonly id: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  readonly id_not: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  readonly id_in: Maybe<ReadonlyArray<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  readonly id_not_in: Maybe<ReadonlyArray<Scalars['ID']>>;
  /** All values containing the given string. */
  readonly id_contains: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  readonly id_not_contains: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  readonly id_starts_with: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  readonly id_not_starts_with: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  readonly id_ends_with: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  readonly id_not_ends_with: Maybe<Scalars['ID']>;
  readonly createdAt: Maybe<Scalars['GRAPHCMS_DateTime']>;
  /** All values that are not equal to given value. */
  readonly createdAt_not: Maybe<Scalars['GRAPHCMS_DateTime']>;
  /** All values that are contained in given list. */
  readonly createdAt_in: Maybe<ReadonlyArray<Scalars['GRAPHCMS_DateTime']>>;
  /** All values that are not contained in given list. */
  readonly createdAt_not_in: Maybe<ReadonlyArray<Scalars['GRAPHCMS_DateTime']>>;
  /** All values less than the given value. */
  readonly createdAt_lt: Maybe<Scalars['GRAPHCMS_DateTime']>;
  /** All values less than or equal the given value. */
  readonly createdAt_lte: Maybe<Scalars['GRAPHCMS_DateTime']>;
  /** All values greater than the given value. */
  readonly createdAt_gt: Maybe<Scalars['GRAPHCMS_DateTime']>;
  /** All values greater than or equal the given value. */
  readonly createdAt_gte: Maybe<Scalars['GRAPHCMS_DateTime']>;
  readonly updatedAt: Maybe<Scalars['GRAPHCMS_DateTime']>;
  /** All values that are not equal to given value. */
  readonly updatedAt_not: Maybe<Scalars['GRAPHCMS_DateTime']>;
  /** All values that are contained in given list. */
  readonly updatedAt_in: Maybe<ReadonlyArray<Scalars['GRAPHCMS_DateTime']>>;
  /** All values that are not contained in given list. */
  readonly updatedAt_not_in: Maybe<ReadonlyArray<Scalars['GRAPHCMS_DateTime']>>;
  /** All values less than the given value. */
  readonly updatedAt_lt: Maybe<Scalars['GRAPHCMS_DateTime']>;
  /** All values less than or equal the given value. */
  readonly updatedAt_lte: Maybe<Scalars['GRAPHCMS_DateTime']>;
  /** All values greater than the given value. */
  readonly updatedAt_gt: Maybe<Scalars['GRAPHCMS_DateTime']>;
  /** All values greater than or equal the given value. */
  readonly updatedAt_gte: Maybe<Scalars['GRAPHCMS_DateTime']>;
  readonly publishedAt: Maybe<Scalars['GRAPHCMS_DateTime']>;
  /** All values that are not equal to given value. */
  readonly publishedAt_not: Maybe<Scalars['GRAPHCMS_DateTime']>;
  /** All values that are contained in given list. */
  readonly publishedAt_in: Maybe<ReadonlyArray<Scalars['GRAPHCMS_DateTime']>>;
  /** All values that are not contained in given list. */
  readonly publishedAt_not_in: Maybe<ReadonlyArray<Scalars['GRAPHCMS_DateTime']>>;
  /** All values less than the given value. */
  readonly publishedAt_lt: Maybe<Scalars['GRAPHCMS_DateTime']>;
  /** All values less than or equal the given value. */
  readonly publishedAt_lte: Maybe<Scalars['GRAPHCMS_DateTime']>;
  /** All values greater than the given value. */
  readonly publishedAt_gt: Maybe<Scalars['GRAPHCMS_DateTime']>;
  /** All values greater than or equal the given value. */
  readonly publishedAt_gte: Maybe<Scalars['GRAPHCMS_DateTime']>;
  readonly name: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  readonly name_not: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  readonly name_in: Maybe<ReadonlyArray<Scalars['String']>>;
  /** All values that are not contained in given list. */
  readonly name_not_in: Maybe<ReadonlyArray<Scalars['String']>>;
  /** All values containing the given string. */
  readonly name_contains: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  readonly name_not_contains: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  readonly name_starts_with: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  readonly name_not_starts_with: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  readonly name_ends_with: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  readonly name_not_ends_with: Maybe<Scalars['String']>;
  readonly picture: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  readonly picture_not: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  readonly picture_in: Maybe<ReadonlyArray<Scalars['String']>>;
  /** All values that are not contained in given list. */
  readonly picture_not_in: Maybe<ReadonlyArray<Scalars['String']>>;
  /** All values containing the given string. */
  readonly picture_contains: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  readonly picture_not_contains: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  readonly picture_starts_with: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  readonly picture_not_starts_with: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  readonly picture_ends_with: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  readonly picture_not_ends_with: Maybe<Scalars['String']>;
  readonly kind: Maybe<GRAPHCMS_UserKind>;
  /** All values that are not equal to given value. */
  readonly kind_not: Maybe<GRAPHCMS_UserKind>;
  /** All values that are contained in given list. */
  readonly kind_in: Maybe<ReadonlyArray<GRAPHCMS_UserKind>>;
  /** All values that are not contained in given list. */
  readonly kind_not_in: Maybe<ReadonlyArray<GRAPHCMS_UserKind>>;
  readonly isActive: Maybe<Scalars['Boolean']>;
  /** All values that are not equal to given value. */
  readonly isActive_not: Maybe<Scalars['Boolean']>;
};

type GRAPHCMS_UserOrderByInput =
  | 'id_ASC'
  | 'id_DESC'
  | 'createdAt_ASC'
  | 'createdAt_DESC'
  | 'updatedAt_ASC'
  | 'updatedAt_DESC'
  | 'publishedAt_ASC'
  | 'publishedAt_DESC'
  | 'name_ASC'
  | 'name_DESC'
  | 'picture_ASC'
  | 'picture_DESC'
  | 'kind_ASC'
  | 'kind_DESC'
  | 'isActive_ASC'
  | 'isActive_DESC';

/** Identifies documents */
type GRAPHCMS_UserWhereInput = {
  /** Contains search across all appropriate fields. */
  readonly _search: Maybe<Scalars['String']>;
  /** Logical AND on all given filters. */
  readonly AND: Maybe<ReadonlyArray<GRAPHCMS_UserWhereInput>>;
  /** Logical OR on all given filters. */
  readonly OR: Maybe<ReadonlyArray<GRAPHCMS_UserWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  readonly NOT: Maybe<ReadonlyArray<GRAPHCMS_UserWhereInput>>;
  readonly id: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  readonly id_not: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  readonly id_in: Maybe<ReadonlyArray<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  readonly id_not_in: Maybe<ReadonlyArray<Scalars['ID']>>;
  /** All values containing the given string. */
  readonly id_contains: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  readonly id_not_contains: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  readonly id_starts_with: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  readonly id_not_starts_with: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  readonly id_ends_with: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  readonly id_not_ends_with: Maybe<Scalars['ID']>;
  readonly createdAt: Maybe<Scalars['GRAPHCMS_DateTime']>;
  /** All values that are not equal to given value. */
  readonly createdAt_not: Maybe<Scalars['GRAPHCMS_DateTime']>;
  /** All values that are contained in given list. */
  readonly createdAt_in: Maybe<ReadonlyArray<Scalars['GRAPHCMS_DateTime']>>;
  /** All values that are not contained in given list. */
  readonly createdAt_not_in: Maybe<ReadonlyArray<Scalars['GRAPHCMS_DateTime']>>;
  /** All values less than the given value. */
  readonly createdAt_lt: Maybe<Scalars['GRAPHCMS_DateTime']>;
  /** All values less than or equal the given value. */
  readonly createdAt_lte: Maybe<Scalars['GRAPHCMS_DateTime']>;
  /** All values greater than the given value. */
  readonly createdAt_gt: Maybe<Scalars['GRAPHCMS_DateTime']>;
  /** All values greater than or equal the given value. */
  readonly createdAt_gte: Maybe<Scalars['GRAPHCMS_DateTime']>;
  readonly updatedAt: Maybe<Scalars['GRAPHCMS_DateTime']>;
  /** All values that are not equal to given value. */
  readonly updatedAt_not: Maybe<Scalars['GRAPHCMS_DateTime']>;
  /** All values that are contained in given list. */
  readonly updatedAt_in: Maybe<ReadonlyArray<Scalars['GRAPHCMS_DateTime']>>;
  /** All values that are not contained in given list. */
  readonly updatedAt_not_in: Maybe<ReadonlyArray<Scalars['GRAPHCMS_DateTime']>>;
  /** All values less than the given value. */
  readonly updatedAt_lt: Maybe<Scalars['GRAPHCMS_DateTime']>;
  /** All values less than or equal the given value. */
  readonly updatedAt_lte: Maybe<Scalars['GRAPHCMS_DateTime']>;
  /** All values greater than the given value. */
  readonly updatedAt_gt: Maybe<Scalars['GRAPHCMS_DateTime']>;
  /** All values greater than or equal the given value. */
  readonly updatedAt_gte: Maybe<Scalars['GRAPHCMS_DateTime']>;
  readonly publishedAt: Maybe<Scalars['GRAPHCMS_DateTime']>;
  /** All values that are not equal to given value. */
  readonly publishedAt_not: Maybe<Scalars['GRAPHCMS_DateTime']>;
  /** All values that are contained in given list. */
  readonly publishedAt_in: Maybe<ReadonlyArray<Scalars['GRAPHCMS_DateTime']>>;
  /** All values that are not contained in given list. */
  readonly publishedAt_not_in: Maybe<ReadonlyArray<Scalars['GRAPHCMS_DateTime']>>;
  /** All values less than the given value. */
  readonly publishedAt_lt: Maybe<Scalars['GRAPHCMS_DateTime']>;
  /** All values less than or equal the given value. */
  readonly publishedAt_lte: Maybe<Scalars['GRAPHCMS_DateTime']>;
  /** All values greater than the given value. */
  readonly publishedAt_gt: Maybe<Scalars['GRAPHCMS_DateTime']>;
  /** All values greater than or equal the given value. */
  readonly publishedAt_gte: Maybe<Scalars['GRAPHCMS_DateTime']>;
  readonly name: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  readonly name_not: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  readonly name_in: Maybe<ReadonlyArray<Scalars['String']>>;
  /** All values that are not contained in given list. */
  readonly name_not_in: Maybe<ReadonlyArray<Scalars['String']>>;
  /** All values containing the given string. */
  readonly name_contains: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  readonly name_not_contains: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  readonly name_starts_with: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  readonly name_not_starts_with: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  readonly name_ends_with: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  readonly name_not_ends_with: Maybe<Scalars['String']>;
  readonly picture: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  readonly picture_not: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  readonly picture_in: Maybe<ReadonlyArray<Scalars['String']>>;
  /** All values that are not contained in given list. */
  readonly picture_not_in: Maybe<ReadonlyArray<Scalars['String']>>;
  /** All values containing the given string. */
  readonly picture_contains: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  readonly picture_not_contains: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  readonly picture_starts_with: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  readonly picture_not_starts_with: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  readonly picture_ends_with: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  readonly picture_not_ends_with: Maybe<Scalars['String']>;
  readonly kind: Maybe<GRAPHCMS_UserKind>;
  /** All values that are not equal to given value. */
  readonly kind_not: Maybe<GRAPHCMS_UserKind>;
  /** All values that are contained in given list. */
  readonly kind_in: Maybe<ReadonlyArray<GRAPHCMS_UserKind>>;
  /** All values that are not contained in given list. */
  readonly kind_not_in: Maybe<ReadonlyArray<GRAPHCMS_UserKind>>;
  readonly isActive: Maybe<Scalars['Boolean']>;
  /** All values that are not equal to given value. */
  readonly isActive_not: Maybe<Scalars['Boolean']>;
};

/** References User record uniquely */
type GRAPHCMS_UserWhereUniqueInput = {
  readonly id: Maybe<Scalars['ID']>;
};

type GRAPHCMS_Version = {
  readonly id: Scalars['ID'];
  readonly stage: GRAPHCMS_Stage;
  readonly revision: Scalars['Int'];
  readonly createdAt: Scalars['GRAPHCMS_DateTime'];
};

type GRAPHCMS_VersionWhereInput = {
  readonly id: Scalars['ID'];
  readonly stage: GRAPHCMS_Stage;
  readonly revision: Scalars['Int'];
};

type GRAPHCMS__FilterKind =
  | 'search'
  | 'AND'
  | 'OR'
  | 'NOT'
  | 'eq'
  | 'eq_not'
  | 'in'
  | 'not_in'
  | 'lt'
  | 'lte'
  | 'gt'
  | 'gte'
  | 'contains'
  | 'not_contains'
  | 'starts_with'
  | 'not_starts_with'
  | 'ends_with'
  | 'not_ends_with'
  | 'contains_all'
  | 'contains_some'
  | 'contains_none'
  | 'relational_single'
  | 'relational_every'
  | 'relational_some'
  | 'relational_none';

type GRAPHCMS__MutationInputFieldKind =
  | 'scalar'
  | 'richText'
  | 'richTextWithEmbeds'
  | 'enum'
  | 'relation'
  | 'union'
  | 'virtual';

type GRAPHCMS__MutationKind =
  | 'create'
  | 'publish'
  | 'unpublish'
  | 'update'
  | 'upsert'
  | 'delete'
  | 'updateMany'
  | 'publishMany'
  | 'unpublishMany'
  | 'deleteMany';

type GRAPHCMS__OrderDirection =
  | 'asc'
  | 'desc';

type GRAPHCMS__RelationInputCardinality =
  | 'one'
  | 'many';

type GRAPHCMS__RelationInputKind =
  | 'create'
  | 'update';

type GRAPHCMS__RelationKind =
  | 'regular'
  | 'union';

type GRAPHCMS__SystemDateTimeFieldVariation =
  | 'base'
  | 'localization'
  | 'combined';

type GRAPHCMS = {
  /** Fetches an object given its ID */
  readonly node: Maybe<GRAPHCMS_Node>;
  /** Retrieve multiple assets */
  readonly assets: ReadonlyArray<GRAPHCMS_Asset>;
  /** Retrieve a single asset */
  readonly asset: Maybe<GRAPHCMS_Asset>;
  /** Retrieve multiple assets using the Relay connection interface */
  readonly assetsConnection: GRAPHCMS_AssetConnection;
  /** Retrieve document version */
  readonly assetVersion: Maybe<GRAPHCMS_DocumentVersion>;
  /** Retrieve multiple icons */
  readonly icons: ReadonlyArray<GRAPHCMS_Icon>;
  /** Retrieve a single icon */
  readonly icon: Maybe<GRAPHCMS_Icon>;
  /** Retrieve multiple icons using the Relay connection interface */
  readonly iconsConnection: GRAPHCMS_IconConnection;
  /** Retrieve document version */
  readonly iconVersion: Maybe<GRAPHCMS_DocumentVersion>;
  /** Retrieve multiple projects */
  readonly projects: ReadonlyArray<GRAPHCMS_Project>;
  /** Retrieve a single project */
  readonly project: Maybe<GRAPHCMS_Project>;
  /** Retrieve multiple projects using the Relay connection interface */
  readonly projectsConnection: GRAPHCMS_ProjectConnection;
  /** Retrieve document version */
  readonly projectVersion: Maybe<GRAPHCMS_DocumentVersion>;
  /** Retrieve multiple technologies */
  readonly technologies: ReadonlyArray<GRAPHCMS_Technology>;
  /** Retrieve a single technology */
  readonly technology: Maybe<GRAPHCMS_Technology>;
  /** Retrieve multiple technologies using the Relay connection interface */
  readonly technologiesConnection: GRAPHCMS_TechnologyConnection;
  /** Retrieve document version */
  readonly technologyVersion: Maybe<GRAPHCMS_DocumentVersion>;
  /** Retrieve multiple users */
  readonly users: ReadonlyArray<GRAPHCMS_User>;
  /** Retrieve a single user */
  readonly user: Maybe<GRAPHCMS_User>;
  /** Retrieve multiple users using the Relay connection interface */
  readonly usersConnection: GRAPHCMS_UserConnection;
};


type GRAPHCMS_nodeArgs = {
  id: Scalars['ID'];
  stage?: GRAPHCMS_Stage;
  locales?: ReadonlyArray<GRAPHCMS_Locale>;
};


type GRAPHCMS_assetsArgs = {
  where: Maybe<GRAPHCMS_AssetWhereInput>;
  orderBy: Maybe<GRAPHCMS_AssetOrderByInput>;
  skip: Maybe<Scalars['Int']>;
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  stage?: GRAPHCMS_Stage;
  locales?: ReadonlyArray<GRAPHCMS_Locale>;
};


type GRAPHCMS_assetArgs = {
  where: GRAPHCMS_AssetWhereUniqueInput;
  stage?: GRAPHCMS_Stage;
  locales?: ReadonlyArray<GRAPHCMS_Locale>;
};


type GRAPHCMS_assetsConnectionArgs = {
  where: Maybe<GRAPHCMS_AssetWhereInput>;
  orderBy: Maybe<GRAPHCMS_AssetOrderByInput>;
  skip: Maybe<Scalars['Int']>;
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  stage?: GRAPHCMS_Stage;
  locales?: ReadonlyArray<GRAPHCMS_Locale>;
};


type GRAPHCMS_assetVersionArgs = {
  where: GRAPHCMS_VersionWhereInput;
};


type GRAPHCMS_iconsArgs = {
  where: Maybe<GRAPHCMS_IconWhereInput>;
  orderBy: Maybe<GRAPHCMS_IconOrderByInput>;
  skip: Maybe<Scalars['Int']>;
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  stage?: GRAPHCMS_Stage;
  locales?: ReadonlyArray<GRAPHCMS_Locale>;
};


type GRAPHCMS_iconArgs = {
  where: GRAPHCMS_IconWhereUniqueInput;
  stage?: GRAPHCMS_Stage;
  locales?: ReadonlyArray<GRAPHCMS_Locale>;
};


type GRAPHCMS_iconsConnectionArgs = {
  where: Maybe<GRAPHCMS_IconWhereInput>;
  orderBy: Maybe<GRAPHCMS_IconOrderByInput>;
  skip: Maybe<Scalars['Int']>;
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  stage?: GRAPHCMS_Stage;
  locales?: ReadonlyArray<GRAPHCMS_Locale>;
};


type GRAPHCMS_iconVersionArgs = {
  where: GRAPHCMS_VersionWhereInput;
};


type GRAPHCMS_projectsArgs = {
  where: Maybe<GRAPHCMS_ProjectWhereInput>;
  orderBy: Maybe<GRAPHCMS_ProjectOrderByInput>;
  skip: Maybe<Scalars['Int']>;
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  stage?: GRAPHCMS_Stage;
  locales?: ReadonlyArray<GRAPHCMS_Locale>;
};


type GRAPHCMS_projectArgs = {
  where: GRAPHCMS_ProjectWhereUniqueInput;
  stage?: GRAPHCMS_Stage;
  locales?: ReadonlyArray<GRAPHCMS_Locale>;
};


type GRAPHCMS_projectsConnectionArgs = {
  where: Maybe<GRAPHCMS_ProjectWhereInput>;
  orderBy: Maybe<GRAPHCMS_ProjectOrderByInput>;
  skip: Maybe<Scalars['Int']>;
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  stage?: GRAPHCMS_Stage;
  locales?: ReadonlyArray<GRAPHCMS_Locale>;
};


type GRAPHCMS_projectVersionArgs = {
  where: GRAPHCMS_VersionWhereInput;
};


type GRAPHCMS_technologiesArgs = {
  where: Maybe<GRAPHCMS_TechnologyWhereInput>;
  orderBy: Maybe<GRAPHCMS_TechnologyOrderByInput>;
  skip: Maybe<Scalars['Int']>;
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  stage?: GRAPHCMS_Stage;
  locales?: ReadonlyArray<GRAPHCMS_Locale>;
};


type GRAPHCMS_technologyArgs = {
  where: GRAPHCMS_TechnologyWhereUniqueInput;
  stage?: GRAPHCMS_Stage;
  locales?: ReadonlyArray<GRAPHCMS_Locale>;
};


type GRAPHCMS_technologiesConnectionArgs = {
  where: Maybe<GRAPHCMS_TechnologyWhereInput>;
  orderBy: Maybe<GRAPHCMS_TechnologyOrderByInput>;
  skip: Maybe<Scalars['Int']>;
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  stage?: GRAPHCMS_Stage;
  locales?: ReadonlyArray<GRAPHCMS_Locale>;
};


type GRAPHCMS_technologyVersionArgs = {
  where: GRAPHCMS_VersionWhereInput;
};


type GRAPHCMS_usersArgs = {
  where: Maybe<GRAPHCMS_UserWhereInput>;
  orderBy: Maybe<GRAPHCMS_UserOrderByInput>;
  skip: Maybe<Scalars['Int']>;
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  stage?: GRAPHCMS_Stage;
  locales?: ReadonlyArray<GRAPHCMS_Locale>;
};


type GRAPHCMS_userArgs = {
  where: GRAPHCMS_UserWhereUniqueInput;
  stage?: GRAPHCMS_Stage;
  locales?: ReadonlyArray<GRAPHCMS_Locale>;
};


type GRAPHCMS_usersConnectionArgs = {
  where: Maybe<GRAPHCMS_UserWhereInput>;
  orderBy: Maybe<GRAPHCMS_UserOrderByInput>;
  skip: Maybe<Scalars['Int']>;
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  stage?: GRAPHCMS_Stage;
  locales?: ReadonlyArray<GRAPHCMS_Locale>;
};

type Query = {
  readonly file: Maybe<File>;
  readonly allFile: FileConnection;
  readonly directory: Maybe<Directory>;
  readonly allDirectory: DirectoryConnection;
  readonly site: Maybe<Site>;
  readonly allSite: SiteConnection;
  readonly siteFunction: Maybe<SiteFunction>;
  readonly allSiteFunction: SiteFunctionConnection;
  readonly sitePage: Maybe<SitePage>;
  readonly allSitePage: SitePageConnection;
  readonly imageSharp: Maybe<ImageSharp>;
  readonly allImageSharp: ImageSharpConnection;
  readonly graphQlSource: Maybe<GraphQLSource>;
  readonly allGraphQlSource: GraphQLSourceConnection;
  readonly siteBuildMetadata: Maybe<SiteBuildMetadata>;
  readonly allSiteBuildMetadata: SiteBuildMetadataConnection;
  readonly sitePlugin: Maybe<SitePlugin>;
  readonly allSitePlugin: SitePluginConnection;
  readonly graphCmsData: GRAPHCMS;
};


type Query_fileArgs = {
  sourceInstanceName: Maybe<StringQueryOperatorInput>;
  absolutePath: Maybe<StringQueryOperatorInput>;
  relativePath: Maybe<StringQueryOperatorInput>;
  extension: Maybe<StringQueryOperatorInput>;
  size: Maybe<IntQueryOperatorInput>;
  prettySize: Maybe<StringQueryOperatorInput>;
  modifiedTime: Maybe<DateQueryOperatorInput>;
  accessTime: Maybe<DateQueryOperatorInput>;
  changeTime: Maybe<DateQueryOperatorInput>;
  birthTime: Maybe<DateQueryOperatorInput>;
  root: Maybe<StringQueryOperatorInput>;
  dir: Maybe<StringQueryOperatorInput>;
  base: Maybe<StringQueryOperatorInput>;
  ext: Maybe<StringQueryOperatorInput>;
  name: Maybe<StringQueryOperatorInput>;
  relativeDirectory: Maybe<StringQueryOperatorInput>;
  dev: Maybe<IntQueryOperatorInput>;
  mode: Maybe<IntQueryOperatorInput>;
  nlink: Maybe<IntQueryOperatorInput>;
  uid: Maybe<IntQueryOperatorInput>;
  gid: Maybe<IntQueryOperatorInput>;
  rdev: Maybe<IntQueryOperatorInput>;
  ino: Maybe<FloatQueryOperatorInput>;
  atimeMs: Maybe<FloatQueryOperatorInput>;
  mtimeMs: Maybe<FloatQueryOperatorInput>;
  ctimeMs: Maybe<FloatQueryOperatorInput>;
  atime: Maybe<DateQueryOperatorInput>;
  mtime: Maybe<DateQueryOperatorInput>;
  ctime: Maybe<DateQueryOperatorInput>;
  birthtime: Maybe<DateQueryOperatorInput>;
  birthtimeMs: Maybe<FloatQueryOperatorInput>;
  blksize: Maybe<IntQueryOperatorInput>;
  blocks: Maybe<IntQueryOperatorInput>;
  publicURL: Maybe<StringQueryOperatorInput>;
  childrenImageSharp: Maybe<ImageSharpFilterListInput>;
  childImageSharp: Maybe<ImageSharpFilterInput>;
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};


type Query_allFileArgs = {
  filter: Maybe<FileFilterInput>;
  sort: Maybe<FileSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_directoryArgs = {
  sourceInstanceName: Maybe<StringQueryOperatorInput>;
  absolutePath: Maybe<StringQueryOperatorInput>;
  relativePath: Maybe<StringQueryOperatorInput>;
  extension: Maybe<StringQueryOperatorInput>;
  size: Maybe<IntQueryOperatorInput>;
  prettySize: Maybe<StringQueryOperatorInput>;
  modifiedTime: Maybe<DateQueryOperatorInput>;
  accessTime: Maybe<DateQueryOperatorInput>;
  changeTime: Maybe<DateQueryOperatorInput>;
  birthTime: Maybe<DateQueryOperatorInput>;
  root: Maybe<StringQueryOperatorInput>;
  dir: Maybe<StringQueryOperatorInput>;
  base: Maybe<StringQueryOperatorInput>;
  ext: Maybe<StringQueryOperatorInput>;
  name: Maybe<StringQueryOperatorInput>;
  relativeDirectory: Maybe<StringQueryOperatorInput>;
  dev: Maybe<IntQueryOperatorInput>;
  mode: Maybe<IntQueryOperatorInput>;
  nlink: Maybe<IntQueryOperatorInput>;
  uid: Maybe<IntQueryOperatorInput>;
  gid: Maybe<IntQueryOperatorInput>;
  rdev: Maybe<IntQueryOperatorInput>;
  ino: Maybe<FloatQueryOperatorInput>;
  atimeMs: Maybe<FloatQueryOperatorInput>;
  mtimeMs: Maybe<FloatQueryOperatorInput>;
  ctimeMs: Maybe<FloatQueryOperatorInput>;
  atime: Maybe<DateQueryOperatorInput>;
  mtime: Maybe<DateQueryOperatorInput>;
  ctime: Maybe<DateQueryOperatorInput>;
  birthtime: Maybe<DateQueryOperatorInput>;
  birthtimeMs: Maybe<FloatQueryOperatorInput>;
  blksize: Maybe<IntQueryOperatorInput>;
  blocks: Maybe<IntQueryOperatorInput>;
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};


type Query_allDirectoryArgs = {
  filter: Maybe<DirectoryFilterInput>;
  sort: Maybe<DirectorySortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_siteArgs = {
  buildTime: Maybe<DateQueryOperatorInput>;
  siteMetadata: Maybe<SiteSiteMetadataFilterInput>;
  port: Maybe<IntQueryOperatorInput>;
  host: Maybe<StringQueryOperatorInput>;
  polyfill: Maybe<BooleanQueryOperatorInput>;
  pathPrefix: Maybe<StringQueryOperatorInput>;
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};


type Query_allSiteArgs = {
  filter: Maybe<SiteFilterInput>;
  sort: Maybe<SiteSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_siteFunctionArgs = {
  apiRoute: Maybe<StringQueryOperatorInput>;
  originalFilePath: Maybe<StringQueryOperatorInput>;
  relativeCompiledFilePath: Maybe<StringQueryOperatorInput>;
  absoluteCompiledFilePath: Maybe<StringQueryOperatorInput>;
  matchPath: Maybe<StringQueryOperatorInput>;
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};


type Query_allSiteFunctionArgs = {
  filter: Maybe<SiteFunctionFilterInput>;
  sort: Maybe<SiteFunctionSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_sitePageArgs = {
  path: Maybe<StringQueryOperatorInput>;
  component: Maybe<StringQueryOperatorInput>;
  internalComponentName: Maybe<StringQueryOperatorInput>;
  componentChunkName: Maybe<StringQueryOperatorInput>;
  matchPath: Maybe<StringQueryOperatorInput>;
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
  isCreatedByStatefulCreatePages: Maybe<BooleanQueryOperatorInput>;
  pluginCreator: Maybe<SitePluginFilterInput>;
  pluginCreatorId: Maybe<StringQueryOperatorInput>;
  componentPath: Maybe<StringQueryOperatorInput>;
};


type Query_allSitePageArgs = {
  filter: Maybe<SitePageFilterInput>;
  sort: Maybe<SitePageSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_imageSharpArgs = {
  fixed: Maybe<ImageSharpFixedFilterInput>;
  fluid: Maybe<ImageSharpFluidFilterInput>;
  gatsbyImageData: Maybe<JSONQueryOperatorInput>;
  original: Maybe<ImageSharpOriginalFilterInput>;
  resize: Maybe<ImageSharpResizeFilterInput>;
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};


type Query_allImageSharpArgs = {
  filter: Maybe<ImageSharpFilterInput>;
  sort: Maybe<ImageSharpSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_graphQlSourceArgs = {
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
  typeName: Maybe<StringQueryOperatorInput>;
  fieldName: Maybe<StringQueryOperatorInput>;
};


type Query_allGraphQlSourceArgs = {
  filter: Maybe<GraphQLSourceFilterInput>;
  sort: Maybe<GraphQLSourceSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_siteBuildMetadataArgs = {
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
  buildTime: Maybe<DateQueryOperatorInput>;
};


type Query_allSiteBuildMetadataArgs = {
  filter: Maybe<SiteBuildMetadataFilterInput>;
  sort: Maybe<SiteBuildMetadataSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_sitePluginArgs = {
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
  resolve: Maybe<StringQueryOperatorInput>;
  name: Maybe<StringQueryOperatorInput>;
  version: Maybe<StringQueryOperatorInput>;
  pluginOptions: Maybe<SitePluginPluginOptionsFilterInput>;
  nodeAPIs: Maybe<StringQueryOperatorInput>;
  browserAPIs: Maybe<StringQueryOperatorInput>;
  ssrAPIs: Maybe<StringQueryOperatorInput>;
  pluginFilepath: Maybe<StringQueryOperatorInput>;
  packageJson: Maybe<SitePluginPackageJsonFilterInput>;
};


type Query_allSitePluginArgs = {
  filter: Maybe<SitePluginFilterInput>;
  sort: Maybe<SitePluginSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};

type StringQueryOperatorInput = {
  readonly eq: Maybe<Scalars['String']>;
  readonly ne: Maybe<Scalars['String']>;
  readonly in: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly nin: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly regex: Maybe<Scalars['String']>;
  readonly glob: Maybe<Scalars['String']>;
};

type IntQueryOperatorInput = {
  readonly eq: Maybe<Scalars['Int']>;
  readonly ne: Maybe<Scalars['Int']>;
  readonly gt: Maybe<Scalars['Int']>;
  readonly gte: Maybe<Scalars['Int']>;
  readonly lt: Maybe<Scalars['Int']>;
  readonly lte: Maybe<Scalars['Int']>;
  readonly in: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
  readonly nin: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
};

type DateQueryOperatorInput = {
  readonly eq: Maybe<Scalars['Date']>;
  readonly ne: Maybe<Scalars['Date']>;
  readonly gt: Maybe<Scalars['Date']>;
  readonly gte: Maybe<Scalars['Date']>;
  readonly lt: Maybe<Scalars['Date']>;
  readonly lte: Maybe<Scalars['Date']>;
  readonly in: Maybe<ReadonlyArray<Maybe<Scalars['Date']>>>;
  readonly nin: Maybe<ReadonlyArray<Maybe<Scalars['Date']>>>;
};

type FloatQueryOperatorInput = {
  readonly eq: Maybe<Scalars['Float']>;
  readonly ne: Maybe<Scalars['Float']>;
  readonly gt: Maybe<Scalars['Float']>;
  readonly gte: Maybe<Scalars['Float']>;
  readonly lt: Maybe<Scalars['Float']>;
  readonly lte: Maybe<Scalars['Float']>;
  readonly in: Maybe<ReadonlyArray<Maybe<Scalars['Float']>>>;
  readonly nin: Maybe<ReadonlyArray<Maybe<Scalars['Float']>>>;
};

type ImageSharpFilterListInput = {
  readonly elemMatch: Maybe<ImageSharpFilterInput>;
};

type ImageSharpFilterInput = {
  readonly fixed: Maybe<ImageSharpFixedFilterInput>;
  readonly fluid: Maybe<ImageSharpFluidFilterInput>;
  readonly gatsbyImageData: Maybe<JSONQueryOperatorInput>;
  readonly original: Maybe<ImageSharpOriginalFilterInput>;
  readonly resize: Maybe<ImageSharpResizeFilterInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type ImageSharpFixedFilterInput = {
  readonly base64: Maybe<StringQueryOperatorInput>;
  readonly tracedSVG: Maybe<StringQueryOperatorInput>;
  readonly aspectRatio: Maybe<FloatQueryOperatorInput>;
  readonly width: Maybe<FloatQueryOperatorInput>;
  readonly height: Maybe<FloatQueryOperatorInput>;
  readonly src: Maybe<StringQueryOperatorInput>;
  readonly srcSet: Maybe<StringQueryOperatorInput>;
  readonly srcWebp: Maybe<StringQueryOperatorInput>;
  readonly srcSetWebp: Maybe<StringQueryOperatorInput>;
  readonly originalName: Maybe<StringQueryOperatorInput>;
};

type ImageSharpFluidFilterInput = {
  readonly base64: Maybe<StringQueryOperatorInput>;
  readonly tracedSVG: Maybe<StringQueryOperatorInput>;
  readonly aspectRatio: Maybe<FloatQueryOperatorInput>;
  readonly src: Maybe<StringQueryOperatorInput>;
  readonly srcSet: Maybe<StringQueryOperatorInput>;
  readonly srcWebp: Maybe<StringQueryOperatorInput>;
  readonly srcSetWebp: Maybe<StringQueryOperatorInput>;
  readonly sizes: Maybe<StringQueryOperatorInput>;
  readonly originalImg: Maybe<StringQueryOperatorInput>;
  readonly originalName: Maybe<StringQueryOperatorInput>;
  readonly presentationWidth: Maybe<IntQueryOperatorInput>;
  readonly presentationHeight: Maybe<IntQueryOperatorInput>;
};

type JSONQueryOperatorInput = {
  readonly eq: Maybe<Scalars['JSON']>;
  readonly ne: Maybe<Scalars['JSON']>;
  readonly in: Maybe<ReadonlyArray<Maybe<Scalars['JSON']>>>;
  readonly nin: Maybe<ReadonlyArray<Maybe<Scalars['JSON']>>>;
  readonly regex: Maybe<Scalars['JSON']>;
  readonly glob: Maybe<Scalars['JSON']>;
};

type ImageSharpOriginalFilterInput = {
  readonly width: Maybe<FloatQueryOperatorInput>;
  readonly height: Maybe<FloatQueryOperatorInput>;
  readonly src: Maybe<StringQueryOperatorInput>;
};

type ImageSharpResizeFilterInput = {
  readonly src: Maybe<StringQueryOperatorInput>;
  readonly tracedSVG: Maybe<StringQueryOperatorInput>;
  readonly width: Maybe<IntQueryOperatorInput>;
  readonly height: Maybe<IntQueryOperatorInput>;
  readonly aspectRatio: Maybe<FloatQueryOperatorInput>;
  readonly originalName: Maybe<StringQueryOperatorInput>;
};

type NodeFilterInput = {
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type NodeFilterListInput = {
  readonly elemMatch: Maybe<NodeFilterInput>;
};

type InternalFilterInput = {
  readonly content: Maybe<StringQueryOperatorInput>;
  readonly contentDigest: Maybe<StringQueryOperatorInput>;
  readonly description: Maybe<StringQueryOperatorInput>;
  readonly fieldOwners: Maybe<StringQueryOperatorInput>;
  readonly ignoreType: Maybe<BooleanQueryOperatorInput>;
  readonly mediaType: Maybe<StringQueryOperatorInput>;
  readonly owner: Maybe<StringQueryOperatorInput>;
  readonly type: Maybe<StringQueryOperatorInput>;
};

type BooleanQueryOperatorInput = {
  readonly eq: Maybe<Scalars['Boolean']>;
  readonly ne: Maybe<Scalars['Boolean']>;
  readonly in: Maybe<ReadonlyArray<Maybe<Scalars['Boolean']>>>;
  readonly nin: Maybe<ReadonlyArray<Maybe<Scalars['Boolean']>>>;
};

type FileConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<FileEdge>;
  readonly nodes: ReadonlyArray<File>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<FileGroupConnection>;
};


type FileConnection_distinctArgs = {
  field: FileFieldsEnum;
};


type FileConnection_maxArgs = {
  field: FileFieldsEnum;
};


type FileConnection_minArgs = {
  field: FileFieldsEnum;
};


type FileConnection_sumArgs = {
  field: FileFieldsEnum;
};


type FileConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: FileFieldsEnum;
};

type FileEdge = {
  readonly next: Maybe<File>;
  readonly node: File;
  readonly previous: Maybe<File>;
};

type PageInfo = {
  readonly currentPage: Scalars['Int'];
  readonly hasPreviousPage: Scalars['Boolean'];
  readonly hasNextPage: Scalars['Boolean'];
  readonly itemCount: Scalars['Int'];
  readonly pageCount: Scalars['Int'];
  readonly perPage: Maybe<Scalars['Int']>;
  readonly totalCount: Scalars['Int'];
};

type FileFieldsEnum =
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
  | 'childrenImageSharp'
  | 'childrenImageSharp.fixed.base64'
  | 'childrenImageSharp.fixed.tracedSVG'
  | 'childrenImageSharp.fixed.aspectRatio'
  | 'childrenImageSharp.fixed.width'
  | 'childrenImageSharp.fixed.height'
  | 'childrenImageSharp.fixed.src'
  | 'childrenImageSharp.fixed.srcSet'
  | 'childrenImageSharp.fixed.srcWebp'
  | 'childrenImageSharp.fixed.srcSetWebp'
  | 'childrenImageSharp.fixed.originalName'
  | 'childrenImageSharp.fluid.base64'
  | 'childrenImageSharp.fluid.tracedSVG'
  | 'childrenImageSharp.fluid.aspectRatio'
  | 'childrenImageSharp.fluid.src'
  | 'childrenImageSharp.fluid.srcSet'
  | 'childrenImageSharp.fluid.srcWebp'
  | 'childrenImageSharp.fluid.srcSetWebp'
  | 'childrenImageSharp.fluid.sizes'
  | 'childrenImageSharp.fluid.originalImg'
  | 'childrenImageSharp.fluid.originalName'
  | 'childrenImageSharp.fluid.presentationWidth'
  | 'childrenImageSharp.fluid.presentationHeight'
  | 'childrenImageSharp.gatsbyImageData'
  | 'childrenImageSharp.original.width'
  | 'childrenImageSharp.original.height'
  | 'childrenImageSharp.original.src'
  | 'childrenImageSharp.resize.src'
  | 'childrenImageSharp.resize.tracedSVG'
  | 'childrenImageSharp.resize.width'
  | 'childrenImageSharp.resize.height'
  | 'childrenImageSharp.resize.aspectRatio'
  | 'childrenImageSharp.resize.originalName'
  | 'childrenImageSharp.id'
  | 'childrenImageSharp.parent.id'
  | 'childrenImageSharp.parent.parent.id'
  | 'childrenImageSharp.parent.parent.children'
  | 'childrenImageSharp.parent.children'
  | 'childrenImageSharp.parent.children.id'
  | 'childrenImageSharp.parent.children.children'
  | 'childrenImageSharp.parent.internal.content'
  | 'childrenImageSharp.parent.internal.contentDigest'
  | 'childrenImageSharp.parent.internal.description'
  | 'childrenImageSharp.parent.internal.fieldOwners'
  | 'childrenImageSharp.parent.internal.ignoreType'
  | 'childrenImageSharp.parent.internal.mediaType'
  | 'childrenImageSharp.parent.internal.owner'
  | 'childrenImageSharp.parent.internal.type'
  | 'childrenImageSharp.children'
  | 'childrenImageSharp.children.id'
  | 'childrenImageSharp.children.parent.id'
  | 'childrenImageSharp.children.parent.children'
  | 'childrenImageSharp.children.children'
  | 'childrenImageSharp.children.children.id'
  | 'childrenImageSharp.children.children.children'
  | 'childrenImageSharp.children.internal.content'
  | 'childrenImageSharp.children.internal.contentDigest'
  | 'childrenImageSharp.children.internal.description'
  | 'childrenImageSharp.children.internal.fieldOwners'
  | 'childrenImageSharp.children.internal.ignoreType'
  | 'childrenImageSharp.children.internal.mediaType'
  | 'childrenImageSharp.children.internal.owner'
  | 'childrenImageSharp.children.internal.type'
  | 'childrenImageSharp.internal.content'
  | 'childrenImageSharp.internal.contentDigest'
  | 'childrenImageSharp.internal.description'
  | 'childrenImageSharp.internal.fieldOwners'
  | 'childrenImageSharp.internal.ignoreType'
  | 'childrenImageSharp.internal.mediaType'
  | 'childrenImageSharp.internal.owner'
  | 'childrenImageSharp.internal.type'
  | 'childImageSharp.fixed.base64'
  | 'childImageSharp.fixed.tracedSVG'
  | 'childImageSharp.fixed.aspectRatio'
  | 'childImageSharp.fixed.width'
  | 'childImageSharp.fixed.height'
  | 'childImageSharp.fixed.src'
  | 'childImageSharp.fixed.srcSet'
  | 'childImageSharp.fixed.srcWebp'
  | 'childImageSharp.fixed.srcSetWebp'
  | 'childImageSharp.fixed.originalName'
  | 'childImageSharp.fluid.base64'
  | 'childImageSharp.fluid.tracedSVG'
  | 'childImageSharp.fluid.aspectRatio'
  | 'childImageSharp.fluid.src'
  | 'childImageSharp.fluid.srcSet'
  | 'childImageSharp.fluid.srcWebp'
  | 'childImageSharp.fluid.srcSetWebp'
  | 'childImageSharp.fluid.sizes'
  | 'childImageSharp.fluid.originalImg'
  | 'childImageSharp.fluid.originalName'
  | 'childImageSharp.fluid.presentationWidth'
  | 'childImageSharp.fluid.presentationHeight'
  | 'childImageSharp.gatsbyImageData'
  | 'childImageSharp.original.width'
  | 'childImageSharp.original.height'
  | 'childImageSharp.original.src'
  | 'childImageSharp.resize.src'
  | 'childImageSharp.resize.tracedSVG'
  | 'childImageSharp.resize.width'
  | 'childImageSharp.resize.height'
  | 'childImageSharp.resize.aspectRatio'
  | 'childImageSharp.resize.originalName'
  | 'childImageSharp.id'
  | 'childImageSharp.parent.id'
  | 'childImageSharp.parent.parent.id'
  | 'childImageSharp.parent.parent.children'
  | 'childImageSharp.parent.children'
  | 'childImageSharp.parent.children.id'
  | 'childImageSharp.parent.children.children'
  | 'childImageSharp.parent.internal.content'
  | 'childImageSharp.parent.internal.contentDigest'
  | 'childImageSharp.parent.internal.description'
  | 'childImageSharp.parent.internal.fieldOwners'
  | 'childImageSharp.parent.internal.ignoreType'
  | 'childImageSharp.parent.internal.mediaType'
  | 'childImageSharp.parent.internal.owner'
  | 'childImageSharp.parent.internal.type'
  | 'childImageSharp.children'
  | 'childImageSharp.children.id'
  | 'childImageSharp.children.parent.id'
  | 'childImageSharp.children.parent.children'
  | 'childImageSharp.children.children'
  | 'childImageSharp.children.children.id'
  | 'childImageSharp.children.children.children'
  | 'childImageSharp.children.internal.content'
  | 'childImageSharp.children.internal.contentDigest'
  | 'childImageSharp.children.internal.description'
  | 'childImageSharp.children.internal.fieldOwners'
  | 'childImageSharp.children.internal.ignoreType'
  | 'childImageSharp.children.internal.mediaType'
  | 'childImageSharp.children.internal.owner'
  | 'childImageSharp.children.internal.type'
  | 'childImageSharp.internal.content'
  | 'childImageSharp.internal.contentDigest'
  | 'childImageSharp.internal.description'
  | 'childImageSharp.internal.fieldOwners'
  | 'childImageSharp.internal.ignoreType'
  | 'childImageSharp.internal.mediaType'
  | 'childImageSharp.internal.owner'
  | 'childImageSharp.internal.type'
  | 'id'
  | 'parent.id'
  | 'parent.parent.id'
  | 'parent.parent.parent.id'
  | 'parent.parent.parent.children'
  | 'parent.parent.children'
  | 'parent.parent.children.id'
  | 'parent.parent.children.children'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.children'
  | 'parent.children.id'
  | 'parent.children.parent.id'
  | 'parent.children.parent.children'
  | 'parent.children.children'
  | 'parent.children.children.id'
  | 'parent.children.children.children'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'children'
  | 'children.id'
  | 'children.parent.id'
  | 'children.parent.parent.id'
  | 'children.parent.parent.children'
  | 'children.parent.children'
  | 'children.parent.children.id'
  | 'children.parent.children.children'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.children'
  | 'children.children.id'
  | 'children.children.parent.id'
  | 'children.children.parent.children'
  | 'children.children.children'
  | 'children.children.children.id'
  | 'children.children.children.children'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type';

type FileGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<FileEdge>;
  readonly nodes: ReadonlyArray<File>;
  readonly pageInfo: PageInfo;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};

type FileFilterInput = {
  readonly sourceInstanceName: Maybe<StringQueryOperatorInput>;
  readonly absolutePath: Maybe<StringQueryOperatorInput>;
  readonly relativePath: Maybe<StringQueryOperatorInput>;
  readonly extension: Maybe<StringQueryOperatorInput>;
  readonly size: Maybe<IntQueryOperatorInput>;
  readonly prettySize: Maybe<StringQueryOperatorInput>;
  readonly modifiedTime: Maybe<DateQueryOperatorInput>;
  readonly accessTime: Maybe<DateQueryOperatorInput>;
  readonly changeTime: Maybe<DateQueryOperatorInput>;
  readonly birthTime: Maybe<DateQueryOperatorInput>;
  readonly root: Maybe<StringQueryOperatorInput>;
  readonly dir: Maybe<StringQueryOperatorInput>;
  readonly base: Maybe<StringQueryOperatorInput>;
  readonly ext: Maybe<StringQueryOperatorInput>;
  readonly name: Maybe<StringQueryOperatorInput>;
  readonly relativeDirectory: Maybe<StringQueryOperatorInput>;
  readonly dev: Maybe<IntQueryOperatorInput>;
  readonly mode: Maybe<IntQueryOperatorInput>;
  readonly nlink: Maybe<IntQueryOperatorInput>;
  readonly uid: Maybe<IntQueryOperatorInput>;
  readonly gid: Maybe<IntQueryOperatorInput>;
  readonly rdev: Maybe<IntQueryOperatorInput>;
  readonly ino: Maybe<FloatQueryOperatorInput>;
  readonly atimeMs: Maybe<FloatQueryOperatorInput>;
  readonly mtimeMs: Maybe<FloatQueryOperatorInput>;
  readonly ctimeMs: Maybe<FloatQueryOperatorInput>;
  readonly atime: Maybe<DateQueryOperatorInput>;
  readonly mtime: Maybe<DateQueryOperatorInput>;
  readonly ctime: Maybe<DateQueryOperatorInput>;
  readonly birthtime: Maybe<DateQueryOperatorInput>;
  readonly birthtimeMs: Maybe<FloatQueryOperatorInput>;
  readonly blksize: Maybe<IntQueryOperatorInput>;
  readonly blocks: Maybe<IntQueryOperatorInput>;
  readonly publicURL: Maybe<StringQueryOperatorInput>;
  readonly childrenImageSharp: Maybe<ImageSharpFilterListInput>;
  readonly childImageSharp: Maybe<ImageSharpFilterInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type FileSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<FileFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type SortOrderEnum =
  | 'ASC'
  | 'DESC';

type DirectoryConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<DirectoryEdge>;
  readonly nodes: ReadonlyArray<Directory>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<DirectoryGroupConnection>;
};


type DirectoryConnection_distinctArgs = {
  field: DirectoryFieldsEnum;
};


type DirectoryConnection_maxArgs = {
  field: DirectoryFieldsEnum;
};


type DirectoryConnection_minArgs = {
  field: DirectoryFieldsEnum;
};


type DirectoryConnection_sumArgs = {
  field: DirectoryFieldsEnum;
};


type DirectoryConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: DirectoryFieldsEnum;
};

type DirectoryEdge = {
  readonly next: Maybe<Directory>;
  readonly node: Directory;
  readonly previous: Maybe<Directory>;
};

type DirectoryFieldsEnum =
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
  | 'parent.id'
  | 'parent.parent.id'
  | 'parent.parent.parent.id'
  | 'parent.parent.parent.children'
  | 'parent.parent.children'
  | 'parent.parent.children.id'
  | 'parent.parent.children.children'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.children'
  | 'parent.children.id'
  | 'parent.children.parent.id'
  | 'parent.children.parent.children'
  | 'parent.children.children'
  | 'parent.children.children.id'
  | 'parent.children.children.children'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'children'
  | 'children.id'
  | 'children.parent.id'
  | 'children.parent.parent.id'
  | 'children.parent.parent.children'
  | 'children.parent.children'
  | 'children.parent.children.id'
  | 'children.parent.children.children'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.children'
  | 'children.children.id'
  | 'children.children.parent.id'
  | 'children.children.parent.children'
  | 'children.children.children'
  | 'children.children.children.id'
  | 'children.children.children.children'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type';

type DirectoryGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<DirectoryEdge>;
  readonly nodes: ReadonlyArray<Directory>;
  readonly pageInfo: PageInfo;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};

type DirectoryFilterInput = {
  readonly sourceInstanceName: Maybe<StringQueryOperatorInput>;
  readonly absolutePath: Maybe<StringQueryOperatorInput>;
  readonly relativePath: Maybe<StringQueryOperatorInput>;
  readonly extension: Maybe<StringQueryOperatorInput>;
  readonly size: Maybe<IntQueryOperatorInput>;
  readonly prettySize: Maybe<StringQueryOperatorInput>;
  readonly modifiedTime: Maybe<DateQueryOperatorInput>;
  readonly accessTime: Maybe<DateQueryOperatorInput>;
  readonly changeTime: Maybe<DateQueryOperatorInput>;
  readonly birthTime: Maybe<DateQueryOperatorInput>;
  readonly root: Maybe<StringQueryOperatorInput>;
  readonly dir: Maybe<StringQueryOperatorInput>;
  readonly base: Maybe<StringQueryOperatorInput>;
  readonly ext: Maybe<StringQueryOperatorInput>;
  readonly name: Maybe<StringQueryOperatorInput>;
  readonly relativeDirectory: Maybe<StringQueryOperatorInput>;
  readonly dev: Maybe<IntQueryOperatorInput>;
  readonly mode: Maybe<IntQueryOperatorInput>;
  readonly nlink: Maybe<IntQueryOperatorInput>;
  readonly uid: Maybe<IntQueryOperatorInput>;
  readonly gid: Maybe<IntQueryOperatorInput>;
  readonly rdev: Maybe<IntQueryOperatorInput>;
  readonly ino: Maybe<FloatQueryOperatorInput>;
  readonly atimeMs: Maybe<FloatQueryOperatorInput>;
  readonly mtimeMs: Maybe<FloatQueryOperatorInput>;
  readonly ctimeMs: Maybe<FloatQueryOperatorInput>;
  readonly atime: Maybe<DateQueryOperatorInput>;
  readonly mtime: Maybe<DateQueryOperatorInput>;
  readonly ctime: Maybe<DateQueryOperatorInput>;
  readonly birthtime: Maybe<DateQueryOperatorInput>;
  readonly birthtimeMs: Maybe<FloatQueryOperatorInput>;
  readonly blksize: Maybe<IntQueryOperatorInput>;
  readonly blocks: Maybe<IntQueryOperatorInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type DirectorySortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<DirectoryFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type SiteSiteMetadataFilterInput = {
  readonly title: Maybe<StringQueryOperatorInput>;
  readonly description: Maybe<StringQueryOperatorInput>;
  readonly author: Maybe<StringQueryOperatorInput>;
  readonly siteUrl: Maybe<StringQueryOperatorInput>;
  readonly keywords: Maybe<StringQueryOperatorInput>;
};

type SiteConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<SiteEdge>;
  readonly nodes: ReadonlyArray<Site>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<SiteGroupConnection>;
};


type SiteConnection_distinctArgs = {
  field: SiteFieldsEnum;
};


type SiteConnection_maxArgs = {
  field: SiteFieldsEnum;
};


type SiteConnection_minArgs = {
  field: SiteFieldsEnum;
};


type SiteConnection_sumArgs = {
  field: SiteFieldsEnum;
};


type SiteConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: SiteFieldsEnum;
};

type SiteEdge = {
  readonly next: Maybe<Site>;
  readonly node: Site;
  readonly previous: Maybe<Site>;
};

type SiteFieldsEnum =
  | 'buildTime'
  | 'siteMetadata.title'
  | 'siteMetadata.description'
  | 'siteMetadata.author'
  | 'siteMetadata.siteUrl'
  | 'siteMetadata.keywords'
  | 'port'
  | 'host'
  | 'polyfill'
  | 'pathPrefix'
  | 'id'
  | 'parent.id'
  | 'parent.parent.id'
  | 'parent.parent.parent.id'
  | 'parent.parent.parent.children'
  | 'parent.parent.children'
  | 'parent.parent.children.id'
  | 'parent.parent.children.children'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.children'
  | 'parent.children.id'
  | 'parent.children.parent.id'
  | 'parent.children.parent.children'
  | 'parent.children.children'
  | 'parent.children.children.id'
  | 'parent.children.children.children'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'children'
  | 'children.id'
  | 'children.parent.id'
  | 'children.parent.parent.id'
  | 'children.parent.parent.children'
  | 'children.parent.children'
  | 'children.parent.children.id'
  | 'children.parent.children.children'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.children'
  | 'children.children.id'
  | 'children.children.parent.id'
  | 'children.children.parent.children'
  | 'children.children.children'
  | 'children.children.children.id'
  | 'children.children.children.children'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type';

type SiteGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<SiteEdge>;
  readonly nodes: ReadonlyArray<Site>;
  readonly pageInfo: PageInfo;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};

type SiteFilterInput = {
  readonly buildTime: Maybe<DateQueryOperatorInput>;
  readonly siteMetadata: Maybe<SiteSiteMetadataFilterInput>;
  readonly port: Maybe<IntQueryOperatorInput>;
  readonly host: Maybe<StringQueryOperatorInput>;
  readonly polyfill: Maybe<BooleanQueryOperatorInput>;
  readonly pathPrefix: Maybe<StringQueryOperatorInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type SiteSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<SiteFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type SiteFunctionConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<SiteFunctionEdge>;
  readonly nodes: ReadonlyArray<SiteFunction>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<SiteFunctionGroupConnection>;
};


type SiteFunctionConnection_distinctArgs = {
  field: SiteFunctionFieldsEnum;
};


type SiteFunctionConnection_maxArgs = {
  field: SiteFunctionFieldsEnum;
};


type SiteFunctionConnection_minArgs = {
  field: SiteFunctionFieldsEnum;
};


type SiteFunctionConnection_sumArgs = {
  field: SiteFunctionFieldsEnum;
};


type SiteFunctionConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: SiteFunctionFieldsEnum;
};

type SiteFunctionEdge = {
  readonly next: Maybe<SiteFunction>;
  readonly node: SiteFunction;
  readonly previous: Maybe<SiteFunction>;
};

type SiteFunctionFieldsEnum =
  | 'apiRoute'
  | 'originalFilePath'
  | 'relativeCompiledFilePath'
  | 'absoluteCompiledFilePath'
  | 'matchPath'
  | 'id'
  | 'parent.id'
  | 'parent.parent.id'
  | 'parent.parent.parent.id'
  | 'parent.parent.parent.children'
  | 'parent.parent.children'
  | 'parent.parent.children.id'
  | 'parent.parent.children.children'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.children'
  | 'parent.children.id'
  | 'parent.children.parent.id'
  | 'parent.children.parent.children'
  | 'parent.children.children'
  | 'parent.children.children.id'
  | 'parent.children.children.children'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'children'
  | 'children.id'
  | 'children.parent.id'
  | 'children.parent.parent.id'
  | 'children.parent.parent.children'
  | 'children.parent.children'
  | 'children.parent.children.id'
  | 'children.parent.children.children'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.children'
  | 'children.children.id'
  | 'children.children.parent.id'
  | 'children.children.parent.children'
  | 'children.children.children'
  | 'children.children.children.id'
  | 'children.children.children.children'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type';

type SiteFunctionGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<SiteFunctionEdge>;
  readonly nodes: ReadonlyArray<SiteFunction>;
  readonly pageInfo: PageInfo;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};

type SiteFunctionFilterInput = {
  readonly apiRoute: Maybe<StringQueryOperatorInput>;
  readonly originalFilePath: Maybe<StringQueryOperatorInput>;
  readonly relativeCompiledFilePath: Maybe<StringQueryOperatorInput>;
  readonly absoluteCompiledFilePath: Maybe<StringQueryOperatorInput>;
  readonly matchPath: Maybe<StringQueryOperatorInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type SiteFunctionSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<SiteFunctionFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type SitePluginFilterInput = {
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
  readonly resolve: Maybe<StringQueryOperatorInput>;
  readonly name: Maybe<StringQueryOperatorInput>;
  readonly version: Maybe<StringQueryOperatorInput>;
  readonly pluginOptions: Maybe<SitePluginPluginOptionsFilterInput>;
  readonly nodeAPIs: Maybe<StringQueryOperatorInput>;
  readonly browserAPIs: Maybe<StringQueryOperatorInput>;
  readonly ssrAPIs: Maybe<StringQueryOperatorInput>;
  readonly pluginFilepath: Maybe<StringQueryOperatorInput>;
  readonly packageJson: Maybe<SitePluginPackageJsonFilterInput>;
};

type SitePluginPluginOptionsFilterInput = {
  readonly isTSX: Maybe<BooleanQueryOperatorInput>;
  readonly jsxPragma: Maybe<StringQueryOperatorInput>;
  readonly allExtensions: Maybe<BooleanQueryOperatorInput>;
  readonly name: Maybe<StringQueryOperatorInput>;
  readonly path: Maybe<StringQueryOperatorInput>;
  readonly component: Maybe<StringQueryOperatorInput>;
  readonly typeName: Maybe<StringQueryOperatorInput>;
  readonly fieldName: Maybe<StringQueryOperatorInput>;
  readonly url: Maybe<StringQueryOperatorInput>;
  readonly headers: Maybe<SitePluginPluginOptionsHeadersFilterInput>;
  readonly test: Maybe<StringQueryOperatorInput>;
  readonly options: Maybe<SitePluginPluginOptionsOptionsFilterInput>;
  readonly files: Maybe<StringQueryOperatorInput>;
  readonly short_name: Maybe<StringQueryOperatorInput>;
  readonly start_url: Maybe<StringQueryOperatorInput>;
  readonly background_color: Maybe<StringQueryOperatorInput>;
  readonly theme_color: Maybe<StringQueryOperatorInput>;
  readonly display: Maybe<StringQueryOperatorInput>;
  readonly icon: Maybe<StringQueryOperatorInput>;
  readonly legacy: Maybe<BooleanQueryOperatorInput>;
  readonly theme_color_in_head: Maybe<BooleanQueryOperatorInput>;
  readonly cache_busting_mode: Maybe<StringQueryOperatorInput>;
  readonly crossOrigin: Maybe<StringQueryOperatorInput>;
  readonly include_favicon: Maybe<BooleanQueryOperatorInput>;
  readonly cacheDigest: Maybe<StringQueryOperatorInput>;
  readonly base64Width: Maybe<IntQueryOperatorInput>;
  readonly stripMetadata: Maybe<BooleanQueryOperatorInput>;
  readonly defaultQuality: Maybe<IntQueryOperatorInput>;
  readonly failOnError: Maybe<BooleanQueryOperatorInput>;
  readonly fonts: Maybe<StringQueryOperatorInput>;
  readonly pathCheck: Maybe<BooleanQueryOperatorInput>;
};

type SitePluginPluginOptionsHeadersFilterInput = {
  readonly Authorization: Maybe<StringQueryOperatorInput>;
};

type SitePluginPluginOptionsOptionsFilterInput = {
  readonly emitWarning: Maybe<BooleanQueryOperatorInput>;
  readonly failOnError: Maybe<BooleanQueryOperatorInput>;
  readonly extensions: Maybe<StringQueryOperatorInput>;
  readonly exclude: Maybe<StringQueryOperatorInput>;
};

type SitePluginPackageJsonFilterInput = {
  readonly name: Maybe<StringQueryOperatorInput>;
  readonly description: Maybe<StringQueryOperatorInput>;
  readonly version: Maybe<StringQueryOperatorInput>;
  readonly main: Maybe<StringQueryOperatorInput>;
  readonly license: Maybe<StringQueryOperatorInput>;
  readonly dependencies: Maybe<SitePluginPackageJsonDependenciesFilterListInput>;
  readonly devDependencies: Maybe<SitePluginPackageJsonDevDependenciesFilterListInput>;
  readonly peerDependencies: Maybe<SitePluginPackageJsonPeerDependenciesFilterListInput>;
  readonly keywords: Maybe<StringQueryOperatorInput>;
};

type SitePluginPackageJsonDependenciesFilterListInput = {
  readonly elemMatch: Maybe<SitePluginPackageJsonDependenciesFilterInput>;
};

type SitePluginPackageJsonDependenciesFilterInput = {
  readonly name: Maybe<StringQueryOperatorInput>;
  readonly version: Maybe<StringQueryOperatorInput>;
};

type SitePluginPackageJsonDevDependenciesFilterListInput = {
  readonly elemMatch: Maybe<SitePluginPackageJsonDevDependenciesFilterInput>;
};

type SitePluginPackageJsonDevDependenciesFilterInput = {
  readonly name: Maybe<StringQueryOperatorInput>;
  readonly version: Maybe<StringQueryOperatorInput>;
};

type SitePluginPackageJsonPeerDependenciesFilterListInput = {
  readonly elemMatch: Maybe<SitePluginPackageJsonPeerDependenciesFilterInput>;
};

type SitePluginPackageJsonPeerDependenciesFilterInput = {
  readonly name: Maybe<StringQueryOperatorInput>;
  readonly version: Maybe<StringQueryOperatorInput>;
};

type SitePageConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<SitePageEdge>;
  readonly nodes: ReadonlyArray<SitePage>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<SitePageGroupConnection>;
};


type SitePageConnection_distinctArgs = {
  field: SitePageFieldsEnum;
};


type SitePageConnection_maxArgs = {
  field: SitePageFieldsEnum;
};


type SitePageConnection_minArgs = {
  field: SitePageFieldsEnum;
};


type SitePageConnection_sumArgs = {
  field: SitePageFieldsEnum;
};


type SitePageConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: SitePageFieldsEnum;
};

type SitePageEdge = {
  readonly next: Maybe<SitePage>;
  readonly node: SitePage;
  readonly previous: Maybe<SitePage>;
};

type SitePageFieldsEnum =
  | 'path'
  | 'component'
  | 'internalComponentName'
  | 'componentChunkName'
  | 'matchPath'
  | 'id'
  | 'parent.id'
  | 'parent.parent.id'
  | 'parent.parent.parent.id'
  | 'parent.parent.parent.children'
  | 'parent.parent.children'
  | 'parent.parent.children.id'
  | 'parent.parent.children.children'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.children'
  | 'parent.children.id'
  | 'parent.children.parent.id'
  | 'parent.children.parent.children'
  | 'parent.children.children'
  | 'parent.children.children.id'
  | 'parent.children.children.children'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'children'
  | 'children.id'
  | 'children.parent.id'
  | 'children.parent.parent.id'
  | 'children.parent.parent.children'
  | 'children.parent.children'
  | 'children.parent.children.id'
  | 'children.parent.children.children'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.children'
  | 'children.children.id'
  | 'children.children.parent.id'
  | 'children.children.parent.children'
  | 'children.children.children'
  | 'children.children.children.id'
  | 'children.children.children.children'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type'
  | 'isCreatedByStatefulCreatePages'
  | 'pluginCreator.id'
  | 'pluginCreator.parent.id'
  | 'pluginCreator.parent.parent.id'
  | 'pluginCreator.parent.parent.children'
  | 'pluginCreator.parent.children'
  | 'pluginCreator.parent.children.id'
  | 'pluginCreator.parent.children.children'
  | 'pluginCreator.parent.internal.content'
  | 'pluginCreator.parent.internal.contentDigest'
  | 'pluginCreator.parent.internal.description'
  | 'pluginCreator.parent.internal.fieldOwners'
  | 'pluginCreator.parent.internal.ignoreType'
  | 'pluginCreator.parent.internal.mediaType'
  | 'pluginCreator.parent.internal.owner'
  | 'pluginCreator.parent.internal.type'
  | 'pluginCreator.children'
  | 'pluginCreator.children.id'
  | 'pluginCreator.children.parent.id'
  | 'pluginCreator.children.parent.children'
  | 'pluginCreator.children.children'
  | 'pluginCreator.children.children.id'
  | 'pluginCreator.children.children.children'
  | 'pluginCreator.children.internal.content'
  | 'pluginCreator.children.internal.contentDigest'
  | 'pluginCreator.children.internal.description'
  | 'pluginCreator.children.internal.fieldOwners'
  | 'pluginCreator.children.internal.ignoreType'
  | 'pluginCreator.children.internal.mediaType'
  | 'pluginCreator.children.internal.owner'
  | 'pluginCreator.children.internal.type'
  | 'pluginCreator.internal.content'
  | 'pluginCreator.internal.contentDigest'
  | 'pluginCreator.internal.description'
  | 'pluginCreator.internal.fieldOwners'
  | 'pluginCreator.internal.ignoreType'
  | 'pluginCreator.internal.mediaType'
  | 'pluginCreator.internal.owner'
  | 'pluginCreator.internal.type'
  | 'pluginCreator.resolve'
  | 'pluginCreator.name'
  | 'pluginCreator.version'
  | 'pluginCreator.pluginOptions.isTSX'
  | 'pluginCreator.pluginOptions.jsxPragma'
  | 'pluginCreator.pluginOptions.allExtensions'
  | 'pluginCreator.pluginOptions.name'
  | 'pluginCreator.pluginOptions.path'
  | 'pluginCreator.pluginOptions.component'
  | 'pluginCreator.pluginOptions.typeName'
  | 'pluginCreator.pluginOptions.fieldName'
  | 'pluginCreator.pluginOptions.url'
  | 'pluginCreator.pluginOptions.headers.Authorization'
  | 'pluginCreator.pluginOptions.test'
  | 'pluginCreator.pluginOptions.options.emitWarning'
  | 'pluginCreator.pluginOptions.options.failOnError'
  | 'pluginCreator.pluginOptions.options.extensions'
  | 'pluginCreator.pluginOptions.options.exclude'
  | 'pluginCreator.pluginOptions.files'
  | 'pluginCreator.pluginOptions.short_name'
  | 'pluginCreator.pluginOptions.start_url'
  | 'pluginCreator.pluginOptions.background_color'
  | 'pluginCreator.pluginOptions.theme_color'
  | 'pluginCreator.pluginOptions.display'
  | 'pluginCreator.pluginOptions.icon'
  | 'pluginCreator.pluginOptions.legacy'
  | 'pluginCreator.pluginOptions.theme_color_in_head'
  | 'pluginCreator.pluginOptions.cache_busting_mode'
  | 'pluginCreator.pluginOptions.crossOrigin'
  | 'pluginCreator.pluginOptions.include_favicon'
  | 'pluginCreator.pluginOptions.cacheDigest'
  | 'pluginCreator.pluginOptions.base64Width'
  | 'pluginCreator.pluginOptions.stripMetadata'
  | 'pluginCreator.pluginOptions.defaultQuality'
  | 'pluginCreator.pluginOptions.failOnError'
  | 'pluginCreator.pluginOptions.fonts'
  | 'pluginCreator.pluginOptions.pathCheck'
  | 'pluginCreator.nodeAPIs'
  | 'pluginCreator.browserAPIs'
  | 'pluginCreator.ssrAPIs'
  | 'pluginCreator.pluginFilepath'
  | 'pluginCreator.packageJson.name'
  | 'pluginCreator.packageJson.description'
  | 'pluginCreator.packageJson.version'
  | 'pluginCreator.packageJson.main'
  | 'pluginCreator.packageJson.license'
  | 'pluginCreator.packageJson.dependencies'
  | 'pluginCreator.packageJson.dependencies.name'
  | 'pluginCreator.packageJson.dependencies.version'
  | 'pluginCreator.packageJson.devDependencies'
  | 'pluginCreator.packageJson.devDependencies.name'
  | 'pluginCreator.packageJson.devDependencies.version'
  | 'pluginCreator.packageJson.peerDependencies'
  | 'pluginCreator.packageJson.peerDependencies.name'
  | 'pluginCreator.packageJson.peerDependencies.version'
  | 'pluginCreator.packageJson.keywords'
  | 'pluginCreatorId'
  | 'componentPath';

type SitePageGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<SitePageEdge>;
  readonly nodes: ReadonlyArray<SitePage>;
  readonly pageInfo: PageInfo;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};

type SitePageFilterInput = {
  readonly path: Maybe<StringQueryOperatorInput>;
  readonly component: Maybe<StringQueryOperatorInput>;
  readonly internalComponentName: Maybe<StringQueryOperatorInput>;
  readonly componentChunkName: Maybe<StringQueryOperatorInput>;
  readonly matchPath: Maybe<StringQueryOperatorInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
  readonly isCreatedByStatefulCreatePages: Maybe<BooleanQueryOperatorInput>;
  readonly pluginCreator: Maybe<SitePluginFilterInput>;
  readonly pluginCreatorId: Maybe<StringQueryOperatorInput>;
  readonly componentPath: Maybe<StringQueryOperatorInput>;
};

type SitePageSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<SitePageFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type ImageSharpConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<ImageSharpEdge>;
  readonly nodes: ReadonlyArray<ImageSharp>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<ImageSharpGroupConnection>;
};


type ImageSharpConnection_distinctArgs = {
  field: ImageSharpFieldsEnum;
};


type ImageSharpConnection_maxArgs = {
  field: ImageSharpFieldsEnum;
};


type ImageSharpConnection_minArgs = {
  field: ImageSharpFieldsEnum;
};


type ImageSharpConnection_sumArgs = {
  field: ImageSharpFieldsEnum;
};


type ImageSharpConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: ImageSharpFieldsEnum;
};

type ImageSharpEdge = {
  readonly next: Maybe<ImageSharp>;
  readonly node: ImageSharp;
  readonly previous: Maybe<ImageSharp>;
};

type ImageSharpFieldsEnum =
  | 'fixed.base64'
  | 'fixed.tracedSVG'
  | 'fixed.aspectRatio'
  | 'fixed.width'
  | 'fixed.height'
  | 'fixed.src'
  | 'fixed.srcSet'
  | 'fixed.srcWebp'
  | 'fixed.srcSetWebp'
  | 'fixed.originalName'
  | 'fluid.base64'
  | 'fluid.tracedSVG'
  | 'fluid.aspectRatio'
  | 'fluid.src'
  | 'fluid.srcSet'
  | 'fluid.srcWebp'
  | 'fluid.srcSetWebp'
  | 'fluid.sizes'
  | 'fluid.originalImg'
  | 'fluid.originalName'
  | 'fluid.presentationWidth'
  | 'fluid.presentationHeight'
  | 'gatsbyImageData'
  | 'original.width'
  | 'original.height'
  | 'original.src'
  | 'resize.src'
  | 'resize.tracedSVG'
  | 'resize.width'
  | 'resize.height'
  | 'resize.aspectRatio'
  | 'resize.originalName'
  | 'id'
  | 'parent.id'
  | 'parent.parent.id'
  | 'parent.parent.parent.id'
  | 'parent.parent.parent.children'
  | 'parent.parent.children'
  | 'parent.parent.children.id'
  | 'parent.parent.children.children'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.children'
  | 'parent.children.id'
  | 'parent.children.parent.id'
  | 'parent.children.parent.children'
  | 'parent.children.children'
  | 'parent.children.children.id'
  | 'parent.children.children.children'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'children'
  | 'children.id'
  | 'children.parent.id'
  | 'children.parent.parent.id'
  | 'children.parent.parent.children'
  | 'children.parent.children'
  | 'children.parent.children.id'
  | 'children.parent.children.children'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.children'
  | 'children.children.id'
  | 'children.children.parent.id'
  | 'children.children.parent.children'
  | 'children.children.children'
  | 'children.children.children.id'
  | 'children.children.children.children'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type';

type ImageSharpGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<ImageSharpEdge>;
  readonly nodes: ReadonlyArray<ImageSharp>;
  readonly pageInfo: PageInfo;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};

type ImageSharpSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<ImageSharpFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type GraphQLSourceConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<GraphQLSourceEdge>;
  readonly nodes: ReadonlyArray<GraphQLSource>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<GraphQLSourceGroupConnection>;
};


type GraphQLSourceConnection_distinctArgs = {
  field: GraphQLSourceFieldsEnum;
};


type GraphQLSourceConnection_maxArgs = {
  field: GraphQLSourceFieldsEnum;
};


type GraphQLSourceConnection_minArgs = {
  field: GraphQLSourceFieldsEnum;
};


type GraphQLSourceConnection_sumArgs = {
  field: GraphQLSourceFieldsEnum;
};


type GraphQLSourceConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: GraphQLSourceFieldsEnum;
};

type GraphQLSourceEdge = {
  readonly next: Maybe<GraphQLSource>;
  readonly node: GraphQLSource;
  readonly previous: Maybe<GraphQLSource>;
};

type GraphQLSourceFieldsEnum =
  | 'id'
  | 'parent.id'
  | 'parent.parent.id'
  | 'parent.parent.parent.id'
  | 'parent.parent.parent.children'
  | 'parent.parent.children'
  | 'parent.parent.children.id'
  | 'parent.parent.children.children'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.children'
  | 'parent.children.id'
  | 'parent.children.parent.id'
  | 'parent.children.parent.children'
  | 'parent.children.children'
  | 'parent.children.children.id'
  | 'parent.children.children.children'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'children'
  | 'children.id'
  | 'children.parent.id'
  | 'children.parent.parent.id'
  | 'children.parent.parent.children'
  | 'children.parent.children'
  | 'children.parent.children.id'
  | 'children.parent.children.children'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.children'
  | 'children.children.id'
  | 'children.children.parent.id'
  | 'children.children.parent.children'
  | 'children.children.children'
  | 'children.children.children.id'
  | 'children.children.children.children'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type'
  | 'typeName'
  | 'fieldName';

type GraphQLSourceGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<GraphQLSourceEdge>;
  readonly nodes: ReadonlyArray<GraphQLSource>;
  readonly pageInfo: PageInfo;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};

type GraphQLSourceFilterInput = {
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
  readonly typeName: Maybe<StringQueryOperatorInput>;
  readonly fieldName: Maybe<StringQueryOperatorInput>;
};

type GraphQLSourceSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<GraphQLSourceFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type SiteBuildMetadataConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<SiteBuildMetadataEdge>;
  readonly nodes: ReadonlyArray<SiteBuildMetadata>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<SiteBuildMetadataGroupConnection>;
};


type SiteBuildMetadataConnection_distinctArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


type SiteBuildMetadataConnection_maxArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


type SiteBuildMetadataConnection_minArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


type SiteBuildMetadataConnection_sumArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


type SiteBuildMetadataConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: SiteBuildMetadataFieldsEnum;
};

type SiteBuildMetadataEdge = {
  readonly next: Maybe<SiteBuildMetadata>;
  readonly node: SiteBuildMetadata;
  readonly previous: Maybe<SiteBuildMetadata>;
};

type SiteBuildMetadataFieldsEnum =
  | 'id'
  | 'parent.id'
  | 'parent.parent.id'
  | 'parent.parent.parent.id'
  | 'parent.parent.parent.children'
  | 'parent.parent.children'
  | 'parent.parent.children.id'
  | 'parent.parent.children.children'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.children'
  | 'parent.children.id'
  | 'parent.children.parent.id'
  | 'parent.children.parent.children'
  | 'parent.children.children'
  | 'parent.children.children.id'
  | 'parent.children.children.children'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'children'
  | 'children.id'
  | 'children.parent.id'
  | 'children.parent.parent.id'
  | 'children.parent.parent.children'
  | 'children.parent.children'
  | 'children.parent.children.id'
  | 'children.parent.children.children'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.children'
  | 'children.children.id'
  | 'children.children.parent.id'
  | 'children.children.parent.children'
  | 'children.children.children'
  | 'children.children.children.id'
  | 'children.children.children.children'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type'
  | 'buildTime';

type SiteBuildMetadataGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<SiteBuildMetadataEdge>;
  readonly nodes: ReadonlyArray<SiteBuildMetadata>;
  readonly pageInfo: PageInfo;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};

type SiteBuildMetadataFilterInput = {
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
  readonly buildTime: Maybe<DateQueryOperatorInput>;
};

type SiteBuildMetadataSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<SiteBuildMetadataFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type SitePluginConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<SitePluginEdge>;
  readonly nodes: ReadonlyArray<SitePlugin>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<SitePluginGroupConnection>;
};


type SitePluginConnection_distinctArgs = {
  field: SitePluginFieldsEnum;
};


type SitePluginConnection_maxArgs = {
  field: SitePluginFieldsEnum;
};


type SitePluginConnection_minArgs = {
  field: SitePluginFieldsEnum;
};


type SitePluginConnection_sumArgs = {
  field: SitePluginFieldsEnum;
};


type SitePluginConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: SitePluginFieldsEnum;
};

type SitePluginEdge = {
  readonly next: Maybe<SitePlugin>;
  readonly node: SitePlugin;
  readonly previous: Maybe<SitePlugin>;
};

type SitePluginFieldsEnum =
  | 'id'
  | 'parent.id'
  | 'parent.parent.id'
  | 'parent.parent.parent.id'
  | 'parent.parent.parent.children'
  | 'parent.parent.children'
  | 'parent.parent.children.id'
  | 'parent.parent.children.children'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.children'
  | 'parent.children.id'
  | 'parent.children.parent.id'
  | 'parent.children.parent.children'
  | 'parent.children.children'
  | 'parent.children.children.id'
  | 'parent.children.children.children'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'children'
  | 'children.id'
  | 'children.parent.id'
  | 'children.parent.parent.id'
  | 'children.parent.parent.children'
  | 'children.parent.children'
  | 'children.parent.children.id'
  | 'children.parent.children.children'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.children'
  | 'children.children.id'
  | 'children.children.parent.id'
  | 'children.children.parent.children'
  | 'children.children.children'
  | 'children.children.children.id'
  | 'children.children.children.children'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type'
  | 'resolve'
  | 'name'
  | 'version'
  | 'pluginOptions.isTSX'
  | 'pluginOptions.jsxPragma'
  | 'pluginOptions.allExtensions'
  | 'pluginOptions.name'
  | 'pluginOptions.path'
  | 'pluginOptions.component'
  | 'pluginOptions.typeName'
  | 'pluginOptions.fieldName'
  | 'pluginOptions.url'
  | 'pluginOptions.headers.Authorization'
  | 'pluginOptions.test'
  | 'pluginOptions.options.emitWarning'
  | 'pluginOptions.options.failOnError'
  | 'pluginOptions.options.extensions'
  | 'pluginOptions.options.exclude'
  | 'pluginOptions.files'
  | 'pluginOptions.short_name'
  | 'pluginOptions.start_url'
  | 'pluginOptions.background_color'
  | 'pluginOptions.theme_color'
  | 'pluginOptions.display'
  | 'pluginOptions.icon'
  | 'pluginOptions.legacy'
  | 'pluginOptions.theme_color_in_head'
  | 'pluginOptions.cache_busting_mode'
  | 'pluginOptions.crossOrigin'
  | 'pluginOptions.include_favicon'
  | 'pluginOptions.cacheDigest'
  | 'pluginOptions.base64Width'
  | 'pluginOptions.stripMetadata'
  | 'pluginOptions.defaultQuality'
  | 'pluginOptions.failOnError'
  | 'pluginOptions.fonts'
  | 'pluginOptions.pathCheck'
  | 'nodeAPIs'
  | 'browserAPIs'
  | 'ssrAPIs'
  | 'pluginFilepath'
  | 'packageJson.name'
  | 'packageJson.description'
  | 'packageJson.version'
  | 'packageJson.main'
  | 'packageJson.license'
  | 'packageJson.dependencies'
  | 'packageJson.dependencies.name'
  | 'packageJson.dependencies.version'
  | 'packageJson.devDependencies'
  | 'packageJson.devDependencies.name'
  | 'packageJson.devDependencies.version'
  | 'packageJson.peerDependencies'
  | 'packageJson.peerDependencies.name'
  | 'packageJson.peerDependencies.version'
  | 'packageJson.keywords';

type SitePluginGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<SitePluginEdge>;
  readonly nodes: ReadonlyArray<SitePlugin>;
  readonly pageInfo: PageInfo;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};

type SitePluginSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<SitePluginFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type BackgroundQueryVariables = Exact<{ [key: string]: never; }>;


type BackgroundQuery = { readonly image: Maybe<Pick<File, 'publicURL'>> };

type IconsQueryVariables = Exact<{ [key: string]: never; }>;


type IconsQuery = { readonly graphCmsData: { readonly icons: ReadonlyArray<(
      Pick<GRAPHCMS_Icon, 'id' | 'url' | 'title'>
      & { readonly image: Pick<GRAPHCMS_Asset, 'url'> }
    )> } };

type SEOQueryVariables = Exact<{ [key: string]: never; }>;


type SEOQuery = { readonly site: Maybe<{ readonly siteMetadata: Maybe<Pick<SiteSiteMetadata, 'title' | 'description' | 'author' | 'keywords'>> }> };

type ProjectsQueryVariables = Exact<{ [key: string]: never; }>;


type ProjectsQuery = { readonly graphCmsData: { readonly projects: ReadonlyArray<(
      Pick<GRAPHCMS_Project, 'id' | 'title' | 'liveLink' | 'srcLink' | 'year'>
      & { readonly localizations: ReadonlyArray<Pick<GRAPHCMS_Project, 'locale' | 'description'>>, readonly image: Pick<GRAPHCMS_Asset, 'handle' | 'width' | 'height'>, readonly technologies: ReadonlyArray<(
        Pick<GRAPHCMS_Technology, 'id' | 'name'>
        & { readonly image: Pick<GRAPHCMS_Asset, 'url'> }
      )> }
    )> } };

type GatsbyImageSharpFixedFragment = Pick<ImageSharpFixed, 'base64' | 'width' | 'height' | 'src' | 'srcSet'>;

type GatsbyImageSharpFixed_tracedSVGFragment = Pick<ImageSharpFixed, 'tracedSVG' | 'width' | 'height' | 'src' | 'srcSet'>;

type GatsbyImageSharpFixed_withWebpFragment = Pick<ImageSharpFixed, 'base64' | 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>;

type GatsbyImageSharpFixed_withWebp_tracedSVGFragment = Pick<ImageSharpFixed, 'tracedSVG' | 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>;

type GatsbyImageSharpFixed_noBase64Fragment = Pick<ImageSharpFixed, 'width' | 'height' | 'src' | 'srcSet'>;

type GatsbyImageSharpFixed_withWebp_noBase64Fragment = Pick<ImageSharpFixed, 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>;

type GatsbyImageSharpFluidFragment = Pick<ImageSharpFluid, 'base64' | 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>;

type GatsbyImageSharpFluidLimitPresentationSizeFragment = { maxHeight: ImageSharpFluid['presentationHeight'], maxWidth: ImageSharpFluid['presentationWidth'] };

type GatsbyImageSharpFluid_tracedSVGFragment = Pick<ImageSharpFluid, 'tracedSVG' | 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>;

type GatsbyImageSharpFluid_withWebpFragment = Pick<ImageSharpFluid, 'base64' | 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>;

type GatsbyImageSharpFluid_withWebp_tracedSVGFragment = Pick<ImageSharpFluid, 'tracedSVG' | 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>;

type GatsbyImageSharpFluid_noBase64Fragment = Pick<ImageSharpFluid, 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>;

type GatsbyImageSharpFluid_withWebp_noBase64Fragment = Pick<ImageSharpFluid, 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>;

type TechnologiesQueryVariables = Exact<{ [key: string]: never; }>;


type TechnologiesQuery = { readonly graphCmsData: { readonly technologies: ReadonlyArray<(
      Pick<GRAPHCMS_Technology, 'id' | 'name'>
      & { readonly image: Pick<GRAPHCMS_Asset, 'url'> }
    )> } };

type PagesQueryQueryVariables = Exact<{ [key: string]: never; }>;


type PagesQueryQuery = { readonly allSiteFunction: { readonly nodes: ReadonlyArray<Pick<SiteFunction, 'apiRoute'>> }, readonly allSitePage: { readonly nodes: ReadonlyArray<Pick<SitePage, 'path'>> } };

}