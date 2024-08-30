import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
interface SousApp {
    _id: string;
    name: string;
    description: string;
    logo: string;
}
interface AppData {
    sousApps: SousApp[];
}
interface ApiResponse {
    message: string;
    data: {
        apps: {
            Algeria: AppData;
        };
    };
}

export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://api-dev.temtem.one/api/v3' }),
    endpoints: (builder) => ({
        getAlgerianApps: builder.query<AppData, void>({
            query: () => '/businessCategories/v2?country=Algeria',
            transformResponse: (response: ApiResponse) => response.data.apps.Algeria
        }),
    }),
});

export const { useGetAlgerianAppsQuery } = apiSlice;