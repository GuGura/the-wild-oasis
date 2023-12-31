import {useState} from "react";

import Button from "../../ui/Button.jsx";
import FileInput from "../../ui/FileInput.jsx";
import Form from "../../ui/Form.jsx";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";

import {useUser} from "./useUser";
import {useUpdateUser} from "./useUpdateUser.js";

function UpdateUserDataForm() {
    // We don't need the loading state, and can immediately use the user data, because we know that it has already been loaded at this point
    const {
        user: {
            email,
            user_metadata: {fullName: currentFullName},
        },
    } = useUser();

    const {updateUser, isUpdating} = useUpdateUser()
    const [fullName, setFullName] = useState(currentFullName);
    const [avatar, setAvatar] = useState(null);

    function handleSubmit(e) {
        e.preventDefault();
        console.log(avatar)
        if (!fullName) return;
        updateUser({fullName, avatar}, {
            onSuccess: () => {
                setAvatar(null);
                e.target.reset();
            }
        })
    }

    function handleCancel() {
        setFullName(null)
        setAvatar(null)
    }

    return (
        <Form onSubmit={handleSubmit}>
            <FormRow label="Email address">
                <Input value={email} disabled/>
            </FormRow>
            <FormRow label="Full name">
                <Input
                    type="text"
                    value={fullName}
                    disabled={isUpdating}
                    onChange={(e) => setFullName(e.target.value)}
                    id="fullName"
                />
            </FormRow>
            <FormRow label="Avatar image">
                <FileInput
                    id="avatar"
                    disabled={isUpdating}
                    accept="image/*"
                    onChange={(e) => setAvatar(e.target.files[0])}
                />
            </FormRow>
            <FormRow>
                <Button type="reset"
                        variation="secondary"
                        onClick={handleCancel}
                        disabled={isUpdating}>
                    Cancel
                </Button>
                <Button disabled={isUpdating}>Update account</Button>
            </FormRow>
        </Form>
    );
}

export default UpdateUserDataForm;
