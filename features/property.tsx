import { axios } from '@/lib/axios';
import { TProperty } from '@/types/property';
import { useMutation, useQuery } from '@tanstack/react-query';
import { queryClient } from '@/lib/react-query';
import { ExternalToast, toast } from 'sonner';

const createProperty = (
  data: Partial<TProperty>
): Promise<Partial<TProperty>> => axios.post('/properties', data);

const getMyProperties = (): Promise<Partial<TProperty[]>> =>
  axios.get('/properties/my-properties');

const editProperty = (data: Partial<TProperty>): Promise<Partial<TProperty>> =>
  axios.put(`/properties/${data.id}`, data);

const deleteProperty = (id: string): Promise<unknown> =>
  axios.delete(`/properties/${id}`);

export const useCreateProperty = () => {
  return useMutation({
    mutationFn: createProperty,
    onSuccess() {
      queryClient.invalidateQueries({ queryKey: ['my-properties'] });
    },
  });
};

export const useGetMyProperties = () => {
  return useQuery({
    queryKey: ['my-properties'],
    queryFn: getMyProperties,
  });
};

export const useEditProperty = () => {
  return useMutation({
    mutationFn: editProperty,
    onSuccess() {
      queryClient.invalidateQueries({ queryKey: ['my-properties'] });
    },
  });
};

export const useTogglePropertyStatus = () => {
  return useMutation({
    mutationFn: editProperty,
    onSuccess() {
      queryClient.invalidateQueries({ queryKey: ['my-properties'] });
    },
  });
};

export const useDeleteProperty = () => {
  return useMutation({
    mutationFn: deleteProperty,
    onSuccess() {
      queryClient.invalidateQueries({ queryKey: ['my-properties'] });
      toast.success('Property deleted', {
        position: 'bottom-right' as ExternalToast['position'],
      });
    },
  });
};
