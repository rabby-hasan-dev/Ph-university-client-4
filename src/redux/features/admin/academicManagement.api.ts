
import { TQueryParams, TResponseRedux } from "../../../types";
import { TAcademicSemester } from "../../../types/academicSemester.types";
import { baseApi } from "../../api/baseApi";


const academicManagementApi = baseApi.injectEndpoints({

    endpoints: (builder) => ({
        getAllAcademicSemester: builder.query({
            query: (args) => {

                const params= new URLSearchParams();

                if(args){
                    args.forEach((item:TQueryParams)=>
                      {
                        params.append(item.name, item.value as string)
                      }
                    )
                }
               
              

                return {
                    url: '/academic-semesters',
                    method: "GET",
                    params: params
                }

            },
            transformResponse: (response: TResponseRedux<TAcademicSemester[]>) => {

                return {
                    data: response.data,
                    meta: response.meta
                };
            }
        }),


        addAcademicSemester: builder.mutation({
            query: (data) => ({
                url: '/academic-semesters/create-academic-semester',
                method: "POST",
                body: data
            })
        })
    }),

})



export const { useGetAllAcademicSemesterQuery, useAddAcademicSemesterMutation } = academicManagementApi;