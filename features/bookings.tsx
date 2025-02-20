import { axios } from '@/lib/axios';
import { TProperty } from '@/types/property';
import { useMutation, useQuery } from '@tanstack/react-query';
import { queryClient } from '@/lib/react-query';
import { ExternalToast, toast } from 'sonner';
import { TBooking } from '@/types/booking';

const updateBookingStatus = ({
  id,
  status,
}: {
  id: string;
  status: 'CONFIRMED' | 'CANCELED' | 'COMPLETED' | 'REJECTED';
}): Promise<Partial<TBooking>> =>
  axios.put(`/bookings/${id}/status`, { status });

const getMyBookingsAsHost = (): Promise<Array<TBooking>> =>
  axios.get('/bookings/host-bookings');

// const editProperty = (data: Partial<TProperty>): Promise<Partial<TProperty>> =>
//   axios.put(`/properties/${data.id}`, data);

// const deleteProperty = (id: string): Promise<unknown> =>
//   axios.delete(`/properties/${id}`);

export const useUpdateBookingStatus = () => {
  return useMutation({
    mutationFn: updateBookingStatus,
    onSuccess() {
      queryClient.invalidateQueries({ queryKey: ['my-bookings'] });
      toast.success('Booking updated', {
        position: 'bottom-right' as ExternalToast['position'],
      });
    },
  });
};

export const useGetMyBookings = () =>
  useQuery({
    queryKey: ['my-bookings'],
    queryFn: getMyBookingsAsHost,
  });

// export const useEditProperty = () => {
//   return useMutation({
//     mutationFn: editProperty,
//     onSuccess() {
//       queryClient.invalidateQueries({ queryKey: ['my-properties'] });
//       toast.success('Property updated', {
//         position: 'bottom-right' as ExternalToast['position'],
//       });
//     },
//   });
// };

// export const useTogglePropertyStatus = () => {
//   return useMutation({
//     mutationFn: editProperty,
//     onSuccess() {
//       queryClient.invalidateQueries({ queryKey: ['my-properties'] });
//       toast.success('Status updated', {
//         position: 'bottom-right' as ExternalToast['position'],
//       });
//     },
//   });
// };

// export const useDeleteProperty = () => {
//   return useMutation({
//     mutationFn: deleteProperty,
//     onSuccess() {
//       queryClient.invalidateQueries({ queryKey: ['my-properties'] });
//       toast.success('Property deleted', {
//         position: 'bottom-right' as ExternalToast['position'],
//       });
//     },
//   });
// };
