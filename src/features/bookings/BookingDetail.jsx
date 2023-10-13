import styled from "styled-components";

import BookingDataBox from "./BookingDataBox.jsx";
import Row from "../../ui/Row";
import Heading from "../../ui/Heading";
import Tag from "../../ui/Tag.jsx";
import ButtonGroup from "../../ui/ButtonGroup.jsx";
import Button from "../../ui/Button.jsx";
import ButtonText from "../../ui/ButtonText.jsx";

import {useMoveBack} from "../../hooks/useMoveBack.js";
import {useBooking} from "./useBooking.js";
import Spinner from "../../ui/Spinner.jsx";
import {HiArrowDownOnSquare, HiTrash} from "react-icons/hi2";
import {useNavigate} from "react-router-dom";
import {useCheckout} from "../check-in-out/useCheckout.js";
import Modal from "../../ui/Modal.jsx";
import ConfirmDelete from "../../ui/ConfirmDelete.jsx";
import {useDeleteBooking} from "./useDeleteBooking.js";
import Empty from "../../ui/Empty.jsx";

const HeadingGroup = styled.div`
  display: flex;
  gap: 2.4rem;
  align-items: center;
`;

function BookingDetail() {
    const {booking, isLoading} = useBooking();
    const {checkout, isCheckingOut} = useCheckout();
    const {deleteBooking, isDeletingBooking} = useDeleteBooking();
    const navigate = useNavigate();
    const moveBack = useMoveBack();


    if (isLoading) return <Spinner/>;

    if (!!booking === false) return <Empty resource='booking'/>;

    const {status, id: bookingId} = booking;

    const statusToTagName = {
        unconfirmed: "blue",
        "checked-in": "green",
        "checked-out": "silver",
    };
    return (
        <>
            <Row type="horizontal">
                <HeadingGroup>
                    <Heading as="h1">Booking #{bookingId}</Heading>
                    <Tag type={statusToTagName[status]}>{status?.replace("-", " ")}</Tag>
                </HeadingGroup>
                <ButtonText onClick={moveBack}>&larr; Back</ButtonText>
            </Row>

            <BookingDataBox booking={booking}/>

            <ButtonGroup>
                {status === 'unconfirmed' &&
                    <Button icon={<HiArrowDownOnSquare/>}
                            onClick={() => navigate(`/checkin/${bookingId}`)}>
                        Check in
                    </Button>
                }
                {status === 'checked-in' &&
                    <Button icon={<HiArrowDownOnSquare/>}
                            disabled={isCheckingOut}
                            onClick={() => checkout(bookingId)}>
                        Check out
                    </Button>
                }
                <Modal>
                    <Modal.Open opens='delete'>
                        <Button icon={<HiTrash/>} variation='danger'>
                            Delete booking
                        </Button>
                    </Modal.Open>
                    <Modal.Window name='delete'>
                        <ConfirmDelete resourceName='booking'
                                       disabled={isDeletingBooking}
                                       onConfirm={() => {
                                           deleteBooking(bookingId, {
                                               onSuccess: () => navigate(-1)
                                           });
                                       }}/>
                    </Modal.Window>
                </Modal>
                <Button variation="secondary" onClick={moveBack}>
                    Back
                </Button>
            </ButtonGroup>
        </>
    );
}

export default BookingDetail;
