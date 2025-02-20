import { axios } from '@/lib/axios';
import { TProperty } from '@/types/property';
import { useMutation } from '@tanstack/react-query';

const createProperty = (
  data: Partial<TProperty>
): Promise<Partial<TProperty>> => axios.post('/properties', data);

const editProperty = (data: Partial<TProperty>): Promise<Partial<TProperty>> =>
  axios.put(`/properties/${data.id}`, data);

const deleteProperty = (id: number): Promise<unknown> =>
  axios.delete(`/properties/${id}`);

export const useCreateProperty = () => {
  return useMutation({
    mutationFn: createProperty,
  });
};

export const useEditProperty = () => {
  return useMutation({
    mutationFn: editProperty,
  });
};

export const useTogglePropertyStatus = () => {
  return useMutation({
    mutationFn: editProperty,
  });
};

export const useDeleteProperty = () => {
  return useMutation({
    mutationFn: deleteProperty,
  });
};
