import { axios } from '@/lib/axios';
import { TProperty } from '@/types/property';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { ExternalToast, toast } from 'sonner';

const createProperty = (
  data: Partial<TProperty>
): Promise<Partial<TProperty>> => axios.post('/properties', data);

const getMyProperties = (): Promise<Partial<TProperty[]>> =>
  axios.get('/properties/my-properties');

const getProperty = (id: string): Promise<Partial<TProperty>> =>
  axios.get(`/properties/${id}`);

const getAllProperties = (): Promise<Partial<TProperty[]>> =>
  axios.get('/properties');

const editProperty = (data: Partial<TProperty>): Promise<Partial<TProperty>> =>
  axios.put(`/properties/${data.id}`, data);

const deleteProperty = (id: string): Promise<unknown> =>
  axios.delete(`/properties/${id}`);

export const useCreateProperty = () => {
  const queryClient = useQueryClient();

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

export const useGetProperty = (id: string) => {
  return useQuery({
    queryKey: ['property', id],
    queryFn: () => getProperty(id),
  });
};

export const useGetAllProperties = () => {
  return useQuery({
    queryKey: ['all-properties'],
    queryFn: getAllProperties,
  });
};

export const useEditProperty = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: editProperty,
    onSuccess() {
      queryClient.invalidateQueries({ queryKey: ['my-properties'] });
      toast.success('Property updated', {
        position: 'bottom-right' as ExternalToast['position'],
      });
    },
  });
};

export const useTogglePropertyStatus = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: editProperty,
    onSuccess() {
      queryClient.invalidateQueries({ queryKey: ['my-properties'] });
      toast.success('Status updated', {
        position: 'bottom-right' as ExternalToast['position'],
      });
    },
  });
};

export const useDeleteProperty = () => {
  const queryClient = useQueryClient();

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
