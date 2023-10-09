import {useMutation, useQueryClient} from "@tanstack/react-query";
import toast from "react-hot-toast";
import {deleteBooking as deleteBookingApi} from "../../services/apiBookings.js";

export function useDeleteBooking() {
    const queryClient = useQueryClient();
    const {mutate: deleteBooking, isLoading: isDeletingBooking} = useMutation({
        mutationFn: (id) => deleteBookingApi(id),
        onSuccess: () => {
            toast.success(`Booking successfully deleted`);
            queryClient.invalidateQueries({
                queryKey: ['bookings']
            })
        },
        onError: () => toast.error('There was an error while deleting the booking')
    })

    return {deleteBooking, isDeletingBooking}
}