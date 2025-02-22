import { axios } from '@/lib/axios';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
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

const createBooking = ({
  propertyId,
  checkIn,
  checkOut,
}: {
  propertyId: string;
  checkIn: string;
  checkOut: string;
}): Promise<Partial<TBooking>> =>
  axios.post(`/bookings`, { propertyId, checkIn, checkOut });

const getMyBookingsAsHost = (): Promise<Array<TBooking>> =>
  axios.get('/bookings/host-bookings');

const getMyBookingsAsRenter = (): Promise<Array<TBooking>> =>
  axios.get('/bookings/my-bookings');

// const editProperty = (data: Partial<TProperty>): Promise<Partial<TProperty>> =>
//   axios.put(`/properties/${data.id}`, data);

// const deleteProperty = (id: string): Promise<unknown> =>
//   axios.delete(`/properties/${id}`);

export const useGetMyBookings = () =>
  useQuery({
    queryKey: ['my-bookings'],
    queryFn: getMyBookingsAsHost,
  });

export const useGetMyBookingsAsRenter = () =>
  useQuery({
    queryKey: ['renter-bookings'],
    queryFn: getMyBookingsAsRenter,
  });

export const useUpdateBookingStatus = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: updateBookingStatus,
    onSuccess() {
      queryClient.invalidateQueries({
        queryKey: ['my-bookings', 'renter-bookings'],
      });
      toast.success('Booking updated', {
        position: 'bottom-right' as ExternalToast['position'],
      });
    },
  });
};

export const useCreateBooking = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: createBooking,
    onSuccess(data) {
      console.log(data, 'From here');
      queryClient.invalidateQueries({
        queryKey: ['my-bookings', 'renter-bookings', 'my-properties'],
      });
      if (data) {
        toast.success('Reservation made', {
          position: 'bottom-right' as ExternalToast['position'],
        });
      }
    },
  });
};

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
