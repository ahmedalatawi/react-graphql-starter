import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  Date: { input: any; output: any; }
};

export type BatchPayload = {
  __typename?: 'BatchPayload';
  count?: Maybe<Scalars['Int']['output']>;
};

export type Celebrity = {
  __typename?: 'Celebrity';
  bio?: Maybe<Scalars['String']['output']>;
  birthPlace?: Maybe<Scalars['String']['output']>;
  dateOfBirth: Scalars['Date']['output'];
  editable?: Maybe<Scalars['Boolean']['output']>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  photoUrl?: Maybe<Scalars['String']['output']>;
};

export type CreateCelebrityInput = {
  bio?: InputMaybe<Scalars['String']['input']>;
  birthPlace?: InputMaybe<Scalars['String']['input']>;
  dateOfBirth: Scalars['Date']['input'];
  editable?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  name: Scalars['String']['input'];
  photoUrl?: InputMaybe<Scalars['String']['input']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createCelebrity?: Maybe<Celebrity>;
  deleteAllCelebrities?: Maybe<BatchPayload>;
  deleteCelebrity?: Maybe<Celebrity>;
  updateCelebrity?: Maybe<Celebrity>;
};


export type MutationCreateCelebrityArgs = {
  celebrity: CreateCelebrityInput;
};


export type MutationDeleteCelebrityArgs = {
  id: Scalars['ID']['input'];
};


export type MutationUpdateCelebrityArgs = {
  celebrity: UpdateCelebrityInput;
};

export type Query = {
  __typename?: 'Query';
  celebrities?: Maybe<Array<Maybe<Celebrity>>>;
  celebrity?: Maybe<Celebrity>;
};


export type QueryCelebrityArgs = {
  id: Scalars['ID']['input'];
};

export type UpdateCelebrityInput = {
  bio?: InputMaybe<Scalars['String']['input']>;
  birthPlace?: InputMaybe<Scalars['String']['input']>;
  dateOfBirth: Scalars['Date']['input'];
  id?: InputMaybe<Scalars['ID']['input']>;
  name: Scalars['String']['input'];
  photoUrl?: InputMaybe<Scalars['String']['input']>;
};

export type CelebrityFragment = { __typename?: 'Celebrity', id: string, name: string, bio?: string | null, dateOfBirth: any, birthPlace?: string | null, photoUrl?: string | null, editable?: boolean | null };

export type CreateCelebrityMutationVariables = Exact<{
  celebrity: CreateCelebrityInput;
}>;


export type CreateCelebrityMutation = { __typename?: 'Mutation', createCelebrity?: { __typename?: 'Celebrity', id: string, name: string } | null };

export type CelebritiesQueryVariables = Exact<{ [key: string]: never; }>;


export type CelebritiesQuery = { __typename?: 'Query', celebrities?: Array<{ __typename?: 'Celebrity', id: string, name: string, birthPlace?: string | null, dateOfBirth: any, photoUrl?: string | null } | null> | null };

export const CelebrityFragmentDoc = gql`
    fragment Celebrity on Celebrity {
  id
  name
  bio
  dateOfBirth
  birthPlace
  photoUrl
  editable
}
    `;
export const CreateCelebrityDocument = gql`
    mutation createCelebrity($celebrity: CreateCelebrityInput!) {
  createCelebrity(celebrity: $celebrity) {
    id
    name
  }
}
    `;
export type CreateCelebrityMutationFn = Apollo.MutationFunction<CreateCelebrityMutation, CreateCelebrityMutationVariables>;

/**
 * __useCreateCelebrityMutation__
 *
 * To run a mutation, you first call `useCreateCelebrityMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateCelebrityMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createCelebrityMutation, { data, loading, error }] = useCreateCelebrityMutation({
 *   variables: {
 *      celebrity: // value for 'celebrity'
 *   },
 * });
 */
export function useCreateCelebrityMutation(baseOptions?: Apollo.MutationHookOptions<CreateCelebrityMutation, CreateCelebrityMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateCelebrityMutation, CreateCelebrityMutationVariables>(CreateCelebrityDocument, options);
      }
export type CreateCelebrityMutationHookResult = ReturnType<typeof useCreateCelebrityMutation>;
export type CreateCelebrityMutationResult = Apollo.MutationResult<CreateCelebrityMutation>;
export type CreateCelebrityMutationOptions = Apollo.BaseMutationOptions<CreateCelebrityMutation, CreateCelebrityMutationVariables>;
export const CelebritiesDocument = gql`
    query celebrities {
  celebrities {
    id
    name
    birthPlace
    dateOfBirth
    photoUrl
  }
}
    `;

/**
 * __useCelebritiesQuery__
 *
 * To run a query within a React component, call `useCelebritiesQuery` and pass it any options that fit your needs.
 * When your component renders, `useCelebritiesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCelebritiesQuery({
 *   variables: {
 *   },
 * });
 */
export function useCelebritiesQuery(baseOptions?: Apollo.QueryHookOptions<CelebritiesQuery, CelebritiesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<CelebritiesQuery, CelebritiesQueryVariables>(CelebritiesDocument, options);
      }
export function useCelebritiesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CelebritiesQuery, CelebritiesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<CelebritiesQuery, CelebritiesQueryVariables>(CelebritiesDocument, options);
        }
export function useCelebritiesSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<CelebritiesQuery, CelebritiesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<CelebritiesQuery, CelebritiesQueryVariables>(CelebritiesDocument, options);
        }
export type CelebritiesQueryHookResult = ReturnType<typeof useCelebritiesQuery>;
export type CelebritiesLazyQueryHookResult = ReturnType<typeof useCelebritiesLazyQuery>;
export type CelebritiesSuspenseQueryHookResult = ReturnType<typeof useCelebritiesSuspenseQuery>;
export type CelebritiesQueryResult = Apollo.QueryResult<CelebritiesQuery, CelebritiesQueryVariables>;